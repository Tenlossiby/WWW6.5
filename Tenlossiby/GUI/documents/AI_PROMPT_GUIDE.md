# AI 助手开发指南 - Solidity 学习项目

> 文档版本：20260327 (Day 30 已添加)

## ⚠️ 最重要的提醒（重复出现的问题！）

添加新 Day 时，以下两个问题是**极易遗漏**且**后果严重**的：

### 🚨 问题 1：KnowledgePanel 导致页面崩溃（极高频！）

**现象：** 整个中栏不显示，页面完全崩溃

**错误信息：**
```
[Vue warn]: Missing required prop: "unlockedConcepts"
Uncaught (in promise) TypeError: Cannot read properties of undefined (reading 'length')
```

**原因：** 忘记传递 `:unlocked-concepts` 和 `:progress-percentage` props

**解决方法：**
```vue
<!-- ✅ 正确调用方式 -->
<KnowledgePanel
  v-if="unlockedConcepts.length > 0"
  :current-day="X"
  :unlocked-concepts="unlockedConcepts"          <!-- 🔥 必需！ -->
  :progress-percentage="progressPercentage"      <!-- 🔥 必需！ -->
  :full-code="fullCode"                          <!-- 强烈建议 -->
  :custom-hint="currentHint"
  @show-full-code="showFullCode = true"
/>
```

**详细说明：** 请参考本文档"常见错误提醒"章节的"错误 4"

---

### 🚨 问题 2：概念系统配置不完整

添加新 Day 时，**概念系统配置是极易遗漏的**，会导致以下问题：

1. ❌ **交互提示只显示通用提示** → 原因：`getHint()` 中缺少该概念的 key
2. ❌ **点击知识点显示 undefined undefined** → 原因：缺少 `dayXConceptDefinitions`
3. ❌ **知识点左侧 emoji 不显示** → 原因：`dayXConceptDefinitions` 中缺少 `icon` 字段
4. ❌ **知识点无法解锁** → 原因：组件中未调用 `progressStore.unlockConcept()`
5. ❌ **右栏已解锁概念 emoji 不显示** → 原因：**Sidebar.vue 中未添加 Day X 的概念定义支持**

**✅ 解决方法**：添加新 Day 时，必须完成以下 4 个配置：

1. 在 `src/data/concepts.js` 中添加 `dayXConceptDefinitions` 对象
2. 在 `getHint()` 函数中添加该 Day 所有概念的提示
3. （推荐）添加 `getDayXExplanationHint()` 函数
4. **（⚠️ 极易遗忘）在 `src/components/Sidebar.vue` 中添加 Day X 的概念定义支持**

详细配置步骤请参考本文档的"知识点系统配置"章节。

---

### 🚨 问题 3：Vue 3 Composable 响应式传递问题（Day 30 重大经验教训！）

**现象：** 父组件计算值正确，但子组件接收到的 props 始终为 0 或初始值

**控制台输出：**
```
MiniDex calculatedLPTokens changed: 22.36     ← 父组件中正确
LiquidityPanel calculatedLPTokens changed: 0  ← 子组件接收到 0
```

**根本原因：** Vue 3 `<script setup>` 中 `toRefs()` 解构后的 ref 在模板传递时的解包行为异常

**错误代码模式：**
```javascript
// ❌ 错误：toRefs 包含函数，且直接传递 ref 到子组件
const {
  calculatedLPTokens,    // ref
  addLiquidity           // 函数也被转成 ref！
} = toRefs(day30)

// 模板中直接传递
<LiquidityPanel :calculated-lp-tokens="calculatedLPTokens" />  // 可能失败
```

**✅ 正确解决方案：**

```javascript
// 1. 分离 ref/computed 和函数的解构
const {
  calculatedLPTokens,    // ref/computed 用 toRefs
  addAmount0,
  addAmount1
} = toRefs(day30)

const {
  addLiquidity,          // 函数直接解构，不用 toRefs
  removeLiquidity,
  swap
} = day30

// 2. 创建新的 computed 传递给子组件（关键！）
const displayLPTokens = computed(() => calculatedLPTokens.value)

// 3. 模板中传递新的 computed
<LiquidityPanel :calculated-lp-tokens="displayLPTokens" />
```

**核心原则：**
| 类型 | 处理方式 | 传递给子组件 |
|------|---------|-------------|
| ref/computed | `toRefs(day30)` 解构 | 包装成新的 `computed()` |
| 函数 | 直接解构 `day30` | 直接调用 |

**经验教训：**
1. `toRefs()` 会把**所有属性**都转换成 ref，包括函数
2. 直接传递 `toRefs()` 解构的 ref 到子组件可能解包失败
3. 创建新的 `computed()` 包装是更安全可靠的传递方式
4. 函数永远不要使用 `toRefs()` 包裹，否则调用时需要 `.value`

---

## 项目结构说明

