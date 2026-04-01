# 添加新 Day 完整检查清单

> **使用说明**：每次添加新 Day 时，请按照此清单逐项检查，确保不会遗漏任何配置。
>
> **创建时间**：2026-03-20
> **适用范围**：Day 11+

---

## 📋 必须修改的文件（按顺序）

### 1. src/data/days.js
- [ ] 添加 `dayConfigs[X]` 配置
- [ ] 包含 `title`（标题）
- [ ] 包含 `subtitle`（副标题）
- [ ] 包含 `concepts` 数组（所有知识点 key）
- [ ] concepts 数组中的所有 key 都有对应定义

### 2. src/data/concepts.js（⚠️ 最容易遗漏！）

#### 2.1 添加概念定义
- [ ] 在文件末尾添加 `dayXConceptDefinitions` 对象
- [ ] 每个概念包含 `name`（中文名称）
- [ ] 每个概念包含 `icon`（emoji 图标）
- [ ] 每个概念包含 `unlockAt`（解锁顺序）
- [ ] 每个概念包含 `message`（解锁消息）
- [ ] 每个概念包含 `code`（代码示例）

#### 2.2 添加提示函数
- [ ] 在 `getHint()` 函数中添加 Day X 的所有概念提示
- [ ] 提示格式：`🎯 操作提示！👉 下一步操作`
- [ ] （推荐）添加 `getDayXHint()` 函数

#### 2.3 添加解释提示
- [ ] （推荐）添加 `getDayXExplanationHint()` 函数
- [ ] 解释格式：`📖 概念的详细解释...`

#### 2.4 添加 Gas 估算
- [ ] 在 `gasEstimates` 对象中添加 Day X 的 Gas 估算 key
- [ ] 格式：`操作名18: 45000`
- [ ] View 函数 Gas 设为 0

### 3. src/components/Sidebar.vue（⚠️️ 极易遗忘！）

#### 3.1 导入概念定义
- [ ] 在 import 语句中添加 `dayXConceptDefinitions`
- [ ] 位置：第85行附近
- [ ] 导入语句：`import { ..., dayXConceptDefinitions } from '../data/concepts'`

#### 3.2 添加概念定义判断分支
- [ ] 在第136-151行的 if-else 链中添加新的 else if
- [ ] 判断条件：`props.currentDay === X`
- [ ] 赋值语句：`conceptDefs = dayXConceptDefinitions`

**⚠️ 常见错误**：忘记修改 Sidebar.vue 会导致右栏"已解锁概念"列表中 emoji 显示为空！

### 4. src/components/shared/KnowledgePanel.vue

#### 4.1 导入概念定义和提示函数
- [ ] 在 import 语句中添加 `dayXConceptDefinitions`
- [ ] 在 import 语句中添加 `getDayXHint()`
- [ ] 在 import 语句中添加 `getDayXExplanationHint()`
- [ ] 位置：第54行附近

#### 4.2 添加概念定义支持
- [ ] 在 `getConceptDefinition()` 函数中添加 Day X 的判断
- [ ] 判断条件：`if (props.currentDay === X)`
- [ ] 返回语句：`return dayXConceptDefinitions[key]`
- [ ] 位置：第222-248行的 if-else 链

#### 4.3 添加提示函数支持
- [ ] 在 `getConceptHint()` 函数中添加 Day X 的判断
- [ ] 判断条件：`if (props.currentDay === X)`
- [ ] 返回语句：`return getDayXExplanationHint(key)`
- [ ] 位置：第271-297行的 if-else 链

#### 4.4 添加下一步提示支持
- [ ] 在 `hintText` 计算属性中添加 Day X 的判断
- [ ] 判断条件：`if (props.currentDay === 18 && currentConcept.value && !manualConceptKey.value)`
- [ ] 返回语句：`return getDay18Hint(currentConcept.value.key)`
- [ ] 位置：第359-362行附近

