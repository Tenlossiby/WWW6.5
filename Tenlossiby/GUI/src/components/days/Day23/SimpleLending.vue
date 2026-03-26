<template>
  <div class="day-23-content day-content">
    <!-- 消息提示 -->
    <div class="message-toast" v-if="message" :class="{ error: isError }">
      {{ message }}
    </div>

    <div class="content-layout" :class="{ 'single-column': unlockedConcepts.length === 0 }">
      <!-- 左栏：核心交互区域 -->
      <div class="left-column">
        <div class="interaction-area">
          <!-- 1. 合约架构可视化 -->
          <div class="architecture-section" @click="handleArchitectureClick">
            <h4>📊 合约架构 - 点击了解重入锁保护</h4>
            <div class="arch-flow">
              <div class="flow-box user">
                <div class="box-icon">👤</div>
                <div class="box-label">用户</div>
              </div>
              <div class="flow-arrow">→</div>
              <div class="flow-box contract">
                <div class="box-icon">🏦</div>
                <div class="box-label">SimpleLending</div>
                <div class="lock-badge">🔒 重入锁保护</div>
              </div>
              <div class="flow-arrow">→</div>
              <div class="flow-box funds">
                <div class="box-icon">💰</div>
                <div class="box-label">资金池</div>
              </div>
            </div>
          </div>

          <!-- 2. 用户资产概览 -->
          <div class="assets-overview">
            <div class="asset-card">
              <div class="asset-label">💼 钱包余额</div>
              <div class="asset-value">{{ walletBalance.toFixed(4) }} ETH</div>
            </div>
            <div class="asset-card">
              <div class="asset-label">💰 存款余额</div>
              <div class="asset-value">{{ depositBalance.toFixed(4) }} ETH</div>
            </div>
            <div class="asset-card">
              <div class="asset-label">🏦 抵押余额</div>
              <div class="asset-value">{{ collateralBalance.toFixed(4) }} ETH</div>
            </div>
            <div class="asset-card" :class="healthStatus.status">
              <div class="asset-label">💸 当前债务</div>
              <div class="asset-value">{{ currentDebt.toFixed(6) }} ETH</div>
              <div class="health-indicator" v-if="borrowBalance > 0">
                {{ healthStatus.icon }} {{ healthStatus.label }} ({{ healthFactor.toFixed(2) }})
              </div>
            </div>
          </div>

          <!-- 3. 操作标签页 -->
          <div class="operation-tabs">
            <button
              v-for="tab in tabs"
              :key="tab.key"
              :class="{ active: activeTab === tab.key }"
              @click="activeTab = tab.key"
            >
              {{ tab.icon }} {{ tab.label }}
            </button>
          </div>

          <!-- 4. 操作面板 -->
          <div class="operation-panel">
            <!-- 存款/取款 -->
            <div v-if="activeTab === 'deposit'" class="tab-content">
              <div class="operation-row">
                <div class="operation-box">
                  <h5>💰 存款</h5>
                  <input
                    v-model.number="depositAmount"
                    type="number"
                    step="0.1"
                    min="0"
                    placeholder="输入ETH数量"
                  />
                  <button class="day-action-btn green full-width" @click="handleDeposit">
                    存入 ETH
                  </button>
                </div>
                <div class="operation-box">
                  <h5>💵 取款</h5>
                  <input
                    v-model.number="withdrawAmount"
                    type="number"
                    step="0.1"
                    min="0"
                    placeholder="输入ETH数量"
                  />
                  <button class="day-action-btn blue full-width" @click="handleWithdraw">
                    取出 ETH
                  </button>
                </div>
              </div>
              <div class="info-text">
                💡 存款为资金池提供流动性，您可以随时取回
              </div>
            </div>

            <!-- 抵押品 -->
            <div v-if="activeTab === 'collateral'" class="tab-content">
              <div class="operation-row">
                <div class="operation-box">
                  <h5>🏦 存入抵押</h5>
                  <input
                    v-model.number="collateralDepositAmount"
                    type="number"
                    step="0.1"
                    min="0"
                    placeholder="输入ETH数量"
                  />
                  <button class="day-action-btn purple full-width" @click="handleDepositCollateral">
                    存入抵押
                  </button>
                </div>
                <div class="operation-box">
                  <h5>🔓 取出抵押</h5>
                  <input
                    v-model.number="collateralWithdrawAmount"
                    type="number"
                    step="0.1"
                    min="0"
                    placeholder="输入ETH数量"
                  />
                  <button class="day-action-btn orange full-width" @click="handleWithdrawCollateral">
                    取出抵押
                  </button>
                </div>
              </div>
              <div class="collateral-info">
                <div class="info-row">
                  <span>抵押率:</span>
                  <span class="highlight">75%</span>
                  <span class="hint">(可借出抵押品价值的75%)</span>
                </div>
                <div class="info-row">
                  <span>最大可借:</span>
                  <span class="highlight">{{ maxBorrowAmount.toFixed(4) }} ETH</span>
                </div>
                <div class="info-row">
                  <span>剩余可借:</span>
                  <span class="highlight">{{ remainingBorrowAmount.toFixed(4) }} ETH</span>
                </div>
              </div>
            </div>

            <!-- 借款/还款 -->
            <div v-if="activeTab === 'borrow'" class="tab-content">
              <div class="operation-row">
                <div class="operation-box">
                  <h5>💸 借款</h5>
                  <input
                    v-model.number="borrowAmount"
                    type="number"
                    step="0.1"
                    min="0"
                    :max="remainingBorrowAmount"
                    placeholder="输入ETH数量"
                  />
                  <button class="day-action-btn orange full-width" @click="handleBorrow">
                    申请借款
                  </button>
                </div>
                <div class="operation-box">
                  <h5>✅ 还款</h5>
                  <input
                    v-model.number="repayAmount"
                    type="number"
                    step="0.1"
                    min="0"
                    placeholder="输入ETH数量"
                  />
                  <button class="day-action-btn green full-width" @click="handleRepay">
                    偿还债务
                  </button>
                </div>
              </div>
              <div class="debt-info">
                <div class="info-row">
                  <span>借款本金:</span>
                  <span>{{ borrowBalance.toFixed(6) }} ETH</span>
                </div>
                <div class="info-row">
                  <span>累积利息:</span>
                  <span class="interest">+{{ accruedInterest.toFixed(6) }} ETH</span>
                </div>
                <div class="info-row">
                  <span>总债务:</span>
                  <span class="debt">{{ currentDebt.toFixed(6) }} ETH</span>
                </div>
                <div class="info-row">
                  <span>年利率:</span>
                  <span class="highlight">5% (500基点)</span>
                </div>
                <div class="interest-hint">
                  ⏱️ 利息每秒都在累积，请及时还款！
                </div>
              </div>
            </div>

            <!-- 合约状态 -->
            <div v-if="activeTab === 'status'" class="tab-content">
              <div class="status-panel">
                <h5>📊 合约状态监控</h5>
                <div class="status-grid">
                  <div class="status-item">
                    <div class="status-label">合约总流动性</div>
                    <div class="status-value">{{ contractLiquidity.toFixed(4) }} ETH</div>
                  </div>
                  <div class="status-item">
                    <div class="status-label">总存款</div>
                    <div class="status-value">{{ depositBalance.toFixed(4) }} ETH</div>
                  </div>
                  <div class="status-item">
                    <div class="status-label">总借款</div>
                    <div class="status-value">{{ borrowBalance.toFixed(4) }} ETH</div>
                  </div>
                  <div class="status-item">
                    <div class="status-label">利用率</div>
                    <div class="status-value">
                      {{ depositBalance > 0 ? ((borrowBalance / depositBalance) * 100).toFixed(2) : 0 }}%
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- 5. 事件日志 -->
          <div class="event-logs">
            <h5>📜 事件日志</h5>
            <div class="logs-container">
              <div v-if="eventLogs.length === 0" class="no-logs">
                暂无事件记录
              </div>
              <div
                v-for="(log, index) in eventLogs.slice(0, 10)"
                :key="index"
                class="log-item"
              >
                <span class="log-time">{{ log.timestamp }}</span>
                <span class="log-type">{{ log.eventType }}</span>
                <span class="log-details">{{ log.details }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 右栏：知识面板 -->
      <div class="right-column">
        <KnowledgePanel
          v-if="unlockedConcepts.length > 0"
          :current-day="23"
          :unlocked-concepts="unlockedConcepts"
          :progress-percentage="progressPercentage"
          :full-code="fullCode"
          :custom-hint="currentHint"
          @show-full-code="handleShowFullCode"
        />
      </div>
    </div>

    <!-- 完整代码弹窗 -->
    <FullCodeModal
      v-if="showFullCode"
      :show="true"
      :code="fullCode"
      title="SimpleLending 完整代码"
      @close="showFullCode = false"
    />
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useDay23 } from '@/composables/useDay23'
import { useProgressStore } from '@/stores/progressStore'
import { getFullCode } from '@/data/days'
import KnowledgePanel from '@/components/shared/KnowledgePanel.vue'
import FullCodeModal from '@/components/shared/FullCodeModal.vue'