本项目是一个 30 天的 Solidity 互动学习演示，每天一个独立的合约示例。

### 核心文件位置
- 组件：`src/components/days/Day{数字}/`
- 状态管理：`src/composables/useDay{数字}.js`
- 组件注册：`src/components/DayContent.vue`
- 天数配置：`src/data/days.js`（⚠️ 关键配置文件）
- 概念配置：`src/data/concepts.js`（⚠️⚠️ 极易遗漏！）
- 全局状态：`src/stores/contractStore.js`

---

## 添加新 Day 的标准流程

当需要开发第 X 天的内容时，请严格按照以下步骤执行：

### 步骤 1：在 days.js 中添加配置（⚠️ 必须先做！）

打开 `src/data/days.js`，在 `dayConfigs` 对象中添加：

```javascript
export const dayConfigs = {
    // ... 现有天数配置
    X: {
        title: "Day X - 标题",
        subtitle: "副标题/Subtitle",
        concepts: ["concept1", "concept2", "concept3"]  // 知识点列表
    }
}
```

**重要**：`progressStore.js` 会自动从 `dayConfigs` 计算 `totalConcepts`，无需手动修改！

### 步骤 2：创建组件文件
```
src/components/days/DayX/YourComponentName.vue
```

### 步骤 3：创建 Composable（如需要状态管理）
```
src/composables/useDayX.js
```

### 步骤 4：在 DayContent.vue 中注册组件（⚠️ 关键步骤，不可遗漏）

打开 `src/components/DayContent.vue`，在 `dayComponents` 对象中添加：

```javascript
const dayComponents = {
  1: defineAsyncComponent(() => import('./days/Day1/ClickCounter.vue')),
  2: defineAsyncComponent(() => import('./days/Day2/SaveMyName.vue')),
  // ... 现有天数
  X: defineAsyncComponent(() => import('./days/DayX/YourComponentName.vue')),  // ← 添加这一行
}
```

**注意**：项目使用 `defineAsyncComponent` 进行动态导入，实现按需加载。

### 步骤 5：配置概念系统（⚠️ 极其重要！）

在 `src/data/concepts.js` 中添加以下内容：

1. **添加概念定义对象**：
```javascript
export const dayXConceptDefinitions = {
    concept1: {
        name: "概念1中文名",
        icon: "🎯",
        unlockAt: 1,
        message: "解锁时的提示消息",
        code: `// 代码示例`
    },
    // ... 其他概念
}
```

2. **在 getHint() 函数中添加提示**：
```javascript
export const getHint = (conceptKey) => {
    const hints = {
        // ... 其他天数
        concept1: "🎯 下一步操作提示！👉 去做某个操作",
        concept2: "📝 下一步操作提示！👉 去做另一个操作"
    };
    return hints[conceptKey] || "📖 点击其他概念标签查看更多详细解释。";
}
```

3. **（可选）添加概念解释函数**：
```javascript
export const getDayXExplanationHint = (conceptKey) => {
    const hints = {
        concept1: "📖 概念1的详细解释...",
        concept2: "📖 概念2的详细解释..."
    };
    return hints[conceptKey] || "📖 点击其他概念标签查看更多详细解释。";
}
```

4. **⚠️️ 在 Sidebar.vue 中添加概念定义支持（极易遗漏！）**：

打开 `src/components/Sidebar.vue`，在以下两处添加 Day X 的支持：

**4.1 导入概念定义**（第85行附近）：
```javascript
// 当前代码
import { conceptDefinitions, day11ConceptDefinitions, ..., day17ConceptDefinitions } from '../data/concepts'

// 改为（添加 dayXConceptDefinitions）
import { conceptDefinitions, day11ConceptDefinitions, ..., day17ConceptDefinitions, dayXConceptDefinitions } from '../data/concepts'
```

**4.2 添加概念定义判断分支**（第136-151行的 if-else 链）：
```javascript
// 在第151行后添加：
} else if (props.currentDay === X) {
  conceptDefs = dayXConceptDefinitions
}
```

**⚠️ 常见错误**：忘记修改 Sidebar.vue 会导致右栏"已解锁概念"列表中 emoji 不显示！

**⚠️ 常见错误**：忘记配置概念系统会导致：
- 交互提示只显示通用提示
- 点击知识点显示 undefined
- 知识点 emoji 不显示
- 知识点无法解锁
- 右栏已解锁概念 emoji 不显示（Sidebar.vue 未配置）

详细说明请参考本文档后面的"知识点系统配置"章节。

### 步骤 6：更新 contractStore.js（如需要）

在 `src/stores/contractStore.js` 中添加新天数的合约状态初始化（仅在需要持久化状态时）。

---

## 快速检查清单

添加新 Day 后，请确认以下文件都已修改：

- [ ] `src/data/days.js` - 添加 dayConfigs 配置（包含 concepts 数组）
- [ ] `src/data/concepts.js` - 添加 dayXConceptDefinitions、getHint() 提示、getDayXExplanationHint()
- [ ] `src/components/Sidebar.vue` - ⚠️ 添加 dayXConceptDefinitions 导入和判断分支
- [ ] `src/components/shared/KnowledgePanel.vue` - 添加 dayXConceptDefinitions、getDayXHint()、getDayXExplanationHint() 支持
- [ ] `src/components/days/DayX/YourComponent.vue` - 创建组件
- [ ] `src/components/DayContent.vue` - 注册动态导入
- [ ] `src/composables/useDayX.js` - 创建状态管理（包含概念解锁逻辑）
- [ ] `src/composables/useCurrentDayRealtimeData.js` - 注册 realtimeData
- [ ] `src/stores/contractStore.js` - 添加合约状态（如需要）

**⚠️ 特别注意**：
- `concepts.js` 的配置是**最容易被遗漏**的，但会导致所有知识点功能异常
- `Sidebar.vue` 的修改**极易遗忘**，会导致右栏 emoji 不显示
- 组件中必须正确使用 `progressStore.unlockConcept()` 解锁概念
- 组件中必须传递 `customHint` 给 KnowledgePanel

---

## 用户 Prompt 模板

用户可以使用以下模板来请求开发新 Day：

```
请帮我实现 Solidity 学习项目的第 X 天内容。

