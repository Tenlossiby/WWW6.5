<template>
  <div class="day-28-content day-content">
    <!-- 消息提示 -->
    <div v-if="message" :class="['message-toast', { error: isError }]">
      {{ message }}
    </div>

    <div class="content-layout" :class="{ 'single-column': unlockedConcepts.length === 0 }">
      <!-- 左栏：交互区域 -->
      <div class="left-column">
        <div class="interaction-area">
          <!-- 1. DAO治理架构可视化区 -->
          <div class="section architecture-section" @click="handleArchitectureClick">
            <div class="section-header">
              <h4>🏛️ DAO治理架构</h4>
              <span class="hover-hint">👆 点击了解代币治理模式</span>
            </div>
            <div class="architecture-flow">
              <div class="flow-box token-holder">
                <div class="box-icon">👥</div>
                <div class="box-label">TokenHolder</div>
                <div class="box-sublabel">代币持有者</div>
                <div class="power-badge">🗳️ 投票权</div>
              </div>
              <div class="flow-arrow">→</div>
              <div class="flow-box governance-contract">
                <div class="box-icon">🏛️</div>
                <div class="box-label">Governance</div>
                <div class="box-sublabel">治理合约</div>
                <div class="lock-badge">🔒 Timelock</div>
              </div>
              <div class="flow-arrow">→</div>
              <div class="flow-box target-contract">
                <div class="box-icon">⚙️</div>
                <div class="box-label">Target</div>
                <div class="box-sublabel">目标合约</div>
                <div class="call-badge">🔧 Call</div>
              </div>
            </div>
            <div class="formula-display">
              <div class="formula-label">治理公式:</div>
              <div class="formula">投票权重 = 代币余额 | 通过条件: 赞成 > 反对 & 总投票 ≥ 10%供应量</div>
            </div>
          </div>

          <!-- 2. 治理参数面板 -->
          <div class="section governance-params" @click="handleParamsClick">
            <div class="section-header">
              <h4>⚙️ 治理参数</h4>
              <span class="hover-hint">👆 点击了解时间锁和法定人数</span>
            </div>
            <div class="params-grid">
              <div class="param-item">
                <span class="param-label">时间锁定期:</span>
                <span class="param-value">2 天</span>
              </div>
              <div class="param-item">
                <span class="param-label">法定人数:</span>
                <span class="param-value">10%</span>
              </div>
              <div class="param-item">
                <span class="param-label">提案押金:</span>
                <span class="param-value">100 GOVERN</span>
              </div>
              <div class="param-item">
                <span class="param-label">投票期:</span>
                <span class="param-value">3 天</span>
              </div>
            </div>
          </div>

          <!-- 3. 提案状态流转图 -->
          <div class="section state-machine-section" @click="handleStateMachineClick">
            <div class="section-header">
              <h4>📊 提案状态流转图</h4>
              <span class="hover-hint">👆 点击了解提案状态机</span>
            </div>
            <div class="state-flow">
              <div class="state-box pending">
                <span class="state-icon">⏳</span>
                <span class="state-name">Pending</span>
                <span class="state-desc">待创建</span>
              </div>
              <div class="state-arrow">→</div>
              <div class="state-box active">
                <span class="state-icon">🗳️</span>
                <span class="state-name">Active</span>
                <span class="state-desc">投票中</span>
              </div>
              <div class="state-arrow">→</div>
              <div class="state-box queued">
                <span class="state-icon">🔒</span>
                <span class="state-name">Queued</span>
                <span class="state-desc">时间锁</span>
              </div>
              <div class="state-arrow">→</div>
              <div class="state-box executed">
                <span class="state-icon">✅</span>
                <span class="state-name">Executed</span>
                <span class="state-desc">已执行</span>
              </div>
            </div>
            <div class="state-branch">
              <div class="state-box defeated">
                <span class="state-icon">❌</span>
                <span class="state-name">Defeated</span>
                <span class="state-desc">被否决</span>
              </div>
            </div>
          </div>

          <!-- 4. 角色切换区 -->
          <div class="section role-section">
            <div class="section-header">
              <h4>🎭 角色切换</h4>
            </div>
            <div class="role-toggle">
              <button
                class="role-btn"
                :class="{ active: currentRole === 'TokenHolder' }"
                @click="handleSwitchRole('TokenHolder')"
              >
                <span class="role-icon">👤</span>
                <span class="role-label">TokenHolder</span>
                <span class="role-desc">持有代币，参与投票</span>
              </button>
              <button
                class="role-btn"
                :class="{ active: currentRole === 'Proposer' }"
                @click="handleSwitchRole('Proposer')"
              >
                <span class="role-icon">📝</span>
                <span class="role-label">Proposer</span>
                <span class="role-desc">创建提案</span>
              </button>
              <button
                class="role-btn"
                :class="{ active: currentRole === 'Executor' }"
                @click="handleSwitchRole('Executor')"
              >
                <span class="role-icon">🔧</span>
                <span class="role-label">Executor</span>
                <span class="role-desc">最终确定和执行</span>
              </button>
            </div>
            <div class="current-role-display">
              当前身份: <span :class="['role-tag', currentRole]">{{ getRoleDisplay(currentRole) }}</span>
            </div>
            <div class="role-hint">
              💡 提示：切换到 Proposer 可创建提案，切换到 Executor 可最终确定和执行提案
            </div>
          </div>

          <!-- 6. TokenHolder 操作区 -->
          <div v-if="currentRole === 'TokenHolder'" class="section tokenholder-section">
            <div class="section-header">
              <h4>🗳️ 投票操作</h4>
            </div>
            <div class="voting-panel">
              <div class="form-row">
                <label>选择提案:</label>
                <select v-model="selectedProposalId" class="form-select">
                  <option v-for="p in activeProposals" :key="p.id" :value="p.id">
                    #{{ p.id }}: {{ p.description }} ({{ p.state }})
                  </option>
                </select>
              </div>
              <div v-if="selectedProposal" class="proposal-info">
                <div class="info-row">
                  <span>状态:</span>
                  <span :class="['state-badge', selectedProposal.state.toLowerCase()]">{{ selectedProposal.state }}</span>
                </div>
                <div class="info-row">
                  <span>赞成票:</span>
                  <span class="vote-for">{{ selectedProposal.votesFor.toLocaleString() }}</span>
                </div>
                <div class="info-row">
                  <span>反对票:</span>
                  <span class="vote-against">{{ selectedProposal.votesAgainst.toLocaleString() }}</span>
                </div>
                <div class="info-row">
                  <span>剩余时间:</span>
                  <span>{{ formatTimeLeft(selectedProposal.deadline - currentTime) }}</span>
                </div>
              </div>
              <div class="voting-btns">
                <button class="day-action-btn green" @click="handleVote(true)" :disabled="!canVote">
                  👍 赞成
                </button>
                <button class="day-action-btn red" @click="handleVote(false)" :disabled="!canVote">
                  👎 反对
                </button>
              </div>
              <div class="voting-power">
                <span>您的投票权: {{ userTokenData.votingPower.toLocaleString() }} GOVERN</span>
              </div>
            </div>
          </div>

          <!-- 7. Proposer 操作区 -->
          <div v-if="currentRole === 'Proposer'" class="section proposer-section">
            <div class="section-header">
              <h4>📝 创建提案</h4>
            </div>
            <div class="proposal-form">
              <div class="form-row">
                <label>提案描述:</label>
                <input
                  v-model="newProposalDescription"
                  type="text"
                  placeholder="输入提案描述"
                  class="form-input wide"
                />
              </div>
              <div class="form-row">
                <label>目标合约地址:</label>
                <div class="input-with-btn">
                  <input
                    v-model="newProposalTarget"
                    type="text"
                    placeholder="0x..."
                    class="form-input wide"
                  />
                  <button class="day-action-btn small gray" @click="generateRandomAddress">
                    🎲 随机生成
                  </button>
                </div>
              </div>
              <div class="form-row">
                <label>调用数据 (可选):</label>
                <input
                  v-model="newProposalData"
                  type="text"
                  placeholder="0x..."
                  class="form-input wide"
                />
              </div>
              <div class="deposit-info">
                <span>需要押金: 100 GOVERN</span>
                <span>当前余额: {{ userTokenData.balance.toLocaleString() }} GOVERN</span>
              </div>
              <button class="day-action-btn blue" @click="handleCreateProposal" :disabled="userTokenData.balance < 100">
                📝 创建提案
              </button>
            </div>
          </div>

          <!-- 8. Executor 操作区 -->
          <div v-if="currentRole === 'Executor'" class="section executor-section">
            <div class="section-header">
              <h4>🔧 执行操作</h4>
            </div>
            <div class="executor-panel">
              <div class="form-row">
                <label>选择提案:</label>
                <select v-model="selectedProposalId" class="form-select">
                  <option v-for="p in proposals" :key="p.id" :value="p.id">
                    #{{ p.id }}: {{ p.description }} ({{ p.state }})
                  </option>
                </select>
              </div>
              <div v-if="selectedProposal" class="proposal-status">
                <div class="status-row">
                  <span>状态:</span>
                  <span :class="['state-badge', selectedProposal.state.toLowerCase()]">{{ selectedProposal.state }}</span>
                </div>
                <div class="status-row">
                  <span>投票结果:</span>
                  <span>{{ selectedProposal.votesFor > selectedProposal.votesAgainst ? '通过' : '未通过' }}</span>
                </div>
                <div v-if="selectedProposal.executionTime" class="status-row">
                  <span>可执行时间:</span>
                  <span>{{ formatTime(selectedProposal.executionTime) }}</span>
                </div>
              </div>
              <div class="executor-actions">
                <button class="day-action-btn orange" @click="handleFinalize" :disabled="!canFinalize">
                  ✅ 最终确定
                </button>
                <button class="day-action-btn green" @click="handleExecute" :disabled="!canExecute">
                  🔧 执行提案
                </button>
              </div>
            </div>
          </div>

          <!-- 9. 时间控制区 -->
          <div class="section time-control-section">
            <div class="section-header">
              <h4>⏱️ 时间控制</h4>
              <span class="hint-text">快进时间以演示投票期和时间锁</span>
            </div>
            <div class="current-time">
              <span class="time-label">当前区块时间:</span>
              <span class="time-value">{{ formatTime(currentTime) }}</span>
            </div>
            <div class="fast-forward-btns">
              <button class="day-action-btn cyan small" @click="handleFastForward(1)">⏩ 快进1天</button>
              <button class="day-action-btn cyan small" @click="handleFastForward(3)">⏩ 快进3天（投票期结束）</button>
              <button class="day-action-btn cyan small" @click="handleFastForward(5)">⏩ 快进5天（时间锁过期）</button>
            </div>
          </div>

          <!-- 10. 提案列表 -->
          <div class="section proposals-list-section">
            <div class="section-header">
              <h4>📋 提案列表</h4>
            </div>
            <div class="proposals-list">
              <div
                v-for="proposal in proposals"
                :key="proposal.id"
                class="proposal-card"
                :class="proposal.state.toLowerCase()"
                @click="selectedProposalId = proposal.id"
              >
                <div class="proposal-header">
                  <span class="proposal-id">#{{ proposal.id }}</span>
                  <span :class="['state-badge', proposal.state.toLowerCase()]">{{ proposal.state }}</span>
                </div>
                <div class="proposal-desc">{{ proposal.description }}</div>
                <div class="proposal-votes">
                  <div class="vote-bar">
                    <div class="vote-for-bar" :style="{ width: getVotePercentage(proposal).for + '%' }"></div>
                  </div>
                  <div class="vote-stats">
                    <span class="for">👍 {{ proposal.votesFor.toLocaleString() }}</span>
                    <span class="against">👎 {{ proposal.votesAgainst.toLocaleString() }}</span>
                  </div>
                </div>
              </div>
              <div v-if="proposals.length === 0" class="empty-proposals">
                暂无提案
              </div>
            </div>
          </div>

          <!-- 10. 用户资产面板 -->
          <div class="section assets-section">
            <div class="section-header">
              <h4>💰 我的资产</h4>
            </div>
            <div class="assets-grid">
              <div class="asset-item">
                <span class="asset-label">GOVERN 余额:</span>
                <span class="asset-value">{{ userTokenData.balance.toLocaleString() }}</span>
              </div>
              <div class="asset-item">
                <span class="asset-label">投票权:</span>
                <span class="asset-value highlight">{{ userTokenData.votingPower.toLocaleString() }}</span>
              </div>
              <div class="asset-item">
                <span class="asset-label">总供应量:</span>
                <span class="asset-value">{{ userTokenData.totalSupply.toLocaleString() }}</span>
              </div>
              <div class="asset-item">
                <span class="asset-label">占比:</span>
                <span class="asset-value">{{ ((userTokenData.balance / userTokenData.totalSupply) * 100).toFixed(2) }}%</span>
              </div>
            </div>
          </div>

          <!-- 事件日志在 Sidebar 中统一显示 -->
        </div>
      </div>

      <!-- 右栏：知识面板 -->
      <div class="right-column">
        <KnowledgePanel
          v-if="unlockedConcepts.length > 0"
          :current-day="28"
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
      title="DecentralizedGovernance 完整代码"
      @close="showFullCode = false"
    />
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useProgressStore } from '../../../stores/progressStore'
import { useDay28 } from '../../../composables/useDay28'
import KnowledgePanel from '../../shared/KnowledgePanel.vue'
import FullCodeModal from '@/components/shared/FullCodeModal.vue'
import { getFullCode } from '../../../data/days'

