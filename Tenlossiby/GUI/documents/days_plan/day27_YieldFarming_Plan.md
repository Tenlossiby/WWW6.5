# Day 27 - YieldFarming 收益耕作 规划文档

> 创建日期: 2026-03-25

---

## 一、合约功能分析

### 1.1 核心功能
- **质押 (Stake)**: 用户将代币锁定在合约中以获得奖励
- **取消质押 (Unstake)**: 取回质押的代币
- **领取奖励 (ClaimRewards)**: 领取累积的收益
- **紧急提取 (EmergencyWithdraw)**: 紧急情况下放弃奖励取回本金
- **补充奖励 (RefillRewards)**: 管理员补充奖励池

### 1.2 技术特点
- **奖励债务模式 (Reward Debt)**: 使用 rewardDebt 计算累积但未领取的奖励
- **时间加权计算**: 奖励 = 时间差 × 每秒奖励 × 质押数量 / 精度倍数
- **ReentrancyGuard**: 防止重入攻击
- **精度处理**: 支持不同小数位的质押代币

### 1.3 合约结构
```solidity
// 状态变量
- stakingToken: 质押代币合约
- rewardToken: 奖励代币合约
- rewardRatePerSecond: 每秒奖励数量
- stakingTokenDecimals: 质押代币小数位

// 结构体
struct StakerInfo {
    uint256 stakedAmount;    // 已质押数量
    uint256 rewardDebt;      // 累积奖励债务
    uint256 lastUpdate;      // 上次更新时间
}

// 核心函数
- stake(uint256 amount): 质押代币
- unstake(uint256 amount): 取消质押
- claimRewards(): 领取奖励
- emergencyWithdraw(): 紧急提取
- refillRewards(uint256 amount): 补充奖励（仅Owner）
```

---

## 二、页面布局设计

### 2.1 整体布局
采用 Day 22+ 标准双栏布局：
- **左栏**: 交互区域（可视化 + 操作）
- **右栏**: 知识面板（KnowledgePanel）

### 2.2 左栏内容区块（从上到下，共7个区块）

> 优化说明：根据Review建议，将9个区块优化为7个，合并"合约状态面板"和"奖励计算可视化"，将只读区块（用户资产、事件日志）移到最后。

#### 1. 收益耕作架构可视化区（可点击解锁）
```
┌─────────────────────────────────────────────────────────┐
│  🌾 收益耕作架构（点击了解奖励债务模式）                  │
├─────────────────────────────────────────────────────────┤
│                                                         │
│   [质押代币]        [收益耕作合约]        [奖励代币]     │
│   🔵 STAKE    →    🌾 YieldFarming    →   🟢 REWARD    │
│      ↓                  ↓                      ↑        │
│   用户质押         奖励计算/累积            领取奖励     │
│                                                         │
│   核心公式: 奖励 = 时间差 × 每秒奖励 × 质押量 / 10^decimals │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

#### 2. 合约状态与奖励计算面板（可点击解锁）
```
┌─────────────────────────────────────────────────────────┐
│  📊 合约状态与奖励计算（点击了解精度处理和时间加权）       │
├─────────────────────────────────────────────────────────┤
│  【合约状态】                                            │
│  每秒奖励: 1000 REWARD/秒                               │
│  质押代币小数位: 18                                     │
│  合约奖励余额: 50000 REWARD                             │
│  总质押量: 10000 STAKE                                  │
│                                                         │
│  【实时奖励计算演示】                                     │
│  时间差: 3600 秒 (1小时)                                │
│  每秒奖励: 1000                                         │
│  质押数量: 2000 STAKE                                   │
│  精度倍数: 10^18                                        │
│  ─────────────────────────                              │
│  新奖励 = 3600 × 1000 × 2000 / 10^18 = 0.0072 REWARD    │
│                                                         │
│  [⏩ 快进1小时] [⏩ 快进1天]  加速奖励累积演示          │
└─────────────────────────────────────────────────────────┘
```

#### 3. 角色切换区
```
┌─────────────────────────────────────────────────────────┐
│  👤 角色切换                                             │
├─────────────────────────────────────────────────────────┤
│  [👤 Staker]  [👑 Owner]                                │
│  当前身份: 👤 Staker                                    │
└─────────────────────────────────────────────────────────┘
```

#### 4. Staker 操作区（标签页形式）
```
┌─────────────────────────────────────────────────────────┐
│  [质押] [取消质押] [领取奖励]                            │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  质押面板:                                              │
│  可用余额: 5000 STAKE                                   │
│  输入数量: [________] STAKE                             │
│  [💧 质押代币]                                          │
│                                                         │
│  取消质押面板:                                          │
│  已质押: 2000 STAKE                                     │
│  输入数量: [________] STAKE                             │
│  [💸 取消质押]                                          │
│                                                         │
│  领取奖励面板:                                          │
│  待领取奖励: 1500 REWARD                                │
│  [🎁 领取奖励]                                          │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

#### 5. 安全防护区（可点击解锁）
```
┌─────────────────────────────────────────────────────────┐
│  �️ 安全防护机制（点击了解重入保护）                     │
├─────────────────────────────────────────────────────────┤
│  ReentrancyGuard: ✅ 已启用                             │
│  Checks-Effects-Interactions: ✅ 遵循                   │
│                                                         │
│  [🚨 紧急提取] - 放弃奖励，立即取回全部质押              │
│  ⚠️ 警告: 紧急提取将清空所有待领取奖励！                 │
└─────────────────────────────────────────────────────────┘
```

