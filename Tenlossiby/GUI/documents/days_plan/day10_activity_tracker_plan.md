# Day 10 - ActivityTracker 实施计划

> 文档版本：20260313

## 一、需求确认与修改总结

### 1.1 根据用户反馈的关键修改

| 项目 | 原规划 | 修改后 |
|------|--------|--------|
| **身份切换** | 🎭 用户 ↔ 已注册用户 | 👤 状态指示器（未注册/已注册：用户名） |
| **页面状态** | 所有区域同时显示 | 状态机：REGISTER → TRACK |
| **onlyRegistered解锁** | 尝试未注册调用 | 注册成功后直接解锁 |
| **里程碑结构** | milestones: [] | milestones: { weightGoal, workouts10, workouts50, distance100K } |
| **合约名称** | SimpleFitnessTracker | ActivityTracker |

### 1.2 优化项确认

**必须实现（P1）：**
- ✅ 合约名称统一为 ActivityTracker
- ✅ onlyRegistered_modifier 注册成功后解锁
- ✅ 里程碑状态对象化结构
- ✅ 注册/功能区状态机

**建议实现（P2）：**
- 🔹 运动类型自定义选项
- 🔹 运动历史空状态提示
- 🔹 单位转换（分钟/小时 → 秒，米/公里 → 米）

**可选实现（P3）：**
- 💡 运动历史排序功能
- 💡 里程碑达成动画

---

## 二、知识点设计

```javascript
// src/data/days.js
10: {
    title: "Day 10 - 健身追踪器",
    subtitle: "健身追踪器/ActivityTracker",
    concepts: [
        "struct_definition",        // struct UserProfile, WorkoutActivity
        "array_in_mapping",         // mapping => WorkoutActivity[]
        "multiple_mappings",        // userProfiles, workoutHistory, totalWorkouts, totalDistance
        "storage_keyword",          // UserProfile storage profile
        "event_logging",            // UserRegistered, WorkoutLogged, MilestoneAchieved
        "milestone_detection",      // 里程碑检测逻辑
        "timestamp_usage",          // block.timestamp
        "onlyRegistered_modifier"   // 自定义修饰符
    ]
}
```

---

## 三、页面布局设计

### 3.1 整体布局

```
┌─────────────────────────────────────────────────────────┐
│  Day 10 - 健身追踪器 / ActivityTracker                    │
├──────────────────────────┬──────────────────────────────┤
│                          │                              │
│   【左侧：交互区域】        │   【右侧：知识面板】          │
│                          │                              │
│  ┌────────────────────┐  │  ┌────────────────────────┐  │
│  │ 👤 状态指示器       │  │  │ 📚 知识点进度           │  │
│  │ 未注册 / 已注册：张三│  │  │ ████████░░ 80%         │  │
│  └────────────────────┘  │  └────────────────────────┘  │
│                          │                              │
│  ╔═══════════════════════╗│  ┌────────────────────────┐  │
│  ║  未注册状态 (REGISTER) ║│  │ ✅ 已解锁概念           │  │
│  ╠═══════════════════════╣│  │ ⬜ 待解锁概念           │  │
│  ║ ┌───────────────────┐ ║│  └────────────────────────┘  │
│  ║ │ 👋 欢迎使用健身追踪器│ ║│                              │
│  ║ │ 请先注册开始记录    │ ║│  ┌────────────────────────┐  │
│  ║ │                   │ ║│  │ 📄 查看完整代码         │  │
│  ║ │ 昵称: [________]  │ ║│  └────────────────────────┘  │
│  ║ │ 体重: [________]  │ ║│                              │
│  ║ │                   │ ║│                              │
│  ║ │ [🎯 开始健身之旅] │ ║│                              │
│  ║ └───────────────────┘ ║│                              │
│  ╚═══════════════════════╝│                              │
│                          │                              │
│  ╔═══════════════════════╗│                              │
│  ║ 已注册状态 (TRACK)    ║│                              │
│  ╠═══════════════════════╣│                              │
│  ║ ┌───────────────────┐ ║│                              │
│  ║ │ 🏃 记录运动        │ ║│                              │
│  ║ │ 类型/时长/距离    │ ║│                              │
│  ║ └───────────────────┘ ║│                              │
│  ║ ┌───────────────────┐ ║│                              │
│  ║ │ ⚖️ 更新体重        │ ║│                              │
│  ║ │ 新体重输入        │ ║│                              │
│  ║ └───────────────────┘ ║│                              │
│  ║ ┌───────────────────┐ ║│                              │
│  ║ │ 📊 数据统计        │ ║│                              │
│  ║ │ 总次数/总距离     │ ║│                              │
│  ║ └───────────────────┘ ║│                              │
│  ║ ┌───────────────────┐ ║│                              │
│  ║ │ 🏆 里程碑成就      │ ║│                              │
│  ║ │ 4个里程碑卡片     │ ║│                              │
│  ║ └───────────────────┘ ║│                              │
│  ╚═══════════════════════╝│                              │
│                          │                              │
└──────────────────────────┴──────────────────────────────┘
```

### 3.2 状态机设计

```javascript
const pageState = computed(() => {
  if (!userProfile.value.isRegistered) {
    return 'REGISTER'  // 只显示注册区
  } else {
    return 'TRACK'     // 显示完整功能
  }
})
```

---

## 四、解锁逻辑详细设计

| 操作 | 解锁概念 | 触发时机 |
|------|----------|----------|
| **注册成功** | `struct_definition` | 创建 UserProfile struct |
| **注册成功** | `event_logging` | 触发 UserRegistered 事件 |
| **注册成功** | `onlyRegistered_modifier` | 说明修饰符保护机制 |
| **查看运动历史** | `array_in_mapping` | 展示 workoutHistory 数组 |
| **查看统计数据** | `multiple_mappings` | 展示多个 mapping |
| **更新体重** | `storage_keyword` | 使用 storage 关键字 |
| **达成任意里程碑** | `milestone_detection` | 检测里程碑逻辑 |
| **记录运动** | `timestamp_usage` | 使用 block.timestamp |

---

## 五、里程碑系统设计

### 5.1 里程碑状态结构

```javascript
// contractStore.js
day10: {
  // ...其他状态
  milestones: {
    weightGoal: { achieved: false, timestamp: 0, title: '减重目标达成', icon: '⚖️' },
    workouts10: { achieved: false, timestamp: 0, title: '10次运动', icon: '🏃' },
    workouts50: { achieved: false, timestamp: 0, title: '50次运动大师', icon: '🏆' },
    distance100K: { achieved: false, timestamp: 0, title: '100公里里程碑', icon: '🌍' }
  }
}
```

### 5.2 里程碑检测逻辑

```javascript
// 减重里程碑（减少≥5%）
if (newWeight < oldWeight && 
    (oldWeight - newWeight) * 100 / oldWeight >= 5) {
  unlockMilestone('weightGoal')
}

// 运动次数里程碑
if (totalWorkouts === 10) unlockMilestone('workouts10')
if (totalWorkouts === 50) unlockMilestone('workouts50')

// 距离里程碑（跨越100公里）
if (totalDistance >= 100000 && totalDistance - distance < 100000) {
  unlockMilestone('distance100K')
}
```