const progressStore = useProgressStore()

// 获取 Day 28 的解锁概念
const unlockedConcepts = computed(() =>
  progressStore.getDayProgress(28)?.unlockedConcepts || []
)

// 计算 Day 28 的进度百分比
const progressPercentage = computed(() => {
  const progress = progressStore.getDayProgress(28)
  if (!progress || progress.totalConcepts === 0) return 0
  return Math.round((progress.unlockedConcepts.length / progress.totalConcepts) * 100)
})

const {
  currentRole,
  currentTime,
  proposals,
  userTokenData,
  selectedProposalId,
  activeProposals,
  selectedProposal,
  canVote,
  canFinalize,
  canExecute,
  switchRole,
  fastForwardTime,
  createProposal,
  vote,
  finalize,
  execute,
  formatTime,
  formatTimeLeft,
  message,
  isError,
  showMessage,
  events,
  newProposalDescription,
  newProposalTarget,
  newProposalData
} = useDay28()

const currentHint = ref('')
const showFullCode = ref(false)

const fullCode = computed(() => getFullCode(28))

// 获取角色显示名称
const getRoleDisplay = (role) => {
  const displays = {
    TokenHolder: '👤 TokenHolder',
    Proposer: '📝 Proposer',
    Executor: '🔧 Executor'
  }
  return displays[role] || role
}

