# Day 29 - SimpleStablecoin 简单稳定币 规划文档

> 创建日期: 2026-03-26

---

## 一、合约功能分析

### 1.1 核心功能
- **存入抵押品 (depositCollateral)**: 用户存入ETH作为抵押品
- **铸造稳定币 (mintStablecoin)**: 根据抵押品价值铸造SUSD稳定币（150%抵押率）
- **销毁稳定币 (burnStablecoin)**: 用户销毁SUSD减少债务
- **提取抵押品 (withdrawCollateral)**: 提取ETH，需保持150%抵押率
- **清算 (liquidate)**: 当抵押率低于150%时，清算人可清算不健康头寸

### 1.2 技术特点
- **超额抵押机制**: 150%抵押率，每铸造1美元SUSD需要1.5美元ETH抵押
- **价格预言机**: 使用Chainlink风格的AggregatorV3Interface获取ETH/USD价格
- **Mock预言机**: 提供MockPriceFeed用于本地测试，管理员可手动设置价格
- **清算激励**: 5%清算奖励激励清算人维护系统健康
- **ReentrancyGuard**: 防止重入攻击
- **健康因子**: 实时计算用户头寸健康度

### 1.3 合约结构
```solidity
// 常量配置
COLLATERAL_RATIO = 150        // 抵押率要求 150%
LIQUIDATION_BONUS = 5         // 清算奖励 5%

// 核心状态变量
mapping(address => uint256) public collateralDeposited;  // 用户抵押品
AggregatorV3Interface internal priceFeed;                // 价格预言机

// 核心函数
- depositCollateral(): 存入ETH抵押品（payable）
- mintStablecoin(uint256 amount): 铸造稳定币
- burnStablecoin(uint256 amount): 销毁稳定币
- withdrawCollateral(uint256 amount): 提取抵押品
- liquidate(address user): 清算不健康头寸
- getEthPrice(): 获取ETH当前价格（18位小数）
- getCollateralValueInUsd(address user): 获取用户抵押品美元价值
- getHealthFactor(address user): 获取用户健康因子
- getMaxMintable(address user): 获取最大可铸造金额
```

### 1.4 数学原理
```
抵押率 = 抵押品价值 / 债务价值 * 100%

最大可铸造 = 抵押品价值 * 100 / 抵押率
示例: ETH价格 = $2000, 存入1 ETH = $2000, 150%抵押率
最大可铸造 = 2000 * 100 / 150 = $1333.33 SUSD

健康因子 = 抵押品价值 * 100 / 债务价值
健康因子 < 150% → 可被清算

清算奖励 = 抵押品 * (100 + 5) / 100 = 抵押品 * 1.05
```

### 1.5 使用流程
```
存入抵押品 → 铸造稳定币 → [使用SUSD] → 销毁稳定币 → 提取抵押品
     ↑                                              ↓
     └──────────── 清算（不健康时）←─────────────────┘
```

---

## 二、页面布局设计

### 2.1 整体布局
采用 Day 22+ 标准双栏布局：
- **左栏**: 交互区域（可视化 + 操作）
- **右栏**: 知识面板（KnowledgePanel）

### 2.2 左栏内容区块（从上到下，共7个区块）

