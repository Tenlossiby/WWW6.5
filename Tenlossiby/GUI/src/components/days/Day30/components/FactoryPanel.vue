<template>
  <div class="factory-panel">
    <div class="section-header">
      <span class="icon">🏭</span>
      <h3>工厂合约</h3>
    </div>

    <!-- 创建交易对 -->
    <div class="create-pair-section">
      <div class="section-title">创建新交易对</div>
      
      <div class="token-inputs">
        <div class="token-input">
          <label>代币 A</label>
          <select v-model="tokenA">
            <option value="">选择代币</option>
            <option 
              v-for="token in availableTokens" 
              :key="token.address" 
              :value="token"
            >
              {{ token.symbol }} - {{ token.name }}
            </option>
          </select>
        </div>
        
        <span class="swap-icon">⚡</span>
        
        <div class="token-input">
          <label>代币 B</label>
          <select v-model="tokenB">
            <option value="">选择代币</option>
            <option 
              v-for="token in availableTokens" 
              :key="token.address" 
              :value="token"
            >
              {{ token.symbol }} - {{ token.name }}
            </option>
          </select>
        </div>
      </div>

      <!-- 地址排序演示 -->
      <div class="sorting-demo" @click="handleSortingClick">
        <div class="sorting-title">📊 地址排序演示</div>
        <div class="sorting-content">
          <div class="address-row">
            <span class="address-label">输入顺序:</span>
            <div class="addresses">
              <span class="address tokenA">{{ tokenA ? truncateAddress(tokenA.address) : 'Token A' }}</span>
              <span class="address tokenB">{{ tokenB ? truncateAddress(tokenB.address) : 'Token B' }}</span>
            </div>
          </div>
          <div class="arrow-down">↓</div>
          <div class="address-row">
            <span class="address-label">存储顺序:</span>
            <div class="addresses">
              <span class="address token0">{{ sortedAddresses.token0 ? truncateAddress(sortedAddresses.token0) : 'token0' }}</span>
              <span class="address token1">{{ sortedAddresses.token1 ? truncateAddress(sortedAddresses.token1) : 'token1' }}</span>
            </div>
          </div>
        </div>
        <div class="sorting-hint">💡 点击了解为什么需要地址排序</div>
      </div>

      <!-- 创建按钮 -->
      <button 
        class="create-btn"
        :disabled="!canCreate"
        @click="handleCreate"
      >
        {{ canCreate ? '创建交易对' : '选择两个不同的代币' }}
      </button>

      <!-- 错误信息 -->
      <div v-if="error" class="error-message">
        {{ error }}
      </div>
    </div>

    <!-- 已有交易对列表 -->
    <div class="pairs-list">
      <div class="section-title">已有交易对 ({{ allPairs.length }})</div>
      <div class="pairs-grid">
        <div 
          v-for="pair in allPairs" 
          :key="pair.address"
          class="pair-card"
          :class="{ selected: selectedPair?.address === pair.address }"
          @click="$emit('select-pair', pair)"
        >
          <div class="pair-symbols">{{ pair.token0?.symbol || '?' }}/{{ pair.token1?.symbol || '?' }}</div>
          <div class="pair-address">{{ truncateAddress(pair.address) }}</div>
          <div class="pair-liquidity" v-if="pair.hasLiquidity">💧 有流动性</div>
          <div class="pair-liquidity empty" v-else>⚪ 空池子</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  allPairs: {
    type: Array,
    default: () => []
  },
  selectedPair: {
    type: Object,
    default: null
  }
})

const emit = defineEmits(['create-pair', 'select-pair', 'sorting-click'])