### 5.3 里程碑展示

```html
<div class="milestone-grid">
  <div 
    v-for="(milestone, key) in milestones" 
    :key="key"
    :class="['milestone-card', { achieved: milestone.achieved }]"
  >
    <div class="milestone-icon">{{ milestone.icon }}</div>
    <div class="milestone-title">{{ milestone.title }}</div>
    <div class="milestone-status">
      {{ milestone.achieved ? '✅ 已达成' : '⬜ 未达成' }}
    </div>
    <div v-if="milestone.achieved" class="milestone-time">
      {{ formatTime(milestone.timestamp) }}
    </div>
  </div>
</div>
```

---

## 六、运动记录功能设计

### 6.1 运动类型选择

预设类型 + 自定义：
- 🏃 跑步 (Running)
- 🚴 骑行 (Cycling)
- 🏊 游泳 (Swimming)
- 🚶 步行 (Walking)
- 🧘 瑜伽 (Yoga)
- ⛹️ 篮球 (Basketball)
- ✏️ 自定义 (Custom)

### 6.2 单位转换

```javascript
// 时长转换（前端输入 → 合约秒数）
const convertToSeconds = (value, unit) => {
  return unit === 'minutes' ? value * 60 : value * 3600
}

// 距离转换（前端输入 → 合约米数）
const convertToMeters = (value, unit) => {
  return unit === 'meters' ? value : value * 1000
}
```

### 6.3 运动历史展示

```html
<!-- 空状态 -->
<div v-if="workoutHistory.length === 0" class="empty-history">
  <div class="empty-icon">📝</div>
  <p>还没有运动记录</p>
  <p>开始您的第一次运动吧！</p>
</div>

<!-- 时间线 -->
<div v-else class="history-timeline">
  <div v-for="(workout, index) in workoutHistory" :key="index" class="timeline-item">
    <div class="timeline-icon">{{ getActivityIcon(workout.activityType) }}</div>
    <div class="timeline-content">
      <div class="activity-title">{{ workout.activityType }}</div>
      <div class="activity-meta">
        {{ formatDuration(workout.duration) }} | {{ formatDistance(workout.distance) }}
      </div>
      <div class="activity-time">{{ formatTimestamp(workout.timestamp) }}</div>
    </div>
  </div>
</div>
```

---

## 七、实施步骤

### 步骤 1：修改 days.js
- 添加 Day 10 配置（title, subtitle, concepts）

### 步骤 2：修改 contractStore.js
- 添加 day10 状态对象
- 包含：userProfile, workoutHistory, totalWorkouts, totalDistance, milestones

### 步骤 3：创建 useDay10.js
- 实现业务逻辑：注册、记录运动、更新体重、里程碑检测
- 实现单位转换函数
- 实现里程碑解锁逻辑

### 步骤 4：创建 ActivityTracker.vue
- 实现状态机（REGISTER / TRACK）
- 实现注册表单
- 实现运动记录区
- 实现体重更新区
- 实现数据统计面板
- 实现里程碑展示区
- 实现运动历史时间线

### 步骤 5：修改 DayContent.vue
- 添加 Day 10 组件动态导入

### 步骤 6：测试验证
- 验证注册流程
- 验证知识点解锁
- 验证里程碑检测
- 验证单位转换

---

## 八、文件清单

| 文件路径 | 操作 | 说明 |
|----------|------|------|
| `src/data/days.js` | 修改 | 添加 day10 配置 |
| `src/stores/contractStore.js` | 修改 | 添加 day10 状态 |
| `src/composables/useDay10.js` | 新建 | 业务逻辑 |
| `src/components/days/Day10/ActivityTracker.vue` | 新建 | 主组件 |
| `src/components/DayContent.vue` | 修改 | 注册组件 |

---

## 九、风险提示

1. **合约名称**：确保 days.js 中的代码片段使用 ActivityTracker 而非 SimpleFitnessTracker
2. **状态初始化**：确保 initializeContract(10) 正确初始化所有状态
3. **里程碑检测**：注意距离里程碑的跨越检测逻辑（本次记录是否跨越100公里）

---

## 十、确认签字

计划已根据用户反馈完成优化，等待用户确认后开始实施。
---
🔍 问题诊断
概念定义缺失：concepts.js 中没有 Day 10 的 8 个概念定义，导致显示 "undefined undefined"
函数签名前缀不一致：ActivityTracker.vue 中使用了 "function" 而不是 "函数："
交互提示不明确：没有告诉用户下一步该做什么
📝 完整修复方案（直接复制使用）
🔧 修复 1：在 concepts.js 中添加 Day 10 概念定义
文件位置：src/data/concepts.js

