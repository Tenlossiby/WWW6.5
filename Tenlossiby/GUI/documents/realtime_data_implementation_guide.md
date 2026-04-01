# 实时数据和操作日志实现方案

## 📋 方案概述

这个方案通过统一的数据接口，让每个 Day 能够向右侧栏实时展示：
1. **核心业务指标**（余额、计数、会员数等）
2. **Gas 累计消耗**
3. **操作历史日志**

## 🏗️ 架构设计

```
Day Component
    ↓ 调用 composable
Composable (useDayX)
    ↓ 返回 realtimeData + 调用 logStore.addLog()
    ↓
    ├→ realtimeData.metrics[]     # 业务指标
    ├→ realtimeData.gasUsage      # Gas累计
    ├→ realtimeData.ethCost       # ETH成本
    └→ logStore.addLog()          # 记录日志
            ↓
    Sidebar Panel
    ├→ 显示 metrics
    ├→ 显示 Gas 统计
    └→ 显示操作日志
```

## 📁 文件清单

我为你创建了以下示例文件（都在项目目录中）：

1. **`src/stores/operationLogStore.js`** - 操作日志 Store
2. **`src/composables/useDay1-extended.js`** - Day 1 扩展示例
3. **`src/composables/useDay6-extended.js`** - Day 6 扩展示例
4. **`src/composables/useDay12-extended.js`** - Day 12 扩展示例
5. **`src/components/Sidebar-refactored.vue`** - 重构后的 Sidebar
6. **`src/components/days/Day1/ClickCounter-integrated.vue`** - 集成示例
7. **`src/components/shared/KnowledgePanel-integrated.vue`** - 集成示例

## 🚀 实施步骤

### Step 1: 集成 operationLogStore

**不需要修改** - 直接使用即可：

```bash
# 该文件已创建，可以直接使用
src/stores/operationLogStore.js
```

### Step 2: 修改每个 Day 的 Composable

对每个 day 的 composable 进行以下修改：

**添加实时数据接口：**
```javascript
import { useOperationLogStore } from '@/stores/operationLogStore'

// 在 composable 中添加
const realtimeData = computed(() => {
  const logStore = useOperationLogStore()

  return {
    metrics: [
      {
        label: '指标名称',
        value: 值,
        unit: '单位',
        icon: '🎯'
      }
      // ... 更多指标
    ],
    gasUsage: logStore.getDayGasUsage(dayNumber),
    ethCost: logStore.getDayEthCost(dayNumber),
    operationCount: logStore.getDayOperationCount(dayNumber)
  }
})

// 在操作函数中记录日志
const someFunction = () => {
  // ... 原有逻辑 ...

  // 记录操作
  logStore.addLog(dayNumber, '操作名称', '详细信息', 'gasKey')

  return result
}

// 导出时添加
return {
  // ... 原有返回值
  realtimeData  // ← 新增
}
```

### Step 3: 修改 Day 组件

在组件中传递 `realtimeData`：

```vue
<template>
  <KnowledgePanel
    :realtime-data="realtimeData"  <!-- ← 新增 -->
    :current-day="day"
    ...
  />
</template>

<script setup>
const {
  // ... 原有解构
  realtimeData  // ← 新增
} = useDayX()
</script>
```

### Step 4: 修改 KnowledgePanel

传递 `realtimeData` 给 Sidebar：

```vue
<template>
  <Sidebar
    :realtime-data="realtimeData"  <!-- ← 新增 -->
    :day-progress="dayProgress"
    :current-day="currentDay"
  />
</template>

<script setup>
const props = defineProps({
  // ... 原有 props
  realtimeData: {  // ← 新增
    type: Object,
    default: null
  }
})
</script>
```

### Step 5: 替换 Sidebar

使用新版本替换原有的 Sidebar：

```bash
# 备份原文件
mv src/components/Sidebar.vue src/components/Sidebar.vue.backup

# 使用新版本
cp src/components/Sidebar-refactored.vue src/components/Sidebar.vue
```

## 📊 实时数据接口规范

每个 day 的 `realtimeData` 应返回：

```javascript
{
  metrics: [
    {
      label: string,    // 指标名称
      value: any,       // 指标值
      unit: string,     // 单位（可选）
      icon: string      // 图标（可选）
    }
    // ... 更多指标
  ],
  gasUsage: number,      // 累计 Gas 消耗
  ethCost: number,       // 累计 ETH 成本
  operationCount: number // 操作次数
}
```

## 📝 操作日志接口

在操作函数中调用：

```javascript
const logStore = useOperationLogStore()

// 有 Gas 消耗的操作
logStore.addLog(
  dayNumber,           // Day 编号
  '操作名称',           // 操作类型
  '详细信息',           // 操作详情
  'gasKey'            // concepts.js 中的 gas 键名
)

// 无 Gas 消耗的操作（如查询）
logStore.addLog(
  dayNumber,
  '操作名称',
  '详细信息'
  // 不传 gasKey，Gas 记为 0
)
```

## 🎯 各 Day 的实时指标建议

| Day | 核心指标 | Gas Key 示例 |
|-----|---------|-------------|
| Day 1 | 计数值、点击次数 | increment, reset |
| Day 2 | - | addData, retrieveData |
| Day 3 | 候选人数、总票数 | addCandidate, vote |
| Day 4 | 当前最高出价 | placeBid, endAuction |
| Day 5 | 宝藏数量 | addTreasure, withdrawTreasure |
| Day 6 | 会员数、用户余额 | addMembers, depositAmountEther |
| Day 7 | 朋友数、余额 | addFriend, recordDebt |
| Day 8 | 总打赏额 | tipInEth, withdrawTips |
| Day 9 | - | （跨合约调用） |
| Day 10 | 运动次数、总距离 | logWorkout |
| Day 11 | 合约余额 | deposit, withdraw |
| Day 12 | 代币总量、余额 | transfer, approve, transferFrom |

## ✅ 验证清单

实施后，检查以下功能：

- [ ] 每个操作都会在操作日志中显示
- [ ] 实时数据显示当前 day 的核心指标
- [ ] Gas 消耗累计计算正确
- [ ] 切换 day 时，实时数据随之变化
- [ ] 操作日志按时间倒序显示
- [ ] 当前 day 的日志有高亮显示

## 🔧 调试技巧

如果遇到问题：

1. **检查 realtimeData 是否正确返回**
   ```javascript
   console.log('Realtime data:', realtimeData.value)
   ```

2. **检查日志是否记录**
   ```javascript
   console.log('All logs:', logStore.logs)
   ```

3. **检查 Gas 估算**
   ```javascript
   import { gasEstimates } from '@/data/concepts'
   console.log('Gas estimates:', gasEstimates)
   ```

## 💡 优化建议

1. **性能优化**：对于频繁更新的指标，考虑使用 `shallowRef` 代替 `ref`
2. **持久化**：可以将操作日志保存到 `localStorage`，刷新后不丢失
3. **过滤功能**：在操作日志中添加按 day 过滤的功能
4. **导出功能**：允许用户导出操作历史为 CSV

## 📚 相关文件

- Gas 估算定义：`src/data/concepts.js` (gasEstimates)
- 进度 Store：`src/stores/progressStore.js`
- Day 配置：`src/data/days.js`

---

需要帮助实施某个具体步骤吗？我可以帮你：
1. 修改某个特定 day 的 composable
2. 调试集成问题
3. 添加特定的实时指标
