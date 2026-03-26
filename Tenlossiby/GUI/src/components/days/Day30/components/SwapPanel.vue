<template>
  <div class="swap-panel">
    <div class="section-header">
      <span class="icon">🔄</span>
      <h3>代币交换</h3>
    </div>

    <!-- 交换方向 -->
    <div class="swap-direction">
      <button 
        class="direction-btn"
        :class="{ active: swapDirection === '0to1' }"
        @click="$emit('update-direction', '0to1')"
      >
        <span class="from">Token0</span>
        <span class="arrow">→</span>
        <span class="to">Token1</span>
      </button>
      <button 
        class="direction-btn"
        :class="{ active: swapDirection === '1to0' }"
        @click="$emit('update-direction', '1to0')"
      >
        <span class="from">Token1</span>
        <span class="arrow">→</span>
        <span class="to">Token0</span>
      </button>
    </div>

    <!-- 输入 -->
    <div class="swap-inputs">
      <div class="input-section">
        <div class="input-header">
          <label>支付</label>
          <span class="balance">
            余额: {{ formatNumber(swapDirection === '0to1' ? userToken0Balance : userToken1Balance, 4) }}
          </span>
        </div>
        <div class="input-wrapper">
          <input 
            type="number" 
            :value="swapAmountIn"
            @input="$emit('update:swap-amount-in', $event.target.value)"
            placeholder="0.0"
          >
          <span class="token-badge">
            {{ swapDirection === '0to1' ? 'Token0' : 'Token1' }}
          </span>
        </div>
      </div>

      <!-- 交换图标 -->
      <div class="swap-divider">
        <div class="swap-icon">⇅</div>
      </div>

      <!-- 输出 -->
      <div class="input-section">
        <div class="input-header">
          <label>获得 (估算)</label>
        </div>
        <div class="input-wrapper output">
          <input 
            type="text" 
            :value="formatNumber(calculatedSwapOutput, 6)"
            readonly
            placeholder="0.0"
          >
          <span class="token-badge">
            {{ swapDirection === '0to1' ? 'Token1' : 'Token0' }}
          </span>
        </div>
      </div>
    </div>

    <!-- 交换详情 -->
    <div v-if="swapAmountIn > 0" class="swap-details">
      <div class="detail-row">
        <span class="label">汇率</span>
        <span class="value">
          1 {{ swapDirection === '0to1' ? 'Token0' : 'Token1' }} 
          ≈ {{ formatNumber(calculatedSwapOutput / swapAmountIn, 6) }} 
          {{ swapDirection === '0to1' ? 'Token1' : 'Token0' }}
        </span>
      </div>
      
      <!-- 滑点警告 -->
      <div 
        class="slippage-warning"
        :class="{ 
          'low': priceImpact < 1,
          'medium': priceImpact >= 1 && priceImpact < 5,
          'high': priceImpact >= 5 
        }"
      >
        <div class="warning-icon">
          <span v-if="priceImpact < 1">✅</span>
          <span v-else-if="priceImpact < 5">⚠️</span>
          <span v-else>🚨</span>
        </div>
        <div class="warning-content">
          <div class="warning-title">
            价格影响: {{ formatNumber(priceImpact, 2) }}%
          </div>
          <div class="warning-desc">
            <span v-if="priceImpact < 1">正常范围，可以放心交易</span>
            <span v-else-if="priceImpact < 5">注意滑点，建议减少交易金额</span>
            <span v-else>滑点过高！建议分批交易或使用滑点保护</span>
          </div>
        </div>
      </div>

      <!-- 计算公式 -->
      <div class="formula-display">
        <div class="formula-title">📐 计算过程</div>
        <div class="formula-steps">
          <div class="step">
            <span class="step-label">输入:</span>
            <code>{{ formatNumber(swapAmountIn, 4) }}</code>
          </div>
          <div class="step">
            <span class="step-label">公式:</span>
            <code>amountOut = (in × reserveOut) / (reserveIn + in)</code>
          </div>
          <div class="step">
            <span class="step-label">计算:</span>
            <code>({{ formatNumber(swapAmountIn, 4) }} × {{ formatNumber(reserveOut, 4) }}) / ({{ formatNumber(reserveIn, 4) }} + {{ formatNumber(swapAmountIn, 4) }})</code>
          </div>
          <div class="step result">
            <span class="step-label">结果:</span>
            <code>{{ formatNumber(calculatedSwapOutput, 6) }}</code>
          </div>
        </div>
      </div>
    </div>

    <button 
      class="swap-btn"
      :disabled="!canSwap"
      @click="handleSwap"
    >
      {{ getSwapButtonText() }}
    </button>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  swapDirection: {
    type: String,
    default: '0to1'
  },
  userToken0Balance: {
    type: Number,
    default: 10000
  },
  userToken1Balance: {
    type: Number,
    default: 50
  },
  reserves: {
    type: Object,
    default: () => ({ token0: 0, token1: 0 })
  },
  calculatedSwapOutput: {
    type: Number,
    default: 0
  },
  priceImpact: {
    type: Number,
    default: 0
  },
  swapAmountIn: {
    type: String,
    default: ''
  }
})

