# Solidity学习互动演示GUI开发工作流程 Skill

> 文档版本：20260327 (Day 30 已添加)

## 项目概述

这是一个基于 Vue 3 + Pinia 的 Solidity 学习互动演示 GUI，从 Day 1 到 Day 30 的完整教学界面。

## 核心架构

### 技术栈
- **前端框架**: Vue 3 (Composition API)
- **状态管理**: Pinia
- **构建工具**: Vite
- **样式**: CSS3 (Flexbox布局)
- **语言**: JavaScript

### 目录结构（20260317更新）
```
GUI/
├── src/
│   ├── components/
│   │   ├── AppHeader.vue          # 头部组件
│   │   ├── DayContent.vue         # 日程内容核心组件（动态导入）
│   │   ├── DayNavigation.vue      # 日程导航组件
│   │   ├── Sidebar.vue            # 进度侧边栏组件
│   │   ├── shared/                # 共享组件
│   │   │   ├── ComingSoon.vue     # 即将上线提示
│   │   │   ├── FullCodeModal.vue  # 完整代码弹窗
│   │   │   ├── KnowledgePanel.vue # 知识面板
│   │   │   ├── ResizerHandle.vue  # 列宽调节分隔条（实验性）
│   │   │   └── ResizableLayout.vue # 可调整布局（实验性）
│   │   └── days/                  # 各Day组件
│   │       ├── Day1/ClickCounter.vue
│   │       ├── Day2/SaveMyName.vue
│   │       ├── Day11/InheritanceDemo.vue
│   │       ├── Day12/ERC20Token.vue
│   │       ├── Day13/ERC20TokenAdvanced.vue
│   │       ├── Day14/SafeDeposit.vue      # 抽象合约 + 接口 + 工厂模式
│   │       ├── Day15/GasEfficientVoting.vue # Gas 优化技术
│   │       ├── Day16/PluginStore.vue      # 插件存储系统 + 动态调用
│   │       ├── Day17/UpgradeHub.vue       # 可升级合约 + 代理模式
│   │       ├── Day18/OracleContract.vue   # 预言机 + 参数保险
│   │       ├── Day19/SignThis.vue         # 签名验证 + 无Gas空投
│   │       ├── Day20/ReentryAttack.vue    # 重入攻击 + 安全防护
│   │       ├── Day21/SimpleNFT.vue        # ERC721 NFT标准 + 铸造/转移/授权
│   │       ├── Day22/FairChainLottery.vue     # 公平链上彩票 + Mock VRF随机数
│   │       ├── Day23/SimpleLending.vue        # DeFi借贷平台 + 抵押借款利息
│   │       ├── Day24/EnhancedSimpleEscrow.vue # 增强托管合约 + 三方托管/超时/争议
│   │       ├── Day25/AutomatedMarketMaker.vue # 自动化做市商 + 流动性池/代币交换/LP代币
│   │       ├── Day26/NFTMarketplace.vue       # NFT市场 + 挂单/购买/取消/版税/市场费
│   │   ├── Day27/YieldFarming.vue         # 收益耕作 + DeFi质押/奖励计算/紧急提取
    │   │   ├── Day28/DecentralizedGovernance.vue # 去中心化治理 + DAO治理/提案/投票/执行
    │   │   ├── Day29/SimpleStablecoin.vue     # 简单稳定币 + 超额抵押/价格预言机/清算机制
    │   │   └── Day30/MiniDex.vue              # 迷你DEX + 自动化做市商/流动性池/代币交换/LP代币
│   ├── composables/               # 组合式函数
│   │   ├── useDay1.js
│   │   ├── useDay2.js
│   │   ├── useDay11.js
│   │   ├── useDay12.js
│   │   ├── useDay13.js
│   │   ├── useDay14.js            # SafeDeposit 业务逻辑
│   │   ├── useDay15.js            # GasEfficientVoting 业务逻辑
│   │   ├── useDay16.js            # PluginStore 业务逻辑 + ABI 编码
│   │   ├── useDay17.js            # UpgradeHub 业务逻辑 + 升级机制
│   │   ├── useDay18.js            # OracleContract 业务逻辑 + 双预言机
│   │   ├── useDay19.js            # SignThis 业务逻辑 + ECDSA签名
│   │   ├── useDay20.js            # ReentryAttack 业务逻辑 + 重入攻击模拟
│   │   ├── useDay21.js            # SimpleNFT 业务逻辑 + NFT铸造/转移/授权
│   │   ├── useDay22.js            # FairChainLottery 业务逻辑 + 彩票/VRF/获胜者
│   │   ├── useDay23.js            # SimpleLending 业务逻辑 + DeFi借贷/抵押/利息
│   │   ├── useDay24.js            # EnhancedSimpleEscrow 业务逻辑 + 三方托管/超时/争议
│   │   ├── useDay25.js            # AutomatedMarketMaker 业务逻辑 + AMM/流动性/交换
│   │   ├── useDay26.js            # NFTMarketplace 业务逻辑 + NFT市场/挂单/购买/版税
│   │   ├── useDay27.js            # YieldFarming 业务逻辑 + DeFi质押/奖励计算/紧急提取
    │   │   ├── useDay28.js            # DecentralizedGovernance 业务逻辑 + DAO治理/提案/投票/执行
    │   │   ├── useDay29.js            # SimpleStablecoin 业务逻辑 + 超额抵押/铸造/销毁/清算
    │   │   └── useDay30.js            # MiniDex 业务逻辑 + AMM/流动性池/代币交换/LP代币
│   ├── data/
│   │   ├── concepts.js            # 概念定义
│   │   └── days.js                # 日程配置（核心配置）
│   ├── stores/                    # Pinia 状态管理
│   │   ├── contractStore.js       # 合约状态
│   │   └── progressStore.js       # 学习进度
│   ├── styles/
│   │   └── main.css               # 全局样式
│   └── App.vue                    # 主应用组件
├── AI_PROMPT_GUIDE.md             # AI开发指南
└── skill.md                       # 本文件
```

