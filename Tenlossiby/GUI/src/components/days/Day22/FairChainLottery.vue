<template>
  <div class="day-22-content day-content">
    <!-- 消息提示 -->
    <div v-if="message" :class="['message-toast', { error: isError }]">
      {{ message }}
    </div>

    <div class="content-layout" :class="{ 'single-column': unlockedConcepts.length === 0 }">
      <!-- 左栏：交互区域 -->
      <div class="left-column">
        <div class="interaction-area">
          <!-- 彩票架构可视化区 -->
          <div class="section architecture-section" @click="handleArchitectureClick">
            <div class="section-header">
              <h4>🎰 彩票合约架构</h4>
              <span class="hover-hint">👆 点击了解彩票状态枚举</span>
            </div>
            <div class="architecture-visualization">
              <div class="state-flow">
                <div class="state-box" :class="{ active: lotteryState === 'CLOSED' }">
                  <div class="state-icon">🔒</div>
                  <div class="state-label">CLOSED</div>
                  <div class="state-desc">关闭</div>
                </div>
                <div class="state-arrow">→</div>
                <div class="state-box" :class="{ active: lotteryState === 'OPEN' }">
                  <div class="state-icon">🎫</div>
                  <div class="state-label">OPEN</div>
                  <div class="state-desc">开放参与</div>
                </div>
                <div class="state-arrow">→</div>
                <div class="state-box" :class="{ active: lotteryState === 'CALCULATING' }">
                  <div class="state-icon">🎲</div>
                  <div class="state-label">CALCULATING</div>
                  <div class="state-desc">计算中</div>
                </div>
              </div>
              <div class="contract-info">
                <div class="info-item">
                  <span class="info-label">参与费用:</span>
                  <span class="info-value">0.01 ETH</span>
                </div>
                <div class="info-item">
                  <span class="info-label">合约余额:</span>
                  <span class="info-value">{{ contractBalance }} ETH</span>
                </div>
                <div class="info-item">
                  <span class="info-label">参与者:</span>
                  <span class="info-value">{{ players.length }} 人</span>
                </div>
              </div>
            </div>
          </div>

          <!-- 角色切换区 -->
          <div class="section role-section">
            <div class="section-header">
              <h4>👤 角色切换</h4>
            </div>
            <div class="role-toggle">
              <button
                class="role-btn"
                :class="{ active: currentRole === 'player' }"
                @click="toggleRole('player')"
              >
                <span class="role-icon">👤</span>
                <span class="role-label">Player</span>
                <span class="role-desc">参与彩票</span>
              </button>
              <button
                class="role-btn"
                :class="{ active: currentRole === 'owner' }"
                @click="toggleRole('owner')"
              >
                <span class="role-icon">👑</span>
                <span class="role-label">Owner</span>
                <span class="role-desc">管理彩票</span>
              </button>
            </div>
            <div class="current-role-display">
              当前身份: <span :class="['role-tag', currentRole]">{{ currentRole === 'owner' ? '👑 Owner' : '👤 Player' }}</span>
            </div>
          </div>

          <!-- Owner 操作区 -->
          <div v-if="currentRole === 'owner'" class="section owner-section">
            <div class="section-header">
              <h4>👑 Owner 操作</h4>
            </div>
            <div class="owner-actions">
              <button
                class="action-btn primary"
                :disabled="lotteryState !== 'CLOSED'"
                @click="handleStartLottery"
              >
                🚀 开启彩票
              </button>
              <button
                class="action-btn danger"
                :disabled="lotteryState !== 'OPEN' || players.length === 0"
                @click="handleEndLottery"
              >
                🏁 结束彩票
              </button>
              <button
                v-if="lotteryState === 'CALCULATING'"
                class="action-btn vfr"
                @click="handleTriggerVRF"
              >
                🎲 触发 VRF 回调
              </button>
            </div>
            <div v-if="lotteryState === 'CLOSED'" class="action-hint">
              💡 点击「开启彩票」开始新一轮彩票
            </div>
            <div v-if="lotteryState === 'OPEN'" class="action-hint">
              💡 等待玩家参与后，点击「结束彩票」选出获胜者
            </div>
            <div v-if="lotteryState === 'CALCULATING'" class="action-hint">
              💡 点击「触发 VRF 回调」模拟 Chainlink VRF 返回随机数
            </div>
          </div>

          <!-- Player 操作区 -->
          <div v-if="currentRole === 'player'" class="section player-section">
            <div class="section-header">
              <h4>👤 参与彩票</h4>
            </div>
            <div class="player-form">
              <div class="form-row">
                <label>参与地址:</label>
                <div class="input-with-btn">
                  <input
                    v-model="enterForm.address"
                    type="text"
                    placeholder="0x..."
                    class="form-input"
                  />
                  <button class="icon-btn" @click="fillRandomAddress" title="随机生成">
                    🎲
                  </button>
                </div>
              </div>
              <div class="entry-fee-display">
                <span class="fee-label">参与费用:</span>
                <span class="fee-value">0.01 ETH</span>
              </div>
              <button
                class="action-btn primary"
                :disabled="lotteryState !== 'OPEN'"
                @click="handleEnter"
              >
                🎫 支付参与
              </button>
              <div v-if="lotteryState !== 'OPEN'" class="action-hint error">
                ⚠️ 彩票未开放，请等待 Owner 开启
              </div>
            </div>
          </div>

          <!-- 参与者列表 -->
          <div class="section players-section" @click="handlePlayersClick">
            <div class="section-header">
              <h4>📋 参与者列表 ({{ players.length }})</h4>
              <span class="hover-hint">👆 点击了解动态数组</span>
            </div>
            <div class="players-list">
              <div
                v-for="(player, index) in players"
                :key="index"
                class="player-item"
              >
                <span class="player-index">#{{ index + 1 }}</span>
                <span class="player-address">{{ player.slice(0, 10) }}...{{ player.slice(-4) }}</span>
                <span class="player-amount">0.01 ETH</span>
              </div>
              <div v-if="players.length === 0" class="empty-players">
                <div class="empty-icon">👥</div>
                <div class="empty-text">暂无参与者</div>
                <div class="empty-subtext">等待玩家加入...</div>
              </div>
            </div>
          </div>

          <!-- 获胜者展示区 -->
          <div v-if="recentWinner" class="section winner-section" @click="handleWinnerClick">
            <div class="section-header">
              <h4>🏆 获胜者</h4>
              <span class="hover-hint">👆 点击查看奖金发放机制</span>
            </div>
            <div class="winner-display">
              <div class="winner-icon">🎉</div>
              <div class="winner-address">{{ recentWinner }}</div>
              <div class="winner-prize">赢得 {{ lastPrizeAmount }} ETH</div>
            </div>
          </div>

          <!-- VRF 流程可视化 -->
          <div class="section vrf-section">
            <div class="section-header">
              <h4>🎲 VRF 流程</h4>
              <span class="hover-hint">点击了解 Mock VRF</span>
            </div>
            <div class="vrf-flow" @click="handleVRFClick">
              <div class="vrf-step" :class="{ active: vrfStep >= 1 }">
                <div class="step-icon">1</div>
                <div class="step-label">请求随机数</div>
                <div class="step-desc">endLottery()</div>
              </div>
              <div class="vrf-arrow">→</div>
              <div class="vrf-step" :class="{ active: vrfStep >= 2 }">
                <div class="step-icon">2</div>
                <div class="step-label">VRF 处理</div>
                <div class="step-desc">Mock VRF</div>
              </div>
              <div class="vrf-arrow">→</div>
              <div class="vrf-step" :class="{ active: vrfStep >= 3 }">
                <div class="step-icon">3</div>
                <div class="step-label">回调结果</div>
                <div class="step-desc">fulfillRandomWords()</div>
              </div>
            </div>
            <div class="vrf-note">
              💡 生产环境使用 Chainlink VRF，此处为 Mock 实现
            </div>
          </div>

          <!-- 事件日志 -->
          <div class="section events-section" @click="handleEventLogClick">
            <div class="section-header">
              <h4>📜 事件日志（点击查看彩票安全机制）</h4>
              <span class="hover-hint">👆 点击了解彩票安全</span>
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
          :current-day="22"
          :unlocked-concepts="unlockedConcepts"
          :progress-percentage="progressPercentage"
          :full-code="fullCode"
          :custom-hint="currentHint"
          :realtime-data="realtimeData"
          @show-full-code="handleShowFullCode"
        />
      </div>
    </div>

    <!-- 完整代码弹窗 -->
    <FullCodeModal
      v-if="showFullCode"
      :show="true"
      :code="fullCode"
      title="FairChainLottery 完整代码"
      @close="showFullCode = false"
    />
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useProgressStore } from '../../../stores/progressStore'
import { useDay22 } from '../../../composables/useDay22'
import KnowledgePanel from '../../shared/KnowledgePanel.vue'
import FullCodeModal from '@/components/shared/FullCodeModal.vue'
import { getFullCode } from '../../../data/days'