// 计算投票百分比
const getVotePercentage = (proposal) => {
  const total = proposal.votesFor + proposal.votesAgainst
  if (total === 0) return { for: 0, against: 0 }
  return {
    for: (proposal.votesFor / total) * 100,
    against: (proposal.votesAgainst / total) * 100
  }
}

// 处理架构图点击 - 解锁 token_governance
const handleArchitectureClick = () => {
  if (!progressStore.isConceptUnlocked(28, 'token_governance')) {
    progressStore.unlockConcept(28, 'token_governance')
    showMessage('✅ 已了解代币治理模式！🎉 恭喜解锁：代币治理模式！')
  }
}

// 处理治理参数点击 - 顺序解锁 timelock_mechanism 和 quorum_threshold
const handleParamsClick = () => {
  // 第一次点击：只解锁 timelock_mechanism
  if (!progressStore.isConceptUnlocked(28, 'timelock_mechanism')) {
    progressStore.unlockConcept(28, 'timelock_mechanism')
    showMessage('✅ 已了解时间锁机制！🎉 恭喜解锁：时间锁机制！👉 再次点击了解法定人数！')
    currentHint.value = '🔒 优秀！时间锁给用户审查时间。👉 再次点击了解法定人数！'
    return
  }

  // 第二次点击：解锁 quorum_threshold
  if (!progressStore.isConceptUnlocked(28, 'quorum_threshold')) {
    progressStore.unlockConcept(28, 'quorum_threshold')
    showMessage('✅ 已了解法定人数！🎉 恭喜解锁：法定人数！👉 点击提案状态流转图了解状态机！')
    currentHint.value = '👥 太棒了！法定人数确保足够参与度。👉 点击提案状态流转图了解状态机！'
    return
  }

  // 两个都已解锁：只显示提示，不重复解锁
  showMessage('✅ 已了解时间锁和法定人数！')
  currentHint.value = '👉 点击提案状态流转图了解状态机！'
}