#### 4.5 添加手动选择提示支持
- [ ] 在 `hintText` 计算属性的"优先级7"中添加 Day X 的判断
- [ ] 判断条件：`if (props.currentDay === 18 && manualConceptKey.value && currentConcept.value)`
- [ ] 返回语句：`return getDay18ExplanationHint(currentConcept.value.key)`
- [ ] 位置：第374行附近

### 5. src/components/days/DayX/YourComponent.vue

#### 5.1 根元素和布局
- [ ] 根元素包含 `day-content` 类：`<div class="day-X-content day-content">`
- [ ] `content-layout` 包含 `:class="{ 'single-column': unlockedConcepts.length === 0 }"`
- [ ] 右栏使用 `.right-column` 包裹（始终渲染，不添加 v-if）
- [ ] 右栏内的 KnowledgePanel 添加 `v-if="unlockedConcepts.length > 0"`

#### 5.2 KnowledgePanel Props
- [ ] 传递 `:current-day="X"`
- [ ] 传递 `:unlocked-concepts="unlockedConcepts"`（🔥 必需，缺失会崩溃）
- [ ] 传递 `:progress-percentage="progressPercentage"`（🔥 必需）
- [ ] 传递 `:full-code="fullCode"`
- [ ] 传递 `:custom-hint="currentHint"`
- [ ] 绑定事件：`@show-full-code="showFullCode = true"`

#### 5.3 脚本配置
- [ ] 导入 `useProgressStore`：`import { useProgressStore } from '@/stores/progressStore'`
- [ ] 导入 `getFullCode`：`import { getFullCode } from '@/data/days'`
- [ ] 导入 `KnowledgePanel`：`import KnowledgePanel from '@/components/shared/KnowledgePanel.vue'`
- [ ] 导入 `FullCodeModal`：`import FullCodeModal from '@/components/shared/FullCodeModal.vue'`

#### 5.4 计算属性
- [ ] `unlockedConcepts` 使用安全访问：`progressStore.getDayProgress(X)?.unlockedConcepts || []`
- [ ] `progressPercentage` 动态获取 totalConcepts：
  ```javascript
  const progressPercentage = computed(() => {
    const progress = progressStore.getDayProgress(X)
    if (!progress || progress.totalConcepts === 0) return 0
    return Math.round((progress.unlockedConcepts.length / progress.totalConcepts) * 100)
  })
  ```
- [ ] `fullCode` 使用 `getFullCode(X)` 获取

#### 5.5 概念解锁逻辑
- [ ] 操作成功后调用 `progressStore.unlockConcept(X, conceptKey)`
- [ ] 使用条件判断避免重复解锁：`if (!unlockedConcepts.value.includes(conceptKey))`

#### 5.6 样式规范
- [ ] 不在组件内定义 Grid 布局样式（`.content-layout`, `.left-column`, `.right-column`）
- [ ] 不在组件内定义响应式媒体查询（已在全局样式中定义）
- [ ] 只保留 Day X 特有的样式

### 6. src/components/DayContent.vue

#### 6.1 注册组件
- [ ] 在 `dayComponents` 对象中添加：
  ```javascript
  X: defineAsyncComponent(() => import('./days/DayX/YourComponent.vue'))
  ```
- [ ] 位置：第18-35行的对象中

### 7. src/composables/useDayX.js

#### 7.1 导入依赖
- [ ] 导入 `useOperationLogStore`：`import { useOperationLogStore } from '@/stores/operationLogStore'`
- [ ] 导入 `useProgressStore`：`import { useProgressStore } from '@/stores/progressStore'`

#### 7.2 操作日志
- [ ] 所有写操作函数都添加了 `logStore.addLog()` 调用
- [ ] 写操作传入正确的 gasKey（从 concepts.js 的 `gasEstimates` 中查找）
- [ ] 查询操作不传 gasKey（Gas 默认为 0）
- [ ] 失败操作也记录了日志

