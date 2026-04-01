# 🚀 GUI 重构执行计划（融合版）

> 文档版本：20260313
> 更新时间：2026-03-12
> 当前进度：Day 1-8 已完成独立组件迁移，Step 1-5 已完成
> 本文档供上下文有限时参考，确保重构方向一致

---

## 📅 时间线概览

```
Week 1: 核心架构重构          [██████████] 100% ✅
Week 2: 扩展到 15 天 + 验证   [░░░░░░░░░░] 0%
Week 3+: 快速扩展到 30 天     [░░░░░░░░░░] 0%
```

---

## ✅ 当前完成状态

### 已完成 ✅
- [x] Pinia 状态管理（contractStore, progressStore）
- [x] Composables：useDay1.js ~ useDay8.js
- [x] Day 1 独立组件：ClickCounter.vue
- [x] Day 2 独立组件：SaveMyName.vue
- [x] Day 3 独立组件：PollStation.vue
- [x] Day 4 独立组件：AuctionHouse.vue
- [x] Day 5 独立组件：AdminOnly.vue
- [x] Day 6 独立组件：EtherPiggyBank.vue
- [x] Day 7 独立组件：SimpleIOUApp.vue
- [x] Day 8 独立组件：TipJar.vue
- [x] 概念交互逻辑：useConceptInteraction.js
- [x] 点击概念徽章更新知识面板功能
- [x] **提取公共 UI 组件：KnowledgePanel.vue（右侧知识面板）**
- [x] **提取公共 UI 组件：FullCodeModal.vue（完整代码弹窗）**
- [x] **Day 1-4 全部使用共享组件替换右侧区域**
- [x] **统一所有知识面板和弹窗样式**
- [x] **修复知识点点击提示逻辑**
  - 点击知识点徽章时，交互提示显示该知识点的意义（使用 `getConceptExplanationHint`）
  - 重构前逻辑：`showConceptExplanation()` 设置 `hintText = getConceptExplanationHint(conceptKey)`
  - 实现方式：KnowledgePanel 组件检测 `manualConceptKey`，手动选择时显示知识点解释
- [x] **调整 PC 端布局边距**
  - 左栏宽度：200px → 240px（避免导航换行）
  - 左栏顶部距离：90px → 105px（增加与菜单栏间距）
  - 右栏顶部距离：90px → 105px（增加与菜单栏间距）
  - 左右栏 padding：15px → 25px（与中栏对齐）
- [x] **统一所有模块顶部对齐**
  - 学习导航、交互操作、交互提示、学习进度顶部对齐
- [x] **UI 样式优化**
  - 去掉菜单栏底部棕黄色粗线，改为 1px 细边框
  - 去掉学习导航底部棕黄色粗线
  - 修复夜间模式边框不可见问题
  - Day2 统一输入框字体

### 进行中 🔄
- [x] 迁移 Day 1-8 到独立组件（全部完成 ✅）

### 待完成 ⏳
- [ ] 扩展到 Day 9-15

### 已完成的重构步骤 ✅

#### Step 1: 提取共享组件
- [x] **KnowledgePanel.vue** - 右侧知识面板（提示气泡、解锁知识、概念列表、完整代码按钮）
- [x] **FullCodeModal.vue** - 完整代码弹窗
- [x] **ComingSoon.vue** - 未实现天数占位组件

#### Step 2: 迁移 Day 4-8 到独立组件
- [x] Day 4: AuctionHouse.vue
- [x] Day 5: AdminOnly.vue
- [x] Day 6: EtherPiggyBank.vue
- [x] Day 7: SimpleIOUApp.vue
- [x] Day 8: TipJar.vue
- [x] 所有 Day 组件统一使用 KnowledgePanel 和 FullCodeModal

#### Step 3: 重构 DayContent.vue（动态容器）
- [x] 使用 `defineAsyncComponent` 实现按需加载
- [x] 添加 ComingSoon 组件作为未实现天数的回退显示
- [x] 支持动态切换天数（`@switch-day` 事件）

#### Step 4: 简化 App.vue
- [x] 移除所有 Day 相关的业务逻辑
- [x] 仅保留布局框架（Header + 三栏布局）
- [x] 天数状态管理和切换逻辑简化