// 处理状态机点击 - 解锁 proposal_state_machine
const handleStateMachineClick = () => {
  if (!progressStore.isConceptUnlocked(28, 'proposal_state_machine')) {
    progressStore.unlockConcept(28, 'proposal_state_machine')
    showMessage('✅ 已了解提案状态机！🎉 恭喜解锁：提案状态机！👉 切换到「👤 TokenHolder」角色开始投票！')
    currentHint.value = '📊 已了解提案状态机！👉 切换到「👤 TokenHolder」角色开始投票！'
  }
}

// 角色切换
const handleSwitchRole = (role) => {
  const result = switchRole(role)
  if (result.success) {
    currentHint.value = result.nextStep
  }
}

// 处理快进时间
const handleFastForward = (days) => {
  const result = fastForwardTime(days)
  if (result.success) {
    currentHint.value = result.nextStep
  }
}

// 处理创建提案
const handleCreateProposal = () => {
  const result = createProposal(newProposalDescription.value, newProposalTarget.value, newProposalData.value)
  if (result.success) {
    if (!progressStore.isConceptUnlocked(28, 'proposal_struct')) {
      progressStore.unlockConcept(28, 'proposal_struct')
      showMessage('✅ 提案创建成功！🎉 恭喜解锁：提案结构体！')
    }
    currentHint.value = result.nextStep
    newProposalDescription.value = ''
    newProposalTarget.value = ''
    newProposalData.value = ''
  }
}

