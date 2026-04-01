# Day 26 - NFTMarketplace 详细规划文档

> 文档版本：2026-03-25

---

## 一、合约功能分析

### 1.1 核心功能

| 功能 | 函数名 | 说明 |
|------|--------|------|
| **挂单** | `listNFT()` | 卖家将NFT上架出售，设置价格和版税 |
| **购买** | `buyNFT()` | 买家支付ETH购买NFT，资金自动分配 |
| **取消挂单** | `cancelListing()` | 卖家取消自己的挂单 |
| **设置手续费** | `setMarketplaceFeePercent()` | 管理员设置市场手续费比例 |
| **设置收款地址** | `setFeeRecipient()` | 管理员设置手续费接收地址 |
| **查询挂单** | `getListing()` | 查询指定NFT的挂单信息 |

### 1.2 数据结构

```solidity
struct Listing {
    address seller;           // 卖家地址
    address nftAddress;       // NFT合约地址
    uint256 tokenId;          // NFT代币ID
    uint256 price;            // 售价（wei）
    address royaltyReceiver;  // 版税接收地址
    uint256 royaltyPercent;   // 版税比例（基点）
    bool isListed;            // 是否正在挂单中
}

mapping(address => mapping(uint256 => Listing)) public listings;
```

### 1.3 资金分配流程

```
买家支付 ETH
    │
    ├──→ 市场手续费 (marketplaceFeePercent) → feeRecipient
    ├──→ 创作者版税 (royaltyPercent) → royaltyReceiver
    └──→ 剩余金额 → 卖家
```

**示例（售价 1 ETH）：**
- 市场费 2.5%: 0.025 ETH
- 版税 5%: 0.05 ETH
- 卖家收到: 0.925 ETH

### 1.4 事件定义

- `Listed` - NFT挂单事件
- `Purchase` - NFT购买事件
- `Unlisted` - 取消挂单事件
- `FeeUpdated` - 费用更新事件

---

## 二、页面布局规划

### 2.1 整体布局（标准双栏式）

> ⚠️ **重要**：遵循 `Day组件统一布局规范.md`，使用双栏布局

```
┌─────────────────────────────────────────────────────────────────┐
│  Day 26 - NFT 市场 / NFT Marketplace                            │
│  去中心化NFT交易市场，支持挂单、购买、版税和市场费用              │
├─────────────────────────────────────┬───────────────────────────┤
│                                     │                           │
│   左栏：交互操作区域                 │      右栏：知识面板        │
│                                     │                           │
│  <h3>🎮 交互操作</h3>               │   KnowledgePanel          │
│  ┌─────────────────────────┐        │   (进度条、已解锁概念)     │
│  │ 市场架构可视化          │        │                           │
│  │ (点击解锁struct_listing)│        │                           │
│  ├─────────────────────────┤        │                           │
│  │ 市场统计面板            │        │                           │
│  │(点击解锁double_mapping) │        │                           │
│  ├─────────────────────────┤        │                           │
│  │ 资金分配可视化          │        │                           │
│  │(点击解锁fund_distribution)│      │                           │
│  ├─────────────────────────┤        │                           │
│  │ 安全机制说明            │        │                           │
│  │(点击解锁reentrancy_guard)│       │                           │
│  ├─────────────────────────┤        │                           │
│  │ 操作标签页              │        │                           │
│  │ (挂单/购买/取消)        │        │                           │
│  ├─────────────────────────┤        │                           │
│  │ NFT画廊/市场            │        │                           │
│  │ (展示所有挂单)          │        │                           │
│  ├─────────────────────────┤        │                           │
│  │ 交易历史                │        │                           │
│  └─────────────────────────┘        │                           │
│                                     │                           │
└─────────────────────────────────────┴───────────────────────────┘
```

### 2.1.1 Vue 模板结构

```vue
<template>
  <div class="day-26-content day-content">
    <!-- 消息提示 -->
    <div v-if="message" :class="['message-toast', { error: isError }]">
      {{ message }}
    </div>

    <!-- 标准双栏布局 -->
    <div class="content-layout" :class="{ 'single-column': unlockedConcepts.length === 0 }">
      <!-- 左栏：交互区域 -->
      <div class="left-column">
        <div class="interaction-area">
          <h3>🎮 交互操作</h3>
          
          <!-- 市场架构可视化 -->
          <div class="section architecture-section" @click="handleArchitectureClick">...</div>
          
          <!-- 市场统计面板 -->
          <div class="section stats-section" @click="handleStatsClick">...</div>
          
          <!-- 资金分配可视化 -->
          <div class="section distribution-section" @click="handleDistributionClick">...</div>
          
          <!-- 安全机制说明 -->
          <div class="section security-section" @click="handleSecurityClick">...</div>
          
          <!-- 操作标签页 -->
          <div class="section operation-section">...</div>
          
          <!-- NFT画廊 -->
          <div class="section gallery-section">...</div>
          
          <!-- 交易历史 -->
          <div class="section history-section">...</div>
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
      v-if="showFullCode"
      :show="true"
      :code="fullCode"
      title="NFTMarketplace 完整代码"
      @close="showFullCode = false"
    />
  </div>
</template>
```

### 2.2 详细区块设计

#### 区块1: 市场架构可视化（可点击解锁）

**位置**: 左栏顶部
**解锁概念**: `struct_listing` - 结构体定义

```vue
<div class="architecture-section" @click="handleArchitectureClick">
  <h4>🏪 NFT市场架构（点击查看结构体）</h4>
  <div class="market-arch">
    <!-- 三方关系图 -->
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
    <!-- Listing结构体展示 -->
    <div class="struct-preview">
      <div class="code-snippet">
        struct Listing {
          address seller;
          uint256 price;
          ...
        }
      </div>
    </div>
  </div>
</div>
```

**交互逻辑**:
- 点击整个区块 → 解锁 `struct_listing` 概念
- 显示提示："📖 你了解了Listing结构体！这是存储NFT挂单信息的核心数据结构。"

---

#### 区块2: 市场统计面板（可点击解锁）

**位置**: 左栏中部
**解锁概念**: `double_mapping` - 双重映射

```vue
<div class="stats-section" @click="handleStatsClick">
  <h4>📊 市场统计（点击查看双重映射）</h4>
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
  <!-- 双重映射可视化 -->
  <div class="mapping-visual">
    <div class="mapping-label">listings[nftAddress][tokenId]</div>
    <div class="mapping-arrows">
      NFT地址 → TokenID → Listing信息
    </div>
  </div>
</div>
```

**交互逻辑**:
- 点击整个区块 → 解锁 `double_mapping` 概念
- 显示提示："🗺️ 双重映射让你可以通过NFT地址和TokenID快速定位挂单信息！"

---

#### 区块3: 资金分配可视化（可点击解锁）

**位置**: 左栏下部
**解锁概念**: `fund_distribution` - 资金分配

