<template>
  <div class="day-27-content day-content">
    <!-- 消息提示 -->
    <div v-if="message" :class="['message-toast', { error: isError }]">
      {{ message }}
    </div>

    <div class="content-layout" :class="{ 'single-column': unlockedConcepts.length === 0 }">
      <!-- 左栏：交互区域 -->
      <div class="left-column">
        <div class="interaction-area">
          <!-- 1. 收益耕作架构可视化区 -->
          <div class="section architecture-section" @click="handleArchitectureClick">
            <div class="section-header">
              <h4>🌾 收益耕作架构</h4>
              <span class="hover-hint">👆 点击了解奖励债务模式</span>
            </div>
            <div class="architecture-flow">
              <div class="flow-box stake-token">
                <div class="box-icon">🔵</div>
                <div class="box-label">质押代币</div>
                <div class="box-sublabel">STAKE</div>
              </div>
              <div class="flow-arrow">→</div>
              <div class="flow-box farming-contract">
                <div class="box-icon">🌾</div>
                <div class="box-label">YieldFarming</div>
                <div class="box-sublabel">收益耕作合约</div>
                <div class="lock-badge">🛡️ ReentrancyGuard</div>
              </div>
              <div class="flow-arrow">→</div>
              <div class="flow-box reward-token">
                <div class="box-icon">🟢</div>
                <div class="box-label">奖励代币</div>
                <div class="box-sublabel">REWARD</div>
              </div>
            </div>
            <div class="formula-display">
              <div class="formula-label">核心公式:</div>
              <div class="formula">奖励 = 时间差 × 每秒奖励 × 质押量 / 10^decimals</div>
            </div>
          </div>

          <!-- 2. 合约状态与奖励计算面板 -->
          <div class="section status-section" @click="handleStatusClick">
            <div class="section-header">
              <h4>📊 合约状态与奖励计算</h4>
              <span class="hover-hint">👆 点击了解精度处理和时间加权</span>
            </div>
            <div class="status-grid">
              <div class="status-item">
                <span class="status-label">每秒奖励:</span>
                <span class="status-value">{{ rewardRatePerSecond }} REWARD/秒</span>
              </div>
              <div class="status-item">
                <span class="status-label">质押代币小数位:</span>
                <span class="status-value">{{ stakingTokenDecimals }}</span>
              </div>
              <div class="status-item">
                <span class="status-label">合约奖励余额:</span>
                <span class="status-value">{{ rewardPoolBalance.toFixed(2) }} REWARD</span>
              </div>
              <div class="status-item">
                <span class="status-label">总质押量:</span>
                <span class="status-value">{{ totalStaked.toFixed(2) }} STAKE</span>
              </div>
            </div>
            <div class="calculation-demo">
              <div class="calc-title">实时奖励计算演示</div>
              <div class="calc-row">
                <span>时间差:</span>
                <span>{{ timeDiff }} 秒</span>
              </div>
              <div class="calc-row">
                <span>每秒奖励:</span>
                <span>{{ rewardRatePerSecond }}</span>
              </div>
              <div class="calc-row">
                <span>质押数量:</span>
                <span>{{ stakerInfo.stakedAmount.toFixed(2) }} STAKE</span>
              </div>
              <div class="calc-row">
                <span>精度倍数:</span>
                <span>10^{{ stakingTokenDecimals }}</span>
              </div>
              <div class="calc-divider"></div>
              <div class="calc-result">
                新奖励 = {{ timeDiff }} × {{ rewardRatePerSecond }} × {{ stakerInfo.stakedAmount.toFixed(2) }} / 10^{{ stakingTokenDecimals }} = {{ newReward.toFixed(6) }} REWARD
              </div>
              <div class="fast-forward-btns">
                <button class="day-action-btn cyan small" @click.stop="handleFastForward(1)">⏩ 快进1小时</button>
                <button class="day-action-btn cyan small" @click.stop="handleFastForward(24)">⏩ 快进1天</button>
              </div>
            </div>
          </div>

          <!-- 3. Staker 操作区（标签页） -->
          <div v-if="currentRole === 'staker'" class="section operation-section">
            <div class="section-header">
              <h4>🔄 质押操作</h4>
            </div>
            <div class="operation-tabs">
              <button
                v-for="tab in tabs"
                :key="tab.key"
                :class="['tab-btn', { active: activeTab === tab.key }]"
                @click="activeTab = tab.key"
              >
                {{ tab.icon }} {{ tab.label }}
              </button>
            </div>

            <!-- 质押面板 -->
            <div v-if="activeTab === 'stake'" class="operation-panel">
              <div class="form-row">
                <label>可用余额:</label>
                <span class="balance-display">{{ walletBalances.stake.toFixed(2) }} STAKE</span>
              </div>
              <div class="form-row">
                <label>质押数量:</label>
                <input
                  v-model="stakeForm.amount"
                  type="number"
                  placeholder="输入质押数量"
                  class="form-input"
                />
              </div>
              <button class="day-action-btn green" @click="handleStake">💧 质押代币</button>
            </div>

            <!-- 取消质押面板 -->
            <div v-if="activeTab === 'unstake'" class="operation-panel">
              <div class="form-row">
                <label>已质押:</label>
                <span class="balance-display">{{ stakerInfo.stakedAmount.toFixed(2) }} STAKE</span>
              </div>
              <div class="form-row">
                <label>取消数量:</label>
                <input
                  v-model="unstakeForm.amount"
                  type="number"
                  placeholder="输入取消数量"
                  class="form-input"
                />
              </div>
              <button class="day-action-btn orange" @click="handleUnstake">💸 取消质押</button>
            </div>

            <!-- 领取奖励面板 -->
            <div v-if="activeTab === 'claim'" class="operation-panel">
              <div class="form-row">
                <label>待领取奖励:</label>
                <span class="balance-display highlight">{{ pendingRewards.toFixed(6) }} REWARD</span>
              </div>
              <div class="reward-growth" v-if="stakerInfo.stakedAmount > 0">
                <span class="growth-indicator">⏱️ 实时增长中...</span>
              </div>
              <button class="day-action-btn yellow" @click="handleClaimRewards" :disabled="pendingRewards <= 0">
                🎁 领取奖励
              </button>
            </div>
          </div>

          <!-- 4. 安全防护区 -->
          <div class="section security-section" @click="handleSecurityClick">
            <div class="section-header">
              <h4>🛡️ 安全防护机制</h4>
              <span class="hover-hint">👆 点击了解重入保护</span>
            </div>
            <div class="security-features">
              <div class="feature-item">
                <span class="feature-icon">✅</span>
                <span class="feature-text">ReentrancyGuard: 已启用</span>
              </div>
              <div class="feature-item">
                <span class="feature-icon">✅</span>
                <span class="feature-text">Checks-Effects-Interactions: 遵循</span>
              </div>
            </div>
            <div class="emergency-section">
              <button class="day-action-btn red" @click.stop="handleEmergencyWithdraw" :disabled="stakerInfo.stakedAmount <= 0">
                🚨 紧急提取
              </button>
              <p class="emergency-warning">⚠️ 警告: 紧急提取将放弃所有待领取奖励！</p>
            </div>
          </div>

          <!-- 6. 角色切换区 -->
          <div class="section role-section">
            <div class="section-header">
              <h4>👤 角色切换</h4>
            </div>
            <div class="role-toggle">
              <button
                class="role-btn"
                :class="{ active: currentRole === 'staker' }"
                @click="handleToggleRole('staker')"
              >
                <span class="role-icon">👤</span>
                <span class="role-label">Staker</span>
                <span class="role-desc">参与质押</span>
              </button>
              <button
                class="role-btn"
                :class="{ active: currentRole === 'owner' }"
                @click="handleToggleRole('owner')"
              >
                <span class="role-icon">👑</span>
                <span class="role-label">Owner</span>
                <span class="role-desc">管理奖励池</span>
              </button>
            </div>
            <div class="current-role-display">
              当前身份: <span :class="['role-tag', currentRole]">{{ currentRole === 'owner' ? '👑 Owner' : '👤 Staker' }}</span>
            </div>
          </div>

          <!-- 7. Owner 操作区 -->
          <div v-if="currentRole === 'owner'" class="section owner-section">
            <div class="section-header">
              <h4>👑 Owner 操作</h4>
            </div>
            <div class="owner-form">
              <div class="form-row">
                <label>补充奖励池:</label>
                <input
                  v-model="refillForm.amount"
                  type="number"
                  placeholder="输入补充数量"
                  class="form-input"
                />
              </div>
              <button class="day-action-btn cyan" @click="handleRefillRewards">💰 补充奖励</button>
              <div class="pool-status">
                <span>当前奖励池余额: {{ rewardPoolBalance.toFixed(2) }} REWARD</span>
              </div>
            </div>
          </div>

          <!-- 8. 用户资产面板（只读） -->
          <div class="section assets-section">
            <div class="section-header">
              <h4>💰 我的资产</h4>
            </div>
            <div class="assets-grid">
              <div class="asset-item">
                <span class="asset-label">钱包 STAKE:</span>
                <span class="asset-value">{{ walletBalances.stake.toFixed(2) }}</span>
              </div>
              <div class="asset-item">
                <span class="asset-label">已质押:</span>
                <span class="asset-value">{{ stakerInfo.stakedAmount.toFixed(2) }}</span>
              </div>
              <div class="asset-item">
                <span class="asset-label">待领取 REWARD:</span>
                <span class="asset-value highlight">{{ pendingRewards.toFixed(6) }}</span>
                <span v-if="stakerInfo.stakedAmount > 0" class="growth-badge">⏱️</span>
              </div>
              <div class="asset-item">
                <span class="asset-label">已领取:</span>
                <span class="asset-value">{{ walletBalances.reward.toFixed(2) }}</span>
              </div>
            </div>
          </div>

          <!-- 9. 事件日志（只读） -->
          <div class="section events-section">
            <div class="section-header">
              <h4>📜 事件日志</h4>
            </div>
            <div class="events-list">
              <div
                v-for="(event, index) in events"
                :key="index"
                class="event-item"
                :class="event.type"
              >
                <span class="event-icon">{{ event.icon }}</span>
                <span class="event-text">{{ event.message }}</span>
                <span class="event-time">{{ event.time }}</span>
              </div>
              <div v-if="events.length === 0" class="empty-events">
                暂无事件记录
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 右栏：知识面板 -->
      <div class="right-column">
        <KnowledgePanel
          v-if="unlockedConcepts.length > 0"
          :current-day="27"
          :unlocked-concepts="unlockedConcepts"
          :progress-percentage="progressPercentage"
          :full-code="fullCode"
          :custom-hint="currentHint"
          @show-full-code="showFullCode = true"
        />
      </div>
    </div>

    <!-- 完整代码弹窗 -->
    <FullCodeModal
      v-if="showFullCode"
      :show="true"
      :code="fullCode"
      title="YieldFarming 完整代码"
      @close="showFullCode = false"
    />
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useProgressStore } from '../../../stores/progressStore'
import { useDay27 } from '../../../composables/useDay27'
import KnowledgePanel from '../../shared/KnowledgePanel.vue'
import FullCodeModal from '@/components/shared/FullCodeModal.vue'
import { getFullCode } from '../../../data/days'