合约功能需求：
- [描述合约的主要功能]
- [描述交互方式]
- [描述需要展示的知识点]

请按照 AI_PROMPT_GUIDE.md 中的标准流程进行开发，确保：
1. 在 days.js 中添加 dayConfigs 配置（包含 title, subtitle, concepts）
2. 创建 DayX 组件文件
3. 在 DayContent.vue 中正确注册组件（导入 + 添加到 dayComponents）
4. 创建对应的 useDayX.js composable（如需要状态管理）
5. 更新 contractStore.js（如需要合约状态）

注意：progressStore.js 会自动从 dayConfigs 计算 totalConcepts，无需手动修改。

完成后请告诉我修改了哪些文件。
```

---

## 常见错误提醒

### ❌ 错误 1：忘记在 days.js 中添加配置
```javascript
// 错误：直接在 DayContent.vue 注册，但 days.js 中没有配置
// 这会导致进度计算错误！
```

### ✅ 正确做法
必须先修改 `src/data/days.js` 添加配置，再修改其他文件。

### ❌ 错误 2：忘记在 dayComponents 中注册
```javascript
// 错误示例：dayComponents 中缺少第 9 天
const dayComponents = {
  1: defineAsyncComponent(() => import('./days/Day1/ClickCounter.vue')),
  2: defineAsyncComponent(() => import('./days/Day2/SaveMyName.vue')),
  // ... 缺少 9: Day9
}
```

### ✅ 正确做法
```javascript
const dayComponents = {
  1: defineAsyncComponent(() => import('./days/Day1/ClickCounter.vue')),
  2: defineAsyncComponent(() => import('./days/Day2/SaveMyName.vue')),
  // ... 其他天数
  9: defineAsyncComponent(() => import('./days/Day9/SmartCalculator.vue')),  // ← 必须添加这一行
}
```

### ❌ 错误 3：手动修改 progressStore.js 中的 totalConcepts
```javascript
// 错误：不需要手动修改！
const dayProgress = ref({
  9: {
    unlockedConcepts: [],
    totalConcepts: 5,  // ← 不需要手动设置，会自动从 dayConfigs 计算
    interactionCount: 0
  }
})
```

### ✅ 正确做法
`progressStore.js` 会自动从 `dayConfigs` 计算 `totalConcepts`，**无需手动修改**。

### ❌ 错误 4：KnowledgePanel 导致整个页面崩溃（⚠️ 极高频错误）

**严重程度：🔴 严重** - 会导致整个中栏不显示，页面完全崩溃

**现象：**
- 页面加载后，**整个中栏（包含 KnowledgePanel 的区域）完全空白**
- 浏览器控制台报错：
  ```
  [Vue warn]: Missing required prop: "unlockedConcepts"
  Uncaught (in promise) TypeError: Cannot read properties of undefined (reading 'length')
  ```

**原因：** 忘记传递 KnowledgePanel 的必需 props

```javascript
// ❌ 错误示例：只传递了部分 props
<KnowledgePanel
  :current-day="17"
  :custom-hint="currentHint"
/>

// ✅ 正确示例：传递所有必需 props
<KnowledgePanel
  v-if="unlockedConcepts.length > 0"
  :current-day="17"
  :unlocked-concepts="unlockedConcepts"
  :progress-percentage="progressPercentage"
  :full-code="fullCode"
  :custom-hint="currentHint"
  @show-full-code="showFullCode = true"