const progressStore = useProgressStore()

// 获取 Day 22 的解锁概念
const unlockedConcepts = computed(() =>
  progressStore.getDayProgress(22)?.unlockedConcepts || []
)

// 计算 Day 22 的进度百分比
const progressPercentage = computed(() => {
  const progress = progressStore.getDayProgress(22)
  if (!progress || progress.totalConcepts === 0) return 0
  return Math.round((progress.unlockedConcepts.length / progress.totalConcepts) * 100)
})

const {
  lotteryState,
  players,
  recentWinner,
  contractBalance,
  lastPrizeAmount,
  events,
  vrfStep,
  enterForm,
  currentRole,
  message,
  isError,
  showMessage,
  startLottery,
  enter,
  endLottery,
  fulfillRandomWords,
  toggleRole: day22ToggleRole,
  realtimeData
} = useDay22()

const currentHint = ref('')
const showFullCode = ref(false)

// 处理事件日志点击 - 解锁 lottery_security
const handleEventLogClick = () => {
  if (!progressStore.isConceptUnlocked(22, 'lottery_security')) {
    progressStore.unlockConcept(22, 'lottery_security')
    showMessage('🎉 解锁「彩票安全」！了解多重防护机制。🎉 恭喜完成 Day 22 学习！')
    currentHint.value = '🛡️ 已了解彩票安全机制！多重安全防护确保彩票公平运行。🎉 Day 22 所有概念已解锁！'
  } else {
    currentHint.value = '🛡️ 已了解彩票安全机制！查看完整代码回顾所有知识点！'
  }
}