const progressStore = useProgressStore()

// 获取 Day 27 的解锁概念
const unlockedConcepts = computed(() =>
  progressStore.getDayProgress(27)?.unlockedConcepts || []
)

// 计算 Day 27 的进度百分比
const progressPercentage = computed(() => {
  const progress = progressStore.getDayProgress(27)
  if (!progress || progress.totalConcepts === 0) return 0
  return Math.round((progress.unlockedConcepts.length / progress.totalConcepts) * 100)
})

const {
  rewardRatePerSecond,
  stakingTokenDecimals,
  rewardPoolBalance,
  totalStaked,
  stakerInfo,
  walletBalances,
  currentRole,
  stakeForm,
  unstakeForm,
  refillForm,
  events,
  message,
  isError,
  pendingRewards,
  showMessage,
  toggleRole,
  stake,
  unstake,
  claimRewards,
  emergencyWithdraw,
  refillRewards,
  fastForwardTime
} = useDay27()

const currentHint = ref('')
const showFullCode = ref(false)
const activeTab = ref('stake')

const fullCode = computed(() => getFullCode(27))

// 标签页配置
const tabs = [
  { key: 'stake', label: '质押', icon: '💧' },
  { key: 'unstake', label: '取消质押', icon: '💸' },
  { key: 'claim', label: '领取奖励', icon: '🎁' }
]