/>
```

**问题分析：**
1. **缺少 `:unlocked-concepts`（必需prop）** ← 🔥 核心问题
   - KnowledgePanel 内部会访问 `unlockedConcepts.length`
   - 如果不传递，`unlockedConcepts` 为 `undefined`
   - 导致 `Cannot read properties of undefined (reading 'length')` 错误
   - **组件渲染崩溃，导致整个中栏不显示**

2. **缺少 `:progress-percentage`（必需prop）**
   - 导致进度条无法显示

3. **缺少其他 props 和功能**
   - `:full-code` - 无法显示完整代码
   - `v-if="unlockedConcepts.length > 0"` - 无数据时也会尝试渲染空面板
   - `@show-full-code` - 无法打开完整代码弹窗

### ✅ 正确做法

**1. 在 `<script setup>` 中添加必需的变量：**
```javascript
import { getFullCode } from '@/data/days'
import FullCodeModal from '@/components/shared/FullCodeModal.vue'

const showFullCode = ref(false)

// 进度百分比
const progressPercentage = computed(() => {
  const progress = progressStore.getDayProgress(X)
  if (!progress || progress.totalConcepts === 0) return 0
  return Math.round((progress.unlockedConcepts.length / progress.totalConcepts) * 100)
})

// 完整代码
const fullCode = computed(() => getFullCode(X))
```

**2. 在模板中正确传递所有 props：**
```vue
<KnowledgePanel
  v-if="unlockedConcepts.length > 0"
  :current-day="X"
  :unlocked-concepts="unlockedConcepts"
  :progress-percentage="progressPercentage"
  :full-code="fullCode"
  :custom-hint="currentHint"
  @show-full-code="showFullCode = true"
/>

<!-- 别忘了添加完整代码弹窗 -->
<FullCodeModal
  v-if="showFullCode"
  :code="fullCode"
  @close="showFullCode = false"
/>
```

**3. 检查清单（每次添加新 Day 时必查）：**
- [ ] 🔥 **是否传递了 `:unlocked-concepts="unlockedConcepts"`？**（最关键，缺失会导致页面崩溃）
- [ ] 🔥 **是否传递了 `:progress-percentage="progressPercentage"`？**（必需prop）
- [ ] 是否添加了 `v-if="unlockedConcepts.length > 0"` 条件渲染？
- [ ] 是否导入了 `getFullCode` 并定义了 `fullCode` 计算属性？
- [ ] 是否导入了 `FullCodeModal` 组件？
- [ ] 是否定义了 `showFullCode` 响应式变量？
- [ ] 是否添加了 `@show-full-code` 事件处理？
- [ ] 是否添加了 `FullCodeModal` 组件到模板？

**Vue 错误信息详解：**
```
[Vue warn]: Missing required prop: "unlockedConcepts"
  → 提示缺少必需的 prop

Uncaught (in promise) TypeError: Cannot read properties of undefined (reading 'length')
  → KnowledgePanel.vue:106 尝试访问 undefined.length
  → 组件渲染崩溃，导致整个中栏不显示
