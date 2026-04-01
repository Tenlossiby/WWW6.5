# Day 25 - AutomatedMarketMaker 自动化做市商 学习互动页面规划

---

## 1. 合约功能分析

### 1.1 核心功能
- **AMM (Automated Market Maker)**: 自动化做市商，使用算法定价而非订单簿
- **恒定乘积公式**: x * y = k，保持两种代币储备的乘积不变
- **流动性池**: 用户提供两种代币形成交易对，获得LP代币作为份额证明
- **代币交换**: 用户可以用一种代币交换另一种，支付0.3%手续费
- **流动性管理**: 添加流动性（获得LP代币）和移除流动性（销毁LP代币取回代币）
- **价格发现**: 通过储备比例自动确定代币相对价格

### 1.2 数学原理
```
恒定乘积公式: x * y = k

价格计算: Price = reserveA / reserveB

交换公式（含0.3%手续费）:
amountOut = (reserveOut * amountInWithFee) / (reserveIn + amountInWithFee)
其中: amountInWithFee = amountIn * 997 / 1000

LP代币计算:
- 首次添加: liquidity = sqrt(amountA * amountB)
- 后续添加: liquidity = min(amountA * totalSupply / reserveA, amountB * totalSupply / reserveB)
```

### 1.3 状态流转
```
添加流动性:
用户 approve AMM → addLiquidity() → 铸造LP代币 → 更新储备量

代币交换 (A→B):
用户 approve tokenA → swapAforB() → 计算amountBOut → 转账 → 更新储备量

移除流动性:
用户持有LP代币 → removeLiquidity() → 销毁LP代币 → 按比例返还tokenA+tokenB
```

### 1.4 关键知识点（设计为8个）
1. **constant_product_formula** - 恒定乘积公式（AMM核心算法）
2. **liquidity_pool** - 流动性池机制
3. **lp_token** - LP代币与份额证明
4. **price_discovery** - 自动价格发现
5. **swap_mechanism** - 代币交换机制
6. **fee_structure** - 手续费结构（0.3%）
7. **sqrt_calculation** - 平方根计算（牛顿迭代法）
8. **slippage_protection** - 滑点保护机制

---

## 2. 页面整体结构

```
┌─────────────────────────────────────────────────────────────────────────────┐
│  Day 25 - 自动化做市商 / Automated Market Maker                             │
│  知识点: constant_product_formula, liquidity_pool, lp_token...              │
├─────────────────────────────────────────────────────────────────────────────┤
│  ┌─────────────────────────────┐  ┌─────────────────────────────────────┐  │
│  │      交互操作区              │  │        知识点面板                   │  │
│  │                             │  │                                     │  │
│  │  📊 AMM架构可视化(可点击)    │  │  [知识点解锁进度]                   │  │
│  │  💰 流动性池状态面板         │  │  • constant_product_formula ✓       │  │
│  │  📈 价格曲线可视化           │  │  • liquidity_pool ✓                 │  │
│  │  🎮 操作标签页               │  │  • lp_token ✓                       │  │
│  │     - 添加流动性             │  │  • price_discovery ✓                │  │
│  │     - 代币交换               │  │  • swap_mechanism ✓                 │  │
│  │     - 移除流动性             │  │  • fee_structure ✓                  │  │
│  │  📜 交易历史/事件日志        │  │  • sqrt_calculation ✓               │  │
│  │  🛡️ 滑点保护说明             │  │  • slippage_protection ✓            │  │
│  │                             │  │                                     │  │
│  └─────────────────────────────┘  └─────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────────────────────┘
```

### 2.1 布局规范（重要！）

```vue
<!-- ✅ 正确的布局结构 - 使用 left-column 而非 center-column -->
<div class="content-layout" :class="{ 'single-column': unlockedConcepts.length === 0 }">
  <!-- 左栏：交互操作区 -->
  <div class="left-column">
    <!-- 交互内容 -->
  </div>
  
  <!-- 右栏：知识点面板（容器始终渲染） -->
  <div class="right-column">
    <KnowledgePanel 
      v-if="unlockedConcepts.length > 0"
      :current-day="25"
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
  :code="fullCode"
  @close="showFullCode = false"
/>
```

---