#### Step 5: 代码优化（20260312重构）
- [x] **统一概念解锁逻辑** - 所有 Day 使用 `progressStore.unlockConcept(day, concept)`
- [x] **统一按钮样式** - Day 4-8 迁移到全局 `.day-action-btn` 类
- [x] **删除冗余代码** - 移除 `handleConceptChange` 函数（仅 console.log）
- [x] **清理 days.js** - 删除未使用的 `initialDayProgress` 和 `initialContracts`

### 可选的未来优化 ⏳（按需进行）
- [ ] **提取原子级组件** - 当前粒度已足够，未来如有多处使用需求再提取
  - ConceptBadge.vue - 概念徽章
  - HintBubble.vue - 提示气泡  
  - ProgressBar.vue - 进度条
  - CodeViewer.vue - 代码查看器

---

## 🏗️ 融合版架构设计

### 核心原则
1. **分层组件**：原子组件 → 业务组件 → 页面组件
2. **状态集中**：Pinia stores 管理所有跨组件状态
3. **逻辑复用**：Composables 封装每个 Day 的业务逻辑
4. **渐进拆分**：先提取业务组件，再细化为原子组件

### 目录结构（当前状态）

```
src/
├── stores/                          # 状态管理 ✅
│   ├── contractStore.js            # 合约状态
│   ├── progressStore.js            # 学习进度
│   └── index.js
│
├── composables/                     # 业务逻辑 ✅
│   ├── useDay1.js ~ useDay8.js     # 各Day逻辑
│   └── useConceptInteraction.js    # 概念交互
│
├── components/
│   ├── days/                        # 各Day页面组件 🔄
│   │   ├── Day1/
│   │   │   └── ClickCounter.vue    # ✅ 已完成（使用共享组件）
│   │   ├── Day2/
│   │   │   └── SaveMyName.vue      # ✅ 已完成（使用共享组件）
│   │   ├── Day3/
│   │   │   └── PollStation.vue     # ✅ 已完成（使用共享组件）
│   │   ├── Day4/
│   │   │   └── AuctionHouse.vue    # ✅ 已完成（使用共享组件）
│   │   ├── Day5/
│   │   │   └── AdminOnly.vue       # ✅ 已完成（使用共享组件）
│   │   ├── Day6/
│   │   │   └── EtherPiggyBank.vue  # ✅ 已完成（使用共享组件）
│   │   ├── Day7/
│   │   │   └── SimpleIOUApp.vue    # ✅ 已完成（使用共享组件）
│   │   └── Day8/
│   │       └── TipJar.vue          # ✅ 已完成（使用共享组件）
│   │
│   ├── shared/                      # 业务级共享组件 ✅
│   │   ├── KnowledgePanel.vue      # ✅ 右侧知识面板（已提取）
│   │   ├── FullCodeModal.vue       # ✅ 完整代码弹窗（已提取）
│   │   └── DayContainer.vue        # ⏳ Day布局容器（可选）
│   │
│   ├── common/                      # 原子级通用组件 ⏳
│   │   ├── CodeViewer.vue          # 代码查看器
│   │   ├── ConceptCard.vue         # 概念卡片
│   │   ├── ConceptBadge.vue        # 概念徽章
│   │   ├── HintBubble.vue          # 提示气泡
│   │   └── ProgressBar.vue         # 进度条
│   │
│   ├── AppHeader.vue               # ✅ 保持不变
│   ├── DayNavigation.vue           # ✅ 保持不变
│   ├── Sidebar.vue                 # ✅ 保持不变
│   └── DayContent.vue              # 🔄 将简化为动态容器
│
├── data/
│   ├── days.js                     # Day配置
│   └── concepts.js                 # 概念定义
│
├── main.js
└── App.vue
```

---

## 🎨 全局样式规范

### 按钮样式（main.css）
为避免各 Day 组件重复定义按钮样式，已在全局添加统一的按钮类：

```css
/* 基础样式 - 所有 Day 按钮通用 */
.day-action-btn {
    padding: 12px 24px;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    font-size: 1em;
    font-weight: bold;
    transition: all 0.3s ease;
    color: var(--bg-base) !important;  /* 深色文字，适配夜间模式 */
    width: 100%;
    margin-bottom: 10px;
}

/* 颜色变体 - 根据 Day 主题选择 */
.day-action-btn.blue     /* Day 8 - TipJar */
.day-action-btn.yellow   /* Day 4/5 - AuctionHouse/AdminOnly */
.day-action-btn.orange   /* Day 7 - SimpleIOUApp */
.day-action-btn.magenta  /* Day 6 - EtherPiggyBank */
.day-action-btn.green    /* Day 1/2/3 - ClickCounter/SaveMyName/PollStation */
.day-action-btn.cyan     /* 辅助按钮 */
```

