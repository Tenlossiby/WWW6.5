# Day 24 - EnhancedSimpleEscrow 增强版托管合约 学习互动页面规划

---

## 1. 合约功能分析

### 1.1 核心功能
- **托管（Escrow）**: 第三方保管资金，直到条件满足才释放
- **三角色系统**: 买家（Buyer）、卖家（Seller）、仲裁者（Arbiter）
- **状态机管理**: 使用 `enum EscrowState` 管理交易生命周期
- **超时保护**: 买家可在卖家超时时取消交易并取回资金
- **争议仲裁**: 仲裁者可解决买卖双方纠纷
- **协商取消**: 双方同意可取消交易

### 1.2 状态流转
```
AWAITING_PAYMENT → deposit() → AWAITING_DELIVERY
                              ↓
                         cancelMutual()
                              ↓
                         CANCELLED

AWAITING_DELIVERY → confirmDelivery() → COMPLETE
                              ↓
                         raiseDispute()
                              ↓
                         DISPUTED → resolveDispute() → COMPLETE
                              ↓
                         cancelAfterTimeout()
                              ↓
                         CANCELLED
                              ↓
                         cancelMutual()
                              ↓
                         CANCELLED
```

### 1.3 关键知识点（精简为6个）
1. **enum_state_machine** - 枚举与状态机（合并）
2. **immutable_access** - 不可变变量与权限控制（合并）
3. **event_logging** - 事件日志记录
4. **block_timestamp** - 区块时间戳用于超时计算
5. **call_transfer** - 使用call发送ETH
6. **receive_revert** - 接收函数与回滚（合并）

---

## 2. 页面整体结构

```
┌─────────────────────────────────────────────────────────────────────────────┐
│  Day 24 - 增强版托管合约 / Enhanced Simple Escrow                           │
│  知识点: enum_state_machine, immutable_access, event_logging...             │
├─────────────────────────────────────────────────────────────────────────────┤
│  ┌─────────────────────────────┐  ┌─────────────────────────────────────┐  │
│  │      交互操作区              │  │        知识点面板                   │  │
│  │                             │  │                                     │  │
│  │  📊 合约架构可视化(可点击)   │  │  [知识点解锁进度]                   │  │
│  │  🎭 三角色切换栏             │  │  • enum_state_machine ✓             │  │
│  │  📈 状态流转图               │  │  • immutable_access ✓               │  │
│  │  💰 资金流转面板             │  │  • event_logging ✓                  │  │
│  │  🎮 操作区(根据角色/状态变化)│  │  • block_timestamp ✓                │  │
│  │  📜 事件日志                 │  │  • call_transfer ✓                  │  │
│  │  ⏱️ 超时倒计时               │  │  • receive_revert ✓                 │  │
│  │                             │  │                                     │  │
│  └─────────────────────────────┘  └─────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────────────────────┘
```

### 2.1 布局规范（重要！）

