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

### 目录结构（20260327更新）
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
│   │   ├── Day3/PollStation.vue           # 投票站 + 候选人/票数统计
│   │   ├── Day4/AuctionHouse.vue          # 拍卖行 + 出价/结束拍卖
│   │   ├── Day5/AdminOnly.vue             # 管理员权限 + 权限控制
│   │   ├── Day6/EtherPiggyBank.vue        # 以太币存钱罐 + 存取/会员
│   │   ├── Day7/SimpleIOUApp.vue          # 简单借条应用 + 借还/好友
│   │   ├── Day8/TipJar.vue                # 小费罐 + 多币种/转换率
│   │   ├── Day9/SmartCalculator.vue       # 智能计算器 + 权限/历史
│   │   ├── Day10/ActivityTracker.vue      # 活动追踪器 + 里程碑
│   │   ├── Day11/MasterkeyContract.vue    # 万能钥匙合约 + 继承/所有权
│   │   ├── Day12/ERC20Token.vue           # ERC20代币 + 标准实现
│   │   ├── Day13/MyToken.vue              # 我的代币 + virtual函数
│   │   ├── Day14/SafeDeposit.vue          # 安全存款 + 抽象合约/接口/工厂
│   │   ├── Day15/GasEfficientVoting.vue   # Gas优化投票 + 位运算
│   │   ├── Day16/PluginStore.vue          # 插件商店 + 动态调用/ABI
│   │   ├── Day17/UpgradeHub.vue           # 升级中心 + 代理模式
│   │   ├── Day18/OracleContract.vue       # 预言机合约 + 双预言机
│   │   ├── Day19/SignThis.vue             # 签名验证 + ECDSA/空投
│   │   ├── Day20/ReentryAttack.vue        # 重入攻击 + 安全防护
│   │   ├── Day21/SimpleNFT.vue            # 简单NFT + ERC721标准
│   │   ├── Day22/FairChainLottery.vue     # 公平链上彩票 + VRF随机数
│   │   ├── Day23/SimpleLending.vue        # 简单借贷 + DeFi/抵押/利息
│   │   ├── Day24/EnhancedSimpleEscrow.vue # 增强托管 + 三方/超时/争议
│   │   ├── Day25/AutomatedMarketMaker.vue # AMM + 流动性池/交换
│   │   ├── Day26/NFTMarketplace.vue       # NFT市场 + 挂单/版税
│   │   ├── Day27/YieldFarming.vue         # 收益耕作 + 质押/奖励
│   │   ├── Day28/DecentralizedGovernance.vue # 去中心化治理 + DAO
│   │   ├── Day29/SimpleStablecoin.vue     # 简单稳定币 + 超额抵押
│   │   └── Day30/                         # 迷你DEX + AMM/LP代币
│   │       ├── MiniDex.vue                # 主组件
│   │       └── components/                # 子组件
│   │           ├── ArchitectureDiagram.vue    # 架构图
│   │           ├── MathPrinciplePanel.vue     # 数学原理面板
│   │           ├── FactoryPanel.vue           # 工厂面板
│   │           ├── PairSelector.vue           # 交易对选择器
│   │           ├── PoolStatus.vue             # 池子状态
│   │           ├── LiquidityPanel.vue         # 流动性面板
│   │           └── SwapPanel.vue              # 交换面板
│   ├── composables/               # 组合式函数
│   │   ├── useDay1.js             # ClickCounter 逻辑
│   │   ├── useDay2.js             # SaveMyName 逻辑
│   │   ├── useDay3.js             # PollStation 逻辑
│   │   ├── useDay4.js             # AuctionHouse 逻辑
│   │   ├── useDay5.js             # AdminOnly 逻辑
│   │   ├── useDay6.js             # EtherPiggyBank 逻辑
│   │   ├── useDay7.js             # SimpleIOUApp 逻辑
│   │   ├── useDay8.js             # TipJar 逻辑
│   │   ├── useDay9.js             # SmartCalculator 逻辑
│   │   ├── useDay10.js            # ActivityTracker 逻辑
│   │   ├── useDay11.js            # MasterkeyContract 逻辑
│   │   ├── useDay12.js            # ERC20Token 逻辑
│   │   ├── useDay13.js            # MyToken 逻辑
│   │   ├── useDay14.js            # SafeDeposit 逻辑
│   │   ├── useDay15.js            # GasEfficientVoting 逻辑
│   │   ├── useDay16.js            # PluginStore 逻辑
│   │   ├── useDay17.js            # UpgradeHub 逻辑
│   │   ├── useDay18.js            # OracleContract 逻辑
│   │   ├── useDay19.js            # SignThis 逻辑
│   │   ├── useDay20.js            # ReentryAttack 逻辑
│   │   ├── useDay21.js            # SimpleNFT 逻辑
│   │   ├── useDay22.js            # FairChainLottery 逻辑
│   │   ├── useDay23.js            # SimpleLending 逻辑
│   │   ├── useDay24.js            # EnhancedSimpleEscrow 逻辑
│   │   ├── useDay25.js            # AutomatedMarketMaker 逻辑
│   │   ├── useDay26.js            # NFTMarketplace 逻辑
│   │   ├── useDay27.js            # YieldFarming 逻辑
│   │   ├── useDay28.js            # DecentralizedGovernance 逻辑
│   │   ├── useDay29.js            # SimpleStablecoin 逻辑
│   │   ├── useDay30.js            # MiniDex 逻辑
│   │   ├── useConceptInteraction.js   # 概念交互通用逻辑
│   │   └── useCurrentDayRealtimeData.js # 当前天数实时数据
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