#### 7.3 realtimeData
- [ ] 添加了 `realtimeData` 计算属性
- [ ] 返回标准格式：`{gasUsage, ethCost, operationCount}`
- [ ] 使用 `logStore.getDayGasUsage(X)` 获取 gasUsage
- [ ] 使用 `logStore.getDayEthCost(X)` 获取 ethCost
- [ ] 使用 `logStore.getDayOperationCount(X)` 获取 operationCount

#### 7.4 操作函数返回值
- [ ] 操作函数返回对象包含 `success`（布尔值）
- [ ] 操作函数返回对象包含 `message`（操作结果描述）
- [ ] 操作函数返回对象包含 `hints`（要解锁的概念数组）
- [ ] 操作函数返回对象包含 `nextStep`（下一步提示）

### 8. src/composables/useCurrentDayRealtimeData.js

#### 8.1 导入 useDayX
- [ ] 在 import 语句中添加：`import { useDayX } from './useDayX'`
- [ ] 位置：文件顶部

#### 8.2 添加 case 分支
- [ ] 在 switch 语句中添加 case：
  ```javascript
  case X:
    return useDayX().realtimeData.value
  ```
- [ ] 位置：第29-73行的 switch 语句中

### 9. src/stores/contractStore.js（如需要）

- [ ] 仅在需要持久化合约状态时添加
- [ ] 添加 Day X 的合约状态初始化

---

## 🔍 常见错误检查

### 错误1：右栏 emoji 不显示
**症状**：Sidebar 中已解锁概念的 emoji 显示为空
**原因**：Sidebar.vue 中未添加 Day X 的概念定义支持
**解决**：在 Sidebar.vue 的两处添加 Day X 支持（导入 + if-else）
**影响范围**：Day 18 曾出现此问题

### 错误2：交互提示只显示通用提示
**症状**：KnowledgePanel 提示始终是"📖 点击其他概念标签查看更多详细解释"
**原因**：concepts.js 的 `getHint()` 中缺少该概念的 key
**解决**：在 `getHint()` 中添加所有概念的提示
**影响范围**：Day 11-17 都曾遗漏此配置

### 错误3：知识点无法解锁
**症状**：操作后概念不显示在已解锁列表中
**原因**：组件中未调用 `progressStore.unlockConcept(X, conceptKey)`
**解决**：在操作成功后调用解锁函数
**影响范围**：Day 11-17 都曾遗漏此配置

### 错误4：KnowledgePanel 崩溃
**症状**：整个中栏不显示，控制台报错 `Missing required prop: "unlockedConcepts"`
**原因**：未传递 `:unlocked-concepts` 或 `:progress-percentage` props
**解决**：检查 KnowledgePanel 的 props 是否完整
**影响范围**：Day 14 曾出现此问题

### 错误5：realtimeData 格式不一致
**症状**：右侧边栏实时数据不显示
**原因**：realtimeData 返回格式不是标准格式 `{gasUsage, ethCost, operationCount}`
**解决**：确保 realtimeData 返回标准格式
**影响范围**：Day 18 曾出现此问题

### 错误6：progressPercentage 硬编码
**症状**：进度百分比计算错误
**原因**：硬编码 `totalConcepts = 8`，导致新增概念后计算错误
**解决**：从 progressStore 动态获取 totalConcepts
**影响范围**：Day 18 曾出现此问题

### 错误7：组件内重复定义全局样式（导致message-toast位置错误）
**严重程度**：🟡 中等

**症状**：
- message-toast 从顶部弹出而不是底部
- 与其他Day的行为不一致
- 样式冲突导致UI显示异常

**错误示例**（Day 21 第1029-1062行）：
```css
/* ❌ 错误：在组件内重新定义全局样式 */
.message-toast {
  position: fixed;
  top: 20px;  /* ← 错误！全局样式中是 bottom: 20px */
  animation: slideDown 0.3s ease;  /* ← 错误！全局样式中是 toastSlideUp */
}
```

**原因**：在组件内重新定义了全局已有的 `.message-toast` 样式，覆盖了全局样式

