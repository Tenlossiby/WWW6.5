# Day 28 - DecentralizedGovernance 去中心化治理 规划文档

> 创建日期: 2026-03-26

---

## 一、合约功能分析

### 1.1 核心功能
- **创建提案 (createProposal)**: 支付押金创建新提案，设置描述和执行操作
- **投票 (vote)**: 代币持有者按持有量投票（1代币=1票）
- **最终确定 (finalize)**: 投票结束后检查法定人数和多数决，进入时间锁
- **执行提案 (execute)**: 时间锁过期后执行提案中的操作

### 1.2 技术特点
- **代币治理**: 基于ERC20代币持有量确定投票权
- **时间锁机制**: 2天时间锁给用户审查提案的时间
- **法定人数**: 需要至少10%的总代币供应量参与投票
- **押金机制**: 100代币押金防止垃圾提案，执行后退还
- **ReentrancyGuard**: 防止执行阶段的重入攻击
- **低级别调用**: 使用call执行提案中的任意操作

### 1.3 合约结构
```solidity
// 常量配置
VOTING_PERIOD = 3 days      // 投票期时长
TIMELOCK_PERIOD = 2 days    // 时间锁定期
QUORUM_PERCENTAGE = 10      // 法定人数百分比
PROPOSAL_DEPOSIT = 100e18   // 提案押金

// 提案结构体
struct Proposal {
    uint256 id;                    // 提案ID
    address proposer;              // 提案创建者
    string description;            // 提案描述
    uint256 deadline;              // 投票截止时间
    uint256 votesFor;              // 赞成票
    uint256 votesAgainst;          // 反对票
    bool executed;                 // 是否已执行
    bool cancelled;                // 是否已取消
    uint256 executionTime;         // 可执行时间
    bytes[] executionData;         // 执行数据
    address[] executionTargets;    // 目标地址
    mapping(address => bool) hasVoted;  // 投票记录
}

// 核心函数
- createProposal(description, targets, data): 创建提案
- vote(proposalId, support): 投票
- finalize(proposalId): 最终确定提案
- execute(proposalId): 执行提案
```

### 1.4 提案生命周期
```
创建提案 → 投票期(3天) → 最终确定 → 时间锁(2天) → 执行
    ↓
 支付押金(100代币)
```

---

## 二、页面布局设计

### 2.1 整体布局
采用 Day 22+ 标准双栏布局：
- **左栏**: 交互区域（可视化 + 操作）
- **右栏**: 知识面板（KnowledgePanel）

### 2.2 左栏内容区块（从上到下，共6个区块）

#### 1. DAO治理架构可视化区（可点击解锁）
```
┌─────────────────────────────────────────────────────────┐
│  🏛️ DAO治理架构（点击了解代币治理模式）                  │
├─────────────────────────────────────────────────────────┤
│                                                         │
│                    ┌─────────────┐                      │
│                    │  治理代币   │                      │
│                    │  GOVERN     │                      │
│                    │  1币 = 1票  │                      │
│                    └──────┬──────┘                      │
│                           │                             │
│                           ▼                             │
│   ┌─────────┐    ┌─────────────────┐    ┌─────────┐    │
│   │ 提案者  │───→│ 治理合约        │───→│ 执行目标 │    │
│   │ Proposer│    │ Governance      │    │ Targets │    │
│   └─────────┘    │                 │    └─────────┘    │
│                  │ • 创建提案      │                     │
│   ┌─────────┐    │ • 投票          │                     │
│   │ 投票者  │───→│ • 时间锁        │                     │
│   │ Voters  │    │ • 执行          │                     │
│   └─────────┘    └─────────────────┘                     │
│                                                         │
│   核心机制: 代币持有量 = 投票权（线性投票）              │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

#### 2. 治理参数面板（可点击解锁）
```
┌─────────────────────────────────────────────────────────┐
│  ⚙️ 治理参数（点击了解时间锁和法定人数）                 │
├─────────────────────────────────────────────────────────┤
│  【时间配置】                                            │
│  投票期: 3天 ⏱️                                         │
│  时间锁: 2天 🔒                                         │
│                                                         │
│  【投票规则】                                            │
│  法定人数: 10% （需要至少10%的总供应量参与）            │
│  通过条件: 赞成票 > 反对票                               │
│                                                         │
│  【押金机制】                                            │
│  提案押金: 100 GOVERN                                   │
│  押金退还: 提案执行后自动退还                            │
│                                                         │
│  【当前代币状态】                                        │
│  总供应量: 100,000 GOVERN                               │
│  你的余额: 5,000 GOVERN                                 │
│  你的投票权: 5,000 票 (5% of total)                     │
└─────────────────────────────────────────────────────────┘
```

#### 3. 提案状态流转图（可点击解锁）
```
┌─────────────────────────────────────────────────────────┐
│  📊 提案生命周期（点击了解提案状态机）                   │
├─────────────────────────────────────────────────────────┤
│                                                         │
│   [Pending] ──(创建提案)──→ [Active]                    │
│   待创建                    投票中(3天)                 │
│                                  │                      │
│              ┌──────────────────┼──────────────────┐   │
│              │                  │                  │   │
│              ▼                  ▼                  │   │
│        [Defeated] ──(失败)──→ [Succeeded]          │   │
│         被否决(未通过)          已通过              │   │
│                                    │               │   │
│                                    ▼               │   │
│                                 [Queued] ◀─────────┘   │
│                               时间锁中(2天)            │
│                                    │                   │
│                                    ▼                   │
│                               [Executed]               │
│                                 已执行                 │
│                                                         │
│   【当前活跃提案】                                       │
│   #1: 升级协议版本 - 投票中 ⏱️ 剩余 2天                  │
│   #2: 调整手续费 - 时间锁中 🔒 剩余 1天                  │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

