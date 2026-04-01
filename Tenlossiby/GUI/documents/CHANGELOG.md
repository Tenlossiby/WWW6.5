# 开发更新日志

> 本文档按时间顺序记录每个 Day 的开发日志、经验教训和问题修复记录。

---

## 20260327 - Day 30 开发完成

### 新增内容
- **Day 30 (MiniDex)**: 迷你DEX - 自动化做市商/流动性池/代币交换/LP代币
- **10 个知识点**: pair_factory, create_pair, token_sorting, liquidity_pool, add_liquidity, remove_liquidity, swap_tokens, lp_token, price_calculation, reserves_tracking
- **DEX架构可视化**: 工厂合约→交易对→流动性池完整架构，点击解锁工厂合约概念
- **数学原理面板**: 恒定乘积公式(x×y=k) + 价格计算 + 流动性比例，顺序点击解锁3个概念
- **工厂面板**: 选择代币创建交易对，展示CREATE2地址生成和代币地址排序
- **交易对选择器**: 显示所有已创建交易对，展示Pair地址到储备金的映射关系
- **池子状态面板**: 显示储备金、LP代币总量、当前价格、用户LP份额和余额
- **流动性面板**: 添加/移除流动性双标签页，显示比例提示和预计获得LP代币
- **交换面板**: 支持Token0↔Token1双向交换，显示价格影响和滑点保护

### 技术要点

1. **工厂合约模式**: 使用工厂合约创建交易对，确保地址确定性和代码复用
2. **代币地址排序**: 按地址大小排序代币，确保交易对地址一致性
3. **恒定乘积公式**: x × y = k，保持流动性池的恒定乘积不变
4. **价格计算**: 当前价格 = reserve1 / reserve0，基于储备金比例
5. **LP代币机制**: 流动性提供者获得LP代币，代表其在池中的份额
6. **添加流动性**: 首次添加获得√(amount0×amount1) LP代币，后续按比例获得
7. **移除流动性**: 按LP代币比例取回储备金，销毁LP代币
8. **代币交换**: 输入代币按恒定乘积公式计算输出，收取0.3%手续费
9. **价格影响**: 大额交易对价格的影响，滑点保护机制
10. **储备金追踪**: 实时更新储备金，确保价格计算准确

### 开发经验总结

1. **Vue 3 Composable 响应式传递（重大经验教训！）**:
   - `toRefs()` 会把所有属性都转换成 ref，包括函数
   - 直接传递 `toRefs()` 解构的 ref 到子组件可能解包失败
   - **解决方案**: 分离 ref/computed 和函数的解构，ref 包装成新的 `computed()` 传递给子组件
   - 函数永远不要使用 `toRefs()` 包裹

2. **组件化设计**:
   - 将复杂DEX拆分为多个子组件：FactoryPanel, PairSelector, PoolStatus, LiquidityPanel, SwapPanel
   - 父组件 MiniDex 协调状态，子组件专注单一职责
   - 使用 v-model 和事件实现父子组件通信

3. **事件命名规范**:
   - v-model 使用 kebab-case: `update:add-amount0`
   - 自定义事件使用 camelCase: `@add-liquidity`
   - 确保父子组件事件名称一致

4. **响应式调试技巧**:
   - 使用 `watch()` 监听关键值变化，console.log 输出
   - 在父组件和子组件都添加调试日志，定位问题
   - 检查 props 是否正确传递，子组件是否正确接收

### 修复问题

1. **LP代币显示为0（重大bug）**: 
   - 原因：`toRefs()` 解构的 ref 直接传递给子组件，解包失败
   - 解决：创建新的 `computed(() => calculatedLPTokens.value)` 传递给子组件

2. **数学原理面板点击报错**:
   - 原因：`toRefs()` 把函数也转换成了 ref，调用时需要 `.value`
   - 解决：函数直接解构，不使用 `toRefs()`

3. **流动性面板消失**:
   - 原因：函数被 `toRefs()` 包裹后变成 ref，调用方式错误导致组件异常
   - 解决：分离函数和 ref 的解构

4. **事件不触发**:
   - 原因：事件名称不匹配，父组件用 kebab-case，子组件 emit 用 camelCase
   - 解决：统一使用 kebab-case 事件名

---

## 20260326 - Day 29 开发完成

### 新增内容
- **Day 29 (SimpleStablecoin)**: 简单稳定币 - 超额抵押/价格预言机/清算机制
- **10 个知识点**: over_collateralization, collateral_ratio, price_oracle, health_factor, decimal_conversion, deposit_collateral, mint_stablecoin, burn_stablecoin, withdraw_collateral, liquidation
- **稳定币系统架构可视化**: 用户→抵押品→稳定币铸造流程，点击解锁超额抵押机制
- **数学原理面板**: 抵押率计算(150%) + 价格预言机 + 健康因子 + 小数位转换，顺序点击解锁4个概念
- **预言机面板**: 显示Chainlink价格预言机数据，支持自定义价格更新，触发清算演示
- **资产面板**: 显示用户抵押品、债务、SUSD余额、健康因子，安全状态可视化
- **四操作标签页**: 存入抵押品/铸造SUSD/销毁SUSD/提取抵押品，完整DeFi借贷流程
- **清算区**: 显示可清算头寸列表，执行清算获得5%奖励
- **系统统计**: 总抵押品、总供应量、系统抵押率实时显示
- **事件日志**: 记录所有操作和事件，便于追踪

### 技术要点

1. **超额抵押机制**: 150%抵押率，每发行1美元稳定币需要1.5美元ETH抵押
2. **抵押率计算**: 抵押品价值/债务价值×100%，决定最大可铸造金额
3. **价格预言机**: Chainlink提供ETH/USD价格，8位小数转换为18位小数
4. **健康因子**: 衡量头寸安全性，低于150%可被清算
5. **小数位转换**: 8位→18位小数转换，乘以1e10进行精度统一
6. **存入抵押品**: 用户存入ETH作为抵押，获得铸造额度
7. **铸造稳定币**: 根据抵押品价值按抵押率铸造SUSD，债务增加
8. **销毁稳定币**: 销毁SUSD减少债务，提高健康因子
9. **提取抵押品**: 在满足抵押率前提下提取ETH，增加资金灵活性
10. **清算机制**: 健康因子低于150%时可被清算，清算人获得5%奖励

