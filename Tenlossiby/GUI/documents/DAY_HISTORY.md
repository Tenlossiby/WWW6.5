# Day 详细参考示例

> 本文档存放所有 Day 的详细参考示例，包括合约功能、核心交互、知识点设计和特殊功能实现。

---

## Day 30 参考示例（MiniDex - 迷你DEX）

### 合约功能
- **Factory.sol**: 工厂合约，创建和管理交易对
  - `createPair()` - 创建新的代币交易对，按地址排序代币
  - `getPair()` - 查询两个代币对应的交易对地址
  - `allPairs()` - 获取所有已创建的交易对地址列表
  - `allPairsLength()` - 获取交易对总数
- **Pair.sol**: 交易对合约，管理流动性池和代币交换
  - `addLiquidity()` - 添加流动性，首次获得√(amount0×amount1) LP代币
  - `removeLiquidity()` - 移除流动性，按LP比例取回储备金
  - `swap()` - 代币交换，基于恒定乘积公式计算输出
  - `getReserves()` - 获取当前储备金数量
  - `mint()` - 铸造LP代币给流动性提供者
  - `burn()` - 销毁LP代币

### 核心交互
- **DEX架构可视化**: 工厂合约→交易对→流动性池完整架构，点击解锁工厂合约概念
- **数学原理面板**: 顺序点击解锁3个概念（恒定乘积公式→价格计算→流动性比例）
- **工厂面板**: 选择两种代币创建交易对，展示代币地址排序和Pair地址生成
- **交易对选择器**: 显示所有已创建交易对，展示Pair地址到储备金的映射
- **池子状态面板**: 显示储备金、LP代币总量、当前价格、用户LP份额和余额
- **流动性面板**: 添加/移除流动性双标签页，显示比例提示和预计获得LP代币
- **交换面板**: Token0↔Token1双向交换，显示价格影响和滑点保护

### 10个知识点
```javascript
concepts: [
  "pair_factory",        // 工厂合约 - 点击架构图解锁
  "create_pair",         // 创建交易对 - 创建交易对时解锁
  "token_sorting",       // 代币排序 - 展示地址排序时解锁
  "liquidity_pool",      // 流动性池 - 点击数学面板第一次解锁
  "add_liquidity",       // 添加流动性 - 添加流动性时解锁
  "remove_liquidity",    // 移除流动性 - 移除流动性时解锁
  "swap_tokens",         // 代币交换 - 执行交换时解锁
  "lp_token",            // LP代币 - 点击数学面板第二次解锁
  "price_calculation",   // 价格计算 - 点击数学面板第三次解锁
  "reserves_tracking"    // 储备金追踪 - 实时更新时解锁
]
```

### 关键设计
- **工厂模式**: 使用工厂合约创建交易对，确保地址确定性和代码复用
- **地址排序**: 代币按地址大小排序，确保交易对地址一致性
- **恒定乘积**: x × y = k，保持流动性池的恒定乘积不变
- **LP代币**: 流动性提供者获得LP代币，代表其在池中的份额
- **价格计算**: 当前价格 = reserve1 / reserve0，基于储备金比例

### 特殊功能实现

#### 1. Vue 3 Composable 响应式传递（重大经验教训）
```javascript
// ❌ 错误：toRefs 包含函数，且直接传递 ref
const { calculatedLPTokens, addLiquidity } = toRefs(day30)
<LiquidityPanel :calculated-lp-tokens="calculatedLPTokens" />  // 可能失败

// ✅ 正确：分离解构，ref 包装成 computed
const { calculatedLPTokens } = toRefs(day30)
const { addLiquidity } = day30
const displayLPTokens = computed(() => calculatedLPTokens.value)
<LiquidityPanel :calculated-lp-tokens="displayLPTokens" />
```

#### 2. 顺序解锁机制
```javascript
const handleMathPanelClick = () => {
  // 第一次点击：解锁 liquidity_pool
  if (!progressStore.isConceptUnlocked(30, 'liquidity_pool')) {
    progressStore.unlockConcept(30, 'liquidity_pool')
    showMessage('✅ 已了解流动性池！👉 再次点击了解LP代币！')
    return
  }
  // 第二次点击：解锁 lp_token
  if (!progressStore.isConceptUnlocked(30, 'lp_token')) {
    progressStore.unlockConcept(30, 'lp_token')
    showMessage('✅ 已了解LP代币！👉 再次点击了解价格计算！')
    return
  }
  // 第三次点击：解锁 price_calculation
  // ...
}
```

#### 3. 恒定乘积公式计算
```javascript
// 添加流动性计算
const calculatedLPTokens = computed(() => {
  if (!selectedPair.value) return 0
  
  const amount0 = parseFloat(addAmount0.value) || 0
  const amount1 = parseFloat(addAmount1.value) || 0
  
  if (totalSupply.value === 0) {
    // 首次添加：√(amount0 × amount1)
    return Math.sqrt(amount0 * amount1)
  } else {
    // 后续添加：按较小比例
    const liquidity0 = (amount0 * totalSupply.value) / reserves.value.token0
    const liquidity1 = (amount1 * totalSupply.value) / reserves.value.token1
    return Math.min(liquidity0, liquidity1)
  }
})

// 代币交换计算
const calculatedSwapOutput = computed(() => {
  const amountIn = parseFloat(swapAmountIn.value) || 0
  const reserveIn = swapDirection.value === '0to1' 
    ? reserves.value.token0 
    : reserves.value.token1
  const reserveOut = swapDirection.value === '0to1'
    ? reserves.value.token1
    : reserves.value.token0
  
  // 恒定乘积公式：x × y = k
  // 收取0.3%手续费
  const amountInWithFee = amountIn * 997
  const numerator = amountInWithFee * reserveOut
  const denominator = reserveIn * 1000 + amountInWithFee
  return numerator / denominator
})
```

#### 4. 组件通信模式
```vue
<!-- 父组件 MiniDex.vue -->
<LiquidityPanel
  v-model:add-amount0="addAmount0"
  v-model:add-amount1="addAmount1"
  :calculated-lp-tokens="displayLPTokens"
  @add-liquidity="handleAddLiquidity"
/>

<!-- 子组件 LiquidityPanel.vue -->
<input 
  :value="addAmount0"
  @input="$emit('update:add-amount0', $event.target.value)"
/>
<button @click="$emit('add-liquidity')">添加流动性</button>
```

---

## Day 29 参考示例（SimpleStablecoin - 简单稳定币）

### 合约功能
- **SimpleStablecoin.sol**: 超额抵押稳定币合约实现
  - `depositCollateral()` - 存入ETH抵押品，增加用户抵押余额
  - `mintStablecoin()` - 根据抵押品价值铸造SUSD，检查150%抵押率
  - `burnStablecoin()` - 销毁SUSD减少债务，提高健康因子
  - `withdrawCollateral()` - 提取ETH，确保提取后仍满足抵押率要求
  - `getEthPrice()` - 从Chainlink预言机获取ETH/USD价格
  - `getCollateralValueInUsd()` - 计算用户抵押品美元价值
  - `getHealthFactor()` - 计算用户健康因子（抵押品价值/债务×100%）
  - `liquidate()` - 清算不健康头寸，清算人获得5%奖励

### 核心交互
- **稳定币系统架构图**: 用户→存入ETH→铸造SUSD流程，点击解锁超额抵押机制
- **数学原理面板**: 顺序点击解锁4个概念（抵押率→价格预言机→健康因子→小数位转换）
- **预言机面板**: 显示当前ETH价格，支持自定义价格更新，触发清算演示
- **资产面板**: 显示用户抵押品、债务、SUSD余额、健康因子，颜色标识安全状态
- **四操作标签页**: 存入抵押品/铸造SUSD/销毁SUSD/提取抵押品，完整DeFi借贷流程
- **清算区**: 显示可清算头寸列表，执行清算获得5%奖励
- **系统统计**: 总抵押品、总供应量、系统抵押率实时显示

### 10个知识点
```javascript
concepts: [
  "over_collateralization",  // 超额抵押机制 - 点击架构图解锁
  "collateral_ratio",        // 抵押率计算 - 第一次点击数学面板解锁
  "price_oracle",            // 价格预言机 - 第二次点击数学面板解锁
  "health_factor",           // 健康因子 - 第三次点击数学面板解锁
  "decimal_conversion",      // 小数位转换 - 第四次点击数学面板解锁
  "deposit_collateral",      // 存入抵押品 - 存入ETH时解锁
  "mint_stablecoin",         // 铸造稳定币 - 铸造SUSD时解锁
  "burn_stablecoin",         // 销毁稳定币 - 销毁SUSD时解锁
  "withdraw_collateral",     // 提取抵押品 - 提取ETH时解锁
  "liquidation"              // 清算机制 - 执行清算时解锁
]
```

### 关键设计
- **超额抵押**: 150%抵押率，$150 ETH抵押可铸造$100 SUSD
- **价格预言机**: Chainlink提供ETH/USD价格，8位小数转换为18位小数
- **健康因子**: 抵押品价值/债务×100%，<150%可被清算
- **小数转换**: 8位→18位小数，乘以1e10进行精度统一
- **清算奖励**: 清算人偿还债务，获得抵押品+5%奖励

### 特殊功能实现

#### 1. 顺序解锁机制
```javascript
const handleMathPanelClick = () => {
  // 第一次点击：解锁 collateral_ratio
  if (!progressStore.isConceptUnlocked(29, 'collateral_ratio')) {
    progressStore.unlockConcept(29, 'collateral_ratio')
    showMessage('✅ 已了解抵押率计算！🎉 恭喜解锁：抵押率计算！👉 再次点击了解价格预言机！')
    currentHint.value = '📊 优秀！150%抵押率意味着50%安全缓冲。👉 再次点击了解价格预言机！'
    return
  }
  // 第二次点击：解锁 price_oracle
  if (!progressStore.isConceptUnlocked(29, 'price_oracle')) {
    progressStore.unlockConcept(29, 'price_oracle')
    showMessage('✅ 已了解价格预言机！🎉 恭喜解锁：价格预言机！👉 再次点击了解健康因子！')
    currentHint.value = '🔮 太棒了！Chainlink提供可靠价格数据。👉 再次点击了解健康因子！'
    return
  }
  // 第三、四次点击...
}
```

#### 2. 单位统一处理
```javascript
// ETH价格是8位小数，转换为18位小数
const ethPriceInUsd = computed(() => {
  return (ethPrice.value * 1e10) / 1e18
})

// 用户抵押品美元价值（普通数字）
const userCollateralValue = computed(() => {
  return (userCollateral.value * ethPrice.value * 1e10) / 1e36
})

// 最大可铸造金额（18位小数）
const maxMintable = computed(() => {
  return ((userCollateralValue.value * 100) / 150) * 1e18
})
```

#### 3. 健康因子状态显示
```vue
<div class="asset-card" :class="healthFactorClass">
  <div class="asset-icon">💚</div>
  <div class="asset-label">健康因子</div>
  <div class="asset-value">{{ userHealthFactorDisplay }}%</div>
  <div class="asset-status">{{ healthFactorStatus }}</div>
</div>
```

```javascript
const healthFactorClass = computed(() => {
  if (userHealthFactor.value >= 200) return 'safe'
  if (userHealthFactor.value >= 150) return 'warning'
  return 'danger'
})
```

