<template>
  <div class="day-30-content day-content">
    <!-- 消息提示 -->
    <div v-if="message" :class="['message-toast', { error: isError }]">
      {{ message }}
    </div>

    <!-- 页面标题 -->
    <div class="page-header">
      <h1>🏭 Mini DEX - 迷你去中心化交易所</h1>
      <p class="subtitle">体验 Uniswap V2 风格的 AMM 去中心化交易所</p>
    </div>

    <div class="content-layout" :class="{ 'single-column': unlockedConcepts.length === 0 }">
      <!-- 左栏：交互区域 -->
      <div class="left-column">
        <!-- 1. 架构图 -->
        <ArchitectureDiagram 
          @click="handleArchitectureClick"
        />

        <!-- 2. 数学原理面板 -->
        <MathPrinciplePanel
          :math-panel-clicks="mathPanelClicks"
          :reserves="reserves"
          @unlock="handleMathPanelUnlock"
        />

        <!-- 3. 工厂操作面板 -->
        <FactoryPanel
          :all-pairs="allPairs"
          :selected-pair="selectedPair"
          @create-pair="handleCreatePair"
          @select-pair="handleSelectPair"
          @sorting-click="handleSortingClick"
        />

        <!-- 4. 交易对选择面板 -->
        <PairSelector
          v-if="allPairs.length > 0"
          :all-pairs="allPairs"
          :selected-pair="selectedPair"
          @select-pair="handleSelectPair"
          @mapping-click="handleMappingClick"
        />

        <!-- 5. 池子状态显示 -->
        <PoolStatus
          v-if="selectedPair"
          :selected-pair="selectedPair"
          :reserves="reserves"
          :total-supply="totalSupply"
          :user-lp-balance="userLPBalance"
          :current-price="currentPrice"
          :user-lp-share="userLPShare"
          :user-token0-balance="userToken0Balance"
          :user-token1-balance="userToken1Balance"
        />

        <!-- 6. 流动性操作面板 -->
        <LiquidityPanel
          v-if="selectedPair"
          :active-tab="activeTab"
          :user-token0-balance="userToken0Balance"
          :user-token1-balance="userToken1Balance"
          :user-lp-balance="userLPBalance"
          :reserves="reserves"
          :calculated-lp-tokens="displayLPTokens"
          :calculated-remove-tokens="calculatedRemoveTokens"
          :liquidity-ratio="liquidityRatio"
          :total-supply="totalSupply"
          v-model:add-amount0="addAmount0"
          v-model:add-amount1="addAmount1"
          v-model:remove-amount="removeAmount"
          @update-tab="activeTab = $event"
          @add-liquidity="handleAddLiquidity"
          @remove-liquidity="handleRemoveLiquidity"
        />

        <!-- 7. 交换面板 -->
        <SwapPanel
          v-if="selectedPair"
          :swap-direction="swapDirection"
          :user-token0-balance="userToken0Balance"
          :user-token1-balance="userToken1Balance"
          :reserves="reserves"
          :calculated-swap-output="calculatedSwapOutput"
          :price-impact="priceImpact"
          v-model:swap-amount-in="swapAmountIn"
          @update-direction="swapDirection = $event"
          @swap="handleSwap"
        />

        <!-- 重置按钮 -->
        <div class="reset-section">
          <button class="reset-btn" @click="handleReset">
            🔄 重置所有状态
          </button>
        </div>
      </div>

      <!-- 右栏：知识面板 -->
      <div class="right-column">
        <KnowledgePanel
          v-if="unlockedConcepts.length > 0"
          :current-day="30"
          :concepts="day30Concepts"
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
import { ref, computed, watch, toRefs, reactive } from 'vue'
import { useDay30 } from '@/composables/useDay30.js'
import { day30ConceptDefinitions, getDay30Hint } from '@/data/concepts.js'
import { useProgressStore } from '@/stores/progressStore.js'
import { getFullCode } from '@/data/days.js'