```vue
<!-- ✅ 正确的布局结构 -->
<div class="content-layout" :class="{ 'single-column': unlockedConcepts.length === 0 }">
  <!-- 中栏：交互操作区 -->
  <div class="center-column">
    <!-- 交互内容 -->
  </div>
  
  <!-- 右栏：知识点面板（容器始终渲染） -->
  <div class="right-column">
    <KnowledgePanel 
      v-if="unlockedConcepts.length > 0"
      :current-day="24"
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

### 3.1 顶部 - 合约架构可视化（解锁知识点: enum_state_machine）

```
┌─────────────────────────────────────────────────────────────────────────────┐
│  📊 合约架构 - 点击了解状态机设计                                           │
│  ─────────────────────────────────────────────────────────────────────────  │
│                                                                             │
│    ┌─────────┐      ┌──────────────┐      ┌─────────┐                      │
│    │  👤     │      │  🏦          │      │  👤     │                      │
│    │  Buyer  │─────▶│  Escrow      │◀─────│ Seller  │                      │
│    │  买家   │      │  托管合约    │      │  卖家   │                      │
│    └─────────┘      └──────┬───────┘      └─────────┘                      │
│                            │                                               │
│                            ▼                                               │
│                      ┌─────────────┐                                       │
│                      │  ⚖️         │                                       │
│                      │  Arbiter    │                                       │
│                      │  仲裁者     │                                       │
│                      └─────────────┘                                       │
│                                                                             │
│  💡 这是一个三方托管系统，资金由合约保管直到交易完成或取消                   │
└─────────────────────────────────────────────────────────────────────────────┘
```

**解锁逻辑:**
- 点击架构图 → 解锁 `enum_state_machine`
- **Toast提示**: `✅ 已查看合约架构图！🎉 恭喜解锁：枚举与状态机！👉 切换角色体验不同权限！`
- **KnowledgePanel提示**: `🏗️ 太棒了！你了解了托管合约的三方架构！EscrowState枚举定义了5种状态，形成完整的状态机。每个函数都检查当前状态，防止非法操作。👉 切换角色体验不同权限！`

### 3.2 三角色切换栏（参考Day22设计）

```
┌─────────────────────────────────────────────────────────────────────────────┐
│  🎭 当前身份：                                                              │
│  [👤 Buyer] [👤 Seller] [⚖️ Arbiter]                                       │
│                                                                             │
│  当前角色功能：                                                             │
│  • Buyer: 存款、确认收货、发起争议、超时取消                                │
└─────────────────────────────────────────────────────────────────────────────┘
```

**切换角色提示:**
- **Toast**: `🎭 已切换到 Buyer 角色！可以执行存款、确认收货等操作。`
- **功能说明**: 根据角色显示可操作的功能列表

### 3.3 状态流转图（简化版）

```
┌─────────────────────────────────────────────────────────────────────────────┐
│  📈 当前状态: AWAITING_DELIVERY (等待发货)                                  │
│  ─────────────────────────────────────────────────────────────────────────  │
│                                                                             │
│   [等待付款] ──存款──▶ [等待发货] ──确认──▶ [完成]                         │
│        │                  │                                               │
│        │              争议/超时/取消                                       │
│        │                  ▼                                               │
│        └────────────▶ [取消/争议]                                         │
│                                                                             │
│   当前: ● 等待发货                                                          │
└─────────────────────────────────────────────────────────────────────────────┘
```

### 3.4 资金流转面板（解锁知识点: immutable_access）

```
┌─────────────────────────────────────────────────────────────────────────────┐
│  💰 资金状态（点击查看immutable与权限控制）                                 │
│  ─────────────────────────────────────────────────────────────────────────  │
│                                                                             │
│   Buyer钱包: 5.0 ETH    ───┐                                                │
│                            │                                                │
│                            ▼                                                │
│                    ┌───────────────┐                                        │
│   Escrow托管金额:  │   1.0 ETH     │  ← 由合约保管                          │
│                    └───────┬───────┘                                        │
│                            │                                                │
│                            ▼                                                │
│   Seller钱包: 2.0 ETH ◀────┘                                                │
│                                                                             │
│   状态: 等待买家确认收货 / 或发起争议 / 或超时取消                           │
└─────────────────────────────────────────────────────────────────────────────┘
```

**解锁逻辑:**
- 点击资金面板 → 解锁 `immutable_access`
- **Toast**: `✅ 已查看资金面板！🎉 恭喜解锁：immutable与权限控制！👉 存款触发事件日志！`
- **KnowledgePanel提示**: `🔐 你了解了immutable和权限控制！buyer、seller、arbiter地址使用immutable修饰，在构造函数设置后不可更改，既节省gas又增强安全性。每个函数都有require检查调用者身份。👉 点击存款按钮触发事件！`

### 3.5 操作区（根据角色和状态动态显示）

#### 状态1: AWAITING_PAYMENT (等待付款) - Buyer

```
┌─────────────────────────────────────────────────────────────────────────────┐
│  🎮 操作区 - Buyer                                                          │
│  ─────────────────────────────────────────────────────────────────────────  │
│                                                                             │
│  存款金额: [________] ETH                                                   │
│                                                                             │
│  [💰 存款 / Deposit]  [❌ 协商取消 / Cancel Mutual]                         │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

**解锁逻辑:**
- 点击"存款" → 解锁 `event_logging`
- **Toast**: `✅ 存款成功！🎉 恭喜解锁：事件日志！👉 查看倒计时学习区块时间戳！`
- **KnowledgePanel提示**: `📝 你了解了事件日志！PaymentDeposited事件记录了买家存款，前端可以监听这个事件。事件使用indexed参数，可以通过地址筛选。👉 查看倒计时学习区块时间戳！`

#### 状态2: AWAITING_DELIVERY (等待发货) - Buyer

```
┌─────────────────────────────────────────────────────────────────────────────┐
│  🎮 操作区 - Buyer                                                          │
│  ─────────────────────────────────────────────────────────────────────────  │
│                                                                             │
│  托管金额: 1.0 ETH                                                          │
│  存款时间: 2024-01-15 10:30:00                                              │
│                                                                             │
│  [✅ 确认收货 / Confirm]  [⚠️ 发起争议 / Dispute]  [⏱️ 超时取消 / Timeout]  │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

**解锁逻辑:**
- 点击"确认收货" → 解锁 `call_transfer`
- **Toast**: `✅ 确认收货成功！🎉 恭喜解锁：call转账！👉 点击receive区域学习安全防护！`
- **KnowledgePanel提示**: `💸 你了解了call转账！合约使用\`(bool sent, ) = payable(seller).call{value: amount}("")\`将资金发送给卖家。call比transfer更灵活，可以指定gas限额。👉 点击receive区域学习安全防护！`

#### 状态2: AWAITING_DELIVERY (等待发货) - Seller

