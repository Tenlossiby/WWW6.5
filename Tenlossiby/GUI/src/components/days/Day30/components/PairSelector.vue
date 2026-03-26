<template>
  <div class="pair-selector" @click="handleMappingClick">
    <div class="section-header">
      <span class="icon">🔗</span>
      <h3>交易对选择</h3>
      <span class="badge">{{ allPairs.length }} 个交易对</span>
    </div>

    <!-- 双映射演示 -->
    <div class="mapping-demo">
      <div class="mapping-title">🗺️ 双映射结构演示</div>
      <div class="mapping-content">
        <div class="mapping-row">
          <code>getPair[token0][token1]</code>
          <span class="arrow">→</span>
          <span class="address">{{ truncateAddress(selectedPair?.address || '0x1234...5678') }}</span>
        </div>
        <div class="mapping-row">
          <code>getPair[token1][token0]</code>
          <span class="arrow">→</span>
          <span class="address">{{ truncateAddress(selectedPair?.address || '0x1234...5678') }}</span>
        </div>
      </div>
      <div class="mapping-hint">💡 点击了解双映射如何避免重复创建</div>
    </div>

    <!-- 已选交易对详情 -->
    <div v-if="selectedPair" class="selected-pair">
      <div class="pair-header">
        <span class="pair-title">当前选中</span>
        <span class="pair-symbols">{{ selectedPair.token0?.symbol || '?' }}/{{ selectedPair.token1?.symbol || '?' }}</span>
      </div>
      <div class="pair-details">
        <div class="detail-row">
          <span class="label">地址:</span>
          <span class="value address">{{ truncateAddress(selectedPair.address) }}</span>
        </div>
        <div class="detail-row">
          <span class="label">Token0:</span>
          <span class="value address">{{ truncateAddress(selectedPair.token0?.address) }}</span>
        </div>
        <div class="detail-row">
          <span class="label">Token1:</span>
          <span class="value address">{{ truncateAddress(selectedPair.token1?.address) }}</span>
        </div>
      </div>
    </div>

    <!-- 交易对列表 -->
    <div class="pairs-list">
      <div class="list-title">可用交易对</div>
      <div class="pairs-cards">
        <div 
          v-for="pair in allPairs" 
          :key="pair.address"
          class="pair-item"
          :class="{ active: selectedPair?.address === pair.address }"
          @click.stop="$emit('select-pair', pair)"
        >
          <div class="pair-info">
            <span class="pair-name">{{ pair.token0?.symbol || '?' }}/{{ pair.token1?.symbol || '?' }}</span>
            <span class="pair-addr">{{ truncateAddress(pair.address) }}</span>
          </div>
          <span class="pair-status" :class="{ 'has-liquidity': pair.hasLiquidity, 'empty': !pair.hasLiquidity }">
            {{ pair.hasLiquidity ? '💧' : '⚪' }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
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

const emit = defineEmits(['select-pair', 'mapping-click'])

// 截断地址显示
const truncateAddress = (address) => {
  if (!address || typeof address !== 'string') return ''
  return `${address.slice(0, 6)}...${address.slice(-4)}`
}

// 处理映射点击
const handleMappingClick = () => {
  emit('mapping-click')
}
</script>

<style scoped>
.pair-selector {
  background: linear-gradient(135deg, rgba(99, 102, 241, 0.05) 0%, rgba(168, 85, 247, 0.05) 100%);
  border: 1px solid var(--border-main);
  border-radius: 16px;
  padding: 20px;
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;
}

.pair-selector:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(99, 102, 241, 0.1);
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
  flex: 1;
}

.badge {
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.15) 0%, rgba(118, 75, 162, 0.15) 100%);
  border: 1px solid rgba(102, 126, 234, 0.3);
  color: var(--text-main);
  padding: 4px 12px;
  border-radius: 12px;
  font-size: 12px;
}

.mapping-demo {
  background: linear-gradient(135deg, rgba(17, 153, 142, 0.08) 0%, rgba(56, 239, 125, 0.08) 100%);
  border: 1px solid rgba(17, 153, 142, 0.2);
  border-radius: 12px;
  padding: 16px;
  margin-bottom: 20px;
  color: var(--text-main);
}

.mapping-title {
  font-weight: 600;
  margin-bottom: 12px;
  font-size: 14px;
  color: var(--text-main);
}

.mapping-content {
  background: var(--bg-surface-2);
  border: 1px solid var(--border-main);
  border-radius: 8px;
  padding: 12px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.mapping-row {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 13px;
}

.mapping-row code {
  background: rgba(99, 102, 241, 0.1);
  padding: 4px 8px;
  border-radius: 4px;
  font-family: 'Courier New', monospace;
  font-size: 11px;
  min-width: 140px;
  color: var(--text-main);
}

.arrow {
  color: var(--text-muted);
}

.mapping-row .address {
  font-family: 'Courier New', monospace;
  background: rgba(99, 102, 241, 0.1);
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 11px;
  color: var(--text-main);
}

.mapping-hint {
  margin-top: 12px;
  text-align: center;
  font-size: 12px;
  color: var(--text-muted);
}

.selected-pair {
  background: linear-gradient(135deg, rgba(34, 197, 94, 0.08) 0%, rgba(16, 185, 129, 0.08) 100%);
  border: 1px solid rgba(34, 197, 94, 0.3);
  border-radius: 12px;
  padding: 16px;
  margin-bottom: 20px;
}

.pair-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
}

.pair-title {
  font-size: 12px;
  color: var(--text-muted);
}

.pair-symbols {
  font-weight: 600;
  font-size: 18px;
  color: var(--accent-green);
}

.pair-details {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.detail-row {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 13px;
}

.detail-row .label {
  color: var(--text-muted);
  min-width: 80px;
}

.detail-row .value {
  color: var(--text-main);
  font-family: 'Courier New', monospace;
}

.detail-row .value.address {
  font-size: 11px;
}

.pairs-list {
  border-top: 1px solid var(--border-main);
  padding-top: 20px;
}

.list-title {
  font-weight: 600;
  color: var(--text-main);
  margin-bottom: 12px;
  font-size: 14px;
}

.pairs-cards {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.pair-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px;
  background: linear-gradient(135deg, rgba(99, 102, 241, 0.06) 0%, rgba(168, 85, 247, 0.06) 100%);
  border: 1px solid var(--border-main);
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.2s;
}

.pair-item:hover {
  background: linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(99, 102, 241, 0.1) 100%);
  border-color: var(--accent-blue);
}

.pair-item.active {
  background: linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(99, 102, 241, 0.1) 100%);
  border-color: var(--accent-blue);
}

.pair-info {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.pair-name {
  font-weight: 600;
  color: var(--text-main);
}

.pair-addr {
  font-family: 'Courier New', monospace;
  font-size: 11px;
  color: var(--text-muted);
}

.pair-status {
  font-size: 18px;
}

.has-liquidity {
  color: var(--accent-green);
}

.empty {
  color: var(--text-muted);
}

@media (max-width: 768px) {
  .mapping-row {
    flex-direction: column;
    align-items: flex-start;
    gap: 4px;
  }
  
  .mapping-row code {
    min-width: auto;
    width: 100%;
  }
  
  .arrow {
    display: none;
  }
}
</style>