// 处理查看完整代码
const handleShowFullCode = () => {
  showFullCode.value = true
  showMessage('✅ 已查看完整代码！')
  currentHint.value = '🛡️ 查看完整代码回顾所有知识点！'
}

const fullCode = computed(() => getFullCode(22))

// 处理架构图点击 - 解锁 lottery_state_machine
const handleArchitectureClick = () => {
  if (!progressStore.isConceptUnlocked(22, 'lottery_state_machine')) {
    progressStore.unlockConcept(22, 'lottery_state_machine')
    showMessage('✅ 已了解彩票状态机！🎉 恭喜解锁：彩票状态机！📍 切换到 Owner 角色开启彩票！')
    currentHint.value = '🎰 已了解彩票状态机！📍 切换到 Owner 角色，点击「🚀 开启彩票」按钮开始彩票！'
  }
}

// 角色切换
const toggleRole = (role) => {
  day22ToggleRole(role)
  if (role === 'owner') {
    currentHint.value = '👑 你现在是 Owner 身份！📍 点击「🚀 开启彩票」按钮开始管理彩票！'
  } else {
    currentHint.value = '👤 你现在是 Player 身份！📍 支付 0.01 ETH 参与彩票！'
  }
}

// 处理开启彩票
const handleStartLottery = () => {
  const result = startLottery()
  if (result.success) {
    showMessage('🚀 彩票已开启！📍 请切换回 Player 角色参与彩票！')
    currentHint.value = '👤 彩票已开启！📍 请切换到「👤 Player」角色，在「👤 参与彩票」区域支付 0.01 ETH 参与！'
  }
}