### 开发经验总结

1. **单位统一至关重要**:
   - ETH价格是8位小数，合约使用18位小数，需要乘以1e10转换
   - SUSD是18位小数，计算时需要统一单位
   - 修复了maxMintable计算错误，确保铸造逻辑正确

2. **顺序解锁机制**:
   - 数学原理面板采用顺序解锁：抵押率→价格预言机→健康因子→小数位转换
   - 提示文本与解锁逻辑保持一致，引导用户逐步学习

3. **实时数据同步**:
   - 使用logStore.getDayGasUsage()等方法从store获取数据
   - 避免直接从本地状态计算，确保Sidebar和组件数据同步

4. **FullCodeModal正确使用**:
   - 使用:show prop而不是v-if控制显示
   - 避免组件未挂载时无法接收事件的问题

5. **按钮样式统一**:
   - 使用全局样式中的blue/green/red/orange等颜色类
   - 避免使用primary/danger/warning等未定义的类名

### 修复问题

1. **抵押品不足提示错误**: maxMintable计算未乘1e18，导致单位不统一，已修复
2. **提取抵押品验证错误**: requiredValue计算未除1e18，已修复
3. **FullCodeModal无法点击**: 使用v-if导致组件未挂载，改为:show prop
4. **按钮颜色不显示**: 使用primary/danger/warning等未定义类名，改为blue/green/red/orange
5. **操作日志不更新**: logStore.addLog参数格式错误，改为4个独立参数
6. **实时数据不显示**: realtimeData从本地状态计算，改为从logStore获取

---

## 20260326 - Day 28 开发完成

### 新增内容
- **Day 28 (DecentralizedGovernance)**: 去中心化治理 - DAO治理/提案/投票/执行
- **9 个知识点**: token_governance, timelock_mechanism, quorum_threshold, proposal_state_machine, proposal_struct, voting_function, finalize_function, low_level_call, reentrancy_guard
- **DAO治理架构可视化**: TokenHolder→Governance→Treasury治理流程，点击解锁代币治理模式
- **治理参数面板**: 时间锁机制(2天) + 法定人数(10%)，顺序点击解锁两个概念
- **提案状态流转图**: Pending→Active→Succeeded→Queued→Executed完整状态机，点击解锁
- **三角色切换**: TokenHolder(投票)/Proposer(创建提案)/Executor(最终确定和执行)
- **时间控制功能**: 快进1天/3天/5天，演示投票期和时间锁机制
- **提案列表**: 展示所有提案状态，支持点击选择
- **随机地址生成**: 创建提案时支持随机生成目标合约地址

### 技术要点

1. **代币治理模式**: 1代币=1票，代币持有量决定投票权，实现去中心化决策
2. **时间锁机制**: 提案通过后等待2天才能执行，给用户审查时间
3. **法定人数**: 需要至少10%的总代币供应量参与投票，防止少数人操纵
4. **提案状态机**: Pending→Active→Succeeded/Defeated→Queued→Executed完整生命周期
5. **提案结构体**: 存储提案ID、描述、投票数据、执行信息、时间锁等
6. **投票功能**: 代币持有者在投票期内投票，每个地址只能投一次
7. **最终确定**: 投票结束后检查法定人数和多数决，通过后进入时间锁
8. **低级别调用**: 使用call执行提案中的操作，执行成功后退还押金
9. **重入保护**: 使用nonReentrant修饰符防止重入攻击

### 开发经验总结

1. **顺序解锁机制**:
   - 治理参数面板采用顺序解锁：第一次点击解锁时间锁，第二次点击解锁法定人数
   - 提示文本与解锁逻辑保持一致，避免用户困惑

2. **角色切换与操作整合**:
   - 将角色切换和三个操作区整合到一个区块内
   - 用户切换角色后立即看到对应操作区，无需滚动查找

3. **提示系统完善**:
   - 所有可点击区块添加小弹窗提示和交互提示块更新
   - 提案状态机解锁后明确提示切换到TokenHolder角色开始投票
   - 治理参数面板顺序解锁时更新提示引导用户再次点击

4. **用户体验优化**:
   - 时间控制区移到提案列表上方，作为辅助工具在需要时使用
   - 目标合约地址添加随机生成按钮，方便测试
   - 删除组件内重复的事件日志区块，使用Sidebar统一显示

### 修复问题

1. **提案状态机提示缺失**: 解锁后未更新currentHint，已修复
2. **治理参数同时解锁**: 改为顺序解锁，符合设计方案
3. **事件日志重复显示**: 删除组件内事件日志区块，统一在Sidebar显示

---

## 20260326 - Day 27 开发完成

### 新增内容
- **Day 27 (YieldFarming)**: 收益耕作 - DeFi质押/奖励计算/紧急提取
- **8 个知识点**: reward_debt_pattern, staking_token_decimals, time_weighted_calculation, reentrancy_guard, stake_function, unstake_function, claim_rewards, emergency_withdraw
- **收益耕作架构可视化**: 用户→质押池→奖励分配流程，点击解锁奖励债务模式
- **质押池状态面板**: 总质押量/奖励速率/用户质押份额，点击解锁代币精度处理
- **奖励计算可视化**: 展示奖励债务模式的计算流程，点击解锁时间加权计算
- **安全机制说明**: ReentrancyGuard + 紧急提取功能，点击解锁重入保护
- **三操作标签页**: 质押/提取/领取奖励，提取标签页支持紧急提取
- **用户资产面板**: 显示质押余额、待领取奖励、累计奖励

### 技术要点

1. **奖励债务模式**: 使用rewardDebt记录用户已结算奖励，避免重复计算
2. **代币精度处理**: 使用1e18精度处理质押代币，确保计算精确
3. **时间加权计算**: 基于区块时间戳计算奖励，(当前时间 - 最后更新时间) × 质押量 × 奖励速率
4. **重入保护**: stake/unstake/claimRewards使用nonReentrant修饰符
5. **质押功能**: 用户质押代币进入池子，获得LP份额
6. **提取功能**: 正常提取和紧急提取两种模式，紧急提取放弃未领取奖励
7. **领取奖励**: 根据质押量和时间计算奖励，使用奖励债务模式防止重入
8. **紧急提取**: 紧急情况下立即取回质押代币，但放弃所有待领取奖励

