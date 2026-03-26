<template>
  <div class="day-25-content day-content">
    <div class="content-layout" :class="{ 'single-column': unlockedConcepts.length === 0 }">
      <!-- 左栏：交互操作区 -->
      <div class="left-column">
        <!-- AMM架构可视化 -->
        <div class="architecture-section" @click="handleArchitectureClick">
          <h4>📊 AMM架构 - 点击了解恒定乘积公式</h4>
          <div class="amm-visual">
            <div class="pool-container">
              <div class="token-box token-a">
                <div class="token-icon">🔵</div>
                <div class="token-label">Token A</div>
                <div class="token-reserve">{{ reserveA.toFixed(2) }}</div>
              </div>
              <div class="pool-center">
                <div class="formula">x × y = k</div>
                <div class="k-value">k = {{ (reserveA * reserveB).toFixed(0) }}</div>
              </div>
              <div class="token-box token-b">
                <div class="token-icon">🟢</div>
                <div class="token-label">Token B</div>
                <div class="token-reserve">{{ reserveB.toFixed(2) }}</div>
              </div>
            </div>
            <div class="price-info">
              当前价格: 1 A = {{ currentPrice.toFixed(4) }} B
            </div>
          </div>
        </div>

        <!-- 流动性池状态面板 -->
        <div class="pool-status-section" @click="handlePoolStatusClick">
          <h4>💰 流动性池状态（点击查看流动性池机制）</h4>
          <div class="pool-stats">
            <div class="stat-card">
              <div class="stat-icon">🔵</div>
              <div class="stat-label">Token A 储备</div>
              <div class="stat-value">{{ reserveA.toFixed(2) }}</div>
            </div>
            <div class="stat-card lp-card">
              <div class="stat-icon">🎫</div>
              <div class="stat-label">LP代币总供应</div>
              <div class="stat-value">{{ totalSupply.toFixed(2) }}</div>
            </div>
            <div class="stat-card">
              <div class="stat-icon">🟢</div>
              <div class="stat-label">Token B 储备</div>
              <div class="stat-value">{{ reserveB.toFixed(2) }}</div>
            </div>
          </div>
        </div>

        <!-- 价格曲线可视化 -->
        <div class="price-curve-section" @click="handlePriceCurveClick">
          <h4>📈 价格曲线 - 点击了解自动价格发现</h4>
          <div class="curve-chart">
            <svg viewBox="0 0 300 150" class="curve-svg">
              <!-- 坐标轴 -->
              <line x1="30" y1="130" x2="280" y2="130" stroke="#666" stroke-width="1"/>
              <line x1="30" y1="130" x2="30" y2="20" stroke="#666" stroke-width="1"/>
              <!-- 价格曲线 -->
              <path
                :d="priceCurvePath"
                fill="none"
                stroke="#3b82f6"
                stroke-width="2"
              />
              <!-- 当前点 -->
              <circle
                :cx="currentPoint.x"
                :cy="currentPoint.y"
                r="5"
                fill="#f59e0b"
              />
            </svg>
            <div class="curve-labels">
              <span>Token A 数量 →</span>
              <span>价格 ↑</span>
            </div>
          </div>
        </div>

        <!-- 操作标签页 -->
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

        <!-- 添加流动性面板 -->
        <div v-if="activeTab === 'addLiquidity'" class="operation-panel">
          <h4>💧 添加流动性</h4>
          <div class="input-group">
            <label>Token A 数量:</label>
            <input
              v-model.number="addAmountA"
              type="number"
              placeholder="输入数量"
              min="0"
              :max="userBalances.tokenA"
            />
            <span class="balance-hint">余额: {{ userBalances.tokenA.toFixed(2) }}</span>
          </div>
          <div class="input-group">
            <label>Token B 数量:</label>
            <input
              v-model.number="addAmountB"
              type="number"
              placeholder="输入数量"
              min="0"
              :max="userBalances.tokenB"
            />
            <span class="balance-hint">余额: {{ userBalances.tokenB.toFixed(2) }}</span>
          </div>
          <div v-if="estimatedLP > 0" class="estimate">
            预计获得 LP代币: {{ estimatedLP.toFixed(2) }}
          </div>
          <button class="day-action-btn cyan" @click="handleAddLiquidity">
            💧 添加流动性
          </button>
        </div>

        <!-- 代币交换面板 -->
        <div v-if="activeTab === 'swap'" class="operation-panel">
          <h4>🔄 代币交换</h4>
          <div class="swap-direction">
            <button
              :class="['direction-btn', { active: swapDirection === 'AtoB' }]"
              @click="swapDirection = 'AtoB'"
            >
              🔵 A → 🟢 B
            </button>
            <button
              :class="['direction-btn', { active: swapDirection === 'BtoA' }]"
              @click="swapDirection = 'BtoA'"
            >
              🟢 B → 🔵 A
            </button>
          </div>
          <div class="input-group">
            <label>支付数量:</label>
            <input
              v-model.number="swapAmountIn"
              type="number"
              placeholder="输入数量"
              min="0"
            />
            <span class="balance-hint">
              余额: {{ swapDirection === 'AtoB' ? userBalances.tokenA.toFixed(2) : userBalances.tokenB.toFixed(2) }}
            </span>
          </div>
          <div v-if="swapAmountOut > 0" class="swap-preview">
            <div class="preview-item">
              <span>预计获得:</span>
              <span class="highlight">{{ swapAmountOut.toFixed(4) }} {{ swapDirection === 'AtoB' ? 'Token B' : 'Token A' }}</span>
            </div>
            <div class="preview-item">
              <span>价格影响:</span>
              <span :class="['impact', priceImpactClass]">{{ priceImpact.toFixed(2) }}%</span>
            </div>
            <div class="preview-item">
              <span>手续费 (0.3%):</span>
              <span>{{ (swapAmountIn * 0.003).toFixed(4) }}</span>
            </div>
          </div>
          <div class="input-group">
            <label>最小接收量 (滑点保护):</label>
            <input
              v-model.number="minAmountOut"
              type="number"
              placeholder="设置最小接收量"
              min="0"
            />
          </div>
          <button class="day-action-btn green" @click="handleSwap">
            🔄 交换
          </button>
        </div>

        <!-- 移除流动性面板 -->
        <div v-if="activeTab === 'removeLiquidity'" class="operation-panel">
          <h4>💸 移除流动性</h4>
          <div class="input-group">
            <label>LP代币数量:</label>
            <input
              v-model.number="removeAmount"
              type="number"
              placeholder="输入数量"
              min="0"
              :max="userBalances.lpToken"
            />
            <span class="balance-hint">余额: {{ userBalances.lpToken.toFixed(2) }}</span>
          </div>
          <div v-if="removeEstimate.amountA > 0" class="remove-preview">
            <div class="preview-item">
              <span>预计获得 Token A:</span>
              <span class="highlight">{{ removeEstimate.amountA.toFixed(4) }}</span>
            </div>
            <div class="preview-item">
              <span>预计获得 Token B:</span>
              <span class="highlight">{{ removeEstimate.amountB.toFixed(4) }}</span>
            </div>
          </div>
          <button class="day-action-btn red" @click="handleRemoveLiquidity">
            💸 移除流动性
          </button>
        </div>

        <!-- 滑点保护说明 -->
        <div class="slippage-section" @click="handleSlippageClick">
          <h4>🛡️ 滑点保护机制（点击查看）</h4>
          <div class="slippage-content">
            <p>什么是滑点？滑点是指交易执行价格与预期价格之间的差异。</p>
            <div class="code-block">
              <pre>require(amountOut >= minAmountOut, "Slippage too high");</pre>
            </div>
            <p>如果实际输出低于设定的最小值，交易将回滚保护用户。</p>
          </div>
        </div>

        <!-- 用户资产面板 -->
        <div class="user-assets-section">
          <h4>👤 我的资产</h4>
          <div class="assets-grid">
            <div class="asset-item">
              <span class="asset-label">🔵 Token A</span>
              <span class="asset-value">{{ userBalances.tokenA.toFixed(2) }}</span>
            </div>
            <div class="asset-item">
              <span class="asset-label">🟢 Token B</span>
              <span class="asset-value">{{ userBalances.tokenB.toFixed(2) }}</span>
            </div>
            <div class="asset-item lp">
              <span class="asset-label">🎫 LP代币</span>
              <span class="asset-value">{{ userBalances.lpToken.toFixed(2) }}</span>
            </div>
          </div>
        </div>

        <!-- 交易历史 -->
        <div v-if="transactions.length > 0" class="transaction-history">
          <h4>📜 交易历史</h4>
          <div class="transaction-list">
            <div
              v-for="(tx, index) in transactions.slice(0, 5)"
              :key="index"
              class="transaction-item"
            >
              <span class="tx-type">{{ getTxTypeLabel(tx.type) }}</span>
              <span class="tx-details">{{ getTxDetails(tx) }}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- 右栏：知识点面板 -->
      <div class="right-column">
        <KnowledgePanel
          v-if="unlockedConcepts.length > 0"
          :current-day="25"
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
import { ref, computed, onMounted, watch } from 'vue'
import { useProgressStore } from '../../../stores/progressStore'
import { getFullCode } from '../../../data/days'
import { getDay25Hint, getDay25ExplanationHint } from '../../../data/concepts'
import { useDay25 } from '../../../composables/useDay25'
import KnowledgePanel from '../../shared/KnowledgePanel.vue'
import FullCodeModal from '../../shared/FullCodeModal.vue'

