<template>
  <div class="day-24-content day-content">
    <!-- 消息提示 -->
    <div class="message-toast" v-if="message" :class="{ error: isError }">
      {{ message }}
    </div>

    <div class="content-layout" :class="{ 'single-column': unlockedConcepts.length === 0 }">
      <!-- 左侧：交互操作区 -->
      <div class="left-column">
        <!-- 合约架构可视化 -->
        <div class="architecture-section" @click="handleArchitectureClick">
          <h4>📊 合约架构 - 点击了解状态机设计</h4>
          <div class="arch-flow">
            <div class="flow-box buyer">
              <div class="box-icon">👤</div>
              <div class="box-label">Buyer</div>
              <div class="box-sublabel">买家</div>
            </div>
            <div class="flow-arrow">→</div>
            <div class="flow-box contract">
              <div class="box-icon">🏦</div>
              <div class="box-label">Escrow</div>
              <div class="box-sublabel">托管合约</div>
            </div>
            <div class="flow-arrow">←</div>
            <div class="flow-box seller">
              <div class="box-icon">👤</div>
              <div class="box-label">Seller</div>
              <div class="box-sublabel">卖家</div>
            </div>
          </div>
          <div class="arbiter-row">
            <div class="flow-box arbiter">
              <div class="box-icon">⚖️</div>
              <div class="box-label">Arbiter</div>
              <div class="box-sublabel">仲裁者</div>
            </div>
          </div>
          <p class="arch-hint">💡 这是一个三方托管系统，资金由合约保管直到交易完成或取消</p>
        </div>

        <!-- 三角色切换栏 -->
        <div class="role-switcher">
          <span class="role-label">🎭 当前身份：</span>
          <button
            v-for="role in roles"
            :key="role.key"
            :class="{ active: currentRole === role.key }"
            @click="handleSwitchRole(role.key)"
          >
            {{ role.icon }} {{ role.label }}
          </button>
        </div>

        <!-- 当前角色功能说明 -->
        <div class="role-functions">
          <span class="function-label">当前角色功能：</span>
          <span class="function-list">{{ currentRoleFunctions }}</span>
        </div>

        <!-- 状态流转图 -->
        <div class="state-flow-section">
          <h4>📈 当前状态: {{ stateLabels[escrowState] }}</h4>
          <div class="state-flow">
            <div
              v-for="(state, index) in stateFlow"
              :key="state.key"
              class="state-node"
              :class="{ active: escrowState === state.key, passed: isStatePassed(state.key) }"
            >
              {{ state.label }}
            </div>
          </div>
        </div>

        <!-- 资金流转面板 -->
        <div class="funds-section" @click="handleFundsClick">
          <h4>💰 资金状态（点击查看immutable与权限控制）</h4>
          <div class="funds-flow">
            <div class="fund-item">
              <span class="fund-label">Buyer钱包</span>
              <span class="fund-value">{{ funds.buyerWallet.toFixed(2) }} ETH</span>
            </div>
            <div class="fund-arrow" v-if="funds.escrowAmount > 0">↓</div>
            <div class="fund-item escrow" v-if="funds.escrowAmount > 0">
              <span class="fund-label">Escrow托管</span>
              <span class="fund-value">{{ funds.escrowAmount.toFixed(2) }} ETH</span>
            </div>
            <div class="fund-arrow" v-if="funds.escrowAmount > 0">↓</div>
            <div class="fund-item">
              <span class="fund-label">Seller钱包</span>
              <span class="fund-value">{{ funds.sellerWallet.toFixed(2) }} ETH</span>
            </div>
          </div>
          <p class="funds-status">状态: {{ fundsStatusText }}</p>
        </div>

        <!-- 操作区 -->
        <div class="operation-section">
          <h4>🎮 操作区 - {{ currentRoleLabel }}</h4>

          <!-- AWAITING_PAYMENT 状态 - Buyer -->
          <div v-if="escrowState === 'AWAITING_PAYMENT' && currentRole === 'buyer'" class="operation-group">
            <div class="input-group">
              <label>存款金额:</label>
              <input v-model.number="depositAmount" type="number" step="0.1" min="0.1" placeholder="输入ETH数量" />
              <span class="unit">ETH</span>
            </div>
            <div class="button-group">
              <button class="btn-primary" @click="handleDeposit" :disabled="!canDeposit">
                💰 存款 / Deposit
              </button>
              <button class="btn-secondary" @click="handleCancelMutual">
                ❌ 协商取消 / Cancel Mutual
              </button>
            </div>
          </div>

          <!-- AWAITING_DELIVERY 状态 - Buyer -->
          <div v-else-if="escrowState === 'AWAITING_DELIVERY' && currentRole === 'buyer'" class="operation-group">
            <div class="escrow-info">
              <p>托管金额: {{ escrowInfo.amount.toFixed(2) }} ETH</p>
              <p>存款时间: {{ depositTimeFormatted }}</p>
            </div>
            <div class="button-group">
              <button class="btn-success" @click="handleConfirmDelivery">
                ✅ 确认收货 / Confirm
              </button>
              <button class="btn-warning" @click="handleRaiseDispute">
                ⚠️ 发起争议 / Dispute
              </button>
              <button class="btn-danger" @click="handleCancelAfterTimeout" :disabled="!isTimeout">
                ⏱️ 超时取消 / Timeout
              </button>
            </div>
          </div>

          <!-- AWAITING_DELIVERY 状态 - Seller -->
          <div v-else-if="escrowState === 'AWAITING_DELIVERY' && currentRole === 'seller'" class="operation-group">
            <div class="escrow-info">
              <p>托管金额: {{ escrowInfo.amount.toFixed(2) }} ETH</p>
              <p class="waiting-text">等待买家确认后释放给你</p>
            </div>
            <div class="button-group">
              <button class="btn-warning" @click="handleRaiseDispute">
                ⚠️ 发起争议 / Dispute
              </button>
              <button class="btn-secondary" @click="handleCancelMutual">
                ❌ 协商取消 / Cancel Mutual
              </button>
            </div>
          </div>

          <!-- DISPUTED 状态 - Arbiter -->
          <div v-else-if="escrowState === 'DISPUTED' && currentRole === 'arbiter'" class="operation-group">
            <div class="escrow-info">
              <p>争议状态: 买家和卖家发生纠纷</p>
              <p>托管金额: {{ escrowInfo.amount.toFixed(2) }} ETH</p>
            </div>
            <div class="button-group">
              <button class="btn-success" @click="() => handleResolveDispute(true)">
                🟢 资金给卖家 (买家违约)
              </button>
              <button class="btn-danger" @click="() => handleResolveDispute(false)">
                🔴 资金退买家 (卖家违约)
              </button>
            </div>
          </div>

          <!-- 其他状态提示 -->
          <div v-else class="operation-group">
            <div class="status-message" :class="escrowState.toLowerCase()">
              <span v-if="escrowState === 'COMPLETE'">✅ 交易已完成</span>
              <span v-else-if="escrowState === 'CANCELLED'">❌ 交易已取消</span>
              <span v-else>当前状态下 {{ currentRoleLabel }} 无可执行操作</span>
            </div>
            <button v-if="escrowState === 'COMPLETE' || escrowState === 'CANCELLED'" class="btn-primary" @click="handleReset">
              🔄 开始新交易 / Start New
            </button>
          </div>
        </div>

        <!-- 超时倒计时 -->
        <div v-if="escrowState === 'AWAITING_DELIVERY'" class="countdown-section" @click="handleCountdownClick">
          <h4>⏱️ 超时倒计时（点击查看区块时间戳）</h4>
          <div class="countdown-display">
            <span class="time-left">{{ formattedTimeLeft }}</span>
          </div>
          <div class="progress-bar">
            <div class="progress-fill" :style="{ width: countdownProgress + '%' }"></div>
          </div>
          <p class="countdown-hint">超时后买家可以取消交易并取回资金</p>
        </div>

        <!-- 事件日志 -->
        <div class="event-log-section">
          <h4>📜 事件日志</h4>
          <div class="event-list">
            <div v-for="(event, index) in eventLog" :key="index" class="event-item" :class="event.type.toLowerCase()">
              <span class="event-badge">{{ getEventBadge(event.type) }}</span>
              <span class="event-content">{{ formatEvent(event) }}</span>
            </div>
            <div v-if="eventLog.length === 0" class="event-empty">
              暂无事件记录
            </div>
          </div>
        </div>

        <!-- receive函数说明区 -->
        <div class="receive-section" @click="handleReceiveClick">
          <h4>🛡️ 安全防护 - 拒绝直接转账（点击查看）</h4>
          <div class="code-block">
            <pre>receive() external payable {
    revert("Direct payments not allowed");
}</pre>
          </div>
          <p class="receive-hint">合约拒绝直接ETH转账，必须通过deposit()函数存款</p>
        </div>
      </div>

      <!-- 右侧：知识面板（容器始终渲染） -->
      <div class="right-column">
        <KnowledgePanel
          v-if="unlockedConcepts.length > 0"
          :current-day="24"
          :unlocked-concepts="unlockedConcepts"
          :progress-percentage="progressPercentage"
          :full-code="fullCode"
          :custom-hint="currentHint"
          @show-full-code="handleShowFullCode"
        />
      </div>
    </div>
  </div>

  <!-- 完整代码弹窗 -->
  <FullCodeModal
    :show="showFullCode"
    :code="fullCode"
    title="EnhancedSimpleEscrow 完整代码"
    @close="showFullCode = false"
  />
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useDay24 } from '@/composables/useDay24'
import { useProgressStore } from '@/stores/progressStore'
import { getFullCode } from '@/data/days'
import { getDay24Hint, day24ConceptDefinitions } from '@/data/concepts'
import KnowledgePanel from '@/components/shared/KnowledgePanel.vue'
import FullCodeModal from '@/components/shared/FullCodeModal.vue'

