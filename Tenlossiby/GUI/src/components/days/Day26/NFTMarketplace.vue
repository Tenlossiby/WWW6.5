<template>
  <div class="day-26-content day-content">
    <!-- 消息提示 -->
    <div v-if="message" :class="['message-toast', { error: isError }]">
      {{ message }}
    </div>

    <!-- 标准双栏布局 -->
    <div class="content-layout" :class="{ 'single-column': unlockedConcepts.length === 0 }">
      <!-- 左栏：交互操作区 -->
      <div class="left-column">
        <div class="interaction-area">
          <!-- 市场架构可视化 -->
          <div class="section architecture-section" @click="handleArchitectureClick">
            <div class="section-header">
              <h4>🏪 NFT市场架构（点击查看结构体）</h4>
              <span class="hover-hint">👆 点击了解Listing结构体</span>
            </div>
            <div class="market-arch">
              <div class="arch-row">
                <div class="arch-box seller">
                  <div class="box-icon">👤</div>
                  <div class="box-label">Seller</div>
                  <div class="box-sublabel">卖家</div>
                </div>
                <div class="arch-arrow">→</div>
                <div class="arch-box marketplace">
                  <div class="box-icon">🏪</div>
                  <div class="box-label">Marketplace</div>
                  <div class="box-sublabel">市场合约</div>
                  <div class="lock-badge">🔒 ReentrancyGuard</div>
                </div>
                <div class="arch-arrow">→</div>
                <div class="arch-box buyer">
                  <div class="box-icon">🛒</div>
                  <div class="box-label">Buyer</div>
                  <div class="box-sublabel">买家</div>
                </div>
              </div>
              <div class="struct-preview">
                <div class="code-snippet">
                  <pre>struct Listing {
  address seller;
  uint256 price;
  ...
}</pre>
                </div>
              </div>
            </div>
          </div>

          <!-- 市场统计面板 -->
          <div class="section stats-section" @click="handleStatsClick">
            <div class="section-header">
              <h4>📊 市场统计（点击查看双重映射）</h4>
              <span class="hover-hint">👆 点击了解双重映射</span>
            </div>
            <div class="stats-grid">
              <div class="stat-item">
                <div class="stat-value">{{ activeListings.length }}</div>
                <div class="stat-label">活跃挂单</div>
              </div>
              <div class="stat-item">
                <div class="stat-value">{{ totalVolume.toFixed(3) }}</div>
                <div class="stat-label">总交易量 (ETH)</div>
              </div>
              <div class="stat-item">
                <div class="stat-value">{{ marketplaceFeePercent / 100 }}%</div>
                <div class="stat-label">市场手续费</div>
              </div>
            </div>
            <div class="mapping-visual">
              <div class="mapping-label">listings[nftAddress][tokenId]</div>
              <div class="mapping-arrows">NFT地址 → TokenID → Listing信息</div>
            </div>
          </div>

          <!-- 资金分配可视化 -->
          <div class="section distribution-section" @click="handleDistributionClick">
            <div class="section-header">
              <h4>💰 资金分配流程（点击查看）</h4>
              <span class="hover-hint">👆 点击了解资金分配</span>
            </div>
            <div class="fund-flow">
              <div class="flow-start">
                <div class="flow-box buyer-box">
                  <div class="flow-icon">🛒</div>
                  <div class="flow-label">买家支付</div>
                  <div class="flow-amount">1.0 ETH</div>
                </div>
              </div>
              <div class="flow-branches">
                <div class="flow-branch">
                  <div class="flow-arrow">↓</div>
                  <div class="flow-box fee-box">
                    <div class="flow-icon">🏪</div>
                    <div class="flow-label">市场费</div>
                    <div class="flow-amount">0.025 ETH</div>
                    <div class="flow-percent">(2.5%)</div>
                  </div>
                </div>
                <div class="flow-branch">
                  <div class="flow-arrow">↓</div>
                  <div class="flow-box royalty-box">
                    <div class="flow-icon">🎨</div>
                    <div class="flow-label">版税</div>
                    <div class="flow-amount">0.05 ETH</div>
                    <div class="flow-percent">(5%)</div>
                  </div>
                </div>
                <div class="flow-branch">
                  <div class="flow-arrow">↓</div>
                  <div class="flow-box seller-box">
                    <div class="flow-icon">👤</div>
                    <div class="flow-label">卖家实收</div>
                    <div class="flow-amount">0.925 ETH</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- 安全机制说明 -->
          <div class="section security-section" @click="handleSecurityClick">
            <div class="section-header">
              <h4>🛡️ 安全机制（点击查看重入保护）</h4>
              <span class="hover-hint">👆 点击了解重入保护</span>
            </div>
            <div class="security-content">
              <div class="security-item">
                <div class="security-icon">🔒</div>
                <div class="security-text">
                  <div class="security-title">nonReentrant 修饰符</div>
                  <div class="security-desc">防止重入攻击，保护资金安全</div>
                </div>
              </div>
              <div class="security-item">
                <div class="security-icon">🚫</div>
                <div class="security-text">
                  <div class="security-title">拒绝直接转账</div>
                  <div class="security-desc">receive() + revert() 强制通过 buyNFT()</div>
                </div>
              </div>
              <div class="code-block">
                <pre>receive() external payable {
    revert("Direct ETH not accepted");
}</pre>
              </div>
            </div>
          </div>

          <!-- 操作标签页 -->
          <div class="section operation-section">
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

            <!-- 挂单标签 -->
            <div v-if="activeTab === 'list'" class="operation-panel">
              <h4>📋 挂单出售 NFT</h4>
              <div class="form-group">
                <label>NFT合约地址:</label>
                <select v-model="listForm.nftAddress" class="form-select">
                  <option value="">选择NFT合约</option>
                  <option value="0xNFTContract1...">CryptoArt Collection</option>
                  <option value="0xNFTContract2...">Game Items</option>
                </select>
              </div>
              <div class="form-group">
                <label>Token ID:</label>
                <input
                  v-model.number="listForm.tokenId"
                  type="number"
                  placeholder="输入Token ID"
                  class="form-input"
                />
              </div>
              <div class="form-group">
                <label>售价 (ETH):</label>
                <input
                  v-model.number="listForm.price"
                  type="number"
                  step="0.001"
                  placeholder="输入售价"
                  class="form-input"
                />
              </div>
              <div class="form-group">
                <label>版税接收地址:</label>
                <input
                  v-model="listForm.royaltyReceiver"
                  type="text"
                  placeholder="0x... (可选，默认卖家)"
                  class="form-input"
                />
              </div>
              <div class="form-group">
                <label>版税比例 (%):</label>
                <input
                  v-model.number="listForm.royaltyPercent"
                  type="number"
                  max="10"
                  placeholder="0-10"
                  class="form-input"
                />
              </div>
              <button class="day-action-btn cyan" @click="handleListNFT">
                📋 挂单出售
              </button>
            </div>

            <!-- 购买标签 -->
            <div v-if="activeTab === 'buy'" class="operation-panel">
              <h4>🛒 购买 NFT</h4>
              <div class="form-group">
                <label>选择要购买的NFT:</label>
                <select v-model="selectedListing" class="form-select">
                  <option :value="null">请选择</option>
                  <option v-for="item in activeListings" :key="item.id" :value="item">
                    Token #{{ item.tokenId }} - {{ item.price }} ETH
                  </option>
                </select>
              </div>
              <div v-if="selectedListing" class="purchase-preview">
                <div class="preview-item">
                  <span>售价:</span>
                  <span class="highlight">{{ selectedListing.price }} ETH</span>
                </div>
                <div class="preview-item">
                  <span>版税:</span>
                  <span>{{ (selectedListing.price * selectedListing.royaltyPercent / 10000).toFixed(4) }} ETH ({{ selectedListing.royaltyPercent / 100 }}%)</span>
                </div>
                <div class="preview-item">
                  <span>市场费:</span>
                  <span>{{ (selectedListing.price * marketplaceFeePercent / 10000).toFixed(4) }} ETH ({{ marketplaceFeePercent / 100 }}%)</span>
                </div>
                <div class="preview-item total">
                  <span>总计支付:</span>
                  <span class="highlight">{{ selectedListing.price }} ETH</span>
                </div>
              </div>
              <button class="day-action-btn green" @click="handleBuyNFT" :disabled="!selectedListing">
                🛒 立即购买
              </button>

              <!-- 简化版NFT展示区域 -->
              <div v-if="activeListings.length > 0" class="mini-gallery">
                <h5>🖼️ 市场热推 NFT</h5>
                <div class="mini-nft-grid">
                  <div
                    v-for="item in activeListings.slice(0, 3)"
                    :key="item.id"
                    class="mini-nft-card"
                    :class="{ 'selected': selectedListing?.id === item.id }"
                    @click="selectedListing = item"
                  >
                    <div class="mini-nft-icon">{{ getNftIcon(item.tokenId) }}</div>
                    <div class="mini-nft-info">
                      <div class="mini-nft-title">Token #{{ item.tokenId }}</div>
                      <div class="mini-nft-price">{{ item.price }} ETH</div>
                    </div>
                  </div>
                </div>
                <div v-if="activeListings.length > 3" class="mini-gallery-more">
                  还有 {{ activeListings.length - 3 }} 个NFT在下方画廊中展示
                </div>
              </div>
            </div>

            <!-- 取消标签 -->
            <div v-if="activeTab === 'cancel'" class="operation-panel">
              <h4>❌ 取消挂单</h4>
              <div class="form-group">
                <label>选择要取消的挂单:</label>
                <select v-model="selectedMyListing" class="form-select">
                  <option :value="null">请选择</option>
                  <option v-for="item in myListings" :key="item.id" :value="item">
                    Token #{{ item.tokenId }} - {{ item.price }} ETH
                  </option>
                </select>
              </div>
              <button class="day-action-btn red" @click="handleCancelListing" :disabled="!selectedMyListing">
                ❌ 取消挂单
              </button>
            </div>
          </div>

          <!-- NFT画廊/市场展示 -->
          <div class="section gallery-section">
            <div class="section-header">
              <h4>🖼️ NFT 市场 ({{ activeListings.length }} 个挂单)</h4>
            </div>
            <div class="nft-grid">
              <div
                v-for="item in activeListings"
                :key="item.id"
                class="market-nft-card"
                :class="{ 'selected': selectedListing?.id === item.id }"
                @click="selectListing(item)"
              >
                <div class="nft-image">
                  <div class="nft-icon">{{ getNftIcon(item.tokenId) }}</div>
                </div>
                <div class="nft-info">
                  <div class="nft-title">Token #{{ item.tokenId }}</div>
                  <div class="nft-contract">{{ item.nftAddress.slice(0, 8) }}...</div>
                  <div class="nft-price">{{ item.price }} ETH</div>
                  <div class="nft-seller">卖家: {{ item.seller.slice(0, 8) }}...</div>
                  <div v-if="item.royaltyPercent > 0" class="nft-royalty">
                    版税: {{ item.royaltyPercent / 100 }}%
                  </div>
                </div>
                <div class="nft-actions">
                  <button class="day-action-btn green small" @click.stop="selectAndBuy(item)">
                    购买
                  </button>
                </div>
              </div>
              <div v-if="activeListings.length === 0" class="empty-market">
                <div class="empty-icon">🏪</div>
                <div class="empty-text">市场暂无挂单</div>
                <div class="empty-subtext">成为第一个卖家！</div>
              </div>
            </div>
          </div>

          <!-- 交易历史 -->
          <div v-if="operationLogs.length > 0" class="section history-section">
            <h4>📜 交易历史</h4>
            <div class="history-list">
              <div
                v-for="(log, index) in operationLogs.slice(0, 5)"
                :key="index"
                class="history-item"
                :class="log.type"
              >
                <div class="history-icon">{{ getLogIcon(log.operation) }}</div>
                <div class="history-content">
                  <div class="history-title">{{ log.operation }}</div>
                  <div class="history-detail">{{ log.details }}</div>
                  <div class="history-time">{{ formatTime(log.timestamp) }}</div>
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
          :current-day="26"
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
      title="NFTMarketplace 完整代码"
      @close="showFullCode = false"
    />
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useProgressStore } from '../../../stores/progressStore'
import { useOperationLogStore } from '../../../stores/operationLogStore'
import { getFullCode } from '../../../data/days'
import { getDay26Hint, getDay26ExplanationHint } from '../../../data/concepts'
import { useDay26 } from '../../../composables/useDay26'
import KnowledgePanel from '../../shared/KnowledgePanel.vue'
import FullCodeModal from '../../shared/FullCodeModal.vue'