**正确做法**：
- ✅ **删除组件内的所有 `.message-toast` 样式定义**
- ✅ **删除组件内的所有 `@keyframes slideDown` 等动画定义**
- ✅ 使用全局样式 `day-common.css` 中的定义

**全局样式位置**：`src/styles/day-common.css` 第147-176行
```css
/* 正确的全局样式 */
.message-toast {
  position: fixed;
  bottom: 20px;  /* ← 从底部弹出 */
  left: 50%;
  transform: translateX(-50%);
  animation: toastSlideUp 0.3s ease;
  background: #10b981;
  color: white;
  ...
}

@keyframes toastSlideUp {
  from {
    transform: translateX(-50%) translateY(20px);  /* ← 从下方滑入 */
  }
  to {
    transform: translateX(-50%) translateY(0);
  }
}
```

**检查方法**：
1. 搜索组件内是否有 `.message-toast` 样式定义
2. 搜索组件内是否有 `@keyframes slideDown` 等动画定义
3. 如果有，全部删除，使用全局样式

**修复后果**：
- ✅ message-toast 恢复从底部弹出
- ✅ 与其他Day的行为保持一致
- ✅ 符合《Day组件统一布局规范.md》

**影响范围**：
- Day 21 已出现此问题
- 可能在其他Day中也存在

### 错误8：最后一个概念解锁的循环依赖（导致无法解锁）
**严重程度**：🟡 中等

**症状**：
- 最后一个概念（通常是 event_logging 或类似的概念）无法解锁
- 用户感觉"完成了所有操作但还有一个概念没解锁"
- 进度百分比停留在 87.5%（7/8）

**错误示例**（Day 22）：
```vue
<!-- ❌ 错误：只设置了 showFullCode = true，没有解锁逻辑 -->
<KnowledgePanel
  @show-full-code="showFullCode = true"
/>
```

**原因**：**循环依赖问题**
```
要显示"查看完整代码"按钮
    ↓
需要 progressPercentage === 100%（所有概念都解锁）
    ↓
需要 event_logging（最后一个概念）已解锁
    ↓
要解锁 event_logging
    ↓
需要点击"查看完整代码"按钮
    ↓
但按钮只有在 event_logging 解锁后才显示 ❌
```

**技术细节**：
- `KnowledgePanel.vue` 中"查看完整代码"按钮的显示条件：
  ```vue
  <button v-if="allConceptsUnlocked" class="view-full-code-btn">
  ```
  - `allConceptsUnlocked = props.progressPercentage === 100`
  - 只有所有概念解锁后才显示按钮

- Day 22 规划中 `event_logging` 是第8个概念（最后一个）
- 解锁时机：点击"查看完整代码"按钮

**正确做法**：
- ✅ 添加专门的处理函数，在点击"查看完整代码"时解锁最后一个概念
- ✅ 检查概念是否已解锁，避免重复解锁

```vue
<!-- ✅ 正确：使用处理函数 -->
<KnowledgePanel
  @show-full-code="handleShowFullCode"
/>
```

```javascript
// ✅ 添加处理函数
const handleShowFullCode = () => {
  showFullCode.value = true

  // 解锁最后一个概念 event_logging
  if (!progressStore.isConceptUnlocked(22, 'event_logging')) {
    progressStore.unlockConcept(22, 'event_logging')
    showMessage('🎉 解锁「事件日志」！事件让前端可以监听合约状态变化。🎉 恭喜完成 Day 22 学习！')
    currentHint.value = '📜 所有知识点已解锁！🎉 恭喜完成 Day 22 学习！'
  } else {
    showMessage('✅ 已查看完整代码！')
    currentHint.value = '📜 所有知识点已解锁！🎉 恭喜完成 Day 22 学习！'
  }
}
```

**检查方法**：
1. 查看最后一个概念的解锁时机
2. 如果解锁时机是"点击查看完整代码"，检查是否有处理函数
3. 检查是否只是简单的 `showFullCode = true`，没有解锁逻辑

**修复后果**：
- ✅ 最后一个概念可以正常解锁
- ✅ 进度百分比正确显示为 100%
- ✅ 符合用户交互逻辑