```vue
<div class="distribution-section" @click="handleDistributionClick">
  <h4>💰 资金分配流程（点击查看）</h4>
  <div class="fund-flow">
    <div class="flow-start">
      <div class="flow-box buyer">
        <div class="flow-icon">🛒</div>
        <div class="flow-label">买家支付</div>
        <div class="flow-amount">{{ selectedPrice }} ETH</div>
      </div>
    </div>
    <div class="flow-branches">
      <div class="flow-branch">
        <div class="flow-arrow">↓</div>
        <div class="flow-box fee">
          <div class="flow-icon">🏪</div>
          <div class="flow-label">市场费</div>
          <div class="flow-amount">{{ feeAmount }} ETH</div>
          <div class="flow-percent">({{ marketplaceFeePercent / 100 }}%)</div>
        </div>
      </div>
      <div class="flow-branch">
        <div class="flow-arrow">↓</div>
        <div class="flow-box royalty">
          <div class="flow-icon">🎨</div>
          <div class="flow-label">版税</div>
          <div class="flow-amount">{{ royaltyAmount }} ETH</div>
          <div class="flow-percent">({{ royaltyPercent / 100 }}%)</div>
        </div>
      </div>
      <div class="flow-branch">
        <div class="flow-arrow">↓</div>
        <div class="flow-box seller-amount">
          <div class="flow-icon">👤</div>
          <div class="flow-label">卖家实收</div>
          <div class="flow-amount">{{ sellerAmount }} ETH</div>
        </div>
      </div>
    </div>
  </div>
</div>
```

**交互逻辑**:
- 点击整个区块 → 解锁 `fund_distribution` 概念
- 显示提示："💸 一次购买，多方受益！市场费给平台，版税给创作者，剩余给卖家。"

---

#### 区块4: 安全机制说明（可点击解锁）

**位置**: 左栏底部
**解锁概念**: `reentrancy_guard` - 重入保护

```vue
<div class="security-section" @click="handleSecurityClick">
  <h4>🛡️ 安全机制（点击查看重入保护）</h4>
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
```

**交互逻辑**:
- 点击整个区块 → 解锁 `reentrancy_guard` 概念
- 显示提示："🛡️ ReentrancyGuard 是防止重入攻击的利器！buyNFT() 使用 nonReentrant 修饰符保护交易安全。"

---

#### 区块5: 操作标签页（中栏核心）

**位置**: 中栏顶部
**包含3个标签**: 挂单 / 购买 / 取消

```vue
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
    <input v-model="listForm.nftAddress" placeholder="0x..." />
  </div>
  <div class="form-group">
    <label>Token ID:</label>
    <input v-model.number="listForm.tokenId" type="number" />
  </div>
  <div class="form-group">
    <label>售价 (ETH):</label>
    <input v-model.number="listForm.price" type="number" step="0.001" />
  </div>
  <div class="form-group">
    <label>版税接收地址:</label>
    <input v-model="listForm.royaltyReceiver" placeholder="0x... (可选)" />
  </div>
  <div class="form-group">
    <label>版税比例 (%):</label>
    <input v-model.number="listForm.royaltyPercent" type="number" max="10" />
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
    <select v-model="selectedListing">
      <option v-for="item in activeListings" :key="item.id" :value="item">
        Token #{{ item.tokenId }} - {{ item.price }} ETH
      </option>
    </select>
  </div>
  <div v-if="selectedListing" class="purchase-preview">
    <div class="preview-item">
      <span>售价:</span>
      <span>{{ selectedListing.price }} ETH</span>
    </div>
    <div class="preview-item">
      <span>版税:</span>
      <span>{{ selectedListing.royaltyAmount }} ETH ({{ selectedListing.royaltyPercent / 100 }}%)</span>
    </div>
    <div class="preview-item">
      <span>市场费:</span>
      <span>{{ selectedListing.feeAmount }} ETH ({{ marketplaceFeePercent / 100 }}%)</span>
    </div>
    <div class="preview-item total">
      <span>总计支付:</span>
      <span>{{ selectedListing.price }} ETH</span>
    </div>
  </div>
  <button class="day-action-btn green" @click="handleBuyNFT">
    🛒 立即购买
  </button>
</div>

<!-- 取消标签 -->
<div v-if="activeTab === 'cancel'" class="operation-panel">
  <h4>❌ 取消挂单</h4>
  <div class="form-group">
    <label>选择要取消的挂单:</label>
    <select v-model="selectedMyListing">
      <option v-for="item in myListings" :key="item.id" :value="item">
        Token #{{ item.tokenId }} - {{ item.price }} ETH
      </option>
    </select>
  </div>
  <button class="day-action-btn red" @click="handleCancelListing">
    ❌ 取消挂单
  </button>
</div>
```

**交互逻辑**:

| 操作 | 解锁概念 | 提示信息 |
|------|----------|----------|
| 成功挂单 | `list_function` | "📋 挂单成功！你的NFT现在可以在市场上被购买了。" |
| 成功购买 | `buy_function` | "🛒 购买成功！NFT已转移给你，资金已分配给各方。" |
| 成功购买 | `event_logging` | "📢 事件已记录！区块链上的事件可以被前端监听，实现实时更新。" |
| 成功取消 | `cancel_function` | "❌ 挂单已取消！你的NFT不再在市场上出售。" |

---

#### 区块6: NFT画廊/市场展示（中栏中部）

**位置**: 中栏中部
**功能**: 展示所有活跃挂单

```vue
<div class="marketplace-gallery">
  <h4>🖼️ NFT 市场 ({{ activeListings.length }} 个挂单)</h4>
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
```

---

#### 区块7: 交易历史（中栏底部）

**位置**: 中栏底部
**功能**: 记录所有市场操作

```vue
<div class="transaction-history">
  <h4>📜 交易历史</h4>
  <div class="history-list">
    <div
      v-for="(log, index) in operationLogs"
      :key="index"
      class="history-item"
      :class="log.type"
    >
      <div class="history-icon">{{ getLogIcon(log.type) }}</div>
      <div class="history-content">
        <div class="history-title">{{ log.title }}</div>
        <div class="history-detail">{{ log.detail }}</div>
        <div class="history-time">{{ log.time }}</div>
      </div>
    </div>
  </div>
</div>
```

---

## 三、知识点系统设计

### 3.1 知识点列表（8个）

```javascript
concepts: [
    "struct_listing",        // 结构体定义 - 点击市场架构解锁
    "double_mapping",        // 双重映射 - 点击市场统计解锁
    "fund_distribution",     // 资金分配 - 点击资金分配可视化解锁
    "reentrancy_guard",      // 重入保护 - 点击安全机制解锁
    "list_function",         // 挂单功能 - 成功挂单时解锁
    "buy_function",          // 购买功能 - 成功购买时解锁
    "event_logging",         // 事件日志 - 成功购买时同时解锁
    "cancel_function"        // 取消功能 - 成功取消挂单时解锁
]
```