const progressStore = useProgressStore()

const {
  escrowState,
  currentRole,
  funds,
  escrowInfo,
  eventLog,
  unlockedConcepts,
  timeLeft,
  isTimeout,
  progressPercentage,
  deposit,
  confirmDelivery,
  raiseDispute,
  resolveDispute,
  cancelAfterTimeout,
  cancelMutual,
  switchRole,
  resetEscrow
} = useDay24()

// 本地状态
const depositAmount = ref(1.0)
const currentHint = ref('')
const showFullCode = ref(false)
const message = ref('')
const isError = ref(false)

// 显示消息
const showMessage = (msg, error = false) => {
  message.value = msg
  isError.value = error
  setTimeout(() => {
    message.value = ''
  }, 3000)
}

// 完整代码
const fullCode = computed(() => getFullCode(24))

// 角色配置
const roles = [
  { key: 'buyer', label: '买家', icon: '👤' },
  { key: 'seller', label: '卖家', icon: '👤' },
  { key: 'arbiter', label: '仲裁者', icon: '⚖️' }
]

// 状态标签
const stateLabels = {
  AWAITING_PAYMENT: '等待付款',
  AWAITING_DELIVERY: '等待发货',
  COMPLETE: '交易完成',
  DISPUTED: '争议中',
  CANCELLED: '已取消'
}