const progressStore = useProgressStore()
const logStore = useOperationLogStore()

const {
  listings,
  marketplaceFeePercent,
  totalVolume,
  listForm,
  selectedListing,
  activeListings,
  myListings,
  message,
  isError,
  listNFT,
  buyNFT,
  cancelListing,
  showMessage
} = useDay26()

// 标签页
const tabs = [
  { key: 'list', label: '挂单', icon: '📋' },
  { key: 'buy', label: '购买', icon: '🛒' },
  { key: 'cancel', label: '取消', icon: '❌' }
]
const activeTab = ref('list')

// 我的挂单选择
const selectedMyListing = ref(null)

// 完整代码弹窗
const showFullCode = ref(false)
const fullCode = computed(() => getFullCode(26))

// 获取 Day 26 的解锁概念
const unlockedConcepts = computed(() =>
  progressStore.getDayProgress(26)?.unlockedConcepts || []
)

// 计算进度百分比
const progressPercentage = computed(() => {
  const progress = progressStore.getDayProgress(26)
  if (!progress || progress.totalConcepts === 0) return 0
  return Math.round((progress.unlockedConcepts.length / progress.totalConcepts) * 100)
})

// 当前提示 - 使用 ref 以便在点击时动态设置
const currentHint = ref('')

// 操作日志
const operationLogs = computed(() => logStore.getDayLogs(26))

