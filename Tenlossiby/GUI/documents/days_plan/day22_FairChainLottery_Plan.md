# Day 22 - FairChainLottery 学习互动页面规划

> 基于合约: `day22-FairChainLottery.sol`
> 创建时间: 2026-03-24
> 适用项目: Solidity 30天学习 GUI

---

## 一、合约功能分析

基于 `day22-FairChainLottery.sol`，核心功能包括：

| 合约 | 功能 |
|------|------|
| **Ownable** | 基础所有权管理（内联实现） |
| **MockVRFCoordinator** | 模拟 Chainlink VRF 协调器 |
| **FairChainLottery** | 主彩票合约：参与、开启、结束、选获胜者 |

### FairChainLottery 核心函数：
- `enter()` - 参与彩票（支付 ETH）
- `startLottery()` - 开启彩票（仅所有者）
- `endLottery()` - 结束彩票并请求随机数（仅所有者）
- `fulfillRandomWords()` - VRF 回调，选出获胜者
- `getPlayers()` / `getBalance()` / `getPlayerCount()` - 查询函数

---

## 二、页面整体布局

```
┌─────────────────────────────────────────────────────────────────┐
│  🎰 FairChainLottery - 去中心化彩票（Mock VRF 版本）              │
├──────────────────────────┬──────────────────────────────────────┤
│                          │                                      │
│    【左栏：交互区域】      │      【右栏：知识面板】               │
│                          │      (KnowledgePanel)                │
│  ┌────────────────────┐  │                                      │
│  │ 1. 合约架构可视化   │  │  - 已解锁概念列表                    │
│  │    (点击解锁)      │  │  - 当前概念详情                      │
│  │                    │  │  - 代码示例                          │
│  └────────────────────┘  │  - 下一步提示                        │
│                          │                                      │
│  ┌────────────────────┐  │                                      │
│  │ 2. 角色切换区       │  │                                      │
│  │  (Owner / Player)  │  │                                      │
│  └────────────────────┘  │                                      │
│                          │                                      │
│  ┌────────────────────┐  │                                      │
│  │ 3. 彩票状态面板     │  │                                      │
│  │  - 当前状态        │  │                                      │
│  │  - 奖池金额        │  │                                      │
│  │  - 参与者数量      │  │                                      │
│  └────────────────────┘  │                                      │
│                          │                                      │
│  ┌────────────────────┐  │                                      │
│  │ 4. 操作区           │  │                                      │
│  │  - 开启/结束彩票   │  │                                      │
│  │  - 参与彩票        │  │                                      │
│  │  - 触发 VRF 回调   │  │                                      │
│  └────────────────────┘  │                                      │
│                          │                                      │
│  ┌────────────────────┐  │                                      │
│  │ 5. 参与者列表       │  │                                      │
│  │  - 显示所有参与者  │  │                                      │
│  │  - 最近获胜者      │  │                                      │
│  └────────────────────┘  │                                      │
│                          │                                      │
└──────────────────────────┴──────────────────────────────────────┘
```

---

## 三、知识点设计（8个概念）

### 概念列表与解锁顺序

| # | 概念 Key | 中文名称 | 解锁时机 | 图标 |
|---|----------|----------|----------|------|
| 1 | `lottery_state_enum` | 彩票状态枚举 | 点击架构图时解锁 | 🎰 |
| 2 | `ownable_contract` | Ownable 所有权 | 切换到 Owner 角色时解锁 | 👑 |
| 3 | `entry_fee` | 参与费用 | 成功参与彩票时解锁 | 💰 |
| 4 | `dynamic_array` | 动态数组存储 | 查看参与者列表时解锁 | 📋 |
| 5 | `mock_vrf` | Mock VRF 协调器 | 结束彩票请求随机数时解锁 | 🎲 |
| 6 | `random_winner` | 随机数选获胜者 | VRF 回调成功后解锁 | 🏆 |
| 7 | `call_transfer` | call 转账方法 | 查看获胜者详情时解锁 | 💸 |
| 8 | `event_logging` | 事件日志 | 点击查看完整代码时解锁 | 📜 |