// 状态流转顺序
const stateFlow = [
  { key: 'AWAITING_PAYMENT', label: '等待付款' },
  { key: 'AWAITING_DELIVERY', label: '等待发货' },
  { key: 'COMPLETE', label: '完成' }
]

// 当前角色标签
const currentRoleLabel = computed(() => {
  const role = roles.find(r => r.key === currentRole.value)
  return role ? role.label : currentRole.value
})

// 当前角色功能
const currentRoleFunctions = computed(() => {
  const functions = {
    buyer: '存款、确认收货、发起争议、超时取消',
    seller: '发起争议、协商取消',
    arbiter: '裁决争议'
  }
  return functions[currentRole.value] || ''
})

// 资金状态文本
const fundsStatusText = computed(() => {
  const statusMap = {
    AWAITING_PAYMENT: '等待买家存款',
    AWAITING_DELIVERY: '等待买家确认收货 / 或发起争议 / 或超时取消',
    COMPLETE: '交易已完成，资金已释放',
    DISPUTED: '争议中，等待仲裁',
    CANCELLED: '交易已取消，资金已退回'
  }
  return statusMap[escrowState.value]
})

// 存款时间格式化
const depositTimeFormatted = computed(() => {
  if (!escrowInfo.value.depositTime) return '-'
  return new Date(escrowInfo.value.depositTime).toLocaleString()
})