### 状态管理架构（20260327更新）

使用 Pinia + Vue Composables 进行状态管理，替代了原来的集中式 App.vue 状态。

#### 架构演进

**Day 1-11**: 使用 `contractStore.js` 集中管理合约状态
**Day 12-30**: 使用 `useDayX.js` composables 分散管理，每个 Day 独立维护自己的状态

#### Pinia Stores

```javascript
// contractStore.js - 合约状态（Day 1-11）
contracts: {
  day1: { count, interactionCount },  // 点击计数器
  day2: { name, bio, hasStored, hasRetrieved, interactionCount },  // 名字存储
  day3: { candidates, voteCount, interactionCount },  // 投票站
  day4: { owner, item, auctionEndTime, highestBidder, highestBid, ended, bids, bidders, interactionCount },  // 拍卖行
  day5: { owner, treasureAmount, withdrawalAllowance, hasWithdrawn, userAddress, userAllowance, interactionCount },  // 管理员权限
  day6: { bankManager, members, registeredMembers, balance, userAddress, interactionCount, depositCount, withdrawCount },  // 存钱罐
  day7: { owner, userAddress, registeredFriends, friendList, balances, debts, interactionCount },  // 借条应用
  day8: { owner, userAddress, isUserAdmin, totalTipsReceived, tipPerPerson, tipsPerCurrency, supportedCurrencies, conversionRates, interactionCount },  // 小费罐
  day9: { owner, userAddress, isUserAdmin, scientificCalculatorAddress, isAddressSet, operationCount, operationHistory, challengeTasks, interactionCount },  // 计算器
  day10: { owner, userAddress, userProfile, workoutHistory, totalWorkouts, totalDistance, milestones, interactionCount },  // 活动追踪
  day11: { owner, userAddress, contractBalance, eventLog, interactionCount }  // 万能钥匙
}

// progressStore.js - 学习进度（自动从 dayConfigs 生成）
dayProgress: {
  1: { unlockedConcepts: [], totalConcepts: 4, interactionCount: 0, gasUsage: 0, ethCost: 0 },
  2: { unlockedConcepts: [], totalConcepts: 6, interactionCount: 0, gasUsage: 0, ethCost: 0 },
  // ... Day 3-30 自动从 dayConfigs 计算 totalConcepts
  30: { unlockedConcepts: [], totalConcepts: 10, interactionCount: 0, gasUsage: 0, ethCost: 0 }
}

// operationLogStore.js - 操作日志（Day 12+ 使用）
logs: [
  { day, type, message, timestamp, gasUsed, ethCost }
]
// 主要方法：
// - addLog(day, type, message, gasUsed, ethCost) - 添加日志
// - getDayLogs(day) - 获取指定天数日志
// - getDayGasUsage(day) - 获取Gas使用量
// - getDayEthCost(day) - 获取ETH成本
// - getDayOperationCount(day) - 获取操作次数
```

#### Composables 状态（Day 12-30）

从 Day 12 开始，每个 Day 使用独立的 composable 管理状态：

```javascript
// useDay12.js - ERC20Token 状态示例
const tokenInfo = ref({ name, symbol, decimals, totalSupply })
const balances = ref({ [address]: amount })
const allowances = ref({ [owner]: { [spender]: amount } })
const currentRole = ref('alice')
const eventLog = ref([...])

// useDay30.js - MiniDex 状态示例
const allPairs = ref([])
const selectedPair = ref(null)
const reserves = ref({ token0, token1 })
const totalSupply = ref(0)
const userLPBalance = ref(0)
const addAmount0 = ref('')
const addAmount1 = ref('')
// ... 计算属性
const currentPrice = computed(() => ...)
const calculatedLPTokens = computed(() => ...)
```

#### 状态管理最佳实践

1. **Day 1-11**: 使用 `contractStore.getContract(dayNumber)` 获取和更新状态
2. **Day 12+**: 使用 `useDayX()` composable 返回的 ref 和 computed
3. **日志记录**: Day 12+ 使用 `useOperationLogStore()` 记录操作
4. **进度追踪**: 统一使用 `progressStore.unlockConcept(day, concept)`

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