在 conceptDefinitions 中添加（在 contract_composition 之后，第 424 行之后）：


    },
    // ========== Day 10 概念定义 ==========
    struct_definition: {
        name: "结构体定义",
        icon: "📦",
        unlockAt: 1,
        message: "你刚刚使用了 `struct` 结构体！它可以打包多个不同类型的变量，创建自定义数据类型。",
        code: `struct UserProfile {
    string name;       // 用户姓名
    uint256 weight;    // 用户体重
    bool isRegistered; // 是否已注册
}

// 创建结构体实例
UserProfile memory newUser = UserProfile({
    name: "张三",
    weight: 70,
    isRegistered: true
});`
    },
    array_in_mapping: {
        name: "映射中的数组",
        icon: "🗂️",
        unlockAt: 2,
        message: "你发现了 mapping 到数组的用法！这可以为每个用户存储一个运动记录列表。",
        code: `// mapping 到数组
mapping(address => WorkoutActivity[]) private workoutHistory;

// 添加新记录
workoutHistory[msg.sender].push(newWorkout);

// 获取记录数量
uint256 count = workoutHistory[msg.sender].length;`
    },
    multiple_mappings: {
        name: "多个映射组合",
        icon: "🗺️",
        unlockAt: 3,
        message: "你看到了多个映射如何协同工作！userProfiles、totalWorkouts、totalDistance 分别存储不同维度的数据。",
        code: `// 多个映射协同工作
mapping(address => UserProfile) public userProfiles;        // 用户资料
mapping(address => WorkoutActivity[]) private workoutHistory;  // 运动历史
mapping(address => uint256) public totalWorkouts;            // 运动次数
mapping(address => uint256) public totalDistance;            // 总距离

// 它们共同构建了完整的数据视图`
    },
    storage_keyword: {
        name: "storage 关键字",
        icon: "💾",
        unlockAt: 4,
        message: "你使用了 `storage` 关键字！它创建状态变量的引用，直接修改原数据而不是创建副本，非常节省 Gas。",
        code: `function updateWeight(uint256 _newWeight) public {
    // storage 关键字创建引用
    UserProfile storage profile = userProfiles[msg.sender];
    
    // 直接修改原数据，不创建副本
    profile.weight = _newWeight;
    
    // ❌ 如果用 memory，会创建副本，修改不会生效
    // UserProfile memory profile = userProfiles[msg.sender];
}`
    },
    event_logging: {
        name: "事件日志",
        icon: "📋",
        unlockAt: 1,
        message: "你触发了事件！事件记录在区块链日志中，前端可以监听事件来获取实时通知。",
        code: `// 定义事件
event UserRegistered(address indexed userAddress, string name, uint256 timestamp);
event WorkoutLogged(address indexed user, string activityType, uint256 duration);

// 触发事件
emit UserRegistered(msg.sender, "张三", block.timestamp);
emit WorkoutLogged(msg.sender, "跑步", 1800);`
    },
    milestone_detection: {
        name: "里程碑检测",
        icon: "🏆",
        unlockAt: 5,
        message: "你完成了里程碑检测！通过条件判断检测用户是否达成特定目标，并触发相应奖励。",
        code: `// 运动次数里程碑
if (totalWorkouts == 10) {
    emit MilestoneAchieved(msg.sender, "10次运动达成！");
} else if (totalWorkouts == 50) {
    emit MilestoneAchieved(msg.sender, "50次运动大师！");
}

// 距离里程碑（跨越检测）
if (totalDistance >= 100000 && totalDistance - distance < 100000) {
    emit MilestoneAchieved(msg.sender, "100公里里程碑！");
}`
    },
    timestamp_usage: {
        name: "时间戳使用",
        icon: "⏰",
        unlockAt: 2,
        message: "你使用了 `block.timestamp`！它记录当前区块的时间戳，用于标记运动记录的时间。",
        code: `WorkoutActivity memory newWorkout = WorkoutActivity({
    activityType: "跑步",
    duration: 1800,
    distance: 5000,
    timestamp: block.timestamp  // 记录运动时间
});`
    },
    onlyRegistered_modifier: {
        name: "onlyRegistered 修饰符",
        icon: "🛡️",
        unlockAt: 1,
        message: "你使用了 `onlyRegistered` 修饰符！它确保只有注册用户才能调用特定函数，保护合约安全。",
        code: `// 定义修饰符
modifier onlyRegistered() {
    require(userProfiles[msg.sender].isRegistered, "User not registered");
    _;  // 继续执行函数
}

// 使用修饰符
function logWorkout(...) public onlyRegistered {
    // 只有注册用户才能执行
}`
    }
};
在 getHint 函数中添加（在 contract_composition 提示之后，第 477 行之后）：


        contract_composition: "🧩 恭喜你！你掌握了合约组合！合约可以像乐高积木一样组合复用。你已完成 Day 9 所有核心概念！",
        // ========== Day 10 提示 ==========
        struct_definition: "📦 太棒了！你学会了使用结构体打包数据！继续注册来解锁更多概念！",
        array_in_mapping: "🗂️ 很好！你看到了映射到数组的用法！记录一次运动来解锁 timestamp_usage！",
        multiple_mappings: "🗺️ 优秀！你了解了多个映射如何协同工作！更新体重来解锁 storage_keyword！",
        storage_keyword: "💦 太棒了！你了解了 storage 的威力！继续记录运动来达成里程碑！",
        event_logging: "📋 不错！你触发了事件日志！事件是区块链通知机制的核心！继续探索！",
        milestone_detection: "🏆 恭喜！你达成了里程碑！条件检测是游戏化应用的核心！继续解锁更多概念！",
        timestamp_usage: "⏰ 很好！你学会了记录时间戳！继续记录运动，达成更多里程碑！",
        onlyRegistered_modifier: "🛡️ 太棒了！你了解了修饰符如何保护函数！记录运动来解锁 array_in_mapping！"
    };
在 getConceptExplanationHint 函数中添加（在最后，第 532 行之后）：


        newton_iteration: "📖 牛顿迭代法是一种快速逼近方程根的算法。在 Solidity 中，由于不支持浮点数运算，我们使用整数运算通过多次迭代来逼近真实值。限制迭代次数可以防止 Gas 耗尽。",
        contract_composition: "📖 合约组合是 Solidity 的重要设计理念。通过将功能拆分到多个合约，可以实现代码复用、降低复杂度、提高可维护性。这是构建复杂 DApp 的基础。",
        // ========== Day 10 解释提示 ==========
        struct_definition: "📖 `struct` 结构体允许你定义自定义的数据类型，将多个不同类型的变量打包在一起。这是组织复杂数据的有效方式，让代码更加清晰和易于维护。",
        array_in_mapping: "📖 Solidity 允许将映射指向数组，如 `mapping(address => WorkoutActivity[])`。这样每个地址都有一个动态数组，非常适合存储用户的历史记录、交易列表等一对多的数据关系。",
        multiple_mappings: "📖 在实际应用中，经常使用多个 mapping 来存储不同维度的数据。比如一个 mapping 存用户资料，另一个存用户余额。通过同一个 key（如用户地址）可以关联访问多个数据结构。",
        storage_keyword: "📖 `storage` 和 `memory` 是 Solidity 中两个重要的数据位置关键字。`storage` 变量永久存储在区块链状态中，而 `memory` 变量只在函数执行期间临时存在。使用 `storage` 引用可以直接修改状态变量，节省 Gas。",
        event_logging: "📖 事件（Event）是 Solidity 的日志机制。通过 `emit` 触发事件，数据会被记录在区块链的交易日志中。前端可以监听事件来实现实时通知、记录历史等功能，事件是 DApp 前后端通信的重要桥梁。",
        milestone_detection: "📖 里程碑检测是游戏化应用的核心机制。通过条件判断（如 `if (count == 10)`）检测用户是否达成特定目标，并触发相应奖励或通知。这能激励用户持续使用产品。",
        timestamp_usage: "📖 `block.timestamp` 是当前区块的时间戳（Unix 时间，秒）。它常用于记录事件发生时间、设置时间限制、计算时间差等。注意它由矿工设置，存在约15秒的误差，不应用于精确计时。",
        onlyRegistered_modifier: "📖 修饰符（Modifier）是 Solidity 的复用机制，用于在函数执行前添加前置条件检查。`onlyRegistered` 确保只有满足条件的用户（已注册）才能调用函数。这简化了代码，避免了在每个函数中重复写检查逻辑。"
    };
🔧 修复 2：修改 ActivityTracker.vue 中的函数签名
文件位置：src/components/days/Day10/ActivityTracker.vue

修改第 65 行：


<!-- 修改前 -->
<code class="function-signature">function logWorkout(string _activityType, uint256 _duration, uint256 _distance) public onlyRegistered</code>

<!-- 修改后 -->
<code class="function-signature">函数：logWorkout(string _activityType, uint256 _duration, uint256 _distance) public onlyRegistered</code>
修改第 144 行：


<!-- 修改前 -->
<code class="function-signature">function updateWeight(uint256 _newWeight) public onlyRegistered</code>

<!-- 修改后 -->
<code class="function-signature">函数：updateWeight(uint256 _newWeight) public onlyRegistered</code>
🔧 修复 3（可选）：优化交互提示的"下一步"指引
如果您希望在知识面板中显示更明确的"下一步该做什么"提示，可以修改 KnowledgePanel.vue 的逻辑，但上面的 getHint 修改已经足够了。