// 处理投票
const handleVote = (support) => {
  const result = vote(selectedProposalId.value, support)
  if (result.success) {
    if (!progressStore.isConceptUnlocked(28, 'voting_function')) {
      progressStore.unlockConcept(28, 'voting_function')
      showMessage('✅ 投票成功！🎉 恭喜解锁：投票功能！')
    }
    currentHint.value = result.nextStep
  }
}

// 处理最终确定
const handleFinalize = () => {
  const result = finalize(selectedProposalId.value)
  if (result.success) {
    if (!progressStore.isConceptUnlocked(28, 'finalize_function')) {
      progressStore.unlockConcept(28, 'finalize_function')
      showMessage('✅ 最终确定成功！🎉 恭喜解锁：最终确定功能！')
    }
    currentHint.value = result.nextStep
  }
}

// 处理执行
const handleExecute = () => {
  const result = execute(selectedProposalId.value)
  if (result.success) {
    if (!progressStore.isConceptUnlocked(28, 'low_level_call')) {
      progressStore.unlockConcept(28, 'low_level_call')
      showMessage('✅ 提案执行成功！🎉 恭喜解锁：低级别调用！')
    }
    if (!progressStore.isConceptUnlocked(28, 'reentrancy_guard')) {
      progressStore.unlockConcept(28, 'reentrancy_guard')
      showMessage('🛡️ 已了解重入保护！🎉 恭喜解锁：重入保护机制！')
    }
    currentHint.value = result.nextStep
  }
}

// 生成随机地址
const generateRandomAddress = () => {
  const hexChars = '0123456789abcdef'
  let address = '0x'
  for (let i = 0; i < 40; i++) {
    address += hexChars[Math.floor(Math.random() * 16)]
  }
  newProposalTarget.value = address
  showMessage('🎲 已生成随机地址：' + address.slice(0, 10) + '...' + address.slice(-8))
}

// 初始提示
onMounted(() => {
  if (unlockedConcepts.value.length === 0) {
    currentHint.value = '🏛️ 欢迎来到 Day 28！点击架构图了解代币治理模式！\n📍 提示：重要知识点都在上半部分，建议从上到下依次操作。'
  }
})
</script>

<style scoped>
/* Day 28 特有样式 */

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
  background: linear-gradient(135deg, rgba(99, 102, 241, 0.08) 0%, rgba(168, 85, 247, 0.08) 100%);
  border-color: rgba(99, 102, 241, 0.2);
  cursor: pointer;
}

.governance-params {
  background: linear-gradient(135deg, rgba(59, 130, 246, 0.08) 0%, rgba(99, 102, 241, 0.08) 100%);
  border-color: rgba(59, 130, 246, 0.2);
  cursor: pointer;
}

.state-machine-section {
  background: linear-gradient(135deg, rgba(34, 197, 94, 0.08) 0%, rgba(16, 185, 129, 0.08) 100%);
  border-color: rgba(34, 197, 94, 0.2);
  cursor: pointer;
}

.time-control-section {
  background: linear-gradient(135deg, rgba(245, 158, 11, 0.08) 0%, rgba(234, 179, 8, 0.08) 100%);
  border-color: rgba(245, 158, 11, 0.2);
}

.role-section {
  background: linear-gradient(135deg, rgba(168, 85, 247, 0.08) 0%, rgba(236, 72, 153, 0.08) 100%);
  border-color: rgba(168, 85, 247, 0.2);
}