// 格式化剩余时间
const formattedTimeLeft = computed(() => {
  if (timeLeft.value === 0) return '已超时'
  const hours = Math.floor(timeLeft.value / 3600)
  const minutes = Math.floor((timeLeft.value % 3600) / 60)
  const seconds = Math.floor(timeLeft.value % 60)
  return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
})

// 倒计时进度
const countdownProgress = computed(() => {
  if (escrowState.value !== 'AWAITING_DELIVERY') return 0
  const total = escrowInfo.value.deliveryTimeout
  const remaining = timeLeft.value
  return ((total - remaining) / total) * 100
})

// 是否可以存款
const canDeposit = computed(() => {
  return depositAmount.value > 0 && depositAmount.value <= funds.value.buyerWallet
})

// 检查状态是否已走过
const isStatePassed = (stateKey) => {
  const stateOrder = ['AWAITING_PAYMENT', 'AWAITING_DELIVERY', 'COMPLETE']
  const currentIndex = stateOrder.indexOf(escrowState.value)
  const stateIndex = stateOrder.indexOf(stateKey)
  return stateIndex < currentIndex
}

// 获取事件徽章
const getEventBadge = (type) => {
  const badges = {
    PaymentDeposited: '🟢',
    DeliveryConfirmed: '🟢',
    DisputeRaised: '🟡',
    DisputeResolved: '🟢',
    EscrowCancelled: '🔴'
  }
  return badges[type] || '⚪'
}

// 格式化事件
const formatEvent = (event) => {
  const formatters = {
    PaymentDeposited: () => `PaymentDeposited | buyer: ${event.buyer.slice(0, 10)}... | amount: ${event.amount} ETH`,
    DeliveryConfirmed: () => `DeliveryConfirmed | buyer→seller | amount: ${event.amount} ETH`,
    DisputeRaised: () => `DisputeRaised | initiator: ${event.initiator.slice(0, 10)}...`,
    DisputeResolved: () => `DisputeResolved | arbiter: ${event.arbiter.slice(0, 10)}... | recipient: ${event.recipient.slice(0, 10)}...`,
    EscrowCancelled: () => `EscrowCancelled | reason: ${event.reason} | initiator: ${event.initiator.slice(0, 10)}...`
  }
  return formatters[event.type] ? formatters[event.type]() : event.type
}

// 解锁概念辅助函数
// 获取概念定义
const getConceptDefinition = (key) => {
  return day24ConceptDefinitions[key]
}

const unlockConceptIfNeeded = (conceptKey) => {
  if (!unlockedConcepts.value.includes(conceptKey)) {
    progressStore.unlockConcept(24, conceptKey)
    return true
  }
  return false
}

// 处理架构图点击
const handleArchitectureClick = () => {
  if (unlockConceptIfNeeded('escrow_contract')) {
    showMessage('🎉 解锁「托管合约」！')
  }
  currentHint.value = '📜 你了解了托管合约！📍 向下滚动查看「🎭 角色切换」区块，切换到 Buyer 角色开始交易！'
}