📋 修改清单总结
文件	行号	操作
src/data/concepts.js	424行后	添加 Day 10 的 8 个概念定义到 conceptDefinitions
src/data/concepts.js	477行后	添加 Day 10 的 8 个提示到 getHint
src/data/concepts.js	532行后	添加 Day 10 的 8 个解释到 getConceptExplanationHint
src/components/days/Day10/ActivityTracker.vue	65行	修改函数签名前缀为"函数："
src/components/days/Day10/ActivityTracker.vue	144行	修改函数签名前缀为"函数："
✅ 修复后的效果
✅ 点击概念标签时：会显示正确的概念名称、图标和代码示例（不再是 "undefined undefined"）
✅ 函数签名显示：统一为 "函数：xxx" 格式
✅ 交互提示：会明确告诉用户下一步该做什么来解锁下一个概念
示例效果：

解锁 struct_definition 后，提示："📦 太棒了！你学会了使用结构体打包数据！继续注册来解锁更多概念！"
解锁 event_logging 后，提示："📋 不错！你触发了事件日志！事件是区块链通知机制的核心！继续探索！"

---

📊 Day 10 文本显示系统分析
1️⃣ 三处文本显示的位置和作用
显示位置	显示内容	内容来源	作用
小弹窗（绿色toast）	"📦 太棒了！👉 继续记录运动来解锁 timestamp_usage！"	useDay10.js 的 getUnlockHint()	✅ 即时反馈 + 下一步行动指引
交互提示气泡（KnowledgePanel上方）	"📖 struct 结构体允许你定义..."	concepts.js 的 getConceptExplanationHint()	✅ 概念的详细解释
点击概念标签	应该显示概念解释	concepts.js 的 getConceptExplanationHint()	✅ 查看概念的详细说明
⚠️ 发现的逻辑问题
问题 1：概念解锁顺序混乱
当前的解锁时机和"下一步"提示之间存在循环依赖：


注册 → 解锁 [struct_definition, event_logging, onlyRegistered_modifier]
      struct_definition 提示：记录运动 → timestamp_usage ✓
      event_logging 提示：记录运动 → array_in_mapping ✓
      onlyRegistered_modifier 提示：记录运动 → timestamp_usage ✓

记录运动 → 解锁 [timestamp_usage, array_in_mapping]
           timestamp_usage 提示：继续运动 → milestone_detection
           array_in_mapping 提示：查看统计 → multiple_mappings ✓

查看统计 → 解锁 multiple_mappings
           multiple_mappings 提示：更新体重 → storage_keyword ✓

更新体重 → 解锁 [storage_keyword, multiple_mappings]
           storage_keyword 提示：继续运动 → milestone_detection
           multiple_mappings 已经解锁，不会再显示提示

达成里程碑 → 解锁 milestone_detection
             milestone_detection 提示：继续运动，解锁所有概念（循环了！）
问题：用户按照提示操作，但 milestone_detection 提示"继续运动"，可能导致困惑。

问题 2：event_logging 的提示指向不准确
当前（useDay10.js line 38）：


event_logging: '📋 不错！你触发了事件日志！👉 记录运动来解锁 array_in_mapping！'
分析：

event_logging 是注册时解锁的
用户确实需要"记录运动"才能解锁 array_in_mapping
但这个提示对用户来说信息量不够：
用户可能不理解为什么"记录运动"会解锁"映射中的数组"
没有解释 array_in_mapping 是什么
问题 3：onlyRegistered_modifier 提示冗余
当前（useDay10.js line 39）：


onlyRegistered_modifier: '🛡️ 太棒了！你了解了修饰符如何保护函数！👉 记录运动来解锁 timestamp_usage！'
分析：

注册后，struct_definition 已经提示"记录运动来解锁 timestamp_usage"
onlyRegistered_modifier 的提示重复了
浪费了一个教学机会
问题 4：milestone_detection 提示不明确
当前（useDay10.js line 44）：


milestone_detection: '🏆 恭喜！你达成了里程碑！👉 继续运动，解锁所有概念！'
问题：

"继续运动，解锁所有概念"是循环提示（如果所有概念都解锁了，还继续什么？）
应该更明确：告诉用户已经完成了所有学习，可以查看完整代码了
✅ 修复建议
方案 A：简化解锁路径（推荐）
修改 useDay10.js 的 getUnlockHint：


// 获取解锁提示（下一步该做什么）
const getUnlockHint = (conceptKey) => {
  const hints = {
    // 注册时解锁的概念
    struct_definition: '📦 太棒了！你学会了使用结构体打包数据！👉 记录一次运动来看看时间戳如何工作！',
    event_logging: '📋 不错！你触发了事件日志！👉 记录运动来查看运动历史如何存储！',
    onlyRegistered_modifier: '🛡️ 太棒了！你了解了修饰符如何保护函数！👉 记录运动来解锁更多概念！',
    
    // 记录运动时解锁的概念
    timestamp_usage: '⏰ 很好！你学会了记录时间戳！👉 查看运动历史来解锁 array_in_mapping！',
    array_in_mapping: '🗂️ 很好！你看到了映射到数组的用法！👉 查看统计数据来解锁 multiple_mappings！',
    
    // 查看统计时解锁的概念
    multiple_mappings: '🗺️ 优秀！你了解了多个映射如何协同工作！👉 更新体重来解锁 storage_keyword！',
    
    // 更新体重时解锁的概念
    storage_keyword: '💾 太棒了！你了解了 storage 的威力！👉 继续记录运动，达成里程碑来解锁 milestone_detection！',
    
    // 达成里程碑时解锁的概念
    milestone_detection: '🏆 恭喜！你达成了里程碑！👉 查看完整代码来复习所有知识！'
  }
  return hints[conceptKey] || ''
}
修改后的逻辑：


注册 → 记录运动 → 查看历史 → 查看统计 → 更新体重 → 继续运动 → 达成里程碑 → 查看代码
  ↓      ↓           ↓            ↓           ↓           ↓              ↓
 struct  timestamp   array      multiple    storage      milestone     完成
 event  array                                 (trigger)
方案 B：添加概念间的依赖说明
在提示中添加更详细的解释：


const getUnlockHint = (conceptKey) => {
  const hints = {
    struct_definition: '📦 太棒了！你学会了使用结构体打包数据！\n💡 每次记录运动时，我们都会创建一个 WorkoutActivity 结构体来存储运动信息。👉 记录一次运动来体验！',
    
    event_logging: '📋 不错！你触发了事件日志！\n💡 事件就像区块链的"通知系统"，记录重要操作。👉 记录运动来看看如何存储运动历史！',
    
    onlyRegistered_modifier: '🛡️ 太棒了！你了解了修饰符如何保护函数！\n💡 只有注册用户才能记录运动、更新体重等。👉 记录运动来解锁 timestamp_usage！',
    
    timestamp_usage: '⏰ 很好！你学会了记录时间戳！\n💡 每条运动记录都有时间戳，可以追踪运动时间。👉 查看运动历史来解锁 array_in_mapping！',
    
    array_in_mapping: '🗂️ 很好！你看到了映射到数组的用法！\n💡 mapping(address => WorkoutActivity[]) 让每个用户都有一个运动记录数组。👉 查看统计数据来解锁 multiple_mappings！',
    
    multiple_mappings: '🗺️ 优秀！你了解了多个映射如何协同工作！\n💡 userProfiles、totalWorkouts、totalDistance 分别存储不同维度的数据。👉 更新体重来解锁 storage_keyword！',
    
    storage_keyword: '💾 太棒了！你了解了 storage 的威力！\n💡 storage 直接修改原数据，不创建副本，节省 Gas。👉 继续记录运动，达成里程碑来解锁 milestone_detection！',
    
    milestone_detection: '🏆 恭喜！你达成了里程碑！\n💡 通过条件判断检测用户是否达成目标，是游戏化应用的核心。👉 查看完整代码来复习所有知识！'
  }
  return hints[conceptKey] || ''
}
📝 完整的修复代码（方案 A，推荐）
文件：src/composables/useDay10.js

