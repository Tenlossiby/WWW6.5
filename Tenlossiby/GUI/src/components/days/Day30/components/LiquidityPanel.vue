<template>
  <div class="liquidity-panel">
    <div class="section-header">
      <span class="icon">💧</span>
      <h3>流动性管理</h3>
    </div>

    <!-- 标签切换 -->
    <div class="tab-switch">
      <button 
        class="tab-btn" 
        :class="{ active: activeTab === 'add' }"
        @click="$emit('update-tab', 'add')"
      >
        添加流动性
      </button>
      <button 
        class="tab-btn" 
        :class="{ active: activeTab === 'remove' }"
        @click="$emit('update-tab', 'remove')"
      >
        移除流动性
      </button>
    </div>

    <!-- 添加流动性 -->
    <div v-if="activeTab === 'add'" class="add-section">
      <!-- 快捷预设 -->
      <div class="quick-actions">
        <div class="quick-title">⚡ 快捷预设</div>
        <div class="quick-buttons">
          <button 
            v-for="(preset, index) in quickPresets" 
            :key="index"
            class="quick-btn"
            @click="applyQuickPreset(preset)"
          >
            {{ preset.label }}
          </button>
        </div>
      </div>

      <!-- Token0 输入 -->
      <div class="input-group">
        <div class="input-header">
          <label>Token0 数量</label>
          <span class="balance">
            余额: {{ formatNumber(userToken0Balance) }}
            <button class="max-btn" @click="$emit('update:add-amount0', userToken0Balance.toString())">MAX</button>
          </span>
        </div>
        <div class="input-wrapper">
          <input 
            :value="addAmount0"
            @input="$emit('update:add-amount0', $event.target.value)"
            type="number" 
            placeholder="0.0"
            min="0"
            :max="userToken0Balance"
          />
          <span class="token-badge">Token0</span>
        </div>
      </div>

      <!-- Token1 输入 -->
      <div class="input-group">
        <div class="input-header">
          <label>Token1 数量</label>
          <span class="balance">
            余额: {{ formatNumber(userToken1Balance) }}
            <button class="max-btn" @click="$emit('update:add-amount1', userToken1Balance.toString())">MAX</button>
          </span>
        </div>
        <div class="input-wrapper">
          <input 
            :value="addAmount1"
            @input="$emit('update:add-amount1', $event.target.value)"
            type="number" 
            placeholder="0.0"
            min="0"
            :max="userToken1Balance"
          />
          <span class="token-badge">Token1</span>
        </div>
      </div>

      <!-- 比例提示 -->
      <div class="ratio-hint" v-if="liquidityRatio > 0">
        <div class="ratio-info">
          当前池子比例: 1 Token0 = {{ formatNumber(liquidityRatio, 4) }} Token1
        </div>
        <div class="ratio-check" :class="{ valid: isRatioValid, invalid: !isRatioValid }">
          {{ isRatioValid ? '✓ 比例匹配' : '⚠ 比例不匹配，可能损失部分资金' }}
        </div>
      </div>

      <!-- 计算结果 -->
      <div class="calculation-result" v-if="canAddLiquidity">
        <div class="result-title">预计获得 LP 代币</div>
        <div class="result-value">{{ formatNumber(calculatedLpTokens) }}</div>
        <div class="result-formula">
          {{ isFirstLiquidity ? '√(amount0 × amount1)' : 'min(amount0/reserve0, amount1/reserve1) × totalSupply' }}
        </div>
      </div>

      <!-- 添加按钮 -->
      <button 
        class="action-btn add-btn"
        :disabled="!canAddLiquidity"
        @click="handleAddLiquidity"
      >
        {{ !canAddLiquidity ? '输入有效数量' : '添加流动性' }}
      </button>
    </div>

    <!-- 移除流动性 -->
    <div v-else class="remove-section">
      <!-- LP 余额显示 -->
      <div class="lp-balance-display">
        <span class="lp-label">您的 LP 余额</span>
        <span class="lp-amount">{{ formatNumber(userLpBalance) }} LP</span>
      </div>

      <!-- LP 输入 -->
      <div class="input-group">
        <div class="input-header">
          <label>移除 LP 数量</label>
          <span class="balance">
            <button class="max-btn" @click="$emit('update:remove-amount', userLpBalance.toString())">MAX</button>
          </span>
        </div>
        <div class="input-wrapper">
          <input 
            :value="removeAmount"
            @input="$emit('update:remove-amount', $event.target.value)"
            type="number" 
            placeholder="0.0"
            min="0"
            :max="userLpBalance"
          />
          <span class="token-badge">LP</span>
        </div>
      </div>

      <!-- 预览 -->
      <div class="removal-preview" v-if="canRemoveLiquidity">
        <div class="preview-title">预计获得</div>
        <div class="preview-items">
          <div class="preview-item">
            <span class="token">Token0</span>
            <span class="amount">{{ formatNumber(calculatedRemoveTokens.token0) }}</span>
          </div>
          <div class="preview-item">
            <span class="token">Token1</span>
            <span class="amount">{{ formatNumber(calculatedRemoveTokens.token1) }}</span>
          </div>
        </div>
        <div class="preview-formula">
          amount0 = (lpAmount / totalSupply) × reserve0
        </div>
      </div>

      <!-- 移除按钮 -->
      <button 
        class="action-btn remove-btn"
        :disabled="!canRemoveLiquidity"
        @click="handleRemoveLiquidity"
      >
        {{ !canRemoveLiquidity ? '输入有效数量' : '移除流动性' }}
      </button>
    </div>
  </div>