**使用示例**：
```vue
<!-- 替换前（各 Day 组件内重复定义） -->
<button class="custom-btn" @click="handleAction">操作</button>
<style>
.custom-btn { background: var(--accent-blue); color: var(--bg-base); ... }
</style>

<!-- 替换后（使用全局样式） -->
<button class="day-action-btn blue" @click="handleAction">操作</button>
```

---

## 📋 组件层级关系

```
App.vue
└── DayContent.vue（容器）
    ├── DayHeader（公共）
    └── DayX/xxx.vue（具体Day组件）
        ├── 左侧：交互区域（每个Day独特）
        └── 右侧：KnowledgePanel（共享组件）
            ├── HintBubble
            ├── UnlockKnowledge
            ├── ConceptList
            │   └── ConceptBadge
            └── FullCodeButton
```

---

## ⚠️ 重构强制执行要点

以下需求在重构过程中被多次强调，**必须严格执行**：

### 1. 交互提示优先级（KnowledgePanel 组件）
**优先级顺序（从高到低）**：
1. **用户手动点击知识点** → 显示知识点解释（使用 `getConceptExplanationHint`）
2. **组件传入 customHint** → 显示自定义提示
3. **其他情况** → 显示默认交互提示（使用 `getHint`）

**实现方式**（KnowledgePanel.vue）：
```javascript
const hintText = computed(() => {
  // 1. 如果用户手动选择了概念，优先显示该知识点的解释
  if (manualConceptKey.value && currentConcept.value) {
    return getConceptExplanationHint(currentConcept.value.key)
  }
  // 2. 其次使用外部传入的 customHint
  if (props.customHint) {
    return props.customHint
  }
  // 3. 否则显示当前概念的交互提示
  return currentConcept.value ? getHint(currentConcept.value.key) : ''
})
```

### 2. Solidity 代码复制规范
**必须原封不动复制 `.sol` 文件内的所有内容，包括**：
- 文件头注释（SPDX-License-Identifier 等）
- 所有状态变量的详细注释
- 函数的完整注释和逻辑
- 空行和格式

**禁止行为**：
- ❌ 删减或修改注释
- ❌ 简化代码逻辑
- ❌ 改变代码格式

**正确示例**：
```javascript
// 完整代码（从 dayX-ContractName.sol 复制，包含完整注释）
const fullCode = `// SPDX-License-Identifier: MIT
// 声明Solidity版本...
pragma solidity ^0.8.0;

// 合约注释...
contract ContractName {
  // 状态变量注释...
  address public owner;
  
  // 函数注释...
  function xxx() {
    // 代码...
  }
}`
```

---

## 🔧 实施步骤（按此顺序执行）

### Step 1: 提取 KnowledgePanel 组件 ✅ 已完成

**目标**：将右侧"解锁知识"区域提取为共享组件

**已完成文件**：
- `src/components/shared/KnowledgePanel.vue` - 右侧知识面板
- `src/components/shared/FullCodeModal.vue` - 完整代码弹窗

**实际 Props 接口**（KnowledgePanel）：
```typescript
interface KnowledgePanelProps {
  currentDay: number           // 当前Day
  unlockedConcepts: string[]   // 已解锁概念列表
  progressPercentage: number   // 进度百分比
  fullCode: string             // 完整代码内容
}

interface KnowledgePanelEmits {
  'show-full-code': () => void // 显示完整代码
  'concept-change': (key: string) => void // 概念变更
}
```