---

## 四、详细交互流程与解锁逻辑

### 阶段 1：了解合约架构（1个概念）

```
┌─────────────────────────────────────────────────────────────┐
│  🎯 阶段 1：了解彩票合约架构                                  │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  ┌─────────────────────────────────────────────────────┐   │
│  │  合约架构可视化区（可点击）                            │   │
│  │                                                     │   │
│  │   ┌──────────┐      ┌──────────────┐      ┌──────┐ │   │
│  │   │ Ownable  │ ───→ │ FairChainLottery │ ←── │ Mock │ │   │
│  │   │  👑      │ 继承 │   🎰 主合约      │ VRF │ VRF  │ │   │
│  │   └──────────┘      └──────────────┘      └──────┘ │   │
│  │                              │                      │   │
│  │                              ↓                      │   │
│  │                    ┌─────────────────┐              │   │
│  │                    │ enum LOTTERY_STATE│            │   │
│  │                    │   OPEN/CLOSED/    │            │   │
│  │                    │   CALCULATING     │            │   │
│  │                    └─────────────────┘              │   │
│  │                                                     │   │
│  └─────────────────────────────────────────────────────┘   │
│                                                             │
│  点击架构图 → 解锁 lottery_state_enum                        │
│  提示："🎉 解锁「彩票状态枚举」！Solidity 的 enum 可以定义 │
│         有限的状态集合。👉 切换到 Owner 角色开始管理彩票！"   │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

**解锁逻辑：**
- 点击架构图 → `lottery_state_enum`
- 自动提示切换到 Owner 角色

---

### 阶段 2：Owner 管理彩票（1个概念）

```
┌─────────────────────────────────────────────────────────────┐
│  👑 阶段 2：Owner 管理彩票                                   │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  角色切换: [ Player ] [ Owner ● ]                           │
│                                                             │
│  ┌─────────────────────────────────────────────────────┐   │
│  │  彩票状态面板                                         │   │
│  │  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐ │   │
│  │  │ 状态: CLOSED│  │ 奖池: 0 ETH │  │ 参与者: 0   │ │   │
│  │  └─────────────┘  └─────────────┘  └─────────────┘ │   │
│  └─────────────────────────────────────────────────────┘   │
│                                                             │
│  ┌─────────────────────────────────────────────────────┐   │
│  │  Owner 操作区                                         │   │
│  │                                                     │   │
│  │  [ 🚀 开启彩票 ]  ← 点击解锁 ownable_contract         │   │
│  │                                                     │   │
│  │  提示："🎉 解锁「Ownable 所有权」！只有合约所有者      │   │
│  │         才能开启彩票。👉 切换到 Player 参与彩票！"      │   │
│  │                                                     │   │
│  └─────────────────────────────────────────────────────┘   │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

**解锁逻辑：**
- 切换到 Owner 角色 → `ownable_contract`
- 点击"开启彩票" → 状态变为 OPEN

---

### 阶段 3：Player 参与彩票（2个概念）