#### 4. 角色切换与操作区
```
┌─────────────────────────────────────────────────────────┐
│  🎭 当前角色: TokenHolder                                │
├─────────────────────────────────────────────────────────┤
│  [🔄 切换到 Proposer]  [🔄 切换到 Executor]              │
│                                                         │
│  💡 提示：切换到 Proposer 可创建提案，切换到 Executor    │
│         可最终确定和执行提案                             │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  【TokenHolder 操作区】                                  │
│  [🗳️ 投票] [📋 查看提案]                                 │
│                                                         │
│  投票面板:                                              │
│  选择提案: [▼ 提案 #1: 升级协议版本]                    │
│  提案状态: 投票中 ⏱️ 剩余 2天                            │
│  当前票数: 赞成 30,000 | 反对 10,000                    │
│  你的投票权: 5,000 票                                   │
│                                                         │
│  [👍 赞成] [👎 反对]                                    │
│                                                         │
│  ─────────────────────────────────────────────────────  │
│                                                         │
│  查看提案面板:                                          │
│  提案列表:                                              │
│  #1: 升级协议版本 - 投票中 ⏱️                           │
│  #2: 调整手续费 - 时间锁中 🔒                           │
│                                                         │
│  ─────────────────────────────────────────────────────  │
│                                                         │
│  【Proposer 操作区】（切换到Proposer后显示）             │
│  📝 创建提案（点击了解提案结构体）                        │
│  提案描述: [________________________________]           │
│  执行目标合约: [0x1234...5678]                          │
│  执行数据 (bytes): [0x...]                              │
│  提案押金: 100 GOVERN | 你的余额: 5,000 GOVERN          │
│  [📝 创建提案]                                          │
│                                                         │
│  【我的提案】                                           │
│  #3: 新增功能模块 - 投票中                              │
│  #4: 修复Bug - 已执行 ✅                                │
│                                                         │
│  ─────────────────────────────────────────────────────  │
│                                                         │
│  【Executor 操作区】（切换到Executor后显示）             │
│  🔧 执行提案（点击了解低级别调用）                        │
│                                                         │
│  【可执行提案】（时间锁已过期）                          │
│  #2: 调整手续费 | 状态: 等待执行 ⏱️                      │
│  执行目标: 0xabcd...ef01                                │
│  [🔧 执行提案]                                          │
│                                                         │
│  【待最终确定提案】（投票已结束）                        │
│  #1: 升级协议版本                                       │
│  投票结果: 赞成 35,000 | 反对 10,000                    │
│  法定人数: ✅ 已满足 (45% > 10%)                        │
│  [✅ 最终确定提案]                                      │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

#### 5. 时间控制区（重要！用于演示时间锁）
```
┌─────────────────────────────────────────────────────────┐
│  ⏱️ 时间控制（快进时间以演示投票期和时间锁）             │
├─────────────────────────────────────────────────────────┤
│  当前区块时间: 2026-03-26 14:30:00                      │
│                                                         │
│  [⏩ 快进1天] [⏩ 快进3天（投票期结束）]                  │
│  [⏩ 快进5天（时间锁过期，可执行）]                      │
│                                                         │
│  💡 提示：实际合约需要等待3天投票期+2天时间锁，          │
│         这里使用快进功能加速演示                         │
└─────────────────────────────────────────────────────────┘
```

#### 6. 事件日志（只读）
```
┌─────────────────────────────────────────────────────────┐
│  📜 事件日志                                             │
├─────────────────────────────────────────────────────────┤
│  [⏰ 14:30:15] ProposalCreated: #3 by 0x1234...         │
│  [⏰ 14:25:10] Voted: #1 by 0xabcd... (Support)         │
│  [⏰ 14:20:05] ProposalExecuted: #2                     │
│  [⏰ 14:15:00] ProposalFinalized: #1                    │
└─────────────────────────────────────────────────────────┘
```

---

## 三、知识点设计（9个概念）

### 3.1 概念列表

```javascript
concepts: [
    "token_governance",        // 代币治理模式 - 点击架构图解锁
    "timelock_mechanism",      // 时间锁机制 - 点击治理参数面板解锁（与quorum_threshold同时）
    "quorum_threshold",        // 法定人数 - 点击治理参数面板解锁（与timelock_mechanism同时）
    "proposal_state_machine",  // 提案状态机 - 点击提案状态流转图解锁
    "proposal_struct",         // 提案结构体 - 创建提案时解锁
    "voting_function",         // 投票功能 - 成功投票时解锁
    "finalize_function",       // 最终确定功能 - 成功最终确定时解锁
    "low_level_call",          // 低级别调用 - 成功执行提案时解锁
    "reentrancy_guard"         // 重入保护 - 点击执行区了解安全防护时解锁
]
```

### 3.2 概念详细定义

#### 1. token_governance (代币治理模式)
```javascript
{
    name: "代币治理模式",
    icon: "🗳️",
    unlockAt: 1,
    message: "你了解了代币治理模式！在DAO中，代币持有量决定投票权，1代币=1票，实现去中心化决策。",
    code: `// 投票权重 = 代币持有量
function vote(uint256 _proposalId, bool _support) external {
    uint256 weight = governanceToken.balanceOf(msg.sender);
    require(weight > 0, "No voting power");
    
    if (_support) {
        proposal.votesFor += weight;
    } else {
        proposal.votesAgainst += weight;
    }
}`
}
```

#### 2. timelock_mechanism (时间锁机制)
```javascript
{
    name: "时间锁机制",
    icon: "🔒",
    unlockAt: 2,
    message: "你掌握了时间锁机制！提案通过后需要等待2天才能执行，给用户时间审查和准备。",
    code: `uint256 public constant TIMELOCK_PERIOD = 2 days;

function finalize(uint256 _proposalId) external {
    // ... 检查投票结果
    // 设置执行时间（当前时间 + 时间锁定期）
    proposal.executionTime = block.timestamp + TIMELOCK_PERIOD;
}

function execute(uint256 _proposalId) external nonReentrant {
    // 检查时间锁已过期
    require(block.timestamp >= proposal.executionTime, "Timelock active");
    // ... 执行提案
}`
}
```

#### 3. quorum_threshold (法定人数)
```javascript
{
    name: "法定人数",
    icon: "👥",
    unlockAt: 3,
    message: "你了解了法定人数机制！需要至少10%的总代币供应量参与投票，确保提案有足够关注度。",
    code: `uint256 public constant QUORUM_PERCENTAGE = 10;

function finalize(uint256 _proposalId) external {
    // ...
    uint256 totalSupply = governanceToken.totalSupply();
    uint256 quorumRequired = (totalSupply * QUORUM_PERCENTAGE) / 100;
    uint256 totalVotes = proposal.votesFor + proposal.votesAgainst;
    
    // 检查是否达到法定人数
    require(totalVotes >= quorumRequired, "Quorum not met");
    // ...
}`
}
```

#### 4. proposal_state_machine (提案状态机)
```javascript
{
    name: "提案状态机",
    icon: "📊",
    unlockAt: 4,
    message: "你掌握了提案状态机！提案经历Pending→Active→Succeeded/Defeated→Queued→Executed的完整生命周期。",
    code: `// 提案生命周期:
// Pending → Active → Succeeded → Queued → Executed
//              ↓
//           Defeated

// 状态转换条件:
// 1. createProposal(): Pending → Active
// 2. finalize() + 通过: Active → Succeeded → Queued
// 3. finalize() + 失败: Active → Defeated
// 4. execute(): Queued → Executed`
}
```

#### 5. proposal_struct (提案结构体)
```javascript
{
    name: "提案结构体",
    icon: "📝",
    unlockAt: 5,
    message: "你了解了提案结构体！每个提案包含ID、创建者、描述、投票数据、执行信息等完整字段。",
    code: `struct Proposal {
    uint256 id;                    // 提案唯一标识符
    address proposer;              // 提案创建者地址
    string description;            // 提案描述文本
    uint256 deadline;              // 投票截止时间戳
    uint256 votesFor;              // 赞成票总数
    uint256 votesAgainst;          // 反对票总数
    bool executed;                 // 是否已执行
    bool cancelled;                // 是否已取消
    uint256 executionTime;         // 可执行时间
    bytes[] executionData;         // 要执行的调用数据数组
    address[] executionTargets;    // 要调用的目标合约地址
    mapping(address => bool) hasVoted;  // 记录谁已经投过票
}`
}
```

#### 6. voting_function (投票功能)
```javascript
{
    name: "投票功能",
    icon: "🗳️",
    unlockAt: 6,
    message: "你成功执行了投票操作！代币持有者可以在投票期内投赞成或反对票，每个地址只能投一次。",
    code: `function vote(uint256 _proposalId, bool _support) external {
    Proposal storage proposal = proposals[_proposalId];
    
    // 验证检查
    require(block.timestamp < proposal.deadline, "Voting period ended");
    require(!proposal.hasVoted[msg.sender], "Already voted");
    require(!proposal.executed, "Already executed");
    
    // 获取投票者的代币余额作为投票权重
    uint256 weight = governanceToken.balanceOf(msg.sender);
    require(weight > 0, "No voting power");
    
    // 记录投票
    proposal.hasVoted[msg.sender] = true;
    
    if (_support) {
        proposal.votesFor += weight;
    } else {
        proposal.votesAgainst += weight;
    }
    
    emit Voted(_proposalId, msg.sender, _support, weight);
}`
}
```

#### 7. finalize_function (最终确定功能)
```javascript
{
    name: "最终确定功能",
    icon: "✅",
    unlockAt: 7,
    message: "你成功执行了最终确定操作！任何人都可以在投票结束后调用，检查法定人数和多数决，通过后进入时间锁。",
    code: `function finalize(uint256 _proposalId) external {
    Proposal storage proposal = proposals[_proposalId];
    
    // 检查投票期已结束
    require(block.timestamp >= proposal.deadline, "Voting still active");
    require(!proposal.executed, "Already executed");
    
    // 计算法定人数
    uint256 totalSupply = governanceToken.totalSupply();
    uint256 quorumRequired = (totalSupply * QUORUM_PERCENTAGE) / 100;
    uint256 totalVotes = proposal.votesFor + proposal.votesAgainst;
    
    // 检查是否达到法定人数
    require(totalVotes >= quorumRequired, "Quorum not met");
    // 检查赞成票是否多于反对票
    require(proposal.votesFor > proposal.votesAgainst, "Proposal rejected");
    
    // 设置执行时间（当前时间 + 时间锁定期）
    proposal.executionTime = block.timestamp + TIMELOCK_PERIOD;
}`
}
```

#### 8. low_level_call (低级别调用)
```javascript
{
    name: "低级别调用",
    icon: "🔧",
    unlockAt: 8,
    message: "你了解了低级别调用！提案执行时使用call进行低级别调用，可以执行任意合约操作，是DAO治理的核心能力。",
    code: `function execute(uint256 _proposalId) external nonReentrant {
    // ... 检查时间锁等条件
    
    // 执行所有预设的调用
    for (uint256 i = 0; i < proposal.executionTargets.length; i++) {
        // 使用 low-level call 执行调用
        (bool success, ) = proposal.executionTargets[i].call(
            proposal.executionData[i]
        );
        require(success, "Execution failed");
    }
    
    // 将押金退还给提案创建者
    governanceToken.transfer(proposal.proposer, PROPOSAL_DEPOSIT);
    
    emit ProposalExecuted(_proposalId);
}`
}
```

#### 9. reentrancy_guard (重入保护)
```javascript
{
    name: "重入保护",
    icon: "🛡️",
    unlockAt: 9,
    message: "你了解了重入保护机制！execute函数使用nonReentrant修饰符，防止在执行低级别调用时被重入攻击。",
    code: `contract DecentralizedGovernance is ReentrancyGuard {
    
    function execute(uint256 _proposalId) external nonReentrant {
        // ... 执行提案中的调用
        // nonReentrant 防止重入攻击
    }
}

// ReentrancyGuard 原理:
// 1. 进入函数时设置 _status = ENTERED
// 2. 执行函数逻辑
// 3. 退出函数时设置 _status = NOT_ENTERED
// 4. 如果重入调用，_status == ENTERED，立即 revert`
}
```

---

## 四、交互流程与解锁逻辑

### 4.1 用户操作流程（TokenHolder路径）

```
1. 页面加载
   └── 显示初始提示: "🏛️ 欢迎来到 Day 28！点击架构图了解代币治理模式！\n📍 提示：重要知识点都在上半部分，建议从上到下依次操作。"