### 开发经验总结

1. **奖励计算精确性**:
   - 使用BigInt或字符串处理大数计算，避免JavaScript精度问题
   - 奖励债务模式确保用户只能领取新增奖励，防止重复领取

2. **提示系统完善**:
   - 4个可点击区块添加小弹窗提示
   - 3个操作标签页添加解锁提示
   - 紧急提取功能添加风险提示

3. **样式统一**:
   - 信息块使用半透明渐变底色
   - 不同区块使用不同颜色主题区分
   - 日间模式使用浅色底黑色字

4. **代码规范**:
   - 使用day-common.css全局样式系统
   - 所有颜色使用CSS变量，支持日间/夜间模式

---

## 20260325 - Day 26 开发完成

### 新增内容
- **Day 26 (NFTMarketplace)**: NFT 市场 - 挂单/购买/取消/版税/市场费
- **8 个知识点**: struct_listing, double_mapping, fund_distribution, reentrancy_guard, list_function, buy_function, event_logging, cancel_function
- **市场架构可视化**: Seller→Marketplace→Buyer三方关系，点击解锁Listing结构体
- **市场统计面板**: 活跃挂单数/总交易量/市场手续费，点击解锁双重映射
- **资金分配可视化**: 买家支付→市场费/版税/卖家实收流向，点击解锁资金分配
- **安全机制说明**: ReentrancyGuard + receive() revert，点击解锁重入保护
- **三操作标签页**: 挂单/购买/取消，购买标签页内置简化版NFT展示区域
- **NFT画廊**: 展示所有活跃挂单，支持点击选择和购买
- **交易历史**: 记录挂单/购买/取消操作

### 技术要点

1. **结构体定义**: Listing结构体存储卖家、NFT地址、TokenID、价格、版税等信息
2. **双重映射**: `mapping(address => mapping(uint256 => Listing))` 通过NFT地址+TokenID定位挂单
3. **资金分配**: 买家支付ETH自动分配：市场费(2.5%) + 版税(5%) + 卖家实收(92.5%)
4. **重入保护**: buyNFT()使用nonReentrant修饰符，receive()使用revert()拒绝直接转账
5. **挂单功能**: 卖家设置价格、版税接收地址、版税比例，NFT上架出售
6. **购买功能**: 买家支付ETH，NFT转移，资金自动分配给各方
7. **事件日志**: Listed/Purchase/Unlisted事件记录，前端可监听实现实时更新
8. **取消功能**: 卖家可随时取消自己的挂单，NFT下架

### 开发经验总结

1. **提示系统完善**:
   - 4个可点击区块添加小弹窗提示，符合双重提示规范
   - 3个操作的小弹窗添加解锁提示，首次操作显示"🎉 恭喜解锁"
   - 购买操作支持双重解锁提示（购买功能 + 事件日志）

2. **就近原则优化**:
   - 在购买标签页添加简化版NFT展示区域（前3个NFT卡片）
   - 用户可在购买标签页内完成整个购买流程，无需跳到下方画廊
   - 块5内部形成完整的购买交互闭环

3. **样式统一**:
   - 信息块使用半透明渐变底色（参考Day 21-22风格）
   - 不同区块使用不同颜色主题（蓝/紫/绿/红/灰）
   - 日间模式使用浅色底黑色字，拒绝黑底白字

4. **代码规范**:
   - 移除"🎮 交互操作"标题及蓝线
   - 所有颜色使用CSS变量，支持日间/夜间模式
   - 使用day-common.css全局样式系统

### 修复问题

1. **缺少小弹窗**: 4个点击解锁区块添加showMessage调用
2. **解锁提示不完整**: 挂单/购买/取消操作完善解锁提示格式
3. **购买流程被打断**: 在购买标签页添加mini-gallery简化版NFT展示
4. **信息块样式**: 添加半透明渐变底色，统一日间模式样式

---

## 20260325 - Day 25 开发完成

### 新增内容
- **Day 25 (AutomatedMarketMaker)**: 自动化做市商 - 流动性池/代币交换/LP代币
- **8 个知识点**: constant_product_formula, liquidity_pool, lp_token, price_discovery, swap_mechanism, fee_structure, sqrt_calculation, slippage_protection
- **AMM架构可视化**: 双代币储备池 + 恒定乘积公式 x*y=k，点击解锁恒定乘积公式
- **流动性池状态面板**: 实时显示Token A/Token B储备和LP代币总供应，点击解锁流动性池机制
- **价格曲线可视化**: SVG绘制恒定乘积曲线，展示自动价格发现机制
- **三操作标签页**: 添加流动性/代币交换/移除流动性
- **实时计算**: LP代币铸造量、交换输出量、滑点影响实时计算
- **滑点保护说明**: 展示最小接收量机制和交易回滚保护

### 技术要点

1. **恒定乘积公式**: x * y = k，保持两种代币储备的乘积不变，实现自动定价
2. **流动性池**: 双代币储备池，提供交易流动性，价格由储备比例决定
3. **LP代币**: 流动性提供者获得LP代币作为份额凭证，可按比例赎回
4. **价格发现**: 自动根据储备比例计算价格，无需订单簿
5. **交换机制**: 使用公式 amountOut = (reserveOut * amountInWithFee) / (reserveIn + amountInWithFee)
6. **手续费结构**: 0.3%手续费，通过 997/1000 计算，分配给流动性提供者
7. **平方根计算**: 首次添加流动性时使用 sqrt(amountA * amountB) 计算LP代币数量
8. **滑点保护**: minAmountOut参数防止大额滑点，不满足时交易回滚

### 开发经验总结

1. **布局优化**:
   - 初始布局中"我的资产"块打断了核心流程
   - 调整后顺序：架构 → 池状态 → 价格曲线 → 操作标签页 → 滑点保护 → 我的资产 → 交易历史
   - 只读信息移到最后，不打断核心解锁流程

