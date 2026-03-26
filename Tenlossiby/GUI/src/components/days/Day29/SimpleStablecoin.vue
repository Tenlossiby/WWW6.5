<template>
  <div class="day-29-content day-content">
    <!-- 消息提示 -->
    <div v-if="message" :class="['message-toast', { error: isError }]">
      {{ message }}
    </div>

    <div class="content-layout" :class="{ 'single-column': unlockedConcepts.length === 0 }">
      <!-- 左栏：交互区域 -->
      <div class="left-column">
        <div class="interaction-area">
          <!-- 1. 稳定币系统架构可视化区 -->
          <div class="section architecture-section" @click="handleArchitectureClick">
            <div class="section-header">
              <h4>🏦 稳定币系统架构</h4>
              <span class="hover-hint">👆 点击了解超额抵押机制</span>
            </div>
            <div class="architecture-flow">
              <div class="flow-box user">
                <div class="box-icon">👤</div>
                <div class="box-label">用户</div>
                <div class="box-sublabel">存入ETH</div>
              </div>
              <div class="flow-arrow">→</div>
              <div class="flow-box contract">
                <div class="box-icon">🏦</div>
                <div class="box-label">稳定币合约</div>
                <div class="box-sublabel">150%抵押</div>
                <div class="lock-badge">🔒 ReentrancyGuard</div>
              </div>
              <div class="flow-arrow">→</div>
              <div class="flow-box stablecoin">
                <div class="box-icon">💵</div>
                <div class="box-label">SUSD</div>
                <div class="box-sublabel">美元锚定</div>
              </div>
            </div>
            <div class="formula-display">
              <div class="formula-label">核心公式:</div>
              <div class="formula">抵押率 = 抵押品价值 / 债务价值 × 100% (最低150%)</div>
            </div>
          </div>

          <!-- 2. 抵押率与数学原理面板 -->
          <div class="section math-panel" @click="handleMathPanelClick">
            <div class="section-header">
              <h4>📊 抵押率与数学原理</h4>
              <span class="hover-hint">👆 点击了解详细机制</span>
            </div>
            <div class="math-content">
              <div class="math-item">
                <span class="math-label">抵押率要求:</span>
                <span class="math-value highlight">150%</span>
              </div>
              <div class="math-item">
                <span class="math-label">清算奖励:</span>
                <span class="math-value">5%</span>
              </div>
              <div class="math-formula">
                <div class="formula-title">最大可铸造公式:</div>
                <code>maxMintable = collateralValue × 100 / 150</code>
              </div>
              <div class="math-example">
                <div class="example-title">示例:</div>
                <div class="example-line">ETH价格 = $2,000</div>
                <div class="example-line">存入1 ETH = $2,000 抵押品</div>
                <div class="example-line">最大可铸造 = 2000 × 100 / 150 = <strong>$1,333 SUSD</strong></div>
              </div>
            </div>
          </div>

          <!-- 3. 价格预言机面板 -->
          <div class="section oracle-panel">
            <div class="section-header">
              <h4>🔮 价格预言机</h4>
            </div>
            <div class="oracle-content">
              <div class="price-display">
                <div class="price-label">当前ETH价格</div>
                <div class="price-value">${{ ethPriceDisplay }}</div>
                <div class="price-source">数据来源: MockPriceFeed</div>
              </div>
              <div class="price-control">
                <div class="control-label">模拟价格操控:</div>
                <div class="price-buttons">
                  <button class="price-btn" @click="updatePrice(3000)">$3000</button>
                  <button class="price-btn" @click="updatePrice(2000)">$2000</button>
                  <button class="price-btn warning" @click="updatePrice(1500)">$1500</button>
                  <button class="price-btn danger" @click="updatePrice(1400)">$1400</button>
                  <button class="price-btn danger" @click="updatePrice(1000)">$1000</button>
                </div>
                <div class="price-input-row">
                  <input
                    v-model.number="customPrice"
                    type="number"
                    class="price-input"
                    placeholder="自定义价格"
                  />
                  <button class="day-action-btn small blue" @click="updatePrice(customPrice)">更新</button>
                </div>
              </div>
              <div v-if="liquidationCandidates.length > 0" class="liquidation-alert">
                ⚠️ 发现 {{ liquidationCandidates.length }} 个可清算头寸！
              </div>
            </div>
          </div>

          <!-- 4. 用户资产面板 -->
          <div class="section assets-panel">
            <div class="section-header">
              <h4>💼 我的资产状况</h4>
            </div>
            <div class="assets-grid">
              <div class="asset-card">
                <div class="asset-icon">💎</div>
                <div class="asset-label">抵押ETH</div>
                <div class="asset-value">{{ userCollateralDisplay }} ETH</div>
                <div class="asset-usd">${{ userCollateralUsdDisplay }}</div>
              </div>
              <div class="asset-card">
                <div class="asset-icon">💵</div>
                <div class="asset-label">债务(SUSD)</div>
                <div class="asset-value">{{ userDebtDisplay }} SUSD</div>
                <div class="asset-usd">${{ userDebtDisplay }}</div>
              </div>
              <div class="asset-card">
                <div class="asset-icon">🪙</div>
                <div class="asset-label">SUSD余额</div>
                <div class="asset-value">{{ userBalanceDisplay }} SUSD</div>
              </div>
              <div class="asset-card" :class="healthFactorClass">
                <div class="asset-icon">💚</div>
                <div class="asset-label">健康因子</div>
                <div class="asset-value">{{ userHealthFactorDisplay }}%</div>
                <div class="asset-status">{{ healthFactorStatus }}</div>
              </div>
            </div>
            <div class="assets-summary">
              <div class="summary-item">
                <span>最大可铸造:</span>
                <strong>{{ maxMintableDisplay }} SUSD</strong>
              </div>
              <div class="summary-item">
                <span>还可铸造:</span>
                <strong>{{ remainingMintableDisplay }} SUSD</strong>
              </div>
            </div>
          </div>

          <!-- 5. 操作标签页 -->
          <div class="section operations-section">
            <div class="operation-tabs">
              <button
                class="tab-btn"
                :class="{ active: activeTab === 'deposit' }"
                @click="activeTab = 'deposit'"
              >
                💰 存入抵押
              </button>
              <button
                class="tab-btn"
                :class="{ active: activeTab === 'mint' }"
                @click="activeTab = 'mint'"
              >
                🏦 铸造稳定币
              </button>
              <button
                class="tab-btn"
                :class="{ active: activeTab === 'burn' }"
                @click="activeTab = 'burn'"
              >
                🔥 销毁稳定币
              </button>
              <button
                class="tab-btn"
                :class="{ active: activeTab === 'withdraw' }"
                @click="activeTab = 'withdraw'"
              >
                🏧 提取抵押
              </button>
            </div>

            <!-- 存入抵押品 -->
            <div v-if="activeTab === 'deposit'" class="operation-panel">
              <h4>💰 存入ETH抵押品</h4>
              <div class="form-group">
                <label>存入数量 (ETH):</label>
                <input
                  v-model.number="depositAmount"
                  type="number"
                  class="form-input"
                  placeholder="0.0"
                  step="0.1"
                />
              </div>
              <div class="quick-buttons">
                <button class="quick-btn" @click="depositAmount = 0.5">0.5 ETH</button>
                <button class="quick-btn" @click="depositAmount = 1">1 ETH</button>
                <button class="quick-btn" @click="depositAmount = 2">2 ETH</button>
                <button class="quick-btn" @click="depositAmount = 5">5 ETH</button>
              </div>
              <div v-if="depositAmount > 0" class="preview">
                <div class="preview-item">
                  <span>预估抵押品价值:</span>
                  <span>${{ depositValuePreview }}</span>
                </div>
              </div>
              <button class="day-action-btn green" @click="handleDeposit">
                💰 存入抵押品
              </button>
            </div>

            <!-- 铸造稳定币 -->
            <div v-if="activeTab === 'mint'" class="operation-panel">
              <h4>🏦 铸造SUSD稳定币</h4>
              <div class="form-group">
                <label>铸造数量 (SUSD):</label>
                <input
                  v-model.number="mintAmount"
                  type="number"
                  class="form-input"
                  placeholder="0.0"
                  step="100"
                />
              </div>
              <div class="quick-buttons">
                <button class="quick-btn" @click="mintAmount = 500">500 SUSD</button>
                <button class="quick-btn" @click="mintAmount = 1000">1000 SUSD</button>
                <button class="quick-btn" @click="mintAmount = Math.floor(maxMintable / 1e18)">
                  最大 ({{ Math.floor(maxMintable / 1e18) }})
                </button>
              </div>
              <div v-if="mintAmount > 0" class="preview">
                <div class="preview-item">
                  <span>铸造后债务:</span>
                  <span>{{ (userDebt + mintAmount).toFixed(2) }} SUSD</span>
                </div>
                <div class="preview-item">
                  <span>铸造后健康因子:</span>
                  <span :class="previewHealthFactorClass">{{ previewHealthFactor }}%</span>
                </div>
              </div>
              <button
                class="day-action-btn blue"
                @click="handleMint"
                :disabled="mintAmount > remainingMintable"
              >
                🏦 铸造SUSD
              </button>
            </div>

            <!-- 销毁稳定币 -->
            <div v-if="activeTab === 'burn'" class="operation-panel">
              <h4>🔥 销毁SUSD减少债务</h4>
              <div class="form-group">
                <label>销毁数量 (SUSD):</label>
                <input
                  v-model.number="burnAmount"
                  type="number"
                  class="form-input"
                  placeholder="0.0"
                  step="100"
                />
              </div>
              <div class="quick-buttons">
                <button class="quick-btn" @click="burnAmount = Math.floor(userSUSDBalance * 0.5)">50%</button>
                <button class="quick-btn" @click="burnAmount = userSUSDBalance">全部</button>
              </div>
              <div v-if="burnAmount > 0" class="preview">
                <div class="preview-item">
                  <span>销毁后债务:</span>
                  <span>{{ Math.max(0, userDebt - burnAmount).toFixed(2) }} SUSD</span>
                </div>
                <div class="preview-item">
                  <span>销毁后健康因子:</span>
                  <span :class="previewBurnHealthFactorClass">{{ previewBurnHealthFactor }}%</span>
                </div>
              </div>
              <button
                class="day-action-btn red"
                @click="handleBurn"
                :disabled="burnAmount > userSUSDBalance"
              >
                🔥 销毁SUSD
              </button>
            </div>

            <!-- 提取抵押品 -->
            <div v-if="activeTab === 'withdraw'" class="operation-panel">
              <h4>🏧 提取ETH抵押品</h4>
              <div class="form-group">
                <label>提取数量 (ETH):</label>
                <input
                  v-model.number="withdrawAmount"
                  type="number"
                  class="form-input"
                  placeholder="0.0"
                  step="0.1"
                />
              </div>
              <div class="quick-buttons">
                <button class="quick-btn" @click="withdrawAmount = userCollateral * 0.25 / 1e18">25%</button>
                <button class="quick-btn" @click="withdrawAmount = userCollateral * 0.5 / 1e18">50%</button>
                <button class="quick-btn" @click="withdrawAmount = maxWithdrawable">最大</button>
              </div>
              <div v-if="withdrawAmount > 0" class="preview">
                <div class="preview-item">
                  <span>提取后抵押品:</span>
                  <span>{{ (userCollateral / 1e18 - withdrawAmount).toFixed(4) }} ETH</span>
                </div>
                <div class="preview-item">
                  <span>提取后健康因子:</span>
                  <span :class="previewWithdrawHealthFactorClass">{{ previewWithdrawHealthFactor }}%</span>
                </div>
              </div>
              <button
                class="day-action-btn orange"
                @click="handleWithdraw"
                :disabled="!canWithdraw"
              >
                🏧 提取抵押品
              </button>
              <div v-if="!canWithdraw && withdrawAmount > 0" class="warning-text">
                ⚠️ 提取后健康因子将低于150%，请先销毁部分SUSD
              </div>
            </div>
          </div>

          <!-- 6. 清算演示区 -->
          <div class="section liquidation-section">
            <div class="section-header">
              <h4>⚔️ 清算演示区</h4>
            </div>
            <div class="liquidation-content">
              <div v-if="liquidationCandidates.length === 0" class="no-liquidation">
                <div class="info-icon">✅</div>
                <div class="info-text">当前没有可清算头寸</div>
                <div class="info-hint">降低ETH价格（至$1400以下）可创建可清算头寸</div>
              </div>
              <div v-else class="liquidation-list">
                <div class="liquidation-header">
                  发现 {{ liquidationCandidates.length }} 个可清算头寸
                </div>
                <div
                  v-for="candidate in liquidationCandidates"
                  :key="candidate.address"
                  class="liquidation-item"
                >
                  <div class="liquidation-info">
                    <div class="liquidation-user">用户: {{ candidate.address }}</div>
                    <div class="liquidation-stats">
                      <span>抵押: {{ (candidate.collateral / 1e18).toFixed(4) }} ETH</span>
                      <span>债务: {{ (candidate.debt / 1e18).toFixed(2) }} SUSD</span>
                      <span class="health-warning">健康因子: {{ candidate.healthFactor.toFixed(2) }}%</span>
                    </div>
                  </div>
                  <div class="liquidation-reward">
                    <div class="reward-label">清算奖励:</div>
                    <div class="reward-value">+{{ ((candidate.liquidationReward - candidate.collateral) / 1e18).toFixed(4) }} ETH</div>
                    <button class="day-action-btn red small" @click="handleLiquidate(candidate.address)">
                      ⚔️ 清算
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- 7. 系统统计与事件日志 -->
          <div class="section stats-section">
            <div class="section-header">
              <h4>📈 系统统计</h4>
            </div>
            <div class="stats-grid">
              <div class="stat-item">
                <span class="stat-label">总抵押ETH:</span>
                <span class="stat-value">{{ (totalCollateral / 1e18).toFixed(4) }} ETH</span>
              </div>
              <div class="stat-item">
                <span class="stat-label">总SUSD流通:</span>
                <span class="stat-value">{{ (totalSupply / 1e18).toFixed(2) }} SUSD</span>
              </div>
              <div class="stat-item">
                <span class="stat-label">系统抵押率:</span>
                <span class="stat-value" :class="systemRatioClass">{{ systemCollateralRatio.toFixed(2) }}%</span>
              </div>
            </div>
          </div>

          <!-- 事件日志 -->
          <div class="section events-section">
            <div class="section-header">
              <h4>📜 事件日志</h4>
            </div>
            <div class="events-list">
              <div v-if="events.length === 0" class="no-events">
                暂无事件记录
              </div>
              <div
                v-for="(event, index) in events.slice(0, 5)"
                :key="index"
                class="event-item"
              >
                <div class="event-time">{{ event.timestamp }}</div>
                <div class="event-type">{{ event.type }}</div>
                <div class="event-details">
                  <span v-if="event.amount">{{ (event.amount / 1e18).toFixed(4) }}</span>
                  <span v-if="event.debtPaid">债务: {{ (event.debtPaid / 1e18).toFixed(2) }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 右栏：知识面板 -->
      <div class="right-column">
        <KnowledgePanel
          v-if="unlockedConcepts.length > 0"
          :current-day="29"
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
      :show="showFullCode"
      :code="fullCode"
      @close="showFullCode = false"
    />
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useDay29 } from '../../../composables/useDay29'
import { useProgressStore } from '../../../stores/progressStore'
import { getDay29Hint, getDay29ExplanationHint } from '../../../data/concepts'
import { getFullCode } from '../../../data/days'
import KnowledgePanel from '../../shared/KnowledgePanel.vue'
import FullCodeModal from '../../shared/FullCodeModal.vue'

