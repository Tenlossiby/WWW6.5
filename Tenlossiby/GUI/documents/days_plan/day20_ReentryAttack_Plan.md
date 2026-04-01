# Day 20 - ReentryAttack（重入攻击）Vue学习互动页面详细规划
## 一、页面整体架构
### 1. 页面布局
```
┌──────────────────────────────────
───────────────────────────────┐
│  顶部：消息提示栏 
(message-toast)                    
              │
├──────────────────────────────────
───────┬───────────────────────┤
│              左栏 (交互
区)               │      右栏 (知识
面板)   │
│                                  
       │                       │
│  1. 攻击原理可视化
区                      │   
KnowledgePanel      │
│  2. 角色切换
区                           │   
(显示解锁的知识点)   │
│  3. 金库状态面
板                         
│                       │
│  4. 攻击操作
区                           
│                       │
│  5. 防护演示
区                           
│                       │
│  6. 代码对比
区                           
│                       │
│                                  
       │                       │
└──────────────────────────────────
───────┴───────────────────────┘
```
### 2. 主题配色
- 危险/攻击主题 ：红色系 ( #ef4444 ) - 表示漏洞和攻击
- 安全/防护主题 ：绿色系 ( #22c55e ) - 表示安全代码
- 中性/信息主题 ：蓝色系 ( #3b82f6 ) - 用于普通操作
## 二、核心交互区域设计
### 区域1：攻击原理可视化区（顶部）
功能 ：直观展示重入攻击的原理

UI元素 ：

```
┌──────────────────────────────────
───────────────────────────┐
│  🔥 重入攻击原理演
示                                 
         │
│                                  
                           │
│   攻击者合约                    有
漏洞的金库                    │
│   ┌─────────┐                 
┌─────────────┐               │
│   │ GoldThief│  ──调用
withdraw──▶│  GoldVault  
│               │
│   └────┬────┘                 
└──────┬──────┘               │
│        
│                              
│                      │
│        │◀────────发送
ETH──────────────┤                 
     │
│        │     (触发receive
())          
│                      │
│        
│                              
│                      │
│        │────────再次调用
withdraw──────▶│  ← 余额还未更
新！      │
│        
│                              
│                      │
│        │◀────────再次发送
ETH──────────┤                     
 │
│        
│                              
│                      │
│        └─────── 重复直到资金耗尽 
──────┘                      │
│                                  
                           │
│   👆 点击了解重入攻击原
理                                 
     │
└──────────────────────────────────
───────────────────────────┘
```
解锁知识点 ：点击此区域解锁 reentrancy_attack （重入攻击概念）

### 区域2：角色切换区
功能 ：切换攻击者和受害者视角

UI元素 ：

```
┌──────────────────────────────────
───────────────────────────┐
│  👤 角色切
换                                 
                 │
│                                  
                           │
│   [🥷 攻击者视角]    [🏦 金库管理员
视角]                       │
│                                  
                           │
└──────────────────────────────────
───────────────────────────┘
```
交互逻辑 ：

- 攻击者视角：可以发起攻击操作
- 金库管理员视角：查看合约状态、部署防护版本
### 区域3：金库状态面板
功能 ：实时显示GoldVault合约状态

UI元素 ：

```
┌──────────────────────────────────
───────────────────────────┐
│  🏦 金库状态面
板                                 
             │
│                                  
                           │
│   合约总余额: 10.0 
ETH                                
       │
│   攻击者余额: 1.0 ETH  →  攻击后: 
11.0 ETH                   │
│   重入锁状态: 🔓 未锁定 / 🔒 已锁
定                          │
│                                  
                           │
│   
┌──────────────────────────────────
───┐                   │
│   │  用户          │  存入金额  
│  状态  │                   │
│   
├──────────────────────────────────
───┤                   │
│   │  攻击者        │  1.0 ETH   
│  正常  │                   │
│   │  用户A         │  5.0 ETH   
│  正常  │                   │
│   
└──────────────────────────────────
───┘                   │
│                                  
                           │
└──────────────────────────────────
───────────────────────────┘
```
解锁知识点 ：查看余额分布时解锁 contract_balance （合约余额）

### 区域4：攻击操作区（核心交互）
功能 ：演示有漏洞的提款函数如何被攻击

UI元素 ：

```
┌──────────────────────────────────
───────────────────────────┐
│  ⚔️ 攻击操作
区                                 
               │
│                                  
                           │
│   步骤1: 存入ETH到金
库                                 
       │
│   
┌──────────────────────────────────
───────────────────┐   │
│   │  存入金额: [ 1.0 ] 
ETH                              
│   │
│   
│                                  
                   │   │
│   │  [🔴 存入ETH (调用
deposit)]                         
│   │
│   
└──────────────────────────────────
───────────────────┘   │
│                                  
                           │
│   步骤2: 发起重入攻
击                                 
       │
│   
┌──────────────────────────────────
───────────────────┐   │
│   │  攻击次数: [ 5 ] 次 (最多5次防止
无限循环)            │   │
│   
│                                  
                   │   │
│   │  [🔴 攻击漏洞版本 
(vulnerableWithdraw)]             
│   │
│   │  [🟢 攻击安全版本 
(safeWithdraw)]                   
│   │
│   
└──────────────────────────────────
───────────────────┘   │
│                                  
                           │
│   攻击结果
:                                  
               │
│   
┌──────────────────────────────────
───────────────────┐   │
│   │  攻击次数: 5
次                                 
      │   │
│   │  窃取金额: 5.0 
ETH                                
   │   │
│   │  攻击状态: ✅ 成功 / ❌ 被阻
止                        │   │
│   
└──────────────────────────────────
───────────────────┘   │
│                                  
                           │
└──────────────────────────────────
───────────────────────────┘
```
解锁知识点 ：

- 存入ETH时解锁 deposit_function （存款函数）
- 攻击漏洞版本成功后解锁 vulnerable_withdraw （漏洞提款）
- 攻击安全版本被阻止后解锁 reentrancy_guard （重入锁）
- 观察到攻击成功后解锁 fallback_receive （回退函数）
### 区域5：防护演示区
功能 ：展示Checks-Effects-Interactions模式和重入锁

UI元素 ：

```
┌──────────────────────────────────
───────────────────────────┐
│  🛡️ 防护机制演
示                                 
             │
│                                  
                           │
│   模式1: 
Checks-Effects-Interactions        
                 │
│   
┌──────────────────────────────────
───────────────────┐   │
│   
│                                  
                   │   │
│   │   1️⃣ Checks (检
查)                                
  │   │
│   │      require(amount > 0, 
"Nothing to withdraw");    │   │
│   
│                                  
                   │   │
│   │   2️⃣ Effects (更新状态) ← 先
更新余额！               │   │
│   │      goldBalance[msg.sender] 
= 0;                   │   │
│   
│                                  
                   │   │
│   │   3️⃣ Interactions (外部调用) 
← 最后才发送ETH！       │   │
│   │      (bool sent, ) = msg.
sender.call{value: amount} │   │
│   
│                                  
                   │   │
│   
└──────────────────────────────────
───────────────────┘   │
│                                  
                           │
│   模式2: 重入锁 (Reentrancy 
Guard)                           │
│   
┌──────────────────────────────────
───────────────────┐   │
│   
│                                  
                   │   │
│   │   uint256 private 
_status;                          
│   │
│   │   uint256 private constant 
_NOT_ENTERED = 1;        │   │
│   │   uint256 private constant 
_ENTERED = 2;            │   │
│   
│                                  
                   │   │
│   │   modifier nonReentrant() 
{                         │   │
│   │       require(_status != 
_ENTERED, "Blocked!");     │   │
│   │       _status = 
_ENTERED;      // 🔒 锁
定           │   │
│   │       
_;                                 
           │   │
│   │       _status = 
_NOT_ENTERED;  // 🔓 解
锁           │   │
│   
│   }                              
                   │   │
│   
│                                  
                   │   │
│   
└──────────────────────────────────
───────────────────┘   │
│                                  
                           │
└──────────────────────────────────
───────────────────────────┘
```
解锁知识点 ：点击查看防护机制时解锁 checks_effects_interactions （CEI模式）

### 区域6：代码对比区
功能 ：对比漏洞代码和安全代码

UI元素 ：

```
┌──────────────────────────────────
───────────────────────────┐
│  📜 漏洞代码 vs 安全代
码                                 
      │
│                                  
                           │
│   [🔴 漏洞版本]    [🟢 安全版
本]                              │
│                                  
                           │
│   ┌─────────────────────┐  
┌─────────────────────┐         │
│   │  ❌ 有漏洞的代码     │  │  ✅ 安
全的代码       │         │
│   │                     │  
│                     │         │
│   │  function           │  │  
function           │         │
│   │  vulnerableWithdraw │  │  
safeWithdraw       │         │
│   │  () external {      │  │  () 
external        │         │
│   │                     │  │  
nonReentrant {     │         │
│   │    // 1. 先发送ETH  │  
│                     │         │
│   │    (sent,) = msg.   │  
│    // 1. 先检查     │         │
│   │      sender.call{   │  │    
require(...);    │         │
│   │      value:amount}  │  
│                     │         │
│   │      ("");          │  
│    // 2. 再更新状态 │         │
│   │                     │  │    
balance = 0;     │         │
│   │    // 2. 后更新余额 │  
│                     │         │
│   │    balance = 0;  ←  │  
│    // 3. 最后发送   │         │
│   │    漏洞在这里！      │  │    
(sent,) = msg.   │         │
│   │                     │  
│      sender.call... │         │
│   │  }                  │  
│  }                  │         │
│   └─────────────────────┘  
└─────────────────────┘         │
│                                  
                           │
└──────────────────────────────────
───────────────────────────┘
```
解锁知识点 ：查看代码对比时解锁 code_comparison （代码对比）

## 三、知识点设计（8个概念）
```
concepts: [
    "reentrancy_attack",        // 
    重入攻击 - 点击攻击原理图解锁
    "fallback_receive",         // 
    回退函数 - 攻击成功后解锁
    "vulnerable_withdraw",      // 
    漏洞提款 - 攻击漏洞版本解锁
    "deposit_function",         // 
    存款函数 - 存入ETH时解锁
    "checks_effects_interactions", 
    // CEI模式 - 查看防护机制解锁
    "reentrancy_guard",         // 
    重入锁 - 攻击安全版本被阻止后解锁
    "contract_balance",         // 
    合约余额 - 查看金库状态时解锁
    "code_comparison"           // 
    代码对比 - 查看代码对比区解锁
]
```
## 四、操作流程与解锁顺序
```
用户进入页面
    ↓
点击"重入攻击原理图"
    ↓
🎉 解锁: reentrancy_attack (重入攻击
概念)
    ↓
提示: "👉 存入ETH到金库开始攻击演示"
    ↓
点击"存入ETH"
    ↓
🎉 解锁: deposit_function (存款函数)
    ↓
提示: "👉 现在尝试攻击漏洞版本！"
    ↓
点击"攻击漏洞版本"
    ↓
🎉 解锁: vulnerable_withdraw (漏洞提
款)
🎉 解锁: fallback_receive (回退函数)
    ↓
提示: "💡 观察攻击如何重复提款！👉 查看
防护机制"
    ↓
点击"防护机制演示"
    ↓
🎉 解锁: 
checks_effects_interactions (CEI模
式)
    ↓
提示: "👉 尝试攻击安全版本，看重入锁如何
工作"
    ↓
点击"攻击安全版本"
    ↓
🎉 解锁: reentrancy_guard (重入锁)
    ↓
提示: "✅ 攻击被阻止！👉 查看代码对比"
    ↓
点击"代码对比"
    ↓
🎉 解锁: code_comparison (代码对比)
🎉 解锁: contract_balance (合约余额)
    ↓
提示: "🎉 恭喜！你已了解重入攻击及防护措
施！"
```
## 五、特殊功能设计
### 1. 攻击动画效果
- 攻击发起时显示"攻击波"动画
- 每次重入调用显示一条连接线
- 窃取金额实时累加动画
### 2. 重入锁状态指示器
- 显示当前合约锁定状态（🔓未锁定 / 🔒已锁定）
- 攻击安全版本时显示"Reentrant call blocked"错误信息
### 3. 历史案例提示
- 底部显示"The DAO攻击"案例简介
- 损失金额：360万ETH
## 六、需要创建的文件
1. 组件文件 : src/components/days/Day20/ReentryAttack.vue
2. 状态管理 : src/composables/useDay20.js
3. 配置更新 :
   - src/data/days.js - 添加Day20配置
   - src/data/concepts.js - 添加Day20概念定义
   - src/components/DayContent.vue - 注册Day20组件
   - src/components/Sidebar.vue - 添加Day20概念支持
   - src/components/shared/KnowledgePanel.vue - 添加Day20支持
   - src/composables/useCurrentDayRealtimeData.js - 注册Day20
请review这个规划

---

Day20 交互解锁逻辑问题分析
问题根源
1. progressStore.unlockConcept 没有返回值

// progressStore.js 第26-32行
const unlockConcept = (day, conceptKey) => {
  const dayKey = normalizeDay(day)
  const progress = dayProgress.value[dayKey]
  if (progress && !progress.unlockedConcepts.includes(conceptKey)) {
    progress.unlockedConcepts.push(conceptKey)
  }
  // ❌ 没有返回值！
}
2. 组件代码假设它有返回值

// ReentryAttack.vue 第442-446行
const handlePrincipleClick = () => {
  showPrincipleExplanation.value = !showPrincipleExplanation.value
  const result = progressStore.unlockConcept(20, 'reentrancy_attack')
  if (result.success) {  // ❌ result 是 undefined，永远不会进入这个分支！
    currentHint.value = result.hints[0] || getHint('reentrancy_attack')
  }
}
问题：result 始终是 undefined，所以 if (result.success) 永远不会执行，currentHint 从未被正确更新！

正确的工作原理
根据提示系统设计规范，提示系统应该这样工作：

KnowledgePanel 自动提示显示逻辑

// KnowledgePanel.vue 第381-384行
// 优先级 6: Day 20 显示下一步提示
if (props.currentDay === 20 && currentConcept.value && !manualConceptKey.value) {
  return getDay20Hint(currentConcept.value.key)  // ← 自动调用！
}
关键点：

当 currentConcept 更新时（最新解锁的概念），KnowledgePanel 会自动调用 getDay20Hint(currentConcept.value.key)
不需要手动设置 customHint
不需要处理 progressStore.unlockConcept 的返回值
KnowledgePanel 如何获取 currentConcept

// KnowledgePanel.vue 第321-326行
const currentConcept = computed(() => {
  if (!props.unlockedConcepts || props.unlockedConcepts.length === 0) return null
  
  // 返回最新解锁的概念
  const latestKey = props.unlockedConcepts[props.unlockedConcepts.length - 1]
  const conceptDefs = getConceptDefinition(props.currentDay)
  
  return conceptDefs[latestKey]
})
工作流程：

用户执行操作（如点击攻击原理图）
组件调用 progressStore.unlockConcept(20, 'reentrancy_attack')
progressStore 更新 unlockedConcepts 数组
KnowledgePanel 的 currentConcept 计算属性自动更新
KnowledgePanel 的 hintText 计算属性自动调用 getDay20Hint('reentrancy_attack')
右栏显示正确的下一步提示
当前代码的所有问题
让我逐个检查所有交互函数：

Grep "progressStore.unlockConcept|unlockResult =|result = progressStore" (in D:\BaiduSyncdisk\study\2602Hersolidity\WWW6.5\Tenlossiby\GUI\src\components\days\Day20\ReentryAttack.vue)
82 lines of output
📋 完整问题清单
所有交互函数都有相同的错误：

函数	行号	问题
handlePrincipleClick	448-452	❌ 假设 unlockConcept 返回对象
handleDeposit	460-464	❌ 假设 unlockConcept 返回对象
handleVulnerableAttack	475-482	❌ 假设 unlockConcept 返回对象
handleSafeAttack	493-497	❌ 假设 unlockConcept 返回对象
checkVaultStatus	505-509	❌ 假设 unlockConcept 返回对象
handleProtectionClick	514-523	❌ 假设 unlockConcept 返回对象
handleCodeComparisonClick	528-532	❌ 假设 unlockConcept 返回对象
✅ 完整修复方案
修复原则
根据提示系统设计规范和 KnowledgePanel 的自动提示机制：

只需要调用 progressStore.unlockConcept(20, conceptKey)
不要检查返回值
不要手动设置 currentHint（让 KnowledgePanel 自动处理）
保留 composable 返回的 nextStep 提示
保留特殊情况的手动提示（如角色切换）
修复后的完整代码

<script setup>
// ... 其他导入

// 显示消息
const showMessage = (msg, type = 'success') => {
  message.value = msg
  messageType.value = type
  setTimeout(() => {
    message.value = ''
  }, 3000)
}

// 切换角色
const switchRole = (role) => {
  currentRole.value = role
  if (role === 'attacker') {
    currentHint.value = '🥷 你现在是攻击者身份！👉 点击重入攻击原理图了解如何利用漏洞！'
  } else {
    currentHint.value = '🏦 你现在是金库管理员身份！👉 查看金库状态了解合约部署情况！'
  }
}

// 处理原理图点击
const handlePrincipleClick = () => {
  showPrincipleExplanation.value = !showPrincipleExplanation.value
  progressStore.unlockConcept(20, 'reentrancy_attack')
  showMessage('🎉 恭喜解锁：重入攻击！这是最著名的智能合约漏洞，攻击者通过递归调用窃取资金。')
  // ✅ 删除了错误的返回值检查和 currentHint 设置
  // KnowledgePanel 会自动显示下一步提示
}

// 处理存款
const handleDeposit = () => {
  const result = deposit('0xAttacker', depositAmount.value)
  showMessage(result.message, !result.success)
  if (result.success) {
    progressStore.unlockConcept(20, 'deposit_function')
    showMessage('🎉 恭喜解锁：存款函数！用户可以通过deposit()存入ETH到金库。')
    // ✅ KnowledgePanel 会自动显示下一步提示
  }
}

// 处理漏洞攻击
const handleVulnerableAttack = () => {
  const result = vulnerableWithdraw('0xAttacker', 5)
  showMessage(result.message, result.success ? 'success' : 'error')
  if (result.success) {
    // 解锁相关概念
    result.hints?.forEach(concept => {
      progressStore.unlockConcept(20, concept)
      const conceptNames = {
        'vulnerable_withdraw': '漏洞提款函数',
        'fallback_receive': 'receive()回退函数'
      }
      showMessage(`🎉 恭喜解锁：${conceptNames[concept] || concept}！`)
    })
    // ✅ 保留 composable 返回的 nextStep
    currentHint.value = result.nextStep
  }
}

// 处理安全攻击
const handleSafeAttack = () => {
  const result = safeWithdraw('0xAttacker')
  showMessage(result.message, result.success ? 'success' : 'error')
  if (result.success) {
    progressStore.unlockConcept(20, 'checks_effects_interactions')
    showMessage('🎉 恭喜解锁：CEI模式！先检查条件，再更新状态，最后进行外部调用，防止重入攻击。')
    // ✅ 保留 composable 返回的 nextStep
    currentHint.value = result.nextStep
  }
}

// 检查金库状态
const checkVaultStatus = () => {
  const result = checkVault()
  showMessage(result.message, 'success')
  progressStore.unlockConcept(20, 'contract_balance')
  showMessage('🎉 恭喜解锁：合约余额！金库合约存储所有用户的ETH，可通过balance属性查询。')
  // ✅ KnowledgePanel 会自动显示下一步提示
}

// 处理防护点击
const handleProtectionClick = () => {
  progressStore.unlockConcept(20, 'checks_effects_interactions')
  showMessage('🎉 恭喜解锁：CEI模式！先检查条件，再更新状态，最后进行外部调用，防止重入攻击。')
  
  progressStore.unlockConcept(20, 'reentrancy_guard')
  showMessage('🎉 恭喜解锁：重入锁！使用nonReentrant修饰符阻止函数被重入调用。')
  // ✅ KnowledgePanel 会自动显示最新解锁概念的提示
}

// 处理代码对比点击
const handleCodeComparisonClick = () => {
  progressStore.unlockConcept(20, 'code_comparison')
  showMessage('🎉 恭喜解锁：代码对比！对比漏洞代码和安全代码，理解CEI模式和重入锁的防护原理。')
  // ✅ KnowledgePanel 会自动显示下一步提示
}

// 获取提示（保留用于特殊情况）
const getHint = (conceptKey) => {
  const hints = {
    reentrancy_attack: "🎯 重入攻击是最著名的智能合约漏洞！👉 存入ETH到金库开始攻击演示！",
    deposit_function: "💰 存款函数允许用户存入ETH！👉 现在尝试攻击漏洞版本！",
    vulnerable_withdraw: "🔴 有漏洞的提款函数先发送ETH后更新余额！👉 查看防护机制了解如何修复！",
    fallback_receive: "⚡ receive()函数在接收ETH时自动触发！👉 查看防护机制了解如何修复！",
    checks_effects_interactions: "✅ CEI模式先更新状态再发送ETH，防止重入！👉 尝试攻击安全版本！",
    reentrancy_guard: "🔒 重入锁阻止函数重入调用！👉 查看代码对比巩固知识！",
    contract_balance: "💵 合约余额存储所有用户的ETH！🎉 恭喜完成Day20学习！",
    code_comparison: "📜 对比漏洞代码和安全代码，理解修复方法！🎉 恭喜完成Day20学习！"
  }
  return hints[conceptKey] || "📖 点击其他概念标签查看更多详细解释。"
}

// 初始化
onMounted(() => {
  if (unlockedConcepts.value.length === 0) {
    currentHint.value = '👆 欢迎来到 Day 20！点击重入攻击原理图了解最著名的智能合约漏洞！'
  }
})

// 导出 realtimeData 供父组件使用
defineExpose({
  realtimeData
})
</script>
🎯 核心改动总结
1. 删除了错误的返回值检查

// ❌ 修复前
const result = progressStore.unlockConcept(20, 'reentrancy_attack')
if (result.success) {  // ← result 是 undefined
  currentHint.value = result.hints[0] || getHint('reentrancy_attack')
}

// ✅ 修复后
progressStore.unlockConcept(20, 'reentrancy_attack')
// KnowledgePanel 会自动调用 getDay20Hint('reentrancy_attack')
2. 手动提示只在特殊情况使用
保留的手动提示：

✅ 角色切换提示（switchRole）
✅ 初始加载提示（onMounted）
✅ Composable 返回的 nextStep（如 handleVulnerableAttack）
删除的手动提示：

❌ 所有交互解锁后的 currentHint.value 设置
3. 让 KnowledgePanel 自动工作
根据提示系统设计规范，KnowledgePanel 的优先级6会自动处理：


// KnowledgePanel.vue 第381-384行
if (props.currentDay === 20 && currentConcept.value && !manualConceptKey.value) {
  return getDay20Hint(currentConcept.value.key)  // ← 自动调用
}
📊 修复后的工作流程
场景1：点击攻击原理图

1. 用户点击攻击原理图
   ↓
2. handlePrincipleClick 调用 progressStore.unlockConcept(20, 'reentrancy_attack')
   ↓
3. progressStore 更新 unlockedConcepts: ['reentrancy_attack']
   ↓
4. KnowledgePanel 的 currentConcept 计算属性更新
   ↓
5. KnowledgePanel 的 hintText 计算属性自动调用 getDay20Hint('reentrancy_attack')
   ↓
6. 右栏显示：🔥 你了解了重入攻击！这是最著名的智能合约漏洞。👉 存入ETH到金库开始攻击演示！
场景2：存入 ETH

1. 用户点击"存入ETH"
   ↓
2. handleDeposit 调用 progressStore.unlockConcept(20, 'deposit_function')
   ↓
3. progressStore 更新 unlockedConcepts: ['reentrancy_attack', 'deposit_function']
   ↓
4. KnowledgePanel 自动显示 getDay20Hint('deposit_function')
   ↓
5. 右栏显示：💰 你使用了存款函数！用户存入ETH增加余额。👉 现在尝试攻击漏洞版本！
🎉 总结
问题根源：

❌ 所有交互函数都假设 progressStore.unlockConcept 返回 {success, hints}
❌ 但实际上它没有返回值（void）
❌ 导致 currentHint 从未被正确更新
❌ 导致右栏提示不根据交互显示
修复方案：

✅ 删除所有错误的返回值检查
✅ 删除交互解锁后的手动 currentHint 设置
✅ 让 KnowledgePanel 通过其自动机制显示提示
✅ 只在特殊情况（角色切换、初始加载）使用手动提示
✅ 保留 composable 返回的 nextStep 提示

修复后效果：

✅ 右栏会自动显示最新解锁概念的下一步提示
✅ 符合提示系统设计规范
✅ 与 Day 11-19 的工作机制一致