#### 1. 稳定币系统架构可视化区（可点击解锁）
```
┌─────────────────────────────────────────────────────────┐
│  🏦 稳定币系统架构（点击了解超额抵押机制）               │
├─────────────────────────────────────────────────────────┤
│                                                         │
│   ┌─────────────┐      ┌─────────────┐                 │
│   │   用户      │      │   清算人    │                 │
│   │   User      │      │  Liquidator │                 │
│   └──────┬──────┘      └──────┬──────┘                 │
│          │                    │                        │
│          ▼                    ▼                        │
│   ┌─────────────────────────────────────┐              │
│   │      SimpleStablecoin 合约          │              │
│   │  ┌─────────────────────────────┐    │              │
│   │  │    抵押品池 (ETH)           │    │              │
│   │  │    collateralDeposited      │    │              │
│   │  └─────────────────────────────┘    │              │
│   │              ↓                      │              │
│   │  ┌─────────────────────────────┐    │              │
│   │  │    SUSD 稳定币 (ERC20)      │    │              │
│   │  │    超额抵押发行             │    │              │
│   │  └─────────────────────────────┘    │              │
│   │              ↓                      │              │
│   │  ┌─────────────────────────────┐    │              │
│   │  │    价格预言机 (Chainlink)   │    │              │
│   │  │    ETH/USD Price Feed       │    │              │
│   │  └─────────────────────────────┘    │              │
│   └─────────────────────────────────────┘              │
│                                                         │
│   核心机制: 150%超额抵押 + 价格预言机 + 清算机制        │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

#### 2. 抵押率与数学原理面板（可点击解锁 - 顺序解锁）
```
┌─────────────────────────────────────────────────────────┐
│  📊 抵押率与数学原理（点击了解详细机制）                 │
├─────────────────────────────────────────────────────────┤
│  【系统参数】（第一次点击解锁 collateral_ratio）         │
│  抵押率要求: 150% 📈                                    │
│  清算奖励: 5% 🎁                                        │
│  价格精度: 8位小数（Chainlink标准）→ 18位小数（合约）   │
│                                                         │
│  【计算公式】（第二次点击解锁 price_oracle）             │
│  ┌─────────────────────────────────────────────────┐   │
│  │  最大可铸造 = 抵押品价值 × 100 / 抵押率         │   │
│  │                                                 │   │
│  │  示例:                                          │   │
│  │  ETH价格 = $2000                                │   │
│  │  存入1 ETH = $2000 抵押品                       │   │
│  │  最大可铸造 = 2000 × 100 / 150 = $1333.33 SUSD │   │
│  └─────────────────────────────────────────────────┘   │
│                                                         │
│  【健康因子计算】（第三次点击解锁 health_factor）        │
│  健康因子 = 抵押品价值 × 100 / 债务价值                 │
│  健康因子 ≥ 150%: ✅ 安全                             │
│  健康因子 < 150%: ⚠️ 可被清算                         │
│                                                         │
│  【价格转换】（第四次点击解锁 decimal_conversion）       │
│  Chainlink价格(8位) → 合约价格(18位)                   │
│  2000_00000000 × 1e10 = 2000_000000000000000000       │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

#### 3. 价格预言机面板（可点击解锁）
```
┌─────────────────────────────────────────────────────────┐
│  🔮 价格预言机（点击了解预言机机制）                     │
├─────────────────────────────────────────────────────────┤
│  【当前ETH价格】                                        │
│  💰 $2,000.00 USD                                       │
│  更新时间: 刚刚                                         │
│  数据来源: MockPriceFeed（模拟Chainlink）               │
│                                                         │
│  【价格数据详情】                                       │
│  Round ID: #1,234                                       │
│  价格: 2000_00000000 (8位小数)                         │
│  开始时间: 2026-03-26 10:00:00                         │
│  更新时间: 2026-03-26 10:05:00                         │
│                                                         │
│  【模拟价格操控】（用于演示清算）                       │
│  [设置ETH价格: $____] [💰 更新价格]                    │
│  快捷: [$3000] [$2000] [$1500] [$1000] [$500]          │
│                                                         │
│  💡 提示: 降低ETH价格可以演示清算机制！                 │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

#### 4. 用户资产面板（只读信息）
```
┌─────────────────────────────────────────────────────────┐
│  💼 我的资产状况                                         │
├─────────────────────────────────────────────────────────┤
│  【抵押品】                                             │
│  已存入ETH: 1.5 ETH                                     │
│  抵押品价值: $3,000.00 USD                              │
│                                                         │
│  【债务】                                               │
│  已铸造SUSD: 1,500 SUSD                                 │
│  当前债务: $1,500.00 USD                                │
│                                                         │
│  【健康状态】                                           │
│  健康因子: 200% ✅ 安全                                 │
│  抵押率: 200% (最低要求: 150%)                          │
│  最大可铸造: 2,000 SUSD                                 │
│  还可铸造: 500 SUSD                                     │
│                                                         │
│  【清算风险】                                           │
│  清算价格阈值: $1,500 ETH                               │
│  当前价格: $2,000 ETH                                   │
│  安全缓冲: +33%                                         │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