const emit = defineEmits(['update-direction', 'swap', 'update:swap-amount-in'])

// 计算储备
const reserveIn = computed(() => {
  return props.swapDirection === '0to1' ? props.reserves.token0 : props.reserves.token1
})

const reserveOut = computed(() => {
  return props.swapDirection === '0to1' ? props.reserves.token1 : props.reserves.token0
})

// 检查是否可以交换
const canSwap = computed(() => {
  const amount = parseFloat(props.swapAmountIn) || 0
  const balance = props.swapDirection === '0to1' ? props.userToken0Balance : props.userToken1Balance
  
  return amount > 0 && 
         amount <= balance && 
         reserveIn.value > 0 && 
         reserveOut.value > 0 &&
         props.calculatedSwapOutput > 0
})

// 获取按钮文字
const getSwapButtonText = () => {
  const amount = parseFloat(props.swapAmountIn) || 0
  const balance = props.swapDirection === '0to1' ? props.userToken0Balance : props.userToken1Balance
  
  if (amount === 0) return '输入数量'
  if (amount > balance) return '余额不足'
  if (reserveIn.value === 0 || reserveOut.value === 0) return '无流动性'
  return '交换'
}

// 处理交换
const handleSwap = () => {
  emit('swap', { amountIn: props.swapAmountIn, direction: props.swapDirection })
  emit('update:swap-amount-in', '')
}

const formatNumber = (num, decimals = 2) => {
  if (num === undefined || num === null || isNaN(num)) return '0'
  return new Intl.NumberFormat('en-US', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals
  }).format(num)
}
</script>

<style scoped>
.swap-panel {
  background: linear-gradient(135deg, rgba(99, 102, 241, 0.05) 0%, rgba(168, 85, 247, 0.05) 100%);
  border: 1px solid var(--border-main);
  border-radius: 16px;
  padding: 20px;
}

.section-header {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 20px;
  padding-bottom: 16px;
  border-bottom: 1px solid var(--border-main);
}

.section-header .icon {
  font-size: 24px;
}

.section-header h3 {
  margin: 0;
  font-size: 18px;
  color: var(--text-main);
}

.swap-direction {
  display: flex;
  gap: 12px;
  margin-bottom: 20px;
}

.direction-btn {
  flex: 1;
  padding: 12px;
  background: linear-gradient(135deg, rgba(99, 102, 241, 0.06) 0%, rgba(168, 85, 247, 0.06) 100%);
  border: 1px solid var(--border-main);
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  transition: all 0.2s;
  color: var(--text-main);
}

.direction-btn:hover {
  background: linear-gradient(135deg, rgba(99, 102, 241, 0.1) 0%, rgba(168, 85, 247, 0.1) 100%);
}

.direction-btn.active {
  background: linear-gradient(135deg, rgba(59, 130, 246, 0.15) 0%, rgba(99, 102, 241, 0.15) 100%);
  border-color: var(--accent-blue);
}

.direction-btn .from,
.direction-btn .to {
  font-weight: 600;
  font-size: 14px;
}

.direction-btn .arrow {
  color: var(--text-muted);
}

.swap-inputs {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 20px;
}

.input-section {
  background: linear-gradient(135deg, rgba(99, 102, 241, 0.06) 0%, rgba(168, 85, 247, 0.06) 100%);
  border: 1px solid var(--border-main);
  border-radius: 12px;
  padding: 16px;
}

.input-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
}