// 可用代币列表
const availableTokens = [
  { symbol: 'USDC', name: 'USD Coin', address: '0xA0b86a33E6441e0A421e56E4773C3C4b0Db7E5a0' },
  { symbol: 'WETH', name: 'Wrapped ETH', address: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2' },
  { symbol: 'DAI', name: 'Dai Stablecoin', address: '0x6B175474E89094C44Da98b954EedeAC495271d0F' },
  { symbol: 'WBTC', name: 'Wrapped BTC', address: '0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599' },
  { symbol: 'LINK', name: 'Chainlink', address: '0x514910771AF9Ca656af840dff83E8264EcF986CA' }
]

const tokenA = ref('')
const tokenB = ref('')
const error = ref('')

// 检查是否可以创建
const canCreate = computed(() => {
  if (!tokenA.value || !tokenB.value) return false
  if (tokenA.value.symbol === tokenB.value.symbol) return false
  
  // 检查是否已存在
  const exists = props.allPairs.some(p => 
    (p.token0.symbol === tokenA.value.symbol && p.token1.symbol === tokenB.value.symbol) ||
    (p.token0.symbol === tokenB.value.symbol && p.token1.symbol === tokenA.value.symbol)
  )
  
  return !exists
})

// 判断 tokenA 是否更小
const isTokenASmaller = computed(() => {
  if (!tokenA.value || !tokenB.value) return true
  return tokenA.value.address.toLowerCase() < tokenB.value.address.toLowerCase()
})

// 排序后的地址
const sortedAddresses = computed(() => {
  if (!tokenA.value || !tokenB.value) return { token0: '', token1: '' }
  
  if (isTokenASmaller.value) {
    return { token0: tokenA.value.address, token1: tokenB.value.address }
  } else {
    return { token0: tokenB.value.address, token1: tokenA.value.address }
  }
})

// 截断地址显示
const truncateAddress = (address) => {
  if (!address) return ''
  return `${address.slice(0, 6)}...${address.slice(-4)}`
}

// 处理创建
const handleCreate = () => {
  error.value = ''
  
  if (!canCreate.value) {
    error.value = '无法创建此交易对'
    return
  }
  
  // 排序后传入
  const t0 = isTokenASmaller.value ? tokenA.value : tokenB.value
  const t1 = isTokenASmaller.value ? tokenB.value : tokenA.value
  
  emit('create-pair', t0, t1)
  
  // 清空选择
  tokenA.value = ''
  tokenB.value = ''
}

// 处理地址排序点击
const handleSortingClick = () => {
  emit('sorting-click')
}
</script>

<style scoped>
.factory-panel {
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

.section-title {
  font-weight: 600;
  color: var(--text-main);
  margin-bottom: 16px;
  font-size: 14px;
}

.create-pair-section {
  margin-bottom: 24px;
}

.token-inputs {
  display: flex;
  align-items: flex-end;
  gap: 12px;
  margin-bottom: 16px;
}

.token-input {
  flex: 1;
}

.token-input label {
  display: block;
  font-size: 12px;
  color: var(--text-muted);
  margin-bottom: 6px;
}

.token-input select {
  width: 100%;
  padding: 10px 12px;
  border: 1px solid var(--border-main);
  border-radius: 8px;
  font-size: 14px;
  background: var(--bg-surface-2);
  color: var(--text-main);
  cursor: pointer;
}

.token-input select:focus {
  outline: none;
  border-color: var(--accent-blue);
}

.swap-icon {
  font-size: 20px;
  color: var(--text-muted);
  padding-bottom: 10px;
}

.sorting-demo {
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.08) 0%, rgba(118, 75, 162, 0.08) 100%);
  border: 1px solid rgba(102, 126, 234, 0.2);
  border-radius: 12px;
  padding: 16px;
  margin-bottom: 16px;
  color: var(--text-main);
  cursor: pointer;
  transition: transform 0.2s;
}

.sorting-demo:hover {
  transform: translateY(-2px);
}

.sorting-title {
  font-weight: 600;
  margin-bottom: 12px;
  font-size: 14px;
  color: var(--text-main);
}

.sorting-content {
  background: var(--bg-surface-2);
  border: 1px solid var(--border-main);
  border-radius: 8px;
  padding: 12px;
}

.address-row {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 12px;
}

.address-label {
  color: var(--text-muted);
  min-width: 70px;
}

.addresses {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.address {
  font-family: 'Courier New', monospace;
  padding: 2px 8px;
  border-radius: 4px;
  font-size: 11px;
}

.address.tokenA {
  background: rgba(245, 158, 11, 0.15);
  color: var(--accent-orange);
}

.address.tokenB {
  background: rgba(34, 197, 94, 0.15);
  color: var(--accent-green);
}

.address.token0 {
  background: rgba(255, 152, 0, 0.15);
  color: var(--accent-orange);
}

.address.token1 {
  background: rgba(34, 197, 94, 0.15);
  color: var(--accent-green);
}

.arrow-down {
  text-align: center;
  font-size: 16px;
  margin: 8px 0;
  color: var(--text-muted);
}

.sorting-hint {
  text-align: center;
  font-size: 11px;
  margin-top: 8px;
  color: var(--text-muted);
}

.create-btn {
  width: 100%;
  padding: 12px;
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.9) 0%, rgba(118, 75, 162, 0.9) 100%);
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
}

.create-btn:hover:not(:disabled) {
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);
}

.create-btn:disabled {
  background: var(--border-main);
  color: var(--text-muted);
  cursor: not-allowed;
}

.error-message {
  margin-top: 12px;
  padding: 10px;
  background: linear-gradient(135deg, rgba(239, 68, 68, 0.08) 0%, rgba(248, 113, 113, 0.08) 100%);
  border: 1px solid rgba(239, 68, 68, 0.2);
  color: var(--accent-red);
  border-radius: 8px;
  font-size: 13px;
}

.pairs-list {
  border-top: 1px solid var(--border-main);
  padding-top: 20px;
}

.pairs-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 12px;
}

.pair-card {
  background: linear-gradient(135deg, rgba(99, 102, 241, 0.06) 0%, rgba(168, 85, 247, 0.06) 100%);
  border: 1px solid var(--border-main);
  border-radius: 12px;
  padding: 16px;
  text-align: center;
  cursor: pointer;
  transition: all 0.2s;
}

.pair-card:hover {
  background: linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(99, 102, 241, 0.1) 100%);
  border-color: var(--accent-blue);
}

.pair-card.selected {
  background: linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(99, 102, 241, 0.1) 100%);
  border-color: var(--accent-blue);
}

.pair-symbols {
  font-weight: 600;
  color: var(--text-main);
  margin-bottom: 4px;
}

.pair-address {
  font-family: 'Courier New', monospace;
  font-size: 11px;
  color: var(--text-muted);
  margin-bottom: 8px;
}

.pair-liquidity {
  font-size: 12px;
  color: var(--accent-green);
}

.pair-liquidity.empty {
  color: var(--text-muted);
}

@media (max-width: 768px) {
  .token-inputs {
    flex-direction: column;
    align-items: stretch;
  }
  
  .swap-icon {
    text-align: center;
    transform: rotate(90deg);
    padding: 0;
  }
}
</style>