## 3. 页面布局详情

### 3.1 顶部 - AMM架构可视化（解锁知识点: constant_product_formula）

```
┌─────────────────────────────────────────────────────────────────────────────┐
│  📊 AMM架构 - 点击了解恒定乘积公式                                          │
│  ─────────────────────────────────────────────────────────────────────────  │
│                                                                             │
│    ┌─────────────────────────────────────────────────────────────────┐     │
│    │                                                                 │     │
│    │   Token A储备: 1000      x * y = k = 1,000,000                 │     │
│    │         ↓                    ↑                                │     │
│    │   ┌─────────┐    AMM合约    ┌─────────┐                       │     │
│    │   │  🔵 A   │◀─────────────▶│  🟢 B   │                       │     │
│    │   └─────────┘   流动性池    └─────────┘                       │     │
│    │         ↓                    ↑                                │     │
│    │   Token B储备: 1000                                         │     │
│    │                                                                 │     │
│    │   💡 价格 = reserveA / reserveB = 1.0                         │     │
│    │                                                                 │     │
│    └─────────────────────────────────────────────────────────────────┘     │
│                                                                             │
│   用户 → 存入A+B → 获得LP代币 → 随时可赎回原始代币                          │
└─────────────────────────────────────────────────────────────────────────────┘
```

**解锁逻辑:**
- 点击架构图 → 解锁 `constant_product_formula`
- **Toast提示**: `✅ 已查看AMM架构！🎉 恭喜解锁：恒定乘积公式！👉 查看流动性池状态！`
- **KnowledgePanel提示**: `🔢 太棒了！你了解了恒定乘积公式 x * y = k！这是AMM的核心数学原理。当用户用A换B时，A增加B减少，但乘积保持不变。👉 查看流动性池状态面板！`

---

### 3.2 流动性池状态面板（解锁知识点: liquidity_pool）

```
┌─────────────────────────────────────────────────────────────────────────────┐
│  💰 流动性池状态（点击查看流动性池机制）                                    │
│  ─────────────────────────────────────────────────────────────────────────  │
│                                                                             │
│   ┌─────────────────┐     ┌─────────────────┐     ┌─────────────────┐      │
│   │   🔵 Token A    │     │    LP代币总供应  │     │   🟢 Token B    │      │
│   │                 │     │                 │     │                 │      │
│   │   1000.00       │◀───▶│    1000.00      │◀───▶│   1000.00       │      │
│   │                 │     │                 │     │                 │      │
│   │   储备量        │     │    流动性份额   │     │   储备量        │      │
│   └─────────────────┘     └─────────────────┘     └─────────────────┘      │
│                                                                             │
│   当前价格: 1.00 A/B                                                        │
│   流动性深度: 高 ✓                                                          │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

**解锁逻辑:**
- 点击流动性池面板 → 解锁 `liquidity_pool`
- **Toast提示**: `✅ 已查看流动性池状态！🎉 恭喜解锁：流动性池机制！👉 切换到「添加流动性」标签页！`
- **KnowledgePanel提示**: `🏊 你了解了流动性池机制！流动性提供者（LP）将两种代币按当前价格比例存入池中，形成交易深度。储备量越大，大额交易对价格影响越小。👉 切换到「添加流动性」标签页体验！`

---

### 3.3 价格曲线可视化（解锁知识点: price_discovery）

```
┌─────────────────────────────────────────────────────────────────────────────┐
│  📈 价格曲线 - 点击了解自动价格发现                                         │
│  ─────────────────────────────────────────────────────────────────────────  │
│                                                                             │
│   Price                                                                     │
│     ↑                                                                       │
│  10 │                              ╭──────                                 │
│     │                          ╭───╯                                       │
│   5 │                      ╭───╯                                           │
│     │                  ╭───╯                                               │
│   2 │              ╭───╯                                                   │
│     │          ╭───╯                                                       │
│   1 │──────╭───╯                                                           │
│     │  ╭───╯                                                               │
│  0.5│──╯                                                                   │
│     └────┬────┬────┬────┬────┬────┬────┬────┬────┬────→ Token A Amount    │
│           0   200  400  600  800  1000 1200 1400 1600                       │
│                                                                             │
│   💡 价格由储备比例决定：Price = reserveA / reserveB                        │
│   买入A越多，A价格越高，B价格越低                                           │
└─────────────────────────────────────────────────────────────────────────────┘
```

**解锁逻辑:**
- 点击价格曲线图 → 解锁 `price_discovery`
- **Toast提示**: `✅ 已查看价格曲线！🎉 恭喜解锁：自动价格发现！👉 添加流动性获得LP代币！`
- **KnowledgePanel提示**: `📊 你了解了自动价格发现机制！AMM不需要买卖订单簿，价格完全由两种代币的储备比例决定。当用户大量买入A时，A变贵B变便宜，市场自动调节。👉 添加流动性获得LP代币！`

---

### 3.4 操作标签页

```
┌─────────────────────────────────────────────────────────────────────────────┐
│  🎮 操作区                                                                  │
│  ─────────────────────────────────────────────────────────────────────────  │
│                                                                             │
│  [💧 添加流动性] [🔄 代币交换] [💸 移除流动性]                              │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