// ========== Store & Composable ==========
const progressStore = useProgressStore()
const day29 = useDay29()

// ========== 解构状态和方法 ==========
const {
  ethPrice,
  totalCollateral,
  totalSupply,
  userCollateral,
  userDebt,
  userSUSDBalance,
  events,
  liquidationCandidates,
  userCollateralValue,
  userHealthFactor,
  maxMintable,
  remainingMintable,
  systemCollateralRatio,
  depositCollateral,
  mintStablecoin,
  burnStablecoin,
  withdrawCollateral,
  updateEthPrice,
  liquidate
} = day29

// ========== 本地状态 ==========
const message = ref('')
const isError = ref(false)
const currentHint = ref('')
const showFullCode = ref(false)
const activeTab = ref('deposit')
let messageTimeout = null

// 表单数据
const depositAmount = ref(0)
const mintAmount = ref(0)
const burnAmount = ref(0)
const withdrawAmount = ref(0)
const customPrice = ref(2000)

// 已解锁概念
const unlockedConcepts = computed(() => {
  return progressStore.getDayProgress(29)?.unlockedConcepts || []
})

// 进度百分比
const progressPercentage = computed(() => {
  const progress = progressStore.getDayProgress(29)
  if (!progress || progress.totalConcepts === 0) return 0
  return Math.round((progress.unlockedConcepts.length / progress.totalConcepts) * 100)
})