替换 getUnlockHint 函数（lines 34-47）：


// 获取解锁提示（下一步该做什么）
const getUnlockHint = (conceptKey) => {
  const hints = {
    // 注册时解锁的概念（3个）
    struct_definition: '📦 太棒了！你学会了使用结构体打包数据！👉 记录一次运动来看看时间戳如何工作！',
    event_logging: '📋 不错！你触发了事件日志！👉 记录运动来查看运动历史如何存储！',
    onlyRegistered_modifier: '🛡️ 太棒了！你了解了修饰符如何保护函数！👉 记录运动来解锁更多概念！',
    
    // 记录运动时解锁的概念（2个）
    timestamp_usage: '⏰ 很好！你学会了记录时间戳！👉 查看运动历史来解锁 array_in_mapping！',
    array_in_mapping: '🗂️ 很好！你看到了映射到数组的用法！👉 查看统计数据来解锁 multiple_mappings！',
    
    // 查看统计时解锁的概念（1个）
    multiple_mappings: '🗺️ 优秀！你了解了多个映射如何协同工作！👉 更新体重来解锁 storage_keyword！',
    
    // 更新体重时解锁的概念（1个）
    storage_keyword: '💾 太棒了！你了解了 storage 的威力！👉 继续记录运动，达成里程碑来解锁 milestone_detection！',
    
    // 达成里程碑时解锁的概念（1个）
    milestone_detection: '🏆 恭喜！你达成了里程碑！👉 查看完整代码来复习所有知识！'
  }
  return hints[conceptKey] || ''
}

📋 修复后的完整用户体验流程

1. 注册成功
   ↓ 小弹窗："📦 太棒了！👉 记录一次运动来看看时间戳如何工作！"
   ↓ 交互气泡："📖 struct 结构体允许你定义..."

2. 记录运动
   ↓ 小弹窗："⏰ 很好！👉 查看运动历史来解锁 array_in_mapping！"
   ↓ 交互气泡："📖 block.timestamp 是当前区块的时间戳..."

3. 查看运动历史（点击"运动历史"区块）
   ↓ 小弹窗："🗂️ 很好！👉 查看统计数据来解锁 multiple_mappings！"
   ↓ 交互气泡："📖 Solidity 允许将映射指向数组..."

4. 查看统计数据（点击"运动统计"区块）
   ↓ 小弹窗："🗺️ 优秀！👉 更新体重来解锁 storage_keyword！"
   ↓ 交互气泡："📖 在实际应用中，经常使用多个 mapping..."

5. 更新体重
   ↓ 小弹窗："💾 太棒了！👉 继续记录运动，达成里程碑来解锁 milestone_detection！"
   ↓ 交互气泡："📖 storage 和 memory 是 Solidity 中两个重要的数据位置..."

6. 达成里程碑
   ↓ 小弹窗："🏆 恭喜！👉 查看完整代码来复习所有知识！"
   ↓ 交互气泡："📖 里程碑检测是游戏化应用的核心机制..."

7. 查看完整代码
   ✅ 完成所有学习！

---

看看小弹窗和交互提示是否会有重合或歧义。

📊 Day 10 文本显示系统对比分析
🎯 三处文本的职责划分
显示位置	显示时机	显示内容	目的
小弹窗	操作后立即显示	操作反馈 + 下一步行动指引	✅ 即时引导用户"做什么"
交互提示气泡	KnowledgePanel上方	当前选中概念的详细解释	✅ 帮助用户"理解"概念
知识面板标题	KnowledgePanel中间	最新解锁概念的标题+图标	✅ 告诉用户"解锁了什么"
✅ 当前实现的优点
从 useDay10.js 看，实现非常聪明：

1. 只显示第一个提示（避免信息过载）

// ActivityTracker.vue lines 368-369
if (result.unlockedHints && result.unlockedHints.length > 0) {
  showMessage(result.unlockedHints[0], false)  // ✅ 只显示第一个！
}
注册时解锁3个概念，但只显示第一个提示：

struct_definition: "📦 太棒了！👉 记录一次运动来看看时间戳如何工作！"
event_logging (不显示)
onlyRegistered_modifier (不显示)
这是正确的！ 一次性显示3个提示会让用户困惑。

⚠️ 潜在的重合/歧义问题
问题 1：注册后的第一次概念显示不一致
场景：用户注册成功

小弹窗显示（3秒后消失）：


📦 太棒了！你学会了使用结构体打包数据！👉 记录一次运动来看看时间戳如何工作！
交互提示气泡显示：


📖 struct 结构体允许你定义自定义的数据类型，将多个不同类型的变量打包在一起。这是组织复杂数据的有效方式...
问题：

小弹窗说："记录运动" → 看时间戳
但这是 struct_definition 的提示
用户可能会困惑："为什么记录运动会看到时间戳？"（需要先理解 struct 才能明白）
建议：
当前实现已经是合理的。因为：

小弹窗很快消失（3秒），用户可能不记得
交互提示气泡一直在，是主要的信息来源
小弹窗的作用是"即时反馈"，提示"下一步做什么"
交互提示气泡的作用是"详细解释"，解释"这是什么"
问题 2：多个概念同时解锁时，交互提示只显示最后一个
场景：用户注册成功，解锁了 [struct_definition, event_logging, onlyRegistered_modifier]

小弹窗：


📦 太棒了！你学会了使用结构体打包数据！👉 记录一次运动来看看时间戳如何工作！
交互提示气泡（KnowledgePanel.vue line 100-116）：


// 显示最新解锁的概念
const latestKey = props.unlockedConcepts[props.unlockedConcepts.length - 1]
// 显示：onlyRegistered_modifier 的解释
显示内容：


🛡️ onlyRegistered 修饰符
📖 修饰符是 Solidity 的复用机制，用于在函数执行前添加前置条件检查...
问题：

小弹窗说的是 struct_definition
交互提示气泡说的是 onlyRegistered_modifier
用户点击概念标签时，会看到3个概念，但不知道应该看哪一个
当前解决方案：
用户可以点击不同的概念标签查看各自的解释。这是合理的，因为：

概念列表显示了所有已解锁的概念
用户可以自由选择查看哪个概念
KnowledgePanel 有清晰的标题显示当前查看的概念
问题 3：getUnlockHint 和 concepts.js 的 getHint 职责不同但容易混淆
useDay10.js 的 getUnlockHint（小弹窗用）：


struct_definition: '📦 太棒了！你学会了使用结构体打包数据！👉 记录一次运动来看看时间戳如何工作！'
concepts.js 的 getHint（交互提示气泡用）：