#### 标签页1: 添加流动性（解锁知识点: lp_token + sqrt_calculation）

```
┌─────────────────────────────────────────────────────────────────────────────┐
│  💧 添加流动性                                                              │
│  ─────────────────────────────────────────────────────────────────────────  │
│                                                                             │
│   你的钱包余额:                                                             │
│   🔵 Token A: 500.00    🟢 Token B: 500.00                                  │
│                                                                             │
│   ─────────────────────────────────────────────────────────────────────     │
│                                                                             │
│   添加数量:                                                                 │
│   Token A: [________] (当前比例需要等量B)                                   │
│   Token B: [________] (自动计算或手动输入)                                  │
│                                                                             │
│   预计获得LP代币: 0.00                                                      │
│   (首次添加: √amountA * amountB)                                            │
│                                                                             │
│   [💧 添加流动性 / Add Liquidity]                                           │
│                                                                             │
│   💡 提示: 首次添加决定初始价格，后续添加需按当前比例                         │
└─────────────────────────────────────────────────────────────────────────────┘
```

**解锁逻辑:**
- 首次成功添加流动性 → 同时解锁 `lp_token` 和 `sqrt_calculation`
- **Toast提示**: `✅ 添加流动性成功！🎉 恭喜解锁：LP代币与平方根计算！👉 切换到「代币交换」标签页！`
- **KnowledgePanel提示**: `🎫 太棒了！你了解了LP代币和平方根计算！首次添加流动性时，LP代币数量 = √(amountA * amountB)，这是几何平均数。LP代币是你份额的证明，可以随时赎回原始代币。👉 尝试代币交换功能！`

#### 标签页2: 代币交换（解锁知识点: swap_mechanism + fee_structure）