// 处理资金面板点击
const handleFundsClick = () => {
  if (unlockConceptIfNeeded('escrow_contract')) {
    showMessage('🎉 解锁「托管合约」！')
  }
  currentHint.value = '💰 你了解了资金状态！📍 向下滚动查看「⏱️ 超时倒计时」区块了解时间锁机制！'
}

// 处理倒计时点击
const handleCountdownClick = () => {
  if (unlockConceptIfNeeded('time_locked_release')) {
    showMessage('🎉 解锁「时间锁释放」！')
  }
  currentHint.value = '⏰ 你了解了时间锁释放！📍 向下滚动到「🎮 操作区」进行确认收货或发起争议！'
}

// 处理receive区点击
const handleReceiveClick = () => {
  if (unlockConceptIfNeeded('multi_party_security')) {
    showMessage('🎉 解锁「多方安全」！')
    currentHint.value = '🔐 你了解了多方安全！继续探索其他功能解锁更多概念！'
  } else {
    currentHint.value = '🔐 已了解多方安全机制！尝试发起争议或仲裁来体验完整流程！'
  }
}

// 处理显示完整代码
const handleShowFullCode = () => {
  showFullCode.value = true
  showMessage('✅ 已查看完整代码！')
  currentHint.value = '📊 查看完整代码回顾所有知识点！'
}

// 处理角色切换
const handleSwitchRole = (role) => {
  const result = switchRole(role)
  
  // 解锁返回的 hints
  if (result.hints && result.hints.length > 0) {
    result.hints.forEach(hint => {
      if (unlockConceptIfNeeded(hint)) {
        showMessage(`🎉 解锁「${getConceptDefinition(hint)?.name || hint}」！`)
      }
    })
    // 使用 getDay24Hint 显示提示
    currentHint.value = getDay24Hint(result.hints[0])
  } else {
    currentHint.value = result.nextStep
  }
}

// 处理存款
const handleDeposit = () => {
  const result = deposit(depositAmount.value)
  // 解锁escrow_contract
  if (unlockConceptIfNeeded('escrow_contract')) {
    showMessage('🎉 解锁「托管合约」！')
  }
  currentHint.value = result.nextStep || '📝 太棒了！你了解了托管合约！PaymentDeposited事件记录了买家存款，前端可以监听这个事件。事件使用indexed参数，可以通过地址筛选。👉 点击「⏱️ 超时倒计时」区域学习区块时间戳！'
}

// 处理确认收货
const handleConfirmDelivery = () => {
  const result = confirmDelivery()
  // 解锁buyer_seller_arbitration
  if (unlockConceptIfNeeded('buyer_seller_arbitration')) {
    showMessage('🎉 解锁「买卖仲裁」！')
  }
  currentHint.value = result.nextStep || '💸 太棒了！你了解了买卖仲裁！合约使用`(bool sent, ) = payable(seller).call{value: amount}("")`将资金发送给卖家。call比transfer更灵活，可以指定gas限额。👉 点击「🛡️ 安全防护」区域学习receive与revert！'
}

// 处理发起争议
const handleRaiseDispute = () => {
  const result = raiseDispute()
  // 解锁返回的 hints
  if (result.hints && result.hints.length > 0) {
    result.hints.forEach(hint => {
      if (unlockConceptIfNeeded(hint)) {
        showMessage(`🎉 解锁「${getConceptDefinition(hint)?.name || hint}」！`)
      }
    })
    currentHint.value = getDay24Hint(result.hints[0])
  } else {
    currentHint.value = result.nextStep
  }
}

// 处理仲裁裁决
const handleResolveDispute = (releaseToSeller) => {
  const result = resolveDispute(releaseToSeller)
  // 解锁返回的 hints
  if (result.hints && result.hints.length > 0) {
    result.hints.forEach(hint => {
      if (unlockConceptIfNeeded(hint)) {
        showMessage(`🎉 解锁「${getConceptDefinition(hint)?.name || hint}」！`)
      }
    })
    currentHint.value = getDay24Hint(result.hints[0])
  } else {
    currentHint.value = result.nextStep
  }
}