2. 点击DAO治理架构图
   └── 解锁: token_governance
   └── Toast: "✅ 已了解代币治理模式！🎉 恭喜解锁：代币治理模式！👉 点击治理参数面板了解时间锁和法定人数！"
   └── KnowledgePanel: "🗳️ 太棒了！你了解了代币治理模式！在DAO中，代币持有量决定投票权。👉 点击治理参数面板了解时间锁和法定人数！"

3. 点击治理参数面板（第一次）
   └── 解锁: timelock_mechanism
   └── Toast: "✅ 已了解时间锁机制！🎉 恭喜解锁：时间锁机制！👉 再次点击了解法定人数！"
   └── KnowledgePanel: "🔒 优秀！时间锁给用户审查时间。👉 再次点击了解法定人数！"

3b. 再次点击治理参数面板（第二次）
   └── 解锁: quorum_threshold
   └── Toast: "✅ 已了解法定人数！🎉 恭喜解锁：法定人数！👉 点击提案状态流转图了解状态机！"
   └── KnowledgePanel: "👥 太棒了！法定人数确保足够参与度。👉 点击提案状态流转图了解状态机！"

4. 点击提案状态流转图
   └── 解锁: proposal_state_machine
   └── Toast: "✅ 已了解提案状态机！🎉 恭喜解锁：提案状态机！👉 切换到TokenHolder角色开始投票！"
   └── KnowledgePanel: "📊 太棒了！提案经历完整的生命周期。👉 切换到TokenHolder角色开始投票！"