// ========== 点击解锁概念 ==========

const handleArchitectureClick = () => {
  progressStore.unlockConcept(26, 'nft_marketplace')
  currentHint.value = getDay26ExplanationHint('nft_marketplace') + ' 📍 向下滚动查看「📊 市场统计」区块了解市场数据！'
  showMessage('✅ 你了解了 NFT 市场！🎉 恭喜解锁：NFT市场！📍 向下滚动查看「📊 市场统计」区块了解市场数据！')
}

const handleStatsClick = () => {
  progressStore.unlockConcept(26, 'marketplace_security')
  currentHint.value = getDay26ExplanationHint('marketplace_security') + ' 📍 向下滚动查看「💰 资金分配流程」区块了解版税分配！'
  showMessage('✅ 你了解了市场安全！🎉 恭喜解锁：市场安全！📍 向下滚动查看「💰 资金分配流程」区块了解版税分配！')
}

const handleDistributionClick = () => {
  progressStore.unlockConcept(26, 'royalty_payment')
  currentHint.value = getDay26ExplanationHint('royalty_payment') + ' 📍 向下滚动查看「🛡️ 安全机制」区块了解NFT托管！'
  showMessage('✅ 你了解了版税支付！🎉 恭喜解锁：版税支付！📍 向下滚动查看「🛡️ 安全机制」区块了解NFT托管！')
}

