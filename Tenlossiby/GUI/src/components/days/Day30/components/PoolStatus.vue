<template>
  <div class="pool-status">
    <div class="section-header">
      <span class="icon">📊</span>
      <h3>池子状态</h3>
    </div>

    <div class="status-grid">
      <!-- 储备量卡片 -->
      <div class="status-card reserves">
        <div class="card-title">💰 当前储备</div>
        <div class="reserves-display">
          <div class="reserve-item">
            <div class="token-info">
              <span class="token-symbol">{{ selectedPair?.token0?.symbol || 'Token0' }}</span>
              <span class="token-name">token0</span>
            </div>
            <div class="reserve-amount">{{ formatNumber(reserves.token0, 4) }}</div>
          </div>
          <div class="reserve-divider">×</div>
          <div class="reserve-item">
            <div class="token-info">
              <span class="token-symbol">{{ selectedPair?.token1?.symbol || 'Token1' }}</span>
              <span class="token-name">token1</span>
            </div>
            <div class="reserve-amount">{{ formatNumber(reserves.token1, 6) }}</div>
          </div>
        </div>
        <div class="k-value">
          <span class="k-label">k =</span>
          <span class="k-number">{{ formatNumber(reserves.token0 * reserves.token1, 2) }}</span>
        </div>
      </div>

      <!-- 价格卡片 -->
      <div class="status-card price">
        <div class="card-title">📈 当前价格</div>
        <div class="price-display" v-if="reserves.token0 > 0 && reserves.token1 > 0">
          <div class="price-row">
            <span class="price-value">1 {{ selectedPair?.token0?.symbol }}</span>
            <span class="price-equals">=</span>
            <span class="price-value highlight">{{ formatNumber(currentPrice, 6) }}</span>
            <span class="price-symbol">{{ selectedPair?.token1?.symbol }}</span>
          </div>
          <div class="price-row reverse">
            <span class="price-value">1 {{ selectedPair?.token1?.symbol }}</span>
            <span class="price-equals">=</span>
            <span class="price-value highlight">{{ formatNumber(1 / currentPrice, 4) }}</span>
            <span class="price-symbol">{{ selectedPair?.token0?.symbol }}</span>
          </div>
        </div>
        <div v-else class="no-liquidity">
          <span class="empty-icon">📝</span>
          <span>暂无流动性</span>
        </div>
      </div>

      <!-- LP代币卡片 -->
      <div class="status-card lp-tokens">
        <div class="card-title">🪙 LP 代币</div>
        <div class="lp-info">
          <div class="lp-row">
            <span class="lp-label">总供应量:</span>
            <span class="lp-value">{{ formatNumber(totalSupply, 4) }}</span>
          </div>
          <div class="lp-row">
            <span class="lp-label">你的余额:</span>
            <span class="lp-value highlight">{{ formatNumber(userLpBalance, 4) }}</span>
          </div>
          <div class="lp-row">
            <span class="lp-label">你的份额:</span>
            <span class="lp-value">{{ formatNumber(userLpShare, 2) }}%</span>
          </div>
        </div>
        <!-- 份额进度条 -->
        <div class="share-bar">
          <div 
            class="share-fill" 
            :style="{ width: Math.min(userLpShare, 100) + '%' }"
          ></div>
        </div>
      </div>

      <!-- 用户余额卡片 -->
      <div class="status-card user-balance">
        <div class="card-title">👛 你的余额</div>
        <div class="balance-list">
          <div class="balance-item">
            <span class="balance-symbol">{{ selectedPair?.token0?.symbol }}</span>
            <span class="balance-amount">{{ formatNumber(props.userToken0Balance, 2) }}</span>
          </div>
          <div class="balance-item">
            <span class="balance-symbol">{{ selectedPair?.token1?.symbol }}</span>
            <span class="balance-amount">{{ formatNumber(props.userToken1Balance, 6) }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  selectedPair: {
    type: Object,
    default: null
  },
  reserves: {
    type: Object,
    default: () => ({ token0: 0, token1: 0 })
  },
  totalSupply: {
    type: Number,
    default: 0
  },
  userLpBalance: {
    type: Number,
    default: 0
  },
  currentPrice: {
    type: Number,
    default: 0
  },
  userLpShare: {
    type: Number,
    default: 0
  },
  userToken0Balance: {
    type: Number,
    default: 10000
  },
  userToken1Balance: {
    type: Number,
    default: 50
  }
})