2. **提示系统改进**:
   - 添加"向下滚动"引导，明确告知用户下一步操作位置
   - 所有提示遵循"就近原则"，减少页面跳跃

3. **样式修复**:
   - 修复选中tab和按钮的白色文字看不清问题
   - 使用更深的渐变色背景和阴影提高对比度
   - 遵循Day 22-23的半透明渐变浅色风格

4. **交互反馈完善**:
   - 添加已解锁概念的反馈提示
   - 移除流动性后引导查看滑点保护说明

### 修复问题

1. **按钮点击无反应**: 修复FullCodeModal使用v-if导致的问题，改为:show属性
2. **缺少底色**: 操作面板和标签页添加半透明渐变背景
3. **文字看不清**: 选中tab和按钮使用更深的渐变色(#2563eb/#1d4ed8)
4. **布局不合理**: 调整信息块顺序，核心流程连贯

---

## 20260324 - Day 24 开发完成

### 新增内容
- **Day 24 (EnhancedSimpleEscrow)**: 增强托管合约 - 三方托管/超时取消/争议仲裁
- **6 个知识点**: enum_state_machine, immutable_access, event_logging, block_timestamp, call_transfer, receive_revert
- **三方架构可视化**: Buyer/Seller/Arbiter三方角色，点击解锁枚举与状态机
- **资金流转面板**: 实时显示Buyer→Escrow→Seller的资金流向，点击解锁immutable与权限控制
- **三角色切换系统**: Buyer(存款/确认/取消)/Seller(发货/争议)/Arbiter(裁决)
- **超时倒计时**: 60秒演示超时机制，点击解锁区块时间戳
- **争议仲裁流程**: 发起争议→仲裁者裁决→资金分配
- **安全防护展示**: receive() + revert()拒绝直接转账
- **事件日志**: 记录PaymentDeposited/DeliveryConfirmed/DisputeRaised等事件

### 技术要点

1. **枚举状态机**: 使用EscrowState枚举定义5种状态(AWAITING_PAYMENT/AWAITING_DELIVERY/COMPLETE/DISPUTED/CANCELLED)
2. **immutable变量**: buyer/seller/arbiter使用immutable修饰，构造函数设置后不可更改
3. **权限控制**: 每个函数使用require检查调用者身份，确保只有授权角色能执行
4. **事件日志**: PaymentDeposited/DeliveryConfirmed/DisputeRaised/DisputeResolved/EscrowCancelled
5. **区块时间戳**: 使用block.timestamp计算超时，保护买家权益
6. **call转账**: 使用call{value: amount}发送ETH给卖家，比transfer更灵活
7. **receive防护**: receive()函数中使用revert()拒绝直接ETH转账，强制通过deposit()
8. **超时保护**: 买家在超时后可以取消交易并取回资金

### 开发经验总结

1. **提示系统优化**:
   - 所有nextStep引导都包含明确的按钮名称（如"👉 点击「💰 存款 / Deposit」按钮"）
   - 遵循《提示系统设计规范》，不怕重复，就怕初学者不知道怎么操作
   - 双重提示：Toast(3秒) + KnowledgePanel(持久)

2. **布局规范遵循**:
   - 使用标准双栏布局（左栏交互 + 右栏知识面板）
   - 根元素类名：day-24-content day-content
   - 右栏容器始终渲染，KnowledgePanel条件渲染
   - FullCodeModal使用:show="showFullCode"而非v-if

3. **知识点解锁时机**:
   - enum_state_machine: 点击架构图解锁
   - immutable_access: 点击资金面板解锁
   - event_logging: 成功存款时解锁
   - block_timestamp: 点击倒计时区域解锁
   - call_transfer: 确认收货时解锁
   - receive_revert: 点击安全防护区域或查看完整代码时解锁

4. **交互设计**:
   - 三角色切换清晰展示各自功能
   - 状态流转图实时显示当前状态
   - 超时倒计时直观展示区块时间戳应用
   - 资金流转可视化展示托管过程

### 修复问题

1. **超时取消按钮无法点击**: 将deliveryTimeout从24小时改为60秒（演示用）
2. **receive与revert无法解锁**: 添加可点击的receive-section区域
3. **查看完整代码按钮无反应**: 修复FullCodeModal的show属性绑定
4. **缺少Gas估算**: 在concepts.js中添加Day24的gasEstimates
5. **引导不明确**: 修复所有nextStep文本，明确指定按钮名称

---

## 20260324 - Day 23 开发完成

### 新增内容
- **Day 23 (SimpleLending)**: DeFi借贷平台 - 存款/取款/抵押/借款/还款/利息计算
- **8 个知识点**: reentrancy_guard, deposit_function, collateral_mechanism, borrow_function, interest_calculation, collateral_factor, repay_function, checks_effects_interactions
- **合约架构可视化**: 点击解锁重入锁保护机制
- **用户资产面板**: 显示钱包余额、存款、抵押、债务、健康因子
- **4个操作标签页**: 存款/取款、抵押品、借款/还款、合约状态监控
- **实时利息计算**: 债务每秒累积利息，直观展示复利效果
- **健康因子可视化**: 用颜色（🟢安全 🟡警告 🔴危险）展示债务安全状态
- **事件日志**: 记录所有操作（存款、取款、抵押、借款、还款）

### 技术要点

1. **重入锁保护**: 使用 `nonReentrant` 修饰符防止重入攻击
2. **存款功能**: 用户存入ETH获得流动性，可随时取回
3. **抵押机制**: 存入抵押品获得借款额度（抵押率75%）
4. **借款功能**: 基于抵押品价值计算最大可借金额
5. **利息计算**: 使用简单利息公式，按秒计息（年利率5%）
6. **抵押率**: 抵押品价值/借款债务，低于阈值触发清算风险
7. **还款功能**: 偿还本金和累积利息，支持超额还款退款
8. **CEI安全模式**: Checks-Effects-Interactions模式防止重入攻击

### 开发经验总结

1. **循环依赖解决**:
   - 问题：checks_effects_interactions作为第8个知识点，解锁时机设计导致循环依赖
   - 解决：将checks_effects_interactions与repay_function同时在还款操作解锁
   - 结果：用户完成还款后所有8个概念解锁，查看完整代码按钮正常显示

2. **布局规范遵循**:
   - 使用标准双栏布局（左栏交互 + 右栏知识面板）
   - 删除组件内重复的.message-toast样式，使用全局样式
   - 所有文字颜色使用CSS变量（var(--text-main), var(--text-muted)）支持日间/夜间模式

3. **知识点解锁时机优化**:
   - reentrancy_guard: 点击架构图解锁
   - deposit_function: 成功存款时解锁
   - collateral_mechanism + collateral_factor: 存入抵押品时同时解锁
   - borrow_function + interest_calculation: 成功借款时同时解锁
   - repay_function + checks_effects_interactions: 成功还款时同时解锁

4. **交互设计**:
   - 4个标签页清晰分离不同功能（存款/取款、抵押品、借款/还款、合约状态）
   - 用户资产卡片紧凑展示关键数据
   - 健康因子用颜色直观提示风险等级
   - 实时利息提示（⏱️ 利息每秒累积）

### 修复问题

1. **循环依赖**: 将checks_effects_interactions解锁时机从"查看完整代码"改为"还款操作"
2. **message-toast样式冲突**: 删除组件内重复样式，使用全局样式从底部弹出
3. **FullCodeModal不显示**: 添加缺失的:show="true" prop
4. **日间模式文字看不清**: 将所有硬编码颜色（#e2e8f0, #94a3b8等）替换为CSS变量

---

## 20260324 - Day 22 开发完成

### 新增内容
- **Day 22 (FairChainLottery)**: 公平链上彩票 - 去中心化彩票系统 + Mock VRF随机数
- **8 个知识点**: lottery_state_enum, ownable_contract, entry_fee, dynamic_array, mock_vrf, random_winner, call_transfer, event_logging
- **双角色系统**: Owner（开启/结束彩票）和 Player（参与彩票）
- **彩票状态机**: CLOSED → OPEN → CALCULATING → CLOSED 的完整状态流转
- **参与者管理**: 动态数组存储参与者，支持查看参与者列表
- **VRF随机数**: Mock VRFCoordinator模拟链上随机数生成
- **获胜者选择**: 基于随机数公平选出获胜者并自动发放奖金
- **事件日志**: 记录所有关键操作（开启、参与、结束、获胜者选出）

### 技术要点

1. **状态枚举**: 使用 enum 定义彩票状态，状态转换需要满足特定条件
2. **Ownable模式**: 只有合约所有者才能执行敏感操作（开启/结束彩票）
3. **参与费用**: 玩家需要支付固定ETH（0.01）参与彩票
4. **动态数组**: 使用 address[] 存储参与者列表，支持 push 和 length 查询
5. **Mock VRF**: 本地模拟 Chainlink VRF，requestRandomWords 返回 requestId
6. **随机数生成**: fulfillRandomWords 使用 keccak256 生成伪随机数
7. **奖金发放**: 使用 call{value: amount} 发送ETH到获胜者地址
8. **事件系统**: 使用 event 记录关键操作，便于前端监听和追踪

### 开发经验总结

1. **循环依赖解决**:
   - 问题：event_logging 需要通过点击"查看完整代码"解锁，但按钮需要100%进度才显示
   - 解决：将 call_transfer 和 event_logging 提前到 VRF 回调时同时解锁
   - 结果：所有概念在 VRF 回调后全部解锁，按钮正常显示

2. **状态管理设计**:
   - 使用 useDay22 composable 管理彩票状态（lotteryState, players, recentWinner）
   - 角色切换通过 toggleRole 实现，影响可操作的功能按钮
   - 操作日志通过 operationLogStore 统一记录

3. **交互流程优化**:
   - 开启彩票后明确提示"请切换回 Player 角色参与彩票"
   - VRF回调时一次性解锁剩余3个概念，避免用户困惑
   - 获胜者卡片点击可查看详情，了解奖金发放机制

4. **组件布局**:
   - 左栏：架构图 + 双角色切换 + 操作区（根据角色和状态动态显示）
   - 右栏：KnowledgePanel 显示知识点进度
   - 符合 Day 组件统一布局规范

### 修复问题

1. **message-toast弹窗从顶部弹出**: 删除组件内重复的 .message-toast 样式，使用全局样式从底部弹出
2. **副标题更新**: "去中心化彩票/Mock VRF" → "去中心化彩票/FairChainLottery"
3. **getHint() 缺少 Day 22 提示**: 在 concepts.js 的 getHint() 函数中添加8个 Day 22 概念提示

---

## 20260320 - Day 21 开发完成

### 新增内容
- **Day 21 (SimpleNFT)**: ERC721 NFT标准 - 非同质化代币实现
- **8 个知识点**: ierc721_interface, mint_function, token_id_counter, token_uri, balance_of, transfer_from, safe_transfer, approve_mechanism, approval_for_all
- **ERC721架构可视化**: 展示IERC721标准接口与SimpleNFT合约实现的关系
- **NFT画廊**: 展示已铸造的NFT卡片，支持点击查看详情
- **铸造功能**: 输入接收地址和元数据URI铸造新NFT
- **转移功能**: 支持普通转移和安全转移（检查接收方是否支持ERC721）
- **授权机制**: 单代币授权（approve）和操作员授权（setApprovalForAll）
- **所有权追踪**: 查询任意地址持有的NFT列表和余额

### 技术要点

1. **ERC721标准**: 非同质化代币标准，每个代币有唯一ID和独立元数据
2. **铸造函数**: 使用内部_safeMint函数创建新NFT并分配唯一tokenId
3. **代币ID计数器**: 使用Counters库实现自增的tokenId分配
4. **Token URI**: 指向NFT元数据的链接，通常存储在IPFS上
5. **转移机制**: transferFrom需要授权，safeTransferFrom会检查接收方是否实现onERC721Received
6. **授权机制**: approve授权单个代币，setApprovalForAll授权全部代币管理权限

### 开发经验总结

1. **布局规范遵循**:
   - 删除组件中的布局样式（.day-21-content, .content-layout等）
   - 使用全局样式文件day-common.css中的统一布局
   - 区块间距使用.section的margin-bottom: 16px保持一致

2. **提示系统优化**:
   - 明确提示用户"选中一个NFT"才能进行转移/授权操作
   - 交互提示块和Toast提示保持一致
   - 逐步引导用户完成铸造→查看→转移→授权的学习路径

3. **随机生成功能**:
   - 铸造区添加随机生成地址和URI按钮
   - 转移/授权区添加随机生成地址按钮
   - 所有权追踪区添加选择已有地址按钮

4. **组件布局调整**:
   - 铸造区 → 所有权追踪 → NFT画廊 → 转移/授权 → 操作员授权
   - 符合用户学习流程：先铸造，再查询，然后操作

### 修复问题

1. **message-toast弹窗过高**: 删除自定义样式，使用全局样式从底部弹出
2. **布局规范违反**: 删除scoped样式中的布局相关CSS，遵循Day组件统一布局规范
3. **提示不清晰**: 更新token_uri提示明确指引"选中一个NFT，尝试转移NFT"

---

## 20260321 - Day 20 开发完成

### 新增内容
- **Day 20 (ReentryAttack)**: 重入攻击与防护 - 智能合约安全核心
- **8 个知识点**: reentrancy_attack, fallback_receive, vulnerable_withdraw, deposit_function, checks_effects_interactions, reentrancy_guard, contract_balance, code_comparison
- **攻击流程可视化**: 攻击者 → 调用withdraw → 发送ETH → receive回调 → 再次withdraw 的完整递归流程
- **漏洞/安全版本对比**: 直观展示先发送ETH后更新余额 vs 先更新余额后发送ETH的差异
- **双角色系统**: 攻击者（存入ETH/发起攻击）和金库管理员（查看余额/监控状态）
- **递归攻击动画**: 模拟重入攻击的多次递归调用过程

### 技术要点

1. **重入攻击原理**: 攻击者利用合约在发送ETH后、更新余额前的窗口期，通过递归调用重复提款
2. **回退函数 (receive/fallback)**: 合约接收ETH时自动触发，是重入攻击的入口点
3. **CEI模式 (Checks-Effects-Interactions)**: 先检查条件，再更新状态，最后进行外部调用的安全编码模式
4. **重入锁 (ReentrancyGuard)**: 使用状态变量阻止函数在锁定期间被重入调用
5. **合约余额查询**: 使用 address(this).balance 查询合约持有的ETH数量

### 开发经验总结

1. **攻击动画实现**:
   - 使用 setTimeout 模拟递归调用的延迟效果
   - isAttacking 状态管理控制按钮禁用状态
   - 攻击计数器显示递归次数

2. **双版本对比设计**:
   - 漏洞版本：先发送ETH，后更新余额
   - 安全版本：先更新余额，后发送ETH + 重入锁保护
   - 代码高亮显示关键差异行

3. **提示系统优化**:
   - 首次进入显示初始提示（onMounted 钩子）
   - 攻击成功后更新提示引导查看防护机制
   - 所有概念解锁后显示完成提示

4. **样式细节**:
   - 攻击原理区域使用半透明红色渐变背景
   - 修复布局溢出问题（flex-wrap + max-width）
   - 按钮状态管理（攻击时禁用）

### 修复问题

1. **查看完整代码按钮无响应**: 添加 `:show="true"` prop 到 FullCodeModal
2. **攻击按钮保持禁用状态**: 修复 isAttacking 状态管理，确保攻击完成后重置
3. **提示流程不连贯**: 更新 fallback_receive 提示指向正确的下一步操作
4. **布局溢出**: 修复 GoldVault 块在窄屏下的溢出问题

---

## 20260320 - Day 19 开发完成

### 新增内容
- **Day 19 (SignThis)**: 签名验证与无Gas空投 - ECDSA签名机制
- **8 个知识点**: ecdsa_signature, keccak256_hash, signature_rsv, eip191_prefix, ecrecover, require_statement, mapping_storage, msg_sender
- **签名流程可视化**: 组织者签名 → 用户参与 → 链上验证完整流程
- **R/S/V 组件分解**: 以太坊签名 65 字节的详细分解展示
- **无Gas空投演示**: 用户无需持有 ETH 即可参与活动
- **角色切换系统**: Organizer（签名授权）和 Participant（参与活动）双角色

### 技术要点

1. **EIP-191 签名前缀**: `\x19Ethereum Signed Message:\n32` 是以太坊个人签名的标准
2. **ecrecover 地址恢复**: 通过签名恢复签名者地址，验证签名有效性
3. **Keccak256 哈希**: 对用户地址进行哈希生成唯一消息标识
4. **无Gas机制**: 用户只需提供签名，Gas费由合约调用者承担

### 开发经验总结

1. **提示系统完善**:
   - 首次进入页面显示初始提示（onMounted 钩子）
   - 切换角色时更新 currentHint
   - msg_sender 提示添加下一步引导

2. **KnowledgePanel 显示优化**:
   - 移除 `v-if="unlockedConcepts.length > 0"` 条件
   - 修改 `showUnlockArea` 支持 `customHint`
   - 确保初始状态也能显示提示

3. **夜间模式兼容**:
   - 所有硬编码颜色改为 CSS 变量
   - 使用 `var(--text-main)`, `var(--text-muted)` 等
   - 背景使用半透明渐变

4. **AbiCoder 替代 solidityPack**:
   - ethers v6 使用 `AbiCoder.defaultAbiCoder().encode()`
   - 避免 `solidityPack` 导入错误

### 修复问题

1. **eip191_prefix 解锁循环**: 将解锁时机从"查看完整代码"改为"参与成功"
2. **"查看完整代码"按钮无响应**: 修正 FullCodeModal 的 prop 使用（`:show` 替代 `v-if`）
3. **夜间模式文本颜色过深**: 替换所有硬编码颜色为 CSS 变量
4. **初始状态无提示**: 添加 onMounted 钩子设置初始提示

---

## 20260320 - Day 18 开发完成

### 新增内容
- **Day 18 (OracleContract)**: 预言机与参数保险 - Chainlink预言机集成
- **8 个知识点**: oracle_interface, eth_usd_oracle, random_generation, purchase_insurance, price_conversion, parametric_payout, cooldown_mechanism, contract_balance
- **双预言机架构**: Weather Oracle（降雨量）+ ETH/USD PriceFeed（价格）双数据源
- **价格转换**: USD 到 ETH 的精确转换（1e26 精度处理）
- **参数化保险**: 基于降雨量自动触发赔付，无需人工审核
- **冷却期机制**: 24小时冷却期防止滥用，支持时间快进演示

### 技术要点

1. **Chainlink价格精度**: 使用 `1e26 = 1e18(wei) × 1e8(Chainlink精度)` 进行正确价格转换
2. **双角色系统**: Farmer（购买保险/索赔）和 Admin（提取余额）
3. **透明背景样式**: 所有区块使用透明背景，保持与其他Day一致的视觉风格
4. **消息提示位置**: 统一在页面底部弹出（bottom: 100px）

### 开发经验总结

1. **Price Conversion Formula**:
   ```solidity
   // 正确的价格转换公式
   uint256 premiumInEth = (INSURANCE_PREMIUM_USD * 1e26) / ethPrice;
   // 1e26 = 1e18 (wei precision) × 1e8 (Chainlink 8 decimals)
   ```

2. **概念定义配置**: 需要在多个文件中添加Day 18支持
   - `concepts.js`: day18ConceptDefinitions
   - `KnowledgePanel.vue`: Day 18分支
   - `useConceptInteraction.js`: Day 18概念定义
   - `Sidebar.vue`: Day 18概念定义

3. **样式统一**: 删除组件内Grid布局样式，使用全局样式；区块使用透明背景

---

## 20260318 - Day 17 开发完成

### 新增内容
- **Day 17 (UpgradeHub)**: 可升级合约架构 - 代理模式与合约升级
- **8 个知识点**: proxy_pattern, delegatecall, storage_layout, upgrade_mechanism, logic_contract, fallback_function, data_persistence, version_control
- **代理模式架构**: Proxy 合约 + Logic V1/V2 合约的分离设计演示
- **升级演示**: V1 ↔ V2 切换，展示数据持久化（订阅数据在升级后保持不变）
- **角色系统**: Owner（创建计划）和 User（订阅/查询）双角色切换
- **阶段式解锁**: 5个阶段渐进式学习代理模式、delegatecall、存储布局、升级机制、数据持久化

### 技术要点

1. **双重提示格式规范**: 阶段1的三个概念（proxy_pattern, delegatecall, storage_layout）使用完整格式：
   ```javascript
   showMessage('✅ 操作确认！🎉 恭喜解锁：概念名！概念说明。👉 下一步引导！')
   ```

2. **样式统一**: 采用 Day 14 的浅色主题风格，角色切换按钮内嵌在交互区域

3. **KnowledgePanel Props 修复**: 必须传递 `:unlocked-concepts` 和 `:progress-percentage`，使用 `:current-day` 而非 `:day`

### 开发经验总结

1. **提示系统规范**: 阶段1的概念解锁必须使用完整的双重提示格式，包含操作确认、解锁祝贺、概念说明、下一步引导

2. **按钮颜色**: 查询状态按钮需要添加颜色类（如 `blue`）才能正确显示

3. **角色切换布局**: 将角色切换按钮从固定浮动改为内嵌在交互区域，提升用户体验

---

## 20260318 - Day 16 开发完成

### 新增内容
- **Day 16 (PluginStore)**: 插件存储系统 - 动态插件注册与低级别调用
- **8 个知识点**: struct_definition, mapping_storage, plugin_registration, low_level_call, abi_encoding, staticcall, dynamic_delegation, contract_interop
- **插件系统架构**: 核心合约 + 插件合约的动态调用模式
- **ABI 编码可视化**: 函数选择器、参数编码的详细分解展示
- **双模式调用**: call（执行）和 staticcall（查询）两种调用模式

### 技术要点

1. **ethers.js 地址校验**: 使用 `getAddress()` 规范化地址，避免 checksum 错误
2. **动态参数编码**: 根据函数签名自动判断参数类型（address only 或 address + string）
3. **CSS 变量问题**: 按钮颜色使用硬编码值（#06b6d4, #a855f7）而非 CSS 变量
4. **布局一致性**: 使用 `.input-row` 和 `.button-row` 保持与其他 Day 一致的布局

### 开发经验总结

1. **ethers.js 版本兼容性**: 使用 ethers v6 的 `Interface`, `AbiCoder`, `getAddress` 等函数，与 v5 API 不同

2. **地址 checksum 问题**: 
   - 错误：`0xAb5801a7D398351b8bE11C439e05C5B9ebB6AA0c`（大小写不正确）
   - 修复：使用 `getAddress(user)` 自动计算正确的 EIP-55 checksum

3. **按钮颜色不显示问题**:
   - 原因：CSS 变量 `--accent-purple` 和 `--accent-cyan` 未定义
   - 修复：使用硬编码颜色值 `#06b6d4`（cyan）和 `#a855f7`（purple）

4. **ABI 编码参数动态处理**:
   - `getWeapon(address)` 只需要 address 参数
   - `setWeapon(address,string)` 需要 address + string 参数
   - 根据函数签名动态判断：`functionSignature.includes('string')`

5. **函数栏样式参考**: 使用左边框样式（`border-left: 3px solid var(--accent-blue)`）与 Day 15 保持一致

---

## 20260317 - Day 15 开发完成

### 新增内容
- **Day 15 (GasEfficientVoting)**: 高效节能投票 - Gas 优化技术
- **9 个知识点**: compact_datatype, uint8_uint32, bytes32_string, storage_optimization, bit_operation, mapping_storage, mask_check, timestamp_block, event_logging
- **Gas 优化技术**: 紧凑数据类型、位运算存储、bytes32 vs string、时间戳验证
- **存储可视化**: 1个 uint256 存储256个提案投票状态的位运算演示
- **位运算动画**: 可视化展示掩码检查和位设置过程

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

### 开发经验总结

1. **避免页面加载自动解锁**: Day 15 最初设计为"页面加载时自动解锁 compact_datatype 和 uint8_uint32"，但用户反馈需要交互后再显示。改为点击存储可视化时解锁，符合"核心交互自然解锁"原则

2. **知识点合并优化**: 将 gas_comparison 合并到 bit_operation，避免用户错过知识点。在位运算的解释中同时说明 Gas 优势

3. **进度提示的重要性**: 用户创建提案时，明确显示"还需要X个提案解锁存储优化"，避免用户不知道如何继续

4. **⚠️ 中栏未显示问题（ showMessage 导入错误）**:

   **问题现象**: Day 15 组件加载后，整个中栏（交互区域）空白，只有左右栏显示

   **错误信息**:
   ```
   The requested module '/src/composables/useConceptInteraction.js'
   does not provide an export named 'showMessage'
   ```

   **修复方案**: 在组件内部定义本地消息系统

5. **完整代码弹窗配置**: FullCodeModal 需要正确的 props：`:show`、`:code`、`title`，使用 `@close` 事件关闭。最初使用了错误的 props (`v-if`、`:full-code`) 导致按钮无响应

6. **样式一致性**: 与 Day 11-14 保持一致的交互块样式（背景、边框、圆角、间距），按钮颜色变体需要先在 main.css 中定义

7. **响应式布局**: 使用动态类 `single-column` 实现无概念时全宽，解锁后双栏的布局切换。避免使用 `max-width` 和 `margin: 0 auto` 导致的布局冲突

8. **Sidebar.vue 和 KnowledgePanel.vue 必须同步更新**: 每添加新 Day，都要在这两个文件中添加对应的概念定义支持，否则右栏知识点显示异常

---

## 20260317 - Day 14 开发完成

### 新增内容
- **Day 14 (SafeDeposit)**: 安全存款盒 - 抽象合约、接口与工厂模式
- **10 个知识点**: interface_definition, abstract_contract, inheritance, override_keyword, virtual_function, super_keyword, modifier_combination, factory_pattern, metadata_storage, time_lock
- **合约架构可视化**: Interface → Abstract → Concrete 继承关系图
- **三种存款盒类型**: Basic, Premium, TimeLocked

### 关键设计决策

#### 1. 知识点解锁逻辑调整
**变更**: `interface_definition` 不再页面加载自动解锁

**原因**: 
- 设计文档最初规定"页面加载自动解锁"
- 实际实现改为"创建任意存款盒时解锁"
- 这样更符合渐进式学习理念，用户通过操作自然发现接口概念

**当前解锁逻辑**:
- 点击合约架构图: 解锁 `interface_definition`
- 创建Basic: 解锁 `inheritance`, `abstract_contract`
- 创建Premium: 解锁 `override_keyword`, `virtual_function`, `abstract_contract`
- 创建TimeLocked: 解锁 `time_lock`, `abstract_contract`
- 创建第2个盒子: 额外解锁 `factory_pattern`

#### 2. 工厂模式计数器
**实现**: 使用全局 `boxCounter` 而非 `myBoxes.length` 判断

**原因**: 
- 所有权转移后，`myBoxes` 可能不包含用户创建的所有盒子
- `boxCounter` 保证工厂模式在第2个盒子创建时正确解锁

#### 3. 双提示系统完善
**Toast 提示**: 操作结果 + 解锁通知 + 下一步引导
**KnowledgePanel 提示**: 知识点解释 + 代码示例 + 交互引导

**失败处理**: 每个失败操作都有 `nextStep` 引导用户正确操作

#### 4. 所有权转移流程
**两步骤设计**:
1. 原所有者调用 `transferOwnership` 转移所有权
2. 新所有者调用 `completeOwnershipTransfer` 确认接收

**知识点**: 展示真实合约中的所有权转移流程

---

## 20260317 - Day 13 开发完成

### 新增内容
- **Day 13 (MyToken)**: ERC20 代币合约，带 virtual 关键字（可扩展）
- **4 个知识点**: constructor_mint, zero_address_mint, internal_function, virtual_function
- **继承演示区**: 对比展示 virtual/override 用法

### 关键修改点

#### 1. Sidebar.vue - 添加 Day 13 概念定义支持
**问题**: Day 13 的知识点 emoji 不显示，显示为 `🔒`

**原因**: `currentDayConcepts` computed 属性中只处理了 Day 11 和 Day 12，没有处理 Day 13

**修复**:
```javascript
// 1. 导入 day13ConceptDefinitions
import { conceptDefinitions, day11ConceptDefinitions, day12ConceptDefinitions, day13ConceptDefinitions } from '../data/concepts'

// 2. 在 currentDayConcepts 中添加 Day 13 处理
const currentDayConcepts = computed(() => {
  // ...
  let conceptDefs = conceptDefinitions
  if (props.currentDay === 11) {
    conceptDefs = day11ConceptDefinitions
  } else if (props.currentDay === 12) {
    conceptDefs = day12ConceptDefinitions
  } else if (props.currentDay === 13) {
    conceptDefs = day13ConceptDefinitions  // ← 添加这一行
  }
  // ...
})
```

**重要提醒**: 添加新 Day 时，必须在 Sidebar.vue 中添加对应的概念定义支持，否则右栏知识点 emoji 不会显示！

#### 2. KnowledgePanel.vue - 使用 useConceptInteraction 的 getConceptBadge
**修改**: 直接使用 `useConceptInteraction` composable 中的 `getConceptBadge` 函数，而不是本地重新定义

### 开发经验总结

1. **Sidebar.vue 必须更新**: 每添加一个新 Day，都要在 Sidebar.vue 中添加对应的概念定义支持，否则右栏知识点显示异常

2. **避免循环依赖**: Day 13 最初设计为"转账解锁 internal，查看代码解锁 virtual"，但用户无法看到查看代码按钮。解决方案是转账时同时解锁两个知识点

3. **学习提示的重要性**: 当用户提前解锁所有知识点时，给予明确的提示，鼓励他们继续探索其他功能，而不是误以为已经完成学习

4. **样式一致性**: 保持与之前 Day 的样式一致性，包括边框、间距、颜色等，提升用户体验

---

## 历史更新（Day 1-12）

Day 1-12 的开发日志请参考早期的 plan 文档：
- `day10_activity_tracker_plan.md`
- `day11_MasterkeyContract_plan.md`
- `day12_ERC20_plan.md`

---

*文档版本：20260320 (Day 19 已添加)*