.input-header label {
  font-size: 14px;
  color: var(--text-muted);
}

.balance {
  font-size: 12px;
  color: var(--text-muted);
}

.input-wrapper {
  display: flex;
  gap: 12px;
  align-items: center;
  overflow: hidden;
}

.input-wrapper input {
  flex: 1;
  min-width: 0;
  background: transparent;
  border: none;
  font-size: 24px;
  font-weight: 600;
  color: var(--text-main);
  outline: none;
}

.input-wrapper input::placeholder {
  color: var(--text-muted);
}

.input-wrapper.output input {
  color: var(--text-muted);
}

.token-badge {
  padding: 6px 12px;
  background: linear-gradient(135deg, rgba(99, 102, 241, 0.1) 0%, rgba(168, 85, 247, 0.1) 100%);
  border: 1px solid var(--border-main);
  border-radius: 20px;
  font-size: 14px;
  font-weight: 600;
  color: var(--text-main);
  flex-shrink: 0;
  white-space: nowrap;
}

.swap-divider {
  display: flex;
  justify-content: center;
  align-items: center;
}

.swap-icon {
  width: 40px;
  height: 40px;
  background: linear-gradient(135deg, rgba(99, 102, 241, 0.1) 0%, rgba(168, 85, 247, 0.1) 100%);
  border: 1px solid var(--border-main);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  color: var(--accent-blue);
}

.swap-details {
  background: linear-gradient(135deg, rgba(99, 102, 241, 0.06) 0%, rgba(168, 85, 247, 0.06) 100%);
  border: 1px solid var(--border-main);
  border-radius: 12px;
  padding: 16px;
  margin-bottom: 20px;
}

.detail-row {
  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;
  font-size: 14px;
}

.detail-row .label {
  color: var(--text-muted);
}

.detail-row .value {
  font-weight: 600;
  color: var(--text-main);
}

.slippage-warning {
  display: flex;
  gap: 12px;
  padding: 12px;
  border-radius: 8px;
  margin-bottom: 16px;
}

.slippage-warning.low {
  background: linear-gradient(135deg, rgba(34, 197, 94, 0.08) 0%, rgba(16, 185, 129, 0.08) 100%);
  border: 1px solid rgba(34, 197, 94, 0.2);
}

.slippage-warning.medium {
  background: linear-gradient(135deg, rgba(245, 158, 11, 0.08) 0%, rgba(251, 191, 36, 0.08) 100%);
  border: 1px solid rgba(245, 158, 11, 0.2);
}

.slippage-warning.high {
  background: linear-gradient(135deg, rgba(239, 68, 68, 0.08) 0%, rgba(248, 113, 113, 0.08) 100%);
  border: 1px solid rgba(239, 68, 68, 0.2);
}

.warning-icon {
  font-size: 20px;
}

.warning-content {
  flex: 1;
}

.warning-title {
  font-weight: 600;
  font-size: 14px;
  margin-bottom: 4px;
}

.slippage-warning.low .warning-title {
  color: var(--accent-green);
}

.slippage-warning.medium .warning-title {
  color: var(--accent-orange);
}

.slippage-warning.high .warning-title {
  color: var(--accent-red);
}

.warning-desc {
  font-size: 12px;
  color: var(--text-muted);
}

.formula-display {
  background: var(--bg-surface-2);
  border: 1px solid var(--border-main);
  border-radius: 8px;
  padding: 12px;
}

.formula-title {
  font-weight: 600;
  font-size: 14px;
  color: var(--text-main);
  margin-bottom: 8px;
}

.formula-steps {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.step {
  display: flex;
  gap: 8px;
  font-size: 12px;
}

.step-label {
  color: var(--text-muted);
  min-width: 50px;
}

.step code {
  color: var(--text-main);
  font-family: 'Courier New', monospace;
  word-break: break-all;
}

.step.result code {
  color: var(--accent-green);
  font-weight: 600;
}

.swap-btn {
  width: 100%;
  padding: 16px;
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.9) 0%, rgba(118, 75, 162, 0.9) 100%);
  color: white;
  border: none;
  border-radius: 12px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
}

.swap-btn:hover:not(:disabled) {
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);
}

.swap-btn:disabled {
  background: var(--border-main);
  color: var(--text-muted);
  cursor: not-allowed;
}
</style>