.tokenholder-section {
  background: linear-gradient(135deg, rgba(34, 197, 94, 0.08) 0%, rgba(16, 185, 129, 0.08) 100%);
  border-color: rgba(34, 197, 94, 0.2);
}

.proposer-section {
  background: linear-gradient(135deg, rgba(59, 130, 246, 0.08) 0%, rgba(99, 102, 241, 0.08) 100%);
  border-color: rgba(59, 130, 246, 0.2);
}

.executor-section {
  background: linear-gradient(135deg, rgba(234, 179, 8, 0.08) 0%, rgba(245, 158, 11, 0.08) 100%);
  border-color: rgba(234, 179, 8, 0.2);
}

.proposals-list-section {
  background: linear-gradient(135deg, rgba(100, 116, 139, 0.08) 0%, rgba(148, 163, 184, 0.08) 100%);
  border-color: rgba(100, 116, 139, 0.2);
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

.hint-text {
  font-size: 12px;
  color: var(--text-muted);
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

.flow-box.token-holder {
  background: rgba(59, 130, 246, 0.15);
  border-color: rgba(59, 130, 246, 0.3);
}

.flow-box.governance-contract {
  background: rgba(99, 102, 241, 0.15);
  border-color: rgba(99, 102, 241, 0.3);
  min-width: 140px;
}

.flow-box.target-contract {
  background: rgba(34, 197, 94, 0.15);
  border-color: rgba(34, 197, 94, 0.3);
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

.power-badge, .lock-badge, .call-badge {
  position: absolute;
  top: -8px;
  right: -8px;
  background: rgba(99, 102, 241, 0.9);
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
  font-size: 12px;
  color: var(--text-main);
}

/* 参数网格 */
.params-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
}

.param-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 12px;
  background: rgba(0, 0, 0, 0.1);
  border-radius: 8px;
}

.param-label {
  font-size: 13px;
  color: var(--text-muted);
}

.param-value {
  font-size: 13px;
  font-weight: 600;
  color: var(--text-main);
}

/* 状态机 */
.state-flow {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-bottom: 12px;
  flex-wrap: wrap;
}

.state-branch {
  display: flex;
  justify-content: center;
  padding-top: 8px;
  border-top: 2px dashed var(--border-main);
}

.state-box {
  background: rgba(100, 116, 139, 0.15);
  border: 2px solid rgba(100, 116, 139, 0.3);
  border-radius: 8px;
  padding: 10px 12px;
  text-align: center;
  min-width: 70px;
}

.state-box.pending {
  background: rgba(100, 116, 139, 0.15);
  border-color: rgba(100, 116, 139, 0.3);
}

.state-box.active {
  background: rgba(59, 130, 246, 0.15);
  border-color: rgba(59, 130, 246, 0.3);
}

.state-box.queued {
  background: rgba(245, 158, 11, 0.15);
  border-color: rgba(245, 158, 11, 0.3);
}

.state-box.executed {
  background: rgba(34, 197, 94, 0.15);
  border-color: rgba(34, 197, 94, 0.3);
}

.state-box.defeated {
  background: rgba(239, 68, 68, 0.15);
  border-color: rgba(239, 68, 68, 0.3);
}

.state-icon {
  font-size: 18px;
  display: block;
}

.state-name {
  font-size: 11px;
  font-weight: 600;
  color: var(--text-main);
  display: block;
}

.state-desc {
  font-size: 10px;
  color: var(--text-muted);
}

.state-arrow {
  font-size: 16px;
  color: var(--text-muted);
}

/* 时间控制 */
.current-time {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 12px;
  background: rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  margin-bottom: 12px;
}

.time-label {
  font-size: 13px;
  color: var(--text-muted);
}

.time-value {
  font-size: 13px;
  font-weight: 600;
  color: var(--text-main);
  font-family: monospace;
}

.fast-forward-btns {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  justify-content: center;
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
  margin-bottom: 12px;
}

.role-tag {
  font-weight: 600;
  padding: 4px 12px;
  border-radius: 16px;
  margin-left: 8px;
}

.role-tag.TokenHolder {
  background: rgba(59, 130, 246, 0.2);
  color: #3b82f6;
}

.role-tag.Proposer {
  background: rgba(99, 102, 241, 0.2);
  color: #6366f1;
}

.role-tag.Executor {
  background: rgba(234, 179, 8, 0.2);
  color: #eab308;
}

.role-hint {
  text-align: center;
  font-size: 12px;
  color: var(--text-muted);
  padding: 8px;
  background: rgba(0, 0, 0, 0.05);
  border-radius: 8px;
}

/* 表单样式 */
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

.form-input {
  width: 150px;
  padding: 8px 12px;
  background: rgba(0, 0, 0, 0.2);
  border: 1px solid var(--border-main);
  border-radius: 6px;
  color: var(--text-main);
  font-size: 14px;
}

.form-input.wide {
  width: 250px;
}

.form-select {
  padding: 8px 12px;
  background: rgba(0, 0, 0, 0.2);
  border: 1px solid var(--border-main);
  border-radius: 6px;
  color: var(--text-main);
  font-size: 14px;
  min-width: 200px;
}

/* 投票面板 */
.proposal-info, .proposal-status {
  background: rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  padding: 12px;
  margin-bottom: 12px;
}

.info-row, .status-row {
  display: flex;
  justify-content: space-between;
  padding: 4px 0;
  font-size: 13px;
}

.voting-btns, .executor-actions {
  display: flex;
  gap: 12px;
  justify-content: center;
}

.voting-power {
  text-align: center;
  margin-top: 12px;
  padding-top: 12px;
  border-top: 1px solid var(--border-main);
  font-size: 13px;
  color: var(--text-muted);
}

.vote-for {
  color: #22c55e;
  font-weight: 600;
}

.vote-against {
  color: #ef4444;
  font-weight: 600;
}

/* 状态徽章 */
.state-badge {
  padding: 2px 8px;
  border-radius: 12px;
  font-size: 11px;
  font-weight: 600;
}

.state-badge.active {
  background: rgba(59, 130, 246, 0.2);
  color: #3b82f6;
}

.state-badge.queued {
  background: rgba(245, 158, 11, 0.2);
  color: #f59e0b;
}

.state-badge.executed {
  background: rgba(34, 197, 94, 0.2);
  color: #22c55e;
}

.state-badge.defeated {
  background: rgba(239, 68, 68, 0.2);
  color: #ef4444;
}

.state-badge.pending {
  background: rgba(100, 116, 139, 0.2);
  color: #64748b;
}

/* Proposer 表单 */
.deposit-info {
  display: flex;
  justify-content: space-between;
  padding: 10px 12px;
  background: rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  margin-bottom: 12px;
  font-size: 13px;
}

/* 提案列表 */
.proposals-list {
  max-height: 300px;
  overflow-y: auto;
}

.proposal-card {
  background: rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  padding: 12px;
  margin-bottom: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  border-left: 4px solid transparent;
}

.proposal-card:hover {
  background: rgba(0, 0, 0, 0.15);
}

.proposal-card.active {
  border-left-color: #3b82f6;
}

.proposal-card.queued {
  border-left-color: #f59e0b;
}

.proposal-card.executed {
  border-left-color: #22c55e;
}

.proposal-card.defeated {
  border-left-color: #ef4444;
}

.proposal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
}

