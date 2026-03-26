<template>
  <div class="math-panel" @click="handleClick">
    <div class="section-header">
      <span class="icon">📐</span>
      <h3>数学原理面板</h3>
      <span class="click-count">点击 {{ mathPanelClicks }} 次</span>
    </div>

    <!-- 公式展示 -->
    <div class="formula-section">
      <div class="main-formula">
        <div class="formula-title">恒定乘积公式</div>
        <div class="formula">x × y = k</div>
        <div class="formula-desc">储备0 × 储备1 = 常数</div>
      </div>

      <!-- 当前池子状态 -->
      <div v-if="reserves.token0 > 0 || reserves.token1 > 0" class="pool-math">
        <div class="math-row">
          <span class="label">当前储备:</span>
          <span class="value">{{ formatNumber(reserves.token0) }} × {{ formatNumber(reserves.token1) }}</span>
        </div>
        <div class="math-row">
          <span class="label">k 值:</span>
          <span class="value">{{ formatNumber(reserves.token0 * reserves.token1) }}</span>
        </div>
        <div class="math-row">
          <span class="label">当前价格:</span>
          <span class="value">1 Token0 = {{ formatNumber(reserves.token1 / reserves.token0, 4) }} Token1</span>
        </div>
      </div>
    </div>

    <!-- 顺序解锁提示 -->
    <div class="unlock-hints">
      <div 
        v-for="(hint, index) in unlockHints" 
        :key="index"
        class="hint-item"
        :class="{ 
          'unlocked': mathPanelClicks > index,
          'current': mathPanelClicks === index 
        }"
      >
        <span class="hint-number">{{ index + 1 }}</span>
        <span class="hint-text">{{ hint }}</span>
      </div>
    </div>

    <!-- 计算公式展示 -->
    <div class="calculations">
      <div class="calc-section">
        <div class="calc-title">💧 添加流动性计算</div>
        <div class="calc-formula">
          <div v-if="mathPanelClicks >= 3" class="calc-item">
            <span class="calc-label">首次添加:</span>
            <code>liquidity = √(amount0 × amount1)</code>
          </div>
          <div v-if="mathPanelClicks >= 3" class="calc-item">
            <span class="calc-label">后续添加:</span>
            <code>liquidity = min(a0/r0, a1/r1) × totalSupply</code>
          </div>
        </div>
      </div>

      <div class="calc-section">
        <div class="calc-title">🔄 交换计算</div>
        <div class="calc-formula">
          <div v-if="mathPanelClicks >= 1" class="calc-item">
            <span class="calc-label">输出计算:</span>
            <code>amountOut = (amountIn × reserveOut) / (reserveIn + amountIn)</code>
          </div>
          <div v-if="mathPanelClicks >= 2" class="calc-item">
            <span class="calc-label">价格影响:</span>
            <code>滑点 = amountIn / (reserveIn + amountIn)</code>
          </div>
        </div>
      </div>

      <div class="calc-section">
        <div class="calc-title">🔢 平方根计算 (牛顿迭代)</div>
        <div class="calc-formula">
          <div v-if="mathPanelClicks >= 4" class="calc-item">
            <code class="code-block">
function sqrt(y) {
  z = y
  x = y / 2 + 1
  while (x &lt; z) {
    z = x
    x = (y / x + x) / 2
  }
  return z
}
            </code>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  mathPanelClicks: {
    type: Number,
    default: 0
  },
  reserves: {
    type: Object,
    default: () => ({ token0: 0, token1: 0 })
  }
})

const emit = defineEmits(['unlock'])

const unlockHints = [
  '点击了解恒定乘积公式',
  '再次点击了解价格发现机制',
  '再次点击了解流动性计算',
  '再次点击了解平方根算法'
]

const handleClick = () => {
  emit('unlock', props.mathPanelClicks + 1)
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
.math-panel {
  background: linear-gradient(135deg, rgba(17, 153, 142, 0.08) 0%, rgba(56, 239, 125, 0.08) 100%);
  border: 1px solid var(--border-main);
  border-radius: 16px;
  padding: 20px;
  color: var(--text-main);
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;
  box-sizing: border-box;
  max-width: 100%;
  overflow-x: hidden;
}

.math-panel:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(17, 153, 142, 0.15);
}