const handleSecurityClick = () => {
  progressStore.unlockConcept(26, 'nft_escrow')
  currentHint.value = getDay26ExplanationHint('nft_escrow') + ' 📍 向下滚动到「📋 挂单」操作区开始挂单出售NFT！'
  showMessage('✅ 你了解了 NFT 托管！🎉 恭喜解锁：NFT托管！📍 向下滚动到「📋 挂单」操作区开始挂单出售NFT！')
}

// ========== 操作处理 ==========

const handleListNFT = async () => {
  const result = await listNFT(listForm.value)
  if (result.success) {
    if (result.hints.includes('listing_mechanism')) {
      progressStore.unlockConcept(26, 'listing_mechanism')
      currentHint.value = getDay26ExplanationHint('listing_mechanism') + ' 📍 切换到「🏪 购买」标签页购买NFT！'
    }
    // 重置表单
    listForm.value = {
      nftAddress: '',
      tokenId: null,
      price: null,
      royaltyReceiver: '',
      royaltyPercent: 0
    }
  }
}

const handleBuyNFT = async () => {
  if (!selectedListing.value) return
  const result = await buyNFT(selectedListing.value)
  if (result.success) {
    if (result.hints.includes('buy_now_price')) {
      progressStore.unlockConcept(26, 'buy_now_price')
    }
    if (result.hints.includes('owner_revenue')) {
      progressStore.unlockConcept(26, 'owner_revenue')
      currentHint.value = getDay26ExplanationHint('owner_revenue') + ' 📍 切换到「❌ 取消」标签页取消挂单！'
    } else {
      currentHint.value = getDay26ExplanationHint('buy_now_price') + ' 📍 查看交易历史了解交易详情！'
    }
    selectedListing.value = null
  }
}