</template>

<script setup>
import { computed, watch } from 'vue'

const props = defineProps({
  activeTab: {
    type: String,
    default: 'add'
  },
  userToken0Balance: {
    type: Number,
    default: 1000
  },
  userToken1Balance: {
    type: Number,
    default: 50
  },
  userLpBalance: {
    type: Number,
    default: 0
  },
  reserves: {
    type: Object,
    default: () => ({ token0: 0, token1: 0 })
  },
  totalSupply: {
    type: Number,
    default: 0
  },
  calculatedLpTokens: {
    type: Number,
    default: 0
  },
  calculatedRemoveTokens: {
    type: Object,
    default: () => ({ token0: 0, token1: 0 })
  },
  liquidityRatio: {
    type: Number,
    default: 0
  },
  addAmount0: {
    type: String,
    default: ''
  },
  addAmount1: {
    type: String,
    default: ''
  },
  removeAmount: {
    type: String,
    default: ''
  }
})

const emit = defineEmits([
  'update-tab', 'add-liquidity', 'remove-liquidity',
  'update:add-amount0',
  'update:add-amount1',
  'update:remove-amount'
])

// 调试：监听 calculatedLPTokens 变化
watch(() => props.calculatedLpTokens, (newVal) => {
  console.log('LiquidityPanel calculatedLpTokens changed:', newVal)
}, { immediate: true })

// 快捷预设
const quickPresets = [
  { label: '1000 Token0 + 0.5 Token1', amount0: 1000, amount1: 0.5 },
  { label: '2000 Token0 + 1 Token1', amount0: 2000, amount1: 1 },
  { label: '500 Token0 + 0.25 Token1', amount0: 500, amount1: 0.25 }
]

// 是否首次添加流动性
const isFirstLiquidity = computed(() => props.totalSupply === 0)

// 检查比例是否有效
const isRatioValid = computed(() => {
  if (!props.addAmount0 || !props.addAmount1 || props.liquidityRatio === 0) return true
  
  const a0 = parseFloat(props.addAmount0)
  const a1 = parseFloat(props.addAmount1)
  
  if (isNaN(a0) || isNaN(a1) || a0 === 0) return true
  
  const inputRatio = a1 / a0
  const diff = Math.abs(inputRatio - props.liquidityRatio) / props.liquidityRatio
  
  return diff < 0.01 // 允许1%误差
})

