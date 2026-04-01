# Day 组件统一布局规范

## 📋 标准模板结构

所有 Day 组件**必须**使用以下标准模板结构：

```vue
<template>
  <div class="day-XX-content day-content">
    <!-- 消息提示（可选） -->
    <div v-if="message" :class="['message-toast', { error: isError }]">
      {{ message }}
    </div>

    <div class="content-layout" :class="{ 'single-column': unlockedConcepts.length === 0 }">
      <!-- 左侧：交互区域 -->
      <div class="left-column">
        <div class="interaction-area">
          <h3>🎮 交互操作</h3>
          <!-- 你的功能区块 -->
        </div>
      </div>

      <!-- 右侧：知识面板 -->
      <div class="right-column">
        <KnowledgePanel
          v-if="unlockedConcepts.length > 0"
          :current-day="XX"
          :unlocked-concepts="unlockedConcepts"
          :progress-percentage="progressPercentage"
          :full-code="fullCode"
          :custom-hint="currentHint"
          @show-full-code="handleShowFullCode"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useProgressStore } from '@/stores/progressStore'
import { getFullCode } from '@/data/days'
import KnowledgePanel from '@/components/shared/KnowledgePanel.vue'
import FullCodeModal from '@/components/shared/FullCodeModal.vue'

const progressStore = useProgressStore()

// 计算属性
const unlockedConcepts = computed(() =>
  progressStore.getDayProgress(XX)?.unlockedConcepts || []
)

const progressPercentage = computed(() => {
  const progress = progressStore.getDayProgress(XX)
  if (!progress || progress.totalConcepts === 0) return 0
  return Math.round((progress.unlockedConcepts.length / progress.totalConcepts) * 100)
})

const fullCode = computed(() => getFullCode(XX))
</script>

<style scoped>
/* ✅ 只写 Day XX 特有的样式 */
/* ❌ 不要写这些通用样式：
   - .day-XX-content { padding: 12px; }  → 已在全局 .day-content 中
   - .content-layout { ... }                 → 已在全局样式中
   - .left-column { ... }                    → 已在全局样式中
   - .right-column { ... }                   → 已在全局样式中（包含 sticky）
   - .interaction-area { ... }             → 已在全局样式中
   - .message-toast { ... }                → 已在全局样式中
   - .day-action-btn { ... }               → 已在全局样式中
   - .function-block { ... }               → 已在全局样式中
   - .input-group { ... }                   → 已在全局样式中
   - 任何响应式布局媒体查询（@media）      → 已在全局样式中
*/
</style>
```

---

## 🔑 关键规范

### 1. **根元素类名**
```vue
<!-- ✅ 正确 -->
<div class="day-XX-content day-content">

<!-- ❌ 错误 -->
<div class="day-XX-content">
```

### 2. **content-layout 必须添加 single-column 类绑定**
```vue
<!-- ✅ 正确：根据 unlockedConcepts 动态切换单栏/双栏 -->
<div class="content-layout" :class="{ 'single-column': unlockedConcepts.length === 0 }">

<!-- ❌ 错误：没有 single-column 类绑定 -->
<div class="content-layout">
```

### 3. **右栏渲染方式（重要！）**
```vue
<!-- ✅ 正确：右栏容器始终渲染，KnowledgePanel 条件渲染 -->
<div class="right-column">
  <KnowledgePanel
    v-if="unlockedConcepts.length > 0"
    ...
  />
</div>

<!-- ❌ 错误1：整个右栏容器条件渲染（导致布局切换不流畅） -->
<div class="right-column" v-if="unlockedConcepts.length > 0">
  <KnowledgePanel ... />
</div>

<!-- ❌ 错误2：没有右栏容器 -->
<KnowledgePanel v-if="unlockedConcepts.length > 0" ... />
```

### 4. **消息提示类名**
```vue
<!-- ✅ 正确：使用全局 message-toast -->
<div :class="['message-toast', { error: isError }]">
  {{ message }}
</div>

<!-- ❌ 错误1：使用自定义类名 -->
<div class="message-banner" :class="{ 'error': isError }">

<!-- ❌ 错误2：在组件内重新定义 .message-toast 样式（⚠️ 常见错误！）-->
<style scoped>
/* ❌ 不要这样做！会覆盖全局样式，导致位置错误 */
.message-toast {
  position: fixed;
  top: 20px;  /* ← 错误！全局样式中是 bottom: 20px */
  animation: slideDown 0.3s ease;
}
</style>
```

**重要说明**：
- **不要在组件内定义 `.message-toast` 样式** - 全局样式已定义在 `src/styles/day-common.css`
- **全局样式位置**：`day-common.css` 第147-176行
- **全局样式特征**：`bottom: 20px`（从底部弹出）+ `toastSlideUp` 动画
- **错误后果**：如果在组件内定义，会覆盖全局样式，导致message-toast从顶部弹出而不是底部
- **正确做法**：组件内只使用类名，不定义样式