5. 切换到TokenHolder角色
   └── 提示: "👤 你现在是TokenHolder！👉 选择提案并投票！"

6. 执行投票操作
   └── 解锁: voting_function
   └── Toast: "🗳️ 投票成功！🎉 恭喜解锁：投票功能！👉 等待投票结束或切换到Executor角色！"
   └── KnowledgePanel: "🗳️ 优秀！你成功执行了投票操作。👉 等待投票结束或切换到Executor角色！"

7. 切换到Executor角色
   └── 提示: "🔧 你现在是Executor！👉 最终确定已结束的提案！"

8. 执行最终确定操作
   └── 解锁: finalize_function
   └── Toast: "✅ 最终确定成功！🎉 恭喜解锁：最终确定功能！👉 等待时间锁过期后执行提案！"
   └── KnowledgePanel: "✅ 太棒了！提案已通过并进入时间锁。👉 等待时间锁过期后执行提案！"

9. 点击执行区了解安全防护（或等待时间锁过期后执行）
   └── 解锁: reentrancy_guard
   └── Toast: "🛡️ 已了解重入保护！🎉 恭喜解锁：重入保护机制！👉 执行提案了解低级别调用！"
   └── KnowledgePanel: "🛡️ 优秀！ReentrancyGuard防止执行阶段的重入攻击。👉 执行提案了解低级别调用！"