// 处理参与彩票
const handleEnter = () => {
  const result = enter(enterForm.value.address)
  if (result.success) {
    // 解锁 request_randomness
    if (!progressStore.isConceptUnlocked(22, 'request_randomness')) {
      progressStore.unlockConcept(22, 'request_randomness')
      showMessage('✅ 参与成功！🎉 恭喜解锁：请求随机数！📍 继续参与或等待更多人加入！')
    }
    currentHint.value = '📤 已参与彩票！📍 继续参与或等待更多人，然后切换 Owner 结束彩票！'
    enterForm.value.address = ''
  }
}

// 处理结束彩票
const handleEndLottery = () => {
  const result = endLottery()
  if (result.success) {
    // 解锁 time_lock
    if (!progressStore.isConceptUnlocked(22, 'time_lock')) {
      progressStore.unlockConcept(22, 'time_lock')
      showMessage('✅ 已结束彩票！🎉 恭喜解锁：时间锁！📍 点击「🎲 触发 VRF 回调」按钮模拟 Chainlink 返回随机数！')
    }
    currentHint.value = '📥 彩票已结束！📍 点击「🎲 触发 VRF 回调」按钮选出获胜者！'
  }
}

// 处理触发 VRF 回调
const handleTriggerVRF = () => {
  const result = fulfillRandomWords()
  if (result.success) {
    // 解锁 fulfill_random_words
    if (!progressStore.isConceptUnlocked(22, 'fulfill_random_words')) {
      progressStore.unlockConcept(22, 'fulfill_random_words')
      showMessage('🏆 获胜者已选出！🎉 恭喜解锁：完成随机词！📍 点击「🏆 获胜者」区块查看详情！')
    }

    currentHint.value = '📥 已选出获胜者！📍 点击「🏆 获胜者」区块查看奖品分配！'
  }
}

// 处理参与者列表点击 - 解锁 random_number_generation
const handlePlayersClick = () => {
  if (!progressStore.isConceptUnlocked(22, 'random_number_generation')) {
    progressStore.unlockConcept(22, 'random_number_generation')
    showMessage('✅ 已查看参与者列表！🎉 恭喜解锁：随机数生成！📍 继续参与或切换 Owner 结束彩票！')
    currentHint.value = '🎲 已了解随机数生成！📍 继续参与彩票或切换 Owner 角色结束彩票！'
  }
}

// 处理获胜者点击 - 解锁 prize_distribution
const handleWinnerClick = () => {
  if (!progressStore.isConceptUnlocked(22, 'prize_distribution')) {
    progressStore.unlockConcept(22, 'prize_distribution')
    showMessage('💸 已了解奖品分配！🎉 恭喜解锁：奖品分配！📍 点击「📜 事件日志」区块查看日志！')
  }
  currentHint.value = '🏆 已了解奖品分配！📍 点击「📜 事件日志」区块或「查看完整代码」了解完整实现！'
}

// 处理 VRF 点击 - 解锁 chainlink_vrf
const handleVRFClick = () => {
  if (!progressStore.isConceptUnlocked(22, 'chainlink_vrf')) {
    progressStore.unlockConcept(22, 'chainlink_vrf')
    showMessage('🎲 已了解 Chainlink VRF！📍 这是链下可验证随机函数，提供安全的随机数！')
    currentHint.value = '🔢 已了解 Chainlink VRF！📍 点击「📋 参与者列表」区块了解动态数组的使用！'
  }
}