### 5. **unlockedConcepts 必须使用安全访问**
```javascript
// ✅ 正确：使用可选链和默认空数组
const unlockedConcepts = computed(() =>
  progressStore.getDayProgress(XX)?.unlockedConcepts || []
)

// ❌ 错误：直接访问可能 undefined 的属性
const unlockedConcepts = computed(() =>
  progressStore.dayProgress[XX].unlockedConcepts
)
```

---

## 📊 布局行为说明

### 布局系统：CSS Grid

全局使用 Grid 布局，不再是 Flexbox：

```css
/* 全局样式：day-common.css */
.content-layout {
  display: grid;
  grid-template-columns: 1fr 380px;  /* 左栏自适应，右栏固定380px */
  gap: 16px;
}

/* 单栏模式（未解锁概念时） */
.day-content .content-layout.single-column {
  grid-template-columns: 1fr !important;  /* 左栏占满全宽 */
}

.day-content .content-layout.single-column .right-column {
  display: none !important;
  visibility: hidden !important;
}
```

### 没有解锁概念时（单栏模式）：
```
┌─────────────────────────────────────────┐
│  content-layout.single-column            │
│  ┌───────────────────────────────────┐  │
│  │ left-column (100% 全宽)          │  │
│  │ 交互操作区域                      │  │
│  │                                   │  │
│  │                                   │  │
│  └───────────────────────────────────┘  │
│  .right-column { display: none }        │
└─────────────────────────────────────────┘
```

### 有解锁概念后（双栏模式）：
```
┌─────────────────────────────────────────┐
│  content-layout                          │
│  ┌────────────────────┬────────────────┐│
│  │ left-column        │ right-column   ││
│  │ (1fr - 自适应)     │ (380px 固定)   ││
│  ├────────────────────┤                ││
│  │ 交互操作区域       │ KnowledgePanel ││
│  │                    │ (sticky)       ││
│  │                    │                ││
│  └────────────────────┴────────────────┘│
└─────────────────────────────────────────┘
```

### 右栏 Sticky 效果：
- 固定在可视区域顶部（top: 20px）
- 最大高度：`calc(100vh - 40px)`
- 内容超出时可滚动

### 响应式断点：
- **> 768px**：双栏布局（有解锁概念时）或单栏全宽（无解锁概念时）
- **<= 768px**：强制单栏布局

---

## ✅ 已统一处理的组件

| Day | 状态 | 说明 |
|-----|------|------|
| Day1-17 | ✅ 已完成 | 全部使用统一 Grid 布局 |

所有 Day 组件现在统一使用：
- Grid 布局（不再是 Flexbox）
- `single-column` 类控制单栏/双栏切换
- 全局 CSS 定义所有布局样式
- 组件内不再定义任何布局相关样式

---

## 🎯 迁移检查清单

开发新 Day 组件（Day18+）时，请确认：

- [ ] 根元素添加 `day-content` 类
- [ ] `content-layout` 添加 `:class="{ 'single-column': unlockedConcepts.length === 0 }"`
- [ ] 右栏使用 `.right-column` 包裹（始终渲染，不添加 v-if）
- [ ] `KnowledgePanel` 组件添加 `v-if="unlockedConcepts.length > 0"`
- [ ] `unlockedConcepts` 使用 `getDayProgress(XX)?.unlockedConcepts || []`
- [ ] 消息提示使用 `.message-toast` 类
- [ ] **scoped 样式中不写任何布局样式**（.content-layout, .left-column, .right-column, @media）
- [ ] 使用 `getFullCode(XX)` 获取完整代码

---

## 🔧 通用样式位置

所有通用样式定义在：`src/styles/day-common.css`

包含：
- **Grid 双栏布局**（.content-layout, .single-column）
- 右栏 sticky 固定
- 交互区域样式
- 功能区块样式
- 输入组样式
- 统一消息提示（从下方弹出）
- 统一按钮样式
- 响应式断点（768px）

**⚠️ 不要在组件内重复定义这些样式！**

---

## ❌ 已废弃的写法

以下写法已废弃，不要再使用：

```css
/* ❌ 废弃：Flexbox 布局 */
.content-layout {
  display: flex;
  gap: 16px;
}

.left-column {
  flex: 1;
}

.right-column {
  flex: 0 0 380px;
}

/* ❌ 废弃：使用 :nth-child(2) 选择器 */
.content-layout:has(> :nth-child(2)) .left-column {
  flex: 0 0 65%;
}

/* ❌ 废弃：在组件内定义响应式布局 */
@media (max-width: 768px) {
  .content-layout {
    flex-direction: column;
  }
}

/* ❌ 废弃：右栏容器条件渲染 */
<div class="right-column" v-if="unlockedConcepts.length > 0">
```

---

## 📝 更新记录

- **2024-XX-XX**: 初始版本（Flexbox 布局）
- **2024-XX-XX**: 全面迁移至 Grid 布局，统一使用 `single-column` 类控制布局