#### 5. 操作标签页（核心交互区）
```
┌─────────────────────────────────────────────────────────┐
│  [💰 存入抵押]  [🏦 铸造SUSD]  [🔥 销毁SUSD]  [🏧 提取抵押] │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  【存入抵押品面板】（默认显示）                          │
│  存入ETH数量: [________] ETH                            │
│  预估抵押品价值: $____ USD                              │
│  [💰 存入抵押品]（点击解锁 deposit_collateral）         │
│                                                         │
│  快捷存入: [0.5 ETH] [1 ETH] [2 ETH] [5 ETH]           │
│                                                         │
│  ─────────────────────────────────────────────────────  │
│                                                         │
│  【铸造SUSD面板】                                       │
│  铸造SUSD数量: [________] SUSD                          │
│  当前抵押品: 1.5 ETH ($3,000)                           │
│  当前债务: 0 SUSD                                       │
│  最大可铸造: 2,000 SUSD                                 │
│  铸造后健康因子: ___%                                   │
│  [🏦 铸造SUSD]（点击解锁 mint_stablecoin）              │
│                                                         │
│  快捷铸造: [500 SUSD] [1000 SUSD] [1500 SUSD]          │
│                                                         │
│  ─────────────────────────────────────────────────────  │
│                                                         │
│  【销毁SUSD面板】                                       │
│  销毁SUSD数量: [________] SUSD                          │
│  当前债务: 1,500 SUSD                                   │
│  钱包SUSD余额: 2,000 SUSD                               │
│  销毁后健康因子: ___%                                   │
│  [🔥 销毁SUSD]（点击解锁 burn_stablecoin）              │
│                                                         │
│  快捷销毁: [全部] [50%] [1000 SUSD]                    │
│                                                         │
│  ─────────────────────────────────────────────────────  │
│                                                         │
│  【提取抵押品面板】                                     │
│  提取ETH数量: [________] ETH                            │
│  当前抵押品: 1.5 ETH                                    │
│  当前债务: 1,500 SUSD                                   │
│  提取后健康因子: ___%                                   │
│  [🏧 提取抵押品]（点击解锁 withdraw_collateral）        │
│                                                         │
│  ⚠️ 注意: 提取后健康因子必须 ≥ 150%，否则交易失败！     │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

#### 6. 清算演示区（可点击解锁）
```
┌─────────────────────────────────────────────────────────┐
│  ⚔️ 清算演示区（点击了解清算机制）                       │
├─────────────────────────────────────────────────────────┤
│  【系统健康状态】                                       │
│  总抵押品价值: $____ USD                                │
│  总SUSD流通量: ____ SUSD                                │
│  系统整体抵押率: ___%                                   │
│                                                         │
│  【可清算头寸】（当ETH价格下跌时出现）                  │
│  ┌─────────────────────────────────────────────────┐   │
│  │  用户: 0xabcd...ef01                            │   │
│  │  抵押品: 1 ETH ($1,400 @ $1400/ETH)            │   │
│  │  债务: 1,000 SUSD                               │   │
│  │  健康因子: 140% ⚠️ 低于150%，可清算！           │   │
│  │  清算奖励: 0.05 ETH (5%)                        │   │
│  │  [⚔️ 执行清算]（点击解锁 liquidation）         │   │
│  └─────────────────────────────────────────────────┘   │
│                                                         │
│  【清算流程说明】                                       │
│  1. 清算人支付债务（销毁SUSD）                          │
│  2. 获得用户抵押品 + 5%奖励                             │
│  3. 系统移除不良债务，恢复健康                          │
│                                                         │
│  💡 提示: 使用"价格预言机面板"降低ETH价格来创建可清算头寸│
│                                                         │
└─────────────────────────────────────────────────────────┘
```

#### 7. 系统统计与事件日志（只读信息）
```
┌─────────────────────────────────────────────────────────┐
│  📈 系统统计                                             │
├─────────────────────────────────────────────────────────┤
│  总抵押ETH: ___ ETH                                     │
│  总SUSD流通量: ___ SUSD                                 │
│  系统抵押率: ___%                                       │
│  活跃用户数: ___                                        │
│  累计清算次数: ___                                      │
├─────────────────────────────────────────────────────────┤
│  📜 事件日志                                             │
├─────────────────────────────────────────────────────────┤
│  [2026-03-26 10:05:23] CollateralDeposited            │
│  用户 0x1234...5678 存入 1 ETH                          │
│                                                         │
│  [2026-03-26 10:06:15] StablecoinMinted                 │
│  用户 0x1234...5678 铸造 1000 SUSD                      │
│                                                         │
│  [2026-03-26 10:10:42] Liquidation                      │
│  清算人 0xabcd...ef01 清算用户 0x9876...5432           │
│  偿还债务: 500 SUSD, 获得抵押品: 0.75 ETH               │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