**使用示例**（Day1-3 已应用）：
```vue
<template>
  <div class="content-layout">
    <!-- 左侧：交互区域 -->
    <div class="left-column">
      <!-- Day 特定的交互内容 -->
    </div>
    
    <!-- 右侧：知识面板（使用共享组件） -->
    <KnowledgePanel
      :current-day="1"
      :unlocked-concepts="unlockedConcepts"
      :progress-percentage="progressPercentage"
      :full-code="fullCode"
      @show-full-code="showFullCode = true"
      @concept-change="handleConceptChange"
    />
  </div>
  
  <!-- 完整代码弹窗（使用共享组件） -->
  <FullCodeModal
    :show="showFullCode"
    title="ClickCounter 完整代码"
    :code="fullCode"
    @close="showFullCode = false"
  />
</template>

<script setup>
import KnowledgePanel from '@/components/shared/KnowledgePanel.vue'
import FullCodeModal from '@/components/shared/FullCodeModal.vue'
</script>
```

---

### Step 2: 迁移 Day 4-8 到独立组件 🔄 当前步骤

**目标**：将 DayContent.vue 中剩余的 Day 4-8 迁移为独立组件

**每个Day的迁移流程**：

```
1. 创建目录：src/components/days/DayX/
2. 创建组件：DayXxx.vue
3. 复制 DayContent.vue 中对应Day的模板到组件
4. 引入对应的 useDayX composable
5. 使用 KnowledgePanel 替换右侧区域（参考 Day1-3）
6. 使用 FullCodeModal 替换完整代码弹窗
7. 复制对应的样式
8. 测试功能
```

**Day 4-8 组件列表**：
| Day | 组件名 | 对应原代码位置 | 状态 |
|-----|--------|----------------|------|
| 4 | AuctionHouse.vue | DayContent.vue ~L239-371 | ✅ 已完成 |
| 5 | AdminOnly.vue | DayContent.vue ~L372-513 | ✅ 已完成 |
| 6 | EtherPiggyBank.vue | DayContent.vue ~L514-654 | ✅ 已完成 |
| 7 | SimpleIOUApp.vue | DayContent.vue ~L655-885 | ✅ 已完成 |
| 8 | TipJar.vue | DayContent.vue ~L886+ | ✅ 已完成 |

**参考实现**：
- [Day1/ClickCounter.vue](src/components/days/Day1/ClickCounter.vue) - 简单交互示例
- [Day2/SaveMyName.vue](src/components/days/Day2/SaveMyName.vue) - 表单交互示例
- [Day3/VotingStation.vue](src/components/days/Day3/VotingStation.vue) - 列表交互示例

---

### Step 3: 重构 DayContent.vue 为动态容器

**目标**：从 ~2000 行简化为 ~100 行

**实现方式**：
```vue
<template>
  <div class="center-content">
    <DayHeader 
      :title="dayTitle" 
      :progress="progressPercentage" 
    />
    
    <!-- 动态加载对应Day组件 -->
    <component 
      :is="currentDayComponent" 
      :key="currentDay"
    />
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useProgressStore } from '@/stores/progressStore'

// 导入所有Day组件
import Day1 from './days/Day1/ClickCounter.vue'
import Day2 from './days/Day2/SaveMyName.vue'
import Day3 from './days/Day3/VotingStation.vue'
import Day4 from './days/Day4/AuctionHouse.vue'
import Day5 from './days/Day5/AdminOnly.vue'
import Day6 from './days/Day6/EtherPiggyBank.vue'
import Day7 from './days/Day7/SimpleIOUApp.vue'
import Day8 from './days/Day8/TipJar.vue'

const props = defineProps({
  currentDay: { type: Number, required: true }
})

const progressStore = useProgressStore()

const dayComponents = {
  1: Day1, 2: Day2, 3: Day3, 4: Day4,
  5: Day5, 6: Day6, 7: Day7, 8: Day8
}

const currentDayComponent = computed(() => {
  return dayComponents[props.currentDay] || Day1
})

const dayTitle = computed(() => {
  return dayConfigs[props.currentDay]?.title || `Day ${props.currentDay}`
})

const progressPercentage = computed(() => {
  const progress = progressStore.dayProgress[props.currentDay]
  if (!progress || progress.totalConcepts === 0) return 0
  return Math.floor((progress.unlockedConcepts.length / progress.totalConcepts) * 100)
})
</script>
```

---

### Step 4: 简化 App.vue

**目标**：从 ~850 行简化为 ~150 行

**移除内容**：
- 所有Day的具体逻辑函数（移到composables）
- 大量props传递（改为Day组件自给自足）
- 复杂的事件处理（改为Pinia直接操作）