.section-header {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 20px;
}

.section-header .icon {
  font-size: 24px;
}

.section-header h3 {
  margin: 0;
  font-size: 18px;
  flex: 1;
}

.click-count {
  background: rgba(17, 153, 142, 0.1);
  padding: 4px 12px;
  border-radius: 12px;
  font-size: 12px;
  color: var(--text-muted);
}

.formula-section {
  background: linear-gradient(135deg, rgba(99, 102, 241, 0.06) 0%, rgba(168, 85, 247, 0.06) 100%);
  border: 1px solid var(--border-main);
  border-radius: 12px;
  padding: 20px;
  margin-bottom: 16px;
}

.main-formula {
  text-align: center;
  margin-bottom: 16px;
}

.formula-title {
  font-size: 14px;
  color: var(--text-muted);
  margin-bottom: 8px;
}

.formula {
  font-size: 36px;
  font-weight: bold;
  font-family: 'Courier New', monospace;
  margin: 8px 0;
  color: var(--accent-blue);
}

.formula-desc {
  font-size: 12px;
  color: var(--text-muted);
}

.pool-math {
  border-top: 1px solid var(--border-main);
  padding-top: 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.math-row {
  display: flex;
  justify-content: space-between;
  font-size: 14px;
}

.math-row .label {
  color: var(--text-muted);
}

.math-row .value {
  font-weight: 600;
  font-family: 'Courier New', monospace;
  color: var(--text-main);
}

.unlock-hints {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 16px;
}

.hint-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 12px;
  background: linear-gradient(135deg, rgba(99, 102, 241, 0.05) 0%, rgba(168, 85, 247, 0.05) 100%);
  border: 1px solid var(--border-main);
  border-radius: 8px;
  transition: all 0.3s;
}

.hint-item.unlocked {
  background: linear-gradient(135deg, rgba(34, 197, 94, 0.08) 0%, rgba(16, 185, 129, 0.08) 100%);
  border-color: rgba(34, 197, 94, 0.3);
}

.hint-item.current {
  background: linear-gradient(135deg, rgba(245, 158, 11, 0.1) 0%, rgba(234, 179, 8, 0.1) 100%);
  border-color: rgba(245, 158, 11, 0.4);
  box-shadow: 0 0 0 1px rgba(245, 158, 11, 0.2);
}

.hint-number {
  width: 24px;
  height: 24px;
  background: rgba(99, 102, 241, 0.15);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: 600;
  color: var(--text-main);
}

.hint-item.unlocked .hint-number {
  background: rgba(34, 197, 94, 0.2);
  color: #16a34a;
}

.hint-text {
  font-size: 13px;
  color: var(--text-main);
}

.calculations {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.calc-section {
  background: linear-gradient(135deg, rgba(59, 130, 246, 0.06) 0%, rgba(99, 102, 241, 0.06) 100%);
  border: 1px solid var(--border-main);
  border-radius: 8px;
  padding: 12px;
  max-width: 100%;
  box-sizing: border-box;
}

.calc-title {
  font-weight: 600;
  font-size: 13px;
  margin-bottom: 8px;
}

.calc-formula {
  display: flex;
  flex-direction: column;
  gap: 6px;
  max-width: 100%;
}

.calc-item {
  display: flex;
  flex-direction: column;
  gap: 4px;
  max-width: 100%;
}

.calc-label {
  font-size: 11px;
  opacity: 0.8;
}

code {
  background: rgba(0, 0, 0, 0.2);
  padding: 4px 8px;
  border-radius: 4px;
  font-family: 'Courier New', monospace;
  font-size: 11px;
  word-break: break-all;
  white-space: pre-wrap;
  max-width: 100%;
  display: block;
  overflow-x: auto;
}

.code-block {
  white-space: pre-wrap;
  word-break: break-all;
  overflow-x: auto;
  font-size: 10px;
  line-height: 1.5;
  max-width: 100%;
}

@media (max-width: 768px) {
  .formula {
    font-size: 28px;
  }
}
</style>