```
┌─────────────────────────────────────────────────────────────────────────────┐
│  🔄 代币交换                                                                │
│  ─────────────────────────────────────────────────────────────────────────  │
│                                                                             │
│   你的钱包余额:                                                             │
│   🔵 Token A: 500.00    🟢 Token B: 500.00                                  │
│                                                                             │
│   ─────────────────────────────────────────────────────────────────────     │
│                                                                             │
│   交换方向: [🔵 A → 🟢 B ▼]                                                 │
│                                                                             │
│   输入数量:                                                                 │
│   支付 Token A: [________]                                                  │
│                                                                             │
│   预计获得 Token B: 0.00                                                    │
│   价格影响: 0.00%                                                           │
│   手续费 (0.3%): 0.00 Token A                                               │
│                                                                             │
│   最小接收量 (滑点保护): [________] Token B                                 │
│                                                                             │
│   [🔄 交换 / Swap]                                                          │
│                                                                             │
│   💡 恒定乘积公式: amountOut = (reserveOut * amountInWithFee) /             │
│                   (reserveIn + amountInWithFee)                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

**解锁逻辑:**
- 首次成功交换代币 → 同时解锁 `swap_mechanism` 和 `fee_structure`
- **Toast提示**: `✅ 交换成功！🎉 恭喜解锁：交换机制与手续费结构！👉 查看滑点保护说明！`
- **KnowledgePanel提示**: `🔄 你了解了代币交换机制和手续费结构！交换使用恒定乘积公式计算输出量，0.3%手续费归流动性提供者所有。价格影响取决于交易规模相对于池子深度的比例。👉 查看滑点保护说明！`

#### 标签页3: 移除流动性（解锁知识点: slippage_protection）

```
┌─────────────────────────────────────────────────────────────────────────────┐
│  💸 移除流动性                                                              │
│  ─────────────────────────────────────────────────────────────────────────  │
│                                                                             │
│   你的LP代币余额: 100.00                                                    │
│   占总流动性比例: 10.00%                                                    │
│                                                                             │
│   ─────────────────────────────────────────────────────────────────────     │
│                                                                             │
│   移除数量:                                                                 │
│   LP代币: [________] [最大]                                                 │
│                                                                             │
│   预计获得:                                                                 │
│   🔵 Token A: 0.00                                                          │
│   🟢 Token B: 0.00                                                          │
│                                                                             │
│   [💸 移除流动性 / Remove Liquidity]                                        │
│                                                                             │
│   ⚠️ 注意: 移除流动性可能面临无常损失，请确保了解风险                         │
└─────────────────────────────────────────────────────────────────────────────┘
```

**移除流动性后解锁逻辑:**
- 成功移除流动性后，引导用户了解滑点保护
- **Toast提示**: `✅ 移除流动性成功！你已按比例赎回Token A和Token B。👉 点击滑点保护说明了解重要安全机制！`

---

### 3.5 滑点保护说明区（解锁知识点: slippage_protection）

```
┌─────────────────────────────────────────────────────────────────────────────┐
│  🛡️ 滑点保护机制（点击查看）                                                │
│  ─────────────────────────────────────────────────────────────────────────  │
│                                                                             │
│   什么是滑点？                                                              │
│   ─────────────────────────────────────────────────────────────────────     │
│   滑点是指交易执行价格与预期价格之间的差异。在大额交易中，                   │
│   由于AMM的价格曲线特性，实际成交价格可能与显示价格有较大偏差。               │
│                                                                             │
│   保护机制:                                                                 │
│   ─────────────────────────────────────────────────────────────────────     │
│   require(amountOut >= minAmountOut, "Slippage too high");                  │
│                                                                             │
│   用户设置最小接收量，如果实际输出低于此值，交易回滚保护用户。               │
│                                                                             │
│   示例:                                                                     │
│   • 预期获得: 100 Token B                                                   │
│   • 设置滑点容忍: 1%                                                        │
│   • 最小接收: 99 Token B                                                    │
│   • 如果实际只获得98 Token B → 交易失败，保护用户                           │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

**解锁逻辑:**
- 点击滑点保护说明区 → 解锁 `slippage_protection`
- **Toast提示**: `✅ 已了解滑点保护！🎉 恭喜解锁：滑点保护机制！👉 查看完整代码回顾所有知识点！`
- **KnowledgePanel提示**: `🛡️ 你了解了滑点保护机制！大额交易可能因价格曲线产生意外滑点，minAmountOut参数确保用户不会以不满意的价格成交。如果实际输出低于设定值，交易会回滚保护用户利益。👉 查看完整代码回顾所有知识点！`

---

### 3.6 交易历史/事件日志

```
┌─────────────────────────────────────────────────────────────────────────────┐
│  📜 交易历史                                                                │
│  ─────────────────────────────────────────────────────────────────────────  │
│                                                                             │
│   [2024-01-15 10:30:00] 💧 添加流动性                                       │
│   └─ 存入: 100 A + 100 B, 获得: 100 LP代币                                  │
│                                                                             │
│   [2024-01-15 10:32:00] 🔄 代币交换                                         │
│   └─ 支付: 10 A, 获得: 9.09 B, 手续费: 0.03 A                               │
│                                                                             │
│   [2024-01-15 10:35:00] 💸 移除流动性                                       │
│   └─ 销毁: 50 LP代币, 获得: 55 A + 45 B                                     │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## 4. 知识点解锁流程设计

### 4.1 解锁顺序图

```
阶段1: 探索AMM概念
┌─────────────┐    ┌─────────────┐    ┌─────────────┐
│ 点击架构图  │───▶│ 点击池面板  │───▶│ 点击价格曲线│
└─────────────┘    └─────────────┘    └─────────────┘
       │                  │                  │
       ▼                  ▼                  ▼
 constant_product    liquidity_pool    price_discovery
    _formula