```
┌─────────────────────────────────────────────────────────────┐
│  👤 阶段 3：Player 参与彩票                                  │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  角色切换: [ Player ● ] [ Owner ]                           │
│                                                             │
│  ┌─────────────────────────────────────────────────────┐   │
│  │  参与彩票                                             │   │
│  │                                                     │   │
│  │  参与费用: 0.01 ETH                                  │   │
│  │                                                     │   │
│  │  你的地址: 0x742d...aabb                             │   │
│  │                                                     │   │
│  │  [ 🎫 参与彩票 (支付 0.01 ETH) ]  ← 点击解锁 entry_fee │   │
│  │                                                     │   │
│  │  提示："🎉 解锁「参与费用」！payable 函数可以接收 ETH。  │   │
│  │         👉 点击查看参与者列表！"                        │   │
│  │                                                     │   │
│  └─────────────────────────────────────────────────────┘   │
│                                                             │
│  ┌─────────────────────────────────────────────────────┐   │
│  │  参与者列表 (点击解锁 dynamic_array)                   │   │
│  │  ┌─────────────────────────────────────────────┐    │   │
│  │  │ #1  0x742d...aabb    0.01 ETH              │    │   │
│  │  │ #2  0x8ba1...ccdd    0.01 ETH              │    │   │
│  │  │ #3  0x3f9e...eeff    0.01 ETH              │    │   │
│  │  └─────────────────────────────────────────────┘    │   │
│  │                                                     │   │
│  │  提示："🎉 解锁「动态数组」！address payable[] 存储    │   │
│  │         所有参与者。👉 切换到 Owner 结束彩票！"         │   │
│  │                                                     │   │
│  └─────────────────────────────────────────────────────┘   │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

**解锁逻辑：**
- 成功参与彩票 → `entry_fee`
- 点击查看参与者列表 → `dynamic_array`

---

### 阶段 4：结束彩票与 VRF（2个概念）

```
┌─────────────────────────────────────────────────────────────┐
│  🎲 阶段 4：结束彩票与随机数生成                              │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  角色切换: [ Player ] [ Owner ● ]                           │
│                                                             │
│  ┌─────────────────────────────────────────────────────┐   │
│  │  彩票状态: OPEN → 点击 [ 🔚 结束彩票 ]                │   │
│  │                                                     │   │
│  │  状态变为: CALCULATING                               │   │
│  │                                                     │   │
│  │  [ 🎲 触发 VRF 回调 ]  ← 点击解锁 mock_vrf           │   │
│  │                                                     │   │
│  │  提示："🎉 解锁「Mock VRF」！模拟 Chainlink VRF 生成   │   │
│  │         随机数。生产环境必须使用真正的 VRF！            │   │
│  │         👉 点击触发 VRF 回调选出获胜者！"               │   │
│  │                                                     │   │
│  └─────────────────────────────────────────────────────┘   │
│                                                             │
│  VRF 回调执行:                                               │
│  ┌─────────────────────────────────────────────────────┐   │
│  │  随机数: 0x7a3f...8e2d                              │   │
│  │  获胜者索引: 2 % 3 = 2                              │   │
│  │  获胜者: 0x8ba1...ccdd                              │   │
│  │  奖金: 0.03 ETH                                     │   │
│  │                                                     │   │
│  │  🎉 恭喜 0x8ba1...ccdd 赢得 0.03 ETH！               │   │
│  │                                                     │   │
│  │  [ 👁️ 查看获胜者详情 ]  ← 点击解锁 call_transfer      │   │
│  │                                                     │   │
│  │  解锁 random_winner                                  │   │
│  │                                                     │   │
│  └─────────────────────────────────────────────────────┘   │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

**解锁逻辑：**
- 结束彩票（请求随机数）→ `mock_vrf`
- 触发 VRF 回调 → `random_winner`
- 查看获胜者详情 → `call_transfer`

---

### 阶段 5：查看完整代码（1个概念）