### 3.2 知识点详细定义

```javascript
export const day26ConceptDefinitions = {
    struct_listing: {
        name: "结构体定义",
        icon: "🏗️",
        unlockAt: 1,
        message: "✅ 你了解了Listing结构体！🎉 恭喜解锁：结构体定义！这是存储NFT挂单信息的核心数据结构。👉 尝试挂单出售一个NFT，体验结构体的实际应用！",
        code: `struct Listing {
    address seller;           // 卖家地址
    address nftAddress;       // NFT合约地址
    uint256 tokenId;          // NFT代币ID
    uint256 price;            // 售价
    address royaltyReceiver;  // 版税接收地址
    uint256 royaltyPercent;   // 版税比例
    bool isListed;            // 是否挂单中
}`
    },
    double_mapping: {
        name: "双重映射",
        icon: "🗺️",
        unlockAt: 1,
        message: "✅ 双重映射让你可以通过NFT地址和TokenID快速定位挂单信息！🎉 恭喜解锁：双重映射！👉 查看市场统计，了解双重映射如何存储所有挂单信息！",
        code: `mapping(address => mapping(uint256 => Listing)) public listings;
// 使用: listings[nftAddress][tokenId]`
    },
    fund_distribution: {
        name: "资金分配",
        icon: "💸",
        unlockAt: 1,
        message: "✅ 一次购买，多方受益！🎉 恭喜解锁：资金分配！市场费给平台，版税给创作者，剩余给卖家。👉 购买一个NFT，看看资金如何分配给各方！",
        code: `uint256 feeAmount = (msg.value * marketplaceFeePercent) / 10000;
uint256 royaltyAmount = (msg.value * royaltyPercent) / 10000;
uint256 sellerAmount = msg.value - feeAmount - royaltyAmount;`
    },
    reentrancy_guard: {
        name: "重入保护",
        icon: "🛡️",
        unlockAt: 1,
        message: "✅ ReentrancyGuard是防止重入攻击的利器！🎉 恭喜解锁：重入保护！buyNFT()使用nonReentrant修饰符保护交易安全。👉 现在可以进行安全的交易操作了！",
        code: `contract NFTMarketplace is ReentrancyGuard {
    function buyNFT(...) external payable nonReentrant {
        // 安全的购买逻辑
    }
}`
    },
    list_function: {
        name: "挂单功能",
        icon: "📋",
        unlockAt: 2,
        message: "✅ 挂单成功！🎉 恭喜解锁：挂单功能！你的NFT现在可以在市场上被购买了。👉 查看NFT画廊或尝试购买其他NFT！",
        code: `function listNFT(...) external {
    require(nft.ownerOf(tokenId) == msg.sender, "Not the owner");
    require(nft.getApproved(tokenId) == address(this), ...);
    listings[nftAddress][tokenId] = Listing(...);
}`
    },
    buy_function: {
        name: "购买功能",
        icon: "🛒",
        unlockAt: 3,
        message: "✅ 购买成功！🎉 恭喜解锁：购买功能！NFT已转移给你，资金已自动分配给各方。👉 查看你的NFT收藏或继续探索其他功能！",
        code: `function buyNFT(...) external payable nonReentrant {
    // 1. 检查挂单和价格
    // 2. 计算费用分配
    // 3. 转账给各方
    // 4. 转移 NFT
    // 5. 删除挂单记录
}`
    },
    event_logging: {
        name: "事件日志",
        icon: "📢",
        unlockAt: 3,
        message: "✅ 事件已记录！🎉 恭喜解锁：事件日志！区块链上的事件可以被前端监听，实现实时更新。👉 查看交易历史了解事件记录！",
        code: `event Purchase(
    address indexed buyer,
    address indexed nftAddress,
    uint256 indexed tokenId,
    uint256 price,
    ...
);`
    },
    cancel_function: {
        name: "取消功能",
        icon: "❌",
        unlockAt: 4,
        message: "✅ 挂单已取消！🎉 恭喜解锁：取消功能！你的NFT不再在市场上出售。👉 如果需要，可以重新挂单出售！",
        code: `function cancelListing(...) external {
    require(item.seller == msg.sender, "Not the seller");
    delete listings[nftAddress][tokenId];
    emit Unlisted(...);
}`
    }
}
```

### 3.3 交互提示配置

```javascript
// 获取交互提示（用于 KnowledgePanel）
export const getHint = (conceptKey) => {
    const hints = {
        // Day 26
        struct_listing: "🏗️ 下一步：尝试挂单出售一个NFT，体验结构体的实际应用！👉 切换到"挂单"标签页",
        double_mapping: "🗺️ 下一步：查看市场统计，了解双重映射如何存储所有挂单信息！👉 点击市场统计面板",
        fund_distribution: "💸 下一步：购买一个NFT，看看资金如何分配给各方！👉 切换到"购买"标签页",
        reentrancy_guard: "🛡️ 下一步：安全机制已了解，现在可以进行安全的交易操作了！👉 尝试挂单或购买",
        list_function: "📋 挂单成功！你的NFT已经在市场上了。👉 查看NFT画廊或尝试购买其他NFT",
        buy_function: "🛒 购买成功！NFT已转移给你。👉 查看你的NFT收藏或继续探索其他功能",
        event_logging: "📢 事件已记录！区块链上的事件可以被前端监听。👉 查看交易历史了解事件记录",
        cancel_function: "❌ 挂单已取消！👉 如果需要，可以重新挂单出售"
    };
    return hints[conceptKey] || "📖 点击其他概念标签查看更多详细解释。";
}

export const getDay26ExplanationHint = (conceptKey) => {
    const hints = {
        struct_listing: "📖 Listing 结构体是 NFT 市场的核心数据结构。它存储了每个挂单的所有关键信息：谁是卖家、NFT 的地址和 ID、售价多少、版税给谁以及比例多少。使用结构体可以让代码更清晰、更易维护。",
        double_mapping: "📖 双重映射 `mapping(address => mapping(uint256 => Listing))` 是 Solidity 中处理复杂数据关系的利器。第一层映射用 NFT 合约地址定位，第二层用 TokenID 定位，这样可以精确定位到任意一个 NFT 的挂单信息。",
        fund_distribution: "📖 资金分配是去中心化市场的核心经济模型。买家支付的价格会被分成三部分：平台收取市场手续费（通常2-2.5%）、创作者获得版税（通常5-10%）、剩余部分归卖家所有。这种分配机制激励了各方参与市场。",
        reentrancy_guard: "📖 重入攻击是智能合约中最常见的安全漏洞之一。攻击者可能在接收 ETH 时递归调用合约函数，重复提取资金。ReentrancyGuard 使用互斥锁机制，确保同一交易中不能重复进入受保护函数。",
        list_function: "📖 挂单功能需要多重验证：检查调用者是否拥有该 NFT、检查市场合约是否被授权转移、检查价格大于0、检查版税比例合理。这些检查确保了市场的安全性和公平性。",
        buy_function: "📖 购买功能是整个市场最复杂的操作：验证挂单存在、验证支付金额正确、计算费用分配、安全转账给各方、转移 NFT 所有权、删除挂单记录。使用 nonReentrant 修饰符防止重入攻击。",
        event_logging: "📖 事件是合约与前端通信的重要方式。当重要操作发生时，合约会触发事件，前端可以监听这些事件来更新 UI。Indexed 参数可以创建索引，方便高效查询特定地址或 Token 的相关事件。",
        cancel_function: "📖 取消挂单功能让卖家可以撤回自己的商品。只有卖家本人可以取消，这是通过检查 `msg.sender == item.seller` 实现的。取消后挂单记录被删除，NFT 不再在市场上显示。"
    };
    return hints[conceptKey] || "📖 点击其他概念标签查看更多详细解释。";
}