const progressStore = useProgressStore()
const {
  reserveA,
  reserveB,
  totalSupply,
  userBalances,
  transactions,
  currentPrice,
  addLiquidity,
  swapAforB,
  swapBforA,
  removeLiquidity,
  calculateSwapOutput,
  calculatePriceImpact
} = useDay25()

// 状态
const activeTab = ref('addLiquidity')
const swapDirection = ref('AtoB')
const showFullCode = ref(false)
const currentHint = ref('')

// 输入值
const addAmountA = ref('')
const addAmountB = ref('')
const swapAmountIn = ref('')
const minAmountOut = ref('')
const removeAmount = ref('')

// 标签页配置
const tabs = [
  { key: 'addLiquidity', label: '添加流动性', icon: '💧' },
  { key: 'swap', label: '代币交换', icon: '🔄' },
  { key: 'removeLiquidity', label: '移除流动性', icon: '💸' }
]

// 计算属性
const unlockedConcepts = computed(() => {
  return progressStore.getDayProgress(25)?.unlockedConcepts || []
})

const progressPercentage = computed(() => {
  const progress = progressStore.getDayProgress(25)
  if (!progress || progress.totalConcepts === 0) return 0
  return Math.round((progress.unlockedConcepts.length / progress.totalConcepts) * 100)
})