// 完整代码
const fullCode = computed(() => getFullCode(29))

// ========== 显示消息 ==========
const showMessage = (msg, error = false) => {
  message.value = msg
  isError.value = error
  if (messageTimeout) clearTimeout(messageTimeout)
  messageTimeout = setTimeout(() => {
    message.value = ''
    isError.value = false
  }, 3000)
}

// ========== 解锁概念 ==========
const unlockConcept = (conceptKey) => {
  if (!progressStore.isConceptUnlocked(29, conceptKey)) {
    progressStore.unlockConcept(29, conceptKey)
    return true
  }
  return false
}

// ========== 计算属性 ==========

// ETH价格显示
const ethPriceDisplay = computed(() => {
  return (ethPrice.value * 1e10 / 1e18).toLocaleString('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  })
})

// 用户资产显示
const userCollateralDisplay = computed(() => (userCollateral.value / 1e18).toFixed(4))
const userCollateralUsdDisplay = computed(() => userCollateralValue.value.toLocaleString('en-US', {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2
}))
const userDebtDisplay = computed(() => (userDebt.value / 1e18).toLocaleString('en-US', {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2
}))
const userBalanceDisplay = computed(() => (userSUSDBalance.value / 1e18).toLocaleString('en-US', {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2
}))
const userHealthFactorDisplay = computed(() => userHealthFactor.value.toFixed(2))
const maxMintableDisplay = computed(() => Math.floor(maxMintable.value / 1e18).toLocaleString())
const remainingMintableDisplay = computed(() => Math.floor(remainingMintable.value / 1e18).toLocaleString())

// 健康因子样式
const healthFactorClass = computed(() => {
  if (userHealthFactor.value >= 200) return 'safe'
  if (userHealthFactor.value >= 150) return 'warning'
  return 'danger'
})

const healthFactorStatus = computed(() => {
  if (userHealthFactor.value >= 200) return '安全 ✅'
  if (userHealthFactor.value >= 150) return '注意 ⚠️'
  return '危险 🚨'
})

// 系统抵押率样式
const systemRatioClass = computed(() => {
  if (systemCollateralRatio.value >= 200) return 'safe'
  if (systemCollateralRatio.value >= 150) return 'warning'
  return 'danger'
})

// 存入预览
const depositValuePreview = computed(() => {
  return (depositAmount.value * ethPrice.value * 1e10 / 1e18).toLocaleString('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  })
})

// 铸造预览健康因子
const previewHealthFactor = computed(() => {
  if (userDebt.value + mintAmount.value === 0) return 999
  const newDebt = userDebt.value + mintAmount.value
  return ((userCollateralValue.value * 100) / newDebt).toFixed(2)
})

const previewHealthFactorClass = computed(() => {
  const factor = parseFloat(previewHealthFactor.value)
  if (factor >= 200) return 'safe'
  if (factor >= 150) return 'warning'
  return 'danger'
})

// 销毁预览健康因子
const previewBurnHealthFactor = computed(() => {
  if (userDebt.value - burnAmount.value <= 0) return 999
  const newDebt = userDebt.value - burnAmount.value
  return ((userCollateralValue.value * 100) / newDebt).toFixed(2)
})

const previewBurnHealthFactorClass = computed(() => {
  const factor = parseFloat(previewBurnHealthFactor.value)
  if (factor >= 200) return 'safe'
  if (factor >= 150) return 'warning'
  return 'danger'
})

// 提取预览
const maxWithdrawable = computed(() => {
  if (userDebt.value === 0) return userCollateral.value / 1e18
  const requiredCollateral = (userDebt.value * 150 * 1e18) / (ethPrice.value * 1e10 * 100)
  return Math.max(0, (userCollateral.value - requiredCollateral) / 1e18)
})

const canWithdraw = computed(() => {
  return withdrawAmount.value > 0 && withdrawAmount.value <= maxWithdrawable.value
})

const previewWithdrawHealthFactor = computed(() => {
  const newCollateral = userCollateral.value - withdrawAmount.value * 1e18
  if (newCollateral <= 0 || userDebt.value === 0) return 999
  const newCollateralValue = (newCollateral * ethPrice.value * 1e10) / 1e36
  return ((newCollateralValue * 100) / userDebt.value).toFixed(2)
})

const previewWithdrawHealthFactorClass = computed(() => {
  const factor = parseFloat(previewWithdrawHealthFactor.value)
  if (factor >= 200) return 'safe'
  if (factor >= 150) return 'warning'
  return 'danger'
})

// ========== 事件处理 ==========

// 点击架构图
const handleArchitectureClick = () => {
  if (unlockConcept('over_collateralization')) {
    showMessage('✅ 已了解超额抵押机制！🎉 恭喜解锁：超额抵押机制！每发行1美元稳定币需要超过1美元的加密资产作为抵押。👉 点击「📊 抵押率与数学原理」面板了解详细计算！')
    currentHint.value = getDay29Hint('over_collateralization')
  } else {
    currentHint.value = '🏦 超额抵押是稳定币系统的核心机制。👉 点击「📊 抵押率与数学原理」面板了解详细计算！'
  }
}

// 点击数学面板（顺序解锁）
const handleMathPanelClick = () => {
  // 第一次点击：解锁 collateral_ratio
  if (!progressStore.isConceptUnlocked(29, 'collateral_ratio')) {
    unlockConcept('collateral_ratio')
    showMessage('✅ 已了解抵押率计算！🎉 恭喜解锁：抵押率计算！150%意味着50%安全缓冲。👉 再次点击同一面板了解价格预言机！')
    currentHint.value = getDay29Hint('collateral_ratio')
    return
  }
  // 第二次点击：解锁 price_oracle
  if (!progressStore.isConceptUnlocked(29, 'price_oracle')) {
    unlockConcept('price_oracle')
    showMessage('✅ 已了解价格预言机！🎉 恭喜解锁：价格预言机！Chainlink提供可靠的ETH/USD价格数据。👉 再次点击了解健康因子！')
    currentHint.value = getDay29Hint('price_oracle')
    return
  }
  // 第三次点击：解锁 health_factor
  if (!progressStore.isConceptUnlocked(29, 'health_factor')) {
    unlockConcept('health_factor')
    showMessage('✅ 已了解健康因子！🎉 恭喜解锁：健康因子！低于150%可被清算。👉 再次点击了解小数位转换！')
    currentHint.value = getDay29Hint('health_factor')
    return
  }
  // 第四次点击：解锁 decimal_conversion
  if (!progressStore.isConceptUnlocked(29, 'decimal_conversion')) {
    unlockConcept('decimal_conversion')
    showMessage('✅ 已了解小数位转换！🎉 恭喜解锁：小数位转换！8位→18位需要乘以1e10。👉 现在存入ETH抵押品开始实践！')
    currentHint.value = getDay29Hint('decimal_conversion')
    return
  }
  // 都已解锁
  currentHint.value = '📖 你已经了解了所有数学原理！👉 现在存入一些ETH抵押品开始实践操作！'
}

// 存入抵押品
const handleDeposit = () => {
  const amount = depositAmount.value * 1e18
  const result = depositCollateral(amount)
  showMessage(result.message, !result.success)
  if (result.success) {
    result.hints.forEach(hint => unlockConcept(hint))
    currentHint.value = result.nextStep
    depositAmount.value = 0
  }
}

// 铸造稳定币
const handleMint = () => {
  const amount = mintAmount.value * 1e18
  const result = mintStablecoin(amount)
  showMessage(result.message, !result.success)
  if (result.success) {
    result.hints.forEach(hint => unlockConcept(hint))
    currentHint.value = result.nextStep
    mintAmount.value = 0
  }
}

// 销毁稳定币
const handleBurn = () => {
  const amount = burnAmount.value * 1e18
  const result = burnStablecoin(amount)
  showMessage(result.message, !result.success)
  if (result.success) {
    result.hints.forEach(hint => unlockConcept(hint))
    currentHint.value = result.nextStep
    burnAmount.value = 0
  }
}

// 提取抵押品
const handleWithdraw = () => {
  const amount = withdrawAmount.value * 1e18
  const result = withdrawCollateral(amount)
  showMessage(result.message, !result.success)
  if (result.success) {
    result.hints.forEach(hint => unlockConcept(hint))
    currentHint.value = result.nextStep
    withdrawAmount.value = 0
  }
}

// 更新价格
const updatePrice = (price) => {
  const result = updateEthPrice(price)
  showMessage(result.message)
  if (result.candidates > 0) {
    currentHint.value = `⚠️ 发现 ${result.candidates} 个可清算头寸！👉 前往清算区执行清算！`
  }
}

// 执行清算
const handleLiquidate = (userAddress) => {
  const result = liquidate(userAddress)
  showMessage(result.message, !result.success)
  if (result.success) {
    result.hints.forEach(hint => unlockConcept(hint))
    currentHint.value = result.nextStep
  }
}

// ========== 生命周期 ==========
onMounted(() => {
  if (unlockedConcepts.value.length === 0) {
    currentHint.value = '👆 欢迎来到Day 29！👉 点击「🏦 稳定币系统架构」了解超额抵押机制！'
  }
})
</script>

<style scoped>
/* Day 29 特有样式 */

/* 基础 section 样式 */
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

/* 不同区块的渐变底色和边框 */
.architecture-section {
  background: linear-gradient(135deg, rgba(99, 102, 241, 0.08) 0%, rgba(168, 85, 247, 0.08) 100%);
  border-color: rgba(99, 102, 241, 0.2);
  cursor: pointer;
}

.math-panel {
  background: linear-gradient(135deg, rgba(59, 130, 246, 0.08) 0%, rgba(99, 102, 241, 0.08) 100%);
  border-color: rgba(59, 130, 246, 0.2);
  cursor: pointer;
}

.oracle-panel {
  background: linear-gradient(135deg, rgba(139, 92, 246, 0.08) 0%, rgba(168, 85, 247, 0.08) 100%);
  border-color: rgba(139, 92, 246, 0.2);
}

.assets-panel {
  background: linear-gradient(135deg, rgba(34, 197, 94, 0.08) 0%, rgba(16, 185, 129, 0.08) 100%);
  border-color: rgba(34, 197, 94, 0.2);
}

.operations-section {
  background: linear-gradient(135deg, rgba(245, 158, 11, 0.08) 0%, rgba(234, 179, 8, 0.08) 100%);
  border-color: rgba(245, 158, 11, 0.2);
}

.liquidation-section {
  background: linear-gradient(135deg, rgba(239, 68, 68, 0.08) 0%, rgba(248, 113, 113, 0.08) 100%);
  border-color: rgba(239, 68, 68, 0.2);
}

.stats-section,
.events-section {
  background: linear-gradient(135deg, rgba(100, 116, 139, 0.08) 0%, rgba(148, 163, 184, 0.08) 100%);
  border-color: rgba(100, 116, 139, 0.2);
}

/* section 头部样式 */
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

/* hover-hint 小字样式 */
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
  gap: 10px;
  padding: 20px;
  flex-wrap: wrap;
}

.flow-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px 20px;
  border-radius: 12px;
  background: linear-gradient(135deg, var(--bg-secondary), var(--bg-tertiary));
  border: 2px solid var(--border-color);
  min-width: 100px;
  position: relative;
}