// 获取 Day 26 的动态提示（根据已解锁概念返回下一步引导）
export const getDay26Hint = (unlockedConcepts) => {
    // 如果还没有解锁任何概念
    if (unlockedConcepts.length === 0) {
        return "🎮 欢迎来到 NFT 市场！点击左侧的"市场架构可视化"了解 Listing 结构体，开始你的学习之旅！";
    }
    
    // 如果只解锁了结构体，引导去解锁双重映射
    if (unlockedConcepts.includes('struct_listing') && !unlockedConcepts.includes('double_mapping')) {
        return "🏗️ 已了解结构体！👉 点击"市场统计面板"了解双重映射如何存储挂单信息！";
    }
    
    // 如果解锁了前两个，引导去解锁资金分配
    if (unlockedConcepts.includes('double_mapping') && !unlockedConcepts.includes('fund_distribution')) {
        return "🗺️ 已了解双重映射！👉 点击"资金分配可视化"了解市场资金如何分配！";
    }
    
    // 如果解锁了前三个，引导去解锁重入保护
    if (unlockedConcepts.includes('fund_distribution') && !unlockedConcepts.includes('reentrancy_guard')) {
        return "💸 已了解资金分配！👉 点击"安全机制说明"了解重入保护机制！";
    }
    
    // 如果解锁了所有可点击概念，引导去挂单
    if (unlockedConcepts.includes('reentrancy_guard') && !unlockedConcepts.includes('list_function')) {
        return "🛡️ 安全机制已了解！👉 切换到"挂单"标签页，尝试挂单出售你的第一个 NFT！";
    }
    
    // 如果已挂单，引导去购买
    if (unlockedConcepts.includes('list_function') && !unlockedConcepts.includes('buy_function')) {
        return "📋 挂单成功！👉 切换到"购买"标签页，购买一个 NFT 体验完整交易流程！";
    }
    
    // 如果已购买，引导去取消
    if (unlockedConcepts.includes('buy_function') && !unlockedConcepts.includes('cancel_function')) {
        return "🛒 购买成功！👉 切换到"取消"标签页，学习如何取消挂单！";
    }
    
    // 如果全部解锁
    return "🎉 恭喜！你已解锁 Day 26 的所有知识点！你已经掌握了 NFT 市场的核心概念。继续探索其他天数吧！";
}
```

---

## 四、状态管理设计

### 4.1 useDay26.js Composable

```javascript
import { ref, computed } from 'vue'
import { useOperationLogStore } from '../stores/operationLogStore'

export function useDay26() {
    const logStore = useOperationLogStore()

    // ========== 市场状态 ==========
    const listings = ref([]) // 所有挂单列表
    const marketplaceFeePercent = ref(250) // 默认 2.5%
    const feeRecipient = ref('0xMarketplaceOwner...')
    const totalVolume = ref(0) // 总交易量

    // ========== 表单状态 ==========
    const listForm = ref({
        nftAddress: '',
        tokenId: null,
        price: null,
        royaltyReceiver: '',
        royaltyPercent: 0
    })

    const selectedListing = ref(null)

    // ========== 用户NFT库存（模拟）==========
    const userNFTs = ref([
        { tokenId: 1, nftAddress: '0xNFTContract1...', name: 'CryptoArt #1' },
        { tokenId: 2, nftAddress: '0xNFTContract1...', name: 'CryptoArt #2' },
        { tokenId: 3, nftAddress: '0xNFTContract2...', name: 'GameItem #1' }
    ])

    // ========== 计算属性 ==========
    const activeListings = computed(() => {
        return listings.value.filter(item => item.isListed)
    })

    const myListings = computed(() => {
        const currentUser = '0xCurrentUser...' // 模拟当前用户
        return listings.value.filter(item => item.seller === currentUser && item.isListed)
    })

    // ========== 操作方法 ==========
    
    // 挂单
    const listNFT = (formData) => {
        // 验证逻辑...
        const newListing = {
            id: Date.now(),
            seller: '0xCurrentUser...',
            nftAddress: formData.nftAddress,
            tokenId: formData.tokenId,
            price: formData.price,
            royaltyReceiver: formData.royaltyReceiver || formData.seller,
            royaltyPercent: formData.royaltyPercent * 100, // 转换为基点
            isListed: true,
            createdAt: new Date()
        }
        listings.value.push(newListing)
        logStore.addLog(26, '挂单NFT', `Token #${formData.tokenId} 售价 ${formData.price} ETH`, 'list26')
        return { success: true, listing: newListing }
    }

    // 购买
    const buyNFT = (listing) => {
        // 计算费用分配
        const feeAmount = (listing.price * marketplaceFeePercent.value) / 10000
        const royaltyAmount = (listing.price * listing.royaltyPercent) / 10000
        const sellerAmount = listing.price - feeAmount - royaltyAmount

        // 更新状态
        listing.isListed = false
        listing.buyer = '0xCurrentUser...'
        totalVolume.value += listing.price

        logStore.addLog(26, '购买NFT', `Token #${listing.tokenId} 价格 ${listing.price} ETH`, 'buy26')
        return { 
            success: true, 
            feeAmount, 
            royaltyAmount, 
            sellerAmount 
        }
    }

    // 取消挂单
    const cancelListing = (listing) => {
        listing.isListed = false
        logStore.addLog(26, '取消挂单', `Token #${listing.tokenId}`, 'cancel26')
        return { success: true }
    }

    // ========== Realtime Data（用于实时数据展示）==========
    const realtimeData = computed(() => ({
        gasUsage: logStore.getDayGasUsage(26),
        ethCost: logStore.getDayEthCost(26),
        operationCount: logStore.getDayOperationCount(26)
    }))

    return {
        listings,
        marketplaceFeePercent,
        feeRecipient,
        totalVolume,
        listForm,
        selectedListing,
        userNFTs,
        activeListings,
        myListings,
        listNFT,
        buyNFT,
        cancelListing,
        realtimeData  // ← 必须导出，用于实时数据展示
    }
}
```

### 4.2 contractStore.js 状态

```javascript
// 在 contractStore.js 中添加 Day 26 状态
day26: {
    listings: [],
    marketplaceFeePercent: 250,
    feeRecipient: '0xMarketplaceOwner...',
    totalVolume: 0,
    userNFTs: [
        { tokenId: 1, nftAddress: '0xNFTContract1...', name: 'CryptoArt #1' },
        { tokenId: 2, nftAddress: '0xNFTContract1...', name: 'CryptoArt #2' },
        { tokenId: 3, nftAddress: '0xNFTContract2...', name: 'GameItem #1' }
    ]
}
```

---

## 五、文件创建清单

### 5.1 需要创建的文件

| 文件路径 | 说明 |
|----------|------|
| `src/components/days/Day26/NFTMarketplace.vue` | Day 26 主组件 |
| `src/composables/useDay26.js` | Day 26 状态管理 |

### 5.2 需要修改的文件

| 文件路径 | 修改内容 |
|----------|----------|
| `src/data/days.js` | 添加 Day 26 配置（title, subtitle, concepts） |
| `src/data/concepts.js` | 添加 day26ConceptDefinitions、getHint、getDay26ExplanationHint |
| `src/components/DayContent.vue` | 在 dayComponents 中注册 Day 26 组件 |
| `src/components/Sidebar.vue` | 添加 day26ConceptDefinitions 导入和判断分支 |
| `src/components/shared/KnowledgePanel.vue` | 添加 Day 26 概念定义支持 |
| `src/stores/contractStore.js` | 添加 Day 26 合约状态 |
| `src/composables/useCurrentDayRealtimeData.js` | 注册 Day 26 的 realtimeData |

---

## 六、Gas 估算配置

```javascript
// 在 concepts.js 的 gasEstimates 中添加
day26: {
    list26: 80000,        // 挂单
    buy26: 120000,        // 购买（包含转账和NFT转移）
    cancel26: 35000,      // 取消挂单
    // 查询操作（View函数，不消耗 Gas）
    getListing26: 0       // 查询挂单信息
}
```

---

## 七、UI 设计要点

### 7.1 颜色方案

| 元素 | 颜色 | 说明 |
|------|------|------|
| 主色调 | `#3b82f6` (blue-500) | 市场主题色 |
| 成功/购买 | `#22c55e` (green-500) | 购买按钮、成功状态 |
| 警告/取消 | `#ef4444` (red-500) | 取消按钮、危险操作 |
| 版税 | `#a855f7` (purple-500) | 版税相关元素 |
| 手续费 | `#f59e0b` (amber-500) | 手续费相关元素 |