#### 4. 实时数据从logStore获取
```javascript
const realtimeData = computed(() => ({
  gasUsage: logStore.getDayGasUsage(29),
  ethCost: logStore.getDayEthCost(29),
  operationCount: logStore.getDayOperationCount(29)
}))
```

---

## Day 28 参考示例（DecentralizedGovernance - 去中心化治理）

### 合约功能
- **DecentralizedGovernance.sol**: DAO治理合约实现
  - `createProposal()` - 创建提案，需要100 GOVERN押金，设置描述、目标地址、调用数据
  - `vote()` - 代币持有者投票，1代币=1票，每个地址只能投一次
  - `finalize()` - 最终确定提案，检查法定人数和多数决，通过后进入时间锁
  - `execute()` - 执行提案，时间锁过期后调用，使用低级别call执行操作
  - `cancel()` - 取消自己的提案（仅提案创建者）
  - `getProposal()` - 查询提案详细信息
  - `state()` - 获取提案当前状态

### 核心交互
- **DAO治理架构可视化**: TokenHolder→Governance→Treasury治理流程图，点击解锁代币治理模式
- **治理参数面板**: 显示时间锁(2天)和法定人数(10%)，顺序点击解锁时间锁机制和法定人数
- **提案状态流转图**: 展示Pending→Active→Succeeded→Queued→Executed完整状态机，点击解锁
- **角色切换区**: 三角色切换按钮(TokenHolder/Proposer/Executor)，条件显示对应操作区
- **TokenHolder操作区**: 选择提案、查看投票信息、赞成/反对投票
- **Proposer操作区**: 输入提案描述、目标地址(支持随机生成)、调用数据，创建提案
- **Executor操作区**: 选择提案、查看状态、最终确定/执行提案
- **时间控制区**: 快进1天/3天/5天，演示投票期和时间锁机制
- **提案列表**: 展示所有提案，显示状态、投票结果、进度条

### 9个知识点
```javascript
concepts: [
  "token_governance",        // 代币治理模式 - 点击架构图解锁
  "timelock_mechanism",      // 时间锁机制 - 第一次点击治理参数解锁
  "quorum_threshold",        // 法定人数 - 第二次点击治理参数解锁
  "proposal_state_machine",  // 提案状态机 - 点击状态流转图解锁
  "proposal_struct",         // 提案结构体 - 创建提案时解锁
  "voting_function",         // 投票功能 - 投票时解锁
  "finalize_function",       // 最终确定功能 - 最终确定时解锁
  "low_level_call",          // 低级别调用 - 执行提案时解锁
  "reentrancy_guard"         // 重入保护 - 执行提案时同时解锁
]
```

### 关键设计
- **代币治理**: 1 GOVERN = 1票，代币持有量决定投票权重
- **时间锁**: 2天等待期，给用户时间审查提案内容
- **法定人数**: 10%总供应量参与门槛，确保足够关注度
- **提案状态**: Pending(待创建)→Active(投票中)→Succeeded(通过)/Defeated(否决)→Queued(时间锁中)→Executed(已执行)
- **提案结构**: id, proposer, description, target, data, forVotes, againstVotes, startTime, endTime, executionTime, executed, canceled
- **投票记录**: mapping记录谁已投票，防止重复投票
- **押金机制**: 创建提案需100 GOVERN押金，执行后退还
- **低级别调用**: 使用call执行提案中的任意合约调用

### 特殊功能实现

#### 1. 顺序解锁机制
```javascript
const handleParamsClick = () => {
  // 第一次点击：只解锁 timelock_mechanism
  if (!progressStore.isConceptUnlocked(28, 'timelock_mechanism')) {
    progressStore.unlockConcept(28, 'timelock_mechanism')
    showMessage('✅ 已了解时间锁机制！🎉 恭喜解锁：时间锁机制！👉 再次点击了解法定人数！')
    currentHint.value = '🔒 优秀！时间锁给用户审查时间。👉 再次点击了解法定人数！'
    return
  }
  // 第二次点击：解锁 quorum_threshold
  if (!progressStore.isConceptUnlocked(28, 'quorum_threshold')) {
    progressStore.unlockConcept(28, 'quorum_threshold')
    showMessage('✅ 已了解法定人数！🎉 恭喜解锁：法定人数！👉 点击提案状态流转图了解状态机！')
    currentHint.value = '👥 太棒了！法定人数确保足够参与度。👉 点击提案状态流转图了解状态机！'
    return
  }
  // 两个都已解锁...
}
```

#### 2. 随机地址生成
```javascript
const generateRandomAddress = () => {
  const hexChars = '0123456789abcdef'
  let address = '0x'
  for (let i = 0; i < 40; i++) {
    address += hexChars[Math.floor(Math.random() * 16)]
  }
  newProposalTarget.value = address
  showMessage('🎲 已生成随机地址：' + address.slice(0, 10) + '...' + address.slice(-8))
}
```

#### 3. 角色切换与操作整合
```vue
<div class="section role-operations-section">
  <!-- 角色切换按钮 -->
  <div class="role-toggle">...</div>
  <!-- TokenHolder 操作区（条件显示） -->
  <div v-if="currentRole === 'TokenHolder'" class="operation-panel">...</div>
  <!-- Proposer 操作区（条件显示） -->
  <div v-if="currentRole === 'Proposer'" class="operation-panel">...</div>
  <!-- Executor 操作区（条件显示） -->
  <div v-if="currentRole === 'Executor'" class="operation-panel">...</div>
</div>
```

---

## Day 27 参考示例（YieldFarming - 收益耕作）

### 合约功能
- **YieldFarming.sol**: 收益耕作合约实现
  - `stake()` - 质押代币进入池子，更新奖励债务，获得LP份额
  - `unstake()` - 提取质押代币，结算奖励，支持部分提取
  - `claimRewards()` - 领取待奖励，更新奖励债务
  - `emergencyWithdraw()` - 紧急提取，立即取回质押代币但放弃奖励
  - `updatePool()` - 更新池子奖励变量，计算新增奖励
  - `pendingRewards()` - 查询用户待领取奖励
  - `getUserInfo()` - 查询用户质押信息

### 核心交互
- **收益耕作架构可视化**: 用户→质押池→奖励分配流程图，点击解锁奖励债务模式
- **质押池状态面板**: 显示总质押量、奖励速率、用户质押份额，点击解锁代币精度处理
- **奖励计算可视化**: 展示奖励债务模式计算流程，点击解锁时间加权计算
- **安全机制说明**: ReentrancyGuard + 紧急提取功能，点击解锁重入保护
- **三操作标签页**:
  - 质押: 输入质押数量，查看预估奖励，执行质押
  - 提取: 正常提取或紧急提取，显示风险提示
  - 领取奖励: 查看待领取奖励，一键领取
- **用户资产面板**: 显示质押余额、待领取奖励、累计奖励、LP份额

### 8个知识点
```javascript
concepts: [
  "reward_debt_pattern",       // 奖励债务模式 - 点击架构图解锁
  "staking_token_decimals",    // 代币精度处理 - 点击池状态面板解锁
  "time_weighted_calculation", // 时间加权计算 - 点击奖励计算可视化解锁
  "reentrancy_guard",          // 重入保护 - 点击安全机制解锁
  "stake_function",            // 质押功能 - 成功质押时解锁
  "unstake_function",          // 提取功能 - 成功提取时解锁
  "claim_rewards",             // 领取奖励 - 成功领取时解锁
  "emergency_withdraw"         // 紧急提取 - 使用紧急提取时解锁
]
```

### 关键设计
- **奖励债务模式**: rewardDebt记录用户已结算奖励，pending = (user.amount * accRewardPerShare / 1e18) - rewardDebt
- **代币精度**: 使用1e18精度，所有计算先乘后除避免精度损失
- **时间加权**: 基于区块时间戳，reward = timeElapsed × userStake × rewardRate
- **池子更新**: updatePool()计算从上次更新到现在的奖励，更新accRewardPerShare
- **紧急提取**: 绕过奖励计算，直接返还质押代币，奖励清零
- **重入保护**: 所有资金操作使用nonReentrant修饰符

### 特殊功能实现

#### 1. 奖励债务计算
```javascript
const updateRewardDebt = (user) => {
  // 计算用户应得奖励
  const pending = (user.amount * accRewardPerShare) / 1e18 - user.rewardDebt
  // 更新奖励债务，防止重复领取
  user.rewardDebt = (user.amount * accRewardPerShare) / 1e18
  return pending
}
```

#### 2. 紧急提取警告
```vue
<div class="emergency-warning">
  <div class="warning-icon">⚠️</div>
  <div class="warning-content">
    <div class="warning-title">紧急提取将放弃所有未领取奖励！</div>
    <div class="warning-desc">仅在紧急情况下使用，您的奖励将无法恢复。</div>
  </div>
</div>
```

---

## Day 26 参考示例（NFTMarketplace - NFT市场）

### 合约功能
- **NFTMarketplace.sol**: NFT市场合约实现
  - `listNFT()` - 挂单出售NFT，设置价格、版税接收地址、版税比例
  - `buyNFT()` - 购买NFT，支付ETH，自动分配资金给市场/版税/卖家
  - `cancelListing()` - 取消自己的挂单
  - `setMarketplaceFeePercent()` - 设置市场手续费比例（管理员）
  - `setFeeRecipient()` - 设置手续费接收地址（管理员）
  - `getListing()` - 查询指定NFT的挂单信息
  - `receive()` - 拒绝直接ETH转账，强制通过buyNFT()

### 核心交互
- **市场架构可视化**: Seller→Marketplace→Buyer三方关系图，点击解锁Listing结构体
- **市场统计面板**: 显示活跃挂单数、总交易量、市场手续费，点击解锁双重映射
- **资金分配可视化**: 展示买家支付→市场费/版税/卖家实收的流向，点击解锁资金分配
- **安全机制说明**: 展示ReentrancyGuard和receive() revert防护，点击解锁重入保护
- **三操作标签页**:
  - 挂单: 输入NFT地址、TokenID、价格、版税信息，解锁挂单功能
  - 购买: 下拉选择或点击mini-gallery卡片选择NFT，查看费用预览，解锁购买功能和事件日志
  - 取消: 选择自己的挂单并取消，解锁取消功能
- **NFT画廊**: 展示所有活跃挂单，支持点击选择和直接购买
- **交易历史**: 记录挂单、购买、取消操作

### 8个知识点
```javascript
concepts: [
  "struct_listing",        // 结构体定义 - 点击市场架构解锁
  "double_mapping",        // 双重映射 - 点击市场统计解锁
  "fund_distribution",     // 资金分配 - 点击资金分配可视化解锁
  "reentrancy_guard",      // 重入保护 - 点击安全机制解锁
  "list_function",         // 挂单功能 - 成功挂单时解锁
  "buy_function",          // 购买功能 - 成功购买时解锁
  "event_logging",         // 事件日志 - 成功购买时同时解锁
  "cancel_function"        // 取消功能 - 成功取消挂单时解锁
]
```