.flow-box.user {
  border-color: #3b82f6;
}

.flow-box.contract {
  border-color: #8b5cf6;
  min-width: 140px;
}

.flow-box.stablecoin {
  border-color: #10b981;
}

.box-icon {
  font-size: 2em;
  margin-bottom: 5px;
}

.box-label {
  font-weight: 600;
  color: var(--text-primary);
}

.box-sublabel {
  font-size: 0.85em;
  color: var(--text-secondary);
}

.lock-badge {
  position: absolute;
  bottom: -10px;
  font-size: 0.7em;
  background: var(--bg-secondary);
  padding: 2px 8px;
  border-radius: 10px;
  border: 1px solid var(--border-color);
}

.flow-arrow {
  font-size: 1.5em;
  color: var(--text-secondary);
}

.formula-display {
  margin-top: 15px;
  padding: 10px;
  background: var(--bg-tertiary);
  border-radius: 8px;
  text-align: center;
}

.formula-label {
  font-size: 0.85em;
  color: var(--text-secondary);
  margin-bottom: 5px;
}

.formula {
  font-family: monospace;
  font-size: 0.9em;
  color: var(--text-primary);
}

/* 数学面板 */
.math-content {
  padding: 15px;
}

.math-item {
  display: flex;
  justify-content: space-between;
  padding: 8px 0;
  border-bottom: 1px solid var(--border-color);
}