// 计算时间差（秒）
const timeDiff = computed(() => {
  return Math.floor((Date.now() - stakerInfo.value.lastUpdate) / 1000)
})

// 计算新奖励
const newReward = computed(() => {
  const td = timeDiff.value
  if (td <= 0 || stakerInfo.value.stakedAmount <= 0) return 0
  const rewardMultiplier = 10 ** stakingTokenDecimals.value
  return (td * rewardRatePerSecond.value * stakerInfo.value.stakedAmount) / rewardMultiplier
})

// 处理架构图点击 - 解锁 reward_debt_pattern
const handleArchitectureClick = () => {
  if (!progressStore.isConceptUnlocked(27, 'reward_debt_pattern')) {
    progressStore.unlockConcept(27, 'reward_debt_pattern')
    showMessage('✅ 已了解奖励债务模式！🎉 恭喜解锁：奖励债务模式！')
    // 提示由 getDay27Hint() 自动生成
  }
}

// 处理合约状态面板点击 - 同时解锁 staking_token_decimals 和 time_weighted_calculation
const handleStatusClick = () => {
  const newUnlocks = []

  if (!progressStore.isConceptUnlocked(27, 'staking_token_decimals')) {
    progressStore.unlockConcept(27, 'staking_token_decimals')
    newUnlocks.push('精度处理')
  }
  if (!progressStore.isConceptUnlocked(27, 'time_weighted_calculation')) {
    progressStore.unlockConcept(27, 'time_weighted_calculation')
    newUnlocks.push('时间加权计算')
  }

  if (newUnlocks.length > 0) {
    const unlockText = newUnlocks.join('、')
    showMessage(`✅ 已了解${unlockText}！🎉 恭喜解锁：${unlockText}！`)
    // 提示由 getDay27Hint() 自动生成
  }
}