**保留内容**：
- 当前Day状态管理
- 侧边栏切换逻辑
- 整体布局结构

---

### Step 5: 提取原子级组件（可选优化）

在业务组件稳定后，可进一步拆分：

```
common/
├── CodeViewer.vue          # 代码高亮显示
├── ConceptCard.vue         # 概念卡片（大）
├── ConceptBadge.vue        # 概念徽章（小）
├── HintBubble.vue          # 提示气泡
├── ProgressBar.vue         # 进度条
└── BaseButton.vue          # 基础按钮
```

---

## 🎨 UI 样式规范

### CSS 变量定义

```css
:root {
  /* 背景色 */
  --bg-base: #fdf6e3;
  --bg-surface-1: #eee8d5;
  --bg-surface-2: #e8e0cc;
  
  /* 文字色 */
  --text-main: #657b83;
  --text-muted: #93a1a1;
  
  /* 边框 */
  --border-main: #d3cbb8;
  
  /* 强调色 */
  --accent-yellow: #b58900;
  --accent-yellow-hover: #d49b00;
  --accent-cyan: #2aa198;
  --accent-cyan-hover: #218079;
  --accent-green: #859900;
  --accent-green-hover: #9ea91b;
  --accent-red: #dc322f;
  --accent-red-hover: #e63935;
  --accent-orange: #cb4b16;
  --accent-blue: #268bd2;
  --accent-blue-hover: #3c92d8;
  --accent-magenta: #d33682;
  
  /* 代码块 */
  --code-bg: #073642;
  --code-border: #586e75;
  --code-text: #839496;
  
  /* 阴影 */
  --shadow-base-1: rgba(0, 0, 0, 0.1);
  --shadow-yellow-3: rgba(181, 137, 0, 0.3);
  --shadow-yellow-4: rgba(181, 137, 0, 0.4);
  --shadow-green-4: rgba(133, 153, 0, 0.4);
  --shadow-green-5: rgba(133, 153, 0, 0.5);
  --shadow-red-4: rgba(220, 50, 47, 0.4);
  --shadow-cyan-4: rgba(42, 161, 152, 0.4);
  --shadow-blue-4: rgba(38, 139, 210, 0.4);
}

[data-theme="dark"] {
  --bg-base: #002b36;
  --bg-surface-1: #073642;
  --bg-surface-2: #0a4a5a;
  --text-main: #839496;
  --text-muted: #586e75;
  --border-main: #1a4a5a;
  /* 强调色在暗色模式下保持不变 */
  --accent-yellow: #b58900;
  --accent-yellow-hover: #d49b00;
  --accent-cyan: #2aa198;
  --accent-cyan-hover: #218079;
  --accent-green: #859900;
  --accent-green-hover: #9ea91b;
  --accent-red: #dc322f;
  --accent-red-hover: #e63935;
  --accent-orange: #cb4b16;
  --accent-blue: #268bd2;
  --accent-blue-hover: #3c92d8;
  --accent-magenta: #d33682;
  --code-bg: #002b36;
  --code-border: #002b36;
  --code-text: #93a1a1;
}
```

### 标题与函数签名样式

```css
/* 块标题 - 紧凑间距 */
.block-title {
  color: var(--accent-blue);
  margin: 0 0 2px 0;
  font-size: 1.1em;
  line-height: 1.2;
}

/* 函数签名 - 与输入框区分 */
.function-signature {
  display: block;
  background: var(--bg-surface-2);  /* 与输入框背景区分 */
  padding: 4px 12px;
  border-radius: 4px;
  font-family: 'Courier New', monospace;
  font-size: 0.85em;
  color: var(--text-main);  /* 更明显文字颜色 */
  margin: 0 0 25px 0;  /* 与下方交互区保持间距 */
  border-left: 3px solid var(--accent-yellow);
  line-height: 1.3;
}
```

### 右侧栏布局规范