```
┌─────────────────────────────────────────────────────────────────────────────┐
│  🎮 操作区 - Seller                                                         │
│  ─────────────────────────────────────────────────────────────────────────  │
│                                                                             │
│  托管金额: 1.0 ETH (等待买家确认后释放给你)                                 │
│                                                                             │
│  [⚠️ 发起争议 / Dispute]  [❌ 协商取消 / Cancel Mutual]                     │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

#### 状态3: DISPUTED (争议中) - Arbiter

```
┌─────────────────────────────────────────────────────────────────────────────┐
│  🎮 操作区 - Arbiter                                                        │
│  ─────────────────────────────────────────────────────────────────────────  │
│                                                                             │
│  争议状态: 买家和卖家发生纠纷                                               │
│  托管金额: 1.0 ETH                                                          │
│                                                                             │
│  仲裁决定:                                                                  │
│  [🟢 资金给卖家 (买家违约)]  [🔴 资金退买家 (卖家违约)]                     │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

### 3.6 超时倒计时（解锁知识点: block_timestamp）

```
┌─────────────────────────────────────────────────────────────────────────────┐
│  ⏱️ 超时倒计时（点击查看区块时间戳）                                        │
│  ─────────────────────────────────────────────────────────────────────────  │
│                                                                             │
│   剩余时间: 23:45:30                                                        │
│                                                                             │
│   [████████████░░░░░░░░░░░░░░░░░░░░] 35%                                   │
│                                                                             │
│   超时后买家可以取消交易并取回资金                                          │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

**解锁逻辑:**
- 点击倒计时 → 解锁 `block_timestamp`
- **Toast**: `✅ 已查看倒计时！🎉 恭喜解锁：区块时间戳！👉 确认收货学习call转账！`
- **KnowledgePanel提示**: `⏰ 你了解了block.timestamp！合约使用当前区块时间戳计算超时：\`block.timestamp >= depositTime + deliveryTimeout\`。这是保护买家权益的重要机制。👉 确认收货学习call转账！`

### 3.7 事件日志区域

```
┌─────────────────────────────────────────────────────────────────────────────┐
│  📜 事件日志                                                                │
│  ─────────────────────────────────────────────────────────────────────────  │
│                                                                             │
│  🟢 PaymentDeposited | buyer: 0x1234...5678 | amount: 1.0 ETH              │
│  🟡 DisputeRaised    | initiator: 0xabcd...ef01                            │
│  🟢 DisputeResolved  | arbiter: 0x9999...8888 | recipient: 0xabcd...ef01   │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

### 3.8 receive函数说明区（解锁知识点: receive_revert）

```
┌─────────────────────────────────────────────────────────────────────────────┐
│  🛡️ 安全防护 - 拒绝直接转账（点击查看）                                     │
│  ─────────────────────────────────────────────────────────────────────────  │
│                                                                             │
│  代码:                                                                      │
│  receive() external payable {                                               │
│      revert("Direct payments not allowed");                                 │
│  }                                                                          │
│                                                                             │
│  说明: 合约拒绝直接ETH转账，必须通过deposit()函数存款                       │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

**解锁逻辑:**
- 点击receive区 → 解锁 `receive_revert`
- **Toast**: `✅ 已查看安全防护！🎉 恭喜解锁：receive与revert！🎉 所有知识点已解锁！`
- **KnowledgePanel提示**: `🛡️ 你了解了receive()和revert()！receive()是接收ETH的回调函数，这里使用revert()拒绝直接转账，强制用户通过deposit()存款，防止误操作。这是一种安全防护模式。🎉 恭喜你解锁了所有知识点！`

---

## 4. 知识点设计（6个知识点）

```javascript
concepts: [
    "enum_state_machine",    // 阶段1：点击架构图解锁
    "immutable_access",      // 阶段1：查看资金面板解锁
    "event_logging",         // 阶段2：存款解锁
    "block_timestamp",       // 阶段2：查看倒计时解锁
    "call_transfer",         // 阶段3：确认收货/仲裁裁决解锁
    "receive_revert"         // 阶段3：点击receive区解锁
]
```

### 4.1 知识点详细设计