const fullCode = computed(() => getFullCode(25))

// 添加流动性预估
const estimatedLP = computed(() => {
  const a = Number(addAmountA.value) || 0
  const b = Number(addAmountB.value) || 0
  if (a <= 0 || b <= 0) return 0
  
  if (totalSupply.value === 0) {
    return Math.sqrt(a * b)
  } else {
    return Math.min(
      Math.floor(a * totalSupply.value / reserveA.value),
      Math.floor(b * totalSupply.value / reserveB.value)
    )
  }
})

// 交换预估
const swapAmountOut = computed(() => {
  const amount = Number(swapAmountIn.value) || 0
  if (amount <= 0) return 0
  
  if (swapDirection.value === 'AtoB') {
    return calculateSwapOutput(amount, reserveA.value, reserveB.value)
  } else {
    return calculateSwapOutput(amount, reserveB.value, reserveA.value)
  }
})

// 价格影响
const priceImpact = computed(() => {
  const amount = Number(swapAmountIn.value) || 0
  if (amount <= 0) return 0
  
  if (swapDirection.value === 'AtoB') {
    return calculatePriceImpact(amount, reserveA.value)
  } else {
    return calculatePriceImpact(amount, reserveB.value)
  }
})

const priceImpactClass = computed(() => {
  if (priceImpact.value < 1) return 'low'
  if (priceImpact.value < 5) return 'medium'
  return 'high'
})

// 移除流动性预估
const removeEstimate = computed(() => {
  const liquidity = Number(removeAmount.value) || 0
  if (liquidity <= 0 || totalSupply.value === 0) {
    return { amountA: 0, amountB: 0 }
  }
  
  return {
    amountA: Math.floor(liquidity * reserveA.value / totalSupply.value),
    amountB: Math.floor(liquidity * reserveB.value / totalSupply.value)
  }
})

// 价格曲线路径
const priceCurvePath = computed(() => {
  const points = []
  const baseReserve = 1000
  const k = baseReserve * baseReserve
  
  for (let i = 0; i <= 20; i++) {
    const x = 50 + i * 200 / 20
    const reserveA = 100 + i * 1900 / 20
    const reserveB = k / reserveA
    const price = reserveB / reserveA
    const y = 130 - Math.min(price * 50, 110)
    points.push(`${i === 0 ? 'M' : 'L'} ${x} ${y}`)
  }
  
  return points.join(' ')
})