#### 6. Owner 操作区（仅Owner可见）
```
┌─────────────────────────────────────────────────────────┐
│  👑 Owner 操作（点击了解权限控制）                        │
├─────────────────────────────────────────────────────────┤
│  补充奖励池:                                            │
│  输入数量: [________] REWARD                            │
│  [💰 补充奖励]                                          │
│                                                         │
│  当前奖励池余额: 50000 REWARD                           │
└─────────────────────────────────────────────────────────┘
```

#### 7. 用户资产面板（只读）
```
┌─────────────────────────────────────────────────────────┐
│  💰 我的资产                                             │
├─────────────────────────────────────────────────────────┤
│  钱包 STAKE 余额: 3000    已质押 STAKE: 2000            │
│  待领取 REWARD: 1500 (实时增长中 ⏱️)  已领取: 5000      │
└─────────────────────────────────────────────────────────┘
```

#### 8. 事件日志（只读）
```
┌─────────────────────────────────────────────────────────┐
│  📜 事件日志                                             │
├─────────────────────────────────────────────────────────┤
│  [⏰ 14:30:15] Staked: 1000 STAKE                       │
│  [⏰ 14:25:10] RewardClaimed: 500 REWARD                │
│  [⏰ 14:20:05] Unstaked: 500 STAKE                      │
└─────────────────────────────────────────────────────────┘
```

---

## 三、知识点设计（8个概念）

### 3.1 概念列表

```javascript
concepts: [
    "reward_debt_pattern",       // 奖励债务模式 - 点击架构图解锁
    "staking_token_decimals",    // 精度处理 - 点击合约状态与奖励计算面板解锁（与time_weighted_calculation同时）
    "time_weighted_calculation", // 时间加权计算 - 点击合约状态与奖励计算面板解锁（与staking_token_decimals同时）
    "reentrancy_guard",          // 重入保护 - 点击安全防护区解锁
    "stake_function",            // 质押功能 - 成功质押时解锁
    "unstake_function",          // 取消质押 - 成功取消质押时解锁
    "claim_rewards",             // 领取奖励 - 成功领取奖励时解锁
    "emergency_withdraw"         // 紧急提取 - 成功紧急提取时解锁
]
```

### 3.2 概念详细定义

#### 1. reward_debt_pattern (奖励债务模式)
```javascript
{
    name: "奖励债务模式",
    icon: "📝",
    unlockAt: 1,
    message: "你了解了奖励债务模式！这是DeFi收益耕作的核心机制，通过记录每个用户的累积奖励来精确计算收益。",
    code: `struct StakerInfo {
    uint256 stakedAmount;    // 已质押数量
    uint256 rewardDebt;      // 累积奖励债务
    uint256 lastUpdate;      // 上次更新时间
}`
}
```

#### 2. time_weighted_calculation (时间加权计算)
```javascript
{
    name: "时间加权计算",
    icon: "⏱️",
    unlockAt: 2,
    message: "你掌握了时间加权的奖励计算！奖励按质押时间和数量线性累积，体现了DeFi的公平性。",
    code: `// 计算待领取的奖励
uint256 timeDiff = block.timestamp - staker.lastUpdate;
uint256 rewardMultiplier = 10 ** stakingTokenDecimals;
uint256 pendingReward = (timeDiff * rewardRatePerSecond * staker.stakedAmount) / rewardMultiplier;`
}
```

#### 3. staking_token_decimals (精度处理)
```javascript
{
    name: "精度处理",
    icon: "🔢",
    unlockAt: 3,
    message: "你了解了代币精度处理！不同代币有不同小数位（如USDC是6位，ETH是18位），合约需要正确处理这些差异。",
    code: `// 尝试获取质押代币的小数位数
try IERC20Metadata(_stakingToken).decimals() returns (uint8 decimals) {
    stakingTokenDecimals = decimals;
} catch (bytes memory) {
    stakingTokenDecimals = 18;  // 默认为18位
}`
}
```

#### 4. reentrancy_guard (重入保护)
```javascript
{
    name: "重入保护",
    icon: "🛡️",
    unlockAt: 4,
    message: "你了解了重入保护机制！ReentrancyGuard修饰符防止恶意合约在转账时重复调用函数，是DeFi安全的基础。",
    code: `contract YieldFarming is ReentrancyGuard {
    function stake(uint256 amount) external nonReentrant {
        // 安全地处理质押
    }
    
    function claimRewards() external nonReentrant {
        // 安全地处理奖励领取
    }
}`
}
```

#### 5. stake_function (质押功能)
```javascript
{
    name: "质押功能",
    icon: "💧",
    unlockAt: 5,
    message: "你成功执行了质押操作！质押是DeFi收益耕作的第一步，将代币锁定在合约中以获得奖励。",
    code: `function stake(uint256 amount) external nonReentrant {
    require(amount > 0, "Cannot stake 0");
    updateRewards(msg.sender);  // 先更新奖励
    stakingToken.transferFrom(msg.sender, address(this), amount);
    stakers[msg.sender].stakedAmount += amount;
    emit Staked(msg.sender, amount);
}`
}
```