// 组件导入
import ArchitectureDiagram from './components/ArchitectureDiagram.vue'
import MathPrinciplePanel from './components/MathPrinciplePanel.vue'
import FactoryPanel from './components/FactoryPanel.vue'
import PairSelector from './components/PairSelector.vue'
import PoolStatus from './components/PoolStatus.vue'
import LiquidityPanel from './components/LiquidityPanel.vue'
import SwapPanel from './components/SwapPanel.vue'
import KnowledgePanel from '@/components/shared/KnowledgePanel.vue'
import FullCodeModal from '@/components/shared/FullCodeModal.vue'

// ========== Store & Composable ==========
const progressStore = useProgressStore()
const day30 = reactive(useDay30())

// ========== 使用 toRefs 保持响应性（仅用于 ref/computed）==========
const {
  allPairs,
  selectedPair,
  reserves,
  totalSupply,
  userLPBalance,
  userToken0Balance,
  userToken1Balance,
  activeTab,
  swapDirection,
  mathPanelClicks,
  currentPrice,
  userLPShare,
  calculatedLPTokens,
  calculatedRemoveTokens,
  calculatedSwapOutput,
  priceImpact,
  liquidityRatio,
  addAmount0,
  addAmount1,
  removeAmount,
  swapAmountIn
} = toRefs(day30)

// ========== 函数直接解构（不用 toRefs）==========
const {
  createPair,
  selectPair,
  addLiquidity,
  removeLiquidity,
  swap,
  resetState,
  formatNumber
} = day30

// ========== 本地状态 ==========
const message = ref('')
const isError = ref(false)
const showFullCode = ref(false)
let messageTimeout = null

// 调试：监听关键值变化
watch(() => addAmount0.value, (newVal) => {
  console.log('MiniDex addAmount0 changed:', newVal)
})
watch(() => addAmount1.value, (newVal) => {
  console.log('MiniDex addAmount1 changed:', newVal)
})
watch(() => calculatedLPTokens.value, (newVal) => {
  console.log('MiniDex calculatedLPTokens changed:', newVal)
}, { immediate: true })

// 本地 computed 包装，避免 toRefs 的 SETUP_MAYBE_REF 模板绑定问题
const displayLPTokens = computed(() => calculatedLPTokens.value)

// ========== 计算属性 ==========

// 已解锁概念
const unlockedConcepts = computed(() => {
  return progressStore.getDayProgress(30)?.unlockedConcepts || []
})

// Day 30 概念列表
const day30Concepts = computed(() => day30ConceptDefinitions)

// 完整代码
const fullCode = computed(() => getFullCode(30))

// 进度百分比
const progressPercentage = computed(() => {
  const progress = progressStore.getDayProgress(30)
  if (!progress || progress.totalConcepts === 0) return 0
  return Math.round((progress.unlockedConcepts.length / progress.totalConcepts) * 100)
})

// 当前提示
const currentHint = computed(() => {
  if (unlockedConcepts.value.length === 0) {
    return '🏭 欢迎来到Day 30！👉 点击「🏭 DEX系统架构」了解工厂模式！'
  }
  
  const lastConcept = unlockedConcepts.value[unlockedConcepts.value.length - 1]
  return getDay30Hint(lastConcept)
})

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
  if (!progressStore.isConceptUnlocked(30, conceptKey)) {
    progressStore.unlockConcept(30, conceptKey)
    return true
  }
  return false
}

// ========== 事件处理 ==========

// 架构图点击
const handleArchitectureClick = () => {
  if (unlockConcept('factory_pattern')) {
    showMessage(getDay30Hint('factory_pattern'), false)
  }
}