10. 执行提案操作
    └── 解锁: low_level_call
    └── Toast: "🔧 提案执行成功！🎉 恭喜解锁：低级别调用！🎉 恭喜完成 Day 28 学习！"
    └── KnowledgePanel: "🎉 恭喜完成 Day 28 学习！你掌握了DAO治理的所有核心概念！"
```

### 4.2 用户操作流程（Proposer路径）

```
1. 切换到Proposer角色
   └── 提示: "📝 你现在是Proposer！👉 创建一个新提案！"

2. 执行创建提案操作
   └── 解锁: proposal_struct
   └── Toast: "📝 提案创建成功！🎉 恭喜解锁：提案结构体！👉 切换到TokenHolder角色参与投票！"
   └── KnowledgePanel: "📝 优秀！提案创建需要支付押金，执行后退还。👉 切换到TokenHolder角色参与投票！"
```

---

## 五、技术实现要点

### 5.1 需要创建的文件

1. **组件文件**: `src/components/days/Day28/DecentralizedGovernance.vue`
2. **Composable**: `src/composables/useDay28.js`
3. **days.js 配置**: 添加 Day 28 配置
4. **concepts.js 配置**: 添加 day28ConceptDefinitions 和提示函数
5. **DayContent.vue**: 注册 Day 28 组件
6. **Sidebar.vue**: 添加 Day 28 概念定义支持
7. **KnowledgePanel.vue**: 添加 Day 28 支持
8. **useCurrentDayRealtimeData.js**: 注册 Day 28

### 5.2 特殊功能实现

#### 1. 提案状态流转可视化
```vue
<div class="state-flow-section" @click="handleStateFlowClick">
  <h4>📊 提案生命周期（点击了解状态机）</h4>
  <div class="state-flow">
    <div
      v-for="state in proposalStates"
      :key="state.key"
      class="state-node"
      :class="{ active: currentProposal?.state === state.key }"
    >
      {{ state.label }}
    </div>
  </div>