const progressStore = useProgressStore()

// 使用 Day23 composable
const {
  walletBalance,
  depositBalance,
  collateralBalance,
  borrowBalance,
  contractLiquidity,
  eventLogs,
  accruedInterest,
  currentDebt,
  maxBorrowAmount,
  remainingBorrowAmount,
  healthFactor,
  healthStatus,
  deposit,
  withdraw,
  depositCollateral,
  withdrawCollateral,
  borrow,
  repay
} = useDay23()

// ========== 状态 ==========
const activeTab = ref('deposit')
const message = ref('')
const isError = ref(false)
const currentHint = ref('')
const showFullCode = ref(false)

// 输入值
const depositAmount = ref('')
const withdrawAmount = ref('')
const collateralDepositAmount = ref('')
const collateralWithdrawAmount = ref('')
const borrowAmount = ref('')
const repayAmount = ref('')

// 标签页配置
const tabs = [
  { key: 'deposit', label: '存款/取款', icon: '💰' },
  { key: 'collateral', label: '抵押品', icon: '🏦' },
  { key: 'borrow', label: '借款/还款', icon: '💸' },
  { key: 'status', label: '合约状态', icon: '📊' }
]

// ========== 计算属性 ==========
const unlockedConcepts = computed(() => {
  const progress = progressStore.getDayProgress(23)
  return progress?.unlockedConcepts || []
})