// 当前点在曲线上的位置
const currentPoint = computed(() => {
  if (reserveA.value === 0) return { x: 30, y: 130 }
  
  const baseReserve = 1000
  const k = baseReserve * baseReserve
  const price = reserveB.value / reserveA.value
  
  const x = 30 + (reserveA.value / 2000) * 250
  const y = 130 - Math.min(price * 50, 110)
  
  return { x: Math.min(Math.max(x, 30), 280), y: Math.min(Math.max(y, 20), 130) }
})

// 方法
const unlockConcept = (concept) => {
  progressStore.unlockConcept(25, concept)
}

const showMessage = (message) => {
  // 使用全局消息提示
  const event = new CustomEvent('show-message', { detail: message })
  window.dispatchEvent(event)
}

// 点击架构图
const handleArchitectureClick = () => {
  if (!unlockedConcepts.value.includes('amm_formula')) {
    unlockConcept('amm_formula')
    currentHint.value = getDay25ExplanationHint('amm_formula') + ' 📍 向下滚动到「💰 流动性池状态」区块！'
    showMessage(getDay25Hint('amm_formula'))
  } else {
    currentHint.value = getDay25ExplanationHint('amm_formula') + ' 📍 向下滚动到「💰 流动性池状态」区块！'
    showMessage('✅ 已查看AMM架构！📍 向下滚动到「💰 流动性池状态」区块！')
  }
}

// 点击池状态
const handlePoolStatusClick = () => {
  if (!unlockedConcepts.value.includes('liquidity_pool')) {
    unlockConcept('liquidity_pool')
    currentHint.value = getDay25ExplanationHint('liquidity_pool') + ' 📍 向下滚动查看价格曲线！'
    showMessage(getDay25Hint('liquidity_pool'))
  } else {
    currentHint.value = getDay25ExplanationHint('liquidity_pool') + ' 📍 向下滚动查看价格曲线！'
    showMessage('✅ 已查看流动性池状态！📍 向下滚动查看价格曲线！')
  }
}

// 点击价格曲线
const handlePriceCurveClick = () => {
  if (!unlockedConcepts.value.includes('constant_product')) {
    unlockConcept('constant_product')
    currentHint.value = getDay25ExplanationHint('constant_product') + ' 📍 向下滚动，添加流动性获得LP代币！'
    showMessage(getDay25Hint('constant_product'))
  } else {
    currentHint.value = getDay25ExplanationHint('constant_product') + ' 📍 向下滚动，添加流动性获得LP代币！'
    showMessage('✅ 已查看价格曲线！📍 向下滚动，添加流动性获得LP代币！')
  }
}

// 点击滑点保护
const handleSlippageClick = () => {
  if (!unlockedConcepts.value.includes('slippage_calculation')) {
    unlockConcept('slippage_calculation')
    currentHint.value = getDay25ExplanationHint('slippage_calculation') + ' 📍 查看完整代码回顾所有知识点！'
    showMessage(getDay25Hint('slippage_calculation'))
  } else {
    currentHint.value = getDay25ExplanationHint('slippage_calculation') + ' 📍 查看完整代码回顾所有知识点！'
    showMessage('✅ 已查看滑点保护说明！📍 查看完整代码回顾所有知识点！')
  }
}

// 添加流动性
const handleAddLiquidity = () => {
  const result = addLiquidity(Number(addAmountA.value), Number(addAmountB.value))

  if (result.success) {
    // 解锁概念
    result.hints.forEach(hint => unlockConcept(hint))

    // 更新提示
    currentHint.value = getDay25ExplanationHint(result.hints[0] || 'lp_token') + ' 👉 切换到「代币交换」标签页体验交换功能！'
    showMessage(result.nextStep)

    // 清空输入
    addAmountA.value = ''
    addAmountB.value = ''
  } else {
    showMessage(result.message)
  }
}