**影响范围**：
- Day 22 已出现此问题
- 任何将"查看完整代码"作为最后一个概念解锁时机的 Day 都可能出现此问题

### 错误9：循环依赖的另一种情况（提前显示查看完整代码按钮）
**严重程度**：🟡 中等

**症状**：
- "查看完整代码"按钮在只完成7个知识点时就出现了
- 用户点击按钮后，第8个知识点仍然没有解锁
- 用户陷入"无法解锁最后一个知识点"的困境

**错误示例**（Day 23）：
```javascript
// ❌ 错误：checks_effects_interactions 在取款/取抵押时解锁
const withdraw = (amount) => {
  // ... 逻辑 ...
  return {
    success: true,
    message: `✅ 成功取出 ${amount} ETH`,
    hints: ['checks_effects_interactions'],  // ← 错误！这里解锁了第8个概念
    nextStep: '👉 继续探索其他功能！'
  }
}
```

**原因**：**解锁时机设计不当**
```
用户完成存款（解锁2个概念）
    ↓
用户完成抵押（解锁2个概念，累计4个）
    ↓
用户完成借款（解锁2个概念，累计6个）
    ↓
用户完成取款（解锁1个概念，累计7个）← checks_effects_interactions 错误地在这里解锁
    ↓
按钮显示（7/8 = 87.5%，但按钮提前显示了）
    ↓
用户点击查看完整代码
    ↓
没有新知识点解锁，进度停留在 87.5%
```

**技术细节**：
- `checks_effects_interactions` 是第8个概念（最后一个）
- 错误地在"取款"操作解锁，而用户可能先还款后取款
- 导致按钮提前显示，但最后一个概念实际上没有真正解锁

**正确做法**：
- ✅ 将最后一个概念的解锁时机放在必须完成的操作上
- ✅ 确保解锁顺序符合用户学习流程
- ✅ 检查解锁时机是否会导致按钮提前显示

```javascript
// ✅ 正确：将 checks_effects_interactions 放在还款操作解锁
const repay = (amount) => {
  // ... 逻辑 ...
  return {
    success: true,
    message: `✅ 成功偿还 ${actualRepay.toFixed(6)} ETH`,
    hints: ['repay_function', 'checks_effects_interactions'],  // ✅ 最后一个概念在这里解锁
    nextStep: '🎉 恭喜完成所有操作！点击查看完整代码了解 CEI 安全模式！'
  }
}

// ✅ 取款操作不再解锁 checks_effects_interactions
const withdraw = (amount) => {
  // ... 逻辑 ...
  return {
    success: true,
    message: `✅ 成功取出 ${amount} ETH`,
    hints: [],  // ✅ 不再解锁 checks_effects_interactions
    nextStep: '👉 继续探索其他功能！'
  }
}
```

**检查方法**：
1. 列出所有8个概念的解锁时机
2. 模拟用户操作流程，检查解锁顺序
3. 确保第8个概念是最后一个被解锁的
4. 确保按钮只在 100% 进度时显示

**修复后果**：
- ✅ 按钮只在所有8个概念解锁后显示
- ✅ 用户完成所有操作后才能查看完整代码
- ✅ 符合学习流程设计

**影响范围**：
- Day 23 已出现此问题
- 任何有多个操作路径的 Day 都可能出现此问题

### 错误10：CSS 样式使用硬编码颜色值（日间模式文字看不清）
**严重程度**：🟡 中等

**症状**：
- 夜间模式显示正常，日间模式文字看不清（白色文字在白色背景上）
- 某些元素在主题切换后颜色不协调
- 与项目整体风格不一致

**错误示例**（Day 23）：
```css
/* ❌ 错误：使用硬编码颜色 */
.asset-label {
  font-size: 12px;
  color: #94a3b8;  /* ← 硬编码颜色，日间模式可能看不清 */
  margin-bottom: 5px;
}

.asset-value {
  font-size: 18px;
  font-weight: 600;
  color: #e2e8f0;  /* ← 硬编码颜色 */
}

.operation-box {
  background: rgba(255, 255, 255, 0.05);  /* ← 硬编码透明度 */
  border: 1px solid rgba(255, 255, 255, 0.1);  /* ← 硬编码透明度 */
}
```