| 知识点 | 解锁时机 | Toast提示 | KnowledgePanel提示 |
|--------|----------|-----------|-------------------|
| enum_state_machine | 点击架构图 | ✅ 已查看合约架构图！🎉 恭喜解锁：枚举与状态机！👉 切换角色体验不同权限！ | 🏗️ 太棒了！你了解了托管合约的三方架构！EscrowState枚举定义了5种状态，形成完整的状态机。每个函数都检查当前状态，防止非法操作。👉 切换角色体验不同权限！ |
| immutable_access | 查看资金面板 | ✅ 已查看资金面板！🎉 恭喜解锁：immutable与权限控制！👉 存款触发事件日志！ | 🔐 你了解了immutable和权限控制！buyer、seller、arbiter地址使用immutable修饰，在构造函数设置后不可更改，既节省gas又增强安全性。每个函数都有require检查调用者身份。👉 点击存款按钮触发事件！ |
| event_logging | 存款 | ✅ 存款成功！🎉 恭喜解锁：事件日志！👉 查看倒计时学习区块时间戳！ | 📝 你了解了事件日志！PaymentDeposited事件记录了买家存款，前端可以监听这个事件。事件使用indexed参数，可以通过地址筛选。👉 查看倒计时学习区块时间戳！ |
| block_timestamp | 查看倒计时 | ✅ 已查看倒计时！🎉 恭喜解锁：区块时间戳！👉 确认收货学习call转账！ | ⏰ 你了解了block.timestamp！合约使用当前区块时间戳计算超时：`block.timestamp >= depositTime + deliveryTimeout`。这是保护买家权益的重要机制。👉 确认收货学习call转账！ |
| call_transfer | 确认收货 | ✅ 确认收货成功！🎉 恭喜解锁：call转账！👉 点击receive区域学习安全防护！ | 💸 你了解了call转账！合约使用`(bool sent, ) = payable(seller).call{value: amount}("")`将资金发送给卖家。call比transfer更灵活，可以指定gas限额。👉 点击receive区域学习安全防护！ |
| receive_revert | 点击receive区 | ✅ 已查看安全防护！🎉 恭喜解锁：receive与revert！🎉 所有知识点已解锁！ | 🛡️ 你了解了receive()和revert()！receive()是接收ETH的回调函数，这里使用revert()拒绝直接转账，强制用户通过deposit()存款，防止误操作。🎉 恭喜你解锁了所有知识点！ |

---

## 5. 概念定义（concepts.js）

### 5.1 getHint() 函数添加Day24支持

```javascript
// src/data/concepts.js

export const getHint = (conceptKey) => {
    const hints = {
        // ... 其他天数
        
        // ========== Day 24 提示 ==========
        enum_state_machine: "🏗️ 太棒了！你了解了托管合约的三方架构！EscrowState枚举定义了5种状态，形成完整的状态机。👉 切换角色体验不同权限！",
        immutable_access: "🔐 你了解了immutable和权限控制！buyer、seller、arbiter地址使用immutable修饰。👉 点击存款按钮触发事件！",
        event_logging: "📝 你了解了事件日志！PaymentDeposited事件记录了买家存款。👉 查看倒计时学习区块时间戳！",
        block_timestamp: "⏰ 你了解了block.timestamp！合约使用当前区块时间戳计算超时。👉 确认收货学习call转账！",
        call_transfer: "💸 你了解了call转账！合约使用call将资金发送给卖家。👉 点击receive区域学习安全防护！",
        receive_revert: "🛡️ 你了解了receive()和revert()！receive()是接收ETH的回调函数。🎉 恭喜你解锁了所有知识点！"
    };
    return hints[conceptKey] || "📖 点击其他概念标签查看更多详细解释。";
};
```

### 5.2 getDay24ExplanationHint() 函数

```javascript
// src/data/concepts.js

export const getDay24ExplanationHint = (conceptKey) => {
    const hints = {
        enum_state_machine: "📖 枚举类型`enum`用于定义一组命名常量。状态机模式通过状态变量控制合约逻辑，每个函数都检查当前状态，防止非法操作。这是智能合约中常见的设计模式。",
        immutable_access: "📖 `immutable`变量在构造函数中设置后不可更改，比普通的`public`变量节省gas。权限控制通过`require`语句检查调用者身份，确保只有授权角色能执行特定操作。",
        event_logging: "📖 事件`event`是智能合约与前端通信的重要方式。`indexed`参数可以被前端筛选，提高查询效率。事件日志记录在区块链上，永久可查。",
        block_timestamp: "📖 `block.timestamp`是当前区块的时间戳。合约通过它计算超时：`block.timestamp >= depositTime + deliveryTimeout`。这是保护买家权益的重要机制。",
        call_transfer: "📖 `call`是低级调用函数，可以发送ETH并指定gas限额。相比`transfer`，`call`更灵活且更推荐使用。返回值`sent`表示转账是否成功。",
        receive_revert: "📖 `receive()`是接收ETH的回调函数。`revert()`回滚交易并返回错误信息。这里使用revert拒绝直接转账，强制用户通过deposit()存款，防止误操作。"
    };
    return hints[conceptKey] || "📖 点击其他概念标签查看更多详细解释。";
};
```

### 5.3 day24ConceptDefinitions

```javascript
// src/data/concepts.js

export const day24ConceptDefinitions = {
    enum_state_machine: {
        name: "枚举与状态机",
        icon: "🔄",
        unlockAt: 1,
        message: "你了解了枚举类型和状态机模式！",
        code: `enum EscrowState { 
    AWAITING_PAYMENT,   // 等待付款
    AWAITING_DELIVERY,  // 等待发货
    COMPLETE,           // 交易完成
    DISPUTED,           // 争议中
    CANCELLED           // 已取消
}

// 每个函数检查状态
function deposit() {
    require(state == AWAITING_PAYMENT, "Already paid");
    state = AWAITING_DELIVERY;
}`
    },
    immutable_access: {
        name: "不可变变量与权限控制",
        icon: "🔐",
        unlockAt: 2,
        message: "你了解了immutable和权限控制！",
        code: `// immutable: 构造函数设置后不可更改