### 关键设计
- **Listing结构体**: 存储seller, nftAddress, tokenId, price, royaltyReceiver, royaltyPercent, isListed
- **双重映射**: `mapping(address => mapping(uint256 => Listing)) public listings` 通过NFT地址+TokenID快速定位
- **资金分配**: 市场费(2.5%) + 版税(5%) + 卖家实收(92.5%)，使用基点计算避免浮点数
- **重入保护**: buyNFT()使用nonReentrant修饰符，防止重入攻击
- **事件系统**: Listed/Purchase/Unlisted事件，前端可监听实现实时更新
- **就近原则**: 购买标签页内置mini-gallery，用户可在同一区块完成购买流程

### 特殊功能实现

#### 1. 市场架构可视化
```vue
<div class="architecture-section" @click="handleArchitectureClick">
  <h4>🏪 NFT市场架构（点击查看结构体）</h4>
  <div class="market-arch">
    <div class="arch-row">
      <div class="arch-box seller">
        <div class="box-icon">👤</div>
        <div class="box-label">Seller</div>
      </div>
      <div class="arch-arrow">→</div>
      <div class="arch-box marketplace">
        <div class="box-icon">🏪</div>
        <div class="box-label">Marketplace</div>
        <div class="lock-badge">🔒 ReentrancyGuard</div>
      </div>
      <div class="arch-arrow">→</div>
      <div class="arch-box buyer">
        <div class="box-icon">🛒</div>
        <div class="box-label">Buyer</div>
      </div>
    </div>
  </div>
</div>
```

#### 2. 资金分配可视化
```vue
<div class="distribution-section" @click="handleDistributionClick">
  <h4>💰 资金分配流程（点击查看）</h4>
  <div class="fund-flow">
    <div class="flow-start">
      <div class="flow-box buyer">
        <div class="flow-icon">🛒</div>
        <div class="flow-label">买家支付</div>
        <div class="flow-amount">{{ selectedPrice }} ETH</div>
      </div>
    </div>
    <div class="flow-branches">
      <div class="flow-branch">
        <div class="flow-box fee">
          <div class="flow-icon">🏪</div>
          <div class="flow-label">市场费</div>
          <div class="flow-amount">{{ feeAmount }} ETH</div>
        </div>
      </div>
      <div class="flow-branch">
        <div class="flow-box royalty">
          <div class="flow-icon">🎨</div>
          <div class="flow-label">版税</div>
          <div class="flow-amount">{{ royaltyAmount }} ETH</div>
        </div>
      </div>
      <div class="flow-branch">
        <div class="flow-box seller-amount">
          <div class="flow-icon">👤</div>
          <div class="flow-label">卖家实收</div>
          <div class="flow-amount">{{ sellerAmount }} ETH</div>
        </div>
      </div>
    </div>
  </div>
</div>
```

#### 3. 简化版NFT展示区域（就近原则优化）
```vue
<!-- 在购买标签页内添加 -->
<div v-if="activeListings.length > 0" class="mini-gallery">
  <h5>🖼️ 市场热推 NFT</h5>
  <div class="mini-nft-grid">
    <div
      v-for="item in activeListings.slice(0, 3)"
      :key="item.id"
      class="mini-nft-card"
      :class="{ 'selected': selectedListing?.id === item.id }"
      @click="selectedListing = item"
    >
      <div class="mini-nft-icon">{{ getNftIcon(item.tokenId) }}</div>
      <div class="mini-nft-info">
        <div class="mini-nft-title">Token #{{ item.tokenId }}</div>
        <div class="mini-nft-price">{{ item.price }} ETH</div>
      </div>
    </div>
  </div>
</div>
```

#### 4. 双重解锁提示（购买操作）
```javascript
// useDay26.js
const newUnlocks = []

if (!unlockedConcepts.includes('buy_function')) {
  hints.push('buy_function')
  newUnlocks.push('购买功能')
}
if (!unlockedConcepts.includes('event_logging')) {
  hints.push('event_logging')
  newUnlocks.push('事件日志')
}

if (newUnlocks.length > 0) {
  const unlockText = newUnlocks.join('、')
  showMessage(`✅ 购买成功！\n🎉 恭喜解锁：${unlockText}！👉 下一步引导`)
}
```

---

## Day 25 参考示例（AutomatedMarketMaker - 自动化做市商）

### 合约功能
- **AutomatedMarketMaker.sol**: AMM流动性池合约实现
  - addLiquidity() - 添加流动性，铸造LP代币
  - removeLiquidity() - 移除流动性，销毁LP代币并返还代币
  - swapAforB() - 用Token A交换Token B，收取0.3%手续费
  - swapBforA() - 用Token B交换Token A，收取0.3%手续费
  - getReserves() - 查询当前代币储备量
  - min() - 返回两个数中的较小值（内部函数）
  - sqrt() - 计算平方根（牛顿迭代法，内部函数）

### 核心交互
- **AMM架构可视化**: 双代币储备池 + 恒定乘积公式 x*y=k，点击解锁恒定乘积公式
- **流动性池状态面板**: 实时显示Token A/Token B储备和LP代币总供应，点击解锁流动性池机制
- **价格曲线可视化**: SVG绘制恒定乘积曲线，展示自动价格发现机制，点击解锁价格发现
- **三操作标签页**:
  - 添加流动性: 输入Token A和Token B数量，计算LP代币，解锁LP代币和平方根计算
  - 代币交换: 选择交换方向，输入数量，查看滑点影响，解锁交换机制和手续费结构
  - 移除流动性: 输入LP代币数量，计算可获得的Token A和Token B
- **滑点保护说明**: 展示最小接收量机制和交易回滚保护，点击解锁滑点保护
- **交易历史**: 记录添加流动性、代币交换、移除流动性操作

### 8个知识点
```javascript
concepts: [
  "constant_product_formula",    // 恒定乘积公式 - 点击架构图解锁
  "liquidity_pool",              // 流动性池 - 点击池状态面板解锁
  "lp_token",                    // LP代币 - 添加流动性时解锁
  "price_discovery",             // 价格发现 - 点击价格曲线解锁
  "swap_mechanism",              // 交换机制 - 代币交换时解锁
  "fee_structure",               // 手续费结构 - 代币交换时解锁
  "sqrt_calculation",            // 平方根计算 - 添加流动性时解锁
  "slippage_protection"          // 滑点保护 - 点击滑点保护说明解锁
]
```

### 关键设计
- **恒定乘积公式**: x * y = k，保持两种代币储备的乘积不变，实现自动定价
- **流动性池**: 双代币储备池，价格由储备比例决定，reserveA/reserveB = 价格
- **LP代币**: 流动性提供者获得LP代币作为份额凭证，首次添加使用sqrt(amountA * amountB)，后续按比例分配
- **价格发现**: 自动根据储备比例计算价格，无需订单簿，价格随交易自动调整
- **交换机制**: amountOut = (reserveOut * amountInWithFee) / (reserveIn + amountInWithFee)
- **手续费结构**: 0.3%手续费，通过 997/1000 计算，手续费留在池中分配给LP持有者
- **平方根计算**: 使用牛顿迭代法计算整数平方根，用于首次LP代币铸造
- **滑点保护**: minAmountOut参数防止大额滑点，不满足时交易回滚保护用户

### 特殊功能实现

#### 1. AMM架构可视化
```vue
<div class="architecture-section" @click="handleArchitectureClick">
  <h4>📊 AMM架构 - 点击了解恒定乘积公式</h4>
  <div class="amm-visual">
    <div class="pool-container">
      <div class="token-box token-a">
        <div class="token-icon">🔵</div>
        <div class="token-label">Token A</div>
        <div class="token-reserve">{{ reserveA.toFixed(2) }}</div>
      </div>
      <div class="pool-center">
        <div class="formula">x × y = k</div>
        <div class="k-value">k = {{ (reserveA * reserveB).toFixed(0) }}</div>
      </div>
      <div class="token-box token-b">
        <div class="token-icon">🟢</div>
        <div class="token-label">Token B</div>
        <div class="token-reserve">{{ reserveB.toFixed(2) }}</div>
      </div>
    </div>
  </div>
</div>
```

#### 2. 价格曲线可视化
```vue
<div class="price-curve-section" @click="handlePriceCurveClick">
  <h4>📈 价格曲线 - 点击了解自动价格发现</h4>
  <div class="curve-chart">
    <svg viewBox="0 0 300 150" class="curve-svg">
      <!-- 坐标轴 -->
      <line x1="30" y1="130" x2="280" y2="130" stroke="#666" stroke-width="1"/>
      <line x1="30" y1="130" x2="30" y2="20" stroke="#666" stroke-width="1"/>
      <!-- 价格曲线 -->
      <path :d="priceCurvePath" fill="none" stroke="#3b82f6" stroke-width="2"/>
      <!-- 当前点 -->
      <circle :cx="currentPoint.x" :cy="currentPoint.y" r="5" fill="#f59e0b"/>
    </svg>
  </div>
</div>
```

#### 3. 操作标签页
```vue
<div class="operation-tabs">
  <button
    v-for="tab in tabs"
    :key="tab.key"
    :class="['tab-btn', { active: activeTab === tab.key }]"
    @click="activeTab = tab.key"
  >
    {{ tab.icon }} {{ tab.label }}
  </button>
</div>

<!-- 添加流动性面板 -->
<div v-if="activeTab === 'addLiquidity'" class="operation-panel">
  <h4>💧 添加流动性</h4>
  <!-- 输入Token A和Token B数量 -->
  <div v-if="estimatedLP > 0" class="estimate">
    预计获得 LP代币: {{ estimatedLP.toFixed(2) }}
  </div>
  <button class="day-action-btn cyan" @click="handleAddLiquidity">
    💧 添加流动性
  </button>
</div>

<!-- 代币交换面板 -->
<div v-if="activeTab === 'swap'" class="operation-panel">
  <h4>🔄 代币交换</h4>
  <div class="swap-direction">
    <button :class="['direction-btn', { active: swapDirection === 'AtoB' }]"
            @click="swapDirection = 'AtoB'">🔵 A → 🟢 B</button>
    <button :class="['direction-btn', { active: swapDirection === 'BtoA' }]"
            @click="swapDirection = 'BtoA'">🟢 B → 🔵 A</button>
  </div>
  <!-- 滑点影响显示 -->
  <div class="preview-item">
    <span>价格影响:</span>
    <span :class="['impact', priceImpactClass]">{{ priceImpact.toFixed(2) }}%</span>
  </div>
  <button class="day-action-btn green" @click="handleSwap">🔄 交换</button>
</div>
```

#### 4. 滑点保护说明
```vue
<div class="slippage-section" @click="handleSlippageClick">
  <h4>🛡️ 滑点保护机制（点击查看）</h4>
  <div class="slippage-content">
    <p>什么是滑点？滑点是指交易执行价格与预期价格之间的差异。</p>
    <div class="code-block">
      <pre>require(amountOut >= minAmountOut, "Slippage too high");</pre>
    </div>
    <p>如果实际输出低于设定的最小值，交易将回滚保护用户。</p>
  </div>
</div>
```

### 布局设计要点

1. **信息块顺序**（优化后）:
   - AMM架构（点击解锁）→ 流动性池状态（点击解锁）→ 价格曲线（点击解锁）→ 操作标签页 → 滑点保护（点击解锁）→ 我的资产（只读）→ 交易历史（只读）

2. **核心流程连贯**:
   - 所有可点击解锁块放在前面
   - 只读信息放在最后，不打断流程
   - 符合"就近原则"，用户从上到下依次完成