.math-value {
  font-weight: 600;
  color: var(--text-primary);
}

.math-value.highlight {
  color: #22c55e;
  font-size: 1.2em;
}

.math-formula {
  margin-top: 15px;
  padding: 10px;
  background: var(--bg-tertiary);
  border-radius: 8px;
}

.formula-title {
  font-size: 0.85em;
  color: var(--text-secondary);
  margin-bottom: 5px;
}

.math-formula code {
  font-family: monospace;
  font-size: 0.9em;
  color: var(--accent-primary);
}

.math-example {
  margin-top: 15px;
  padding: 10px;
  background: rgba(34, 197, 94, 0.1);
  border-radius: 8px;
  border-left: 3px solid #22c55e;
}

.example-title {
  font-weight: 600;
  color: #22c55e;
  margin-bottom: 5px;
}

.example-line {
  font-size: 0.9em;
  color: var(--text-secondary);
  padding: 2px 0;
}

/* 价格预言机面板 */
.oracle-content {
  padding: 15px;
}

.price-display {
  text-align: center;
  padding: 15px;
  background: linear-gradient(135deg, rgba(139, 92, 246, 0.1), rgba(59, 130, 246, 0.1));
  border-radius: 12px;
  margin-bottom: 15px;
}

.price-label {
  font-size: 0.85em;
  color: var(--text-secondary);
}

