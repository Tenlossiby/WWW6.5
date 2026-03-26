<template>
  <div class="architecture-diagram" @click="handleClick">
    <div class="section-header">
      <span class="icon">🏗️</span>
      <h3>系统架构图</h3>
      <span class="badge">工厂模式</span>
    </div>

    <div class="diagram-container">
      <!-- Factory -->
      <div class="node factory-node">
        <div class="node-icon">🏭</div>
        <div class="node-title">MiniDexFactory</div>
        <div class="node-desc">工厂合约</div>
        <div class="node-functions">
          <span class="func-tag">createPair</span>
          <span class="func-tag">getPair</span>
        </div>
      </div>

      <!-- Arrow -->
      <div class="arrow">
        <span>创建</span>
        <div class="arrow-line"></div>
      </div>

      <!-- Pairs -->
      <div class="pairs-container">
        <div class="node pair-node">
          <div class="node-icon">💱</div>
          <div class="node-title">MiniDexPair</div>
          <div class="node-desc">交易对合约</div>
          <div class="node-functions">
            <span class="func-tag">mint</span>
            <span class="func-tag">burn</span>
            <span class="func-tag">swap</span>
          </div>
        </div>

        <!-- Arrow -->
        <div class="arrow">
          <span>发行</span>
          <div class="arrow-line"></div>
        </div>

        <!-- LP Token -->
        <div class="node lp-node">
          <div class="node-icon">🪙</div>
          <div class="node-title">LPToken</div>
          <div class="node-desc">流动性代币</div>
          <div class="node-functions">
            <span class="func-tag">ERC20</span>
            <span class="func-tag">transfer</span>
          </div>
        </div>
      </div>
    </div>

    <!-- 工厂模式说明 -->
    <div class="pattern-info">
      <div class="info-item">
        <span class="info-icon">🎯</span>
        <div>
          <div class="info-title">单一职责</div>
          <div class="info-desc">工厂负责创建，交易对负责交易</div>
        </div>
      </div>
      <div class="info-item">
        <span class="info-icon">🔍</span>
        <div>
          <div class="info-title">可追踪</div>
          <div class="info-desc">所有交易对地址都被记录</div>
        </div>
      </div>
      <div class="info-item">
        <span class="info-icon">🛡️</span>
        <div>
          <div class="info-title">防重复</div>
          <div class="info-desc">同一交易对只能创建一次</div>
        </div>
      </div>
      <div class="info-item">
        <span class="info-icon">📊</span>
        <div>
          <div class="info-title">可查询</div>
          <div class="info-desc">支持遍历所有交易对</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const emit = defineEmits(['unlock'])

const handleClick = (event) => {
  emit('unlock', 'factory_pattern', event)
}
</script>

<style scoped>
.architecture-diagram {
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.08) 0%, rgba(118, 75, 162, 0.08) 100%);
  border: 1px solid rgba(102, 126, 234, 0.2);
  border-radius: 16px;
  padding: 20px;
  color: var(--text-main);
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;
}

.architecture-diagram:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.1);
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

.badge {
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.15) 0%, rgba(118, 75, 162, 0.15) 100%);
  border: 1px solid rgba(102, 126, 234, 0.3);
  color: var(--text-main);
  padding: 4px 12px;
  border-radius: 12px;
  font-size: 12px;
}

.diagram-container {
  display: flex;
  align-items: center;
  gap: 16px;
  flex-wrap: wrap;
  justify-content: center;
  padding: 20px 0;
}

.node {
  background: rgba(255, 255, 255, 0.8);
  border-radius: 12px;
  padding: 16px;
  text-align: center;
  color: var(--text-main);
  min-width: 140px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

.node-icon {
  font-size: 32px;
  margin-bottom: 8px;
}

.node-title {
  font-weight: 600;
  font-size: 14px;
  margin-bottom: 4px;
  color: var(--text-main);
}

.node-desc {
  font-size: 12px;
  color: var(--text-muted);
  margin-bottom: 8px;
}

.node-functions {
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  justify-content: center;
}

.func-tag {
  background: rgba(59, 130, 246, 0.1);
  color: var(--accent-blue);
  padding: 2px 8px;
  border-radius: 4px;
  font-size: 10px;
}

.factory-node {
  border: 1px solid rgba(245, 158, 11, 0.4);
}

.pair-node {
  border: 1px solid rgba(34, 197, 94, 0.4);
}

.lp-node {
  border: 1px solid rgba(139, 92, 246, 0.4);
}

.pairs-container {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.arrow {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: var(--text-muted);
  font-size: 12px;
  gap: 4px;
}

.arrow-line {
  width: 2px;
  height: 40px;
  background: var(--border-main);
  position: relative;
}

.arrow-line::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-top: 8px solid var(--border-main);
}

.pattern-info {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
  margin-top: 20px;
}

.info-item {
  display: flex;
  align-items: center;
  gap: 12px;
  background: linear-gradient(135deg, rgba(99, 102, 241, 0.06) 0%, rgba(168, 85, 247, 0.06) 100%);
  border: 1px solid var(--border-main);
  padding: 12px;
  border-radius: 8px;
}

.info-icon {
  font-size: 24px;
}

.info-title {
  font-weight: 600;
  font-size: 14px;
  color: var(--text-main);
}

.info-desc {
  font-size: 12px;
  color: var(--text-muted);
}

@media (max-width: 768px) {
  .diagram-container {
    flex-direction: column;
  }
  
  .arrow {
    flex-direction: row;
    width: 100%;
  }
  
  .arrow-line {
    width: 40px;
    height: 2px;
  }
  
  .arrow-line::after {
    bottom: 50%;
    left: auto;
    right: 0;
    transform: translateY(50%);
    border-left: 8px solid var(--border-main);
    border-right: none;
    border-top: 6px solid transparent;
    border-bottom: 6px solid transparent;
  }
  
  .pattern-info {
    grid-template-columns: 1fr;
  }
}
</style>