```
┌─────────────────────────────────────────────────────────────┐
│  📜 阶段 5：查看完整代码                                     │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  ┌─────────────────────────────────────────────────────┐   │
│  │  事件日志展示                                          │   │
│  │                                                     │   │
│  │  [📜] LotteryStarted()                             │   │
│  │      Block: #12345                                 │   │
│  │                                                     │   │
│  │  [📜] PlayerEntered(0x742d...aabb, 0.01 ether)     │   │
│  │      Block: #12346                                 │   │
│  │                                                     │   │
│  │  [📜] PlayerEntered(0x8ba1...ccdd, 0.01 ether)     │   │
│  │      Block: #12347                                 │   │
│  │                                                     │   │
│  │  [📜] LotteryEnded(requestId: 42)                  │   │
│  │      Block: #12348                                 │   │
│  │                                                     │   │
│  │  [📜] WinnerPicked(0x8ba1...ccdd, 0.03 ether)      │   │
│  │      Block: #12349  🏆                             │   │
│  │                                                     │   │
│  └─────────────────────────────────────────────────────┘   │
│                                                             │
│  [ 📄 查看完整代码 ]  ← 点击解锁 event_logging               │
│                                                             │
│  提示："🎉 解锁「事件日志」！事件让前端可以监听合约状态变化。 │
│         👉 所有知识点已解锁！"                                │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

**解锁逻辑：**
- 点击查看完整代码 → `event_logging`

---

## 五、概念定义详情

```javascript
// day22ConceptDefinitions
{
    lottery_state_enum: {
        name: "彩票状态枚举",
        icon: "🎰",
        unlockAt: 1,
        message: "你了解了 enum 枚举类型！它可以定义有限的状态集合，让代码更清晰。",
        code: `enum LOTTERY_STATE { 
    OPEN,        // 开放参与
    CLOSED,      // 关闭
    CALCULATING  // 计算中
}`
    },
    ownable_contract: {
        name: "Ownable 所有权",
        icon: "👑",
        unlockAt: 2,
        message: "你使用了 Ownable 合约！它提供了基础的所有权管理功能。",
        code: `contract Ownable {
    address private _owner;
    
    modifier onlyOwner() {
        require(owner() == msg.sender);
        _;
    }
}`
    },
    entry_fee: {
        name: "参与费用",
        icon: "💰",
        unlockAt: 3,
        message: "你支付了参与费用！payable 函数可以接收 ETH。",
        code: `function enter() public payable {
    require(msg.value >= entryFee);
    players.push(payable(msg.sender));
}`
    },
    dynamic_array: {
        name: "动态数组",
        icon: "📋",
        unlockAt: 4,
        message: "你查看了参与者列表！动态数组可以存储可变数量的元素。",
        code: `address payable[] public players;

function getPlayers() external view returns (address payable[] memory) {
    return players;
}`
    },
    mock_vrf: {
        name: "Mock VRF",
        icon: "🎲",
        unlockAt: 5,
        message: "你使用了 Mock VRF！这是本地测试用的模拟随机数生成器。",
        code: `// Mock VRF 协调器（仅用于测试）
interface IMockVRFCoordinator {
    function requestRandomWords(...) external returns (uint256);
}`
    },
    random_winner: {
        name: "随机数选获胜者",
        icon: "🏆",
        unlockAt: 6,
        message: "随机数选出了获胜者！randomWords[0] % players.length 确保公平。",
        code: `function fulfillRandomWords(uint256, uint256[] calldata randomWords) external {
    uint256 winnerIndex = randomWords[0] % players.length;
    address payable winner = players[winnerIndex];
    // ...
}`
    },
    call_transfer: {
        name: "call 转账",
        icon: "💸",
        unlockAt: 7,
        message: "奖金已通过 call 发送给获胜者！这是推荐的 ETH 转账方式。",
        code: `(bool sent, ) = winner.call{value: prizeAmount}("");
require(sent, "Failed to send ETH");`
    },
    event_logging: {
        name: "事件日志",
        icon: "📜",
        unlockAt: 8,
        message: "你查看了事件日志！事件让前端可以监听合约状态变化。",
        code: `event LotteryStarted();
event PlayerEntered(address indexed player, uint256 amount);
event WinnerPicked(address indexed winner, uint256 amount);`
    }
}
```

---

## 六、提示系统设计

### 交互提示 (getHint)

```javascript
const hints = {
    lottery_state_enum: "🎰 已了解彩票状态！👉 切换到 Owner 角色开启彩票！",
    ownable_contract: "👑 已了解所有权管理！👉 点击「开启彩票」按钮！",
    entry_fee: "💰 已支付参与费用！👉 点击查看参与者列表！",
    dynamic_array: "📋 已了解动态数组！👉 切换到 Owner 结束彩票！",
    mock_vrf: "🎲 已请求随机数！👉 点击「触发 VRF 回调」选出获胜者！",
    random_winner: "🏆 获胜者已选出！👉 点击查看获胜者详情了解奖金发放！",
    call_transfer: "💸 已了解奖金发放机制！👉 点击查看完整代码解锁最后一个知识点！",
    event_logging: "📜 所有知识点已解锁！🎉 恭喜完成 Day 22 学习！"}
};
```

### 解释提示 (getDay22ExplanationHint)

```javascript
const explanationHints = {
    lottery_state_enum: "📖 enum 是 Solidity 的枚举类型，用于定义有限的状态集合。FairChainLottery 使用三种状态控制彩票流程。",
    ownable_contract: "📖 Ownable 是 OpenZeppelin 的标准合约，提供基础的所有权管理。本合约内联实现了 Ownable 功能。",
    entry_fee: "📖 payable 是 Solidity 的关键字，表示函数可以接收 ETH。msg.value 获取发送的 ETH 数量。",
    dynamic_array: "📖 动态数组在 Solidity 中使用 [] 声明，可以动态添加元素。players 数组存储所有参与者地址。",
    mock_vrf: "📖 Mock VRF 是本地测试用的模拟随机数生成器。生产环境必须使用 Chainlink VRF 等安全的随机数源。",
    random_winner: "📖 使用取模运算 % 将随机数映射到有效索引范围。这是公平选择获胜者的关键。",
    call_transfer: "📖 call{value: ...} 是 Solidity 推荐的 ETH 转账方式，比 transfer 和 send 更灵活安全。",
    event_logging: "📖 event 用于记录合约中的重要操作。前端可以通过监听事件实时更新 UI。"
};
```

---

## 七、Gas 估算

```javascript
// gasEstimates - Day 22
{
    // 写操作（消耗 Gas）
    startLottery22: 35000,        // 开启彩票
    enter22: 45000,               // 参与彩票
    endLottery22: 40000,          // 结束彩票
    fulfillRandomWords22: 80000,  // VRF 回调
    triggerVRF22: 0,              // 触发 VRF 回调（GUI模拟操作，不是真实链上交易）

    // 查询操作（View函数，不消耗 Gas）
    getPlayers22: 0,              // 查询参与者列表
    getBalance22: 0,              // 查询合约余额
    getPlayerCount22: 0,          // 查询参与者数量
    getRecentWinner22: 0,         // 查询最近获胜者
    getLotteryState22: 0          // 查询彩票状态
}
```

---

## 八、特殊功能设计

### 1. 彩票状态可视化

```vue
<div class="lottery-state-visual">
  <div class="state-item" :class="{ active: state === 'CLOSED' }">
    <div class="state-icon">🔒</div>
    <div class="state-label">CLOSED</div>
  </div>
  <div class="state-arrow">→</div>
  <div class="state-item" :class="{ active: state === 'OPEN' }">
    <div class="state-icon">🎰</div>
    <div class="state-label">OPEN</div>
  </div>
  <div class="state-arrow">→</div>
  <div class="state-item" :class="{ active: state === 'CALCULATING' }">
    <div class="state-icon">⏳</div>
    <div class="state-label">CALCULATING</div>
  </div>
  <div class="state-arrow">→</div>
  <div class="state-item" :class="{ active: state === 'CLOSED' && hasWinner }">
    <div class="state-icon">🏆</div>
    <div class="state-label">WINNER PICKED</div>
  </div>