.price-value {
  font-size: 2em;
  font-weight: 700;
  color: #8b5cf6;
}

.price-source {
  font-size: 0.8em;
  color: var(--text-secondary);
}

.price-control {
  margin-top: 15px;
}

.control-label {
  font-size: 0.9em;
  color: var(--text-secondary);
  margin-bottom: 10px;
}

.price-buttons {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  margin-bottom: 10px;
}

.price-btn {
  padding: 6px 12px;
  border: 1px solid var(--border-color);
  border-radius: 6px;
  background: var(--bg-secondary);
  color: var(--text-primary);
  cursor: pointer;
  font-size: 0.85em;
  transition: all 0.2s;
}

.price-btn:hover {
  background: var(--accent-primary);
  color: white;
}

.price-btn.warning {
  border-color: #f59e0b;
  color: #f59e0b;
}

.price-btn.warning:hover {
  background: #f59e0b;
  color: white;
}

.price-btn.danger {
  border-color: #ef4444;
  color: #ef4444;
}

.price-btn.danger:hover {
  background: #ef4444;
  color: white;
}

.price-input-row {
  display: flex;
  gap: 8px;
}

.price-input {
  flex: 1;
  padding: 8px 12px;
  border: 1px solid var(--border-color);
  border-radius: 6px;
  background: var(--bg-secondary);
  color: var(--text-primary);
}