### 7.2 图标使用

| 功能 | 图标 |
|------|------|
| 市场 | 🏪 |
| 卖家 | 👤 |
| 买家 | 🛒 |
| NFT | 🖼️ |
| 挂单 | 📋 |
| 购买 | 🛒 |
| 取消 | ❌ |
| 版税 | 🎨 |
| 手续费 | 💰 |
| 安全 | 🛡️ |
| 结构体 | 🏗️ |
| 映射 | 🗺️ |
| 资金分配 | 💸 |
| 事件 | 📢 |

---

## 八、交互流程图

```
用户进入 Day 26
    │
    ├──→ 看到市场架构可视化 ←── 点击解锁 struct_listing
    │
    ├──→ 看到市场统计面板 ←──── 点击解锁 double_mapping
    │
    ├──→ 看到资金分配可视化 ←── 点击解锁 fund_distribution
    │
    ├──→ 看到安全机制说明 ←──── 点击解锁 reentrancy_guard
    │
    └──→ 进入操作区域
            │
            ├──→ 挂单标签页
            │       └──→ 填写表单 → 点击挂单 → 解锁 list_function
            │
            ├──→ 购买标签页
            │       └──→ 选择NFT → 点击购买 → 解锁 buy_function + event_logging
            │
            └──→ 取消标签页
                    └──→ 选择挂单 → 点击取消 → 解锁 cancel_function
```

---

## 九、测试检查清单

- [ ] 页面加载正常，无报错
- [ ] 4个可点击区块都能正常解锁概念
- [ ] 挂单功能正常工作，NFT显示在画廊中
- [ ] 购买功能正常工作，资金分配计算正确
- [ ] 取消功能正常工作，挂单从画廊中移除
- [ ] 所有8个概念都能正常解锁
- [ ] KnowledgePanel 显示正常，无 undefined
- [ ] 交易历史正确记录所有操作
- [ ] 进度计算正确（8个概念）
- [ ] 完整代码弹窗能正常打开

---

## 十、Day 26 专属易遗漏配置检查清单

> ⚠️ **警告**：以下配置极易遗漏，但缺失会导致功能异常！

### 概念系统配置（concepts.js）
- [ ] 添加了 `day26ConceptDefinitions` 对象（8个概念）
- [ ] 在 `getHint()` 函数中添加了 Day 26 所有概念的提示
- [ ] 添加了 `getDay26Hint(unlockedConcepts)` 函数（动态提示）
- [ ] 添加了 `getDay26ExplanationHint(conceptKey)` 函数（解释提示）
- [ ] 在 `gasEstimates` 中添加了 Day 26 的 Gas 估算（list26/buy26/cancel26）

### 组件配置
- [ ] 左栏4个可点击区块都添加了 `@click` 事件处理器
- [ ] 每个点击事件都调用 `progressStore.unlockConcept('concept_key')`
- [ ] 操作按钮使用 `.day-action-btn` 样式（非 `.action-btn`）
- [ ] KnowledgePanel 正确传递所有必需 props（`:unlocked-concepts`, `:progress-percentage`）
- [ ] 组件模板使用标准双栏布局（`content-layout` + `left-column` + `right-column`）

### Composable 配置（useDay26.js）
- [ ] 包含 `realtimeData` 计算属性
- [ ] `realtimeData` 正确导出在 return 对象中
- [ ] 使用 `logStore.getDayGasUsage(26)` 等方法

### 全局配置
- [ ] `src/data/days.js` 中添加了 Day 26 配置（title, subtitle, concepts）
- [ ] `src/components/DayContent.vue` 中注册了 Day 26 组件
- [ ] `src/components/Sidebar.vue` 中添加了 day26ConceptDefinitions 导入和判断分支
- [ ] `src/components/shared/KnowledgePanel.vue` 中添加了 Day 26 支持
- [ ] `src/stores/contractStore.js` 中添加了 Day 26 合约状态
- [ ] `src/composables/useCurrentDayRealtimeData.js` 中注册了 Day 26 的 realtimeData