3. **提示引导优化**:
   - 添加"向下滚动"引导，明确告知下一步操作位置
   - 避免用户在不同块之间跳跃

---

## Day 24 参考示例（EnhancedSimpleEscrow - 增强托管合约）

### 合约功能
- **EnhancedSimpleEscrow.sol**: 三方托管合约实现
  - deposit() - 买家存款到托管合约
  - confirmDelivery() - 买家确认收货，释放资金给卖家
  - raiseDispute() - 买家或卖家发起争议
  - resolveDispute() - 仲裁者裁决争议，分配资金
  - cancelAfterTimeout() - 超时后买家取消交易并取回资金
  - cancelMutual() - 双方协商取消交易
  - getTimeLeft() - 查询剩余超时时间

### 核心交互
- **三方架构可视化**: Buyer/Seller/Arbiter三方角色展示，点击解锁枚举与状态机
- **资金流转面板**: 实时显示Buyer→Escrow→Seller的资金流向，点击解锁immutable与权限控制
- **三角色切换系统**: 
  - Buyer: 存款、确认收货、发起争议、超时取消、协商取消
  - Seller: 发起争议、协商取消（等待买家确认后释放资金）
  - Arbiter: 裁决争议（资金给卖家或退买家）
- **状态流转图**: 展示AWAITING_PAYMENT→AWAITING_DELIVERY→COMPLETE/CANCELLED/DISPUTED的完整流程
- **超时倒计时**: 60秒演示超时机制，点击解锁区块时间戳
- **安全防护展示**: receive() + revert()拒绝直接ETH转账
- **事件日志**: 记录PaymentDeposited/DeliveryConfirmed/DisputeRaised/DisputeResolved/EscrowCancelled

### 6个知识点
```javascript
concepts: [
  "enum_state_machine",    // 枚举与状态机 - 点击架构图解锁
  "immutable_access",      // 不可变变量与权限控制 - 点击资金面板解锁
  "event_logging",         // 事件日志 - 成功存款时解锁
  "block_timestamp",       // 区块时间戳 - 点击倒计时区域解锁
  "call_transfer",         // call转账 - 确认收货时解锁
  "receive_revert"         // receive与revert - 点击安全防护区域解锁
]
```

### 关键设计
- **枚举状态机**: EscrowState枚举定义5种状态，每个函数检查当前状态防止非法操作
- **immutable变量**: buyer/seller/arbiter使用immutable修饰，构造函数设置后不可更改，节省gas
- **权限控制**: 每个函数使用require检查调用者身份，确保只有授权角色能执行
- **事件系统**: PaymentDeposited/DeliveryConfirmed/DisputeRaised/DisputeResolved/EscrowCancelled
- **区块时间戳**: block.timestamp用于计算超时，保护买家权益
- **call转账**: 使用call{value: amount}发送ETH，比transfer更灵活
- **receive防护**: receive()中使用revert()拒绝直接转账，强制通过deposit()
- **超时保护**: 买家在超时后可以取消交易并取回资金

### 特殊功能实现

#### 1. 三方架构可视化
```vue
<div class="architecture-section" @click="handleArchitectureClick">
  <h4>🏗️ 三方托管架构（点击查看枚举与状态机）</h4>
  <div class="buyer-seller-row">
    <div class="flow-box buyer">
      <div class="box-icon">👤</div>
      <div class="box-label">Buyer</div>
      <div class="box-sublabel">买家</div>
    </div>
    <div class="flow-box seller">
      <div class="box-icon">🏪</div>
      <div class="box-label">Seller</div>
      <div class="box-sublabel">卖家</div>
    </div>
  </div>
  <div class="arbiter-row">
    <div class="flow-box arbiter">
      <div class="box-icon">⚖️</div>
      <div class="box-label">Arbiter</div>
      <div class="box-sublabel">仲裁者</div>
    </div>
  </div>
</div>
```

#### 2. 资金流转面板
```vue
<div class="funds-section" @click="handleFundsClick">
  <h4>💰 资金状态（点击查看immutable与权限控制）</h4>
  <div class="funds-flow">
    <div class="fund-item">
      <span class="fund-label">Buyer钱包</span>
      <span class="fund-value">{{ funds.buyerWallet.toFixed(2) }} ETH</span>
    </div>
    <div class="fund-arrow" v-if="funds.escrowAmount > 0">↓</div>
    <div class="fund-item escrow" v-if="funds.escrowAmount > 0">
      <span class="fund-label">Escrow托管</span>
      <span class="fund-value">{{ funds.escrowAmount.toFixed(2) }} ETH</span>
    </div>
    <div class="fund-arrow" v-if="funds.escrowAmount > 0">↓</div>
    <div class="fund-item">
      <span class="fund-label">Seller钱包</span>
      <span class="fund-value">{{ funds.sellerWallet.toFixed(2) }} ETH</span>
    </div>
  </div>
</div>
```

#### 3. 超时倒计时
```vue
<div v-if="escrowState === 'AWAITING_DELIVERY'" class="countdown-section" @click="handleCountdownClick">
  <h4>⏱️ 超时倒计时（点击查看区块时间戳）</h4>
  <div class="countdown-display">
    <span class="time-left">{{ formattedTimeLeft }}</span>
  </div>
  <div class="progress-bar">
    <div class="progress-fill" :style="{ width: countdownProgress + '%' }"></div>
  </div>
  <p class="countdown-hint">超时后买家可以取消交易并取回资金</p>
</div>
```

#### 4. 安全防护展示
```vue
<div class="receive-section" @click="handleReceiveClick">
  <h4>🛡️ 安全防护 - 拒绝直接转账（点击查看）</h4>
  <div class="code-block">
    <pre>receive() external payable {
    revert("Direct payments not allowed");
}</pre>
  </div>
  <p class="receive-hint">合约拒绝直接ETH转账，必须通过deposit()函数存款</p>
</div>
```

#### 5. 三角色切换
```vue
<div class="role-switcher">
  <span class="role-label">🎭 当前身份：</span>
  <button
    v-for="role in roles"
    :key="role.key"
    :class="{ active: currentRole === role.key }"
    @click="handleSwitchRole(role.key)"
  >
    {{ role.icon }} {{ role.label }}
  </button>
</div>
```

#### 6. 状态流转图
```vue
<div class="state-flow-section">
  <h4>📈 当前状态: {{ stateLabels[escrowState] }}</h4>
  <div class="state-flow">
    <div
      v-for="(state, index) in stateFlow"
      :key="state.key"
      class="state-node"
      :class="{ active: escrowState === state.key, passed: isStatePassed(state.key) }"
    >
      {{ state.label }}
    </div>
  </div>
</div>
```

---

## Day 23 参考示例（SimpleLending - DeFi借贷平台）

### 合约功能
- **SimpleLending.sol**: DeFi借贷平台合约实现
  - deposit() - 存款ETH到资金池
  - withdraw() - 从资金池取款
  - depositCollateral() - 存入抵押品
  - withdrawCollateral() - 取出抵押品（需满足抵押率）
  - borrow() - 基于抵押品借款
  - repay() - 偿还借款本金和利息
  - getMaxBorrowAmount() - 获取最大可借金额
  - getCurrentDebt() - 获取当前债务（含利息）
  - getHealthFactor() - 获取健康因子

### 核心交互
- **合约架构可视化**: 展示用户→SimpleLending→资金池的流程，点击解锁重入锁
- **用户资产面板**: 紧凑展示钱包余额、存款、抵押、债务、健康因子
- **4个操作标签页**: 
  - 存款/取款: 存入/取出ETH到资金池
  - 抵押品: 存入/取出抵押品
  - 借款/还款: 申请借款/偿还债务，显示实时利息累积
  - 合约状态: 监控合约总流动性、利用率
- **健康因子可视化**: 🟢安全(>1.5) 🟡警告(1.0-1.5) 🔴危险(<1.0)
- **事件日志**: 记录所有操作（存款、取款、抵押、借款、还款）

### 8个知识点
```javascript
concepts: [
  "reentrancy_guard",           // 重入锁保护 - 点击架构图解锁
  "deposit_function",           // 存款功能 - 成功存款时解锁
  "collateral_mechanism",       // 抵押机制 - 存入抵押品时解锁
  "borrow_function",            // 借款功能 - 成功借款时解锁
  "interest_calculation",       // 利息计算 - 成功借款时同时解锁
  "collateral_factor",          // 抵押率 - 存入抵押品时同时解锁
  "repay_function",             // 还款功能 - 成功还款时解锁
  "checks_effects_interactions" // CEI安全模式 - 成功还款时同时解锁
]
```

### 关键设计
- **重入锁**: 使用 `bool private _locked` 和 `nonReentrant` 修饰符防止重入攻击
- **存款功能**: 用户存入ETH，合约记录depositBalance，可随时withdraw
- **抵押机制**: 抵押品与存款分离，用于计算借款额度（collateralFactor = 75%）
- **借款额度**: maxBorrow = collateralValue * collateralFactor / 10000
- **利息计算**: interest = principal * rate * time / (10000 * 365 * 24 * 60 * 60)
- **健康因子**: healthFactor = collateralValue / currentDebt，低于1.0有清算风险
- **还款机制**: 支持超额还款，多余金额退回钱包
- **CEI模式**: 所有函数遵循Checks-Effects-Interactions顺序

### 特殊功能实现

#### 1. 合约架构可视化
```vue
<div class="architecture-section" @click="handleArchitectureClick">
  <h4>📊 合约架构 - 点击了解重入锁保护</h4>
  <div class="arch-flow">
    <div class="flow-box user">
      <div class="box-icon">👤</div>
      <div class="box-label">用户</div>
    </div>
    <div class="flow-arrow">→</div>
    <div class="flow-box contract">
      <div class="box-icon">🏦</div>
      <div class="box-label">SimpleLending</div>
      <div class="lock-badge">🔒 重入锁保护</div>
    </div>
    <div class="flow-arrow">→</div>
    <div class="flow-box funds">
      <div class="box-icon">💰</div>
      <div class="box-label">资金池</div>
    </div>
  </div>
</div>
```

#### 2. 用户资产面板
```vue
<div class="assets-overview">
  <div class="asset-card">
    <div class="asset-label">💼 钱包余额</div>
    <div class="asset-value">{{ walletBalance.toFixed(4) }} ETH</div>
  </div>
  <div class="asset-card">
    <div class="asset-label">💰 存款余额</div>
    <div class="asset-value">{{ depositBalance.toFixed(4) }} ETH</div>
  </div>
  <div class="asset-card">
    <div class="asset-label">🏦 抵押余额</div>
    <div class="asset-value">{{ collateralBalance.toFixed(4) }} ETH</div>
  </div>
  <div class="asset-card" :class="healthStatus.status">
    <div class="asset-label">💸 当前债务</div>
    <div class="asset-value">{{ currentDebt.toFixed(6) }} ETH</div>
    <div class="health-indicator" v-if="borrowBalance > 0">
      {{ healthStatus.icon }} {{ healthStatus.label }} ({{ healthFactor.toFixed(2) }})
    </div>
  </div>
</div>
```

#### 3. 操作标签页
```vue
<div class="operation-tabs">
  <button
    v-for="tab in tabs"
    :key="tab.key"
    :class="{ active: activeTab === tab.key }"
    @click="activeTab = tab.key"
  >
    {{ tab.icon }} {{ tab.label }}
  </button>
</div>
```