.liquidation-alert {
  margin-top: 10px;
  padding: 10px;
  background: rgba(239, 68, 68, 0.1);
  border: 1px solid #ef4444;
  border-radius: 8px;
  color: #ef4444;
  text-align: center;
  font-weight: 600;
}

/* 资产面板 */
.assets-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  padding: 15px;
}

.asset-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px;
  background: var(--bg-secondary);
  border-radius: 12px;
  border: 2px solid var(--border-color);
  text-align: center;
}

.asset-card.safe {
  border-color: #22c55e;
  background: rgba(34, 197, 94, 0.1);
}

.asset-card.warning {
  border-color: #f59e0b;
  background: rgba(245, 158, 11, 0.1);
}

.asset-card.danger {
  border-color: #ef4444;
  background: rgba(239, 68, 68, 0.1);
}

.asset-icon {
  font-size: 1.5em;
  margin-bottom: 5px;
}

.asset-label {
  font-size: 0.8em;
  color: var(--text-secondary);
}

.asset-value {
  font-size: 1.1em;
  font-weight: 600;
  color: var(--text-primary);
  margin: 5px 0;
}

.asset-usd {
  font-size: 0.75em;
  color: var(--text-secondary);
}

.asset-status {
  font-size: 0.8em;
  font-weight: 600;
}

.assets-summary {
  display: flex;
  justify-content: space-around;
  padding: 10px 15px;
  border-top: 1px solid var(--border-color);
}

.summary-item {
  text-align: center;
}

.summary-item span {
  display: block;
  font-size: 0.8em;
  color: var(--text-secondary);
}

.summary-item strong {
  color: var(--accent-primary);
}

/* 操作标签页 */
.operation-tabs {
  display: flex;
  gap: 5px;
  padding: 10px;
  border-bottom: 1px solid var(--border-color);
  overflow-x: auto;
}

.tab-btn {
  padding: 10px 15px;
  border: none;
  background: transparent;
  color: var(--text-secondary);
  cursor: pointer;
  font-size: 0.9em;
  white-space: nowrap;
  border-radius: 8px;
  transition: all 0.2s;
}