struct_definition: "📦 太棒了！你学会了使用结构体打包数据！继续注册来解锁更多概念！"
问题：

两个函数的职责不同（getUnlockHint是"行动指引"，getHint是"概念解释"）
但命名容易混淆
但是，从代码看，交互提示气泡用的是 getConceptExplanationHint，不是 getHint！

让我确认一下...

🔍 KnowledgePanel 的显示逻辑确认
从 KnowledgePanel.vue lines 119-131 看：


// 提示文本
const hintText = computed(() => {
  // 如果用户手动选择了概念，优先显示该知识点的解释
  if (manualConceptKey.value && currentConcept.value) {
    return getConceptExplanationHint(currentConcept.value.key)  // ✅ 详细解释
  }
  // 其次使用外部传入的 customHint
  if (props.customHint) {
    return props.customHint
  }
  // 否则显示当前概念的交互提示
  return currentConcept.value ? getHint(currentConcept.value.key) : ''  // ⚠️ 用的是 getHint
})
发现问题：

用户手动点击概念标签：显示 getConceptExplanationHint ✅
没有手动选择，显示最新概念：显示 getHint ⚠️
getHint 和 getConceptExplanationHint 的区别：

函数	作用	示例
getHint	鼓励性提示	"📦 太棒了！你学会了使用结构体打包数据！继续注册来解锁更多概念！"
getConceptExplanationHint	详细解释	"📖 struct 结构体允许你定义自定义的数据类型..."
⚠️ 真正的问题
问题：第一次显示时，可能显示 getHint 而不是 getConceptExplanationHint
场景：用户注册成功，没有手动点击任何概念标签

小弹窗（3秒后消失）：


📦 太棒了！你学会了使用结构体打包数据！👉 记录一次运动来看看时间戳如何工作！
交互提示气泡（一直显示）：


📦 太棒了！你学会了使用结构体打包数据！继续注册来解锁更多概念！
问题：

小弹窗：记录运动 → timestamp_usage
交互提示气泡：继续注册（但这已经注册了！）
原因：
getHint 说"继续注册来解锁更多概念"，但用户已经注册完了，这个提示已经过时了！

✅ 修复建议
方案 A：修改 concepts.js 的 getHint，使其更通用（推荐）
修改 concepts.js 的 Day 10 getHint（lines 479-486）：


// ========== Day 10 提示 ==========
struct_definition: "📦 太棒了！你学会了使用结构体打包数据！👉 下一步：记录一次运动来看看时间戳如何工作！",
array_in_mapping: "🗂️ 很好！你看到了映射到数组的用法！👉 下一步：查看统计数据来解锁 multiple_mappings！",
multiple_mappings: "🗺️ 优秀！你了解了多个映射如何协同工作！👉 下一步：更新体重来解锁 storage_keyword！",
storage_keyword: "💾 太棒了！你了解了 storage 的威力！👉 下一步：继续记录运动，达成里程碑来解锁 milestone_detection！",
event_logging: "📋 不错！你触发了事件日志！👉 下一步：记录运动来查看运动历史如何存储！",
milestone_detection: "🏆 恭喜！你达成了里程碑！👉 下一步：查看完整代码来复习所有知识！",
timestamp_usage: "⏰ 很好！你学会了记录时间戳！👉 下一步：查看运动历史来解锁 array_in_mapping！",
onlyRegistered_modifier: "🛡️ 太棒了！你了解了修饰符如何保护函数！👉 下一步：记录运动来解锁更多概念！"
优点：

✅ 和小弹窗的提示完全一致
✅ 用户体验连贯
✅ 不会产生歧义
方案 B：修改 KnowledgePanel，默认使用 getConceptExplanationHint
修改 KnowledgePanel.vue lines 129-131：


// 修改前
return currentConcept.value ? getHint(currentConcept.value.key) : ''

// 修改后
return currentConcept.value ? getConceptExplanationHint(currentConcept.value.key) : ''
优点：

✅ 交互提示气泡始终显示"详细解释"
✅ 小弹窗始终显示"行动指引"
✅ 职责清晰，不会混淆
缺点：

⚠️ 交互提示气泡会变得很长
⚠️ 用户可能不喜欢看长文本
📝 推荐的最终方案
结合方案 A 和 B：

1. 修改 concepts.js 的 getHint（使用方案 A）
让交互提示气泡也显示"下一步指引"，和小弹窗保持一致。

2. 保留当前 useDay10.js 的实现
小弹窗只显示第一个提示，避免信息过载。

3. Day 1-9 没有小弹窗，所以不会有重合问题
Day 10 是第一个有小弹窗的Day，之前的概念提示都是通过交互提示气泡显示的。

✅ 总结
当前实现的问题
问题	严重程度	说明
小弹窗 vs 交互提示气泡内容不一致	🟡 中等	小弹窗说"记录运动"，交互提示说"继续注册"
多个概念同时解锁，交互提示只显示最后一个	🟢 轻微	用户可以点击标签查看其他概念
getHint 和 getConceptExplanationHint 职责不清	🟡 中等	导致交互提示显示内容不明确
推荐修复
复制以下代码到 concepts.js 的 getHint 函数（lines 479-486）：


// ========== Day 10 提示 ==========
struct_definition: "📦 太棒了！你学会了使用结构体打包数据！👉 下一步：记录一次运动来看看时间戳如何工作！",
array_in_mapping: "🗂️ 很好！你看到了映射到数组的用法！👉 下一步：查看统计数据来解锁 multiple_mappings！",
multiple_mappings: "🗺️ 优秀！你了解了多个映射如何协同工作！👉 下一步：更新体重来解锁 storage_keyword！",
storage_keyword: "💾 太棒了！你了解了 storage 的威力！👉 下一步：继续记录运动，达成里程碑来解锁 milestone_detection！",
event_logging: "📋 不错！你触发了事件日志！👉 下一步：记录运动来查看运动历史如何存储！",
milestone_detection: "🏆 恭喜！你达成了里程碑！👉 下一步：查看完整代码来复习所有知识！",
timestamp_usage: "⏰ 很好！你学会了记录时间戳！👉 下一步：查看运动历史来解锁 array_in_mapping！",
onlyRegistered_modifier: "🛡️ 太棒了！你了解了修饰符如何保护函数！👉 下一步：记录运动来解锁更多概念！"
这样修改后：

✅ 小弹窗和交互提示气泡完全一致
✅ 用户体验连贯，不会困惑
✅ "下一步"指引明确
✅ 不会有歧义

---

📋 可拖拽列宽调节器 - 完整实施方案
📊 当前布局状态确认
从 main.css 第 1379-1404 行确认的默认值：

左侧栏：flex: 0 0 65% (65% 宽度)
右侧栏：flex: 0 0 35% (35% 宽度，最大 400px)
不是 700px/400px 的固定像素值，而是百分比
🎯 实施目标
✅ 在左右栏之间添加可拖拽分隔条
✅ 使用 localStorage 保存用户偏好
✅ 双击分隔条重置为默认值
✅ 适用于所有 Day (1-10)
✅ 响应式设计（移动端自动禁用）
📁 需要修改的文件
方案 A：全局修改（推荐）- 修改 main.css
优点： 一次修改，所有 Day 自动生效