address public immutable buyer;
address public immutable seller;
address public immutable arbiter;

// 权限控制
function deposit() external payable {
    require(msg.sender == buyer, "Only buyer");
    require(state == AWAITING_PAYMENT, "Already paid");
    // ...
}`
    },
    event_logging: {
        name: "事件日志",
        icon: "📝",
        unlockAt: 3,
        message: "你了解了事件日志！",
        code: `event PaymentDeposited(
    address indexed buyer,  // indexed可筛选
    uint256 amount
);

function deposit() external payable {
    // ...
    emit PaymentDeposited(buyer, msg.value);
}`
    },
    block_timestamp: {
        name: "区块时间戳",
        icon: "⏰",
        unlockAt: 4,
        message: "你了解了区块时间戳！",
        code: `uint256 public depositTime;
uint256 public deliveryTimeout;

function cancelAfterTimeout() external {
    require(block.timestamp >= depositTime + deliveryTimeout, 
            "Timeout not reached");
    // ...
}`
    },
    call_transfer: {
        name: "Call转账",
        icon: "💸",
        unlockAt: 5,
        message: "你了解了call转账！",
        code: `function confirmDelivery() external {
    // ...
    (bool sent, ) = payable(seller).call{value: amount}("");
    require(sent, "ETH transfer failed");
}`
    },
    receive_revert: {
        name: "接收函数与回滚",
        icon: "🛡️",
        unlockAt: 6,
        message: "你了解了receive()和revert()！",
        code: `// 拒绝直接转账
receive() external payable {
    revert("Direct payments not allowed");
}

// 强制使用deposit()函数
function deposit() external payable {
    require(msg.value > 0, "Amount must be > 0");
    // ...
}`
    }
}

// Gas估算
export const gasEstimates = {
    // ... 其他天数
    
    // Day 24
    deposit24: 45000,
    confirmDelivery24: 35000,
    raiseDispute24: 40000,
    resolveDispute24: 50000,
    cancelAfterTimeout24: 30000,
    cancelMutual24: 25000,
    getTimeLeft24: 0  // view函数
}
```

---

## 6. 交互流程设计（三阶段）

### 阶段1：架构认知
```
Step 1: 点击架构图
        → 解锁 enum_state_machine
        → Toast: ✅ 已查看合约架构图！🎉 恭喜解锁：枚举与状态机！
        → Hint: 🏗️ 太棒了！你了解了托管合约的三方架构...

Step 2: 点击资金面板
        → 解锁 immutable_access
        → Toast: ✅ 已查看资金面板！🎉 恭喜解锁：immutable与权限控制！
        → Hint: 🔐 你了解了immutable和权限控制...
```

### 阶段2：核心交互
```
Step 3: 切回Buyer，输入1 ETH，点击存款
        → 解锁 event_logging
        → 状态变为 AWAITING_DELIVERY
        → Toast: ✅ 存款成功！🎉 恭喜解锁：事件日志！
        → Hint: 📝 你了解了事件日志...

Step 4: 查看倒计时组件
        → 解锁 block_timestamp
        → Toast: ✅ 已查看倒计时！🎉 恭喜解锁：区块时间戳！
        → Hint: ⏰ 你了解了block.timestamp...
```

### 阶段3：高级特性
```
Step 5: 点击确认收货
        → 解锁 call_transfer
        → 状态变为 COMPLETE
        → Toast: ✅ 确认收货成功！🎉 恭喜解锁：call转账！
        → Hint: 💸 你了解了call转账...

Step 6: 点击receive函数说明区
        → 解锁 receive_revert
        → Toast: ✅ 已查看安全防护！🎉 恭喜解锁：receive与revert！
        → Hint: 🛡️ 你了解了receive()和revert()...
```

---

## 6. 实时数据与日志记录设计

### 6.1 useDay24.js 中的 realtimeData

```javascript
// src/composables/useDay24.js

import { ref, computed } from 'vue'
import { useProgressStore } from '@/stores/progressStore'
import { useOperationLogStore } from '@/stores/operationLogStore'

export function useDay24() {
    const progressStore = useProgressStore()
    const logStore = useOperationLogStore()
    
    // ... 其他状态定义
    
    // 实时数据接口（供Sidebar使用）
    const realtimeData = computed(() => ({
        gasUsage: logStore.getDayGasUsage(24),
        ethCost: logStore.getDayEthCost(24),
        operationCount: logStore.getDayOperationCount(24)
    }))
    
    // ... 其他代码
    
    return {
        // ... 其他导出
        realtimeData  // ← 添加这一行
    }
}
```

### 6.2 useCurrentDayRealtimeData.js 注册

```javascript
// src/composables/useCurrentDayRealtimeData.js

import { useDay24 } from './useDay24'

const realtimeData = computed(() => {
    switch (currentDay.value) {
        // ... 其他case
        case 24:
            return useDay24().realtimeData.value
        default:
            return { gasUsage: 0, ethCost: 0, operationCount: 0 }
    }
})
```

---

## 7. 状态管理设计（useDay24.js）