</div>
```

### 2. VRF 流程动画

```vue
<div class="vrf-flow-animation" v-if="state === 'CALCULATING'">
  <div class="flow-step">
    <div class="step-icon">📡</div>
    <div class="step-label">请求随机数</div>
  </div>
  <div class="flow-arrow">→</div>
  <div class="flow-step">
    <div class="step-icon">🎲</div>
    <div class="step-label">生成随机数</div>
  </div>
  <div class="flow-arrow">→</div>
  <div class="flow-step">
    <div class="step-icon">📞</div>
    <div class="step-label">回调合约</div>
  </div>
  <div class="flow-arrow">→</div>
  <div class="flow-step">
    <div class="step-icon">🏆</div>
    <div class="step-label">选出获胜者</div>
  </div>
</div>
```

### 3. 获胜者庆祝动画

```vue
<div class="winner-celebration" v-if="recentWinner">
  <div class="confetti">🎉</div>
  <div class="winner-info">
    <div class="winner-trophy">🏆</div>
    <div class="winner-address">{{ formatAddress(recentWinner) }}</div>
    <div class="winner-prize">赢得 {{ prizeAmount }} ETH</div>
  </div>
  <div class="confetti">🎊</div>
</div>
```

---

## 九、组件实现关键代码

### 1. 初始引导（onMounted 钩子）

```javascript
// FairChainLottery.vue
import { onMounted } from 'vue'
import { useProgressStore } from '@/stores/progressStore'