#### 4. 健康因子计算
```javascript
const healthStatus = computed(() => {
  const hf = healthFactor.value
  if (hf >= 1.5) return { status: 'safe', label: '安全', icon: '🟢' }
  if (hf >= 1.0) return { status: 'warning', label: '警告', icon: '🟡' }
  return { status: 'danger', label: '危险', icon: '🔴' }
})
```

#### 5. 实时利息计算
```javascript
const accruedInterest = computed(() => {
  if (borrowBalance.value === 0) return 0
  const timeElapsed = (Date.now() - lastInterestAccrualTime.value) / 1000
  const interest = (borrowBalance.value * interestRateBasisPoints * timeElapsed) 
    / (10000 * 365 * 24 * 60 * 60)
  return interest
})
```

---

## Day 22 参考示例（FairChainLottery - 公平链上彩票）

### 合约功能
- **FairChainLottery.sol**: 去中心化彩票合约实现
  - startLottery() - 开启彩票（仅Owner）
  - enter() - 参与彩票（支付0.01 ETH）
  - endLottery() - 结束彩票并请求随机数（仅Owner）
  - fulfillRandomWords() - VRF回调，选出获胜者并发放奖金
  - getPlayers() - 获取所有参与者列表
  - getRecentWinner() - 获取最近获胜者
  - getLotteryState() - 获取当前彩票状态

### 核心交互
- **彩票架构可视化**: 展示FairChainLottery与MockVRFCoordinator的关系
- **双角色系统**: Owner（开启/结束彩票）和 Player（参与彩票）
- **彩票状态机**: CLOSED → OPEN → CALCULATING → CLOSED 的完整流转
- **参与者管理**: 查看参与者列表，了解动态数组存储
- **VRF随机数**: 模拟Chainlink VRF请求和回调过程
- **获胜者展示**: 显示获胜者地址和奖金金额

### 8个知识点
```javascript
concepts: [
  "lottery_state_enum",        // 彩票状态枚举 - 点击架构图解锁
  "ownable_contract",          // 所有权合约 - 切换到Owner角色解锁
  "entry_fee",                 // 参与费用 - 成功参与彩票时解锁
  "dynamic_array",             // 动态数组 - 查看参与者列表时解锁
  "mock_vrf",                  // Mock VRF - 结束彩票请求随机数时解锁
  "random_winner",             // 随机获胜者 - VRF回调选出获胜者时解锁
  "call_transfer",             // Call转账 - VRF回调时同时解锁
  "event_logging"              // 事件日志 - VRF回调时同时解锁
]
```

### 关键设计
- **状态枚举**: enum LotteryState { CLOSED, OPEN, CALCULATING } 管理彩票生命周期
- **Ownable模式**: 继承OpenZeppelin的Ownable，确保只有owner能执行敏感操作
- **参与费用**: require(msg.value >= i_entranceFee, "Not enough ETH") 验证支付
- **动态数组**: address[] private s_players 存储参与者，支持s_players.push()和s_players.length
- **Mock VRF**: 本地模拟VRFCoordinator，requestRandomWords返回requestId
- **随机数生成**: uint256 indexOfWinner = randomWords[0] % s_players.length 计算获胜者索引
- **奖金发放**: (bool success, ) = recentWinner.call{value: address(this).balance}("") 发送全部余额
- **事件系统**: event LotteryEnter, RequestedLotteryWinner, WinnerPicked 记录关键操作

### 特殊功能实现

#### 1. 双角色切换
```vue
<div class="role-switcher">
  <button
    :class="{ active: currentRole === 'owner' }"
    @click="toggleRole('owner')"
  >
    👑 Owner
  </button>
  <button
    :class="{ active: currentRole === 'player' }"
    @click="toggleRole('player')"
  >
    👤 Player
  </button>
</div>
```

#### 2. 彩票状态显示
```vue
<div class="lottery-state" :class="lotteryState.toLowerCase()">
  <span class="state-indicator"></span>
  <span class="state-text">{{ lotteryState }}</span>
</div>
```

#### 3. 参与者列表
```vue
<div class="players-list">
  <div v-for="(player, index) in players" :key="player" class="player-item">
    <span class="player-index">#{{ index + 1 }}</span>
    <span class="player-address">{{ formatAddress(player) }}</span>
  </div>
</div>
```

#### 4. 获胜者展示
```vue
<div v-if="recentWinner" class="winner-card" @click="handleWinnerClick">
  <div class="winner-icon">🏆</div>
  <div class="winner-info">
    <div class="winner-label">获胜者</div>
    <div class="winner-address">{{ formatAddress(recentWinner) }}</div>
  </div>
  <div class="winner-prize">{{ prizePool }} ETH</div>
</div>
```

---

## Day 21 参考示例（SimpleNFT - ERC721 NFT标准）

### 合约功能
- **SimpleNFT.sol**: ERC721标准NFT合约实现
  - mint(to, uri) - 铸造新NFT，分配唯一tokenId
  - balanceOf(owner) - 查询地址持有的NFT数量
  - ownerOf(tokenId) - 查询指定NFT的所有者
  - transferFrom(from, to, tokenId) - 转移NFT所有权
  - safeTransferFrom(from, to, tokenId) - 安全转移（检查接收方）
  - approve(to, tokenId) - 授权单个NFT的管理权限
  - getApproved(tokenId) - 查询NFT的授权地址
  - setApprovalForAll(operator, approved) - 授权/取消操作员权限
  - isApprovedForAll(owner, operator) - 查询操作员授权状态

### 核心交互
- **ERC721架构可视化**: 展示IERC721接口与SimpleNFT实现的关系，包含_owners、_balances、_tokenApprovals三个核心映射
- **铸造新NFT**: 输入接收地址和元数据URI，铸造唯一NFT
- **NFT画廊**: 以卡片形式展示所有已铸造的NFT，显示Token ID、所有者和授权状态
- **NFT操作区**: 选中NFT后可进行转移、授权、安全转移三种操作
- **所有权追踪**: 查询任意地址的NFT持有数量和具体代币列表
- **操作员授权**: 设置/取消其他地址管理全部NFT的权限

### 9个知识点
```javascript
concepts: [
  "ierc721_interface",         // ERC721标准接口 - 点击架构图解锁
  "mint_function",             // 铸造函数 - 成功铸造NFT时解锁
  "token_id_counter",          // 代币ID计数器 - 铸造成功后解锁
  "token_uri",                 // 代币元数据URI - 查看NFT详情时解锁
  "balance_of",                // 余额查询 - 查询地址余额时解锁
  "transfer_from",             // NFT转移 - 执行转移操作时解锁
  "safe_transfer",             // 安全转移 - 执行安全转移时解锁
  "approve_mechanism",         // 授权机制 - 执行授权操作时解锁
  "approval_for_all"           // 操作员授权 - 设置操作员时解锁
]
```

### 关键设计
- **唯一性保证**: 每个tokenId只能被铸造一次，使用Counters实现自增ID
- **所有权映射**: _owners[tokenId] = owner 记录每个NFT的当前所有者
- **余额追踪**: _balances[owner] 记录每个地址持有的NFT数量
- **授权管理**: _tokenApprovals[tokenId] 单代币授权，_operatorApprovals[owner][operator] 操作员授权
- **安全检查**: safeTransferFrom调用ERC721Holder的onERC721Received确保接收方支持NFT

### 特殊功能实现

#### 1. ERC721架构可视化
```vue
<div class="architecture-section" @click="handleArchitectureClick">
  <div class="arch-container">
    <div class="interface-box">
      <div class="box-icon">🔌</div>
      <div class="box-label">IERC721</div>
      <div class="box-sublabel">标准接口</div>
    </div>
    <div class="arrow">→</div>
    <div class="contract-box">
      <div class="box-icon">🎨</div>
      <div class="box-label">SimpleNFT</div>
      <div class="box-sublabel">合约实现</div>
    </div>
  </div>
  <div class="mappings-row">
    <div class="mapping-box">_owners: tokenId → address</div>
    <div class="mapping-box">_balances: address → count</div>
    <div class="mapping-box">_tokenApprovals: tokenId → address</div>
  </div>
</div>
```

#### 2. NFT画廊卡片
```vue
<div class="nft-gallery">
  <div
    v-for="nft in nfts"
    :key="nft.tokenId"
    class="nft-card"
    :class="{ 'selected': selectedTokenId === nft.tokenId }"
    @click="selectNFT(nft.tokenId)"
  >
    <div class="nft-icon">{{ getNftIcon(nft.tokenId) }}</div>
    <div class="nft-id">#{{ nft.tokenId }}</div>
    <div class="nft-owner">{{ nft.owner.slice(0, 6) }}...{{ nft.owner.slice(-4) }}</div>
    <button @click.stop="showNFTDetails(nft)">详情</button>
  </div>
</div>
```

#### 3. 操作标签页切换
```vue
<div class="operation-tabs">
  <button :class="{ active: activeTab === 'transfer' }" @click="activeTab = 'transfer'">转移</button>
  <button :class="{ active: activeTab === 'approve' }" @click="activeTab = 'approve'">授权</button>
  <button :class="{ active: activeTab === 'safeTransfer' }" @click="activeTab = 'safeTransfer'">安全转移</button>
</div>
```

#### 4. 随机地址生成
```javascript
const generateRandomAddress = () => {
  return '0x' + Array(40).fill(0).map(() => 
    '0123456789abcdef'[Math.floor(Math.random() * 16)]
  ).join('')
}
```

---

## Day 20 参考示例（ReentryAttack - 重入攻击与防护）

### 合约功能
- **GoldVault.sol**: 有漏洞的金库合约
  - deposit() - 存入ETH增加余额
  - vulnerableWithdraw() - 漏洞提款函数（先发送ETH后更新余额）
  - safeWithdraw() - 安全提款函数（先更新余额后发送ETH + 重入锁）
  - getBalance() - 查询合约余额
- **GoldThief.sol**: 攻击者合约
  - attack() - 发起重入攻击
  - receive() - 回退函数，接收ETH时自动触发并递归调用withdraw

### 核心交互
- **双角色系统**: 攻击者（存入ETH/发起攻击）和金库管理员（查看余额/监控状态）
- **攻击流程可视化**: 攻击者 → 调用withdraw → 发送ETH → receive回调 → 再次withdraw
- **漏洞/安全版本对比**: 直观展示两种提款函数的实现差异
- **递归攻击动画**: 模拟重入攻击的多次递归调用过程
- **合约余额监控**: 实时显示金库和攻击者的ETH余额变化

### 8个知识点
```javascript
concepts: [
  "reentrancy_attack",         // 重入攻击 - 点击攻击原理图解锁
  "fallback_receive",          // 回退函数 - 攻击漏洞版本时解锁
  "vulnerable_withdraw",       // 漏洞提款函数 - 攻击漏洞版本时解锁
  "deposit_function",          // 存款函数 - 存入ETH时解锁
  "checks_effects_interactions", // CEI模式 - 查看防护机制时解锁
  "reentrancy_guard",          // 重入锁 - 查看防护机制时解锁
  "contract_balance",          // 合约余额 - 切换到管理员查看余额时解锁
  "code_comparison"            // 代码对比 - 查看代码对比时解锁
]
```