### 代码规范检查
- [ ] 所有概念 message 使用 "✅🎉👉" 格式
- [ ] 按钮使用 `day-action-btn cyan/green/red`（非 `action-btn primary/green/danger`）
- [ ] 组件文件名：`NFTMarketplace.vue`
- [ ] Composable 文件名：`useDay26.js`

---

## 十一、参考合约代码位置

完整合约代码位于：
`WWW6.5\Tenlossiby\day26-NFTMarketplace.sol`

---

*规划文档完成，等待 review 后开始实现。*

---

🔍 Day 26 交互场景逐一检查
场景1：点击可点击区块（查询类）
✅ 1.1 点击"市场架构可视化" → 解锁 struct_listing
NFTMarketplace.vue 第423-426行：


const handleArchitectureClick = () => {
  progressStore.unlockConcept(26, 'struct_listing')
  currentHint.value = getDay26ExplanationHint('struct_listing') + ' 👉 点击「📊 市场统计」了解双重映射！'
}
检查结果：

❌ 缺少小弹窗提示
✅ 交互提示块：符合规范
修复建议：


const handleArchitectureClick = () => {
  progressStore.unlockConcept(26, 'struct_listing')
  currentHint.value = getDay26ExplanationHint('struct_listing') + ' 👉 点击「📊 市场统计」了解双重映射！'
  
  // ✅ 添加小弹窗
  showMessage('✅ 你了解了 Listing 结构体！🎉 恭喜解锁：结构体定义！👉 点击「📊 市场统计」了解双重映射！')
}
✅ 1.2 点击"市场统计面板" → 解锁 double_mapping
NFTMarketplace.vue 第428-431行：


const handleStatsClick = () => {
  progressStore.unlockConcept(26, 'double_mapping')
  currentHint.value = getDay26ExplanationHint('double_mapping') + ' 👉 点击「💰 资金分配流程」了解资金分配！'
}
检查结果：

❌ 缺少小弹窗提示
✅ 交互提示块：符合规范
修复建议：


const handleStatsClick = () => {
  progressStore.unlockConcept(26, 'double_mapping')
  currentHint.value = getDay26ExplanationHint('double_mapping') + ' 👉 点击「💰 资金分配流程」了解资金分配！'
  
  showMessage('✅ 你了解了双重映射！🎉 恭喜解锁：双重映射！👉 点击「💰 资金分配流程」了解资金分配！')
}
✅ 1.3 点击"资金分配可视化" → 解锁 fund_distribution
NFTMarketplace.vue 第433-436行：


const handleDistributionClick = () => {
  progressStore.unlockConcept(26, 'fund_distribution')
  currentHint.value = getDay26ExplanationHint('fund_distribution') + ' 👉 点击「🛡️ 安全机制」了解重入保护！'
}
检查结果：

❌ 缺少小弹窗提示
✅ 交互提示块：符合规范
修复建议：


const handleDistributionClick = () => {
  progressStore.unlockConcept(26, 'fund_distribution')
  currentHint.value = getDay26ExplanationHint('fund_distribution') + ' 👉 点击「🛡️ 安全机制」了解重入保护！'
  
  showMessage('✅ 你了解了资金分配流程！🎉 恭喜解锁：资金分配！👉 点击「🛡️ 安全机制」了解重入保护！')
}
✅ 1.4 点击"安全机制说明" → 解锁 reentrancy_guard
NFTMarketplace.vue 第438-441行：


const handleSecurityClick = () => {
  progressStore.unlockConcept(26, 'reentrancy_guard')
  currentHint.value = getDay26ExplanationHint('reentrancy_guard') + ' 👉 切换到「挂单」标签页挂单出售NFT！'
}
检查结果：

❌ 缺少小弹窗提示
✅ 交互提示块：符合规范
修复建议：


const handleSecurityClick = () => {
  progressStore.unlockConcept(26, 'reentrancy_guard')
  currentHint.value = getDay26ExplanationHint('reentrancy_guard') + ' 👉 切换到「挂单」标签页挂单出售NFT！'
  
  showMessage('✅ 你了解了重入保护机制！🎉 恭喜解锁：重入保护！👉 切换到「挂单」标签页挂单出售NFT！')
}
场景2：操作解锁（状态改变类）
⚠️ 2.1 挂单 NFT → 解锁 list_function
useDay26.js 第58-122行：


const listNFT = (formData) => {
  // 验证逻辑...
  
  // 创建挂单
  listings.value.push(newListing)
  logStore.addLog(26, '挂单NFT', `Token #${formData.tokenId} 售价 ${formData.price} ETH`, 'listNFT26')
  
  showMessage(`✅ 挂单成功！Token #${formData.tokenId} 已在市场上出售`)
  
  // 检查解锁
  const unlockedConcepts = progressStore.getDayProgress(26)?.unlockedConcepts || []
  if (!unlockedConcepts.includes('list_function')) {
    hints.push('list_function')
  }
  
  nextStep = '🎉 挂单成功！👉 切换到「购买」标签页体验购买流程！'
  
  return {
    success: true,
    message: `挂单成功！Token #${formData.tokenId} 售价 ${formData.price} ETH`,
    listing: newListing,
    hints,
    nextStep
  }
}
NFTMarketplace.vue 第445-461行：


const handleListNFT = async () => {
  const result = await listNFT(listForm.value)
  if (result.success) {
    if (result.hints.includes('list_function')) {
      progressStore.unlockConcept(26, 'list_function')
      currentHint.value = getDay26ExplanationHint('list_function') + ' 👉 切换到「购买」标签页购买NFT！'
    }
    // 重置表单
    listForm.value = { ... }
  }
}
检查结果：

⚠️ 小弹窗不完整：缺少 🎉 恭喜解锁：挂单功能！
✅ 交互提示块：符合规范
✅ composable 返回值结构正确
问题分析：

useDay26.js 第105行：


showMessage(`✅ 挂单成功！Token #${formData.tokenId} 已在市场上出售`)
根据规范（第44-60行），解锁新概念时应该是：


✅ 操作成功！
🎉 恭喜解锁：[概念名称]！👉 下一步引导
修复建议：

useDay26.js 第105-113行修改为：


// 解锁检查
const unlockedConcepts = progressStore.getDayProgress(26)?.unlockedConcepts || []
if (!unlockedConcepts.includes('list_function')) {
  hints.push('list_function')
  showMessage(`✅ 挂单成功！Token #${formData.tokenId} 已在市场上出售\n🎉 恭喜解锁：挂单功能！👉 切换到「购买」标签页体验购买流程！`)
} else {
  showMessage(`✅ 挂单成功！Token #${formData.tokenId} 已在市场上出售`)
}
⚠️ 2.2 购买 NFT → 解锁 buy_function + event_logging
useDay26.js 第124-172行：