.proposal-id {
  font-weight: 600;
  color: var(--text-main);
}

.proposal-desc {
  font-size: 13px;
  color: var(--text-main);
  margin-bottom: 8px;
}

.proposal-votes {
  margin-top: 8px;
}

.vote-bar {
  height: 6px;
  background: rgba(239, 68, 68, 0.3);
  border-radius: 3px;
  overflow: hidden;
  margin-bottom: 4px;
}

.vote-for-bar {
  height: 100%;
  background: #22c55e;
  transition: width 0.3s ease;
}

.vote-stats {
  display: flex;
  justify-content: space-between;
  font-size: 12px;
}

.vote-stats .for {
  color: #22c55e;
}

.vote-stats .against {
  color: #ef4444;
}

.empty-proposals {
  text-align: center;
  padding: 20px;
  color: var(--text-muted);
  font-size: 13px;
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

/* 响应式布局 */
@media (max-width: 768px) {
  .architecture-flow,
  .state-flow {
    flex-direction: column;
  }
  
  .flow-arrow,
  .state-arrow {
    transform: rotate(90deg);
  }
  
  .params-grid,
  .assets-grid {
    grid-template-columns: 1fr;
  }
  
  .role-toggle {
    flex-direction: column;
  }
  
  .fast-forward-btns,
  .voting-btns,
  .executor-actions {
    flex-direction: column;
  }
  
  .form-input.wide {
    width: 100%;
  }
}
</style>