### 关键设计
- **重入攻击原理**: 利用合约在发送ETH后、更新余额前的窗口期递归调用
- **CEI模式**: Checks（检查）→ Effects（更新状态）→ Interactions（外部调用）
- **重入锁实现**: 使用 _status 状态变量阻止函数重入
- **双版本对比**: 漏洞版本 vs 安全版本的代码并排展示

### 特殊功能实现

#### 1. 攻击流程可视化
```vue
<div class="attack-principle-section" @click="handlePrincipleClick">
  <div class="flow-container">
    <div class="attacker-box">
      <div class="box-icon">🥷</div>
      <div class="box-label">GoldThief</div>
      <div class="box-sublabel">攻击者合约</div>
    </div>
    <div class="flow-arrows">
      <div class="arrow-line">
        <span class="arrow-label">1. 调用withdraw</span>
        <span class="arrow">→</span>
      </div>
      <!-- ... 更多箭头 -->
    </div>
    <div class="vault-box">
      <div class="box-icon">🏦</div>
      <div class="box-label">GoldVault</div>
      <div class="box-sublabel">有漏洞的金库</div>
      <div class="vulnerability-badge">⚠️ 漏洞</div>
    </div>
  </div>
</div>
```

#### 2. 攻击动画实现
```javascript
const vulnerableWithdraw = (user, maxReentrancy = 5) => {
  isAttacking.value = true
  let count = 0
  
  const attack = () => {
    if (count < maxReentrancy && vaultBalance.value >= 1) {
      // 模拟递归调用
      vaultBalance.value -= 1
      userBalances.value[user] += 1
      count++
      
      setTimeout(() => {
        attack() // 递归调用
      }, 500)
    } else {
      isAttacking.value = false
    }
  }
  
  attack()
}
```

#### 3. 代码对比展示
```vue
<div class="code-comparison">
  <div class="code-panel vulnerable">
    <h4>🔴 漏洞版本</h4>
    <pre>// 先发送ETH
(bool sent, ) = msg.sender.call{value: amount}("");
// 后更新余额 - 攻击者已重入！
goldBalance[msg.sender] = 0;</pre>
  </div>
  <div class="code-panel safe">
    <h4>🟢 安全版本</h4>
    <pre>// 先更新余额
goldBalance[msg.sender] = 0;
// 后发送ETH - 攻击者无法重入
(bool sent, ) = msg.sender.call{value: amount}("");</pre>
  </div>
</div>
```

---

## Day 19 参考示例（SignThis - 签名验证与无Gas空投）

### 合约功能
- **SignThis.sol**: 签名验证合约
  - 组织者签名授权特定用户
  - ecrecover 恢复签名者地址
  - EIP-191 签名前缀验证
  - mapping 存储参与状态
  - 无Gas空投机制

### 核心交互
- **双角色系统**: Organizer（签名授权）和 Participant（参与活动）
- **签名流程可视化**: 组织者签名 → 用户参与 → 链上验证完整流程
- **R/S/V 组件分解**: 以太坊签名 65 字节的详细分解展示
- **用户地址切换**: 支持多个测试地址
- **参与者列表**: 展示 mapping 存储的参与状态

### 8个知识点
```javascript
concepts: [
  "ecdsa_signature",    // ECDSA签名 - 点击签名流程图解锁
  "keccak256_hash",     // Keccak256哈希 - 生成签名时解锁
  "signature_rsv",      // R/S/V组件 - 展开签名详情时解锁
  "eip191_prefix",      // EIP-191前缀 - 参与成功时解锁
  "ecrecover",          // ecrecover函数 - 参与成功时解锁
  "require_statement",  // require语句 - 参与成功时解锁
  "mapping_storage",    // mapping存储 - 查看参与者列表时解锁
  "msg_sender"          // msg.sender - 生成签名时解锁
]
```

### 关键设计
- **EIP-191 签名前缀**: `\x19Ethereum Signed Message:\n32` 是以太坊个人签名的标准
- **签名流程可视化**: 点击流程图解锁 ecdsa_signature
- **R/S/V 分解展示**: 展开签名详情时解锁 signature_rsv
- **无Gas空投说明**: 用户无需持有 ETH 即可参与活动

### 特殊功能实现

#### 1. 签名流程可视化
```vue
<div class="signature-flow-section" @click="handleFlowClick">
  <div class="flow-step">
    <div class="step-icon">📝</div>
    <div class="label">组织者签名</div>
  </div>
  <div class="arrow">→</div>
  <div class="flow-step">
    <div class="step-icon">👤</div>
    <div class="label">用户参与</div>
  </div>
  <div class="arrow">→</div>
  <div class="flow-step">
    <div class="step-icon">✅</div>
    <div class="label">链上验证</div>
  </div>
</div>
```

#### 2. R/S/V 组件分解
```vue
<div class="signature-details">
  <div class="detail-row">
    <span class="detail-label">R (32 bytes):</span>
    <span class="detail-value">{{ signatureR }}</span>
  </div>
  <div class="detail-row">
    <span class="detail-label">S (32 bytes):</span>
    <span class="detail-value">{{ signatureS }}</span>
  </div>
  <div class="detail-row">
    <span class="detail-label">V (1 byte):</span>
    <span class="detail-value">{{ signatureV }}</span>
  </div>
</div>
```

#### 3. 提示系统完善
```javascript
// 首次进入页面显示初始提示
onMounted(() => {
  if (unlockedConcepts.value.length === 0) {
    currentHint.value = '👆 欢迎来到 Day 19！点击签名流程图了解 ECDSA 签名！'
  }
})

// 切换角色时更新提示
const handleToggleRole = (role) => {
  if (role === 'organizer') {
    currentHint.value = '🏢 你现在是组织者身份！👉 点击签名流程图了解 ECDSA 签名！'
  } else {
    currentHint.value = '👤 你现在是参与者身份！👉 点击签名流程图了解 ECDSA 签名！'
  }
}
```

### 易遗漏配置检查清单（Day 19 专属）

- [ ] 在 `concepts.js` 中添加了 `day19ConceptDefinitions`（8个概念）
- [ ] 在 `getHint()` 函数中添加了 Day 19 的所有概念提示
- [ ] 在 `getDay19Hint()` 函数中定义了交互提示
- [ ] 在 `getDay19ExplanationHint()` 中定义了解释提示
- [ ] 在 `days.js` 中添加了 Day 19 配置（包含完整合约代码）
- [ ] 创建了 `useDay19.js` composable
- [ ] 创建了 `SignThis.vue` 组件
- [ ] 在 `DayContent.vue` 中注册了 Day 19 组件
- [ ] 在 `useCurrentDayRealtimeData.js` 中注册了 Day 19
- [ ] 在 `KnowledgePanel.vue` 中添加了 Day 19 支持
- [ ] 在 `Sidebar.vue` 中添加了 Day 19 概念定义支持
- [ ] 添加了 onMounted 钩子设置初始提示
- [ ] 切换角色时更新 currentHint
- [ ] 移除 KnowledgePanel 的 `v-if="unlockedConcepts.length > 0"` 条件
- [ ] 修改 `showUnlockArea` 支持 `customHint`

---

## Day 18 参考示例（OracleContract - 预言机与参数保险）

### 合约功能
- **CropInsurance.sol**: 农作物保险主合约
  - 双预言机集成：Weather Oracle + ETH/USD PriceFeed
  - 参数化赔付：降雨量 < 500mm 自动触发
  - 价格转换：USD 到 ETH 的精确计算（1e26 精度）
  - 冷却期机制：24小时内只能索赔一次
- **MockWeatherOracle.sol**: 模拟天气预言机
  - 随机降雨量生成（0-999mm）
  - 干旱检测功能

### 核心交互
- **双角色系统**: Farmer（购买保险/索赔）和 Admin（提取余额）
- **天气数据模拟**: 生成随机降雨量，检测干旱状态
- **ETH/USD价格面板**: 显示当前价格和保费计算
- **保险操作**: 购买保险（支付ETH）、申请赔付（触发条件）
- **冷却期演示**: 24小时限制 + 时间快进功能

### 8个知识点
```javascript
concepts: [
  "oracle_interface",      // Chainlink接口 - 点击架构图解锁
  "eth_usd_oracle",        // ETH/USD价格预言机 - 更新价格时解锁
  "random_generation",     // 伪随机数生成 - 更新天气时解锁
  "purchase_insurance",    // 购买保险 - 购买保险时解锁
  "price_conversion",      // 价格转换 - 购买保险时解锁
  "parametric_payout",     // 参数化赔付 - 成功索赔时解锁
  "cooldown_mechanism",    // 冷却期机制 - 点击了解冷却期解锁
  "contract_balance"       // 合约余额 - 管理员提取时解锁
]
```

### 关键设计
- **价格转换公式**: `(INSURANCE_PREMIUM_USD * 1e26) / ethPrice`
  - 1e26 = 1e18(wei精度) × 1e8(Chainlink精度)
- **双预言机架构可视化**: 天气预言机 → 保险合约 → 价格预言机
- **透明背景样式**: 所有区块使用透明背景，保持视觉一致性
- **消息提示位置**: 统一在页面底部弹出

### 特殊功能实现

#### 1. 双预言机架构图
```vue
<div class="oracle-flow">
  <div class="oracle-box weather">🌧️ Weather Oracle</div>
  <div class="arrow down">↓</div>
  <div class="main-contract-box">🌾 CropInsurance</div>
  <div class="arrow down">↓</div>
  <div class="oracle-box price">💰 ETH/USD PriceFeed</div>
</div>
```

#### 2. 价格转换表格
| 项目 | 数值 |
|------|------|
| 保费 (USD) | $10 |
| ETH/USD 价格 | $3000.00 |
| 保费 (ETH) | 0.0033 ETH |

#### 3. 冷却期计时器
```vue
<div class="cooldown-timer">
  ⏱️ 冷却期剩余: 23:45:12
  <button @click="fastForwardTime">⏩ 快进24小时</button>
</div>
```

---

## Day 11 参考示例（InheritanceDemo - 合约继承）

### 合约功能
- **Ownable.sol**: 基础所有权管理合约（父合约）
- **VaultMaster.sol**: 继承 Ownable 的资金保险库合约（子合约）

### 核心交互
- 身份切换（所有者/用户）
- 查看所有者、转移所有权
- 存入 ETH、提取 ETH（权限控制）
- 查询余额

### 8个知识点
```javascript
concepts: [
  "inheritance",           // 合约继承 - 查看所有者时解锁
  "constructor",           // 构造函数 - 查看所有者时解锁
  "import_statement",      // 导入语句 - 存入 ETH 时解锁
  "event_logging",         // 事件日志 - 存入 ETH 时解锁
  "private_visibility",    // 私有可见性 - 存入 ETH 时解锁
  "transfer_ownership",    // 所有权转移 - 转移所有权时解锁
  "indexed_parameter",     // 索引参数 - 转移所有权时解锁
  "onlyOwner_modifier"     // onlyOwner修饰符 - 用户尝试提取时解锁
]
```

### 关键设计
- **打破循环依赖**: constructor 和 private_visibility 在交互时自动解锁，而非依赖查看完整代码
- **权限体验**: 非所有者点击提取按钮也能解锁知识点，体验权限控制
- **按钮配色**: Yellow(存入)、Cyan(查询/提取/辅助)、Orange(转移所有权)