// 检查是否可以添加流动性
const canAddLiquidity = computed(() => {
  const a0 = parseFloat(props.addAmount0) || 0
  const a1 = parseFloat(props.addAmount1) || 0
  
  return a0 > 0 && a1 > 0 && 
         a0 <= props.userToken0Balance && 
         a1 <= props.userToken1Balance
})

// 检查是否可以移除流动性
const canRemoveLiquidity = computed(() => {
  const amount = parseFloat(props.removeAmount) || 0
  return amount > 0 && amount <= props.userLpBalance
})

// 应用快捷预设
const applyQuickPreset = (preset) => {
  emit('update:add-amount0', preset.amount0.toString())
  emit('update:add-amount1', preset.amount1.toString())
}

// 处理添加流动性
const handleAddLiquidity = () => {
  const a0 = parseFloat(props.addAmount0)
  const a1 = parseFloat(props.addAmount1)
  
  if (a0 > 0 && a1 > 0) {
    emit('add-liquidity', { amount0: a0, amount1: a1 })
    emit('update:add-amount0', '')
    emit('update:add-amount1', '')
  }
}

// 处理移除流动性
const handleRemoveLiquidity = () => {
  const amount = parseFloat(props.removeAmount)
  
  if (amount > 0) {
    emit('remove-liquidity', { amount })
    emit('update:remove-amount', '')
  }
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
.liquidity-panel {
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

/* 标签切换 */
.tab-switch {
  display: flex;
  gap: 8px;
  margin-bottom: 20px;
  background: linear-gradient(135deg, rgba(99, 102, 241, 0.06) 0%, rgba(168, 85, 247, 0.06) 100%);
  border: 1px solid var(--border-main);
  padding: 4px;
  border-radius: 10px;
}

.tab-btn {
  flex: 1;
  padding: 10px 16px;
  background: transparent;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  color: var(--text-muted);
  transition: all 0.2s;
}

.tab-btn:hover {
  color: var(--text-main);
}

.tab-btn.active {
  background: linear-gradient(135deg, rgba(59, 130, 246, 0.15) 0%, rgba(99, 102, 241, 0.15) 100%);
  color: var(--accent-blue);
  font-weight: 600;
}

/* 快捷预设 */
.quick-actions {
  background: linear-gradient(135deg, rgba(99, 102, 241, 0.06) 0%, rgba(168, 85, 247, 0.06) 100%);
  border: 1px solid var(--border-main);
  border-radius: 12px;
  padding: 16px;
  margin-bottom: 20px;
}

.quick-title {
  font-size: 14px;
  font-weight: 600;
  color: var(--text-main);
  margin-bottom: 12px;
}

.quick-buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.quick-btn {
  padding: 8px 16px;
  background: var(--bg-surface-2);
  border: 1px solid var(--border-main);
  border-radius: 8px;
  cursor: pointer;
  font-size: 12px;
  color: var(--text-main);
  transition: all 0.2s;
}

.quick-btn:hover {
  background: linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(99, 102, 241, 0.1) 100%);
  border-color: var(--accent-blue);
}

/* 输入组 */
.input-group {
  margin-bottom: 16px;
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
  display: flex;
  align-items: center;
  gap: 8px;
}

.max-btn {
  padding: 2px 8px;
  background: linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(99, 102, 241, 0.1) 100%);
  border: 1px solid var(--border-main);
  border-radius: 4px;
  cursor: pointer;
  font-size: 10px;
  color: var(--accent-blue);
  transition: all 0.2s;
}

.max-btn:hover {
  background: linear-gradient(135deg, rgba(59, 130, 246, 0.2) 0%, rgba(99, 102, 241, 0.2) 100%);
}

.input-wrapper {
  display: flex;
  gap: 12px;
  align-items: center;
  background: linear-gradient(135deg, rgba(99, 102, 241, 0.06) 0%, rgba(168, 85, 247, 0.06) 100%);
  border: 1px solid var(--border-main);
  border-radius: 12px;
  padding: 12px 16px;
  overflow: hidden;
}