```

**参考示例：** 可以参考 `SafeDeposit.vue` (Day 14) 的完整实现（第242-250行）。

---

### ❌ 错误 5：交互按钮"点不动"（缺少用户反馈）

**严重程度：🟡 中等** - 不会导致崩溃，但用户体验差，功能不可见

**现象：**
- 点击"查看完整代码"按钮没有任何反应
- 没有Toast提示
- 没有概念解锁反馈
- 没有KnowledgePanel提示更新

**用户反馈：**
> "刷新后完全点不进day19的页面了"
> "点击查看完整代码按钮点了没反应"

**根本原因：**
按钮的事件处理函数缺少完整的用户反馈机制

```javascript
// ❌ 错误示例：只有基本功能，缺少反馈
const handleShowFullCode = () => {
  showFullCode.value = true  // 只打开弹窗
  // 缺少：
  // 1. showMessage() - 没有Toast提示
  // 2. unlockConcept() - 没有概念解锁
  // 3. currentHint.value - 没有KnowledgePanel提示更新
}
```

**✅ 正确示例：完整的双重提示机制**
```javascript
const handleShowFullCode = () => {
  showFullCode.value = true

  // 解锁概念（如果还没解锁）
  if (!unlockedConcepts.value.includes('eip191_prefix')) {
    unlockConcept('eip191_prefix')
    currentHint.value = '📋 你了解了 EIP-191 签名前缀！这是以太坊个人签名的标准前缀。👉 查看参与者列表完成所有概念！'
    showMessage('✅ 已查看完整代码！🎉 恭喜解锁：EIP-191以太坊签名前缀！')
  } else {
    // 即使概念已解锁，也要提供反馈
    currentHint.value = '📋 你了解了 EIP-191 签名前缀！这是以太坊个人签名的标准前缀。👉 查看参与者列表完成所有概念！'
    showMessage('✅ 已查看完整代码！')
  }
}
```

**关键检查点：**
1. ✅ 每个交互都应该有 `showMessage()` - Toast提示（3秒后消失）
2. ✅ 每个交互都应该更新 `currentHint.value` - KnowledgePanel提示（持久显示）
3. ✅ 涉及概念解锁时应该调用 `unlockConcept()`
4. ✅ 即使概念已解锁，也要提供反馈（不要"静默"执行）

**问题分析：**

| 问题 | 影响 | 解决方案 |
|-----|------|---------|
| 缺少Toast提示 | 用户不知道操作是否成功 | 添加 `showMessage()` |
| 缺少KnowledgePanel更新 | 用户不知道下一步做什么 | 更新 `currentHint.value` |
| 缺少概念解锁逻辑 | 无法完成学习目标 | 添加 `unlockConcept()` |
| 解锁时机不一致 | 规划与实现不符 | 统一解锁时机 |

**为什么会出现这个问题：**

1. **规划与实现脱节**
   - 规划：概念在"查看完整代码"时解锁
   - 实现：概念在"参与活动"时解锁
   - 结果："查看完整代码"按钮没有解锁逻辑

2. **按钮功能不完整**
   - 只实现了基本功能（打开弹窗）
   - 忽略了用户反馈（Toast + KnowledgePanel）
   - 违反了《提示系统设计规范.md》的"双重提示"原则

3. **知识面板依赖概念解锁**
   - KnowledgePanel 基于 `currentConcept` 显示提示
   - 如果操作不解锁新概念，`currentHint` 不更新
   - 用户看不到"下一步"提示，感觉"点不动"

**经验教训：**

1. **按钮功能完整性原则**
   > 每个交互都必须有明确的反馈机制
   > - Toast提示（临时，3秒后消失）
   > - KnowledgePanel提示（持久显示）
   > - 概念解锁（如果涉及新概念）

2. **提示系统一致性原则**
   > 符合《提示系统设计规范.md》的核心原则：
   > - ✅ 双重提示 - 重要信息会在多个地方显示
   > - ✅ 即时反馈 - 每个操作都有明确的响应
   > - ✅ 持续引导 - 用户随时能看到"下一步做什么"

3. **解锁时机明确性原则**
   > 确保代码实现与规划方案完全一致
   > - 在正确的操作中解锁正确的概念
   > - 避免概念在多个地方重复解锁（导致混乱）

4. **已解锁概念的处理原则**
   > 即使概念已经解锁，操作也应该有反馈
   > - 可以是解释、复习、或下一步引导
   > - 不要"静默"执行，让用户感到困惑

**快速检查清单：**

添加新交互功能时，确认以下内容：
- [ ] 是否有 `showMessage()` 调用（Toast提示）？
- [ ] 是否有 `currentHint.value` 更新（KnowledgePanel提示）？
- [ ] 是否有 `unlockConcept()` 调用（如果涉及新概念）？
- [ ] 是否处理了"已解锁"的情况（概念已解锁时的反馈）？
- [ ] 是否符合《提示系统设计规范.md》的双重提示要求？

**相关规范文档：**
- [提示系统设计规范.md](./提示系统设计规范.md) - 双重提示机制要求
- [添加新Day检查清单.md](./添加新Day检查清单.md) - 完整的检查清单

---

## 文件命名规范

- 组件文件：使用 PascalCase，如 `ClickCounter.vue`, `AuctionHouse.vue`, `ActivityTracker.vue`
- Composable：使用 camelCase，如 `useDay1.js`, `useDay9.js`, `useDay10.js`
- 文件夹：使用 Day + 数字，如 `Day1/`, `Day9/`, `Day10/`
- 组件类名：使用 `day-X-content` 格式，如 `day-9-content`, `day-10-content`

---

## 样式规范

按钮样式使用全局定义的 `.day-action-btn` 类，配合颜色变体：

```html
<button class="day-action-btn cyan">按钮</button>
<button class="day-action-btn green">按钮</button>
<button class="day-action-btn red">按钮</button>
```

可用颜色：blue, yellow, orange, green, magenta, cyan, red

小按钮添加 `.small` 类：
```html
<button class="day-action-btn green small">小按钮</button>
```

---

## Day 参考示例与更新日志

详细的 Day 参考示例和开发更新日志已分离到以下文档：

- **[DAY_HISTORY.md](./DAY_HISTORY.md)** - 所有 Day 的详细参考示例
  - Day 11-16 的合约功能、核心交互、知识点设计
  - 特殊功能实现和代码示例
  - 易遗漏配置检查清单

- **[CHANGELOG.md](./CHANGELOG.md)** - 开发更新日志
  - 按时间顺序的开发记录
  - 经验教训和问题修复
  - 关键设计决策说明

---

## 实时数据和操作日志功能

> ⚠️ 所有 Day 必须实现的功能，帮助初学者理解 Gas 消耗。

### ⚠️ 重要说明：显示位置

**实时数据和操作日志在哪里显示？**

- ✅ **在 Sidebar.vue 中统一显示**（项目全局）
- ❌ **不是**在每个 Day 组件中单独显示

**每个 Day 组件应该包含什么？**

- ✅ 左栏：交互区域（主要业务逻辑）
- ✅ 右栏：KnowledgePanel（知识点面板）
- ✅ 实时数据和操作日志**自动从 Sidebar 获取**（无需在 Day 组件中单独实现）

### 功能说明

1. **实时数据显示**（右侧边栏 - 上方卡片）
   - 操作次数：当前 Day 累计执行的交互次数
   - Gas 消耗：当前 Day 累计消耗的 Gas（基于 concepts.js 中的估算值）
   - ETH 费用：当前 Day 累计的 ETH 成本（Gas × 单价）

2. **操作日志记录**（右侧边栏 - 下方卡片）
   - 记录每个操作的时间戳、操作名称、详细信息
   - 写操作显示 Gas 消耗和 ETH 费用
   - 查询操作（view 函数）不消耗 Gas，显示为 0
   - 只显示最近 10 条操作记录

### 标准实现步骤

#### 步骤 1：导入 operationLogStore

在 `src/composables/useDayX.js` 中：

```javascript
import { useOperationLogStore } from '@/stores/operationLogStore'