缺点： 需要修改全局 CSS 文件

方案 B：创建共享组件 - 创建 ResizerLayout.vue
优点： 组件化，更易维护

缺点： 需要修改每个 Day 的模板

推荐使用方案 A，因为布局结构已在全局 CSS 中定义。

🔧 详细实施步骤（方案 A）
第 1 步：创建共享 Composable
文件路径： src/composables/useColumnResizer.js

完整代码：


import { ref, onMounted, onUnmounted } from 'vue'

const STORAGE_KEY = 'solidity-gui-column-widths'

// 默认宽度配置
const DEFAULT_CONFIG = {
  leftPercent: 65,  // 左侧 65%
  rightPercent: 35  // 右侧 35%
}

/**
 * 列宽调节器 Composable
 * 提供：拖拽调节、localStorage 持久化、双击重置
 */
export function useColumnResizer() {
  const leftWidth = ref(DEFAULT_CONFIG.leftPercent)
  const rightWidth = ref(DEFAULT_CONFIG.rightPercent)
  const isResizing = ref(false)
  const resizerRef = ref(null)

  // 从 localStorage 加载保存的宽度
  const loadSavedWidths = () => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY)
      if (saved) {
        const config = JSON.parse(saved)
        leftWidth.value = config.leftPercent
        rightWidth.value = config.rightPercent
      }
    } catch (error) {
      console.warn('Failed to load column widths:', error)
    }
  }

  // 保存宽度到 localStorage
  const saveWidths = () => {
    try {
      const config = {
        leftPercent: leftWidth.value,
        rightPercent: rightWidth.value
      }
      localStorage.setItem(STORAGE_KEY, JSON.stringify(config))
    } catch (error) {
      console.warn('Failed to save column widths:', error)
    }
  }

  // 开始拖拽
  const startResize = (e) => {
    // 仅在左键点击时启用
    if (e.button !== 0) return

    isResizing.value = true
    
    // 防止拖拽时选中文本
    document.body.style.userSelect = 'none'
    document.body.style.cursor = 'col-resize'

    // 添加全局事件监听
    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseup', handleMouseUp)
  }

  // 处理鼠标移动
  const handleMouseMove = (e) => {
    if (!isResizing.value || !resizerRef.value) return

    const container = resizerRef.value.parentElement
    if (!container) return

    const containerRect = container.getBoundingClientRect()
    const containerWidth = containerRect.width
    const mouseX = e.clientX - containerRect.left

    // 计算新的左侧宽度百分比（限制在 20%-80% 之间）
    let newLeftPercent = (mouseX / containerWidth) * 100
    newLeftPercent = Math.max(20, Math.min(80, newLeftPercent))
    
    // 更新宽度
    leftWidth.value = newLeftPercent
    rightWidth.value = 100 - newLeftPercent
  }

  // 停止拖拽
  const handleMouseUp = () => {
    if (!isResizing.value) return

    isResizing.value = false
    
    // 恢复默认样式
    document.body.style.userSelect = ''
    document.body.style.cursor = ''

    // 保存宽度
    saveWidths()

    // 移除全局事件监听
    document.removeEventListener('mousemove', handleMouseMove)
    document.removeEventListener('mouseup', handleMouseUp)
  }

  // 双击重置
  const resetToDefault = () => {
    leftWidth.value = DEFAULT_CONFIG.leftPercent
    rightWidth.value = DEFAULT_CONFIG.rightPercent
    saveWidths()
  }

  // 组件挂载时加载保存的宽度
  onMounted(() => {
    loadSavedWidths()
  })

  // 组件卸载时清理事件监听
  onUnmounted(() => {
    document.removeEventListener('mousemove', handleMouseMove)
    document.removeEventListener('mouseup', handleMouseUp)
  })

  return {
    leftWidth,
    rightWidth,
    isResizing,
    resizerRef,
    startResize,
    resetToDefault
  }
}
第 2 步：创建 ResizerHandle 组件
文件路径： src/components/shared/ResizerHandle.vue

完整代码：


<template>
  <div
    ref="resizerRef"
    class="resizer-handle"
    :class="{ 'is-resizing': isResizing }"
    @mousedown="startResize"
    @dblclick="resetToDefault"
    title="拖拽调整宽度，双击重置"
  >
    <div class="resizer-line"></div>
    <div class="resizer-grip">
      <span class="grip-dot"></span>
      <span class="grip-dot"></span>
      <span class="grip-dot"></span>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  isResizing: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['start-resize', 'reset'])

const resizerRef = ref(null)

const startResize = (e) => {
  emit('start-resize', e)
}

const resetToDefault = () => {
  emit('reset')
}
</script>

<style scoped>
.resizer-handle {
  width: 12px;
  height: 100%;
  position: relative;
  cursor: col-resize;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition: background-color 0.2s;
  z-index: 10;
}

.resizer-handle:hover {
  background-color: var(--bg-surface-2);
}

.resizer-handle.is-resizing {
  background-color: var(--accent-cyan);
}

.resizer-line {
  width: 2px;
  height: 100%;
  background-color: var(--border-main);
  transition: background-color 0.2s;
}

.resizer-handle:hover .resizer-line {
  background-color: var(--accent-blue);
}

.resizer-handle.is-resizing .resizer-line {
  background-color: var(--accent-cyan);
}

.resizer-grip {
  position: absolute;
  display: flex;
  flex-direction: column;
  gap: 4px;
  pointer-events: none;
}

.grip-dot {
  width: 4px;
  height: 4px;
  background-color: var(--text-muted);
  border-radius: 50%;
  opacity: 0;
  transition: opacity 0.2s;
}

.resizer-handle:hover .grip-dot {
  opacity: 1;
}

.resizer-handle.is-resizing .grip-dot {
  background-color: #fff;
}

/* 移动端禁用 */
@media (max-width: 768px) {
  .resizer-handle {
    display: none;
  }
}
</style>
第 3 步：修改全局 CSS (main.css)
文件路径： src/styles/main.css

修改位置： 第 1379-1404 行

删除旧代码（第 1379-1404 行）：


/* 删除这部分 */
.content-layout {
    display: flex;
    gap: 20px;
    align-items: flex-start;
}

.left-column {
    flex: 1;
    min-width: 0;
}

/* 当右侧栏存在时，左侧栏自动收缩为65% */
.content-layout:has(.right-column) .left-column {
    flex: 0 0 65%;
}

.right-column {
    flex: 0 0 35%;
    min-width: 0;
    max-width: 400px;
    position: sticky;
    top: 20px;
    align-self: flex-start;
    max-height: calc(100vh - 140px);
    overflow-y: auto;
    /* 显示滚动条 */
    scrollbar-width: thin;
}
替换为新代码：


/* 内容布局 - 支持动态宽度 */
.content-layout {
    display: flex;
    gap: 20px;
    align-items: flex-start;
    width: 100%;
}

.left-column {
    flex: 1;
    min-width: 0;
}

/* 当右侧栏存在时，左侧栏使用可调节宽度 */
.content-layout:has(.right-column) .left-column {
    flex: 0 0 var(--left-column-width, 65%);
}