</div>
```

#### 2. 时间锁倒计时与押金退还动画
```vue
<!-- 时间锁倒计时 -->
<div v-if="proposal.state === 'Queued'" class="timelock-countdown">
  <h4>🔒 时间锁倒计时</h4>
  <div class="countdown-display">
    {{ formatTimeLeft(proposal.executionTime - currentTime) }}
  </div>
  <button @click="fastForwardTime(1)">⏩ 快进1天</button>
</div>

<!-- 押金退还动画 -->
<div v-if="showDepositRefund" class="deposit-refund-animation">
  <h4>💰 押金退还</h4>
  <div class="refund-flow">
    <div class="refund-from">合约: 100 GOVERN</div>
    <div class="refund-arrow">→</div>
    <div class="refund-to">提案创建者: 0x1234...</div>
  </div>
</div>
```

#### 3. 投票进度条
```vue
<div class="voting-progress">
  <div class="progress-bar">
    <div class="progress-for" :style="{ width: forPercentage + '%' }"></div>
    <div class="progress-against" :style="{ width: againstPercentage + '%' }"></div>
  </div>
  <div class="vote-stats">
    <span>👍 赞成: {{ proposal.votesFor }}</span>
    <span>👎 反对: {{ proposal.votesAgainst }}</span>
  </div>
</div>
```

### 5.3 模拟数据设计

```javascript
// 初始提案数据
const initialProposals = [
  {
    id: 1,
    description: "升级协议版本",
    state: "Active", // Pending, Active, Succeeded, Defeated, Queued, Executed
    deadline: Date.now() + 2 * 24 * 60 * 60 * 1000, // 2天后
    votesFor: 30000,
    votesAgainst: 10000,
    executionTime: null,
    executed: false
  },
  {
    id: 2,
    description: "调整手续费",
    state: "Queued",
    deadline: Date.now() - 24 * 60 * 60 * 1000, // 已结束
    votesFor: 45000,
    votesAgainst: 5000,
    executionTime: Date.now() + 1 * 24 * 60 * 60 * 1000, // 1天后可执行
    executed: false
  }
]