// 处理安全防护区点击 - 解锁 reentrancy_guard
const handleSecurityClick = () => {
  if (!progressStore.isConceptUnlocked(27, 'reentrancy_guard')) {
    progressStore.unlockConcept(27, 'reentrancy_guard')
    showMessage('🛡️ 已了解重入保护！🎉 恭喜解锁：重入保护机制！')
    // 提示由 getDay27Hint() 自动生成
  }
}

// 角色切换
const handleToggleRole = (role) => {
  const result = toggleRole(role)
  if (result.success) {
    currentHint.value = result.nextStep
  }
}

// 处理质押
const handleStake = () => {
  const result = stake(stakeForm.value.amount)
  if (result.success) {
    if (!progressStore.isConceptUnlocked(27, 'stake_function')) {
      progressStore.unlockConcept(27, 'stake_function')
      showMessage('✅ 质押成功！🎉 恭喜解锁：质押功能！⏱️ 奖励正在实时累积中！')
    }
    currentHint.value = result.nextStep
    stakeForm.value.amount = ''
  }
}

// 处理取消质押
const handleUnstake = () => {
  const result = unstake(unstakeForm.value.amount)
  if (result.success) {
    if (!progressStore.isConceptUnlocked(27, 'unstake_function')) {
      progressStore.unlockConcept(27, 'unstake_function')
      showMessage('💸 取消质押成功！🎉 恭喜解锁：取消质押功能！')
    }
    currentHint.value = result.nextStep
    unstakeForm.value.amount = ''
  }
}