```javascript
// src/composables/useDay24.js

import { ref, computed } from 'vue'
import { useProgressStore } from '@/stores/progressStore'
import { useOperationLogStore } from '@/stores/operationLogStore'

export function useDay24() {
    const progressStore = useProgressStore()
    const logStore = useOperationLogStore()
    const progressStore = useProgressStore()
    
    // ============ 核心状态 ============
    const escrowState = ref('AWAITING_PAYMENT') // AWAITING_PAYMENT, AWAITING_DELIVERY, COMPLETE, DISPUTED, CANCELLED
    const currentRole = ref('buyer') // buyer, seller, arbiter
    
    // 角色地址（模拟）
    const addresses = {
        buyer: '0xBuyer' + Math.random().toString(36).substring(2, 10),
        seller: '0xSeller' + Math.random().toString(36).substring(2, 10),
        arbiter: '0xArbiter' + Math.random().toString(36).substring(2, 10)
    }
    
    // 资金状态
    const funds = ref({
        buyerWallet: 5.0,
        sellerWallet: 2.0,
        escrowAmount: 0,
        arbiterWallet: 1.0
    })
    
    // 交易信息
    const escrowInfo = ref({
        amount: 0,
        depositTime: null,
        deliveryTimeout: 86400, // 24小时
        isDisputed: false
    })
    
    // 事件日志
    const eventLog = ref([])
    
    // 解锁的概念
    const unlockedConcepts = computed(() => {
        return progressStore.getDayProgress(24)?.unlockedConcepts || []
    })
    
    // ============ 计算属性 ============
    const timeLeft = computed(() => {
        if (escrowState.value !== 'AWAITING_DELIVERY') return 0
        const elapsed = (Date.now() - escrowInfo.value.depositTime) / 1000
        return Math.max(0, escrowInfo.value.deliveryTimeout - elapsed)
    })
    
    const isTimeout = computed(() => timeLeft.value === 0)
    
    const progressPercentage = computed(() => {
        const progress = progressStore.getDayProgress(24)
        if (!progress || progress.totalConcepts === 0) return 0
        return Math.round((progress.unlockedConcepts.length / progress.totalConcepts) * 100)
    })
    
    // ============ 实时数据接口（供Sidebar使用） ============
    const realtimeData = computed(() => ({
        gasUsage: logStore.getDayGasUsage(24),
        ethCost: logStore.getDayEthCost(24),
        operationCount: logStore.getDayOperationCount(24)
    }))
    
    // ============ 概念解锁 ============
    const unlockConcept = (concept) => {
        if (!unlockedConcepts.value.includes(concept)) {
            progressStore.unlockConcept(24, concept)
            return true
        }
        return false
    }
    
    // ============ 操作函数（返回规范对象） ============
    
    /**
     * 存款操作
     * @param {number} amount - 存款金额
     * @returns {object} { success, message, hints, nextStep }
     */
    const deposit = (amount) => {
        const hints = []
        
        // 执行存款逻辑
        funds.value.buyerWallet -= amount
        funds.value.escrowAmount = amount
        escrowInfo.value.amount = amount
        escrowInfo.value.depositTime = Date.now()
        escrowState.value = 'AWAITING_DELIVERY'
        
        // 添加事件日志
        eventLog.value.unshift({
            type: 'PaymentDeposited',
            buyer: addresses.buyer,
            amount: amount,
            timestamp: new Date().toLocaleString()
        })
        
        // 记录操作日志
        logStore.addLog(24, '存款', `存款 ${amount} ETH`, 'deposit24')
        
        // 解锁概念
        if (unlockConcept('event_logging')) {
            hints.push('event_logging')
        }
        
        return {
            success: true,
            message: '✅ 存款成功！🎉 恭喜解锁：事件日志！👉 查看倒计时学习区块时间戳！',
            hints,
            nextStep: '📝 你了解了事件日志！PaymentDeposited事件记录了买家存款。👉 查看倒计时学习区块时间戳！'
        }
    }
    
    /**
     * 确认收货
     * @returns {object} { success, message, hints, nextStep }
     */
    const confirmDelivery = () => {
        const hints = []
        const amount = escrowInfo.value.amount
        
        // 执行转账
        funds.value.escrowAmount = 0
        funds.value.sellerWallet += amount
        escrowState.value = 'COMPLETE'
        
        // 添加事件日志
        eventLog.value.unshift({
            type: 'DeliveryConfirmed',
            buyer: addresses.buyer,
            seller: addresses.seller,
            amount: amount,
            timestamp: new Date().toLocaleString()
        })
        
        // 记录操作日志
        logStore.addLog(24, '确认收货', `确认收货，转账 ${amount} ETH`, 'confirmDelivery24')
        
        // 解锁概念
        if (unlockConcept('call_transfer')) {
            hints.push('call_transfer')
        }
        
        return {
            success: true,
            message: '✅ 确认收货成功！🎉 恭喜解锁：call转账！👉 点击receive区域学习安全防护！',
            hints,
            nextStep: '💸 你了解了call转账！合约使用call将资金发送给卖家。👉 点击receive区域学习安全防护！'
        }
    }
    
    /**
     * 发起争议
     * @returns {object} { success, message }
     */
    const raiseDispute = () => {
        escrowState.value = 'DISPUTED'
        escrowInfo.value.isDisputed = true
        
        eventLog.value.unshift({
            type: 'DisputeRaised',
            initiator: currentRole.value === 'buyer' ? addresses.buyer : addresses.seller,
            timestamp: new Date().toLocaleString()
        })
        
        // 记录操作日志
        logStore.addLog(24, '发起争议', `发起争议，等待仲裁`, 'raiseDispute24')
        
        return {
            success: true,
            message: '⚠️ 争议已发起！等待仲裁者裁决。',
            hints: [],
            nextStep: '⚖️ 争议已发起！现在只有仲裁者可以resolveDispute()解决争议。'
        }
    }
    
    /**
     * 仲裁裁决
     * @param {boolean} releaseToSeller - 是否给卖家
     * @returns {object} { success, message }
     */
    const resolveDispute = (releaseToSeller) => {
        const amount = escrowInfo.value.amount
        const recipient = releaseToSeller ? 'seller' : 'buyer'
        
        funds.value.escrowAmount = 0
        funds.value[recipient + 'Wallet'] += amount
        escrowState.value = 'COMPLETE'
        
        eventLog.value.unshift({
            type: 'DisputeResolved',
            arbiter: addresses.arbiter,
            recipient: addresses[recipient],
            amount: amount,
            timestamp: new Date().toLocaleString()
        })
        
        // 记录操作日志
        logStore.addLog(24, '仲裁裁决', `仲裁裁决，资金${releaseToSeller ? '给卖家' : '退买家'}`, 'resolveDispute24')
        
        return {
            success: true,
            message: `⚖️ 仲裁完成！资金已${releaseToSeller ? '释放给卖家' : '退回买家'}。`,
            hints: [],
            nextStep: '⚖️ 仲裁完成！体现了去中心化争议解决的力量。'
        }
    }
    
    /**
     * 超时取消
     * @returns {object} { success, message }
     */
    const cancelAfterTimeout = () => {
        const amount = escrowInfo.value.amount
        
        funds.value.escrowAmount = 0
        funds.value.buyerWallet += amount
        escrowState.value = 'CANCELLED'
        
        eventLog.value.unshift({
            type: 'EscrowCancelled',
            initiator: addresses.buyer,
            reason: 'timeout',
            timestamp: new Date().toLocaleString()
        })
        
        // 记录操作日志
        logStore.addLog(24, '超时取消', `超时取消，资金退回买家`, 'cancelAfterTimeout24')
        
        return {
            success: true,
            message: '⏱️ 超时取消成功！资金已退回买家。',
            hints: [],
            nextStep: '⏱️ 超时保护机制保护了买家权益！'
        }
    }
    
    /**
     * 协商取消
     * @returns {object} { success, message }
     */
    const cancelMutual = () => {
        if (escrowState.value === 'AWAITING_DELIVERY') {
            const amount = escrowInfo.value.amount
            funds.value.escrowAmount = 0
            funds.value.buyerWallet += amount
        }
        
        escrowState.value = 'CANCELLED'
        
        eventLog.value.unshift({
            type: 'EscrowCancelled',
            initiator: currentRole.value === 'buyer' ? addresses.buyer : addresses.seller,
            reason: 'mutual',
            timestamp: new Date().toLocaleString()
        })
        
        // 记录操作日志
        logStore.addLog(24, '协商取消', `双方协商取消交易`, 'cancelMutual24')
        
        return {
            success: true,
            message: '❌ 协商取消成功！交易已取消。',
            hints: [],
            nextStep: '❌ 双方协商取消了交易。'
        }
    }
    
    /**
     * 切换角色
     * @param {string} role - buyer, seller, arbiter
     * @returns {object} { success, message }
     */
    const switchRole = (role) => {
        currentRole.value = role
        
        const roleNames = {
            buyer: 'Buyer 买家',
            seller: 'Seller 卖家',
            arbiter: 'Arbiter 仲裁者'
        }
        
        return {
            success: true,
            message: `🎭 已切换到 ${roleNames[role]}！`,
            hints: [],
            nextStep: `🎭 当前角色：${roleNames[role]}。可以执行该角色的操作。`
        }
    }
    
    /**
     * 重置交易
     */
    const resetEscrow = () => {
        escrowState.value = 'AWAITING_PAYMENT'
        funds.value = {
            buyerWallet: 5.0,
            sellerWallet: 2.0,
            escrowAmount: 0,
            arbiterWallet: 1.0
        }
        escrowInfo.value = {
            amount: 0,
            depositTime: null,
            deliveryTimeout: 86400,
            isDisputed: false
        }
        eventLog.value = []
    }
    
    return {
        // 状态
        escrowState,
        currentRole,
        addresses,
        funds,
        escrowInfo,
        eventLog,
        unlockedConcepts,
        
        // 计算属性
        timeLeft,
        isTimeout,
        progressPercentage,
        realtimeData,
        
        // 操作函数
        deposit,
        confirmDelivery,
        raiseDispute,
        resolveDispute,
        cancelAfterTimeout,
        cancelMutual,
        switchRole,
        resetEscrow,
        unlockConcept
    }
}
```