**原因**：
- 使用硬编码的十六进制颜色值
- 使用固定的 rgba 透明度值
- 没有使用项目定义的 CSS 变量

**正确做法**：
- ✅ 使用项目标准的 CSS 变量
- ✅ 文字颜色使用 `var(--text-main)` 和 `var(--text-muted)`
- ✅ 背景色使用 `var(--bg-surface-1)` 和 `var(--bg-surface-2)`
- ✅ 边框色使用 `var(--border-main)`
- ✅ 强调色使用 `var(--accent-green)` 等

```css
/* ✅ 正确：使用 CSS 变量 */
.asset-label {
  font-size: 12px;
  color: var(--text-muted);  /* ✅ 自动适应日间/夜间模式 */
  margin-bottom: 5px;
}

.asset-value {
  font-size: 18px;
  font-weight: 600;
  color: var(--text-main);  /* ✅ 自动适应日间/夜间模式 */
}

.operation-box {
  background: var(--bg-surface-2);  /* ✅ 使用 CSS 变量 */
  border: 1px solid var(--border-main);  /* ✅ 使用 CSS 变量 */
}
```

**检查方法**：
1. 搜索组件内的所有 `#` 开头的颜色值
2. 搜索组件内的所有 `rgba(255, 255, 255` 和 `rgba(0, 0, 0`
3. 替换为对应的 CSS 变量

**修复后果**：
- ✅ 日间模式和夜间模式都显示正常
- ✅ 与项目整体风格保持一致
- ✅ 支持未来的主题扩展

**影响范围**：
- Day 23 已出现此问题
- 任何新添加的 Day 都可能出现此问题

### 错误11：信息块缺少底色和边框（样式过于素淡）
**严重程度**：🟢 轻微

**症状**：
- 信息块（如 `.info-text`, `.collateral-info`, `.status-item` 等）看起来过于素淡
- 与前几天的页面相比，缺少视觉层次感
- 用户难以区分不同的信息区域

**错误示例**（Day 23）：
```css
/* ❌ 错误：缺少底色和边框 */
.info-text {
  text-align: center;
  color: var(--text-muted);
  font-size: 14px;
  margin-top: 10px;
}

.collateral-info,
.debt-info {
  background: rgba(255, 255, 255, 0.05);  /* ← 太淡 */
  border-radius: 8px;
  padding: 15px;
}

.status-item {
  background: rgba(255, 255, 255, 0.05);  /* ← 太淡 */
  border-radius: 8px;
  padding: 15px;
  text-align: center;
}
```

**原因**：
- 背景色太淡或没有边框
- 没有参考前几天的样式设计
- 缺少视觉分隔

**正确做法**：
- ✅ 参考 Day 22 等前几天的样式
- ✅ 使用 `var(--bg-surface-2)` 作为背景色
- ✅ 添加 `1px solid var(--border-main)` 边框
- ✅ 提示文本使用带透明度的背景色和边框

```css
/* ✅ 正确：添加底色和边框 */
.info-text {
  background: rgba(100, 116, 139, 0.15);  /* ✅ 带透明度的背景 */
  border: 1px solid rgba(100, 116, 139, 0.3);  /* ✅ 细边框 */
  border-radius: 8px;
  padding: 12px 16px;
  text-align: center;
  color: var(--text-muted);
  font-size: 14px;
  margin-top: 10px;
}

.collateral-info,
.debt-info {
  background: var(--bg-surface-2);  /* ✅ 使用 CSS 变量 */
  border: 1px solid var(--border-main);  /* ✅ 添加边框 */
  border-radius: 8px;
  padding: 15px;
}

.status-item {
  background: var(--bg-surface-2);  /* ✅ 使用 CSS 变量 */
  border: 1px solid var(--border-main);  /* ✅ 添加边框 */
  border-radius: 8px;
  padding: 15px;
  text-align: center;
}
```