// 处理领取奖励
const handleClaimRewards = () => {
  const result = claimRewards()
  if (result.success) {
    if (!progressStore.isConceptUnlocked(27, 'claim_rewards')) {
      progressStore.unlockConcept(27, 'claim_rewards')
      showMessage('🎁 奖励领取成功！🎉 恭喜解锁：领取奖励功能！')
    }
    currentHint.value = result.nextStep
  }
}

// 处理紧急提取
const handleEmergencyWithdraw = () => {
  const result = emergencyWithdraw()
  if (result.success) {
    if (!progressStore.isConceptUnlocked(27, 'emergency_withdraw')) {
      progressStore.unlockConcept(27, 'emergency_withdraw')
      showMessage('🚨 紧急提取成功！🎉 恭喜解锁：紧急提取功能！🎉 恭喜完成 Day 27 学习！')
    }
    currentHint.value = result.nextStep
  }
}

// 处理补充奖励
const handleRefillRewards = () => {
  const result = refillRewards(refillForm.value.amount)
  if (result.success) {
    showMessage('💰 奖励池已补充！')
    currentHint.value = result.nextStep
    refillForm.value.amount = ''
  }
}

// 处理时间快进
const handleFastForward = (hours) => {
  const result = fastForwardTime(hours)
  if (result.success) {
    currentHint.value = result.nextStep
  }
}

// 初始提示
onMounted(() => {
  if (unlockedConcepts.value.length === 0) {
    currentHint.value = '🌾 欢迎来到 Day 27！点击架构图了解奖励债务模式！\n📍 提示：重要知识点都在上半部分，建议从上到下依次操作。'
  }
})
</script>

<style scoped>
/* Day 27 特有样式 */

.section {
  background: var(--bg-surface-1);
  border: 1px solid var(--border-main);
  border-radius: 12px;
  padding: 20px;
  margin-bottom: 16px;
  transition: all 0.3s ease;
}

.section:last-child {
  margin-bottom: 0;
}

.section:hover {
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

/* 不同区块的颜色主题 */
.architecture-section {
  background: linear-gradient(135deg, rgba(34, 197, 94, 0.08) 0%, rgba(59, 130, 246, 0.08) 100%);
  border-color: rgba(34, 197, 94, 0.2);
  cursor: pointer;
}

.status-section {
  background: linear-gradient(135deg, rgba(59, 130, 246, 0.08) 0%, rgba(99, 102, 241, 0.08) 100%);
  border-color: rgba(59, 130, 246, 0.2);
  cursor: pointer;
}

.role-section {
  background: linear-gradient(135deg, rgba(168, 85, 247, 0.08) 0%, rgba(236, 72, 153, 0.08) 100%);
  border-color: rgba(168, 85, 247, 0.2);
}

.operation-section {
  background: linear-gradient(135deg, rgba(34, 197, 94, 0.08) 0%, rgba(16, 185, 129, 0.08) 100%);
  border-color: rgba(34, 197, 94, 0.2);
}

.security-section {
  background: linear-gradient(135deg, rgba(239, 68, 68, 0.08) 0%, rgba(248, 113, 113, 0.08) 100%);
  border-color: rgba(239, 68, 68, 0.2);
  cursor: pointer;
}

.owner-section {
  background: linear-gradient(135deg, rgba(234, 179, 8, 0.08) 0%, rgba(245, 158, 11, 0.08) 100%);
  border-color: rgba(234, 179, 8, 0.2);
}

.assets-section {
  background: linear-gradient(135deg, rgba(100, 116, 139, 0.08) 0%, rgba(148, 163, 184, 0.08) 100%);
  border-color: rgba(100, 116, 139, 0.2);
}

.events-section {
  background: linear-gradient(135deg, rgba(100, 116, 139, 0.05) 0%, rgba(148, 163, 184, 0.05) 100%);
  border-color: rgba(100, 116, 139, 0.15);
}

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
}

.section-header h4 {
  margin: 0;
  color: var(--text-main);
  font-size: 16px;
}

.hover-hint {
  font-size: 12px;
  color: var(--text-muted);
  opacity: 0;
  transition: opacity 0.3s;
}