---

## 三、知识点设计（共10个概念）

### 3.1 概念列表
```javascript
concepts: [
    "over_collateralization",    // 超额抵押机制 - 点击架构图解锁
    "collateral_ratio",          // 抵押率计算 - 点击抵押率面板第一次解锁
    "price_oracle",              // 价格预言机 - 点击抵押率面板第二次解锁
    "health_factor",             // 健康因子 - 点击抵押率面板第三次解锁
    "decimal_conversion",        // 小数位转换 - 点击抵押率面板第四次解锁
    "deposit_collateral",        // 存入抵押品 - 成功存入时解锁
    "mint_stablecoin",           // 铸造稳定币 - 成功铸造时解锁
    "burn_stablecoin",           // 销毁稳定币 - 成功销毁时解锁
    "withdraw_collateral",       // 提取抵押品 - 成功提取时解锁
    "liquidation"                // 清算机制 - 成功清算时解锁
]
```

### 3.2 概念定义（concepts.js）
```javascript
export const day29ConceptDefinitions = {
    over_collateralization: {
        name: "超额抵押机制",
        icon: "🏦",
        unlockAt: 1,
        message: "你了解了超额抵押稳定币的核心机制！每发行1美元稳定币，需要超过1美元的加密资产作为抵押。",
        code: `// 150% 抵押率意味着：
// 要铸造 $100 SUSD，需要 $150 ETH 抵押
uint256 public constant COLLATERAL_RATIO = 150;`
    },
    collateral_ratio: {
        name: "抵押率计算",
        icon: "📊",
        unlockAt: 2,
        message: "你掌握了抵押率的计算方法！抵押率 = 抵押品价值 / 债务价值 × 100%。",
        code: `// 最大可铸造金额计算