const progressPercentage = computed(() => {
  const progress = progressStore.getDayProgress(23)
  if (!progress || progress.totalConcepts === 0) return 0
  return Math.round((progress.unlockedConcepts.length / progress.totalConcepts) * 100)
})

const fullCode = computed(() => getFullCode(23))

// ========== 辅助函数 ==========
const showMessage = (msg, error = false) => {
  message.value = msg
  isError.value = error
  setTimeout(() => {
    message.value = ''
  }, 3000)
}

// ========== 事件处理 ==========

// 点击架构图
const handleArchitectureClick = () => {
  if (!progressStore.isConceptUnlocked(23, 'lending_pool')) {
    progressStore.unlockConcept(23, 'lending_pool')
    currentHint.value = '🏦 你了解了借贷池！📍 向下滚动到「💰 存款」区块存入资产！'
    showMessage('✅ 已解锁：借贷池！')
  }
}

// 存款
const handleDeposit = () => {
  const amount = parseFloat(depositAmount.value)
  const result = deposit(amount)

  if (result.success) {
    showMessage(result.message)
    result.hints.forEach(hint => progressStore.unlockConcept(23, hint))
    currentHint.value = result.nextStep
    depositAmount.value = ''
  } else {
    showMessage(result.message, true)
  }
}

// 取款
const handleWithdraw = () => {
  const amount = parseFloat(withdrawAmount.value)
  const result = withdraw(amount)

  if (result.success) {
    showMessage(result.message)
    result.hints.forEach(hint => progressStore.unlockConcept(23, hint))
    currentHint.value = result.nextStep
    withdrawAmount.value = ''
  } else {
    showMessage(result.message, true)
  }
}

// 存入抵押
const handleDepositCollateral = () => {
  const amount = parseFloat(collateralDepositAmount.value)
  const result = depositCollateral(amount)

  if (result.success) {
    showMessage(result.message)
    result.hints.forEach(hint => progressStore.unlockConcept(23, hint))
    currentHint.value = result.nextStep
    collateralDepositAmount.value = ''
  } else {
    showMessage(result.message, true)
  }
}