```css
/* 左侧栏默认全宽 */
.left-column {
  flex: 1;
  min-width: 0;
}

/* 当右侧栏存在时，左侧栏自动收缩为65% */
.content-layout:has(.right-column) .left-column {
  flex: 0 0 65%;
}

/* 右侧栏使用 flex 布局，内容可独立滚动 */
.right-column {
  flex: 0 0 35%;
  min-width: 0;
  max-width: 400px;
  max-height: calc(100vh - 140px);  /* 延伸至接近底部 */
  overflow-y: auto;  /* 内容超出时可滚动 */
  /* 显示滚动条 */
  scrollbar-width: thin;
  scrollbar-color: var(--border-main) transparent;
}

/* Chrome/Safari/Opera 滚动条样式 */
.right-column::-webkit-scrollbar {
  width: 6px;
}

.right-column::-webkit-scrollbar-thumb {
  background-color: var(--border-main);
  border-radius: 3px;
}

/* Day 特定样式 */
.day-X-content .right-column {
  flex: 0 0 35%;
  min-width: 0;
  max-width: 400px;
  max-height: calc(100vh - 140px);
  overflow-y: auto;
  z-index: 2;
}

/* 移动端恢复普通布局 */
@media (max-width: 768px) {
  .content-layout:has(.right-column) .left-column {
    flex: 1;
  }

  .left-column {
    width: 100%;
  }

  .right-column {
    flex: 1;
    max-width: 100%;
    max-height: none;  /* 移动端不限制高度 */
  }
}
```

### 布局稳定性要求

- **禁止**在组件中覆盖 `.right-column` 的 `flex` 和 `min-width` 属性
- **禁止**使用 `flex: 1; min-width: 300px`，这会导致布局跳动
- 统一使用 `:has()` 伪类检测右侧栏存在，自动调整左侧栏宽度
- 右侧栏使用 `max-height` + `overflow-y: auto` 实现内容独立滚动

### 结果显示样式

```css
/* 单列简洁样式，无边框 */
.result-value div {
  padding: 3px 0;
  /* 不使用 border-bottom */
}
```

---

## 📊 验收标准

### Phase 1 完成标准
- [ ] DayContent.vue < 150 行
- [ ] App.vue < 200 行
- [ ] Day 1-8 全部使用独立组件
- [ ] KnowledgePanel 组件被复用
- [ ] 所有现有功能正常
- [ ] 无控制台错误

### 代码质量指标
- [ ] 组件平均行数 < 300 行
- [ ] 无重复代码（右侧知识区域）
- [ ] Props 传递层级 < 3 层
- [ ] 新增Day开发时间 < 30 分钟

---

## 📝 添加新 Day 的标准流程

### 示例：添加 Day 9

```
Step 1: 配置
├── data/days.js            # 添加Day 9配置
└── data/concepts.js        # 添加Day 9概念

Step 2: 逻辑
└── composables/useDay9.js  # 创建业务逻辑

Step 3: 组件
├── components/days/Day9/
│   └── XxxContract.vue     # 创建组件
└── 使用 KnowledgePanel 作为右侧区域

Step 4: 注册
├── DayContent.vue          # 导入并注册Day9组件
└── 测试功能
```

---

## 🎯 关键设计决策

### 1. 为什么先提取 KnowledgePanel？
- **复用性高**：所有Day的右侧区域几乎相同
- **风险低**：纯UI组件，不影响业务逻辑
- **见效快**：立即减少重复代码

### 2. 为什么Day组件不直接使用原子组件？
- **开发效率**：先用KnowledgePanel快速迁移
- **渐进优化**：业务稳定后再细化拆分
- **避免过度设计**：先解决主要问题

### 3. 状态管理选择
- **Pinia stores**：跨Day共享状态（contractStore, progressStore）
- **Composables**：单个Day的业务逻辑
- **组件内部状态**：UI临时状态（input, showModal等）

---

## 📞 上下文恢复指南

如果你是新接入的开发者或模型，请按以下顺序了解项目：

1. **读本文档** - 了解整体架构和目标
2. **看 stores/** - 了解状态管理
3. **看 composables/useDay1.js** - 了解业务逻辑封装模式
4. **看 components/days/Day1/** - 了解组件结构
5. **看 DayContent.vue** - 了解当前容器实现
6. **执行下一步** - 按"实施步骤"继续

---

## ⚠️ 注意事项

1. **不要修改已完成的Day1-3组件** - 它们是参考标准
2. **保持KnowledgePanel接口稳定** - 影响所有Day组件
3. **测试每个Day后再继续下一个** - 避免累积错误
4. **保留原有样式** - 先保证功能，再优化样式

---

**下一步行动**：执行 Step 1 - 提取 KnowledgePanel 组件