---

## 8. 文件结构

```
src/
├── components/
│   └── days/
│       └── Day24/
│           └── EnhancedSimpleEscrow.vue    # Day 24 主组件
├── composables/
│   └── useDay24.js                          # Day 24 业务逻辑
├── data/
│   ├── days.js                              # 添加 dayConfigs[24]
│   └── concepts.js                          # 添加 day24ConceptDefinitions + gasEstimates
├── components/
│   ├── DayContent.vue                       # 注册 Day24 组件
│   ├── Sidebar.vue                          # 添加 Day24 概念支持
│   └── shared/
│       ├── KnowledgePanel.vue               # 添加 Day24 支持
│       └── FullCodeModal.vue                # 已存在
└── stores/
    └── progressStore.js                     # 自动计算totalConcepts
```

---

## 9. 配置清单

### 9.1 days.js 配置
```javascript
export const dayConfigs = {
    // ... 现有配置
    24: {
        title: "Day 24 - 增强版托管合约",
        subtitle: "Enhanced Simple Escrow / 超时保护与争议仲裁",
        concepts: [
            "enum_state_machine",
            "immutable_access",
            "event_logging",
            "block_timestamp",
            "call_transfer",
            "receive_revert"
        ]
    }
}
```

### 9.2 DayContent.vue 注册
```javascript
const dayComponents = {
  // ... 现有天数
  24: defineAsyncComponent(() => import('./days/Day24/EnhancedSimpleEscrow.vue')),
}
```