const progressStore = useProgressStore()
const currentHint = ref('')

onMounted(() => {
  const progress = progressStore.getDayProgress(22)
  if (!progress || progress.unlockedConcepts.length === 0) {
    currentHint.value = '🎰 欢迎来到 Day 22！点击架构图了解彩票合约的状态枚举！'
  }
})
```

### 2. 角色切换提示

```javascript
// FairChainLottery.vue
const currentRole = ref('player') // 'player' | 'owner'

const handleToggleRole = (role) => {
  currentRole.value = role
  
  if (role === 'owner') {
    currentHint.value = '👑 你现在是 Owner 身份！👉 点击「开启彩票」按钮开始管理彩票！'
  } else {
    currentHint.value = '👤 你现在是 Player 身份！👉 支付 0.01 ETH 参与彩票！'
  }
}
```

### 3. 错误处理示例

```javascript
// useDay22.js

// 参与彩票错误处理
const enterLottery = (playerAddress, entryFee) => {
  // 检查彩票状态
  if (lotteryState.value !== 'OPEN') {
    return {
      success: false,
      message: `❌ 彩票未开启！当前状态：${lotteryState.value}。请等待 Owner 开启彩票。`
    }
  }
  
  // 检查参与费用
  if (entryFee < 0.01) {
    return {
      success: false,
      message: '❌ 参与费用不足！至少需要 0.01 ETH。'
    }
  }
  
  // 检查是否已参与
  if (players.value.includes(playerAddress)) {
    return {
      success: false,
      message: '❌ 你已经参与过本期彩票了！'
    }
  }
  
  // 执行参与逻辑...
}

// 开启彩票错误处理
const startLottery = (callerRole) => {
  // 检查权限
  if (callerRole !== 'owner') {
    return {
      success: false,
      message: '❌ 权限不足：只有 Owner 才能开启彩票！'
    }
  }
  
  // 检查当前状态
  if (lotteryState.value !== 'CLOSED') {
    return {
      success: false,
      message: `❌ 无法开启：当前状态为 ${lotteryState.value}，只能在 CLOSED 状态下开启。`
    }
  }
  
  // 执行开启逻辑...
}

// 结束彩票错误处理
const endLottery = (callerRole) => {
  // 检查权限
  if (callerRole !== 'owner') {
    return {
      success: false,
      message: '❌ 权限不足：只有 Owner 才能结束彩票！'
    }
  }
  
  // 检查当前状态
  if (lotteryState.value !== 'OPEN') {
    return {
      success: false,
      message: `❌ 无法结束：当前状态为 ${lotteryState.value}，只能在 OPEN 状态下结束。`
    }
  }
  
  // 检查是否有参与者
  if (players.value.length === 0) {
    return {
      success: false,
      message: '❌ 无法结束：当前没有参与者！'
    }
  }
  
  // 执行结束逻辑...
}