#### 6. unstake_function (取消质押)
```javascript
{
    name: "取消质押",
    icon: "💸",
    unlockAt: 6,
    message: "你成功执行了取消质押操作！用户可以随时取回质押的代币，体现了DeFi的无许可特性。",
    code: `function unstake(uint256 amount) external nonReentrant {
    require(amount > 0, "Cannot unstake 0");
    require(stakers[msg.sender].stakedAmount >= amount, "Not enough staked");
    updateRewards(msg.sender);  // 先更新奖励
    stakers[msg.sender].stakedAmount -= amount;
    stakingToken.transfer(msg.sender, amount);
    emit Unstaked(msg.sender, amount);
}`
}
```

#### 7. claim_rewards (领取奖励)
```javascript
{
    name: "领取奖励",
    icon: "🎁",
    unlockAt: 7,
    message: "你成功领取了奖励！这是收益耕作的核心回报，奖励按质押时间和数量公平分配。",
    code: `function claimRewards() external nonReentrant {
    updateRewards(msg.sender);
    uint256 reward = stakers[msg.sender].rewardDebt;
    require(reward > 0, "No rewards to claim");
    stakers[msg.sender].rewardDebt = 0;
    rewardToken.transfer(msg.sender, reward);
    emit RewardClaimed(msg.sender, reward);
}`
}
```

#### 8. emergency_withdraw (紧急提取)
```javascript
{
    name: "紧急提取",
    icon: "🚨",
    unlockAt: 8,
    message: "你使用了紧急提取功能！在合约出现问题时，用户可以放弃奖励立即取回本金，是重要的安全逃生舱。",
    code: `function emergencyWithdraw() external nonReentrant {
    uint256 amount = stakers[msg.sender].stakedAmount;
    require(amount > 0, "Nothing staked");
    // 清空所有状态（放弃奖励）
    stakers[msg.sender].stakedAmount = 0;
    stakers[msg.sender].rewardDebt = 0;
    stakingToken.transfer(msg.sender, amount);
    emit EmergencyWithdraw(msg.sender, amount);
}`
}
```

---

## 四、交互流程与解锁逻辑

### 4.1 用户操作流程

```
1. 页面加载
   └── 显示初始提示: "🌾 欢迎来到 Day 27！点击架构图了解奖励债务模式！\n📍 提示：重要知识点都在上半部分，建议从上到下依次操作。"

2. 点击架构图
   └── 解锁: reward_debt_pattern
   └── Toast: "✅ 已了解奖励债务模式！🎉 恭喜解锁：奖励债务模式！� 点击合约状态面板了解精度处理！"
   └── KnowledgePanel: "�� 太棒了！你了解了奖励债务模式！这是DeFi收益耕作的核心机制。👉 点击合约状态面板了解精度处理！"

3. 点击合约状态与奖励计算面板
   └── 解锁: staking_token_decimals + time_weighted_calculation（同时解锁）
   └── Toast: "✅ 已了解精度处理和时间加权计算！🎉 恭喜解锁：精度处理、时间加权计算！👉 切换到 Staker 角色开始质押代币！"
   └── KnowledgePanel: "🔢⏱️ 优秀！你掌握了精度处理和时间加权计算！奖励按质押时间和数量线性累积。👉 切换到 Staker 角色开始质押代币！"

4. 切换到 Staker 角色
   └── KnowledgePanel: "👤 你现在是 Staker！👉 在质押面板输入数量并质押代币！"

5. 执行质押操作
   └── 解锁: stake_function
   └── Toast: "✅ 质押成功！🎉 恭喜解锁：质押功能！⏱️ 奖励正在实时累积中！"
   └── KnowledgePanel: "� 优秀！质押是DeFi收益耕作的第一步。⏱️ 奖励正在实时累积中，点击'快进'按钮加速查看效果！"

6. 点击时间快进按钮（可选）
   └── Toast: "⏩ 时间快进1小时！奖励已累积！"
   └── KnowledgePanel: "⏱️ 看到奖励增长了吗？这就是时间加权的魅力！👉 点击领取奖励按钮！"

7. 执行领取奖励操作
   └── 解锁: claim_rewards
   └── Toast: "🎁 奖励领取成功！🎉 恭喜解锁：领取奖励功能！👉 尝试取消质押部分代币！"
   └── KnowledgePanel: "🎁 太棒了！你成功领取了奖励！这是收益耕作的核心回报。👉 尝试取消质押部分代币！"

8. 执行取消质押操作
   └── 解锁: unstake_function
   └── Toast: "💸 取消质押成功！🎉 恭喜解锁：取消质押功能！👉 点击安全防护区了解重入保护！"
   └── KnowledgePanel: "💸 很好！用户可以随时取回质押的代币，体现了DeFi的无许可特性。👉 点击安全防护区了解重入保护！"

9. 点击安全防护区
   └── 解锁: reentrancy_guard
   └── Toast: "🛡️ 已了解重入保护！🎉 恭喜解锁：重入保护机制！👉 尝试紧急提取功能（会放弃奖励）！"
   └── KnowledgePanel: "🛡️ 太棒了！ReentrancyGuard是DeFi安全的基础。👉 尝试紧急提取功能（注意：这会放弃所有奖励）！"

10. 执行紧急提取操作
    └── 解锁: emergency_withdraw
    └── Toast: "🚨 紧急提取成功！🎉 恭喜解锁：紧急提取功能！🎉 恭喜完成 Day 27 学习！"
    └── KnowledgePanel: "🎉 恭喜完成 Day 27 学习！你掌握了收益耕作的所有核心概念！"
```