### 9.3 Sidebar.vue 添加支持
```javascript
import { 
    conceptDefinitions, 
    // ... 其他天数
    day24ConceptDefinitions 
} from '../data/concepts.js'

// 在判断分支中添加
} else if (props.currentDay === 24) {
    conceptDefs = day24ConceptDefinitions
}
```

### 9.4 KnowledgePanel.vue 添加支持
```javascript
import { 
    getHint, 
    getDay24ExplanationHint,
    day24ConceptDefinitions 
} from '@/data/concepts.js'

// 在概念定义判断中添加
const conceptDefs = {
    // ... 其他天数
    24: day24ConceptDefinitions
}[props.currentDay]

// 在提示函数中添加
const getDaySpecificHint = (concept) => {
    // ... 其他天数
    if (currentDay.value === 24) {
        return getDay24ExplanationHint(concept)
    }
}
```

---

## 10. 响应式布局考虑

### 桌面端（>768px）
- 三列布局：左栏导航、中栏交互、右栏知识点
- 状态流转图横向展示
- 三角色切换按钮横向排列

### 移动端（<=768px）
- 单列布局：中栏全宽，右栏知识点折叠到底部
- 状态流转图简化为纵向列表
- 三角色切换按钮纵向排列或下拉选择

```vue
<!-- 响应式示例 -->
<div class="role-switcher" :class="{ 'mobile': isMobile }">
  <button 
    v-for="role in roles" 
    :key="role.key"
    :class="{ active: currentRole === role.key }"
    @click="switchRole(role.key)"
  >
    {{ role.icon }} {{ role.label }}
  </button>
</div>

<style>
.role-switcher {
  display: flex;
  gap: 10px;
}
.role-switcher.mobile {
  flex-direction: column;
}
</style>
```

---

## 11. 验收标准

- [ ] 页面能正确显示三角色架构图
- [ ] 布局规范正确（single-column类绑定、右栏容器始终渲染）
- [ ] 状态流转图能根据当前状态高亮显示
- [ ] 角色切换功能正常，权限控制正确
- [ ] 存款/确认收货/争议/取消/仲裁流程完整
- [ ] 超时倒计时功能正常
- [ ] 事件日志正确显示
- [ ] 6个知识点都能正确解锁
- [ ] 双重提示系统（Toast + KnowledgePanel）正常工作
- [ ] KnowledgePanel正确显示解锁进度
- [ ] 完整代码弹窗功能正常
- [ ] 响应式布局适配不同屏幕

---

## 12. 修改总结

根据Review反馈，本次规划进行了以下优化：

1. **布局规范**: 添加了`:class="{ 'single-column': unlockedConcepts.length === 0 }"`，右栏容器始终渲染
2. **知识点精简**: 从10个减少到6个，合并相关概念
3. **双重提示**: 补充了Toast提示和KnowledgePanel提示的完整设计
4. **解锁流程**: 简化为三阶段，每阶段2个知识点
5. **概念定义**: 补充了完整的day24ConceptDefinitions
6. **Composable规范**: 设计了规范的返回值格式
7. **Gas估算**: 添加了day24的gas估算
8. **响应式考虑**: 添加了移动端适配说明