// 处理超时取消
const handleCancelAfterTimeout = () => {
  const result = cancelAfterTimeout()
  // 解锁返回的 hints
  if (result.hints && result.hints.length > 0) {
    result.hints.forEach(hint => {
      if (unlockConceptIfNeeded(hint)) {
        showMessage(`🎉 解锁「${getConceptDefinition(hint)?.name || hint}」！`)
      }
    })
    currentHint.value = getDay24Hint(result.hints[0])
  } else {
    currentHint.value = result.nextStep
  }
}

// 处理协商取消
const handleCancelMutual = () => {
  const result = cancelMutual()
  // 解锁返回的 hints
  if (result.hints && result.hints.length > 0) {
    result.hints.forEach(hint => {
      if (unlockConceptIfNeeded(hint)) {
        showMessage(`🎉 解锁「${getConceptDefinition(hint)?.name || hint}」！`)
      }
    })
    currentHint.value = getDay24Hint(result.hints[0])
  } else {
    currentHint.value = result.nextStep
  }
}

// 处理重置
const handleReset = () => {
  resetEscrow()
  currentHint.value = '🔄 已开始新交易！请按照流程操作：存款 → 确认收货/争议/超时取消'
}

// 初始提示
onMounted(() => {
  if (unlockedConcepts.value.length === 0) {
    currentHint.value = '👆 欢迎来到 Day 24！点击合约架构图了解枚举与状态机！'
  }
})
</script>

<style scoped>
/* 注意：.content-layout, .left-column, .right-column 等布局样式已在全局定义 */
/* 这里只定义 Day 24 特有的样式 */

/* 架构可视化 */
.architecture-section {
  background: var(--bg-surface-2);
  border: 1px solid var(--border-main);
  border-radius: 12px;
  padding: 20px;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-bottom: 20px;
}

.architecture-section:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
}

.architecture-section h4 {
  margin: 0 0 16px 0;
  color: var(--text-main);
  font-size: 16px;
}

.arch-flow {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  margin: 16px 0;
}

.flow-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 12px 20px;
  background: var(--bg-surface-1);
  border-radius: 8px;
  border: 1px solid var(--border-main);
}

.flow-box.buyer {
  border-color: var(--accent-green);
}

.flow-box.seller {
  border-color: #f472b6;
}

.flow-box.contract {
  border-color: var(--accent-blue);
  background: rgba(59, 130, 246, 0.1);
}

.box-icon {
  font-size: 24px;
  margin-bottom: 4px;
}

.box-label {
  font-size: 14px;
  font-weight: 600;
  color: var(--text-main);
}

.box-sublabel {
  font-size: 12px;
  color: var(--text-muted);
}

.flow-arrow {
  font-size: 20px;
  color: var(--text-muted);
}

.arbiter-row {
  display: flex;
  justify-content: center;
  margin-top: 12px;
}

.flow-box.arbiter {
  border-color: #fbbf24;
}

.arch-hint {
  text-align: center;
  color: var(--text-muted);
  font-size: 13px;
  margin-top: 12px;
}

/* 角色切换 */
.role-switcher {
  display: flex;
  align-items: center;
  gap: 12px;
  background: var(--bg-surface-2);
  border: 1px solid var(--border-main);
  padding: 12px 16px;
  border-radius: 8px;
  margin-bottom: 20px;
}

.role-label {
  color: var(--text-muted);
  font-size: 14px;
}

.role-switcher button {
  padding: 8px 16px;
  border-radius: 6px;
  border: 1px solid var(--border-main);
  background: var(--bg-surface-1);
  color: var(--text-muted);
  cursor: pointer;
  transition: all 0.2s;
}

.role-switcher button.active {
  background: var(--accent-blue);
  border-color: var(--accent-blue);
  color: #fff;
}

.role-switcher button:hover:not(.active) {
  background: var(--bg-surface-3);
  color: var(--text-main);
}