.input-wrapper input {
  flex: 1;
  min-width: 0;
  background: transparent;
  border: none;
  font-size: 20px;
  font-weight: 600;
  color: var(--text-main);
  outline: none;
}

.input-wrapper input::placeholder {
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

/* 比例提示 */
.ratio-hint {
  background: linear-gradient(135deg, rgba(99, 102, 241, 0.06) 0%, rgba(168, 85, 247, 0.06) 100%);
  border: 1px solid var(--border-main);
  border-radius: 10px;
  padding: 12px;
  margin-bottom: 16px;
}

.ratio-info {
  font-size: 13px;
  color: var(--text-main);
  margin-bottom: 4px;
}

.ratio-check {
  font-size: 12px;
  font-weight: 500;
}

.ratio-check.valid {
  color: var(--accent-green);
}

.ratio-check.invalid {
  color: var(--accent-orange);
}

/* 计算结果 */
.calculation-result {
  background: linear-gradient(135deg, rgba(34, 197, 94, 0.08) 0%, rgba(16, 185, 129, 0.08) 100%);
  border: 1px solid rgba(34, 197, 94, 0.2);
  border-radius: 12px;
  padding: 16px;
  margin-bottom: 16px;
  text-align: center;
}

.result-title {
  font-size: 13px;
  color: var(--text-muted);
  margin-bottom: 8px;
}

.result-value {
  font-size: 28px;
  font-weight: 700;
  color: var(--accent-green);
  margin-bottom: 8px;
}

.result-formula {
  font-size: 11px;
  color: var(--text-muted);
  font-family: 'Courier New', monospace;
}

/* 操作按钮 */
.action-btn {
  width: 100%;
  padding: 16px;
  border: none;
  border-radius: 12px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
}

.add-btn {
  background: linear-gradient(135deg, rgba(34, 197, 94, 0.9) 0%, rgba(16, 185, 129, 0.9) 100%);
  color: white;
}

.add-btn:hover:not(:disabled) {
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(34, 197, 94, 0.3);
}

.remove-btn {
  background: linear-gradient(135deg, rgba(239, 68, 68, 0.9) 0%, rgba(248, 113, 113, 0.9) 100%);
  color: white;
}

.remove-btn:hover:not(:disabled) {
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(239, 68, 68, 0.3);
}

.action-btn:disabled {
  background: var(--border-main);
  color: var(--text-muted);
  cursor: not-allowed;
}

/* 移除流动性部分 */
.lp-balance-display {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: linear-gradient(135deg, rgba(99, 102, 241, 0.06) 0%, rgba(168, 85, 247, 0.06) 100%);
  border: 1px solid var(--border-main);
  border-radius: 12px;
  padding: 16px;
  margin-bottom: 16px;
}

.lp-label {
  font-size: 14px;
  color: var(--text-muted);
}

.lp-amount {
  font-size: 18px;
  font-weight: 700;
  color: var(--text-main);
}

/* 移除预览 */
.removal-preview {
  background: linear-gradient(135deg, rgba(239, 68, 68, 0.08) 0%, rgba(248, 113, 113, 0.08) 100%);
  border: 1px solid rgba(239, 68, 68, 0.2);
  border-radius: 12px;
  padding: 16px;
  margin-bottom: 16px;
}

.preview-title {
  font-size: 13px;
  color: var(--text-muted);
  margin-bottom: 12px;
  text-align: center;
}

.preview-items {
  display: flex;
  justify-content: space-around;
  margin-bottom: 12px;
}

.preview-item {
  text-align: center;
}

.preview-item .token {
  display: block;
  font-size: 12px;
  color: var(--text-muted);
  margin-bottom: 4px;
}

.preview-item .amount {
  display: block;
  font-size: 20px;
  font-weight: 700;
  color: var(--accent-red);
}

.preview-formula {
  font-size: 11px;
  color: var(--text-muted);
  text-align: center;
  font-family: 'Courier New', monospace;
}
</style>