// 触发 VRF 回调错误处理
const triggerVRFCallback = (callerRole) => {
  // 检查权限
  if (callerRole !== 'owner') {
    return {
      success: false,
      message: '❌ 权限不足：只有 Owner 才能触发 VRF 回调！'
    }
  }
  
  // 检查当前状态
  if (lotteryState.value !== 'CALCULATING') {
    return {
      success: false,
      message: `❌ 无法触发：当前状态为 ${lotteryState.value}，只能在 CALCULATING 状态下触发。`
    }
  }
  
  // 执行 VRF 回调逻辑...
}
```

### 4. 操作日志记录

```javascript
// useDay22.js
import { useOperationLogStore } from '@/stores/operationLogStore'

const logStore = useOperationLogStore()

// 示例：参与彩票
const enterLottery = (playerAddress, entryFee) => {
  // ... 执行逻辑
  
  // 记录操作日志
  logStore.addLog(
    22, // day
    '参与彩票', // operation
    `地址 ${formatAddress(playerAddress)} 支付 ${entryFee} ETH 参与彩票`, // details
    'enter22' // gasKey
  )
  
  return {
    success: true,
    message: '✅ 参与成功！',
    hints: ['entry_fee'],
    nextStep: '👉 点击查看参与者列表！'
  }
}

// 示例：查询操作（不消耗 Gas）
const getPlayers = () => {
  // ... 执行查询
  
  logStore.addLog(
    22,
    '查询参与者',
    `获取当前 ${players.value.length} 位参与者`,
    null // 查询操作不传 gasKey
  )
  
  return players.value
}
```

### 5. realtimeData 计算属性

```javascript
// useDay22.js
import { computed } from 'vue'
import { useOperationLogStore } from '@/stores/operationLogStore'

const logStore = useOperationLogStore()

const realtimeData = computed(() => {
  return {
    gasUsage: logStore.getDayGasUsage(22),
    ethCost: logStore.getDayEthCost(22),
    operationCount: logStore.getDayOperationCount(22)
  }
})

return {
  // ... 其他导出
  realtimeData
}
```

---

## 十、需要修改的文件清单

| 文件 | 修改内容 |
|------|----------|
| `src/data/days.js` | 添加 dayConfigs[22] 配置 |
| `src/data/concepts.js` | 添加 day22ConceptDefinitions、getHint 提示、getDay22ExplanationHint、gasEstimates |
| `src/components/Sidebar.vue` | 导入 day22ConceptDefinitions，添加判断分支 |
| `src/components/shared/KnowledgePanel.vue` | 添加 Day 22 支持 |
| `src/components/days/Day22/FairChainLottery.vue` | 创建主组件 |
| `src/components/DayContent.vue` | 注册 Day 22 组件 |
| `src/composables/useDay22.js` | 创建状态管理 composable |
| `src/composables/useCurrentDayRealtimeData.js` | 注册 Day 22 realtimeData |

---

## 十一、易遗漏配置提醒（⚠️ 重要）

根据《添加新Day检查清单.md》，以下配置**极易遗漏**，务必仔细检查：

### 1. Sidebar.vue ⚠️ 极易遗忘

```javascript
// 第85行附近 - 导入概念定义
import { 
  conceptDefinitions, 
  day11ConceptDefinitions, 
  // ... 其他 Day
  day21ConceptDefinitions,
  day22ConceptDefinitions  // ← 添加这一行
} from '../data/concepts'