uint256 maxMintable = (collateralValue * 100) / COLLATERAL_RATIO;
// 示例: $3000 抵押品 → 最多铸造 $2000 SUSD`
    },
    price_oracle: {
        name: "价格预言机",
        icon: "🔮",
        unlockAt: 3,
        message: "你了解了价格预言机的作用！Chainlink预言机提供可靠的ETH/USD价格数据，是稳定币系统的核心组件。",
        code: `// Chainlink 价格预言机接口
interface AggregatorV3Interface {
    function latestRoundData() external view returns (
        uint80 roundId,
        int256 answer,  // 价格（8位小数）
        uint256 startedAt,
        uint256 updatedAt,
        uint80 answeredInRound
    );
}`
    },
    health_factor: {
        name: "健康因子",
        icon: "💚",
        unlockAt: 4,
        message: "你了解了健康因子！它是衡量头寸安全性的指标，低于150%时头寸可被清算。",
        code: `// 健康因子计算
uint256 healthFactor = (collateralValue * 100) / debtValue;
// healthFactor >= 150%: 安全
// healthFactor < 150%: 可被清算`
    },
    decimal_conversion: {
        name: "小数位转换",
        icon: "🔢",
        unlockAt: 5,
        message: "你掌握了价格数据的精度转换！Chainlink返回8位小数，合约使用18位小数。",
        code: `// 8位小数 → 18位小数
uint256 ethPrice = uint256(price) * 1e10;
// 2000_00000000 * 1e10 = 2000_000000000000000000`
    },
    deposit_collateral: {
        name: "存入抵押品",
        icon: "💰",
        unlockAt: 6,
        message: "你成功存入了ETH抵押品！这是进入DeFi世界的第一步。",
        code: `function depositCollateral() external payable {
    require(msg.value > 0, "Must deposit some ETH");
    collateralDeposited[msg.sender] += msg.value;
    emit CollateralDeposited(msg.sender, msg.value);
}`
    },
    mint_stablecoin: {
        name: "铸造稳定币",
        icon: "🏦",
        unlockAt: 7,
        message: "你成功铸造了SUSD稳定币！你的债务增加了，同时获得了稳定币流动性。",
        code: `function mintStablecoin(uint256 amountToMint) external nonReentrant {
    uint256 maxMintable = (collateralValue * 100) / COLLATERAL_RATIO;
    require(currentDebt + amountToMint <= maxMintable, "Not enough collateral!");
    _mint(msg.sender, amountToMint);
}`
    },
    burn_stablecoin: {
        name: "销毁稳定币",
        icon: "🔥",
        unlockAt: 8,
        message: "你销毁了SUSD减少了债务！销毁稳定币可以提高健康因子。",
        code: `function burnStablecoin(uint256 amountToBurn) external nonReentrant {
    _burn(msg.sender, amountToBurn);
    emit StablecoinBurned(msg.sender, amountToBurn);
}`
    },
    withdraw_collateral: {
        name: "提取抵押品",
        icon: "🏧",
        unlockAt: 9,
        message: "你成功提取了ETH抵押品！提取后仍需保持150%的最低抵押率。",
        code: `function withdrawCollateral(uint256 amount) external nonReentrant {
    require(remainingValue >= requiredCollateralValue, 
            "Cannot withdraw, health factor too low");
    (bool sent, ) = payable(msg.sender).call{value: amount}("");
    require(sent, "ETH transfer failed");
}`
    },
    liquidation: {
        name: "清算机制",
        icon: "⚔️",
        unlockAt: 10,
        message: "你执行了清算！清算人通过偿还债务获得抵押品+5%奖励，维护系统健康。",
        code: `function liquidate(address user) external nonReentrant {
    require(healthFactor < COLLATERAL_RATIO, "Position is healthy");
    _burn(msg.sender, debtValue);
    // 清算人获得抵押品 + 5% 奖励
    uint256 bonusCollateral = collateralToTransfer * (100 + LIQUIDATION_BONUS) / 100;
    (bool sent, ) = payable(msg.sender).call{value: bonusCollateral}("");
}`
    }
}
```

### 3.3 提示配置（getHint函数）
```javascript
export const getHint = (conceptKey) => {
    const hints = {
        // ... 其他天数提示
        over_collateralization: "🏦 你了解了超额抵押机制！👉 点击'抵押率与数学原理'面板了解详细计算！",
        collateral_ratio: "📊 你掌握了抵押率计算！👉 继续点击同一面板了解价格预言机！",
        price_oracle: "🔮 你了解了价格预言机！👉 继续点击了解健康因子计算！",
        health_factor: "💚 你了解了健康因子！👉 继续点击了解小数位转换！",
        decimal_conversion: "🔢 你掌握了精度转换！👉 存入一些ETH抵押品开始实践！",
        deposit_collateral: "💰 已存入抵押品！👉 切换到'铸造SUSD'标签铸造稳定币！",
        mint_stablecoin: "🏦 已铸造SUSD！👉 尝试销毁一些SUSD或减少抵押品！",
        burn_stablecoin: "🔥 已销毁SUSD减少债务！👉 尝试提取抵押品！",
        withdraw_collateral: "🏧 已提取抵押品！👉 降低ETH价格，然后执行清算！",
        liquidation: "⚔️ 已执行清算！👉 恭喜完成所有概念学习！"
    };
    return hints[conceptKey] || "📖 点击其他概念标签查看更多详细解释。";
}
```

---

## 四、交互流程设计

### 4.1 用户学习路径
```
1. 点击"稳定币系统架构" → 解锁 over_collateralization
   ↓