.tab-btn:hover {
  background: var(--bg-tertiary);
}

.tab-btn.active {
  background: var(--accent-primary);
  color: white;
}

.operation-panel {
  padding: 20px;
}

.operation-panel h4 {
  margin-bottom: 15px;
  color: var(--text-primary);
}

.form-group {
  margin-bottom: 15px;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
  color: var(--text-secondary);
  font-size: 0.9em;
}

.form-input {
  width: 100%;
  padding: 10px 12px;
  border: 1px solid var(--border-color);
  border-radius: 8px;
  background: var(--bg-secondary);
  color: var(--text-primary);
  font-size: 1em;
}

.quick-buttons {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  margin-bottom: 15px;
}

.quick-btn {
  padding: 6px 12px;
  border: 1px solid var(--border-color);
  border-radius: 6px;
  background: var(--bg-tertiary);
  color: var(--text-secondary);
  cursor: pointer;
  font-size: 0.8em;
  transition: all 0.2s;
}

.quick-btn:hover {
  background: var(--accent-primary);
  color: white;
}

.preview {
  background: var(--bg-tertiary);
  padding: 12px;
  border-radius: 8px;
  margin-bottom: 15px;
}

.preview-item {
  display: flex;
  justify-content: space-between;
  padding: 5px 0;
  font-size: 0.9em;
}

.preview-item .safe {
  color: #22c55e;
}

.preview-item .warning {
  color: #f59e0b;
}

.preview-item .danger {
  color: #ef4444;
}

.warning-text {
  margin-top: 10px;
  padding: 10px;
  background: rgba(239, 68, 68, 0.1);
  border-radius: 8px;
  color: #ef4444;
  font-size: 0.85em;
}

/* 清算区 */
.liquidation-content {
  padding: 15px;
}

.no-liquidation {
  text-align: center;
  padding: 30px;
}

.info-icon {
  font-size: 3em;
  margin-bottom: 10px;
}

.info-text {
  font-size: 1.1em;
  color: var(--text-primary);
  margin-bottom: 5px;
}

.info-hint {
  font-size: 0.85em;
  color: var(--text-secondary);
}

.liquidation-header {
  padding: 10px;
  background: rgba(239, 68, 68, 0.1);
  border-radius: 8px;
  color: #ef4444;
  font-weight: 600;
  margin-bottom: 10px;
}

.liquidation-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  background: var(--bg-secondary);
  border-radius: 12px;
  margin-bottom: 10px;
  border: 1px solid var(--border-color);
}

.liquidation-user {
  font-family: monospace;
  font-size: 0.9em;
  color: var(--text-secondary);
  margin-bottom: 5px;
}

.liquidation-stats {
  display: flex;
  gap: 15px;
  font-size: 0.85em;
  color: var(--text-secondary);
}

.health-warning {
  color: #ef4444;
  font-weight: 600;
}

.liquidation-reward {
  text-align: right;
}

.reward-label {
  font-size: 0.8em;
  color: var(--text-secondary);
}

.reward-value {
  font-size: 1.1em;
  font-weight: 600;
  color: #22c55e;
  margin: 5px 0;
}

/* 统计面板 */
.stats-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 15px;
  padding: 15px;
}

.stat-item {
  text-align: center;
}

.stat-label {
  display: block;
  font-size: 0.8em;
  color: var(--text-secondary);
  margin-bottom: 5px;
}

.stat-value {
  font-size: 1.1em;
  font-weight: 600;
  color: var(--text-primary);
}

.stat-value.safe {
  color: #22c55e;
}

.stat-value.warning {
  color: #f59e0b;
}

.stat-value.danger {
  color: #ef4444;
}

/* 事件日志 */
.events-list {
  padding: 15px;
}

.no-events {
  text-align: center;
  color: var(--text-secondary);
  padding: 20px;
}

.event-item {
  display: flex;
  gap: 10px;
  padding: 10px;
  background: var(--bg-secondary);
  border-radius: 8px;
  margin-bottom: 8px;
  font-size: 0.85em;
}

.event-time {
  color: var(--text-secondary);
  font-size: 0.8em;
  min-width: 80px;
}

.event-type {
  font-weight: 600;
  color: var(--accent-primary);
  min-width: 100px;
}

.event-details {
  color: var(--text-secondary);
}

/* 按钮样式 */
.day-action-btn.small {
  padding: 6px 12px;
  font-size: 0.85em;
}

.day-action-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

/* Day 29 特有样式 - 不包含 message-toast（使用全局样式） */

/* 响应式 */
@media (max-width: 768px) {
  .architecture-flow {
    flex-direction: column;
  }

  .flow-arrow {
    transform: rotate(90deg);
  }

  .assets-grid {
    grid-template-columns: 1fr;
  }

  .stats-grid {
    grid-template-columns: 1fr;
  }

  .liquidation-item {
    flex-direction: column;
    gap: 10px;
  }

  .liquidation-reward {
    text-align: center;
  }
}
</style>