### 4.2 Owner 操作流程

```
1. 切换到 Owner 角色
   └── 提示: "👑 你现在是 Owner！👉 补充奖励池供 Staker 领取！"

2. 执行补充奖励操作
   └── 提示: "💰 奖励池已补充！👉 切换到 Staker 角色参与质押！"
```

---

## 五、技术实现要点

### 5.1 需要创建的文件

1. **组件文件**: `src/components/days/Day27/YieldFarming.vue`
2. **Composable**: `src/composables/useDay27.js`
3. **days.js 配置**: 添加 Day 27 配置
4. **concepts.js 配置**: 添加 day27ConceptDefinitions 和提示函数
5. **DayContent.vue**: 注册 Day 27 组件
6. **Sidebar.vue**: 添加 Day 27 概念定义支持
7. **KnowledgePanel.vue**: 添加 Day 27 支持
8. **useCurrentDayRealtimeData.js**: 注册 Day 27 realtimeData

### 5.2 核心状态设计 (useDay27.js)

```javascript
// 合约状态
const rewardRatePerSecond = ref(1000)  // 每秒奖励数量
const stakingTokenDecimals = ref(18)   // 质押代币小数位
const rewardPoolBalance = ref(50000)   // 奖励池余额
const totalStaked = ref(0)             // 总质押量

// 用户状态
const stakerInfo = ref({
    stakedAmount: 0,       // 已质押数量
    rewardDebt: 0,         // 累积奖励债务
    lastUpdate: Date.now() // 上次更新时间
})

// 钱包余额
const walletBalances = ref({
    stake: 5000,   // STAKE 代币余额
    reward: 1000   // REWARD 代币余额
})

// 当前角色
const currentRole = ref('staker')  // 'staker' 或 'owner'

// 表单数据
const stakeForm = ref({ amount: '' })
const unstakeForm = ref({ amount: '' })
const refillForm = ref({ amount: '' })

// 事件日志
const events = ref([])
```

### 5.3 核心函数设计

```javascript
// 更新奖励（核心计算函数）
const updateRewards = () => {
    const now = Date.now()
    const timeDiff = Math.floor((now - stakerInfo.value.lastUpdate) / 1000) // 转换为秒
    const rewardMultiplier = 10 ** stakingTokenDecimals.value
    const pendingReward = (timeDiff * rewardRatePerSecond.value * stakerInfo.value.stakedAmount) / rewardMultiplier
    stakerInfo.value.rewardDebt += pendingReward
    stakerInfo.value.lastUpdate = now
}

// 计算待领取奖励（实时预览）
const pendingRewards = computed(() => {
    const now = Date.now()
    const timeDiff = Math.floor((now - stakerInfo.value.lastUpdate) / 1000)
    const rewardMultiplier = 10 ** stakingTokenDecimals.value
    const newReward = (timeDiff * rewardRatePerSecond.value * stakerInfo.value.stakedAmount) / rewardMultiplier
    return stakerInfo.value.rewardDebt + newReward
})

// 质押
const stake = (amount) => {
    updateRewards()  // 先更新奖励
    stakerInfo.value.stakedAmount += amount
    walletBalances.value.stake -= amount
    totalStaked.value += amount
    // 记录事件...
}

// 取消质押
const unstake = (amount) => {
    updateRewards()  // 先更新奖励
    stakerInfo.value.stakedAmount -= amount
    walletBalances.value.stake += amount
    totalStaked.value -= amount
    // 记录事件...
}

// 领取奖励
const claimRewards = () => {
    updateRewards()
    const reward = stakerInfo.value.rewardDebt
    stakerInfo.value.rewardDebt = 0
    walletBalances.value.reward += reward
    rewardPoolBalance.value -= reward
    // 记录事件...
}

// 紧急提取
const emergencyWithdraw = () => {
    const amount = stakerInfo.value.stakedAmount
    walletBalances.value.stake += amount
    totalStaked.value -= amount
    // 清空所有状态（放弃奖励）
    stakerInfo.value.stakedAmount = 0
    stakerInfo.value.rewardDebt = 0
    // 记录事件...
}

// 补充奖励（Owner）
const refillRewards = (amount) => {
    rewardPoolBalance.value += amount
    // 记录事件...
}

// 时间快进（演示用）
const fastForwardTime = (hours) => {
    const milliseconds = hours * 3600 * 1000
    stakerInfo.value.lastUpdate -= milliseconds
    showMessage(`⏩ 时间快进${hours}小时！奖励已累积！`)
}
```

---

## 六、UI 样式设计

### 6.1 颜色主题
- **主色调**: 绿色系（代表收益/增长）#22c55e
- **次色调**: 蓝色系（代表质押/稳定）#3b82f6
- **强调色**: 金色（代表奖励）#f59e0b
- **警告色**: 红色（紧急提取）#ef4444