// 交换
const handleSwap = () => {
  let result
  
  if (swapDirection.value === 'AtoB') {
    result = swapAforB(Number(swapAmountIn.value), Number(minAmountOut.value))
  } else {
    result = swapBforA(Number(swapAmountIn.value), Number(minAmountOut.value))
  }
  
  if (result.success) {
    // 解锁概念
    result.hints.forEach(hint => unlockConcept(hint))

    // 根据是否解锁新概念给出不同提示
    if (result.hints.length > 0) {
      // 首次解锁 swap_mechanism
      currentHint.value = getDay25ExplanationHint(result.hints[0]) + ' 📍 切换到「➖ 移除流动性」标签页取回你的代币！'
      showMessage(getDay25Hint(result.hints[0]))
    } else {
      // 已经解锁过了，提示去做其他操作
      currentHint.value = '🔄 交换成功！📍 尝试切换到「➖ 移除流动性」标签页取回你的代币！'
      showMessage('✅ 交换成功！继续交换或切换到「➖ 移除流动性」标签页取回代币！')
    }

    // 清空输入
    swapAmountIn.value = ''
    minAmountOut.value = ''
  } else {
    showMessage(result.message)
  }
}

// 移除流动性
const handleRemoveLiquidity = () => {
  const result = removeLiquidity(Number(removeAmount.value))

  if (result.success) {
    // 解锁概念
    result.hints.forEach(hint => unlockConcept(hint))

    // 根据 hints 调整提示
    if (result.hints.length > 0) {
      const unlockedConcept = result.hints[0]
      currentHint.value = getDay25ExplanationHint(unlockedConcept) + ' 📍 向下滚动查看滑点保护说明了解重要安全机制！'
      showMessage(getDay25Hint(unlockedConcept))
    } else {
      // 如果没有新概念解锁，检查滑点保护
      if (!unlockedConcepts.value.includes('slippage_protection')) {
        currentHint.value = '🎉 移除流动性成功！📍 向下滚动查看滑点保护说明了解重要安全机制！'
        showMessage('✅ 移除流动性成功！向下滚动查看滑点保护说明！')
      } else {
        currentHint.value = '🎉 移除流动性成功！📍 查看完整代码回顾所有知识点！'
        showMessage('✅ 移除流动性成功！查看完整代码回顾所有知识点！')
      }
    }

    // 清空输入
    removeAmount.value = ''
  } else {
    showMessage(result.message)
  }
}

// 交易类型标签
const getTxTypeLabel = (type) => {
  const labels = {
    addLiquidity: '💧 添加流动性',
    swap: '🔄 交换',
    removeLiquidity: '💸 移除流动性'
  }
  return labels[type] || type
}

// 交易详情
const getTxDetails = (tx) => {
  if (tx.type === 'addLiquidity') {
    return `${tx.amountA} A + ${tx.amountB} B → ${tx.liquidity.toFixed(2)} LP`
  } else if (tx.type === 'swap') {
    return `${tx.amountIn} ${tx.direction} → ${tx.amountOut.toFixed(4)}`
  } else if (tx.type === 'removeLiquidity') {
    return `${tx.liquidity.toFixed(2)} LP → ${tx.amountAOut} A + ${tx.amountBOut} B`
  }
  return ''
}

// 自动设置最小接收量
watch(swapAmountOut, (newVal) => {
  if (newVal > 0 && !minAmountOut.value) {
    // 默认设置 0.5% 滑点容忍
    minAmountOut.value = Math.floor(newVal * 0.995 * 10000) / 10000
  }
})

// 初始化
onMounted(() => {
  if (unlockedConcepts.value.length === 0) {
    currentHint.value = '👆 欢迎来到 Day 25！点击AMM架构图了解恒定乘积公式！'
  }
})
</script>

<style scoped>
.day-25-content {
  padding: 20px;
}

/* 架构可视化 - 日间模式半透明渐变浅色 */
.architecture-section,
.pool-status-section,
.price-curve-section,
.slippage-section {
  background: var(--bg-surface-2, rgba(59, 130, 246, 0.12));
  border: 1px solid var(--border-main, rgba(59, 130, 246, 0.3));
  border-radius: 12px;
  padding: 16px;
  margin-bottom: 16px;
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;
}

.user-assets-section,
.operation-panel,
.transaction-history {
  background: var(--bg-surface-2, rgba(100, 116, 139, 0.12));
  border: 1px solid var(--border-main, rgba(100, 116, 139, 0.25));
  border-radius: 12px;
  padding: 16px;
  margin-bottom: 16px;
  cursor: default;
}