// 第136-151行 - 添加判断分支
} else if (props.currentDay === 21) {
  conceptDefs = day21ConceptDefinitions
} else if (props.currentDay === 22) {  // ← 添加这一段
  conceptDefs = day22ConceptDefinitions
}
```

**后果**：如果遗漏，右栏"已解锁概念"列表中的 emoji 将显示为空！

### 2. concepts.js 的 getHint() ⚠️ 极易遗忘

```javascript
export const getHint = (conceptKey) => {
  const hints = {
    // ... 其他 Day 的提示
    
    // Day 22 提示（必须包含全部8个）
    lottery_state_enum: "🎰 已了解彩票状态！👉 切换到 Owner 角色开启彩票！",
    ownable_contract: "👑 已了解所有权管理！👉 点击「开启彩票」按钮！",
    entry_fee: "💰 已支付参与费用！👉 点击查看参与者列表！",
    dynamic_array: "📋 已了解动态数组！👉 切换到 Owner 结束彩票！",
    mock_vrf: "🎲 已请求随机数！👉 点击「触发 VRF 回调」选出获胜者！",
    random_winner: "🏆 获胜者已选出！👉 点击查看获胜者详情了解奖金发放！",
    call_transfer: "💸 已了解奖金发放机制！👉 点击查看完整代码解锁最后一个知识点！",
    event_logging: "📜 所有知识点已解锁！🎉 恭喜完成 Day 22 学习！"
  }
  return hints[conceptKey] || "📖 点击其他概念标签查看更多详细解释。"
}
```

**后果**：如果遗漏，交互提示只显示通用提示，用户体验下降！

### 3. KnowledgePanel Props ⚠️ 会导致崩溃

```vue
<!-- ✅ 正确调用方式 -->
<KnowledgePanel
  v-if="unlockedConcepts.length > 0"
  :current-day="22"
  :unlocked-concepts="unlockedConcepts"      <!-- 🔥 必需！缺失会崩溃 -->
  :progress-percentage="progressPercentage"  <!-- 🔥 必需！缺失会崩溃 -->
  :full-code="fullCode"
  :custom-hint="currentHint"
  @show-full-code="showFullCode = true"
/>
```

**后果**：如果遗漏 `unlocked-concepts` 或 `progress-percentage`，整个中栏将空白，页面崩溃！

### 4. useCurrentDayRealtimeData.js ⚠️ 必须注册

```javascript
import { useDay22 } from './useDay22'

// 在 switch 语句中添加
case 22:
  return useDay22().realtimeData.value
default:
  return { gasUsage: 0, ethCost: 0, operationCount: 0 }
```

**后果**：如果遗漏，实时数据面板无法显示 Gas 消耗信息！

### 5. DayContent.vue 组件注册 ⚠️ 容易遗漏

```javascript
const dayComponents = {
  // ... 其他 Day
  21: defineAsyncComponent(() => import('./days/Day21/SimpleNFT.vue')),
  22: defineAsyncComponent(() => import('./days/Day22/FairChainLottery.vue')),  // ← 添加这一行
}
```

**后果**：如果遗漏，Day 22 页面将无法显示！

---

## 十二、主题配色

- **主色调**: 金色/橙色 (`#f59e0b`) - 代表彩票、奖金
- **次要色**: 紫色 (`#8b5cf6`) - 代表 VRF/随机数
- **背景**: 深色主题，配合金色高亮

---

## 十三、开发注意事项

### 1. 角色切换设计
- 使用 Tab 切换或按钮组实现 Owner/Player 角色切换
- 根据角色显示不同的操作按钮
- Owner 显示：开启彩票、结束彩票、触发 VRF
- Player 显示：参与彩票

### 2. 状态管理
- 使用 useDay22.js 管理彩票状态
- 状态流转：CLOSED → OPEN → CALCULATING → CLOSED
- 记录参与者数组、奖池金额、最近获胜者

### 3. Mock VRF 模拟
- 使用 JavaScript 的随机数生成模拟 VRF 回调
- 显示随机数生成过程
- 计算获胜者索引：randomNumber % players.length

### 4. 事件日志
- 使用数组存储事件日志
- 每条事件包含：事件名、参数、区块号
- 支持事件筛选和查看

---

*文档版本: 2026-03-24*
*规划完成，等待开发指令*