// 数学面板解锁（顺序解锁）
const handleMathPanelUnlock = (clickCount) => {
  mathPanelClicks.value = clickCount
  
  // 第一次点击：constant_product
  if (clickCount === 1 && unlockConcept('constant_product')) {
    showMessage(getDay30Hint('constant_product'), false)
  }
  // 第二次点击：price_discovery
  else if (clickCount === 2 && unlockConcept('price_discovery')) {
    showMessage(getDay30Hint('price_discovery'), false)
  }
  // 第三次点击：liquidity_calculation
  else if (clickCount === 3 && unlockConcept('liquidity_calculation')) {
    showMessage(getDay30Hint('liquidity_calculation'), false)
  }
  // 第四次点击：sqrt_calculation
  else if (clickCount === 4 && unlockConcept('sqrt_calculation')) {
    showMessage(getDay30Hint('sqrt_calculation'), false)
  }
}

// 地址排序点击
const handleSortingClick = () => {
  if (unlockConcept('address_sorting')) {
    showMessage(getDay30Hint('address_sorting'), false)
  }
}

// 双重映射点击
const handleMappingClick = () => {
  if (unlockConcept('double_mapping')) {
    showMessage(getDay30Hint('double_mapping'), false)
  }
}

// 创建交易对
const handleCreatePair = (token0, token1) => {
  const pair = createPair(token0, token1)
  if (pair) {
    selectPair(pair)
    showMessage(`✅ 成功创建交易对: ${token0.symbol}-${token1.symbol}`, false)
  }
}

// 选择交易对
const handleSelectPair = (pair) => {
  selectPair(pair)
}

// 添加流动性
const handleAddLiquidity = ({ amount0, amount1 }) => {
  const liquidity = addLiquidity(amount0, amount1)
  if (liquidity !== null) {
    if (unlockConcept('add_liquidity')) {
      showMessage(getDay30Hint('add_liquidity'), false)
    } else {
      showMessage(`✅ 成功添加流动性！获得 ${formatNumber(liquidity, 4)} LP代币`, false)
    }
  }
}

// 移除流动性
const handleRemoveLiquidity = ({ amount }) => {
  const result = removeLiquidity(amount)
  if (result !== null) {
    if (unlockConcept('remove_liquidity')) {
      showMessage(getDay30Hint('remove_liquidity'), false)
    } else {
      showMessage(
        `✅ 成功移除流动性！获得 ${formatNumber(result.amount0, 2)} Token0 和 ${formatNumber(result.amount1, 4)} Token1`,
        false
      )
    }
  }
}

// 交换代币
const handleSwap = ({ amountIn, direction }) => {
  const amountOut = swap(amountIn, direction)
  if (amountOut !== null) {
    const tokenOut = direction === '0to1' ? 'Token1' : 'Token0'
    if (unlockConcept('swap_function')) {
      showMessage(getDay30Hint('swap_function'), false)
    } else {
      showMessage(
        `✅ 交换成功！获得 ${formatNumber(amountOut, 4)} ${tokenOut}`,
        false
      )
    }
  }
}

// 重置状态
const handleReset = () => {
  resetState()
  showMessage('🔄 状态已重置', false)
}

// 监听储备变化，更新选中交易对
watch(
  reserves,
  (newReserves) => {
    if (selectedPair.value) {
      selectedPair.value.reserve0 = newReserves.token0
      selectedPair.value.reserve1 = newReserves.token1
    }
  },
  { deep: true }
)
</script>

<style scoped>
.page-header {
  text-align: center;
  margin-bottom: 24px;
}

.page-header h1 {
  font-size: 28px;
  color: var(--text-main);
  margin-bottom: 8px;
}

.subtitle {
  color: var(--text-muted);
  font-size: 16px;
}

/* Day30 左栏间距调整 */
.day-30-content .left-column {
  gap: 24px;
}

.reset-section {
  display: flex;
  justify-content: center;
  padding: 16px;
  background: var(--bg-surface-2);
  border-radius: 12px;
  border: 1px dashed var(--border-main);
}

.reset-btn {
  padding: 10px 24px;
  background: var(--accent-blue);
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 14px;
  transition: all 0.2s;
}

.reset-btn:hover {
  background: var(--accent-blue-dark, #0056b3);
  transform: translateY(-1px);
}
</style>