.role-functions {
  background: var(--bg-surface-2);
  border: 1px solid var(--border-main);
  padding: 12px 16px;
  border-radius: 8px;
  font-size: 13px;
  margin-bottom: 20px;
}

.function-label {
  color: var(--text-muted);
}

.function-list {
  color: var(--accent-green);
}

/* 状态流转 */
.state-flow-section {
  background: var(--bg-surface-2);
  border: 1px solid var(--border-main);
  border-radius: 12px;
  padding: 16px;
  margin-bottom: 20px;
}

.state-flow-section h4 {
  margin: 0 0 12px 0;
  color: var(--text-main);
  font-size: 14px;
}

.state-flow {
  display: flex;
  gap: 12px;
}

.state-node {
  flex: 1;
  padding: 10px;
  text-align: center;
  background: var(--bg-surface-1);
  border-radius: 6px;
  font-size: 13px;
  color: var(--text-muted);
  border: 1px solid var(--border-main);
}

.state-node.active {
  background: rgba(59, 130, 246, 0.2);
  border-color: var(--accent-blue);
  color: var(--text-main);
}

.state-node.passed {
  background: rgba(34, 197, 94, 0.1);
  border-color: var(--accent-green);
  color: var(--accent-green);
}

/* 资金面板 */
.funds-section {
  background: var(--bg-surface-2);
  border: 1px solid var(--border-main);
  border-radius: 12px;
  padding: 16px;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-bottom: 20px;
}

.funds-section:hover {
  background: var(--bg-surface-3);
}

.funds-section h4 {
  margin: 0 0 12px 0;
  color: var(--text-main);
  font-size: 14px;
}