阶段2: 实践操作
┌─────────────┐    ┌─────────────┐    ┌─────────────┐
│ 添加流动性  │───▶│ 代币交换    │───▶│ 移除流动性  │
└─────────────┘    └─────────────┘    └─────────────┘
       │                  │                  │
       ▼                  ▼                  ▼
lp_token +        swap_mechanism +    (引导到滑点保护)
sqrt_calculation  fee_structure

阶段3: 安全机制
┌─────────────┐
│ 滑点保护说明│
└─────────────┘
       │
       ▼
slippage_protection
```

### 4.2 解锁条件详细说明

| 知识点 | 解锁条件 | Toast提示 | KnowledgePanel提示 |
|--------|----------|-----------|-------------------|
| constant_product_formula | 点击AMM架构图 | ✅ 已查看AMM架构！🎉 恭喜解锁：恒定乘积公式！👉 查看流动性池状态！ | 🔢 太棒了！你了解了恒定乘积公式 x * y = k！这是AMM的核心数学原理。当用户用A换B时，A增加B减少，但乘积保持不变。👉 查看流动性池状态面板！ |
| liquidity_pool | 点击流动性池状态面板 | ✅ 已查看流动性池状态！🎉 恭喜解锁：流动性池机制！👉 切换到「添加流动性」标签页！ | 🏊 你了解了流动性池机制！流动性提供者（LP）将两种代币按当前价格比例存入池中，形成交易深度。储备量越大，大额交易对价格影响越小。👉 切换到「添加流动性」标签页体验！ |
| price_discovery | 点击价格曲线图 | ✅ 已查看价格曲线！🎉 恭喜解锁：自动价格发现！👉 添加流动性获得LP代币！ | 📊 你了解了自动价格发现机制！AMM不需要买卖订单簿，价格完全由两种代币的储备比例决定。当用户大量买入A时，A变贵B变便宜，市场自动调节。👉 添加流动性获得LP代币！ |
| lp_token + sqrt_calculation | 首次成功添加流动性 | ✅ 添加流动性成功！🎉 恭喜解锁：LP代币与平方根计算！👉 切换到「代币交换」标签页！ | 🎫 太棒了！你了解了LP代币和平方根计算！首次添加流动性时，LP代币数量 = √(amountA * amountB)，这是几何平均数。LP代币是你份额的证明，可以随时赎回原始代币。👉 尝试代币交换功能！ |
| swap_mechanism + fee_structure | 首次成功代币交换 | ✅ 交换成功！🎉 恭喜解锁：交换机制与手续费结构！👉 查看滑点保护说明！ | 🔄 你了解了代币交换机制和手续费结构！交换使用恒定乘积公式计算输出量，0.3%手续费归流动性提供者所有。价格影响取决于交易规模相对于池子深度的比例。👉 查看滑点保护说明！ |
| slippage_protection | 点击滑点保护说明区 | ✅ 已了解滑点保护！🎉 恭喜解锁：滑点保护机制！👉 查看完整代码回顾所有知识点！ | 🛡️ 你了解了滑点保护机制！大额交易可能因价格曲线产生意外滑点，minAmountOut参数确保用户不会以不满意的价格成交。如果实际输出低于设定值，交易会回滚保护用户利益。👉 查看完整代码回顾所有知识点！ |

---

## 5. days.js 配置

```javascript
25: {
    title: "Day 25 - 自动化做市商",
    subtitle: "AMM/AutomatedMarketMaker",
    concepts: [
        "constant_product_formula",
        "liquidity_pool",
        "lp_token",
        "price_discovery",
        "swap_mechanism",
        "fee_structure",
        "sqrt_calculation",
        "slippage_protection"
    ]
}
```

---

## 6. concepts.js 配置

### 6.1 day25ConceptDefinitions

```javascript
export const day25ConceptDefinitions = {
    constant_product_formula: {
        name: "恒定乘积公式",
        icon: "🔢",
        unlockAt: 1,
        message: "你了解了AMM的核心数学原理！",
        code: `// 恒定乘积公式: x * y = k
// x = Token A 储备量
// y = Token B 储备量
// k = 常数（保持不变）

// 交换计算
uint256 amountInWithFee = amountIn * 997 / 1000;
uint256 amountOut = (reserveOut * amountInWithFee) / 
                    (reserveIn + amountInWithFee);`
    },
    liquidity_pool: {
        name: "流动性池",
        icon: "🏊",
        unlockAt: 2,
        message: "你了解了流动性池的运作机制！",
        code: `// 流动性池由两种代币组成
uint256 public reserveA;  // Token A 储备
uint256 public reserveB;  // Token B 储备

// 流动性深度决定价格稳定性
// 储备量越大，大额交易对价格影响越小`
    },
    lp_token: {
        name: "LP代币",
        icon: "🎫",
        unlockAt: 3,
        message: "你获得了LP代币，这是流动性的份额证明！",
        code: `// LP代币代表流动性提供者在池中的份额
// 首次添加: liquidity = sqrt(amountA * amountB)
// 后续添加: liquidity = min(
//     amountA * totalSupply / reserveA,
//     amountB * totalSupply / reserveB
// )`
    },
    price_discovery: {
        name: "自动价格发现",
        icon: "📊",
        unlockAt: 4,
        message: "你了解了AMM如何自动确定代币价格！",
        code: `// 价格由储备比例自动决定
// Price = reserveA / reserveB

// 无需订单簿，无需做市商
// 价格随供需自动调整`
    },
    swap_mechanism: {
        name: "代币交换机制",
        icon: "🔄",
        unlockAt: 5,
        message: "你成功执行了代币交换！",
        code: `function swapAforB(uint256 amountAIn, uint256 minBOut) external {
    uint256 amountAInWithFee = amountAIn * 997 / 1000;
    uint256 amountBOut = reserveB * amountAInWithFee / 
                         (reserveA + amountAInWithFee);
    require(amountBOut >= minBOut, "Slippage too high");
    // ... 执行转账
}`
    },
    fee_structure: {
        name: "手续费结构",
        icon: "💰",
        unlockAt: 6,
        message: "你了解了0.3%手续费如何分配给LP！",
        code: `// 手续费: 0.3% = 997/1000
uint256 amountAInWithFee = amountAIn * 997 / 1000;

// 手续费留在池中，增加k值
// 归所有流动性提供者按比例分享`
    },
    sqrt_calculation: {
        name: "平方根计算",
        icon: "√",
        unlockAt: 7,
        message: "你了解了牛顿迭代法计算平方根！",
        code: `// 牛顿迭代法计算整数平方根
function sqrt(uint256 y) internal pure returns (uint256 z) {
    if (y > 3) {
        z = y;
        uint256 x = y / 2 + 1;
        while (x < z) {
            z = x;
            x = (y / x + x) / 2;
        }
    } else if (y != 0) {
        z = 1;
    }
}`
    },
    slippage_protection: {
        name: "滑点保护",
        icon: "🛡️",
        unlockAt: 8,
        message: "你了解了滑点保护的重要性！",
        code: `// 滑点保护机制
function swapAforB(uint256 amountAIn, uint256 minBOut) external {
    // ... 计算 amountBOut
    require(amountBOut >= minBOut, "Slippage too high");
    // 如果实际输出低于预期，交易回滚保护用户
}`
    }
}
```

### 6.2 getHint() 添加Day 25提示

```javascript
export const getHint = (conceptKey) => {
    const hints = {
        // ... 其他天数提示
        constant_product_formula: "🔢 下一步操作提示！👉 点击查看流动性池状态面板！",
        liquidity_pool: "🏊 下一步操作提示！👉 点击切换到「添加流动性」标签页！",
        lp_token: "🎫 下一步操作提示！👉 点击切换到「代币交换」标签页体验交换！",
        price_discovery: "📊 下一步操作提示！👉 添加流动性获得LP代币！",
        swap_mechanism: "🔄 下一步操作提示！👉 点击查看滑点保护说明！",
        fee_structure: "💰 下一步操作提示！👉 点击查看滑点保护说明！",
        sqrt_calculation: "√ 下一步操作提示！👉 点击查看滑点保护说明！",
        slippage_protection: "🛡️ 下一步操作提示！👉 点击查看完整代码回顾所有知识点！"
    };
    return hints[conceptKey] || "📖 点击其他概念标签查看更多详细解释。";
}
```

### 6.3 getDay25ExplanationHint() 添加

```javascript
export const getDay25ExplanationHint = (conceptKey) => {
    const hints = {
        constant_product_formula: "📖 恒定乘积公式 x * y = k 是AMM的核心算法。当用户交易时，一种代币增加，另一种减少，但乘积保持不变。这确保了池子的平衡和价格的连续性。",
        liquidity_pool: "📖 流动性池是AMM的基础，由流动性提供者存入的代币对组成。池子深度越大，交易滑点越小，价格越稳定。",
        lp_token: "📖 LP代币是流动性份额的证明，使用ERC20标准。首次添加使用几何平均数计算，后续添加按比例分配。",
        price_discovery: "📖 AMM通过储备比例自动定价，无需传统订单簿。价格 = reserveA / reserveB，随交易实时调整。",
        swap_mechanism: "📖 代币交换使用恒定乘积公式计算输出量。先收取手续费，再用剩余金额计算，确保LP获得收益。",
        fee_structure: "📖 0.3%手续费归流动性提供者所有。手续费留在池中增加k值，LP按份额分享收益。",
        sqrt_calculation: "📖 使用牛顿迭代法计算整数平方根。这是一种高效的近似算法，用于首次添加流动性时计算LP代币数量。",
        slippage_protection: "📖 滑点保护是DeFi安全的重要机制。用户设置最小接收量，如果实际输出低于此值，交易回滚保护用户免受大额滑点损失。"
    };
    return hints[conceptKey] || "📖 点击其他概念标签查看更多详细解释。";
}
```

---

## 7. 组件文件结构

```
src/components/days/Day25/
├── AutomatedMarketMaker.vue    # 主组件
└── components/
    ├── AMMArchitecture.vue      # AMM架构可视化
    ├── LiquidityPoolPanel.vue   # 流动性池状态面板
    ├── PriceCurveChart.vue      # 价格曲线可视化
    ├── AddLiquidityTab.vue      # 添加流动性标签页
    ├── SwapTokensTab.vue        # 代币交换标签页
    ├── RemoveLiquidityTab.vue   # 移除流动性标签页
    ├── SlippageProtection.vue   # 滑点保护说明
    └── TransactionHistory.vue   # 交易历史