---

## Day 12/13 参考示例（ERC20 代币）

### 合约功能
- **Day 12 (SimpleERC20)**: 基础 ERC20 实现
- **Day 13 (MyToken)**: 带 virtual 关键字的 ERC20（可扩展）

### 核心交互
- 三角色系统（Deployer/Alice/Bob/Carol）
- 余额查询 (balanceOf)
- 转账 (transfer) - 重点展示内部调用 _transfer
- 授权 (approve)
- 查询授权 (allowance)
- 代转账 (transferFrom)

### Day 12 的 7 个知识点
```javascript
concepts: [
  "erc20_standard",       // ERC20 标准 - 点击代币信息解锁
  "mapping_nested",       // 嵌套映射 - 查询余额解锁
  "event",                // 事件日志 - 转账后解锁
  "transfer",             // 转账函数 - 执行转账解锁
  "approve",              // 授权函数 - 执行授权解锁
  "allowance",            // 授权额度 - 查询授权解锁
  "transferFrom"          // 代转账函数 - 执行代转账解锁
]
```

### Day 13 的 4 个知识点（聚焦差异化）
```javascript
concepts: [
  "constructor_mint",     // 构造函数铸造 - 页面加载自动解锁
  "zero_address_mint",    // 零地址铸造 - 点击代币信息/日志自动解锁
  "internal_function",    // internal 函数 - 首次转账后解锁
  "virtual_function"      // virtual 函数 - 点击查看代码解锁
]
```

### Day 13 特殊设计

#### 1. 自动解锁机制（避免循环依赖）
```javascript
// MyToken.vue
onMounted(() => {
  // 自动解锁 constructor_mint 和 zero_address_mint
  progressStore.unlockConcept(13, 'constructor_mint')
  progressStore.unlockConcept(13, 'zero_address_mint')
})
```

#### 2. 查看代码时解锁 virtual
```javascript
// MyToken.vue
const handleShowFullCode = () => {
  // 点击"查看完整代码"时解锁 virtual_function
  if (!unlockedConcepts.value.includes('virtual_function')) {
    progressStore.unlockConcept(13, 'virtual_function')
  }
  showFullCode.value = true
}
```

#### 3. 转账后解锁 internal
```javascript
// useDay13.js
const transfer = (to, amount) => {
    // ... 执行转账

    return {
        success: true,
        message: "✅ 转账成功！...",
        hints: ['internal_function'],  // ← 解锁 internal 函数
        nextStep: "👉 点击查看代码来学习 virtual 关键字！"
    }
}
```

#### 4. 代码高亮展示
```vue
<!-- 转账区块：高亮 _transfer 调用 -->
<div class="code-highlight">
  <span class="highlight-note">→ 内部调用</span>
  <code class="highlight-code">_transfer(msg.sender, _to, _value)</code>
</div>

<!-- 继承演示区：对比 virtual/override -->
<div class="inheritance-demo-block">
  <h4>🧬 继承演示区 - Virtual 的用途</h4>
  <div class="code-comparison">
    <!-- 父合约 vs 子合约 -->
  </div>
</div>
```

### 关键差异对比