// 生成随机地址
const generateRandomAddress = () => {
  const chars = '0123456789abcdef'
  let address = '0x'
  for (let i = 0; i < 40; i++) {
    address += chars[Math.floor(Math.random() * 16)]
  }
  return address
}

// 填充随机地址
const fillRandomAddress = () => {
  enterForm.value.address = generateRandomAddress()
  showMessage('🎲 已生成随机地址！')
}

// 初始提示
onMounted(() => {
  if (unlockedConcepts.value.length === 0) {
    currentHint.value = '🎰 欢迎来到 Day 22！点击架构图了解彩票合约的状态枚举！'
  }
})
</script>

<style scoped>
/* Day 22 特有样式 */

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
  background: linear-gradient(135deg, rgba(56, 189, 248, 0.08) 0%, rgba(99, 102, 241, 0.08) 100%);
  border-color: rgba(56, 189, 248, 0.2);
  cursor: pointer;
}

.role-section {
  background: linear-gradient(135deg, rgba(168, 85, 247, 0.08) 0%, rgba(236, 72, 153, 0.08) 100%);
  border-color: rgba(168, 85, 247, 0.2);
}

.owner-section {
  background: linear-gradient(135deg, rgba(234, 179, 8, 0.08) 0%, rgba(245, 158, 11, 0.08) 100%);
  border-color: rgba(234, 179, 8, 0.2);
}

.player-section {
  background: linear-gradient(135deg, rgba(34, 197, 94, 0.08) 0%, rgba(16, 185, 129, 0.08) 100%);
  border-color: rgba(34, 197, 94, 0.2);
}

.players-section {
  background: linear-gradient(135deg, rgba(99, 102, 241, 0.08) 0%, rgba(139, 92, 246, 0.08) 100%);
  border-color: rgba(99, 102, 241, 0.2);
  cursor: pointer;
}

.winner-section {
  background: linear-gradient(135deg, rgba(236, 72, 153, 0.08) 0%, rgba(244, 114, 182, 0.08) 100%);
  border-color: rgba(236, 72, 153, 0.2);
  cursor: pointer;
}

.vrf-section {
  background: linear-gradient(135deg, rgba(249, 115, 22, 0.08) 0%, rgba(251, 146, 60, 0.08) 100%);
  border-color: rgba(249, 115, 22, 0.2);
}