```

---

## 8. Composable设计 (useDay25.js)

```javascript
// 核心状态
const reserveA = ref(0)           // Token A 储备
const reserveB = ref(0)           // Token B 储备
const totalSupply = ref(0)        // LP代币总供应
const userBalances = ref({        // 用户余额
    tokenA: 1000,
    tokenB: 1000,
    lpToken: 0
})
const transactions = ref([])      // 交易历史

// 核心函数
const addLiquidity = (amountA, amountB) => {
    // 计算LP代币
    let liquidity
    if (totalSupply.value === 0) {
        liquidity = Math.sqrt(amountA * amountB)
    } else {
        liquidity = Math.min(
            amountA * totalSupply.value / reserveA.value,
            amountB * totalSupply.value / reserveB.value
        )
    }
    // 更新状态...
    return { success: true, liquidity, hints: ['lp_token', 'sqrt_calculation'] }
}

const swapAforB = (amountAIn, minBOut) => {
    const amountAInWithFee = amountAIn * 997 / 1000
    const amountBOut = (reserveB.value * amountAInWithFee) / 
                       (reserveA.value + amountAInWithFee)
    if (amountBOut < minBOut) {
        return { success: false, message: 'Slippage too high' }
    }
    // 更新状态...
    return { success: true, amountBOut, hints: ['swap_mechanism', 'fee_structure'] }
}