const buyNFT = (listing) => {
  // ...验证和计算
  
  showMessage(`✅ 购买成功！Token #${listing.tokenId} 已转移到你的账户`)
  
  // 检查解锁
  const unlockedConcepts = progressStore.getDayProgress(26)?.unlockedConcepts || []
  if (!unlockedConcepts.includes('buy_function')) {
    hints.push('buy_function')
  }
  if (!unlockedConcepts.includes('event_logging')) {
    hints.push('event_logging')
  }
  
  nextStep = '🎉 购买成功！👉 切换到「取消」标签页学习如何取消挂单！'
}
检查结果：

⚠️ 小弹窗不完整：缺少双重解锁提示
✅ 交互提示块：符合规范
问题分析：

根据规范（第212-221行），当解锁多个概念时，小弹窗应该包含所有解锁的概念：


✅ [操作]成功！
🎉 恭喜解锁：[概念A]、[概念B]！👉 下一步操作
修复建议：

useDay26.js 第150-161行修改为：


// 记录日志
logStore.addLog(26, '购买NFT', `Token #${listing.tokenId} 价格 ${listing.price} ETH`, 'buyNFT26')

// 检查解锁
const unlockedConcepts = progressStore.getDayProgress(26)?.unlockedConcepts || []
const newUnlocks = []

if (!unlockedConcepts.includes('buy_function')) {
  hints.push('buy_function')
  newUnlocks.push('购买功能')
}
if (!unlockedConcepts.includes('event_logging')) {
  hints.push('event_logging')
  newUnlocks.push('事件日志')
}

// 根据解锁数量显示不同提示
if (newUnlocks.length > 0) {
  const unlockText = newUnlocks.join('、')
  showMessage(`✅ 购买成功！Token #${listing.tokenId} 已转移到你的账户\n🎉 恭喜解锁：${unlockText}！👉 切换到「取消」标签页学习如何取消挂单！`)
} else {
  showMessage(`✅ 购买成功！Token #${listing.tokenId} 已转移到你的账户`)
}

nextStep = '🎉 购买成功！👉 切换到「取消」标签页学习如何取消挂单！'
⚠️ 2.3 取消挂单 → 解锁 cancel_function
useDay26.js 第174-209行：


const cancelListing = (listing) => {
  // ...验证
  
  showMessage(`✅ 挂单已取消！Token #${listing.tokenId} 不再出售`)
  
  // 检查解锁
  const unlockedConcepts = progressStore.getDayProgress(26)?.unlockedConcepts || []
  if (!unlockedConcepts.includes('cancel_function')) {
    hints.push('cancel_function')
  }
  
  nextStep = '🎉 已取消挂单！👉 你可以重新挂单或探索其他功能！'
}
检查结果：

⚠️ 小弹窗不完整：缺少 🎉 恭喜解锁：取消功能！
✅ 交互提示块：符合规范
修复建议：

useDay26.js 第193-201行修改为：


// 记录日志
logStore.addLog(26, '取消挂单', `Token #${listing.tokenId}`, 'cancelListing26')

// 检查解锁
const unlockedConcepts = progressStore.getDayProgress(26)?.unlockedConcepts || []
if (!unlockedConcepts.includes('cancel_function')) {
  hints.push('cancel_function')
  showMessage(`✅ 挂单已取消！Token #${listing.tokenId} 不再出售\n🎉 恭喜解锁：取消功能！👉 你可以重新挂单或探索其他功能！`)
} else {
  showMessage(`✅ 挂单已取消！Token #${listing.tokenId} 不再出售`)
}

nextStep = '🎉 已取消挂单！👉 你可以重新挂单或探索其他功能！'
📊 问题总结表
场景	位置	小弹窗	交互提示块	问题
点击架构图	NFTMarketplace.vue:423	❌ 缺失	✅ 符合	缺少 Toast
点击市场统计	NFTMarketplace.vue:428	❌ 缺失	✅ 符合	缺少 Toast
点击资金分配	NFTMarketplace.vue:433	❌ 缺失	✅ 符合	缺少 Toast
点击安全机制	NFTMarketplace.vue:438	❌ 缺失	✅ 符合	缺少 Toast
挂单操作	useDay26.js:105	⚠️ 不完整	✅ 符合	缺少解锁提示
购买操作	useDay26.js:150	⚠️ 不完整	✅ 符合	缺少双重解锁
取消操作	useDay26.js:193	⚠️ 不完整	✅ 符合	缺少解锁提示
🔧 完整修复代码
1. 修复 NFTMarketplace.vue（添加4个点击事件的 Toast）

// ========== 点击解锁概念 ==========

const handleArchitectureClick = () => {
  const isNewUnlock = !unlockedConcepts.value.includes('struct_listing')
  progressStore.unlockConcept(26, 'struct_listing')
  currentHint.value = getDay26ExplanationHint('struct_listing') + ' 👉 点击「📊 市场统计」了解双重映射！'
  
  showMessage('✅ 你了解了 Listing 结构体！🎉 恭喜解锁：结构体定义！👉 点击「📊 市场统计」了解双重映射！')
}

const handleStatsClick = () => {
  progressStore.unlockConcept(26, 'double_mapping')
  currentHint.value = getDay26ExplanationHint('double_mapping') + ' 👉 点击「💰 资金分配流程」了解资金分配！'
  
  showMessage('✅ 你了解了双重映射！🎉 恭喜解锁：双重映射！👉 点击「💰 资金分配流程」了解资金分配！')
}

const handleDistributionClick = () => {
  progressStore.unlockConcept(26, 'fund_distribution')
  currentHint.value = getDay26ExplanationHint('fund_distribution') + ' 👉 点击「🛡️ 安全机制」了解重入保护！'
  
  showMessage('✅ 你了解了资金分配流程！🎉 恭喜解锁：资金分配！👉 点击「🛡️ 安全机制」了解重入保护！')
}

const handleSecurityClick = () => {
  progressStore.unlockConcept(26, 'reentrancy_guard')
  currentHint.value = getDay26ExplanationHint('reentrancy_guard') + ' 👉 切换到「挂单」标签页挂单出售NFT！'
  
  showMessage('✅ 你了解了重入保护机制！🎉 恭喜解锁：重入保护！👉 切换到「挂单」标签页挂单出售NFT！')
}
2. 修复 useDay26.js（完善操作提示）

// 挂单
const listNFT = (formData) => {
  // ...验证逻辑...
  
  listings.value.push(newListing)
  logStore.addLog(26, '挂单NFT', `Token #${formData.tokenId} 售价 ${formData.price} ETH`, 'listNFT26')
  
  // 检查解锁
  const unlockedConcepts = progressStore.getDayProgress(26)?.unlockedConcepts || []
  if (!unlockedConcepts.includes('list_function')) {
    hints.push('list_function')
    showMessage(`✅ 挂单成功！Token #${formData.tokenId} 已在市场上出售\n🎉 恭喜解锁：挂单功能！👉 切换到「购买」标签页体验购买流程！`)
  } else {
    showMessage(`✅ 挂单成功！Token #${formData.tokenId} 已在市场上出售`)
  }
  
  nextStep = '🎉 挂单成功！👉 切换到「购买」标签页体验购买流程！'
  
  return { success: true, listing: newListing, hints, nextStep }
}