.events-section {
  background: linear-gradient(135deg, rgba(100, 116, 139, 0.08) 0%, rgba(148, 163, 184, 0.08) 100%);
  border-color: rgba(100, 116, 139, 0.2);
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

/* 架构可视化 */
.architecture-visualization {
  cursor: pointer;
}

.state-flow {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  margin-bottom: 20px;
  flex-wrap: wrap;
}

.state-box {
  background: rgba(100, 116, 139, 0.15);
  border: 2px solid rgba(100, 116, 139, 0.3);
  border-radius: 12px;
  padding: 16px 20px;
  text-align: center;
  transition: all 0.3s ease;
  min-width: 100px;
}

.state-box.active {
  background: rgba(34, 197, 94, 0.2);
  border-color: rgba(34, 197, 94, 0.5);
  box-shadow: 0 0 20px rgba(34, 197, 94, 0.3);
}

.state-icon {
  font-size: 28px;
  margin-bottom: 8px;
}

.state-label {
  font-weight: bold;
  color: var(--text-main);
  font-size: 14px;
  margin-bottom: 4px;
}

.state-desc {
  font-size: 12px;
  color: var(--text-muted);
}

.state-arrow {
  font-size: 20px;
  color: var(--text-muted);
}

.contract-info {
  display: flex;
  justify-content: center;
  gap: 24px;
  flex-wrap: wrap;
  padding-top: 16px;
  border-top: 1px solid var(--border-main);
}

.info-item {
  text-align: center;
}

.info-label {
  display: block;
  font-size: 12px;
  color: var(--text-muted);
  margin-bottom: 4px;
}

.info-value {
  font-weight: bold;
  color: #22c55e;
  font-size: 16px;
}

/* 角色切换 */
.role-toggle {
  display: flex;
  gap: 16px;
  margin-bottom: 16px;
}

.role-btn {
  flex: 1;
  background: var(--bg-surface-2);
  border: 2px solid var(--border-main);
  border-radius: 12px;
  padding: 16px;
  cursor: pointer;
  transition: all 0.3s;
  text-align: center;
}

.role-btn:hover {
  border-color: rgba(168, 85, 247, 0.5);
  transform: translateY(-2px);
}

.role-btn.active {
  background: rgba(168, 85, 247, 0.15);
  border-color: #a855f7;
}

.role-icon {
  font-size: 32px;
  display: block;
  margin-bottom: 8px;
}

.role-label {
  display: block;
  font-weight: bold;
  color: var(--text-main);
  margin-bottom: 4px;
}

.role-desc {
  font-size: 12px;
  color: var(--text-muted);
}

.current-role-display {
  text-align: center;
  padding: 12px;
  background: var(--bg-surface-2);
  border-radius: 8px;
  font-size: 14px;
  color: var(--text-muted);
}

.role-tag {
  font-weight: bold;
  padding: 4px 12px;
  border-radius: 16px;
  margin-left: 8px;
}

.role-tag.owner {
  background: rgba(234, 179, 8, 0.2);
  color: #eab308;
}

.role-tag.player {
  background: rgba(34, 197, 94, 0.2);
  color: #22c55e;
}

/* Owner 操作 */
.owner-actions {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  margin-bottom: 12px;
}

.action-btn {
  background: rgba(34, 197, 94, 0.2);
  border: 1px solid rgba(34, 197, 94, 0.3);
  border-radius: 8px;
  padding: 12px 24px;
  color: #16a34a;
  cursor: pointer;
  transition: all 0.3s;
  font-size: 14px;
  font-weight: 500;
}

.action-btn:hover:not(:disabled) {
  background: rgba(34, 197, 94, 0.3);
  transform: translateY(-1px);
}

.action-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.action-btn.primary {
  background: rgba(34, 197, 94, 0.3);
}

.action-btn.danger {
  background: rgba(239, 68, 68, 0.2);
  border-color: rgba(239, 68, 68, 0.3);
  color: #dc2626;
}

.action-btn.danger:hover:not(:disabled) {
  background: rgba(239, 68, 68, 0.3);
}

.action-btn.vfr {
  background: rgba(249, 115, 22, 0.2);
  border-color: rgba(249, 115, 22, 0.3);
  color: #ea580c;
}

.action-btn.vfr:hover:not(:disabled) {
  background: rgba(249, 115, 22, 0.3);
}

.action-hint {
  font-size: 13px;
  color: var(--text-muted);
  padding: 8px 12px;
  background: rgba(99, 102, 241, 0.05);
  border-radius: 6px;
}

.action-hint.error {
  background: rgba(239, 68, 68, 0.1);
  color: #dc2626;
}

/* Player 表单 */
.player-form {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.form-row {
  display: flex;
  align-items: center;
  gap: 12px;
}

.form-row label {
  min-width: 80px;
  color: var(--text-muted);
  font-size: 14px;
}

.input-with-btn {
  flex: 1;
  display: flex;
  align-items: center;
  gap: 8px;
}

.input-with-btn .form-input {
  flex: 1;
}

.form-input {
  background: var(--bg-surface-2);
  border: 1px solid var(--border-main);
  border-radius: 6px;
  padding: 10px 12px;
  color: var(--text-main);
  font-size: 14px;
}

.form-input:focus {
  outline: none;
  border-color: #22c55e;
}

.icon-btn {
  background: rgba(99, 102, 241, 0.2);
  border: 1px solid rgba(99, 102, 241, 0.3);
  border-radius: 6px;
  padding: 10px;
  cursor: pointer;
  transition: all 0.3s;
  font-size: 14px;
}

.icon-btn:hover {
  background: rgba(99, 102, 241, 0.3);
  transform: scale(1.05);
}

.entry-fee-display {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px;
  background: var(--bg-surface-2);
  border-radius: 6px;
}

.fee-label {
  color: var(--text-muted);
  font-size: 14px;
}

.fee-value {
  font-weight: bold;
  color: #22c55e;
  font-size: 16px;
}

/* 参与者列表 */
.players-list {
  max-height: 200px;
  overflow-y: auto;
}

.player-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 12px;
  background: var(--bg-surface-2);
  border-radius: 8px;
  margin-bottom: 8px;
  border: 1px solid var(--border-main);
}

.player-item:last-child {
  margin-bottom: 0;
}

.player-index {
  font-weight: bold;
  color: #6366f1;
  min-width: 30px;
}

.player-address {
  flex: 1;
  font-family: monospace;
  font-size: 13px;
  color: var(--text-main);
}

.player-amount {
  font-weight: bold;
  color: #22c55e;
  font-size: 13px;
}

.empty-players {
  text-align: center;
  padding: 40px;
  color: var(--text-muted);
}

.empty-icon {
  font-size: 48px;
  margin-bottom: 8px;
}

/* 获胜者展示 */
.winner-display {
  text-align: center;
  padding: 24px;
  background: linear-gradient(135deg, rgba(236, 72, 153, 0.1) 0%, rgba(244, 114, 182, 0.1) 100%);
  border-radius: 12px;
  border: 2px solid rgba(236, 72, 153, 0.3);
}

.winner-icon {
  font-size: 48px;
  margin-bottom: 12px;
}

.winner-address {
  font-family: monospace;
  font-size: 14px;
  color: var(--text-main);
  margin-bottom: 8px;
  word-break: break-all;
}

.winner-prize {
  font-weight: bold;
  color: #ec4899;
  font-size: 18px;
}

/* VRF 流程 */
.vrf-flow {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-bottom: 16px;
  flex-wrap: wrap;
  cursor: pointer;
}

.vrf-step {
  background: rgba(100, 116, 139, 0.15);
  border: 2px solid rgba(100, 116, 139, 0.3);
  border-radius: 12px;
  padding: 16px;
  text-align: center;
  transition: all 0.3s ease;
  min-width: 100px;
}

.vrf-step.active {
  background: rgba(249, 115, 22, 0.2);
  border-color: rgba(249, 115, 22, 0.5);
  box-shadow: 0 0 20px rgba(249, 115, 22, 0.3);
}

.step-icon {
  width: 32px;
  height: 32px;
  background: rgba(100, 116, 139, 0.3);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  color: var(--text-main);
  margin: 0 auto 8px;
}

.vrf-step.active .step-icon {
  background: rgba(249, 115, 22, 0.5);
  color: #fff;
}

.step-label {
  font-weight: bold;
  color: var(--text-main);
  font-size: 13px;
  margin-bottom: 4px;
}

.step-desc {
  font-size: 11px;
  color: var(--text-muted);
  font-family: monospace;
}

.vrf-arrow {
  font-size: 20px;
  color: var(--text-muted);
}

.vrf-note {
  font-size: 12px;
  color: var(--text-muted);
  text-align: center;
  padding: 8px;
  background: rgba(249, 115, 22, 0.05);
  border-radius: 6px;
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
  padding: 8px 12px;
  background: var(--bg-surface-2);
  border-radius: 6px;
  margin-bottom: 6px;
  font-size: 13px;
}

.event-item:last-child {
  margin-bottom: 0;
}

.event-item.lottery-started {
  background: rgba(34, 197, 94, 0.1);
  border-left: 3px solid #22c55e;
}

.event-item.player-entered {
  background: rgba(99, 102, 241, 0.1);
  border-left: 3px solid #6366f1;
}

.event-item.winner-picked {
  background: rgba(236, 72, 153, 0.1);
  border-left: 3px solid #ec4899;
}

.event-icon {
  font-size: 16px;
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
</style>