2. 点击"抵押率与数学原理"(第1次) → 解锁 collateral_ratio
   ↓
3. 点击"抵押率与数学原理"(第2次) → 解锁 price_oracle
   ↓
4. 点击"抵押率与数学原理"(第3次) → 解锁 health_factor
   ↓
5. 点击"抵押率与数学原理"(第4次) → 解锁 decimal_conversion
   ↓
6. 存入ETH抵押品 → 解锁 deposit_collateral
   ↓
7. 铸造SUSD → 解锁 mint_stablecoin
   ↓
8. 销毁SUSD → 解锁 burn_stablecoin
   ↓
9. 提取抵押品 → 解锁 withdraw_collateral
   ↓
10. 降低ETH价格 → 创建可清算头寸
   ↓
11. 执行清算 → 解锁 liquidation
   ↓
✅ 完成所有10个概念学习！
```

### 4.2 关键交互说明

#### 顺序解锁机制（抵押率面板）
```javascript
const handleParamsClick = () => {
    // 第一次点击：解锁 collateral_ratio
    if (!progressStore.isConceptUnlocked(29, 'collateral_ratio')) {
        progressStore.unlockConcept(29, 'collateral_ratio')
        showMessage('✅ 已了解抵押率计算！🎉 恭喜解锁：抵押率计算！👉 再次点击了解价格预言机！')
        currentHint.value = '📊 你掌握了抵押率计算！👉 再次点击同一面板了解价格预言机！'
        return
    }
    // 第二次点击：解锁 price_oracle
    if (!progressStore.isConceptUnlocked(29, 'price_oracle')) {
        progressStore.unlockConcept(29, 'price_oracle')
        showMessage('✅ 已了解价格预言机！🎉 恭喜解锁：价格预言机！👉 再次点击了解健康因子！')
        currentHint.value = '🔮 你了解了价格预言机！👉 再次点击了解健康因子计算！'
        return
    }
    // 第三次点击：解锁 health_factor
    if (!progressStore.isConceptUnlocked(29, 'health_factor')) {
        progressStore.unlockConcept(29, 'health_factor')
        showMessage('✅ 已了解健康因子！🎉 恭喜解锁：健康因子！👉 再次点击了解小数位转换！')
        currentHint.value = '💚 你了解了健康因子！👉 再次点击了解小数位转换！'
        return
    }
    // 第四次点击：解锁 decimal_conversion
    if (!progressStore.isConceptUnlocked(29, 'decimal_conversion')) {
        progressStore.unlockConcept(29, 'decimal_conversion')
        showMessage('✅ 已了解小数位转换！🎉 恭喜解锁：小数位转换！👉 存入ETH抵押品开始实践！')
        currentHint.value = '🔢 你掌握了精度转换！👉 现在存入一些ETH抵押品开始实践！'
        return
    }
    // 都已解锁...
    currentHint.value = '📖 你已经了解了所有数学原理！👉 存入ETH抵押品开始实践操作！'
}
```

#### 清算演示机制
```javascript
// 当ETH价格变化时，重新计算所有用户的健康因子
const updateLiquidationCandidates = () => {
    const ethPrice = currentEthPrice.value
    liquidationCandidates.value = users.value
        .filter(user => {
            const collateralValue = user.collateral * ethPrice / 1e18
            const healthFactor = user.debt > 0 
                ? (collateralValue * 100) / user.debt 
                : 999
            return healthFactor < 150 && user.debt > 0
        })
        .map(user => ({
            ...user,
            healthFactor: calculateHealthFactor(user),
            liquidationReward: user.collateral * 1.05 / 1e18
        }))
}