// 用户代币数据
const userTokenData = {
  balance: 5000,
  totalSupply: 100000,
  votingPower: 5000
}
```

### 5.4 事件日志记录

```javascript
// 在 useDay28.js 中
const createProposal = (description, targets, data) => {
  // ... 创建逻辑
  
  logStore.addLog(28, '创建提案', `提案 #${id}: ${description}`, 'createProposal28')
}

const vote = (proposalId, support, weight) => {
  // ... 投票逻辑
  
  logStore.addLog(28, '投票', `提案 #${proposalId}: ${support ? '赞成' : '反对'} (${weight}票)`, 'vote28')
}

const finalize = (proposalId) => {
  // ... 最终确定逻辑
  
  logStore.addLog(28, '最终确定提案', `提案 #${proposalId} 已通过，进入时间锁`, 'finalize28')
}

const execute = (proposalId) => {
  // ... 执行逻辑
  
  logStore.addLog(28, '执行提案', `提案 #${proposalId} 执行成功，押金已退还`, 'execute28')
}
```

### 5.5 Gas 估算配置

```javascript
// 在 src/data/concepts.js 中添加
export const gasEstimates = {
  // ... 其他 Day
  
  // Day 28
  createProposal28: 150000,    // 创建提案（存储数据成本高）
  vote28: 50000,               // 投票
  finalize28: 40000,           // 最终确定
  execute28: 80000,            // 执行（低级别调用）
}
```

---

## 六、UI/UX 设计要点

### 6.1 颜色方案
- 主题色: 深蓝色 (#1e3a5f) - 代表治理和权威
- 强调色: 金色 (#f59e0b) - 代表代币和投票权
- 按钮颜色:
  - 投票按钮: 绿色(赞成) / 红色(反对)
  - 执行按钮: 紫色
  - 创建按钮: 蓝色
  - 最终确定按钮: 青色

### 6.2 动画效果
- 投票时: 进度条平滑过渡动画
- 状态变更: 状态节点高亮闪烁
- 时间锁: 倒计时动画
- 解锁概念: 徽章弹出动画

### 6.3 响应式设计
- 桌面端: 双栏布局
- 平板端: 单栏布局，知识面板折叠
- 移动端: 单栏布局，操作按钮全宽

---

## 七、检查清单

### 7.1 开发前准备
- [ ] 确认合约代码已最终确定
- [ ] 确认知识点列表完整
- [ ] 确认UI设计稿（如有）

### 7.2 开发中检查
- [ ] days.js 配置正确（title, subtitle, concepts）
- [ ] concepts.js 配置完整（day28ConceptDefinitions, getHint, getDay28ExplanationHint）
- [ ] concepts.js 添加 Gas 估算配置（createProposal28, vote28, finalize28, execute28）
- [ ] Sidebar.vue 添加 Day 28 支持
- [ ] KnowledgePanel.vue 添加 Day 28 支持
- [ ] DayContent.vue 注册组件
- [ ] useCurrentDayRealtimeData.js 注册
- [ ] 组件中正确使用 progressStore.unlockConcept()
- [ ] 组件中正确传递 customHint 给 KnowledgePanel
- [ ] Composable 返回 hints 和 nextStep
- [ ] Composable 中使用 logStore.addLog() 记录事件日志
- [ ] 时间快进功能实现（fastForwardTime函数）
- [ ] 角色切换提示明确（显示切换按钮和用途说明）
- [ ] 治理参数面板顺序解锁逻辑（timelock_mechanism → quorum_threshold）

### 7.3 开发后测试
- [ ] 所有知识点可以正常解锁
- [ ] 提示信息正确显示
- [ ] 角色切换正常
- [ ] 提案状态流转正确
- [ ] 时间锁倒计时正常
- [ ] 事件日志正确记录

---

## 八、参考文档

- [AI_PROMPT_GUIDE.md](../AI_PROMPT_GUIDE.md) - AI助手开发指南
- [DAY_HISTORY.md](../DAY_HISTORY.md) - Day详细参考示例
- [添加新Day检查清单.md](../添加新Day检查清单.md) - 完整检查清单
- [提示系统设计规范.md](../提示系统设计规范.md) - 提示系统设计规范