const removeLiquidity = (liquidity) => {
    const amountAOut = liquidity * reserveA.value / totalSupply.value
    const amountBOut = liquidity * reserveB.value / totalSupply.value
    // 更新状态...
    return { success: true, amountAOut, amountBOut }
}
```

---

## 9. 样式规范

- 使用全局 `.day-action-btn` 类配合颜色变体
- Token A 使用蓝色系 (#3b82f6)
- Token B 使用绿色系 (#22c55e)
- LP代币使用紫色系 (#a855f7)
- 图表使用渐变色彩增强视觉效果
- 响应式布局支持移动端

---

## 10. 易遗漏配置检查清单

### 🔥 基础配置（必须）
- [ ] 在 `days.js` 中添加 Day 25 配置（包含8个concepts和完整合约代码）
- [ ] 在 `concepts.js` 中添加 `day25ConceptDefinitions`（8个概念定义）
- [ ] 在 `getHint()` 函数中添加 Day 25 的所有概念提示
- [ ] 创建 `getDay25ExplanationHint()` 函数
- [ ] 在 `gasEstimates` 中添加 Day 25 的 Gas 估算：
  ```javascript
  // Day 25
  addLiquidity25: 60000,
  swapAforB25: 45000,
  swapBforA25: 45000,
  removeLiquidity25: 50000
  ```

### 🔥 组件配置（必须）
- [ ] 创建 `useDay25.js` composable
- [ ] 创建 `AutomatedMarketMaker.vue` 组件
- [ ] 在 `DayContent.vue` 中注册 Day 25 组件
- [ ] 根元素使用 `class="day-25-content day-content"`
- [ ] 使用 `left-column`（非 `center-column`）

### 🔥 极易遗漏配置（极高频错误！）
- [ ] **Sidebar.vue 配置** - 在 Sidebar.vue 中添加 Day 25 概念定义支持：
  ```javascript
  // 导入
  import { ..., day25ConceptDefinitions } from '../data/concepts'
  
  // 在 if-else 链中添加
  } else if (props.currentDay === 25) {
    conceptDefs = day25ConceptDefinitions
  }
  ```
  **遗漏后果**：右栏"已解锁概念"列表中 emoji 不显示

- [ ] **KnowledgePanel props 传递** - 必须传递所有必需 props：
  ```vue
  <KnowledgePanel
    v-if="unlockedConcepts.length > 0"
    :current-day="25"
    :unlocked-concepts="unlockedConcepts"      <!-- 🔥 必需！ -->
    :progress-percentage="progressPercentage"  <!-- 🔥 必需！ -->
    :full-code="fullCode"
    :custom-hint="currentHint"
    @show-full-code="showFullCode = true"
  />
  ```
  **遗漏后果**：整个左栏不显示，页面崩溃

### 🔥 实时数据配置（必须）
- [ ] 在 `useDay25.js` 中导入 `useOperationLogStore`
- [ ] 每个操作添加 `logStore.addLog()` 调用：
  ```javascript
  logStore.addLog(25, '添加流动性', `存入 ${amountA} A + ${amountB} B`, 'addLiquidity25')
  ```
- [ ] 导出 `realtimeData` 计算属性
- [ ] 在 `useCurrentDayRealtimeData.js` 中注册 Day 25

### 🔥 交互配置（必须）
- [ ] 架构图添加 `@click` 事件解锁 `constant_product_formula`
- [ ] 池面板添加 `@click` 事件解锁 `liquidity_pool`
- [ ] 价格曲线添加 `@click` 事件解锁 `price_discovery`
- [ ] 滑点保护区添加 `@click` 事件解锁 `slippage_protection`
- [ ] 组件中正确传递 `customHint` 给 KnowledgePanel
- [ ] Composable 中操作函数返回对象包含 `hints` 和 `nextStep` 字段

### 🔥 首次进入提示（推荐）
- [ ] 在 `onMounted` 中设置初始提示：
  ```javascript
  onMounted(() => {
    if (unlockedConcepts.value.length === 0) {
      currentHint.value = '👆 欢迎来到 Day 25！点击AMM架构图了解恒定乘积公式！'
    }
  })
  ```

---

## 11. 参考合约代码

完整合约代码来自 `day25-AutomatedMarketMaker.sol`，包含：
- ERC20继承实现LP代币
- addLiquidity() - 添加流动性
- removeLiquidity() - 移除流动性
- swapAforB() / swapBforA() - 双向代币交换
- sqrt() - 牛顿迭代法平方根
- min() - 辅助函数

合约已实现完整的Uniswap V1风格AMM功能，包含0.3%手续费和滑点保护。