// 购买
const buyNFT = (listing) => {
  // ...验证和计算
  
  listing.isListed = false
  listing.buyer = '0xCurrentUser...'
  totalVolume.value += listing.price
  
  logStore.addLog(26, '购买NFT', `Token #${listing.tokenId} 价格 ${listing.price} ETH`, 'buyNFT26')
  
  // 检查解锁
  const unlockedConcepts = progressStore.getDayProgress(26)?.unlockedConcepts || []
  const newUnlocks = []
  
  if (!unlockedConcepts.includes('buy_function')) {
    hints.push('buy_function')
    newUnlocks.push('购买功能')
  }
  if (!unlockedConcepts.includes('event_logging')) {
    hints.push('event_logging')
    newUnlocks.push('事件日志')
  }
  
  // 根据解锁数量显示不同提示
  if (newUnlocks.length > 0) {
    const unlockText = newUnlocks.join('、')
    showMessage(`✅ 购买成功！Token #${listing.tokenId} 已转移到你的账户\n🎉 恭喜解锁：${unlockText}！👉 切换到「取消」标签页学习如何取消挂单！`)
  } else {
    showMessage(`✅ 购买成功！Token #${listing.tokenId} 已转移到你的账户`)
  }
  
  nextStep = '🎉 购买成功！👉 切换到「取消」标签页学习如何取消挂单！'
  
  return { success: true, feeAmount, royaltyAmount, sellerAmount, hints, nextStep }
}

// 取消挂单
const cancelListing = (listing) => {
  // ...验证
  
  listing.isListed = false
  logStore.addLog(26, '取消挂单', `Token #${listing.tokenId}`, 'cancelListing26')
  
  // 检查解锁
  const unlockedConcepts = progressStore.getDayProgress(26)?.unlockedConcepts || []
  if (!unlockedConcepts.includes('cancel_function')) {
    hints.push('cancel_function')
    showMessage(`✅ 挂单已取消！Token #${listing.tokenId} 不再出售\n🎉 恭喜解锁：取消功能！👉 你可以重新挂单或探索其他功能！`)
  } else {
    showMessage(`✅ 挂单已取消！Token #${listing.tokenId} 不再出售`)
  }
  
  nextStep = '🎉 已取消挂单！👉 你可以重新挂单或探索其他功能！'
  
  return { success: true, hints, nextStep }
}
📝 最终检查清单
修复后，所有交互将符合《提示系统设计规范.md》：

 双重提示 - 小弹窗 + 交互提示块
 小弹窗包含操作确认 - ✅ 操作成功
 小弹窗包含解锁概念名称 - 🎉 恭喜解锁：[概念]
 小弹窗包含下一步引导 - 👉 下一步操作
 交互提示块包含详细解释 - 📖 概念解释
 交互提示块包含下一步提示 - 👉 下一步操作
🎯 总结
当前状态：交互提示块完全符合规范，但小弹窗有7处不完整

核心问题：

4个可点击区块缺少小弹窗
3个操作的小弹窗缺少解锁提示
影响：

⚠️ 用户可能错过解锁反馈（小弹窗3秒后消失）
✅ 交互提示块确保信息不会完全丢失（持久显示）
修复优先级：中等 - 功能正常，但用户体验不够完美

建议：按照上述修复代码完善小弹窗提示，完全符合《提示系统设计规范.md》的双重提示机制。

---

📊 Day 26 信息块排布逻辑分析
当前布局顺序

1. 市场架构可视化（点击解锁）
   ↓ 下一步：点击「📊 市场统计」
2. 市场统计面板（点击解锁）
   ↓ 下一步：点击「💰 资金分配流程」
3. 资金分配可视化（点击解锁）
   ↓ 下一步：点击「🛡️ 安全机制」
4. 安全机制说明（点击解锁）
   ↓ 下一步：切换到「挂单」标签页
5. 操作标签页
   ├── 挂单（操作）
   │   ↓ 下一步：切换到「购买」标签页
   ├── 购买（操作）
   │   ↓ 下一步：切换到「取消」标签页
   └── 取消（操作）
6. NFT画廊/市场展示（只读展示 + 可点击）
7. 交易历史（只读展示）
✅ 符合就近原则的部分
1. 四个可点击解锁块（块1-4）

点击块1 → 块2 ✅
点击块2 → 块3 ✅
点击块3 → 块4 ✅
点击块4 → 块5 ✅（切换到挂单标签页）
评价：完美符合就近原则！用户每完成一步，下一步交互就在紧邻的下一块。

2. 操作标签页内部切换

挂单 → 购买（同一块内切换标签）✅
购买 → 取消（同一块内切换标签）✅
评价：符合就近原则！用户不需要跨块操作。

⚠️ 存在逻辑问题的部分
问题：购买流程被块6打断
当前流程：


用户在块5"购买"标签页：
  ┌─────────────────────────┐
  │ 选择要购买的NFT:       │  ← 下拉选择
  │ [下拉框]               │     （只能看到NFT ID和价格）
  │ 购买预览信息...         │
  │ 🛒 立即购买             │  ← 点击购买
  └─────────────────────────┘
           ↓
        【跨越块6】
           ↓
  ┌─────────────────────────┐
  │ 块6: NFT画廊            │  ← 视觉化展示（虽然也能点击）
  │ [图片] [图片] [图片]    │     （但这不是主要交互方式）
  └─────────────────────────┘
问题分析：

交互方式割裂：

块5的购买标签页：使用下拉框选择NFT（抽象交互）
块6的NFT画廊：可视化展示所有NFT（具象交互）
两者实际上是重复的功能
用户困惑：

用户在块5选择NFT时，看不到NFT的视觉展示
块6的NFT画廊虽然有"购买"按钮，但购买逻辑在块5
用户不知道应该在哪里购买
就近原则违背：

挂单后，用户期望看到自己的NFT在市场上展示
但块6（NFT画廊）在块5（操作标签页）之后
用户需要跨过块6才能回到块5操作
🎯 理想的就近布局（建议方案）
方案A：保持操作标签页不变，调整块6位置

1. 市场架构可视化
2. 市场统计面板
3. 资金分配可视化
4. 安全机制说明
5. 操作标签页
   ├── 挂单
   ├── 购买
   └── 取消
6. NFT画廊/市场展示 ← 仍在操作之后，但不影响流程
7. 交易历史
优化点：

在块5的"购买"标签页添加一个简化版NFT展示区域（前3个NFT的卡片）
块6保持完整NFT画廊展示（作为补充视图）
用户可以在块5完成整个购买流程，不需要跳到块6
优点：

块5内部形成完整的购买交互闭环
块6作为辅助展示，不影响主流程
符合就近原则