### 6.2 区块样式
```css
/* 架构区 */
.architecture-section {
    background: linear-gradient(135deg, rgba(34, 197, 94, 0.08) 0%, rgba(59, 130, 246, 0.08) 100%);
    border-color: rgba(34, 197, 94, 0.2);
}

/* 状态面板 */
.status-section {
    background: linear-gradient(135deg, rgba(59, 130, 246, 0.08) 0%, rgba(99, 102, 241, 0.08) 100%);
    border-color: rgba(59, 130, 246, 0.2);
}

/* 奖励计算区 */
.calculation-section {
    background: linear-gradient(135deg, rgba(245, 158, 11, 0.08) 0%, rgba(234, 179, 8, 0.08) 100%);
    border-color: rgba(245, 158, 11, 0.2);
}

/* 安全防护区 */
.security-section {
    background: linear-gradient(135deg, rgba(239, 68, 68, 0.08) 0%, rgba(248, 113, 113, 0.08) 100%);
    border-color: rgba(239, 68, 68, 0.2);
}
```

---

## 七、提示系统设计

### 7.1 getHint() 配置
```javascript
reward_debt_pattern: "📝 下一步操作提示！👉 点击合约状态面板了解精度处理！",
time_weighted_calculation: "⏱️ 下一步操作提示！👉 切换到 Staker 角色开始质押代币！",
staking_token_decimals: "🔢 下一步操作提示！👉 点击奖励计算区了解时间加权计算！",
reentrancy_guard: "🛡️ 下一步操作提示！👉 尝试紧急提取功能（会放弃奖励）！",
stake_function: "💧 下一步操作提示！👉 等待一段时间让奖励累积，然后领取奖励！",
unstake_function: "💸 下一步操作提示！👉 点击安全防护区了解重入保护！",
claim_rewards: "🎁 下一步操作提示！👉 尝试取消质押部分代币！",
emergency_withdraw: "🎉 恭喜完成 Day 27 学习！所有知识点已解锁！"
```

### 7.2 getDay27ExplanationHint() 配置
```javascript
reward_debt_pattern: "📖 奖励债务模式是DeFi收益耕作的核心机制。每个用户的 StakerInfo 结构体记录了已质押数量、累积奖励债务和上次更新时间。通过这种方式，合约可以精确计算每个用户应得的奖励，而无需遍历所有用户。",
time_weighted_calculation: "📖 时间加权计算确保奖励公平分配。公式：新奖励 = 时间差 × 每秒奖励 × 质押数量 / 精度倍数。这种线性累积机制让用户可以随时领取奖励，而不会影响其他用户的收益。",
// ... 其他概念解释
```

---

## 八、完整代码内容

需要在 `days.js` 的 `getFullCode(27)` 中添加：

```javascript
} else if (day === 27) {
    return `// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/v5.0.0/contracts/token/ERC20/IERC20.sol";
import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/v5.0.0/contracts/utils/ReentrancyGuard.sol";
import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/v5.0.0/contracts/utils/math/SafeCast.sol";

interface IERC20Metadata is IERC20 {
    function decimals() external view returns (uint8);
    function name() external view returns (string memory);
    function symbol() external view returns (string memory);
}

contract YieldFarming is ReentrancyGuard {
    using SafeCast for uint256;

    IERC20 public stakingToken;
    IERC20 public rewardToken;
    uint256 public rewardRatePerSecond;
    address public owner;
    uint8 public stakingTokenDecimals;

    struct StakerInfo {
        uint256 stakedAmount;
        uint256 rewardDebt;
        uint256 lastUpdate;
    }

    mapping(address => StakerInfo) public stakers;

    event Staked(address indexed user, uint256 amount);
    event Unstaked(address indexed user, uint256 amount);
    event RewardClaimed(address indexed user, uint256 amount);
    event EmergencyWithdraw(address indexed user, uint256 amount);
    event RewardRefilled(address indexed owner, uint256 amount);

    modifier onlyOwner() {
        require(msg.sender == owner, "Not the owner");
        _;
    }

    constructor(
        address _stakingToken,
        address _rewardToken,
        uint256 _rewardRatePerSecond
    ) {
        stakingToken = IERC20(_stakingToken);
        rewardToken = IERC20(_rewardToken);
        rewardRatePerSecond = _rewardRatePerSecond;
        owner = msg.sender;

        try IERC20Metadata(_stakingToken).decimals() returns (uint8 decimals) {
            stakingTokenDecimals = decimals;
        } catch (bytes memory) {
            stakingTokenDecimals = 18;
        }
    }

    function stake(uint256 amount) external nonReentrant {
        require(amount > 0, "Cannot stake 0");
        updateRewards(msg.sender);
        stakingToken.transferFrom(msg.sender, address(this), amount);
        stakers[msg.sender].stakedAmount += amount;
        emit Staked(msg.sender, amount);
    }

    function unstake(uint256 amount) external nonReentrant {
        require(amount > 0, "Cannot unstake 0");
        require(stakers[msg.sender].stakedAmount >= amount, "Not enough staked");
        updateRewards(msg.sender);
        stakers[msg.sender].stakedAmount -= amount;
        stakingToken.transfer(msg.sender, amount);
        emit Unstaked(msg.sender, amount);
    }

    function claimRewards() external nonReentrant {
        updateRewards(msg.sender);
        uint256 reward = stakers[msg.sender].rewardDebt;
        require(reward > 0, "No rewards to claim");
        require(rewardToken.balanceOf(address(this)) >= reward, "Insufficient reward token balance");
        stakers[msg.sender].rewardDebt = 0;
        rewardToken.transfer(msg.sender, reward);
        emit RewardClaimed(msg.sender, reward);
    }

    function emergencyWithdraw() external nonReentrant {
        uint256 amount = stakers[msg.sender].stakedAmount;
        require(amount > 0, "Nothing staked");
        stakers[msg.sender].stakedAmount = 0;
        stakers[msg.sender].rewardDebt = 0;
        stakers[msg.sender].lastUpdate = block.timestamp;
        stakingToken.transfer(msg.sender, amount);
        emit EmergencyWithdraw(msg.sender, amount);
    }

    function refillRewards(uint256 amount) external onlyOwner {
        rewardToken.transferFrom(msg.sender, address(this), amount);
        emit RewardRefilled(msg.sender, amount);
    }

    function updateRewards(address user) internal {
        StakerInfo storage staker = stakers[user];
        if (staker.stakedAmount > 0) {
            uint256 timeDiff = block.timestamp - staker.lastUpdate;
            uint256 rewardMultiplier = 10 ** stakingTokenDecimals;
            uint256 pendingReward = (timeDiff * rewardRatePerSecond * staker.stakedAmount) / rewardMultiplier;
            staker.rewardDebt += pendingReward;
        }
        staker.lastUpdate = block.timestamp;
    }

    function pendingRewards(address user) external view returns (uint256) {
        StakerInfo memory staker = stakers[user];
        uint256 pendingReward = staker.rewardDebt;
        if (staker.stakedAmount > 0) {
            uint256 timeDiff = block.timestamp - staker.lastUpdate;
            uint256 rewardMultiplier = 10 ** stakingTokenDecimals;
            pendingReward += (timeDiff * rewardRatePerSecond * staker.stakedAmount) / rewardMultiplier;
        }
        return pendingReward;
    }

    function getStakingTokenDecimals() external view returns (uint8) {
        return stakingTokenDecimals;
    }
}`;
}
```