const handleCancelListing = async () => {
  if (!selectedMyListing.value) return
  const result = await cancelListing(selectedMyListing.value)
  if (result.success) {
    if (result.hints.includes('cancel_listing')) {
      progressStore.unlockConcept(26, 'cancel_listing')
      currentHint.value = getDay26ExplanationHint('cancel_listing') + ' 🎉 Day26 所有概念已解锁！'
    }
    selectedMyListing.value = null
  }
}

// ========== 辅助方法 ==========

const selectListing = (item) => {
  selectedListing.value = item
  activeTab.value = 'buy'
}

const selectAndBuy = (item) => {
  selectedListing.value = item
  activeTab.value = 'buy'
}

const getNftIcon = (tokenId) => {
  const icons = ['🎨', '🖼️', '🎭', '🎪', '🎯', '🎲', '🎸', '🎺']
  return icons[tokenId % icons.length]
}

const getLogIcon = (operation) => {
  const icons = {
    '挂单NFT': '📋',
    '购买NFT': '🛒',
    '取消挂单': '❌'
  }
  return icons[operation] || '📄'
}

const formatTime = (timestamp) => {
  return new Date(timestamp).toLocaleTimeString()
}

// 初始化提示
onMounted(() => {
  currentHint.value = '🏪 欢迎来到 NFT 市场！点击「🏪 NFT市场架构」了解 Listing 结构体！'
})
</script>

<style scoped>
/* 区块样式 */
.section {
  background: var(--bg-surface-1);
  border-radius: 12px;
  padding: 16px;
  margin-bottom: 16px;
  border: 1px solid var(--border-main);
}

/* 不同区块的半透明渐变底色 */
.architecture-section {
  background: linear-gradient(135deg, rgba(59, 130, 246, 0.08) 0%, rgba(99, 102, 241, 0.08) 100%);
  border-color: rgba(59, 130, 246, 0.2);
}

.stats-section {
  background: linear-gradient(135deg, rgba(168, 85, 247, 0.08) 0%, rgba(236, 72, 153, 0.08) 100%);
  border-color: rgba(168, 85, 247, 0.2);
}

.distribution-section {
  background: linear-gradient(135deg, rgba(34, 197, 94, 0.08) 0%, rgba(16, 185, 129, 0.08) 100%);
  border-color: rgba(34, 197, 94, 0.2);
}

.security-section {
  background: linear-gradient(135deg, rgba(239, 68, 68, 0.08) 0%, rgba(249, 115, 22, 0.08) 100%);
  border-color: rgba(239, 68, 68, 0.2);
}

.operation-section {
  background: linear-gradient(135deg, rgba(100, 116, 139, 0.08) 0%, rgba(148, 163, 184, 0.08) 100%);
  border-color: rgba(100, 116, 139, 0.2);
}

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
}

.section-header h4 {
  margin: 0;
  color: var(--text-main);
  font-size: 14px;
}

.hover-hint {
  font-size: 12px;
  color: var(--text-muted);
  opacity: 0.7;
}

/* 市场架构 */
.market-arch {
  padding: 12px;
}

.arch-row {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  margin-bottom: 16px;
}

.arch-box {
  text-align: center;
  padding: 12px 16px;
  border-radius: 8px;
  background: var(--bg-surface-2);
  min-width: 80px;
}