// 取出抵押
const handleWithdrawCollateral = () => {
  const amount = parseFloat(collateralWithdrawAmount.value)
  const result = withdrawCollateral(amount)

  if (result.success) {
    showMessage(result.message)
    result.hints.forEach(hint => progressStore.unlockConcept(23, hint))
    currentHint.value = result.nextStep
    collateralWithdrawAmount.value = ''
  } else {
    showMessage(result.message, true)
  }
}

// 借款
const handleBorrow = () => {
  const amount = parseFloat(borrowAmount.value)
  const result = borrow(amount)

  if (result.success) {
    showMessage(result.message)
    result.hints.forEach(hint => progressStore.unlockConcept(23, hint))
    currentHint.value = result.nextStep
    borrowAmount.value = ''
  } else {
    showMessage(result.message, true)
  }
}

// 还款
const handleRepay = () => {
  const amount = parseFloat(repayAmount.value)
  const result = repay(amount)

  if (result.success) {
    showMessage(result.message)
    result.hints.forEach(hint => progressStore.unlockConcept(23, hint))
    currentHint.value = result.nextStep
    repayAmount.value = ''
  } else {
    showMessage(result.message, true)
  }
}

// 查看完整代码
const handleShowFullCode = () => {
  showFullCode.value = true
  showMessage('✅ 已查看完整代码！')
  currentHint.value = '📖 查看完整代码回顾所有知识点！'
}

// ========== 生命周期 ==========
let interestInterval

onMounted(() => {
  // 初始提示
  if (unlockedConcepts.value.length === 0) {
    currentHint.value = '👆 欢迎来到 Day 23！点击架构图了解 DeFi 借贷平台的核心安全机制！'
  }

  // 每秒更新利息显示
  interestInterval = setInterval(() => {
    // 触发响应式更新
  }, 1000)
})

onUnmounted(() => {
  if (interestInterval) {
    clearInterval(interestInterval)
  }
})
</script>

<style scoped>
/* 架构图样式 */
.architecture-section {
  background: rgba(34, 197, 94, 0.1);
  border: 1px solid rgba(34, 197, 94, 0.3);
  border-radius: 12px;
  padding: 20px;
  margin-bottom: 20px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.architecture-section:hover {
  background: rgba(34, 197, 94, 0.15);
  border-color: rgba(34, 197, 94, 0.5);
}

.architecture-section h4 {
  color: #22c55e;
  margin: 0 0 15px 0;
  text-align: center;
}

.arch-flow {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
}

.flow-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px 20px;
  border-radius: 10px;
  background: var(--bg-surface-1);
  border: 1px solid var(--border-main);
  min-width: 100px;
}

.flow-box.user {
  border-color: #3b82f6;
}

.flow-box.contract {
  border-color: #22c55e;
  position: relative;
}

.flow-box.funds {
  border-color: #f59e0b;
}

.box-icon {
  font-size: 24px;
  margin-bottom: 5px;
}

.box-label {
  font-size: 14px;
  color: var(--text-main);
}

.lock-badge {
  position: absolute;
  top: -8px;
  right: -8px;
  background: #22c55e;
  color: white;
  font-size: 10px;
  padding: 2px 6px;
  border-radius: 10px;
}

.flow-arrow {
  font-size: 20px;
  color: var(--text-muted);
}

/* 资产概览 */
.assets-overview {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 15px;
  margin-bottom: 20px;
}

.asset-card {
  background: var(--bg-surface-2);
  border: 1px solid var(--border-main);
  border-radius: 10px;
  padding: 15px;
  text-align: center;
}

.asset-card.safe {
  border-color: #22c55e;
  background: rgba(34, 197, 94, 0.1);
}

.asset-card.warning {
  border-color: #eab308;
  background: rgba(234, 179, 8, 0.1);
}

.asset-card.danger {
  border-color: #ef4444;
  background: rgba(239, 68, 68, 0.1);
}

.asset-label {
  font-size: 12px;
  color: var(--text-muted);
  margin-bottom: 5px;
}

.asset-value {
  font-size: 18px;
  font-weight: 600;
  color: var(--text-main);
}