---

## 九、检查清单

### 9.1 开发前准备
- [ ] 确认 day27-YieldFarming.sol 合约代码完整
- [ ] 确认 days_plan 目录存在
- [ ] 确认项目依赖已安装

### 9.2 开发检查清单
- [ ] `src/data/days.js` - 添加 Day 27 配置（包含 title, subtitle, concepts）
- [ ] `src/data/days.js` - 添加 getFullCode(27) 完整代码
- [ ] `src/data/concepts.js` - 添加 day27ConceptDefinitions（8个概念）
- [ ] `src/data/concepts.js` - 在 getHint() 中添加 Day 27 所有概念提示
- [ ] `src/data/concepts.js` - 添加 getDay27ExplanationHint() 函数
- [ ] `src/components/days/Day27/YieldFarming.vue` - 创建组件
- [ ] `src/composables/useDay27.js` - 创建 composable
- [ ] `src/components/DayContent.vue` - 注册 Day 27 组件
- [ ] `src/components/Sidebar.vue` - 添加 Day 27 概念定义支持
- [ ] `src/components/shared/KnowledgePanel.vue` - 添加 Day 27 支持
- [ ] `src/composables/useCurrentDayRealtimeData.js` - 注册 Day 27 realtimeData
- [ ] `src/data/concepts.js` - 添加 Day 27 Gas 估算（如需要）

### 9.3 功能验证
- [ ] 架构图点击解锁 reward_debt_pattern
- [ ] 合约状态与奖励计算面板点击同时解锁 staking_token_decimals + time_weighted_calculation
- [ ] 安全防护区点击解锁 reentrancy_guard
- [ ] 质押操作解锁 stake_function
- [ ] 取消质押操作解锁 unstake_function
- [ ] 领取奖励操作解锁 claim_rewards
- [ ] 紧急提取操作解锁 emergency_withdraw
- [ ] 角色切换正常（Staker/Owner）
- [ ] 标签页切换正常（质押/取消质押/领取奖励）
- [ ] 奖励实时增长显示正常
- [ ] 时间快进按钮正常工作
- [ ] 事件日志记录正常
- [ ] KnowledgePanel 显示正常
- [ ] 完整代码弹窗正常

### 9.4 规范符合性检查
- [ ] 布局符合Day 22+标准双栏布局规范（左栏交互区 + 右栏知识面板）
- [ ] 使用Grid布局系统（非Flexbox）
- [ ] 区块数量控制在6-7个（已优化：架构图→状态面板→角色切换→操作标签页→安全防护→Owner操作→用户资产→事件日志）
- [ ] 可点击解锁区块放在前面，只读区块（用户资产、事件日志）放在最后
- [ ] 正确传递KnowledgePanel的所有props（:unlocked-concepts, :progress-percentage, :full-code, :custom-hint）
- [ ] 符合提示系统双重提示规范（Toast + KnowledgePanel）
- [ ] 每个操作都有showMessage() Toast提示和currentHint.value更新
- [ ] 在Sidebar.vue中添加Day 27概念定义支持
- [ ] 在KnowledgePanel.vue中添加Day 27支持（getDay27Hint, getDay27ExplanationHint）
- [ ] 在useCurrentDayRealtimeData.js中注册Day 27
- [ ] 所有操作函数都记录日志（logStore.addLog）
- [ ] 添加时间快进机制（fastForwardTime函数）