.right-column {
    flex: 0 0 var(--right-column-width, 35%);
    min-width: 0;
    max-width: 400px;
    position: sticky;
    top: 20px;
    align-self: flex-start;
    max-height: calc(100vh - 140px);
    overflow-y: auto;
    scrollbar-width: thin;
}

/* 分隔条样式 */
.resizer-handle {
    width: 12px;
    height: 100%;
    position: relative;
    cursor: col-resize;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    transition: background-color 0.2s;
    z-index: 10;
}

.resizer-handle:hover {
    background-color: var(--bg-surface-2);
}

.resizer-handle.is-resizing {
    background-color: var(--accent-cyan);
}

.resizer-line {
    width: 2px;
    height: 100%;
    background-color: var(--border-main);
    transition: background-color 0.2s;
}

.resizer-handle:hover .resizer-line {
    background-color: var(--accent-blue);
}

.resizer-handle.is-resizing .resizer-line {
    background-color: var(--accent-cyan);
}

.resizer-grip {
    position: absolute;
    display: flex;
    flex-direction: column;
    gap: 4px;
    pointer-events: none;
}

.grip-dot {
    width: 4px;
    height: 4px;
    background-color: var(--text-muted);
    border-radius: 50%;
    opacity: 0;
    transition: opacity 0.2s;
}

.resizer-handle:hover .grip-dot {
    opacity: 1;
}

.resizer-handle.is-resizing .grip-dot {
    background-color: #fff;
}

/* 移动端隐藏分隔条 */
@media (max-width: 768px) {
    .resizer-handle {
        display: none;
    }
}
第 4 步：创建包装组件（自动注入分隔条）
文件路径： src/components/shared/ResizableLayout.vue

完整代码：


<template>
  <div class="resizable-layout" ref="layoutRef">
    <div 
      class="left-column" 
      :style="{ '--left-column-width': leftWidth + '%' }"
    >
      <slot name="left"></slot>
    </div>
    
    <ResizerHandle
      ref="resizerRef"
      :is-resizing="isResizing"
      @start-resize="startResize"
      @reset="resetToDefault"
    />
    
    <div 
      class="right-column"
      :style="{ '--right-column-width': rightWidth + '%' }"
    >
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script setup>
import { useColumnResizer } from '@/composables/useColumnResizer'
import ResizerHandle from './ResizerHandle.vue'

const {
  leftWidth,
  rightWidth,
  isResizing,
  resizerRef,
  startResize,
  resetToDefault
} = useColumnResizer()
</script>

<style scoped>
.resizable-layout {
  display: flex;
  gap: 20px;
  align-items: flex-start;
  width: 100%;
}

.left-column {
  flex: 0 0 var(--left-column-width, 65%);
  min-width: 0;
}

.right-column {
  flex: 0 0 var(--right-column-width, 35%);
  min-width: 0;
  max-width: 400px;
  position: sticky;
  top: 20px;
  align-self: flex-start;
  max-height: calc(100vh - 140px);
  overflow-y: auto;
  scrollbar-width: thin;
}

@media (max-width: 768px) {
  .resizable-layout {
    flex-direction: column;
  }
  
  .left-column,
  .right-column {
    flex: 1;
    max-width: 100%;
  }
}
</style>
第 5 步：修改 Day 组件模板（以 Day 10 为例）
文件路径： src/components/days/Day10/ActivityTracker.vue

原模板（第 2-3 行）：


<div class="day-10-content">
  <div class="content-layout">
    <div class="left-column">
      <!-- ... 内容 ... -->
    </div>
    
    <KnowledgePanel ... />
  </div>
</div>
修改为：


<div class="day-10-content">
  <ResizableLayout>
    <template #left>
      <div class="left-content">
        <!-- ... 原 left-column 内容 ... -->
      </div>
    </template>
    
    <template #right>
      <KnowledgePanel ... />
    </template>
  </ResizableLayout>
</div>
完整修改示例：


<template>
  <div class="day-10-content">
    <ResizableLayout>
      <template #left>
        <!-- 状态指示器 -->
        <div class="status-indicator">
          <span class="status-label">👤 当前状态：</span>
          <span :class="['status-value', isRegistered ? 'registered' : 'unregistered']">
            {{ isRegistered ? `已注册：${userProfile.name}` : '未注册' }}
          </span>
        </div>

        <!-- ... 其他左侧内容保持不变 ... -->
      </template>
      
      <template #right>
        <KnowledgePanel
          :current-day="10"
          :unlocked-concepts="unlockedConcepts"
          :progress-percentage="progressPercentage"
          :full-code="fullCode"
          @show-full-code="showFullCode = true"
        />
      </template>
    </ResizableLayout>

    <!-- 完整代码弹窗 -->
    <FullCodeModal
      v-if="showFullCode"
      :code="fullCode"
      @close="showFullCode = false"
    />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useDay10 } from '@/composables/useDay10'
import { useProgressStore } from '@/stores/progressStore'
import { getFullCode } from '@/data/days'
import KnowledgePanel from '@/components/shared/KnowledgePanel.vue'
import FullCodeModal from '@/components/shared/FullCodeModal.vue'
import ResizableLayout from '@/components/shared/ResizableLayout.vue'

// ... 其他代码保持不变 ...
</script>
第 6 步：批量修改所有 Day 组件
需要修改的文件列表：

src/components/days/Day1/ClickCounter.vue
src/components/days/Day2/SaveMyName.vue
src/components/days/Day3/PollStation.vue
src/components/days/Day4/AuctionHouse.vue
src/components/days/Day5/AdminOnly.vue
src/components/days/Day6/EtherPiggyBank.vue
src/components/days/Day7/SimpleIOUApp.vue
src/components/days/Day8/TipJar.vue
src/components/days/Day9/SmartCalculator.vue
src/components/days/Day10/ActivityTracker.vue
每个文件的修改步骤：

在 <script setup> 中添加导入：


import ResizableLayout from '@/components/shared/ResizableLayout.vue'
找到 .content-layout div，替换为 <ResizableLayout>

将 .left-column 内容包裹在 <template #left> 中

将 KnowledgePanel 等右侧内容包裹在 <template #right> 中

第 7 步：测试清单
功能测试：

 拖拽分隔条可以调整左右宽度
 宽度限制在 20%-80% 之间
 拖拽时鼠标指针变为 col-resize
 拖拽时分隔条变为青色
 释放鼠标后宽度保存到 localStorage
 刷新页面后宽度保持不变
 双击分隔条重置为 65%/35%
 移动端（< 768px）分隔条自动隐藏
 移动端布局自动变为单列
 所有 Day (1-10) 都可以正常工作
浏览器兼容性测试：

 Chrome/Edge (Chromium)
 Firefox
 Safari
📝 总结
新增文件（3 个）：

src/composables/useColumnResizer.js - 列宽调节逻辑
src/components/shared/ResizerHandle.vue - 分隔条组件
src/components/shared/ResizableLayout.vue - 包装布局组件
修改文件（11 个）：

src/styles/main.css - 添加 CSS 变量支持 2-11. 所有 Day 组件（Day 1-10）- 替换布局结构
默认配置：

左侧：65%
右侧：35%
限制范围：20%-80%
localStorage key：solidity-gui-column-widths