const formatNumber = (num, decimals = 2) => {
  if (num === undefined || num === null || isNaN(num)) return '0'
  return new Intl.NumberFormat('en-US', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals
  }).format(num)
}
</script>

<style scoped>
.pool-status {
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

.status-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
}

.status-card {
  background: linear-gradient(135deg, rgba(99, 102, 241, 0.06) 0%, rgba(168, 85, 247, 0.06) 100%);
  border: 1px solid var(--border-main);
  border-radius: 12px;
  padding: 16px;
}

.card-title {
  font-weight: 600;
  color: var(--text-main);
  margin-bottom: 12px;
  font-size: 14px;
}

/* 储备量卡片 */
.reserves {
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%);
  border: 1px solid rgba(102, 126, 234, 0.3);
  color: var(--text-main);
}

.reserves .card-title {
  color: var(--text-main);
}

.reserves-display {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.reserve-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: var(--bg-surface-2);
  padding: 10px 12px;
  border-radius: 8px;
  border: 1px solid var(--border-main);
}

.token-info {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.token-symbol {
  font-weight: 600;
  font-size: 14px;
  color: var(--text-main);
}

.token-name {
  font-size: 11px;
  color: var(--text-muted);
}

.reserve-amount {
  font-family: 'Courier New', monospace;
  font-size: 16px;
  font-weight: 600;
  color: var(--text-main);
}

.reserve-divider {
  text-align: center;
  font-size: 18px;
  color: var(--text-muted);
}

.k-value {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-top: 12px;
  padding-top: 12px;
  border-top: 1px solid var(--border-main);
}

.k-label {
  font-family: 'Courier New', monospace;
  font-size: 14px;
  color: var(--text-muted);
}

.k-number {
  font-family: 'Courier New', monospace;
  font-size: 14px;
  font-weight: 600;
  color: var(--text-main);
}

/* 价格卡片 */
.price-display {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.price-row {
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
}

.price-value {
  font-size: 14px;
  color: var(--text-main);
}

.price-value.highlight {
  font-weight: 600;
  color: var(--accent-green);
  font-family: 'Courier New', monospace;
}

.price-equals {
  color: var(--text-muted);
}

.price-symbol {
  font-size: 12px;
  color: var(--text-muted);
}

.no-liquidity {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 20px;
  color: var(--text-muted);
}

.empty-icon {
  font-size: 32px;
}

/* LP代币卡片 */
.lp-info {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.lp-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 13px;
}

.lp-label {
  color: var(--text-muted);
}

.lp-value {
  font-family: 'Courier New', monospace;
  color: var(--text-main);
}

.lp-value.highlight {
  font-weight: 600;
  color: var(--accent-orange);
}

.share-bar {
  height: 6px;
  background: var(--border-main);
  border-radius: 3px;
  margin-top: 12px;
  overflow: hidden;
}

.share-fill {
  height: 100%;
  background: linear-gradient(90deg, rgba(255, 152, 0, 0.8), rgba(255, 87, 34, 0.8));
  border-radius: 3px;
  transition: width 0.3s;
}

/* 用户余额卡片 */
.balance-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.balance-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 12px;
  background: var(--bg-surface-2);
  border-radius: 8px;
  border: 1px solid var(--border-main);
}

.balance-symbol {
  font-weight: 600;
  color: var(--text-main);
}

.balance-amount {
  font-family: 'Courier New', monospace;
  color: var(--accent-green);
  font-weight: 600;
}

@media (max-width: 768px) {
  .status-grid {
    grid-template-columns: 1fr;
  }
}
</style>