// 执行清算
const handleLiquidate = (userAddress) => {
    const user = users.value.find(u => u.address === userAddress)
    const debtValue = user.debt
    const collateralToSeize = user.collateral * 1.05
    
    // 清算人支付债务
    liquidatorBalance.susd -= debtValue
    
    // 清算人获得抵押品 + 奖励
    liquidatorBalance.eth += collateralToSeize
    
    // 被清算用户状态清零
    user.collateral = 0
    user.debt = 0
    
    // 解锁概念
    if (!unlockedConcepts.value.includes('liquidation')) {
        unlockConcept('liquidation')
        showMessage('✅ 清算成功！🎉 恭喜解锁：清算机制！👉 恭喜完成所有概念学习！')
    }
}
```

---

## 五、状态管理设计（useDay29.js）

### 5.1 核心状态
```javascript
// 系统状态
const ethPrice = ref(2000 * 1e8)  // ETH价格（8位小数）
const totalCollateral = ref(0)     // 系统总抵押品
const totalSupply = ref(0)         // SUSD总供应量

// 用户状态
const userCollateral = ref(0)      // 用户抵押ETH数量
const userDebt = ref(0)            // 用户债务（SUSD）
const userSUSDBalance = ref(0)     // 用户SUSD余额

// 清算相关
const liquidationCandidates = ref([])  // 可清算头寸列表

// 其他用户（用于演示清算）
const otherUsers = ref([
    { address: '0xabcd...ef01', collateral: 1e18, debt: 1000e18 },
    { address: '0x9876...5432', collateral: 0.5e18, debt: 800e18 }
])

// 事件日志
const events = ref([])
```

### 5.2 计算属性
```javascript
// 用户抵押品美元价值
const userCollateralValue = computed(() => {
    return (userCollateral.value * ethPrice.value * 1e10) / 1e36
})

// 用户健康因子
const userHealthFactor = computed(() => {
    if (userDebt.value === 0) return 999
    return (userCollateralValue.value * 100) / userDebt.value
})

// 最大可铸造金额
const maxMintable = computed(() => {
    return (userCollateralValue.value * 100) / 150
})

// 还可铸造金额
const remainingMintable = computed(() => {
    return Math.max(0, maxMintable.value - userDebt.value)
})

// 系统抵押率
const systemCollateralRatio = computed(() => {
    if (totalSupply.value === 0) return 0
    const totalCollateralValue = (totalCollateral.value * ethPrice.value * 1e10) / 1e36
    return (totalCollateralValue * 100) / totalSupply.value
})
```

### 5.3 核心方法
```javascript
// 存入抵押品
const depositCollateral = (amount) => {
    userCollateral.value += amount
    totalCollateral.value += amount
    logEvent('CollateralDeposited', { amount })
    return { success: true, conceptUnlocked: 'deposit_collateral' }
}

// 铸造稳定币
const mintStablecoin = (amount) => {
    if (userDebt.value + amount > maxMintable.value) {
        return { success: false, error: '抵押品不足' }
    }
    userDebt.value += amount
    userSUSDBalance.value += amount
    totalSupply.value += amount
    logEvent('StablecoinMinted', { amount })
    return { success: true, conceptUnlocked: 'mint_stablecoin' }
}

// 销毁稳定币
const burnStablecoin = (amount) => {
    if (amount > userSUSDBalance.value) {
        return { success: false, error: '余额不足' }
    }
    userDebt.value -= amount
    userSUSDBalance.value -= amount
    totalSupply.value -= amount
    logEvent('StablecoinBurned', { amount })
    return { success: true, conceptUnlocked: 'burn_stablecoin' }
}