### 状态管理架构（20260317更新）

使用 Pinia 进行状态管理，替代了原来的集中式 App.vue 状态。

```javascript
// contractStore.js - 合约状态
contracts: {
  day1: { count, interactionCount },
  day2: { name, bio, hasStored, hasRetrieved },
  day3: { candidates, voteCount },
  day4: { bids, highestBidder, ended },
  day5: { owner, treasureAmount, allowance },
  day6: { members, balances, bankManager },
  day7: { debts, balances, friendList },
  day8: { owner, totalTips, conversionRates, isUserAdmin },
  day9: { owner, userAddress, isUserAdmin, scientificCalculatorAddress, isAddressSet, operationCount, operationHistory, challengeTasks },
  day10: { userProfile, workoutHistory, milestones, totalWorkouts, totalDistance },
  day11: { owner, userAddress, contractBalance, eventLog, interactionCount },  // 继承 + 所有权管理
  day12: { tokenName, tokenSymbol, totalSupply, balances, allowances, userAddress },  // ERC20 代币标准
  day13: { tokenName, tokenSymbol, totalSupply, balances, allowances, userAddress },  // ERC20 + virtual 函数
  day14: { depositBoxes, eventLog, boxCounter, currentRole, currentAddress },  // 抽象合约 + 接口 + 工厂模式
  day15: { proposals, proposalCounter, votesCast, storageBits, userAddress, eventLog },  // Gas 优化技术
  day16: { profiles, plugins, pluginData, currentUser, pluginCounter },  // 插件存储系统 + 动态调用
  day17: { plans, subscriptions, currentVersion, isUpgraded, paused },  // 可升级合约 + 代理模式
  day18: { currentUser, currentRole, ethPrice, rainfall, hasInsurance, contractBalance },  // 预言机 + 参数保险
  day19: { currentRole, currentUserAddress, organizer, generatedSignature, isEntered, participantsList },  // 签名验证 + 无Gas空投
  day20: { currentRole, vaultBalance, userBalances, reentrancyStatus, isAttacking, attackCount },  // 重入攻击 + 安全防护
  day21: { nfts, tokenApprovals, operatorApprovals, selectedTokenId, mintForm, transferForm, approveForm, operatorForm, queryForm },  // ERC721 NFT标准 + 铸造/转移/授权
  day22: { lotteryState, players, recentWinner, currentRole, entranceFee, prizePool, requestId },  // 公平链上彩票 + 状态机/VRF/获胜者
  day23: { walletBalance, depositBalance, collateralBalance, borrowBalance, currentDebt, healthFactor, totalLiquidity, utilizationRate, interestRate, lastUpdateTime },  // DeFi借贷 + 存款/抵押/借款/利息
  day24: { escrowState, currentRole, funds, escrowInfo, eventLog, addresses },  // 三方托管 + 枚举状态机/超时/争议仲裁
  day25: { reserveA, reserveB, totalLPSupply, lpBalances, swapHistory, priceImpact },  // AMM + 流动性池/代币交换/LP代币
  day26: { listings, marketplaceFeePercent, feeRecipient, totalVolume, userNFTs, activeListings, myListings }  // NFT市场 + 挂单/购买/取消/版税
}

// progressStore.js - 学习进度（自动从 dayConfigs 生成）
dayProgress: {
  1: { unlockedConcepts: [], totalConcepts: 4, interactionCount: 0 },
  2: { unlockedConcepts: [], totalConcepts: 6, interactionCount: 0 },
  // ... 自动计算 totalConcepts
}
```