### 9.5 易遗漏配置提醒
根据《AI_PROMPT_GUIDE.md》，Day 27开发时极易遗漏：

❌ **KnowledgePanel props不完整** → 导致页面崩溃
```vue
<!-- ✅ 必须传递所有props -->
<KnowledgePanel
  v-if="unlockedConcepts.length > 0"
  :current-day="27"
  :unlocked-concepts="unlockedConcepts"
  :progress-percentage="progressPercentage"
  :full-code="fullCode"
  :custom-hint="currentHint"
  @show-full-code="showFullCode = true"
/>
```

❌ **Sidebar.vue未添加Day 27支持** → 右栏emoji不显示
```javascript
// Sidebar.vue
import { ..., day26ConceptDefinitions, day27ConceptDefinitions } from '../data/concepts'

} else if (props.currentDay === 27) {
  conceptDefs = day27ConceptDefinitions
}
```

❌ **缺少Gas估算** → 实时数据显示异常
```javascript
// concepts.js
export const gasEstimates = {
  // ... 其他Day
  stake27: 45000,
  unstake27: 50000,
  claimRewards27: 40000,
  emergencyWithdraw27: 35000,
  refillRewards27: 40000
}
```

❌ **按钮缺少反馈** → 用户觉得"点不动"
```javascript
// ✅ 每个操作都要有双重反馈
const handleStake = (amount) => {
  // 执行操作...
  
  // Toast提示（3秒后消失）
  showMessage('✅ 质押成功！🎉 恭喜解锁：质押功能！')
  
  // KnowledgePanel提示（持久显示）
  currentHint.value = '💧 优秀！质押是DeFi收益耕作的第一步。👉 下一步引导'
  
  // 解锁概念
  unlockConcept('stake_function')
}
```

---

## 十、参考文档

1. **合约源码**: `d:\BaiduSyncdisk\study\2602Hersolidity\WWW6.5\Tenlossiby\day27-YieldFarming.sol`
2. **开发指南**: `d:\BaiduSyncdisk\study\2602Hersolidity\WWW6.5\Tenlossiby\GUI\.trae\documents\AI_PROMPT_GUIDE.md`
3. **历史参考**: `d:\BaiduSyncdisk\study\2602Hersolidity\WWW6.5\Tenlossiby\GUI\.trae\documents\DAY_HISTORY.md`
4. **布局规范**: `d:\BaiduSyncdisk\study\2602Hersolidity\WWW6.5\Tenlossiby\GUI\.trae\documents\Day组件统一布局规范.md`
5. **提示系统**: `d:\BaiduSyncdisk\study\2602Hersolidity\WWW6.5\Tenlossiby\GUI\.trae\documents\提示系统设计规范.md`

---

*文档结束*

---

Day 27 YieldFarming 方案 Review
我已经通读了所有规范文档，现在从以下几个维度review方案：

✅ 优点
1. 合约功能分析准确
奖励债务模式、时间加权计算、ReentrancyGuard、精度处理等技术特点提取准确
核心函数设计符合合约逻辑
2. 知识点设计合理（8个概念）

✅ reward_debt_pattern - 奖励债务模式（核心机制）
✅ time_weighted_calculation - 时间加权计算  
✅ staking_token_decimals - 精度处理
✅ reentrancy_guard - 重入保护
✅ stake_function / unstake_function / claim_rewards / emergency_withdraw
概念数量适中（8个）
覆盖核心知识点
解锁时机明确
3. 布局结构符合规范
采用Day 22+标准双栏布局 ✅
使用Grid布局系统 ✅
遵循"就近原则"（操作标签页嵌入） ✅
4. 技术实现设计完整
useDay27.js 状态设计清晰
pendingRewards 计算属性实现实时奖励显示
updateRewards() 核心计算逻辑正确
⚠️ 建议优化
1. 区块数量可能过多（9个区块）
当前区块顺序：


1. 收益耕作架构可视化（点击解锁）
2. 合约状态面板（点击解锁）
3. 角色切换区
4. Staker操作区（标签页）
5. 用户资产面板  ⚠️
6. 奖励计算可视化（点击解锁）
7. 安全防护区（点击解锁）
8. Owner操作区
9. 事件日志  ⚠️
问题：

Day 23-26的区块数通常在5-7个
9个区块可能导致页面过长
用户需要滚动很多才能看到所有内容
建议：

合并方案：将"合约状态面板"和"奖励计算可视化"合并为一个区块

上半部分：合约状态（每秒奖励、小数位等）
下半部分：实时奖励计算演示
调整顺序：将只读区块放到最后


[可点击解锁区块] → [角色切换] → [操作标签页] → [用户资产（只读）] → [事件日志（只读）]
参考Day 23：Day 23也有用户资产面板，但作为紧凑的overview卡片，不占太多空间

2. 知识点解锁顺序建议微调
当前顺序：


reward_debt_pattern → staking_token_decimals → time_weighted_calculation 
→ stake_function → claim_rewards → unstake_function 
→ reentrancy_guard → emergency_withdraw
可能的问题：

用户需要"向下滚动"很多才能完成所有解锁
reentrancy_guard放在比较后面，但安全机制是重要知识点
建议：
参考Day 25的优化，在提示中明确引导用户：