.arch-box.seller { border: 2px solid #3b82f6; }
.arch-box.marketplace { border: 2px solid #f59e0b; position: relative; }
.arch-box.buyer { border: 2px solid #22c55e; }

.box-icon {
  font-size: 24px;
  margin-bottom: 4px;
}

.box-label {
  font-size: 12px;
  font-weight: bold;
  color: var(--text-main);
}

.box-sublabel {
  font-size: 10px;
  color: var(--text-muted);
}

.lock-badge {
  position: absolute;
  top: -8px;
  right: -8px;
  background: #ef4444;
  color: white;
  font-size: 9px;
  padding: 2px 6px;
  border-radius: 4px;
}

.arch-arrow {
  font-size: 20px;
  color: var(--text-muted);
}

.struct-preview {
  margin-top: 12px;
}

.code-snippet pre {
  background: var(--bg-surface-2);
  padding: 12px;
  border-radius: 6px;
  font-size: 11px;
  color: var(--accent-blue);
  margin: 0;
  overflow-x: auto;
}

/* 市场统计 */
.stats-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
  margin-bottom: 12px;
}

.stat-item {
  text-align: center;
  padding: 12px;
  background: var(--bg-surface-2);
  border-radius: 8px;
}

.stat-value {
  font-size: 20px;
  font-weight: bold;
  color: var(--accent-blue);
}

.stat-label {
  font-size: 11px;
  color: var(--text-muted);
  margin-top: 4px;
}

.mapping-visual {
  text-align: center;
  padding: 12px;
  background: var(--bg-surface-2);
  border-radius: 8px;
}

.mapping-label {
  font-family: monospace;
  font-size: 12px;
  color: var(--accent-blue);
  margin-bottom: 4px;
}

.mapping-arrows {
  font-size: 11px;
  color: var(--text-muted);
}

/* 资金分配 */
.fund-flow {
  padding: 12px;
}

.flow-start {
  text-align: center;
  margin-bottom: 16px;
}

.flow-box {
  display: inline-block;
  text-align: center;
  padding: 12px 20px;
  border-radius: 8px;
  background: var(--bg-surface-2);
  min-width: 100px;
}

.flow-box.buyer-box { border: 2px solid var(--accent-green); }
.flow-box.fee-box { border: 2px solid var(--accent-orange); }
.flow-box.royalty-box { border: 2px solid var(--accent-purple); }
.flow-box.seller-box { border: 2px solid var(--accent-blue); }

.flow-icon {
  font-size: 24px;
  margin-bottom: 4px;
}

.flow-label {
  font-size: 12px;
  font-weight: bold;
  color: var(--text-main);
}

.flow-amount {
  font-size: 14px;
  color: var(--accent-green);
  font-weight: bold;
  margin-top: 4px;
}

.flow-percent {
  font-size: 10px;
  color: var(--text-muted);
}

.flow-branches {
  display: flex;
  justify-content: space-around;
  gap: 8px;
}

.flow-branch {
  text-align: center;
  flex: 1;
}

.flow-arrow {
  font-size: 20px;
  color: var(--text-muted);
  margin-bottom: 8px;
}

/* 安全机制 */
.security-content {
  padding: 12px;
}

.security-item {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 12px;
}

.security-icon {
  font-size: 24px;
}

.security-title {
  font-size: 13px;
  font-weight: bold;
  color: var(--text-main);
}

.security-desc {
  font-size: 11px;
  color: var(--text-muted);
}

.code-block pre {
  background: var(--bg-surface-2);
  padding: 12px;
  border-radius: 6px;
  font-size: 11px;
  color: var(--accent-red);
  margin: 0;
}

/* 操作标签页 */
.operation-tabs {
  display: flex;
  gap: 8px;
  margin-bottom: 16px;
}

.tab-btn {
  flex: 1;
  padding: 10px;
  border: 1px solid var(--border-main);
  background: var(--bg-surface-2);
  color: var(--text-muted);
  border-radius: 6px;
  cursor: pointer;
  font-size: 13px;
  transition: all 0.2s;
}

.tab-btn.active {
  background: var(--accent-blue);
  color: white;
  border-color: var(--accent-blue);
}

.operation-panel {
  padding: 12px;
}

.operation-panel h4 {
  margin: 0 0 16px 0;
  color: var(--text-main);
}

.form-group {
  margin-bottom: 12px;
}

.form-group label {
  display: block;
  font-size: 12px;
  color: var(--text-muted);
  margin-bottom: 6px;
}

.form-input,
.form-select {
  width: 100%;
  padding: 10px 12px;
  border: 1px solid var(--border-main);
  background: var(--bg-surface-2);
  color: var(--text-main);
  border-radius: 6px;
  font-size: 13px;
}

.form-input:focus,
.form-select:focus {
  outline: none;
  border-color: var(--accent-blue);
}

.purchase-preview {
  background: var(--bg-surface-2);
  padding: 12px;
  border-radius: 8px;
  margin-bottom: 16px;
}

.preview-item {
  display: flex;
  justify-content: space-between;
  padding: 6px 0;
  font-size: 13px;
  border-bottom: 1px solid var(--border-main);
}

.preview-item:last-child {
  border-bottom: none;
}

.preview-item.total {
  font-weight: bold;
  color: var(--accent-green);
  margin-top: 8px;
  padding-top: 8px;
  border-top: 2px solid var(--border-main);
}

.highlight {
  color: var(--accent-green);
  font-weight: bold;
}

/* NFT画廊 */
.nft-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  gap: 12px;
  padding: 12px;
}

.market-nft-card {
  background: var(--bg-surface-2);
  border-radius: 8px;
  padding: 12px;
  text-align: center;
  cursor: pointer;
  border: 2px solid transparent;
  transition: all 0.2s;
}

.market-nft-card:hover {
  border-color: var(--accent-blue);
}

.market-nft-card.selected {
  border-color: var(--accent-green);
}

.nft-image {
  width: 60px;
  height: 60px;
  margin: 0 auto 8px;
  background: var(--bg-surface-1);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.nft-icon {
  font-size: 32px;
}

.nft-title {
  font-size: 13px;
  font-weight: bold;
  color: var(--text-main);
}

.nft-contract {
  font-size: 10px;
  color: var(--text-muted);
  margin-top: 2px;
}

.nft-price {
  font-size: 14px;
  color: var(--accent-green);
  font-weight: bold;
  margin-top: 4px;
}

.nft-seller {
  font-size: 10px;
  color: var(--text-muted);
  margin-top: 2px;
}

.nft-royalty {
  font-size: 10px;
  color: var(--accent-purple);
  margin-top: 2px;
}

.nft-actions {
  margin-top: 8px;
}

.empty-market {
  grid-column: 1 / -1;
  text-align: center;
  padding: 32px;
  color: var(--text-muted);
  background: var(--bg-surface-2);
  border: 1px solid var(--border-main);
  border-radius: 8px;
}

.empty-icon {
  font-size: 48px;
  margin-bottom: 8px;
}

.empty-text {
  font-size: 14px;
}

.empty-subtext {
  font-size: 12px;
  margin-top: 4px;
}

/* 交易历史 */
.history-list {
  padding: 12px;
}

.history-item {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 10px;
  background: var(--bg-surface-2);
  border-radius: 6px;
  margin-bottom: 8px;
}

.history-icon {
  font-size: 20px;
}

.history-content {
  flex: 1;
}

.history-title {
  font-size: 13px;
  font-weight: bold;
  color: var(--text-main);
}

.history-detail {
  font-size: 11px;
  color: var(--text-muted);
  margin-top: 2px;
}

.history-time {
  font-size: 10px;
  color: var(--text-muted);
  margin-top: 4px;
}

/* 简化版NFT展示区域 */
.mini-gallery {
  margin-top: 20px;
  padding-top: 16px;
  border-top: 1px solid var(--border-main);
}

.mini-gallery h5 {
  margin: 0 0 12px 0;
  font-size: 13px;
  color: var(--text-main);
  display: flex;
  align-items: center;
  gap: 6px;
}

.mini-nft-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
}

.mini-nft-card {
  background: var(--bg-surface-2);
  border: 1px solid var(--border-main);
  border-radius: 8px;
  padding: 10px;
  text-align: center;
  cursor: pointer;
  transition: all 0.2s ease;
}

.mini-nft-card:hover {
  border-color: var(--accent-green);
  transform: translateY(-2px);
}

.mini-nft-card.selected {
  border-color: var(--accent-green);
  background: linear-gradient(135deg, rgba(34, 197, 94, 0.1) 0%, rgba(16, 185, 129, 0.1) 100%);
  box-shadow: 0 0 0 2px rgba(34, 197, 94, 0.3);
}

.mini-nft-icon {
  font-size: 32px;
  margin-bottom: 6px;
}

.mini-nft-title {
  font-size: 11px;
  font-weight: bold;
  color: var(--text-main);
  margin-bottom: 2px;
}

.mini-nft-price {
  font-size: 10px;
  color: var(--accent-green);
  font-weight: bold;
}

.mini-gallery-more {
  margin-top: 10px;
  text-align: center;
  font-size: 11px;
  color: var(--text-muted);
  font-style: italic;
}

/* Day 26 特有样式 */
</style>