.architecture-section:hover,
.pool-status-section:hover,
.price-curve-section:hover,
.slippage-section:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(59, 130, 246, 0.15);
  border-color: rgba(59, 130, 246, 0.3);
}

.user-assets-section:hover,
.operation-panel:hover,
.transaction-history:hover {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
}

.architecture-section h4,
.pool-status-section h4,
.user-assets-section h4,
.price-curve-section h4,
.operation-panel h4,
.slippage-section h4,
.transaction-history h4 {
  margin: 0 0 12px 0;
  color: var(--text-main);
  font-size: 14px;
  font-weight: 600;
}

/* AMM可视化 */
.amm-visual {
  text-align: center;
}

.pool-container {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-bottom: 12px;
}

.token-box {
  background: linear-gradient(135deg, rgba(59, 130, 246, 0.15) 0%, rgba(59, 130, 246, 0.08) 100%);
  border: 1px solid rgba(59, 130, 246, 0.25);
  border-radius: 12px;
  padding: 16px;
  text-align: center;
  min-width: 100px;
}

.token-box.token-b {
  background: linear-gradient(135deg, rgba(34, 197, 94, 0.15) 0%, rgba(34, 197, 94, 0.08) 100%);
  border: 1px solid rgba(34, 197, 94, 0.25);
}

.token-icon {
  font-size: 24px;
  margin-bottom: 4px;
}

.token-label {
  font-size: 12px;
  color: var(--text-muted);
  margin-bottom: 4px;
}

.token-reserve {
  font-size: 18px;
  font-weight: bold;
  color: var(--text-main);
}

.pool-center {
  text-align: center;
}

.formula {
  font-size: 20px;
  font-weight: bold;
  color: var(--accent-orange);
  margin-bottom: 4px;
}

.k-value {
  font-size: 12px;
  color: var(--text-muted);
}

.price-info {
  font-size: 14px;
  color: var(--text-secondary);
}

/* 池状态 */
.pool-stats {
  display: flex;
  gap: 12px;
  justify-content: space-between;
}

.stat-card {
  flex: 1;
  background: var(--bg-surface-3, rgba(100, 116, 139, 0.15));
  border: 1px solid var(--border-main, rgba(100, 116, 139, 0.25));
  border-radius: 8px;
  padding: 12px;
  text-align: center;
}

.stat-card.lp-card {
  background: linear-gradient(135deg, rgba(168, 85, 247, 0.18) 0%, rgba(168, 85, 247, 0.1) 100%);
  border: 1px solid rgba(168, 85, 247, 0.3);
}

.stat-icon {
  font-size: 20px;
  margin-bottom: 4px;
}

.stat-label {
  font-size: 11px;
  color: var(--text-secondary);
  margin-bottom: 4px;
}

.stat-value {
  font-size: 16px;
  font-weight: bold;
  color: var(--text-main);
}

/* 用户资产 */
.assets-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
}

.asset-item {
  background: var(--bg-surface-3, rgba(100, 116, 139, 0.15));
  border: 1px solid var(--border-main, rgba(100, 116, 139, 0.25));
  border-radius: 8px;
  padding: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.asset-item.lp {
  background: linear-gradient(135deg, rgba(168, 85, 247, 0.18) 0%, rgba(168, 85, 247, 0.1) 100%);
  border: 1px solid rgba(168, 85, 247, 0.3);
}

.asset-label {
  font-size: 12px;
  color: var(--text-secondary);
  margin-bottom: 4px;
}

.asset-value {
  font-size: 16px;
  font-weight: bold;
  color: var(--text-main);
}

/* 价格曲线 */
.curve-chart {
  position: relative;
}

.curve-svg {
  width: 100%;
  height: 150px;
}

.curve-labels {
  display: flex;
  justify-content: space-between;
  font-size: 11px;
  color: var(--text-muted);
  margin-top: 4px;
}

/* 标签页 */
.operation-tabs {
  display: flex;
  gap: 8px;
  margin-bottom: 16px;
}

.tab-btn {
  flex: 1;
  padding: 12px;
  background: var(--bg-surface-3, rgba(100, 116, 139, 0.15));
  border: 1px solid var(--border-main, rgba(100, 116, 139, 0.25));
  border-radius: 8px;
  color: var(--text-main);
  cursor: pointer;
  transition: all 0.2s;
}

.tab-btn:hover {
  background: var(--bg-surface-4, rgba(100, 116, 139, 0.2));
}

.tab-btn.active {
  background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%);
  color: #fff;
  border-color: transparent;
  box-shadow: 0 4px 12px rgba(37, 99, 235, 0.4);
}