// 初始提示
"🌾 欢迎来到 Day 27！点击架构图了解奖励债务模式！\n📍 提示：重要知识点都在上半部分，建议从上到下依次操作。"

// 第2步点击后
"📝 已了解奖励债务模式！👉 点击合约状态面板了解精度处理！\n📍 向下滚动 ↓"
3. 实时奖励显示需要时间加速机制
当前设计：


const pendingRewards = computed(() => {
  const now = Date.now()
  const timeDiff = Math.floor((now - stakerInfo.value.lastUpdate) / 1000)
  // 实时计算
})
问题：

用户需要等待很长时间才能看到奖励增长
可能觉得"奖励没变化"而困惑
建议：
添加"时间快进"按钮（参考Day 18的冷却期机制）：


<div class="reward-preview">
  <div class="reward-amount">待领取: {{ pendingRewards }} REWARD</div>
  <button class="day-action-btn cyan small" @click="fastForwardTime">
    ⏩ 快进1小时
  </button>
</div>

// useDay27.js
const fastForwardTime = () => {
  stakerInfo.value.lastUpdate -= 3600 * 1000  // 减去1小时
  showMessage('⏩ 时间快进1小时！奖励已累积！')
}
4. 提示系统需符合双重提示规范
当前方案只写了 getHint() 配置

根据《提示系统设计规范.md》，还需要：

Toast提示（小弹窗，3秒后消失）
KnowledgePanel提示（持久显示）
建议补充：


// 点击架构图解锁
unlockConcept('reward_debt_pattern')
showMessage('✅ 已了解奖励债务模式！🎉 恭喜解锁：奖励债务模式！👉 点击合约状态面板了解精度处理！')
currentHint.value = '📝 太棒了！你了解了奖励债务模式！👉 点击合约状态面板了解精度处理！'

// 质押成功（解锁stake_function）
unlockConcept('stake_function')
showMessage('✅ 质押成功！🎉 恭喜解锁：质押功能！⏱️ 等待一段时间让奖励累积！')
currentHint.value = '💧 优秀！质押是DeFi收益耕作的第一步。⏱️ 奖励正在实时累积中，点击"快进"查看效果！'
5. 检查清单补充
当前检查清单已经比较完整，建议补充：


### 9.4 规范符合性检查
- [ ] 布局符合Day 22+标准双栏布局规范
- [ ] 使用Grid布局系统（非Flexbox）
- [ ] 正确传递KnowledgePanel的所有props（:unlocked-concepts, :progress-percentage等）
- [ ] 符合提示系统双重提示规范（Toast + KnowledgePanel）
- [ ] 在Sidebar.vue中添加Day 27概念定义支持
- [ ] 在useCurrentDayRealtimeData.js中注册Day 27
- [ ] 所有操作函数都记录日志
📋 易遗漏配置提醒
根据《AI_PROMPT_GUIDE.md》，Day 27开发时极易遗漏：

❌ KnowledgePanel props不完整 → 导致页面崩溃


<!-- ✅ 必须传递所有props -->
<KnowledgePanel
  v-if="unlockedConcepts.length > 0"
  :current-day="27"
  :unlocked-concepts="unlockedConcepts"
  :progress-percentage="progressPercentage"
  :full-code="fullCode"
  :custom-hint="currentHint"
  @show-full-code="showFullCode = true"
/>
❌ Sidebar.vue未添加Day 27支持 → 右栏emoji不显示


// Sidebar.vue
import { ..., day26ConceptDefinitions, day27ConceptDefinitions } from '../data/concepts'

} else if (props.currentDay === 27) {
  conceptDefs = day27ConceptDefinitions
}
❌ 缺少Gas估算 → 实时数据显示异常


// concepts.js
export const gasEstimates = {
  // ... 其他Day
  stake27: 45000,
  unstake27: 50000,
  claimRewards27: 40000,
  emergencyWithdraw27: 35000,
  refillRewards27: 40000
}
❌ 按钮缺少反馈 → 用户觉得"点不动"


// ✅ 每个操作都要有反馈
const stake = (amount) => {
  updateRewards()
  // ... 执行操作
  
  showMessage('✅ 质押成功！🎉 恭喜解锁：质押功能！')
  unlockConcept('stake_function')
  currentHint.value = '💧 质押成功！⏱️ 等待奖励累积！'
}
🎯 总体评价
方案质量：⭐⭐⭐⭐☆ (4/5)

优点：

✅ 合约分析准确
✅ 知识点设计合理
✅ 技术实现完整
✅ 符合大部分规范
需要改进：

⚠️ 区块数量建议优化（9个→6-7个）
⚠️ 添加时间快进机制
⚠️ 补充双重提示示例
⚠️ 明确添加"规范符合性检查"
建议：

合并"合约状态面板"和"奖励计算可视化"
将只读区块（用户资产、事件日志）移到最后
添加"时间快进"按钮增强用户体验
补充完整的双重提示示例
开发时严格遵循检查清单，特别是Sidebar.vue和KnowledgePanel props
总结： 方案整体设计良好，符合项目规范。只需在区块数量、用户反馈机制和提示系统上做少量优化，即可开始实施。开发时特别注意《AI_PROMPT_GUIDE.md》中的易遗漏配置。