.section:hover .hover-hint {
  opacity: 1;
}

/* 架构流程 */
.architecture-flow {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  margin-bottom: 20px;
  flex-wrap: wrap;
}

.flow-box {
  background: rgba(100, 116, 139, 0.15);
  border: 2px solid rgba(100, 116, 139, 0.3);
  border-radius: 12px;
  padding: 16px 20px;
  text-align: center;
  transition: all 0.3s ease;
  min-width: 100px;
  position: relative;
}

.flow-box.stake-token {
  background: rgba(59, 130, 246, 0.15);
  border-color: rgba(59, 130, 246, 0.3);
}

.flow-box.farming-contract {
  background: rgba(34, 197, 94, 0.15);
  border-color: rgba(34, 197, 94, 0.3);
  min-width: 140px;
}

.flow-box.reward-token {
  background: rgba(245, 158, 11, 0.15);
  border-color: rgba(245, 158, 11, 0.3);
}

.box-icon {
  font-size: 24px;
  margin-bottom: 8px;
}

.box-label {
  font-weight: 600;
  color: var(--text-main);
  font-size: 14px;
}

.box-sublabel {
  font-size: 12px;
  color: var(--text-muted);
  margin-top: 4px;
}

.lock-badge {
  position: absolute;
  top: -8px;
  right: -8px;
  background: rgba(239, 68, 68, 0.9);
  color: white;
  font-size: 10px;
  padding: 2px 6px;
  border-radius: 10px;
  white-space: nowrap;
}

.flow-arrow {
  font-size: 20px;
  color: var(--text-muted);
}

.formula-display {
  background: rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  padding: 12px;
  text-align: center;
}

.formula-label {
  font-size: 12px;
  color: var(--text-muted);
  margin-bottom: 4px;
}

.formula {
  font-family: monospace;
  font-size: 13px;
  color: var(--text-main);
}

/* 状态网格 */
.status-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
  margin-bottom: 20px;
}

.status-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 12px;
  background: rgba(0, 0, 0, 0.1);
  border-radius: 8px;
}

.status-label {
  font-size: 13px;
  color: var(--text-muted);
}

.status-value {
  font-size: 13px;
  font-weight: 600;
  color: var(--text-main);
}

/* 计算演示 */
.calculation-demo {
  background: rgba(0, 0, 0, 0.15);
  border-radius: 8px;
  padding: 16px;
}

.calc-title {
  font-weight: 600;
  color: var(--text-main);
  margin-bottom: 12px;
  text-align: center;
}

.calc-row {
  display: flex;
  justify-content: space-between;
  padding: 4px 0;
  font-size: 13px;
}

.calc-divider {
  height: 1px;
  background: var(--border-main);
  margin: 8px 0;
}

.calc-result {
  font-family: monospace;
  font-size: 12px;
  color: var(--accent-primary);
  text-align: center;
  margin: 12px 0;
}

.fast-forward-btns {
  display: flex;
  gap: 8px;
  justify-content: center;
  margin-top: 12px;
}

/* 角色切换 */
.role-toggle {
  display: flex;
  gap: 12px;
  margin-bottom: 16px;
}