### 组件架构（20260312重构）

**动态导入**: 使用 `defineAsyncComponent` 实现按需加载
```javascript
// DayContent.vue
const dayComponents = {
  1: defineAsyncComponent(() => import('./days/Day1/ClickCounter.vue')),
  2: defineAsyncComponent(() => import('./days/Day2/SaveMyName.vue')),
  // ...
}
```

**共享组件**: 提取公共逻辑到 shared 目录
- `KnowledgePanel.vue` - 知识面板（右栏）
- `FullCodeModal.vue` - 完整代码弹窗
- `ComingSoon.vue` - 未开发天数提示

---

## 关键开发流程

### 1. 初始化项目

```bash
cd GUI
npm install
npm run dev
```

### 2. 添加新 Day 的标准流程

**步骤 1**: 在 `src/data/days.js` 中添加配置
```javascript
export const dayConfigs = {
    // ... 现有配置
    X: {
        title: "Day X - 标题",
        subtitle: "副标题",
        concepts: ["concept1", "concept2", "concept3"]
    }
}
```

**步骤 2**: 创建组件文件 `src/components/days/DayX/YourComponent.vue`

**步骤 3**: 创建 composable `src/composables/useDayX.js`（如需要状态管理）

**步骤 4**: 在 `src/components/DayContent.vue` 中注册动态导入
```javascript
const dayComponents = {
  // ... 现有天数
  X: defineAsyncComponent(() => import('./days/DayX/YourComponent.vue')),
}
```

**注意**: `progressStore.js` 会自动从 `dayConfigs` 计算 `totalConcepts`，**无需手动修改**。

---

## 核心组件说明

### AppHeader.vue
- 标题居中显示，包含免责声明和作者署名
- 左右切换按钮控制侧边栏显示
- 接收 `showLeftSidebar` 和 `showRightSidebar` 属性

### DayContent.vue
- 使用动态导入加载各 Day 组件
- 未实现的天数显示 `ComingSoon` 组件
- 支持 `switch-day` 事件跳转

### DayNavigation.vue
- 显示所有可用天数列表
- 支持正序/倒序切换
- 高亮当前选中天数

### Sidebar.vue
- 显示当前天数进度
- 展示解锁的知识点
- 显示交互日志

### KnowledgePanel.vue（共享组件）
- 显示已解锁概念
- 概念切换和代码展示
- 进度百分比显示

---

## 样式系统

### 全局CSS变量（Solarized配色）
```css
--primary-color: #b58900;
--accent-cyan: #2aa198;
--accent-green: #859900;
--accent-red: #dc322f;
--bg-base: #fdf6e3;
--bg-surface-1: #eee8d5;
```