| 特性 | Day 12 (SimpleERC20) | Day 13 (MyToken) |
|------|---------------------|------------------|
| 主题色 | 青色 (#06b6d4) | 紫色 (#a855f7) |
| 代币符号 | COM | WBT |
| _transfer | `internal` | `internal virtual` |
| 知识点数量 | 7 个 | 4 个（精炼） |
| 创新功能 | - | 继承演示区 |
| 事件日志 | 普通 Transfer | 包含构造函数 Mint |

### 易遗漏配置检查清单（Day 12/13 专属）

- [ ] 在 `concepts.js` 中添加了 `day12ConceptDefinitions` / `day13ConceptDefinitions`
- [ ] 在 `getHint()` 函数中添加了 Day 12/13 的所有概念提示
- [ ] 在 `getDay12Hint()` / `getDay13Hint()` 函数中定义了提示（或直接在 getHint 中）
- [ ] 在 `getDay12ExplanationHint()` / `getDay13ExplanationHint()` 中定义了解释
- [ ] 组件中导入了 `useProgressStore`
- [ ] 组件中使用 `progressStore.getDayProgress(12/13)` 获取进度
- [ ] 组件中正确传递 `customHint` 给 KnowledgePanel
- [ ] 组件中在操作成功后调用 `progressStore.unlockConcept(12/13, conceptKey)`
- [ ] Composable 中操作函数返回对象包含 `hints` 和 `nextStep` 字段
- [ ] Composable 中为写操作添加了 `logStore.addLog(12/13, ..., gasKey)`
- [ ] Composable 中导出了 `realtimeData` 计算属性
- [ ] 在 `useCurrentDayRealtimeData.js` 中注册了 Day 12/13

---

## Day 14 参考示例（SafeDeposit - 抽象合约、接口与工厂模式）

### 合约功能
- **IDepositBox (Interface)**: 定义存款盒标准接口
- **BaseDepositBox (Abstract)**: 抽象基础合约，实现通用功能
- **BasicDepositBox**: 基础版（仅继承）
- **PremiumDepositBox**: 高级版（增加 metadata 功能）
- **TimeLockedDepositBox**: 时间锁定版（增加时间锁）
- **VaultManager**: 工厂+管理器，创建和追踪存款盒

### 核心交互
- 三角色系统（Alice/Bob/Owner）
- 创建三种存款盒（Basic/Premium/TimeLocked）
- 存入/取出秘密
- 设置/获取元数据（Premium 专属）
- 查询剩余锁定时间（TimeLocked 专属）
- 转移所有权（两步骤：转移 + 完成转移）

### Day 14 的 10 个知识点
```javascript
concepts: [
  "interface_definition",   // 接口定义 - 点击合约架构图时解锁
  "abstract_contract",      // 抽象合约 - 创建任意存款盒时解锁
  "inheritance",            // 合约继承 - 创建Basic存款盒时解锁
  "override_keyword",       // 重写关键字 - 创建Premium存款盒时解锁
  "virtual_function",       // 虚函数 - 创建Premium存款盒时解锁
  "super_keyword",          // 父类调用 - TimeLocked取出秘密时解锁
  "modifier_combination",   // 修饰器组合 - TimeLocked取出秘密时解锁
  "factory_pattern",        // 工厂模式 - 创建第2个存款盒时解锁
  "metadata_storage",       // 元数据存储 - Premium设置metadata时解锁
  "time_lock"               // 时间锁定 - 创建TimeLocked存款盒时解锁
]
```

### Day 14 特殊设计
1. **合约架构可视化**: 左侧顶部显示 Interface → Abstract → Concrete 继承关系图
   - 点击架构图解锁 `interface_definition`
   - 悬停显示提示："👆 点击了解接口定义"
2. **工厂模式体验**: 创建第2个盒子时解锁 factory_pattern，VaultManager 统一管理
3. **所有权转移流程**: 模拟真实转移流程（转移 + 新所有者确认）
4. **时间锁定体验**: TimeLocked 盒子显示倒计时，锁定期间无法取出
5. **双提示系统**: 
   - Toast 显示操作结果和下一步引导
   - KnowledgePanel 显示知识点解释和代码示例

### 易遗漏配置检查清单（Day 14 专属）

- [ ] 在 `concepts.js` 中添加了 `day14ConceptDefinitions`
- [ ] 在 `getHint()` 函数中添加了 Day 14 的所有概念提示
- [ ] 在 `getDay14Hint()` 函数中定义了交互提示
- [ ] 在 `getDay14ExplanationHint()` 中定义了解释提示
- [ ] 合约架构图添加了 `@click="handleArchitectureClick"` 事件
- [ ] `handleArchitectureClick` 中调用 `unlockConcept('interface_definition')`
- [ ] 组件中正确传递 `customHint` 给 KnowledgePanel
- [ ] Composable 中操作函数返回对象包含 `hints` 和 `nextStep` 字段
- [ ] 使用全局 `boxCounter` 而非 `myBoxes.length` 判断工厂模式解锁
- [ ] 在 `useCurrentDayRealtimeData.js` 中注册了 Day 14

---

## Day 15 参考示例（GasEfficientVoting - Gas 优化技术）

### 合约功能
- **GasEfficientVoting**: 高效节能投票合约
- 使用位运算在一个 uint256 中存储 256 个提案的投票状态

### 核心交互
- 创建提案（设置名称和持续时间）
- 投票系统（位运算实现）
- 执行提案（时间戳验证）
- 存储可视化（256位展示）
- 位运算动画演示

### Day 15 的 9 个知识点
```javascript
concepts: [
  "compact_datatype",     // 紧凑数据类型 - 点击存储可视化时解锁
  "uint8_uint32",         // uint8/uint32 - 点击存储可视化时解锁
  "bytes32_string",       // bytes32 vs string - 创建第1个提案时解锁
  "storage_optimization", // 存储优化 - 创建第3个提案时解锁
  "bit_operation",        // 位运算 - 投票时解锁
  "mapping_storage",      // mapping 存储 - 查询提案详情时解锁
  "mask_check",           // 掩码检查 - 重复投票时解锁
  "timestamp_block",      // 时间戳验证 - 执行提案时解锁
  "event_logging"         // 事件日志 - 执行提案时解锁
]
```

### 关键设计决策

#### 1. 知识点数量优化（10 → 9）
**变更**: 将 gas_comparison 合并到 bit_operation

**原因**:
- 原计划 10 个知识点，包括独立的 gas_comparison
- 用户容易错过 gas_comparison（需要创建提案后再投票才能看到对比）
- 合并到 bit_operation 后，投票时同时了解位运算和 Gas 优势

#### 2. 存储优化提示机制
**实现**: 创建提案时显示进度提示

```javascript
if (proposalCounter.value === 1) {
    nextStep = "🎉 提案创建成功！👉 继续创建提案来解锁「存储优化」知识点！"
} else if (proposalCounter.value === 2) {
    nextStep = "📊 再创建 1 个提案即可解锁「存储优化」知识点！"
} else if (proposalCounter.value === 3 && !unlockedConcepts.includes('storage_optimization')) {
    hints.push('storage_optimization')
    nextStep = "🎉 解锁「存储优化」！👉 执行投票操作来学习位运算！"
}
```

#### 3. 位运算可视化
**实现**: 256位存储可视化 + 点击交互

```vue
<!-- 存储可视化区块 -->
<div class="storage-visualization" @click="handleStorageClick">
  <h4>💾 合约存储可视化</h4>
  <div class="storage-bits">
    <div
      v-for="(bit, index) in storageBits"
      :key="index"
      class="storage-bit"
      :class="{
        active: bit.active,
        'just-activated': bit.justActivated
      }"
    >
      {{ bit.value }}
    </div>
  </div>
  <p class="storage-hint">👆 点击了解 uint256 如何存储 256 个提案的投票状态</p>
</div>
```

### 易遗漏配置检查清单（Day 15 专属）

- [ ] 在 `concepts.js` 中添加了 `day15ConceptDefinitions`
- [ ] 在 `getHint()` 函数中添加了 Day 15 的所有概念提示
- [ ] 在 `getDay15Hint()` 函数中定义了交互提示
- [ ] 在 `getDay15ExplanationHint()` 中定义了解释提示
- [ ] 在 `gasEstimates` 中添加了 Day 15 的 Gas 估算（createProposal15, vote15, executeProposal15）
- [ ] 组件中定义了本地消息系统（message, isError, showMessage）
- [ ] 存储可视化区块添加了 `@click="handleStorageClick"` 事件
- [ ] `handleStorageClick` 中调用 `unlockConcept('compact_datatype')` 和 `unlockConcept('uint8_uint32')`
- [ ] 组件中正确传递 `customHint` 给 KnowledgePanel
- [ ] 组件中添加了 `single-column` 响应式布局类
- [ ] Composable 中操作函数返回对象包含 `hints` 和 `nextStep` 字段
- [ ] Composable 中为写操作添加了 `logStore.addLog(15, ..., gasKey)`
- [ ] Composable 中导出了 `realtimeData` 计算属性
- [ ] 在 `useCurrentDayRealtimeData.js` 中注册了 Day 15
- [ ] 在 `KnowledgePanel.vue` 中添加了 Day 15 支持（getDay15Hint, getDay15ExplanationHint）
- [ ] 在 `useConceptInteraction.js` 中添加了 Day 15 支持（day15ConceptDefinitions）
- [ ] 在 `Sidebar.vue` 中添加了 Day 15 概念定义支持（day15ConceptDefinitions）

---

## Day 16 参考示例（PluginStore - 插件存储系统）

### 合约功能
- **PluginStore**: 插件存储系统核心合约
- **WeaponPlugin**: 武器插件合约
- **AchievementPlugin**: 成就插件合约
- 支持动态插件注册与低级别调用

### 核心交互
- 玩家资料管理（设置名称和头像）
- 插件注册（weapon/achievement/custom）
- 插件调用演示（call/staticcall 双模式）
- ABI 编码可视化
- 地址同步机制

### Day 16 的 8 个知识点
```javascript
concepts: [
  "struct_definition",      // 结构体定义 - 点击合约架构时解锁
  "mapping_storage",        // 映射存储 - 设置玩家资料时解锁
  "plugin_registration",    // 插件注册 - 注册插件时解锁
  "low_level_call",         // 低级别调用 - 执行插件调用时解锁
  "abi_encoding",           // ABI 编码 - 查看 ABI 编码时解锁
  "staticcall",             // 静态调用 - 切换 staticcall 模式时解锁
  "dynamic_delegation",     // 动态委托 - 注册第2个插件时解锁
  "contract_interop"        // 合约互操作 - 执行插件调用时解锁
]
```

### 关键功能实现

#### 1. 动态 ABI 编码（useDay16.js）
```javascript
import { Interface, AbiCoder, getAddress } from 'ethers'

const encodeFunctionCall = (functionSignature, user, argument) => {
    // 规范化地址（处理 EIP-55 checksum）
    const normalizedUser = getAddress(user)
    
    // 动态判断参数类型
    const hasStringParam = functionSignature.includes('string')
    const paramTypes = hasStringParam ? ['address', 'string'] : ['address']
    const paramValues = hasStringParam ? [normalizedUser, argument || ''] : [normalizedUser]
    
    const iface = new Interface([`function ${functionSignature}`])
    const functionSelector = iface.getFunction(functionName).selector
    const encodedParams = abiCoder.encode(paramTypes, paramValues)
    
    return {
        selector: functionSelector,
        encodedParams,
        fullEncodedData: functionSelector + encodedParams.slice(2),
        breakdown: [...]  // 分解展示
    }
}
```

#### 2. 按钮颜色动态切换
```vue
<button @click="handleRunPlugin" 
        class="day-action-btn" 
        :class="callMode === 'call' ? 'purple' : 'cyan'">
  {{ callMode === 'call' ? '▶️ 执行调用' : '👁️ 静态调用' }}
</button>
```

#### 3. 地址同步机制
```javascript
// 注册插件后同步到调用用户
const handleRegisterResult = (result) => {
  if (result.success) {
    const registeredAddress = result.registeredAddress || newPluginAddress.value
    if (registeredAddress) {
      callUser.value = registeredAddress  // 同步到插件调用演示
    }
  }
}
```

### 技术要点

1. **ethers.js 地址校验**: 使用 `getAddress()` 规范化地址，避免 checksum 错误
2. **动态参数编码**: 根据函数签名自动判断参数类型（address only 或 address + string）
3. **CSS 变量问题**: 按钮颜色使用硬编码值（#06b6d4, #a855f7）而非 CSS 变量
4. **布局一致性**: 使用 `.input-row` 和 `.button-row` 保持与其他 Day 一致的布局

### 常见问题

**Q: ABI 编码失败（bad address checksum）**
A: 使用 `getAddress(user)` 规范化地址，自动计算正确的 EIP-55 checksum

**Q: 按钮颜色不显示**
A: 使用硬编码颜色值 `#06b6d4`（cyan）和 `#a855f7`（purple），而非 CSS 变量

**Q: 如何区分不同函数的参数？**
A: 根据函数签名动态判断：`functionSignature.includes('string')`

### 依赖安装
```bash
npm install ethers
```

### 易遗漏配置检查清单（Day 16 专属）

- [ ] 在 `concepts.js` 中添加了 `day16ConceptDefinitions`（8个概念）
- [ ] 在 `getHint()` 函数中添加了 Day 16 的所有概念提示
- [ ] 在 `days.js` 中添加了 Day 16 配置（包含完整合约代码）
- [ ] 安装了 `ethers` 依赖（`npm install ethers`）
- [ ] 创建了 `useDay16.js` composable
- [ ] 创建了 `PluginStore.vue` 组件
- [ ] 在 `DayContent.vue` 中注册了 Day 16 组件
- [ ] 在 `useCurrentDayRealtimeData.js` 中注册了 Day 16
- [ ] 在 `KnowledgePanel.vue` 中添加了 Day 16 支持
- [ ] 在 `Sidebar.vue` 中添加了 Day 16 概念定义支持
- [ ] 按钮样式使用硬编码颜色值（非 CSS 变量）
- [ ] ABI 编码函数处理地址 checksum（使用 getAddress）
- [ ] 注册插件后同步地址到 callUser

---

## Day 17 参考示例（UpgradeHub - 可升级合约）

### 合约功能
- **SubscriptionStorage (Proxy)**: 代理合约，持有数据和订阅状态
- **SubscriptionLogicV1**: 逻辑合约 V1，基础订阅功能
- **SubscriptionLogicV2**: 逻辑合约 V2，新增暂停功能
- 支持合约升级，数据持久化保持不变

### 核心交互
- 合约架构可视化（点击解锁代理模式）
- delegatecall 机制说明（点击解锁委托调用）
- 存储布局说明（点击解锁存储布局）
- 角色切换（Owner/User）
- 创建订阅计划（Owner）
- 升级到 V2（Owner，需至少2个计划）
- 订阅计划（User）
- 查询订阅状态（User）
- V2 暂停功能演示

### Day 17 的 8 个知识点
```javascript
concepts: [
    "proxy_pattern",        // 代理模式 - 点击架构图解锁
    "delegatecall",         // 委托调用 - 点击 delegatecall 说明解锁
    "storage_layout",       // 存储布局 - 点击存储布局说明解锁
    "upgrade_mechanism",    // 升级机制 - 升级到 V2 时解锁
    "logic_contract",       // 逻辑合约 - 升级到 V2 时解锁
    "fallback_function",    // 回退函数 - 执行订阅时解锁
    "data_persistence",     // 数据持久化 - 查询订阅状态时解锁
    "version_control"       // 版本控制 - 使用 V2 暂停功能时解锁
]
```

### 阶段式解锁流程
```
阶段1: 点击架构图 → proxy_pattern → 点击 delegatecall → delegatecall → 点击存储布局 → storage_layout
阶段2: 切换到 Owner → 创建计划（2个）→ 升级到 V2 → upgrade_mechanism + logic_contract
阶段3: 切换到 User → 订阅计划 → fallback_function
阶段4: 查询订阅状态 → data_persistence（验证升级后数据不变）
阶段5: 切换到 Owner → 暂停订阅 → version_control
```

### 双重提示格式（阶段1）
```javascript
// 代理模式
showMessage('✅ 已查看合约架构图！🎉 恭喜解锁：代理模式！代理合约持有数据，逻辑合约处理业务逻辑。👉 点击 delegatecall 说明按钮！')

// 委托调用
showMessage('✅ 已学习 delegatecall 机制！🎉 恭喜解锁：委托调用！这是实现可升级合约的核心技术。👉 点击存储布局说明按钮！')

// 存储布局
showMessage('✅ 已了解存储布局！🎉 恭喜解锁：存储布局！变量顺序决定了数据在存储中的位置，升级时必须保持一致。👉 切换到 Owner 身份创建计划！')
```

### 关键功能实现

#### 1. 升级机制（useDay17.js）
```javascript
const upgradeToV2 = () => {
    if (plans.value.length < 2) {
        return {
            success: false,
            message: '❌ 至少需要创建 2 个计划才能升级'
        }
    }
    
    isUpgraded.value = true
    currentVersion.value = 2
    
    const hints = []
    if (!unlockedConcepts.value.includes('upgrade_mechanism')) {
        hints.push('upgrade_mechanism')
    }
    if (!unlockedConcepts.value.includes('logic_contract')) {
        hints.push('logic_contract')
    }
    
    return {
        success: true,
        message: '🎉 合约已成功升级到 V2！',
        hints,
        nextStep: '👉 切换到 User 身份，订阅一个计划来体验升级后的功能！'
    }
}
```

#### 2. 数据持久化验证
```javascript
const checkSubscriptionStatus = () => {
    const sub = subscription.value
    return {
        planId: sub.planId,
        expiry: sub.expiry,
        paused: sub.paused,  // V2 新增字段
        // 升级后数据保持不变
    }
}
```

#### 3. KnowledgePanel Props（重要！）
```vue
<KnowledgePanel
  :current-day="17"
  :unlocked-concepts="unlockedConcepts"
  :progress-percentage="progressPercentage"
  :full-code="fullCode"
  :custom-hint="currentHint"
  @show-full-code="showFullCode = true"
/>
```

### 样式特点
- 使用 Day 14 风格（浅色主题，CSS 变量如 `--bg-surface`, `--text-primary`）
- 角色切换按钮内嵌在交互区域（架构图下方、计划管理上方）
- 消息提示从底部弹出（`bottom: 80px`）

### 技术要点

1. **提示系统规范**: 阶段1的三个概念必须使用完整的双重提示格式
2. **按钮颜色**: 查询状态按钮需要添加颜色类（如 `blue`）
3. **角色切换布局**: 内嵌式布局而非固定浮动
4. **Props 命名**: 使用 `:current-day` 而非 `:day`

### 常见问题

**Q: KnowledgePanel 不显示**
A: 检查是否传递了 `:unlocked-concepts` 和 `:progress-percentage` props

**Q: 阶段1提示不完整**
A: 确保 showMessage() 使用完整格式：操作确认 + 解锁 + 说明 + 引导

**Q: 查询状态按钮无色**
A: 添加颜色类如 `class="day-action-btn blue small"`

---

*文档版本：20260324 (Day 23 已添加)*