.input-group {
  margin-bottom: 12px;
}

.input-group label {
  display: block;
  font-size: 12px;
  color: var(--text-secondary);
  margin-bottom: 4px;
}

.input-group input {
  width: 100%;
  padding: 10px 12px;
  background: var(--bg-surface-1, rgba(255, 255, 255, 0.7));
  border: 1px solid var(--border-main, rgba(100, 116, 139, 0.3));
  border-radius: 6px;
  color: var(--text-main);
  font-size: 14px;
}

.input-group input:focus {
  outline: none;
  border-color: var(--accent-blue);
  background: var(--bg-surface-0, rgba(255, 255, 255, 0.9));
}

.balance-hint {
  font-size: 11px;
  color: var(--text-secondary);
  margin-top: 4px;
  display: block;
}

.estimate,
.swap-preview,
.remove-preview {
  background: var(--bg-surface-3, rgba(59, 130, 246, 0.12));
  border: 1px solid var(--border-main, rgba(59, 130, 246, 0.25));
  border-radius: 8px;
  padding: 12px;
  margin-bottom: 12px;
}

.preview-item {
  display: flex;
  justify-content: space-between;
  margin-bottom: 4px;
  font-size: 13px;
}

.preview-item:last-child {
  margin-bottom: 0;
}

.preview-item .highlight {
  color: var(--accent-blue);
  font-weight: bold;
}

.preview-item .impact {
  font-weight: bold;
}

.preview-item .impact.low {
  color: var(--accent-green);
}

.preview-item .impact.medium {
  color: var(--accent-orange);
}

.preview-item .impact.high {
  color: var(--accent-red);
}

/* 交换方向 */
.swap-direction {
  display: flex;
  gap: 8px;
  margin-bottom: 12px;
}

.direction-btn {
  flex: 1;
  padding: 10px;
  background: var(--bg-surface-3, rgba(100, 116, 139, 0.15));
  border: 1px solid var(--border-main, rgba(100, 116, 139, 0.25));
  border-radius: 6px;
  color: var(--text-main);
  cursor: pointer;
  transition: all 0.2s;
}

.direction-btn.active {
  background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%);
  color: #fff;
  border-color: transparent;
  box-shadow: 0 4px 12px rgba(37, 99, 235, 0.4);
}

/* 滑点保护 */
.slippage-content {
  font-size: 13px;
  color: var(--text-secondary);
}

.slippage-content p {
  margin: 8px 0;
}

.code-block {
  background: var(--bg-surface-3, rgba(100, 116, 139, 0.12));
  border: 1px solid var(--border-main, rgba(100, 116, 139, 0.25));
  border-radius: 6px;
  padding: 12px;
  margin: 8px 0;
}

.code-block pre {
  margin: 0;
  font-family: 'Courier New', monospace;
  font-size: 12px;
  color: var(--accent-blue-dark);
}

/* 交易历史 */
.transaction-list {
  max-height: 200px;
  overflow-y: auto;
}

.transaction-item {
  display: flex;
  justify-content: space-between;
  padding: 8px 0;
  border-bottom: 1px solid var(--border-main, rgba(100, 116, 139, 0.25));
  font-size: 13px;
}

.transaction-item:last-child {
  border-bottom: none;
}

.tx-type {
  color: var(--accent-blue-dark);
}

.tx-details {
  color: var(--text-secondary);
}

/* 按钮样式 */
.day-action-btn {
  width: 100%;
  padding: 12px;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
}

.day-action-btn.cyan {
  background: linear-gradient(135deg, #0891b2 0%, #0e7490 100%);
  color: #fff;
  box-shadow: 0 4px 12px rgba(8, 145, 178, 0.4);
}

.day-action-btn.green {
  background: linear-gradient(135deg, #16a34a 0%, #15803d 100%);
  color: #fff;
  box-shadow: 0 4px 12px rgba(22, 163, 74, 0.4);
}

.day-action-btn.red {
  background: linear-gradient(135deg, #dc2626 0%, #b91c1c 100%);
  color: #fff;
  box-shadow: 0 4px 12px rgba(220, 38, 38, 0.4);
}

.day-action-btn:hover {
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
}
</style>