export function useDayX() {
  const contractStore = useContractStore()
  const progressStore = useProgressStore()
  const logStore = useOperationLogStore()  // ← 添加这一行
```

#### 步骤 2：在操作函数中添加日志记录

为每个操作函数添加 `logStore.addLog()` 调用：

```javascript
// 写操作示例（消耗 Gas）
const someAction = (param) => {
  // ... 执行操作逻辑

  // 记录操作日志
  logStore.addLog(
    X,                      // Day 编号
    '操作名称',              // 操作名称
    `详细信息: ${param}`,   // 操作详情
    'gasKey'                // Gas 估算 key（从 concepts.js 中查找）
  )

  return true
}

// 查询操作示例（不消耗 Gas）
const getBalance = () => {
  const balance = ...

  // 记录操作日志（不传 gasKey，表示 view 函数）
  logStore.addLog(
    X,
    '查询余额',
    `余额: ${balance}`
    // 不传第 4 个参数，Gas 默认为 0
  )

  return balance
}
```

#### 步骤 3：添加 realtimeData 计算属性

在 composable 返回对象前添加：

```javascript
// 实时数据接口（供 Sidebar 使用）
const realtimeData = computed(() => ({
  gasUsage: logStore.getDayGasUsage(X),
  ethCost: logStore.getDayEthCost(X),
  operationCount: logStore.getDayOperationCount(X)
}))

return {
  // ... 其他状态和方法
  realtimeData,  // ← 导出 realtimeData
}
```

#### 步骤 4：在 useCurrentDayRealtimeData.js 中注册

打开 `src/composables/useCurrentDayRealtimeData.js`：

1. 导入 useDayX：
```javascript
import { useDayX } from './useDayX'
```

2. 在 switch 语句中添加 case：
```javascript
const realtimeData = computed(() => {
  switch (currentDay.value) {
    // ... 现有 case
    case X:
      return useDayX().realtimeData.value
    default:
      return { gasUsage: 0, ethCost: 0, operationCount: 0 }
  }
})
```

### Gas Key 对照表

在 `src/data/concepts.js` 的 `gasEstimates` 对象中定义了所有操作的 Gas 估算值：

```javascript
export const gasEstimates = {
  // 基础操作
  increment: 21000,
  reset: 21000,
  addData: 40000,
  retrieveData: 0,

  // Day 3 - 投票
  addCandidate: 50000,
  vote: 35000,

  // Day 4 - 拍卖
  placeBid: 45000,
  endAuction: 25000,

  // Day 5 - 宝藏
  addTreasure: 30000,
  approveWithdrawal: 40000,
  withdrawTreasure: 50000,
  resetWithdrawalStatus: 25000,
  transferOwnership: 35000,
  getTreasureDetails: 0,

  // Day 6 - 银行
  addMembers: 45000,
  depositAmountEther: 35000,
  withdrawAmount: 40000,
  getMembers: 0,

  // Day 7 - IOU 借条
  addFriend: 45000,
  depositIntoWallet: 35000,
  recordDebt: 45000,
  payFromWallet: 50000,
  transferEther: 35000,
  transferEtherViaCall: 40000,
  withdraw: 35000,
  checkBalance: 0,

  // Day 8 - 小费罐
  tipInEth: 40000,
  tipInCurrency: 50000,
  withdrawTips: 35000,

  // Day 10-12 等
  // ... 更多 Gas key
}
```

### 日志记录最佳实践

1. **操作命名规范**
   - 使用简洁的中文描述，如"存款"、"转账"、"授权"
   - 失败操作也要记录，如"转账失败"、"授权失败"

2. **详细信息格式**
   - 包含关键参数和结果
   - 使用 emoji 增强可读性（如 ✅、❌、💰）
   - 格式化数字显示（如 toLocaleString()）

3. **View 函数处理**
   - 查询类操作不传 gasKey（Gas 默认为 0）
   - 仍需记录操作日志，保持完整的操作历史

4. **失败操作处理**
   - 在返回失败前记录日志
   - 详细信息包含失败原因

### 完整示例

参考 `src/composables/useDay1.js`：

```javascript
import { computed } from 'vue'
import { useContractStore } from '@/stores/contractStore'
import { useProgressStore } from '@/stores/progressStore'
import { useOperationLogStore } from '@/stores/operationLogStore'

export function useDay1() {
  const contractStore = useContractStore()
  const progressStore = useProgressStore()
  const logStore = useOperationLogStore()  // ← 1. 导入 logStore

  const day1Contract = contractStore.contracts.day1

  const counter = computed(() => day1Contract.count)

  // 2. 在操作中记录日志
  const clickCounter = () => {
    day1Contract.count++
    day1Contract.interactionCount++

    // 记录操作日志（传入 gasKey）
    logStore.addLog(1, '点击计数器', 'Counter +1', 'increment')

    progressStore.incrementInteraction(1)
    // ... 解锁概念逻辑
  }

  const resetCounter = () => {
    day1Contract.count = 0

    // 记录操作日志（传入 gasKey）
    logStore.addLog(1, '重置计数器', 'Counter reset to 0', 'reset')
  }

  // 3. 添加 realtimeData 计算属性
  const realtimeData = computed(() => ({
    gasUsage: logStore.getDayGasUsage(1),
    ethCost: logStore.getDayEthCost(1),
    operationCount: logStore.getDayOperationCount(1)
  }))

  return {
    counter,
    clickCounter,
    resetCounter,
    realtimeData  // ← 4. 导出 realtimeData
  }
}
```

### 检查清单

添加新 Day 时，确认以下内容：

- [ ] 导入了 `useOperationLogStore`
- [ ] 所有操作函数都添加了 `logStore.addLog()` 调用
- [ ] 写操作传入了正确的 gasKey（从 concepts.js 查找）
- [ ] 查询操作不传 gasKey（Gas 默认为 0）
- [ ] 失败操作也记录了日志
- [ ] 添加了 `realtimeData` 计算属性
- [ ] `realtimeData` 包含 `gasUsage`、`ethCost`、`operationCount`
- [ ] 在 `useCurrentDayRealtimeData.js` 中注册了新的 Day

---

## 知识点系统配置（⚠️ 极其重要，易遗漏！）

每个新 Day 都需要完整配置概念系统，否则会出现：
- 交互提示只显示通用提示
- 点击知识点显示 undefined
- 知识点 emoji 不显示
- 知识点无法解锁

### 必须配置的 4 个部分

#### 1. 在 days.js 中添加概念列表（基础配置）

```javascript
// src/data/days.js
export const dayConfigs = {
    // ... 其他天数
    X: {
        title: "Day X - 标题",
        subtitle: "副标题",
        concepts: ["concept1", "concept2", "concept3"]  // ← 必须添加
    }
}
```

#### 2. 在 concepts.js 中添加概念定义（详细内容）

```javascript
// src/data/concepts.js

// ========== Day X 概念定义 ==========
export const dayXConceptDefinitions = {
    concept1: {
        name: "概念1中文名",
        icon: "🎯",
        unlockAt: 1,
        message: "解锁时的提示消息",
        code: `// 代码示例
function example() {
    // 代码内容
}`
    },
    concept2: {
        name: "概念2中文名",
        icon: "📝",
        unlockAt: 2,
        message: "解锁时的提示消息",
        code: `// 代码示例`
    },
    concept3: {
        name: "概念3中文名",
        icon: "🔍",
        unlockAt: 3,
        message: "解锁时的提示消息",
        code: `// 代码示例`
    }
};
```

**关键字段说明**：
- `name`: 知识点中文名称（显示在右侧栏）
- `icon`: emoji 图标（显示在知识点左侧）
- `unlockAt`: 解锁顺序（可选）
- `message`: 解锁时显示的消息
- `code`: 代码示例（显示在代码弹窗中）

#### 3. 在 getHint() 函数中添加交互提示

```javascript
// src/data/concepts.js

export const getHint = (conceptKey) => {
    const hints = {
        // ... 其他天数的提示

        // ========== Day X 提示 ==========
        concept1: "🎯 概念1的下一步操作提示！👉 去做某个操作解锁概念2",
        concept2: "📝 概念2的下一步操作提示！👉 去做另一个操作解锁概念3",
        concept3: "🔍 概念3的完成提示！🎉 你已掌握 Day X 全部核心功能！"
    };
    return hints[conceptKey] || "📖 点击其他概念标签查看更多详细解释。";
};
```

**重要**：
- 这是交互时显示的"下一步怎么做"提示
- 必须包含所有概念的 key
- 提示要引导用户进行下一步操作

#### 4. 添加概念解释提示函数（可选但推荐）

```javascript
// src/data/concepts.js

// ========== Day X 概念解释提示 ==========
export const getDayXExplanationHint = (conceptKey) => {
    const hints = {
        concept1: "📖 概念1的详细解释。这是学习这个概念的重要意义...",
        concept2: "📖 概念2的详细解释。这是在实际开发中的应用场景...",
        concept3: "📖 概念3的详细解释。这是进阶学习的要点..."
    };
    return hints[conceptKey] || "📖 点击其他概念标签查看更多详细解释。";
};
```

### 组件中的正确使用方式

#### 在 Vue 组件中导入和传递

```vue
<script setup>
import { ref, computed } from 'vue'
import { useProgressStore } from '@/stores/progressStore'
import { getFullCode } from '@/data/days'
import KnowledgePanel from '@/components/shared/KnowledgePanel.vue'
import FullCodeModal from '@/components/shared/FullCodeModal.vue'

const progressStore = useProgressStore()

// 获取完整代码
const fullCode = computed(() => getFullCode(X))

// 当前提示（从操作函数返回值获取）
const currentHint = ref('')

// 解锁的概念
const unlockedConcepts = computed(() => {
    return progressStore.getDayProgress(X)?.unlockedConcepts || []
})

// 进度百分比
const progressPercentage = computed(() => {
    const progress = progressStore.getDayProgress(X)
    if (!progress || progress.totalConcepts === 0) return 0
    return Math.round((progress.unlockedConcepts.length / progress.totalConcepts) * 100)
})

// 解锁概念
const unlockConcept = (concept) => {
    if (!unlockedConcepts.value.includes(concept)) {
        progressStore.unlockConcept(X, concept)
    }
}

// 处理操作（示例）
const handleSomeAction = () => {
    // 执行操作...

    // 解锁概念
    unlockConcept('concept1')

    // 设置当前提示（从返回值获取）
    currentHint.value = "🎯 概念1解锁成功！👉 下一步去做概念2"
}
</script>

<template>
    <!-- 传递给 KnowledgePanel -->
    <KnowledgePanel
        v-if="unlockedConcepts.length > 0"
        :current-day="X"
        :unlocked-concepts="unlockedConcepts"
        :progress-percentage="progressPercentage"
        :full-code="fullCode"
        :custom-hint="currentHint"
        @show-full-code="showFullCode = true"
    />
</template>
```

#### 在 Composable 中返回提示信息

```javascript
// src/composables/useDayX.js

export function useDayX() {
    // ... 状态定义

    const someAction = (param) => {
        // 执行操作逻辑...

        return {
            success: true,
            message: "✅ 操作成功！解锁了概念1",
            hints: ['concept1'],  // ← 要解锁的概念列表
            nextStep: "👉 下一步去做概念2"  // ← 下一步提示
        }
    }

    return {
        // ... 其他导出
        someAction
    }
}
```

### 完整的配置检查清单

添加新 Day 时，除了前面的文件检查，还需确认：

#### concepts.js 配置
- [ ] 在 `concepts.js` 中添加了 `dayXConceptDefinitions` 对象
- [ ] 每个概念都包含 `name`、`icon`、`message`、`code` 字段
- [ ] 在 `getHint()` 函数中添加了 Day X 的所有概念提示
- [ ] 在 `gasEstimates` 对象中添加了 Day X 的 Gas 估算（如需要）
- [ ] （推荐）添加了 `getDayXExplanationHint()` 函数

#### 组件配置
- [ ] 导入了 `useProgressStore`
- [ ] 使用 `progressStore.getDayProgress(X)` 获取进度
- [ ] 正确计算 `unlockedConcepts` 和 `progressPercentage`
- [ ] 使用 `progressStore.unlockConcept(X, conceptKey)` 解锁概念
- [ ] 传递 `customHint` 给 KnowledgePanel

#### Composable 配置
- [ ] 操作函数返回对象包含 `hints` 数组（要解锁的概念）
- [ ] 操作函数返回对象包含 `nextStep` 字段（下一步提示）
- [ ] 在组件中调用 `progressStore.unlockConcept()` 解锁概念

### 常见错误对照表

| 问题现象 | 缺失配置 | 解决方案 |
|---------|---------|---------|
| 交互提示只显示通用提示 | `getHint()` 缺少 key | 添加对应提示 |
| 点击知识点显示 undefined | 缺少 `dayXConceptDefinitions` | 添加概念定义对象 |
| 知识点 emoji 不显示 | 缺少 `icon` 字段 | 添加 icon 字段 |
| 知识点无法解锁 | 未调用 `unlockConcept()` | 添加解锁调用 |
| 知识点显示为 🔒 | Sidebar.vue 未添加支持 | 添加概念定义支持 |

---