.role-btn {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
  background: rgba(100, 116, 139, 0.1);
  border: 2px solid transparent;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.role-btn:hover {
  background: rgba(100, 116, 139, 0.2);
}

.role-btn.active {
  background: rgba(168, 85, 247, 0.2);
  border-color: rgba(168, 85, 247, 0.5);
}

.role-icon {
  font-size: 24px;
  margin-bottom: 8px;
}

.role-label {
  font-weight: 600;
  color: var(--text-main);
  font-size: 14px;
}

.role-desc {
  font-size: 12px;
  color: var(--text-muted);
  margin-top: 4px;
}

.current-role-display {
  text-align: center;
  padding: 12px;
  background: rgba(0, 0, 0, 0.1);
  border-radius: 8px;
}

.role-tag {
  font-weight: 600;
  padding: 4px 12px;
  border-radius: 16px;
  margin-left: 8px;
}

.role-tag.staker {
  background: rgba(34, 197, 94, 0.2);
  color: #22c55e;
}

.role-tag.owner {
  background: rgba(234, 179, 8, 0.2);
  color: #eab308;
}

/* 操作标签页 */
.operation-tabs {
  display: flex;
  gap: 8px;
  margin-bottom: 16px;
}

.tab-btn {
  flex: 1;
  padding: 10px 16px;
  background: rgba(100, 116, 139, 0.1);
  border: 1px solid transparent;
  border-radius: 8px;
  color: var(--text-muted);
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 13px;
}

.tab-btn:hover {
  background: rgba(100, 116, 139, 0.2);
}

.tab-btn.active {
  background: rgba(34, 197, 94, 0.2);
  border-color: rgba(34, 197, 94, 0.5);
  color: #22c55e;
}

.operation-panel {
  padding: 16px;
  background: rgba(0, 0, 0, 0.1);
  border-radius: 8px;
}

.form-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
}

.form-row label {
  font-size: 13px;
  color: var(--text-muted);
}

.balance-display {
  font-weight: 600;
  color: var(--text-main);
}

.balance-display.highlight {
  color: #f59e0b;
}

.form-input {
  width: 150px;
  padding: 8px 12px;
  background: rgba(0, 0, 0, 0.2);
  border: 1px solid var(--border-main);
  border-radius: 6px;
  color: var(--text-main);
  font-size: 14px;
}

.reward-growth {
  text-align: center;
  margin-bottom: 12px;
}

.growth-indicator {
  font-size: 12px;
  color: #22c55e;
  animation: pulse 1.5s infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}

/* 安全防护 */
.security-features {
  margin-bottom: 16px;
}

.feature-item {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 0;
}

.feature-icon {
  color: #22c55e;
}

.feature-text {
  font-size: 13px;
  color: var(--text-main);
}

.emergency-section {
  text-align: center;
  padding-top: 16px;
  border-top: 1px solid var(--border-main);
}

.emergency-warning {
  font-size: 12px;
  color: #ef4444;
  margin-top: 8px;
}

/* Owner 区域 */
.owner-form {
  padding: 16px;
  background: rgba(0, 0, 0, 0.1);
  border-radius: 8px;
}

.pool-status {
  text-align: center;
  margin-top: 12px;
  padding-top: 12px;
  border-top: 1px solid var(--border-main);
  font-size: 13px;
  color: var(--text-muted);
}

/* 资产面板 */
.assets-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
}

.asset-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 12px;
  background: rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  position: relative;
}

.asset-label {
  font-size: 12px;
  color: var(--text-muted);
}

.asset-value {
  font-size: 13px;
  font-weight: 600;
  color: var(--text-main);
}

.asset-value.highlight {
  color: #f59e0b;
}

.growth-badge {
  position: absolute;
  right: 4px;
  top: 4px;
  font-size: 10px;
  animation: pulse 1.5s infinite;
}

/* 事件日志 */
.events-list {
  max-height: 200px;
  overflow-y: auto;
}

.event-item {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 0;
  border-bottom: 1px solid var(--border-main);
  font-size: 13px;
}

.event-item:last-child {
  border-bottom: none;
}

.event-icon {
  font-size: 14px;
}

.event-text {
  flex: 1;
  color: var(--text-main);
}

.event-time {
  font-size: 11px;
  color: var(--text-muted);
}

.empty-events {
  text-align: center;
  padding: 20px;
  color: var(--text-muted);
  font-size: 13px;
}

/* 响应式布局 */
@media (max-width: 768px) {
  .architecture-flow {
    flex-direction: column;
  }
  
  .flow-arrow {
    transform: rotate(90deg);
  }
  
  .status-grid,
  .assets-grid {
    grid-template-columns: 1fr;
  }
  
  .role-toggle {
    flex-direction: column;
  }
  
  .operation-tabs {
    flex-wrap: wrap;
  }
  
  .fast-forward-btns {
    flex-direction: column;
  }
}
</style>