### 按钮样式（全局定义）
```html
<button class="day-action-btn cyan">按钮</button>
<button class="day-action-btn green">按钮</button>
<button class="day-action-btn red small">小按钮</button>
```
可用颜色：blue, yellow, orange, green, magenta, cyan, red

### 响应式布局
- PC端：左(250px) 中(flex:1) 右(300px) 三栏
- 移动端：抽屉式侧边栏，点击按钮滑出

---

## 重构改进记录

### 已完成重构

1. **状态管理重构**
   - 从 App.vue 集中式状态迁移到 Pinia
   - 创建 `contractStore.js` 和 `progressStore.js`
   - `totalConcepts` 自动从 `dayConfigs` 计算

2. **组件架构重构**
   - 提取共享组件（KnowledgePanel, FullCodeModal, ComingSoon）
   - 使用 `defineAsyncComponent` 实现动态导入
   - 统一概念解锁逻辑到 `progressStore.unlockConcept()`

3. **样式重构**
   - 提取全局按钮样式到 `main.css`
   - 各 Day 组件使用 `.day-action-btn` 类
   - 保留各 Day 独特配色方案

4. **错误处理**
   - 添加 `ComingSoon` 组件处理未实现天数
   - 统一输入验证

### Vue 3 Composable 响应式传递最佳实践（20260327 Day 30 重大经验教训）

**问题现象**:
父组件计算值正确，但子组件接收到的 props 始终为 0 或初始值。

**错误代码**:
```javascript
// ❌ 错误：toRefs 包含函数，且直接传递 ref
const { calculatedLPTokens, addLiquidity } = toRefs(day30)
<LiquidityPanel :calculated-lp-tokens="calculatedLPTokens" />  // 可能失败
```

**正确方案**:
```javascript
// 1. 分离 ref/computed 和函数的解构
const { calculatedLPTokens, addAmount0 } = toRefs(day30)  // ref/computed
const { addLiquidity, swap } = day30  // 函数直接解构

// 2. 创建新的 computed 传递给子组件
const displayLPTokens = computed(() => calculatedLPTokens.value)

// 3. 模板中传递新的 computed
<LiquidityPanel :calculated-lp-tokens="displayLPTokens" />
```

**核心原则**:
| 类型 | 处理方式 | 传递给子组件 |
|------|---------|-------------|
| ref/computed | `toRefs(day30)` 解构 | 包装成新的 `computed()` |
| 函数 | 直接解构 `day30` | 直接调用 |

**经验教训**:
1. `toRefs()` 会把**所有属性**都转换成 ref，包括函数
2. 直接传递 `toRefs()` 解构的 ref 到子组件可能解包失败
3. 创建新的 `computed()` 包装是更安全可靠的传递方式
4. 函数永远不要使用 `toRefs()` 包裹，否则调用时需要 `.value`

---

### 实验性功能（未完成）

**列宽调节器**:
- `useColumnResizer.js` - 列宽调节 composable
- `ResizerHandle.vue` - 分隔条组件
- `ResizableLayout.vue` - 可调整布局组件
- 状态：实验性，存在渲染问题待解决

### 开发最佳实践

- **状态管理**: 使用 Pinia stores，避免组件深层传递
- **组件通信**: Props 向下，Emit 向上，跨组件用 Store
- **样式组织**: 基础样式在 `main.css`，组件特定样式用 scoped
- **代码分割**: 使用动态导入减少首屏加载

---

## 调试技巧

- **Vite热更新**: 修改代码后快速预览
- **Vue DevTools**: 透视组件状态与数据流动
- **Pinia DevTools**: 追踪状态变化
- **控制台审查**: 跟踪常规JS错误

---

## 部署检查清单

- [ ] 所有日程功能正常工作（Day 1-16）
- [ ] 概念解锁逻辑正确
- [ ] PC端及移动端布局正常
- [ ] 侧边栏切换可用
- [ ] 无控制台错误
- [ ] 构建成功 (`npm run build`)

---

## 参考文档

- [AI_PROMPT_GUIDE.md](./AI_PROMPT_GUIDE.md) - 详细的AI开发指南
- [Vue 3 文档](https://vuejs.org/)
- [Pinia 文档](https://pinia.vuejs.org/)