.health-indicator {
  font-size: 11px;
  margin-top: 5px;
  padding: 2px 8px;
  border-radius: 10px;
  display: inline-block;
}

/* 标签页 */
.operation-tabs {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  padding-bottom: 10px;
}

.operation-tabs button {
  padding: 10px 20px;
  border: none;
  background: rgba(255, 255, 255, 0.05);
  color: var(--text-muted);
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.operation-tabs button:hover {
  background: rgba(255, 255, 255, 0.1);
  color: var(--text-main);
}

.operation-tabs button.active {
  background: #22c55e;
  color: white;
}

/* 操作面板 */
.operation-panel {
  background: rgba(255, 255, 255, 0.03);
  border-radius: 12px;
  padding: 20px;
  margin-bottom: 20px;
}

.tab-content {
  animation: fadeIn 0.3s ease;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}

.operation-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin-bottom: 20px;
}

.operation-box {
  background: var(--bg-surface-2);
  border: 1px solid var(--border-main);
  border-radius: 10px;
  padding: 20px;
}

.operation-box h5 {
  margin: 0 0 15px 0;
  color: var(--text-main);
}

.operation-box input {
  width: 100%;
  padding: 10px;
  border: 1px solid var(--border-main);
  background: var(--bg-surface-1);
  color: var(--text-main);
  border-radius: 6px;
  margin-bottom: 10px;
  box-sizing: border-box;
}

.operation-box input:focus {
  outline: none;
  border-color: var(--accent-green);
}

/* 信息文本 */
.info-text {
  background: rgba(100, 116, 139, 0.15);
  border: 1px solid rgba(100, 116, 139, 0.3);
  border-radius: 8px;
  padding: 12px 16px;
  text-align: center;
  color: var(--text-muted);
  font-size: 14px;
  margin-top: 10px;
}

.collateral-info,
.debt-info {
  background: var(--bg-surface-2);
  border: 1px solid var(--border-main);
  border-radius: 8px;
  padding: 15px;
}

.info-row {
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
  font-size: 14px;
}

.info-row span:first-child {
  color: var(--text-muted);
}

.info-row span:last-child {
  color: var(--text-main);
  font-weight: 500;
}

.highlight {
  color: #22c55e !important;
}

.interest {
  color: #f97316 !important;
}

.debt {
  color: #ef4444 !important;
}

.hint {
  font-size: 12px;
  color: var(--text-muted);
}

.interest-hint {
  text-align: center;
  color: #f97316;
  font-size: 13px;
  margin-top: 10px;
  padding-top: 10px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

/* 状态面板 */
.status-panel h5 {
  margin: 0 0 15px 0;
  color: var(--text-main);
}

.status-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 15px;
}

.status-item {
  background: var(--bg-surface-2);
  border: 1px solid var(--border-main);
  border-radius: 8px;
  padding: 15px;
  text-align: center;
}

.status-label {
  font-size: 12px;
  color: var(--text-muted);
  margin-bottom: 5px;
}

.status-value {
  font-size: 18px;
  font-weight: 600;
  color: #22c55e;
}

/* 事件日志 */
.event-logs {
  background: rgba(255, 255, 255, 0.03);
  border-radius: 12px;
  padding: 20px;
}

.event-logs h5 {
  margin: 0 0 15px 0;
  color: var(--text-main);
}

.logs-container {
  max-height: 200px;
  overflow-y: auto;
}

.no-logs {
  text-align: center;
  color: var(--text-muted);
  padding: 20px;
}

.log-item {
  display: flex;
  gap: 10px;
  padding: 8px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  font-size: 13px;
}

.log-time {
  color: var(--text-muted);
  min-width: 80px;
}

.log-type {
  color: #22c55e;
  min-width: 100px;
  font-weight: 500;
}

.log-details {
  color: var(--text-muted);
  flex: 1;
}

/* 响应式 */
@media (max-width: 768px) {
  .operation-row {
    grid-template-columns: 1fr;
  }

  .arch-flow {
    flex-direction: column;
    gap: 10px;
  }

  .flow-arrow {
    transform: rotate(90deg);
  }

  .assets-overview {
    grid-template-columns: repeat(2, 1fr);
  }

  .status-grid {
    grid-template-columns: 1fr;
  }
}
</style>