**检查方法**：
1. 对比前几天的页面，检查信息块样式是否一致
2. 检查是否有足够的视觉分隔
3. 确保使用统一的样式风格

**修复后果**：
- ✅ 信息块有清晰的视觉边界
- ✅ 与前几天的页面风格一致
- ✅ 提升用户体验

**影响范围**：
- Day 23 已出现此问题
- 任何新添加的 Day 都可能出现此问题

### 错误12：FullCodeModal 使用 v-if 导致按钮点击无反应
**严重程度**：🔴 高

**症状**：
- 点击"查看完整代码"按钮没有任何反应
- 控制台无错误，但弹窗不显示
- 按钮看起来可点击，但点击后无效果

**错误示例**（Day 25）：
```vue
<!-- ❌ 错误：使用 v-if 控制 FullCodeModal 显示 -->
<FullCodeModal
  v-if="showFullCode"
  :code="fullCode"
  @close="showFullCode = false"
/>
```

**原因**：
- `FullCodeModal` 组件内部使用 `Teleport` 和 `v-if="show"` 控制显示
- 外部使用 `v-if` 会导致组件未挂载时无法接收事件
- 当 `showFullCode` 为 `false` 时，组件根本不存在于 DOM 中
- 点击按钮触发事件时，组件还未创建，导致事件无法被处理

**正确做法**：
- ✅ 使用 `:show` prop 而不是 `v-if` 来控制显示
- ✅ 让组件内部处理显示/隐藏逻辑
- ✅ 保持组件始终挂载，只通过 prop 控制可见性

```vue
<!-- ✅ 正确：使用 :show prop 控制 FullCodeModal 显示 -->
<FullCodeModal
  :show="showFullCode"
  :code="fullCode"
  @close="showFullCode = false"
/>
```

**检查方法**：
1. 搜索组件内所有 `FullCodeModal` 的使用
2. 检查是否使用了 `v-if` 而不是 `:show`
3. 如果有，替换为 `:show` prop

**修复后果**：
- ✅ "查看完整代码"按钮可以正常点击
- ✅ 弹窗正确显示和关闭
- ✅ 与 FullCodeModal 组件的设计模式一致

**影响范围**：
- Day 25 已出现此问题
- 任何使用 FullCodeModal 的 Day 都可能出现此问题

---

## 📝 最后的验证

添加新 Day 后，请确认：

### 功能验证
- [ ] 所有8个概念都能正常解锁
- [ ] 右栏"已解锁概念"列表显示正确的 emoji
- [ ] KnowledgePanel 显示正确的提示信息
- [ ] 点击已解锁概念标签可以查看详细解释
- [ ] 右侧边栏显示正确的实时数据和操作日志
- [ ] Gas 消耗和 ETH 费用正确计算
- [ ] 完整代码弹窗可以正常打开

### 技术验证
- [ ] 组件布局正常（单栏/双栏切换流畅）
- [ ] 按钮样式正确（颜色、大小）
- [ ] 消息提示系统正常（成功/失败提示）
- [ ] 所有操作日志正确记录（包括 Gas 消耗）
- [ ] 浏览器控制台无错误或警告

---

## 🎯 快速参考

### 易遗漏配置 Top 3

1. **Sidebar.vue 概念定义支持**（最易遗忘）
   - 影响：右栏 emoji 不显示
   - 检查方法：查看右栏"已解锁概念"列表

2. **concepts.js 中的 getHint()**
   - 影响：交互提示只显示通用提示
   - 检查方法：查看 KnowledgePanel 提示内容

3. **KnowledgePanel 的必需 props**
   - 影响：页面崩溃，中栏不显示
   - 检查方法：查看浏览器控制台错误

---

**创建时间**：2026-03-20
**适用范围**：Day 11+
**参考文档**：AI_PROMPT_GUIDE.md、DAY_HISTORY.md