.funds-flow {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.fund-item {
  display: flex;
  justify-content: space-between;
  padding: 10px 14px;
  background: var(--bg-surface-1);
  border: 1px solid var(--border-main);
  border-radius: 6px;
}

.fund-item.escrow {
  background: rgba(251, 191, 36, 0.1);
  border-color: #fbbf24;
}

.fund-label {
  color: var(--text-muted);
  font-size: 13px;
}

.fund-value {
  color: var(--text-main);
  font-weight: 600;
  font-size: 14px;
}

.fund-arrow {
  text-align: center;
  color: var(--text-muted);
  font-size: 16px;
}

.funds-status {
  margin: 12px 0 0 0;
  color: var(--text-muted);
  font-size: 13px;
  text-align: center;
}

/* 操作区 */
.operation-section {
  background: var(--bg-surface-2);
  border: 1px solid var(--border-main);
  border-radius: 12px;
  padding: 16px;
  margin-bottom: 20px;
}

.operation-section h4 {
  margin: 0 0 16px 0;
  color: var(--text-main);
  font-size: 14px;
}

.operation-group {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.input-group {
  display: flex;
  align-items: center;
  gap: 8px;
}

.input-group label {
  color: var(--text-muted);
  font-size: 13px;
}

.input-group input {
  flex: 1;
  padding: 8px 12px;
  background: var(--bg-surface-1);
  border: 1px solid var(--border-main);
  border-radius: 6px;
  color: var(--text-main);
  font-size: 14px;
}

.input-group input:focus {
  outline: none;
  border-color: var(--accent-blue);
}

.unit {
  color: var(--text-muted);
  font-size: 13px;
}

.button-group {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.button-group button {
  padding: 10px 16px;
  border-radius: 6px;
  border: none;
  font-size: 13px;
  cursor: pointer;
  transition: all 0.2s;
}

.button-group button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.btn-primary {
  background: var(--accent-blue);
  color: #fff;
}

.btn-primary:hover:not(:disabled) {
  background: #2563eb;
}

.btn-success {
  background: var(--accent-green);
  color: #fff;
}

.btn-success:hover {
  background: #16a34a;
}

.btn-warning {
  background: #f59e0b;
  color: #fff;
}

.btn-warning:hover {
  background: #d97706;
}

.btn-danger {
  background: #ef4444;
  color: #fff;
}

.btn-danger:hover:not(:disabled) {
  background: #dc2626;
}

.btn-secondary {
  background: var(--bg-surface-3);
  color: var(--text-muted);
  border: 1px solid var(--border-main);
}

.btn-secondary:hover {
  background: var(--bg-surface-4);
  color: var(--text-main);
}

.escrow-info {
  background: var(--bg-surface-1);
  border: 1px solid var(--border-main);
  padding: 12px;
  border-radius: 6px;
}

.escrow-info p {
  margin: 4px 0;
  color: var(--text-main);
  font-size: 13px;
}

.waiting-text {
  color: #fbbf24;
}

.status-message {
  padding: 16px;
  text-align: center;
  border-radius: 6px;
  font-size: 14px;
}

.status-message.complete {
  background: rgba(34, 197, 94, 0.1);
  border: 1px solid var(--accent-green);
  color: var(--accent-green);
}

.status-message.cancelled {
  background: rgba(239, 68, 68, 0.1);
  border: 1px solid #ef4444;
  color: #ef4444;
}

/* 倒计时 */
.countdown-section {
  background: var(--bg-surface-2);
  border: 1px solid var(--border-main);
  border-radius: 12px;
  padding: 16px;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-bottom: 20px;
}

.countdown-section:hover {
  background: var(--bg-surface-3);
}

.countdown-section h4 {
  margin: 0 0 12px 0;
  color: var(--text-main);
  font-size: 14px;
}

.countdown-display {
  text-align: center;
  margin-bottom: 12px;
}

.time-left {
  font-size: 32px;
  font-weight: 700;
  color: #fbbf24;
  font-family: monospace;
}

.progress-bar {
  height: 8px;
  background: var(--bg-surface-3);
  border-radius: 4px;
  overflow: hidden;
}

.progress-fill {
  height: 100%;
  background: linear-gradient(90deg, #fbbf24, #f59e0b);
  transition: width 1s linear;
}

.countdown-hint {
  margin: 12px 0 0 0;
  color: var(--text-muted);
  font-size: 13px;
  text-align: center;
}

/* 事件日志 */
.event-log-section {
  background: var(--bg-surface-2);
  border: 1px solid var(--border-main);
  border-radius: 12px;
  padding: 16px;
  margin-bottom: 20px;
}

.event-log-section h4 {
  margin: 0 0 12px 0;
  color: var(--text-main);
  font-size: 14px;
}

.event-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
  max-height: 200px;
  overflow-y: auto;
}

.event-item {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  background: var(--bg-surface-1);
  border: 1px solid var(--border-main);
  border-radius: 6px;
  font-size: 12px;
}

.event-badge {
  font-size: 14px;
}

.event-content {
  color: var(--text-main);
  font-family: monospace;
}

.event-empty {
  text-align: center;
  color: var(--text-muted);
  padding: 20px;
  font-size: 13px;
}

/* receive区域 */
.receive-section {
  background: var(--bg-surface-2);
  border: 1px solid var(--border-main);
  border-radius: 12px;
  padding: 16px;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-bottom: 20px;
}

.receive-section:hover {
  background: var(--bg-surface-3);
}

.receive-section h4 {
  margin: 0 0 12px 0;
  color: var(--text-main);
  font-size: 14px;
}

.code-block {
  background: var(--bg-surface-1);
  border: 1px solid var(--border-main);
  border-radius: 6px;
  padding: 12px;
  margin-bottom: 12px;
}

.code-block pre {
  margin: 0;
  color: var(--text-main);
  font-family: 'Fira Code', monospace;
  font-size: 13px;
  line-height: 1.5;
}

.receive-hint {
  margin: 0;
  color: var(--text-muted);
  font-size: 13px;
}

/* 响应式 */
@media (max-width: 768px) {
  .arch-flow {
    flex-wrap: wrap;
  }

  .role-switcher {
    flex-wrap: wrap;
  }

  .state-flow {
    flex-direction: column;
  }

  .button-group {
    flex-direction: column;
  }

  .button-group button {
    width: 100%;
  }
}
</style>