// 提取抵押品
const withdrawCollateral = (amount) => {
    const newCollateral = userCollateral.value - amount
    const newCollateralValue = (newCollateral * ethPrice.value * 1e10) / 1e36
    const requiredValue = (userDebt.value * 150) / 100
    
    if (newCollateralValue < requiredValue) {
        return { success: false, error: '提取后健康因子过低' }
    }
    
    userCollateral.value = newCollateral
    totalCollateral.value -= amount
    logEvent('CollateralWithdrawn', { amount })
    return { success: true, conceptUnlocked: 'withdraw_collateral' }
}

// 更新ETH价格（用于演示）
const updateEthPrice = (newPrice) => {
    ethPrice.value = newPrice * 1e8
    updateLiquidationCandidates()
    logEvent('PriceUpdated', { newPrice })
}

// 执行清算
const liquidate = (userAddress) => {
    const user = otherUsers.value.find(u => u.address === userAddress)
    if (!user) return { success: false }
    
    const collateralToTransfer = user.collateral * 105 / 100
    
    // 更新系统状态
    totalCollateral.value -= user.collateral
    totalSupply.value -= user.debt
    
    // 移除被清算用户
    otherUsers.value = otherUsers.value.filter(u => u.address !== userAddress)
    
    logEvent('Liquidation', { 
        liquidator: 'currentUser',
        user: userAddress,
        debtPaid: user.debt,
        collateralSeized: collateralToTransfer
    })
    
    return { success: true, conceptUnlocked: 'liquidation' }
}
```

---

## 六、文件创建清单

### 6.1 需要创建的文件
1. `src/components/days/Day29/SimpleStablecoin.vue` - 主组件
2. `src/composables/useDay29.js` - 状态管理composable

### 6.2 需要修改的文件
1. `src/data/days.js` - 添加Day 29配置
2. `src/data/concepts.js` - 添加day29ConceptDefinitions和getHint
3. `src/components/DayContent.vue` - 注册Day 29组件
4. `src/components/Sidebar.vue` - 添加Day 29概念定义支持
5. `src/components/shared/KnowledgePanel.vue` - 添加Day 29支持（如需要）

---

## 七、特殊功能说明

### 7.1 价格操控演示
- 提供MockPriceFeed模拟Chainlink预言机
- 用户可以手动设置ETH价格来演示不同场景
- 快捷按钮: $3000(高价), $2000(正常), $1500(临界), $1000(低价), $500(暴跌)
- 价格下跌时自动计算并显示可清算头寸

### 7.2 健康因子实时计算
- 所有操作（存入、铸造、销毁、提取）都实时计算健康因子
- 健康因子显示为进度条形式，直观展示安全范围
- 健康因子 < 150%时显示警告，< 130%时显示危险

### 7.3 清算激励机制
- 清算人获得抵押品 + 5%奖励
- 显示清算预期收益，激励用户执行清算
- 清算后系统移除不良债务，恢复健康

### 7.4 多用户演示
- 预设2-3个其他用户，存入不同数量的ETH和债务
- 当ETH价格下跌时，这些用户可能进入可清算状态
- 用户可以扮演清算人角色执行清算

---

## 八、UI设计要点

### 8.1 颜色方案
- 安全状态: 绿色 (#22c55e)
- 警告状态: 黄色 (#f59e0b)
- 危险状态: 红色 (#ef4444)
- 信息状态: 蓝色 (#3b82f6)
- 强调色: 青色 (#06b6d4) 用于SUSD相关

### 8.2 关键视觉元素
- ETH图标: 💎 或 🔷
- SUSD图标: 💵 或 🪙
- 健康因子: 心形进度条 💚💛❤️
- 清算: 剑图标 ⚔️
- 预言机: 水晶球 🔮

### 8.3 响应式提示
- 存入抵押品后提示"现在可以铸造SUSD了"
- 铸造后提示"注意监控健康因子"
- 健康因子低于150%时提示"注意清算风险"
- 有可清算头寸时提示"可以执行清算获得奖励"
