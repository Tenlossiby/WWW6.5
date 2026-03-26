export const dayConfigs = {
    1: {
        title: "Day 1 - 点击计数器",
        subtitle: "点击计数器/ClickCounter",
        concepts: ["function", "increment", "uint256", "contract"]
    },
    2: {
        title: "Day 2 - 保存名字",
        subtitle: "保存名字/SaveMyName",
        concepts: ["string", "private", "memory", "view", "parameters", "returns"]
    },
    3: {
        title: "Day 3 - 投票站",
        subtitle: "投票站/PollStation",
        concepts: ["array", "mapping", "push", "compound_assignment"]
    },
    4: {
        title: "Day 4 - 拍卖行",
        subtitle: "拍卖行/AuctionHouse",
        concepts: ["constructor", "msg_sender", "block_timestamp", "require", "external", "address_type", "bool_type"]
    },
    5: {
        title: "Day 5 - 管理员权限",
        subtitle: "管理员权限/AdminOnly",
        concepts: ["modifier", "zero_address", "return_statement"]
    },
    6: {
        title: "Day 6 - 以太坊银行",
        subtitle: "以太坊银行/EtherPiggyBank",
        concepts: ["address_mapping_balance", "payable", "msg_value", "wei_unit", "ether_deposit_withdraw"]
    },
    7: {
        title: "Day 7 - 朋友借条",
        subtitle: "朋友借条/SimpleIOU",
        concepts: ["nested_mapping", "address_payable", "debt_tracking", "internal_transfer", "transfer_method", "call_method", "withdraw_pattern"]
    },
    8: {
        title: "Day 8 - 打赏罐",
        subtitle: "打赏罐/TipJar",
        concepts: ["modifier_onlyOwner", "payable_tip", "msg_value_tip", "address_balance", "call_withdraw", "mapping_rates"]
    },
    9: {
        title: "Day 9 - 跨合约调用",
        subtitle: "跨合约调用/InterContract",
        concepts: ["pure_function", "view_function", "cross_contract_call", "interface_call", "low_level_call", "modifier_onlyOwner", "newton_iteration", "contract_composition"]
    },
    10: {
        title: "Day 10 - 健身追踪器",
        subtitle: "健身追踪器/ActivityTracker",
        concepts: ["struct_definition", "array_in_mapping", "multiple_mappings", "storage_keyword", "event_logging", "milestone_detection", "timestamp_usage", "onlyRegistered_modifier"]
    },
    11: {
        title: "Day 11 - 主密钥保险库",
        subtitle: "合约继承与所有权/MasterkeyVault",
        concepts: [
            "inheritance",
            "import_statement",
            "constructor",
            "private_visibility",
            "event_logging",
            "indexed_parameter",
            "transfer_ownership",
            "onlyOwner_modifier"
        ]
    },
    12: {
        title: "Day 12 - ERC20 代币标准",
        subtitle: "ERC20代币/Web3Compass",
        concepts: [
            "erc20_standard",
            "mapping_nested",
            "event",
            "transfer",
            "approve",
            "allowance",
            "transferFrom"
        ]
    },
    13: {
        title: "Day 13 - MyToken 代币扩展",
        subtitle: "ERC20进阶/Virtual & Inheritance",
        concepts: [
            "constructor_mint",
            "zero_address_mint",
            "internal_function",
            "virtual_function"
        ]
    },
    14: {
        title: "Day 14 - 安全存款盒",
        subtitle: "抽象合约、接口与工厂模式/Abstract, Interface & Factory",
        concepts: [
            "interface_definition",
            "abstract_contract",
            "inheritance",
            "override_keyword",
            "virtual_function",
            "super_keyword",
            "modifier_combination",
            "factory_pattern",
            "metadata_storage",
            "time_lock"
        ]
    },
    15: {
        title: "Day 15 - Gas优化投票",
        subtitle: "高效节能投票/GasEfficientVoting",
        concepts: [
            "compact_datatype",
            "uint8_uint32",
            "bytes32_string",
            "storage_optimization",
            "bit_operation",
            "mapping_storage",
            "mask_check",
            "timestamp_block",
            "event_logging"
        ]
    },
    16: {
        title: "Day 16 - 插件存储系统",
        subtitle: "动态插件注册与低级别调用/PluginStore",
        concepts: [
            "struct_definition",
            "mapping_storage",
            "plugin_registration",
            "low_level_call",
            "abi_encoding",
            "staticcall",
            "dynamic_delegation",
            "contract_interop"
        ]
    },
    17: {
        title: "Day 17",
        subtitle: "可升级合约/UpgradeHub",
        concepts: [
            "proxy_pattern",
            "delegatecall",
            "storage_layout",
            "upgrade_mechanism",
            "logic_contract",
            "fallback_function",
            "data_persistence",
            "version_control"
        ]
    },
    18: {
        title: "Day 18 - 预言机与参数保险",
        subtitle: "预言机/OracleContract",
        concepts: [
            "oracle_interface",
            "eth_usd_oracle",
            "random_generation",
            "purchase_insurance",
            "price_conversion",
            "parametric_payout",
            "cooldown_mechanism",
            "contract_balance"
        ]
    },
    19: {
        title: "Day 19 - 基于签名的活动参与",
        subtitle: "ECDSA签名验证/SignThis",
        concepts: [
            "keccak256_hash",
            "ecdsa_signature",
            "signature_rsv",
            "eip191_prefix",
            "ecrecover",
            "require_statement",
            "mapping_storage",
            "msg_sender"
        ]
    },
    20: {
        title: "Day 20 - 重入攻击与防护",
        subtitle: "重入攻击/ReentrancyAttack",
        concepts: [
            "reentrancy_attack",
            "fallback_receive",
            "vulnerable_withdraw",
            "deposit_function",
            "checks_effects_interactions",
            "reentrancy_guard",
            "contract_balance",
            "code_comparison"
        ]
    },
    21: {
        title: "Day 21 - NFT数字藏品",
        subtitle: "ERC721标准/SimpleNFT",
        concepts: [
            "ierc721_interface",
            "mint_function",
            "token_id_counter",
            "token_uri",
            "balance_of",
            "transfer_from",
            "approve_mechanism",
            "approval_for_all",
            "safe_transfer"
        ]
    },
    22: {
        title: "Day 22 - 公平链上彩票",
        subtitle: "公平链上彩票/FairChainLottery",
        concepts: [
            "chainlink_vrf",
            "random_number_generation",
            "lottery_state_machine",
            "time_lock",
            "request_randomness",
            "fulfill_random_words",
            "prize_distribution",
            "lottery_security"
        ]
    },
    23: {
        title: "Day 23 - 借贷协议",
        subtitle: "去中心化借贷/SimpleLending",
        concepts: [
            "lending_pool",
            "collateral_deposit",
            "borrow_mechanism",
            "health_factor",
            "liquidation_threshold",
            "interest_calculation",
            "repay_function",
            "lending_security"
        ]
    },
    24: {
        title: "Day 24 - 增强型托管",
        subtitle: "第三方托管/EnhancedSimpleEscrow",
        concepts: [
            "escrow_contract",
            "buyer_seller_arbitration",
            "dispute_resolution",
            "time_locked_release",
            "mutual_cancellation",
            "arbiter_role",
            "multi_party_security",
            "state_management"
        ]
    },
    25: {
        title: "Day 25 - 自动化做市商",
        subtitle: "自动化做市商/AutomatedMarketMaker",
        concepts: [
            "amm_formula",
            "liquidity_pool",
            "constant_product",
            "add_liquidity",
            "swap_mechanism",
            "remove_liquidity",
            "slippage_calculation",
            "reserves_management"
        ]
    },
    26: {
        title: "Day 26 - NFT市场",
        subtitle: "去中心化交易/NFTMarketplace",
        concepts: [
            "nft_marketplace",
            "listing_mechanism",
            "royalty_payment",
            "marketplace_security",
            "buy_now_price",
            "cancel_listing",
            "nft_escrow",
            "owner_revenue"
        ]
    },
    27: {
        title: "Day 27 - 收益耕作",
        subtitle: "DeFi质押/YieldFarming",
        concepts: [
            "reward_debt_pattern",
            "staking_token_decimals",
            "time_weighted_calculation",
            "reentrancy_guard",
            "stake_function",
            "unstake_function",
            "claim_rewards",
            "emergency_withdraw"
        ]
    },
    28: {
        title: "Day 28 - 去中心化治理",
        subtitle: "DAO治理/DecentralizedGovernance",
        concepts: [
            "token_governance",
            "timelock_mechanism",
            "quorum_threshold",
            "proposal_state_machine",
            "proposal_struct",
            "voting_function",
            "finalize_function",
            "low_level_call",
            "reentrancy_guard"
        ]
    },
    29: {
        title: "Day 29 - 简单稳定币",
        subtitle: "超额抵押稳定币/SimpleStablecoin",
        concepts: [
            "over_collateralization",
            "collateral_ratio",
            "price_oracle",
            "health_factor",
            "decimal_conversion",
            "deposit_collateral",
            "mint_stablecoin",
            "burn_stablecoin",
            "withdraw_collateral",
            "liquidation"
        ]
    }
};

export const getFullCode = (day) => {
    if (day === 1) {
        return `//SPDx-License-Identifier:MIT

// 声明Solidity版本，要求编译器版本在0.8.0或更高（但低于0.9.0）
pragma solidity ^0.8.0;

// 定义一个名为clickcounter的合约（相当于其他语言中的类）
contract clickcounter {
    // 声明一个无符号256位整数类型的状态变量counter
    // public关键字表示这个变量可以被外部访问，编译器会自动生成getter函数
    uint256 public counter;

    // 定义一个名为click的公共函数
    // public表示任何人都可以调用这个函数
    function click() public {
        // 将counter的值加1（自增操作）
        counter++;
    }
}`;
    } else if (day === 2) {
        return `// SPDX-License-Identifier:MIT

// 声明Solidity版本，要求编译器版本在0.8.0或更高（但低于0.9.0）
pragma solidity ^0.8.0;

// 定义一个名为SaveMyName的合约，用于存储和检索姓名与简介
contract SaveMyName{
     
  // 声明一个字符串类型的私有状态变量name（默认私有）
  string name;
  
  // 声明一个字符串类型的私有状态变量bio（默认私有）
  string bio;

  // 定义一个名为add的公共函数，用于设置姓名和简介
  // memory关键字表示参数数据存储在内存中（临时存储）
  // _name 和 _bio 是函数参数（参数名通常用下划线前缀表示）
  function add (string memory _name, string memory _bio )public {
    // 将传入的_name值赋给状态变量name
    name = _name;
    
    // 将传入的_bio值赋给状态变量bio
    bio = _bio;
  }

  // 定义一个名为retrieve的公共函数，用于获取姓名和简介
  // view关键字表示该函数只读取状态变量，不修改任何状态（不消耗gas）
  // returns声明返回值类型为两个字符串
  function retrieve() public view returns(string memory, string memory){
    // 返回name和bio的值（以元组形式返回多个值）
    return (name,bio);
  }

}`;
    } else if (day === 3) {
        return `// SPDX-License-Identifier:MIT

// 声明Solidity版本，要求编译器版本在0.8.0或更高（但低于0.9.0）
pragma solidity ^0.8.0;

// 定义一个名为PollStation的合约，用于管理投票
contract PollStation{
    // 声明一个公共字符串数组，用于存储候选人姓名
    // public关键字表示外部可以访问，编译器会自动生成getter函数
    string[] public candidateNames;
    
    // 声明一个映射，用于存储每个候选人的得票数
    // 映射类型：键是字符串（候选人姓名），值是uint256（票数）
    mapping(string => uint256) voteCount;

    // 定义一个名为addCandidateNames的公共函数，用于添加候选人
    // memory关键字表示参数数据存储在内存中（临时存储）
    function addCandidateNames(string memory _candidateNames) public{
        // 使用push方法将候选人姓名添加到数组末尾
        candidateNames.push(_candidateNames);
        
        // 初始化该候选人的票数为0
        voteCount[_candidateNames] = 0;
    }

    // 定义一个名为vote的公共函数，用于投票
    function vote(string memory _candidateNames) public{
        // 使用复合赋值运算符+=，将指定候选人的票数加1
        // 等同于：voteCount[_candidateNames] = voteCount[_candidateNames] + 1;
        voteCount[_candidateNames] += 1;
    }

    // 定义一个名为getVoteCount的公共视图函数，用于获取候选人的票数
    // view关键字表示该函数只读取状态变量，不修改任何状态（不消耗gas）
    function getVoteCount(string memory _candidateNames) public view returns (uint256){
        // 返回指定候选人的票数
        return voteCount[_candidateNames];
    }
}`;
    } else if (day === 4) {
        return `// SPDX-License-Identifier: MIT
// 声明Solidity版本，要求编译器版本在0.8.0或更高（但低于0.9.0）
pragma solidity ^0.8.0;

// 定义一个名为AuctionHouse的合约，用于拍卖行功能
contract AuctionHouse {
    // 声明公共地址变量，存储拍卖行的所有者地址
    address public owner;
    
    // 声明公共字符串变量，存储拍卖物品的名称
    string public item;
    
    // 声明公共无符号整数，存储拍卖结束时间戳
    uint public auctionEndTime;
    
    // 声明私有地址变量，存储最高出价者的地址
    // private 表示只能在这个合约内部访问，外部无法直接读取
    address private highestBidder; // 获胜者是私有的，可以通过getWinner函数访问
    
    // 声明私有无符号整数，存储最高出价金额
    uint private highestBid;       // 最高出价是私有的，可以通过getWinner函数访问
    
    // 声明公共布尔变量，标记拍卖是否已结束
    bool public ended;

    // 声明映射，存储每个地址（竞拍者）的出价金额
    // 键是地址类型，值是无符号整数
    mapping(address => uint) public bids;
    
    // 声明地址数组，存储所有参与竞拍的地址
    address[] public bidders;

    // 构造函数：在合约部署时执行一次，用于初始化合约状态
    // 参数：_item是拍卖物品名称，_biddingTime是拍卖持续时间（秒）
    constructor(string memory _item, uint _biddingTime) {
        // 将部署合约的地址（发送者）设置为所有者
        owner = msg.sender;
        
        // 设置拍卖物品名称
        item = _item;
        
        // 设置拍卖结束时间：当前区块时间戳 + 拍卖持续时间
        // block.timestamp 是当前区块的时间戳（Unix时间，秒）
        auctionEndTime = block.timestamp + _biddingTime;
    }

    // 允许用户出价的函数
    // external 表示函数只能从合约外部调用（比public更省gas）
    function bid(uint amount) external {
        // require是条件检查函数，如果条件为false则回滚交易并显示错误信息
        // 检查当前时间是否早于拍卖结束时间，确保拍卖未结束
        require(block.timestamp < auctionEndTime, "Auction has already ended.");
        
        // 检查出价金额是否大于0
        require(amount > 0, "Bid amount must be greater than zero.");
        
        // 检查新出价是否高于该竞拍者当前的出价
        require(amount > bids[msg.sender], "New bid must be higher than your current bid.");

        // 如果该竞拍者之前没有出价（出价为0），则将其添加到竞拍者数组
        if (bids[msg.sender] == 0) {
            bidders.push(msg.sender);
        }

        // 更新该竞拍者的出价金额
        bids[msg.sender] = amount;

        // 如果新出价高于当前最高出价，则更新最高出价和最高出价者
        if (amount > highestBid) {
            highestBid = amount;
            highestBidder = msg.sender;
        }
    }

    // 结束拍卖的函数（只能在拍卖时间结束后调用）
    function endAuction() external {
        // 检查当前时间是否已达到或超过拍卖结束时间
        require(block.timestamp >= auctionEndTime, "Auction hasn't ended yet.");
        
        // 检查拍卖是否已经结束（防止重复调用）
        require(!ended, "Auction end already called.");

        // 将ended标记设置为true，表示拍卖已结束
        ended = true;
    }

    // 获取所有竞拍者列表的函数
    function getAllBidders() external view returns (address[] memory) {
        // 返回竞拍者地址数组
        return bidders;
    }

    // 获取拍卖获胜者和其出价的函数（仅在拍卖结束后可调用）
    function getWinner() external view returns (address, uint) {
        // 检查拍卖是否已结束
        require(ended, "Auction has not ended yet.");
        
        // 返回最高出价者的地址和最高出价金额
        return (highestBidder, highestBid);
    }
}`;
    } else if (day === 5) {
        return `// SPDX-License-Identifier: MIT
// 声明Solidity版本，要求编译器版本在0.8.0或更高（但低于0.9.0）
pragma solidity ^0.8.0;

// 定义一个名为AdminOnly的合约，用于管理员权限控制的宝库管理
contract AdminOnly {
    // 状态变量区域
    
    // 声明公共地址变量，存储合约所有者的地址
    address public owner;
    
    // 声明公共无符号整数，存储宝库中的宝藏数量
    uint256 public treasureAmount;
    
    // 声明映射，存储每个地址的提款额度
    // 键是地址，值是该地址允许提取的宝藏数量
    mapping(address => uint256) public withdrawalAllowance;
    
    // 声明映射，记录每个地址是否已经提取过宝藏
    // 键是地址，值是布尔值（true表示已提取，false表示未提取）
    mapping(address => bool) public hasWithdrawn;
    
    // 构造函数：合约部署时执行一次，将部署者设置为所有者
    constructor() {
        owner = msg.sender;
    }
    
    // 修饰符：用于限制只有所有者才能调用某些函数
    // modifier 可以理解为函数的"前置条件检查"
    modifier onlyOwner() {
        // 检查调用者是否为所有者，如果不是则回滚交易并显示错误信息
        require(msg.sender == owner, "Access denied: Only the owner can perform this action");
        
        // _; 表示执行修饰符后的函数体
        // 这是修饰符的语法，表示"通过检查后，继续执行被修饰的函数"
        _;
    }
    
    // 添加宝藏函数：只有所有者可以调用
    // onlyOwner 修饰符确保只有所有者能执行此函数
    function addTreasure(uint256 amount) public onlyOwner {
        // 将指定数量的宝藏添加到宝库中
        treasureAmount += amount;
    }
    
    // 批准提款函数：只有所有者可以调用，用于给用户分配提款额度
    function approveWithdrawal(address recipient, uint256 amount) public onlyOwner {
        // 检查批准的额度是否不超过宝库中现有的宝藏数量
        require(amount <= treasureAmount, "Not enough treasure available");
        
        // 为指定地址设置提款额度
        withdrawalAllowance[recipient] = amount;
    }
    
    
    // 提取宝藏函数：任何人都可以调用，但只有有额度且未提取过的用户才能成功
    function withdrawTreasure(uint256 amount) public {

        // 如果调用者是所有者，允许直接提取任意数量（在宝库范围内）
        if(msg.sender == owner){
            // 检查提取数量是否不超过宝库现有数量
            require(amount <= treasureAmount, "Not enough treasury available for this action.");
            
            // 从宝库中扣除指定数量的宝藏
            treasureAmount-= amount;

            // 直接返回，不执行后面的普通用户提款逻辑
            return;
        }
        
        // 获取调用者的提款额度
        uint256 allowance = withdrawalAllowance[msg.sender];
        
        // 检查用户是否有提款额度（额度必须大于0）
        require(allowance > 0, "You don't have any treasure allowance");
        
        // 检查用户是否已经提取过宝藏（不能重复提取）
        require(!hasWithdrawn[msg.sender], "You have already withdrawn your treasure");
        
        // 检查宝库中是否有足够的宝藏
        require(allowance <= treasureAmount, "Not enough treasure in the chest");
        
        // 检查用户尝试提取的数量是否不超过其允许的额度
        require(allowance >= amount, "Cannot withdraw more than you are allowed");
        
        // 标记该用户已经提取过宝藏
        hasWithdrawn[msg.sender] = true;
        
        // 从宝库中扣除用户额度对应的宝藏数量
        treasureAmount -= allowance;
        
        // 将用户的提款额度清零
        withdrawalAllowance[msg.sender] = 0;
        
    }
    
    // 重置提款状态函数：只有所有者可以调用，用于重置某个用户的提款状态
    function resetWithdrawalStatus(address user) public onlyOwner {
        // 将指定用户的提款状态重置为false（允许再次提取）
        hasWithdrawn[user] = false;
    }
    
    // 转移所有权函数：只有所有者可以调用，用于将合约所有权转移给新所有者
    function transferOwnership(address newOwner) public onlyOwner {
        // 检查新所有者地址是否有效（不能是零地址）
        // address(0) 表示零地址，是一个无效的地址
        require(newOwner != address(0), "Invalid address");
        
        // 将所有者更新为新地址
        owner = newOwner;
    }
    
    // 获取宝藏详情函数：只有所有者可以调用，查看宝库中的宝藏数量
    function getTreasureDetails() public view onlyOwner returns (uint256) {
        // 返回宝库中的宝藏数量
        return treasureAmount;
    }
}`;
    } else if (day === 6) {
        return `// SPDX-License-Identifier: MIT

// 声明Solidity版本，要求编译器版本在0.8.0或更高（但低于0.9.0）
pragma solidity ^0.8.0;

// 定义一个名为EtherPiggyBank的合约，用于以太坊存钱罐银行功能
contract EtherPiggyBank{

    // 状态变量区域
    
    // 声明银行管理员的地址
    // 银行管理员具有特殊权限，可以添加新成员
    address public bankManager;
    
    // 声明地址数组，存储所有已注册的会员地址
    address[] members;
    
    // 声明映射，记录每个地址是否已注册为会员
    // 键是地址，值是布尔值（true表示已注册，false表示未注册）
    mapping(address => bool) public registeredMembers;
    
    // 声明映射，记录每个地址的账户余额
    // 键是地址，值是该地址的余额（以wei为单位）
    mapping(address => uint256) balance;

    // 构造函数：合约部署时执行一次，初始化银行管理员
    constructor(){
        // 将部署合约的地址设置为银行管理员
        bankManager = msg.sender;
        
        // 将银行管理员添加到会员数组中（管理员默认是会员）
        members.push(msg.sender);
    }

    // 修饰符：限制只有银行管理员才能调用某些函数
    modifier onlyBankManager(){
        // 检查调用者是否为银行管理员，如果不是则回滚交易
        require(msg.sender == bankManager, "Only bank manager can perform this action");
        
        // 继续执行被修饰的函数
        _;
    }

    // 修饰符：限制只有已注册的会员才能调用某些函数
    modifier onlyRegisteredMember() {
        // 检查调用者是否为已注册的会员，如果不是则回滚交易
        require(registeredMembers[msg.sender], "Member not registered");
        
        // 继续执行被修饰的函数
        _;
    }
  
    // 添加会员函数：只有银行管理员可以调用，用于添加新会员
    function addMembers(address _member)public onlyBankManager{
        // 检查新会员地址是否有效（不能是零地址）
        require(_member != address(0), "Invalid address");
        
        // 检查是否尝试添加银行管理员本人（管理员已经是会员）
        require(_member != msg.sender, "Bank Manager is already a member");
        
        // 检查该地址是否已经是注册会员
        require(!registeredMembers[_member], "Member already registered");
        
        // 将该地址标记为已注册会员
        registeredMembers[_member] = true;
        
        // 将该地址添加到会员数组中
        members.push(_member);
    }

    // 获取会员列表函数：任何人都可以调用，返回所有会员地址
    function getMembers() public view returns(address[] memory){
        // 返回会员地址数组
        return members;
    }
    
    // 存入以太币函数：只有已注册会员可以调用
    // payable 关键字表示该函数可以接收以太币
    function depositAmountEther() public payable onlyRegisteredMember{  
        // 检查发送的以太币数量是否大于0
        // msg.value 是调用函数时发送的以太币数量（以wei为单位）
        require(msg.value > 0, "Invalid amount");
        
        // 将发送的以太币数量累加到调用者的余额中
        balance[msg.sender] = balance[msg.sender]+msg.value;
   
    }
    
    // 提取金额函数：只有已注册会员可以调用，用于提取余额
    function withdrawAmount(uint256 _amount) public onlyRegisteredMember{
        // 检查提取金额是否大于0
        require(_amount > 0, "Invalid amount");
        
        // 检查调用者的余额是否足够
        require(balance[msg.sender] >= _amount, "Insufficient balance");
        
        // 从调用者的余额中扣除提取的金额
        balance[msg.sender] = balance[msg.sender]-_amount;
   
    }

    // 获取余额函数：任何人都可以调用，查询指定会员的余额
    function getBalance(address _member) public view returns (uint256){
        // 检查查询的地址是否有效
        require(_member != address(0), "Invalid address");
        
        // 返回指定会员的余额
        return balance[_member];
    } 
}`;
    } else if (day === 7) {
        return `//SPDX-License-Identifier: MIT

// 声明Solidity版本，要求编译器版本在0.8.0或更高（但低于0.9.0）
pragma solidity ^0.8.0;

// 定义一个名为SimpleIOU的合约，用于朋友间的借条（IOU）管理
contract SimpleIOU{
    // 声明合约所有者的地址
    address public owner;
    
    // 跟踪已注册的朋友
    // 映射：地址 -> 是否已注册（布尔值）
    mapping(address => bool) public registeredFriends;
    
    // 地址数组：存储所有已注册朋友的地址列表
    address[] public friendList;
    
    // 跟踪每个朋友的余额
    // 映射：地址 -> 余额（以太币数量）
    mapping(address => uint256) public balances;
    
    // 简单的债务跟踪系统
    // 嵌套映射：债务人地址 -> 债权人地址 -> 欠款金额
    // 映射结构：mapping(键1 => mapping(键2 => 值))
    mapping(address => mapping(address => uint256)) public debts; // 债务人 -> 债权人 -> 金额
    
    // 构造函数：合约部署时执行一次，初始化合约
    constructor() {
        // 将部署合约的地址设置为所有者
        owner = msg.sender;
        
        // 将所有者注册为朋友（所有者默认是已注册用户）
        registeredFriends[msg.sender] = true;
        
        // 将所有者添加到朋友列表中
        friendList.push(msg.sender);
    }
    
    // 修饰符：限制只有所有者才能调用某些函数
    modifier onlyOwner() {
        require(msg.sender == owner, "Only owner can perform this action");
        _;
    }
    
    // 修饰符：限制只有已注册的朋友才能调用某些函数
    modifier onlyRegistered() {
        require(registeredFriends[msg.sender], "You are not registered");
        _;
    }
    
    // 添加新朋友函数：只有所有者可以调用，用于注册新朋友
    function addFriend(address _friend) public onlyOwner {
        // 检查朋友地址是否有效（不能是零地址）
        require(_friend != address(0), "Invalid address");
        
        // 检查该朋友是否已经注册
        require(!registeredFriends[_friend], "Friend already registered");
        
        // 将该地址标记为已注册朋友
        registeredFriends[_friend] = true;
        
        // 将该地址添加到朋友列表中
        friendList.push(_friend);
    }
    
    // 存款函数：将以太币存入你的钱包余额
    // payable 关键字表示该函数可以接收以太币
    function depositIntoWallet() public payable onlyRegistered {
        // 检查是否发送了以太币
        require(msg.value > 0, "Must send ETH");
        
        // 将发送的以太币数量累加到调用者的余额中
        balances[msg.sender] += msg.value;
    }
    
    // 记录债务函数：记录某人欠你钱
    function recordDebt(address _debtor, uint256 _amount) public onlyRegistered {
        // 检查债务人地址是否有效
        require(_debtor != address(0), "Invalid address");
        
        // 检查债务人是否已注册
        require(registeredFriends[_debtor], "Address not registered");
        
        // 检查金额是否大于0
        require(_amount > 0, "Amount must be greater than 0");
        
        // 记录债务：在嵌套映射中增加债务金额
        // 结构：debts[债务人][债权人] += 金额
        debts[_debtor][msg.sender] += _amount;
    }
    
    // 使用内部余额转账偿还债务
    function payFromWallet(address _creditor, uint256 _amount) public onlyRegistered {
        // 检查债权人地址是否有效
        require(_creditor != address(0), "Invalid address");
        
        // 检查债权人是否已注册
        require(registeredFriends[_creditor], "Creditor not registered");
        
        // 检查金额是否大于0
        require(_amount > 0, "Amount must be greater than 0");
        
        // 检查债务金额是否足够
        require(debts[msg.sender][_creditor] >= _amount, "Debt amount incorrect");
        
        // 检查余额是否足够
        require(balances[msg.sender] >= _amount, "Insufficient balance");
        
        // 更新余额和债务
        // 从债务人的余额中扣除金额
        balances[msg.sender] -= _amount;
        
        // 将金额添加到债权人的余额中
        balances[_creditor] += _amount;
        
        // 从债务记录中减少债务金额
        debts[msg.sender][_creditor] -= _amount;
    }
    
    // 直接转账方法：使用 transfer() 方法进行以太币转账
    function transferEther(address payable _to, uint256 _amount) public onlyRegistered {
        // 检查接收者地址是否有效
        require(_to != address(0), "Invalid address");
        
        // 检查接收者是否已注册
        require(registeredFriends[_to], "Recipient not registered");
        
        // 检查余额是否足够
        require(balances[msg.sender] >= _amount, "Insufficient balance");
        
        // 从发送者的余额中扣除金额
        balances[msg.sender] -= _amount;
        
        // 使用 transfer() 方法将以太币转账给接收者
        // transfer() 是一个安全的转账方法，会自动转发2300 gas
        _to.transfer(_amount);
        
        // 将金额添加到接收者的余额中
        balances[_to]+=_amount;
    }
    
    // 替代转账方法：使用 call() 方法进行以太币转账
    function transferEtherViaCall(address payable _to, uint256 _amount) public onlyRegistered {
        // 检查接收者地址是否有效
        require(_to != address(0), "Invalid address");
        
        // 检查接收者是否已注册
        require(registeredFriends[_to], "Recipient not registered");
        
        // 检查余额是否足够
        require(balances[msg.sender] >= _amount, "Insufficient balance");
        
        // 从发送者的余额中扣除金额
        balances[msg.sender] -= _amount;
        
        // 使用 call() 方法进行低级调用
        // call() 方法更灵活，可以设置 gas 限制
        // 返回值：success (bool) 表示调用是否成功
        // 第二个返回值是返回数据（这里不需要，用 _ 忽略）
        (bool success, ) = _to.call{value: _amount}("");
        
        // 将金额添加到接收者的余额中
        balances[_to]+=_amount;
        
        // 检查转账是否成功
        require(success, "Transfer failed");
    }
    
    // 提取函数：提取你的余额到外部钱包
    function withdraw(uint256 _amount) public onlyRegistered {
        // 检查余额是否足够
        require(balances[msg.sender] >= _amount, "Insufficient balance");
        
        // 从余额中扣除金额
        balances[msg.sender] -= _amount;
        
        // 使用 call() 方法将以太币转回给调用者
        // payable(msg.sender) 将地址转换为可支付地址
        (bool success, ) = payable(msg.sender).call{value: _amount}("");
        
        // 检查提取是否成功
        require(success, "Withdrawal failed");
    }
    
    // 查询余额函数：查看你的余额
    function checkBalance() public view onlyRegistered returns (uint256) {
        // 返回调用者的余额
        return balances[msg.sender];
    }
}`;
    } else if (day === 8) {
        return `//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract TipJar {
    // 合约的拥有者（管理员）地址
    address public owner;
    
    // 记录收到的打赏总金额
    uint256 public totalTipsReceived;
    
    // 汇率映射表：记录法币（如USD）到ETH的汇率
    mapping(string => uint256) public conversionRates;

    // 记录每个地址（人）打赏的金额
    mapping(address => uint256) public tipPerPerson;
    
    // 当前支持的代币/货币列表
    string[] public supportedCurrencies;
    
    // 记录每种货币收到的打赏总数
    mapping(string => uint256) public tipsPerCurrency;
    
    // 构造函数：初始化所有者和预设汇率
    constructor() {
        owner = msg.sender;
        addCurrency("USD", 5 * 10**14);  // 1 USD = 0.0005 ETH
        addCurrency("EUR", 6 * 10**14);
        addCurrency("JPY", 4 * 10**12);
        addCurrency("INR", 7 * 10**12);
    }
    
    // 自定义修饰符：限制只有管理员才能使用
    modifier onlyOwner() {
        require(msg.sender == owner, "Only owner can perform this action");
        _;
    }
    
    // 增加或更新支持的币种以及对等汇率
    function addCurrency(string memory _currencyCode, uint256 _rateToEth) public onlyOwner {
        require(_rateToEth > 0, "Conversion rate must be greater than 0");
        bool currencyExists = false;
        for (uint i = 0; i < supportedCurrencies.length; i++) {
            if (keccak256(bytes(supportedCurrencies[i])) == keccak256(bytes(_currencyCode))) {
                currencyExists = true;
                break;
            }
        }
        if (!currencyExists) {
            supportedCurrencies.push(_currencyCode);
        }
        conversionRates[_currencyCode] = _rateToEth;
    }
    
    // 核心换算模块：计算法币金额对应的 ETH (wei)
    function convertToEth(string memory _currencyCode, uint256 _amount) public view returns (uint256) {
        require(conversionRates[_currencyCode] > 0, "Currency not supported");
        return _amount * conversionRates[_currencyCode];
    }
    
    // 直接发送 ETH 打赏
    function tipInEth() public payable {
        require(msg.value > 0, "Tip amount must be greater than 0");
        tipPerPerson[msg.sender] += msg.value;
        totalTipsReceived += msg.value;
        tipsPerCurrency["ETH"] += msg.value;
    }
    
    // 指定货法币进行打赏
    function tipInCurrency(string memory _currencyCode, uint256 _amount) public payable {
        require(conversionRates[_currencyCode] > 0, "Currency not supported");
        require(_amount > 0, "Amount must be greater than 0");
        
        uint256 ethAmount = convertToEth(_currencyCode, _amount);
        require(msg.value == ethAmount, "Sent ETH doesn't match the converted amount");
        
        tipPerPerson[msg.sender] += msg.value;
        totalTipsReceived += msg.value;
        tipsPerCurrency[_currencyCode] += _amount;
    }

    // 提现函数：管理员提取合约内的全部资金
    function withdrawTips() public onlyOwner {
        uint256 contractBalance = address(this).balance;
        require(contractBalance > 0, "No tips to withdraw");
        
        (bool success, ) = payable(owner).call{value: contractBalance}("");
        require(success, "Transfer failed");
        
        totalTipsReceived = 0;
    }
  
    // 权限转移
    function transferOwnership(address _newOwner) public onlyOwner {
        require(_newOwner != address(0), "Invalid address");
        owner = _newOwner;
    }

    function getSupportedCurrencies() public view returns (string[] memory) {
        return supportedCurrencies;
    }

    function getContractBalance() public view returns (uint256) {
        return address(this).balance;
    }
}`;
    } else if (day === 9) {
        return `// ==================== 文件 1: day9-Calculator.sol ====================

//SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "./day9-ScientificCalculator.sol";

contract Calculator{

    address public owner; // 当前合约的创建者
    address public scientificCalculatorAddress; // 外部高级科学计算器(ScientificCalculator)合约所在的地址

    constructor(){
        owner = msg.sender; // 赋予创建者这所合约的主人权限
    }

    // 限定操作者必须是 owner 的修饰符
    modifier onlyOwner() {
        require(msg.sender == owner, "Only owner can do this action");
         _;  // 指代原本应用此修改器的接下来的执行流
    }

    // 让系统知晓高级计算器究竟被部署在哪个地址。只要知道了对方合约的地址，才能对其进行外部通信调用
    function setScientificCalculator(address _address)public onlyOwner{
        scientificCalculatorAddress = _address;
        }

    // 基础的加法，pure的意思是说它是"纯"函数，既不消耗或修改区块链状态，又跟外界毫无联动。这类型的函数不仅执行快速而且不收Gas燃料费(本地查看时)
    function add(uint256 a, uint256 b)public pure returns(uint256){
        uint256 result = a+b;
        return result;
    }

    function subtract(uint256 a, uint256 b)public pure returns(uint256){
        uint256 result = a-b;
        return result;
    }

    function multiply(uint256 a, uint256 b)public pure returns(uint256){
        uint256 result = a*b;
        return result;
    }

    function divide(uint256 a, uint256 b)public pure returns(uint256){
        require(b!= 0, "Cannot divide by zero");
        uint256 result = a/b;
        return result;
    }

    // 计算指数功能：这是一个高级计算功能所以我们利用跨合约互调。这体现了区块链合约的组合式应用（所谓乐高积木）
    function calculatePower(uint256 base, uint256 exponent)public view returns(uint256){

    // 方法一（常规方法）：将外部合约视作对象进行实例对象的创建，然后按接口标准来调用
    ScientificCalculator scientificCalc = ScientificCalculator(scientificCalculatorAddress);

    // external call （对外发起合约调用）
    // 当前合约（Calculator）在背后会去请求被指定地址的（ScientificCalculator）完成这项计算
    uint256 result = scientificCalc.power(base, exponent);

    return result;

}

    // 获取平方运算的操作：这里演示了另外一种更基层的跨合约联调操作手段：底层 call 方法
    function calculateSquareRoot(uint256 number)public returns (uint256){
        require(number >= 0 , "Cannot calculate square root of negative nmber");

        // 使用 abi.encodeWithSignature 来明确编码函数名称和附带的具体传参变量
        // 这个生成的16进制短字符数据就是待发送请求的方法执行代号，(注意函数的签名内不准出现空格：squareRoot(int256))
        bytes memory data = abi.encodeWithSignature("squareRoot(int256)", number);
        
        // 对另外一个以太坊地址使用底层的 .call() 将参数打入进去尝试引动相应的执行功能
        // .call() 会始终返还两个值：调用情况的状态(布尔) 和如果它顺利返回带出的数据字节(returnData)
        (bool success, bytes memory returnData) = scientificCalculatorAddress.call(data);
        require(success, "External call failed"); // 安全编程习惯之一，处理它底层执行没有回弹失败并致使出错的情况
        
        // 最后通过利用 abi.decode 把取回的一串原始数据（returnData）解密成我们需要能阅读懂的具体数字 (uint256类型)
        uint256 result = abi.decode(returnData, (uint256));
        return result;
    }

    
}


// ==================== 文件 2: day9-ScientificCalculator.sol ====================

//SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

contract ScientificCalculator{

    // 求基数(base) 的给定指次数 (exponent) 的结果。pure同样表明只是本地的简单输出纯逻辑计算。
    function power(uint256 base, uint256 exponent)public pure returns(uint256){
        if(exponent == 0)return 1; // 零次方均为 1
        else return (base ** exponent); // '**' 在Solidity等价于指数的意思
    }

    // 以牛顿法逼近求取输入数的平方根 （Solidity 因为不具备浮点数运算支持这使这种开箱式求近似正变得常用）
    function squareRoot(int256 number)public pure returns(int256){
        require(number >= 0, "Cannot calculate square root of negative number"); // 数学要求被开方根必须不是负的
        if(number == 0)return 0;

        int256 result = number/2; // 原始预估近似值
        // 为保证它不仅消耗光所有的手续费且死锁(Gas exhausted), 人为限制让逼近只能进行 10 轮
        // 虽然轮次限制代表得不到精确数字，但足够反映逼近的过程
        for(uint256 i = 0; i<10; i++){
            result = (result + number / result)/2; // 牛顿迭代法的基础公约公式
        }

        return result; // 反馈出求取之后的收敛值
    }
}`;
    } else if (day === 10) {
        return `//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract ActivityTracker {
    // 合约所有者地址，用于权限管理
    address public owner;
    
    // 用户资料结构体：存储用户的基本信息
    struct UserProfile {
        string name;        // 用户姓名
        uint256 weight;     // 用户体重
        bool isRegistered;  // 是否已注册标记
    }
    
    // 运动活动结构体：存储单次运动的详细信息
    struct WorkoutActivity {
        string activityType; // 运动类型（如：跑步、游泳、骑行等）
        uint256 duration;    // in seconds / 运动时长（单位：秒）
        uint256 distance;    // in meters / 运动距离（单位：米）
        uint256 timestamp;   // 运动记录时间戳
    }
    
    // 用户地址 => 用户资料的映射，用于存储每个注册用户的基本信息
    mapping(address => UserProfile) public userProfiles;
    
    // 用户地址 => 运动历史数组的映射，存储每个用户的所有运动记录
    mapping(address => WorkoutActivity[]) private workoutHistory;
    
    // 用户地址 => 总运动次数的映射
    mapping(address => uint256) public totalWorkouts;
    
    // 用户地址 => 总运动距离的映射
    mapping(address => uint256) public totalDistance;
    
    // 事件定义：用于记录重要的合约操作，方便前端监听和日志查询
    event UserRegistered(address indexed userAddress, string name, uint256 timestamp);
    event ProfileUpdated(address indexed userAddress, uint256 newWeight, uint256 timestamp);
    event WorkoutLogged(
        address indexed userAddress, 
        string activityType, 
        uint256 duration, 
        uint256 distance, 
        uint256 timestamp
    );
    event MilestoneAchieved(address indexed userAddress, string milestone, uint256 timestamp);
    
    // 构造函数：在合约部署时执行，设置合约部署者为所有者
    constructor() {
        owner = msg.sender;
    }
    
    // 仅限已注册用户修饰器：确保调用函数的用户已经完成注册
    modifier onlyRegistered() {
        require(userProfiles[msg.sender].isRegistered, "User not registered");
        _;
    }
    
    // 用户注册函数：允许新用户注册到系统中
    function registerUser(string memory _name, uint256 _weight) public {
        // 检查用户是否已注册，防止重复注册
        require(!userProfiles[msg.sender].isRegistered, "User already registered");
        
        // 创建新的用户资料并存储
        userProfiles[msg.sender] = UserProfile({
            name: _name,
            weight: _weight,
            isRegistered: true
        });
        
        // 触发用户注册事件
        emit UserRegistered(msg.sender, _name, block.timestamp);
    }
    
    // 更新体重函数：允许已注册用户更新体重，并检测是否达成减重目标
    function updateWeight(uint256 _newWeight) public onlyRegistered {
        // 使用storage关键字获取存储引用，直接修改原数据
        UserProfile storage profile = userProfiles[msg.sender];
        
        // 检查是否达成显著减重目标（减重5%或以上）
        if (_newWeight < profile.weight && (profile.weight - _newWeight) * 100 / profile.weight >= 5) {
            emit MilestoneAchieved(msg.sender, "Weight Goal Reached", block.timestamp);
        }
        
        // 更新体重
        profile.weight = _newWeight;
        
        // 触发资料更新事件
        emit ProfileUpdated(msg.sender, _newWeight, block.timestamp);
    }
    
    // 记录运动函数：允许已注册用户记录新的运动活动
    function logWorkout(
        string memory _activityType,
        uint256 _duration,
        uint256 _distance
    ) public onlyRegistered {
        // 创建新的运动活动记录
        WorkoutActivity memory newWorkout = WorkoutActivity({
            activityType: _activityType,
            duration: _duration,
            distance: _distance,
            timestamp: block.timestamp
        });
        
        // 将新记录添加到用户的运动历史中
        workoutHistory[msg.sender].push(newWorkout);
        
        // 更新用户的统计数据
        totalWorkouts[msg.sender]++;
        totalDistance[msg.sender] += _distance;
        
        // 触发运动记录事件
        emit WorkoutLogged(
            msg.sender,
            _activityType,
            _duration,
            _distance,
            block.timestamp
        );
        
        // 检查运动次数里程碑（10次、50次）
        if (totalWorkouts[msg.sender] == 10) {
            emit MilestoneAchieved(msg.sender, "10 Workouts Completed", block.timestamp);
        } else if (totalWorkouts[msg.sender] == 50) {
            emit MilestoneAchieved(msg.sender, "50 Workouts Completed", block.timestamp);
        }
        
        // 检查距离里程碑（100公里 = 100000米）
        if (totalDistance[msg.sender] >= 100000 && totalDistance[msg.sender] - _distance < 100000) {
            emit MilestoneAchieved(msg.sender, "100K Total Distance", block.timestamp);
        }
    }
    
    // 获取用户运动次数函数：返回当前登录用户的运动记录数量
    function getUserWorkoutCount() public view onlyRegistered returns (uint256) {
        return workoutHistory[msg.sender].length;
    }
}`;
    } else if (day === 11) {
        return `// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

// ==================== 父合约：Ownable.sol ====================
// 基础所有权管理合约，可被其他合约继承复用

contract Ownable {
    // private 可见性：只能在当前合约内部访问
    address private owner;
    
    // 构造函数：合约部署时执行一次，初始化所有者
    constructor() {
        owner = msg.sender;
    }
    
    // 事件日志：indexed 参数可以被过滤查询
    event OwnershipTransferred(
        address indexed previousOwner,  // indexed 允许按地址搜索事件
        address indexed newOwner
    );
    
    // 修饰符：限制只有所有者才能调用某些函数
    modifier onlyOwner() {
        require(msg.sender == owner, "Only owner can perform this action");
        _;  // 继续执行被修饰的函数
    }
    
    // 查看当前所有者
    function ownerAddress() public view returns (address) {
        return owner;
    }
    
    // 转移所有权（只有所有者可以调用）
    function transferOwnership(address newOwner) public onlyOwner {
        require(newOwner != address(0), "Invalid address: cannot be zero address");
        address oldOwner = owner;
        owner = newOwner;
        emit OwnershipTransferred(oldOwner, newOwner);
    }
}

// ==================== 子合约：VaultMaster.sol ====================
// 资金保险库合约，继承 Ownable 的所有权管理功能

import "./Ownable.sol";

contract VaultMaster is Ownable {
    // 合约余额（实际上使用 address(this).balance）
    
    // 事件：记录成功的存款
    event DepositSuccessful(
        address indexed depositor,
        uint256 amount,
        uint256 timestamp
    );
    
    // 事件：记录成功的提款
    event WithdrawSuccessful(
        address indexed recipient,
        uint256 amount,
        uint256 timestamp
    );
    
    // 存款函数：任何人都可以存入 ETH
    function deposit() public payable {
        require(msg.value > 0, "Must send ETH to deposit");
        emit DepositSuccessful(msg.sender, msg.value, block.timestamp);
    }
    
    // 提款函数：只有所有者可以提取（继承的 onlyOwner 修饰符）
    function withdraw(address payable recipient, uint256 amount) public onlyOwner {
        require(recipient != address(0), "Invalid recipient address");
        require(amount > 0, "Amount must be greater than 0");
        require(address(this).balance >= amount, "Insufficient contract balance");
        
        // 转账到指定地址
        (bool success, ) = recipient.call{value: amount}("");
        require(success, "Transfer failed");
        
        emit WithdrawSuccessful(recipient, amount, block.timestamp);
    }
    
    // 查询合约余额
    function getBalance() public view returns (uint256) {
        return address(this).balance;
    }
}`;
    } else if (day === 12) {
        return `// SPDX-License-Identifier: MIT
// SPDX许可证标识符，指定代码使用MIT开源许可证
pragma solidity ^0.8.20;
// 指定Solidity编译器版本为0.8.20及以上，但小于0.9.0

// 简化版ERC20代币合约：ERC20是以太坊上最常用的代币标准，功能包括转账、授权、查询余额等
contract SimpleERC20 {
    // 代币基本信息
    string public name = "Web3 Compass";  // 代币全称
    string public symbol = "COM";          // 代币符号（交易时使用）
    uint8 public decimals = 18;            // 小数位数（18是标准值，1代币 = 10^18最小单位）
    uint256 public totalSupply;            // 代币总供应量

    // 余额映射：记录每个地址持有的代币数量，address => uint256: 地址 => 余额
    mapping(address => uint256) public balanceOf;
    // 授权额度映射（双重映射）：记录每个地址授权给其他地址可以使用的代币数量
    // address => address => uint256: 代币持有者 => 被授权者 => 授权额度
    // 例如：allowance[A][B] = 100 表示A授权B可以使用A的100个代币
    mapping(address => mapping(address => uint256)) public allowance;

    // 转账事件：当代币从一个地址转移到另一个地址时触发
    event Transfer(address indexed from, address indexed to, uint256 value);
    // 授权事件：当代币持有者授权他人使用自己的代币时触发
    event Approval(address indexed owner, address indexed spender, uint256 value);

    // 构造函数：在合约部署时创建所有代币并分配给部署者
    // _initialSupply 是用户输入的值（不含小数位）
    constructor(uint256 _initialSupply) {
        // 计算实际总供应量：用户输入值 × 10^decimals
        // 例如：输入1000，decimals为18，则实际创建 1000 * 10^18 个最小单位
        totalSupply = _initialSupply * (10 ** uint256(decimals));
        // 将所有代币分配给合约部署者
        balanceOf[msg.sender] = totalSupply;
        // 触发转账事件，表示从0地址（代表铸币）转账给部署者
        emit Transfer(address(0), msg.sender, totalSupply);
    }

    // 转账函数：调用者将自己的代币转给他人
    function transfer(address _to, uint256 _value) public returns (bool) {
        // 检查调用者余额是否足够
        require(balanceOf[msg.sender] >= _value, "Not enough balance");
        // 执行转账（内部函数）
        _transfer(msg.sender, _to, _value);
        return true;
    }

    // 授权函数：允许_spender从调用者账户中转走_value数量的代币
    function approve(address _spender, uint256 _value) public returns (bool) {
        // 设置授权额度
        allowance[msg.sender][_spender] = _value;
        // 触发授权事件
        emit Approval(msg.sender, _spender, _value);
        return true;
    }

    // 代转账函数（从他人账户转账）：调用者使用被授权的额度从_from地址向_to地址转账
    function transferFrom(address _from, address _to, uint256 _value) public returns (bool) {
        // 检查_from地址的余额是否足够
        require(balanceOf[_from] >= _value, "Not enough balance");
        // 检查调用者被授权的额度是否足够
        require(allowance[_from][msg.sender] >= _value, "Allowance too low");

        // 减少授权额度（已使用的部分）
        allowance[_from][msg.sender] -= _value;
        // 执行转账
        _transfer(_from, _to, _value);
        return true;
    }

    // 内部转账函数：internal修饰符表示只能在合约内部调用，这是实际执行转账逻辑的核心函数
    function _transfer(address _from, address _to, uint256 _value) internal {
        // 检查收款地址是否有效（不能是零地址）
        require(_to != address(0), "Invalid address");
        // 减少转出地址的余额
        balanceOf[_from] -= _value;
        // 增加转入地址的余额
        balanceOf[_to] += _value;
        // 触发转账事件
        emit Transfer(_from, _to, _value);
    }
}`;
    } else if (day === 13) {
        return `//SPDX-License-Identifier: MIT
// SPDX许可证标识符，指定代码使用MIT开源许可证

pragma solidity ^0.8.0;
// 指定Solidity编译器版本为0.8.0或更高，但不包括1.0.0

contract MyToken{
// 定义一个名为MyToken的合约，这是一个ERC20代币合约

    string public name = "Web3 Compass";
    // 代币名称，公开可读
    string public symbol = "WBT";
    // 代币符号（简称），公开可读
    uint8 public decimals = 18;
    // 代币小数位数，ERC20标准通常为18位，公开可读
    uint256 public totalSupply;
    // 代币总供应量，公开可读

    mapping(address => uint256) public balanceOf;
    // 地址到余额的映射，记录每个地址持有的代币数量
    mapping(address => mapping (address  => uint256)) public allowance;
    // 嵌套映射，记录授权额度：allowance[所有者][被授权者] = 授权金额

    event Transfer(address indexed from, address indexed to, uint256 value);
    // 转账事件，当代币被转移时触发，indexed表示可以按该字段搜索
    event Approval(address indexed owner, address indexed spender, uint256 value);
    // 授权事件，当所有者授权 spender 使用代币时触发

    constructor(uint256 _initialSupply){
    // 构造函数，合约部署时执行一次，传入初始供应量参数
        totalSupply = _initialSupply * (10 ** decimals);
        // 计算实际总供应量 = 初始值 × 10^18（考虑小数位）
        balanceOf[msg.sender] = totalSupply;
        // 将所有代币分配给合约部署者（创建者）
        emit Transfer(address(0), msg.sender, _initialSupply);
        // 触发转账事件，from地址为0表示这是新铸造的代币
    } 

    function _transfer(address _from, address _to, uint256 _value)internal virtual{
    // 内部转账函数，只能在合约内部调用，virtual表示可被重写
        require(_to != address(0), "Cannot transfer to the zero address");
        // 检查：不能转账到零地址（防止代币丢失）
        balanceOf[_from]-= _value;
        // 从发送者余额中扣除转账金额
        balanceOf[_to] += _value;
        // 向接收者余额中增加转账金额
        emit Transfer(_from, _to, _value);
        // 触发转账事件，记录这笔转账
    }
     function transfer(address _to, uint256 _value)public virtual returns (bool success){ 
     // 公共转账函数，允许用户直接转账自己的代币
        require(balanceOf[msg.sender] >= _value , "Not enough balance");
        // 检查：发送者余额必须足够
        _transfer(msg.sender, _to, _value);
        // 调用内部转账函数执行转账
        return true;
        // 返回true表示转账成功
    
    }

    function transferFrom(address _from, address _to, uint256 _value)public virtual returns(bool){
    // 代转账函数，用于被授权者代替所有者转账（如交易所、DApp等场景）
        require(balanceOf[_from] >= _value, "Not enough balance");
        // 检查：所有者余额必须足够
        require(allowance[_from][msg.sender]>= _value, "Not enough allowence");
        // 检查：调用者的授权额度必须足够
        allowance[_from][msg.sender]-= _value;
        // 减少调用者的授权额度
        _transfer(_from, _to, _value);
        // 执行转账
        return true;
        // 返回true表示转账成功

    }

    function approve(address _spender, uint256 _value)public returns(bool){
    // 授权函数，允许_spender使用调用者最多_value数量的代币
        allowance[msg.sender][_spender] = _value;
        // 设置授权额度
        emit Approval(msg.sender, _spender, _value);
        // 触发授权事件
        return true;
        // 返回true表示授权成功

    }
}`;
    } else if (day === 14) {
        return `// ==================== 文件 1: IDepositBox.sol ====================
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

// 定义存款盒接口 - 规定所有存款盒必须实现的功能
interface IDepositBox {
    // 存入秘密的函数
    function storeSecret(string calldata secret) external;
    
    // 取出秘密的函数
    function getSecret() external view returns (string memory);
    
    // 转移所有权的函数
    function transferOwnership(address newOwner) external;
    
    // 获取盒子类型的函数
    function getBoxType() external view returns (string memory);
    
    // 获取当前所有者的函数
    function getOwner() external view returns (address);
}

// ==================== 文件 2: BaseDepositBox.sol ====================
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./IDepositBox.sol";

// 抽象基础合约 - 实现通用功能，但不能直接部署
abstract contract BaseDepositBox is IDepositBox {
    // 状态变量
    string internal secret;
    address internal owner;
    uint256 internal createdAt;
    
    // 修饰器：只有所有者可以调用
    modifier onlyOwner() {
        require(msg.sender == owner, "Only owner can call this function");
        _;
    }
    
    // 构造函数
    constructor() {
        owner = msg.sender;
        createdAt = block.timestamp;
    }
    
    // 虚函数：存入秘密（子合约可以重写）
    function storeSecret(string calldata _secret) public virtual onlyOwner {
        secret = _secret;
    }
    
    // 虚函数：取出秘密（子合约可以重写）
    function getSecret() public view virtual onlyOwner returns (string memory) {
        return secret;
    }
    
    // 转移所有权
    function transferOwnership(address newOwner) public virtual onlyOwner {
        require(newOwner != address(0), "New owner cannot be zero address");
        owner = newOwner;
    }
    
    // 获取当前所有者
    function getOwner() public view returns (address) {
        return owner;
    }
    
    // 纯虚函数：获取盒子类型（必须由子合约实现）
    function getBoxType() public view virtual returns (string memory);
}

// ==================== 文件 3: BasicDepositBox.sol ====================
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./BaseDepositBox.sol";

// 基础存款盒 - 简单继承，无额外功能
contract BasicDepositBox is BaseDepositBox {
    // 只继承父合约功能，不添加新功能
    
    function getBoxType() public view override returns (string memory) {
        return "Basic";
    }
}

// ==================== 文件 4: PremiumDepositBox.sol ====================
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./BaseDepositBox.sol";

// 高级存款盒 - 增加 metadata 功能
contract PremiumDepositBox is BaseDepositBox {
    // 额外的状态变量
    string private metadata;
    
    // 设置元数据
    function setMetadata(string calldata _metadata) public onlyOwner {
        metadata = _metadata;
    }
    
    // 获取元数据
    function getMetadata() public view onlyOwner returns (string memory) {
        return metadata;
    }
    
    // 重写获取盒子类型
    function getBoxType() public view override returns (string memory) {
        return "Premium";
    }
}

// ==================== 文件 5: TimeLockedDepositBox.sol ====================
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./BaseDepositBox.sol";

// 时间锁定存款盒 - 增加时间锁功能
contract TimeLockedDepositBox is BaseDepositBox {
    // 解锁时间戳
    uint256 private unlockTime;
    
    // 修饰器：检查是否已解锁
    modifier timeUnlocked() {
        require(block.timestamp >= unlockTime, "Box is still locked");
        _;
    }
    
    // 构造函数：设置锁定时间
    constructor(uint256 _lockDuration) {
        unlockTime = block.timestamp + _lockDuration;
    }
    
    // 重写存入秘密
    function storeSecret(string calldata _secret) public override onlyOwner {
        secret = _secret;
    }
    
    // 重写取出秘密：需要同时满足 onlyOwner 和 timeUnlocked
    function getSecret() public view override onlyOwner timeUnlocked returns (string memory) {
        return secret;
    }
    
    // 获取解锁时间
    function getUnlockTime() public view returns (uint256) {
        return unlockTime;
    }
    
    // 获取剩余锁定时间
    function getRemainingLockTime() public view returns (uint256) {
        if (block.timestamp >= unlockTime) {
            return 0;
        }
        return unlockTime - block.timestamp;
    }
    
    // 重写获取盒子类型
    function getBoxType() public view override returns (string memory) {
        return "TimeLocked";
    }
}

// ==================== 文件 6: VaultManager.sol ====================
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./BasicDepositBox.sol";
import "./PremiumDepositBox.sol";
import "./TimeLockedDepositBox.sol";

// 保险库管理器 - 工厂模式 + 管理功能
contract VaultManager {
    // 存储所有创建的存款盒
    address[] public allBoxes;
    
    // 记录每个用户拥有的存款盒
    mapping(address => address[]) public userBoxes;
    
    // 事件
    event BoxCreated(address indexed owner, address indexed boxAddress, string boxType);
    
    // 创建基础存款盒
    function createBasicBox() public returns (address) {
        BasicDepositBox newBox = new BasicDepositBox();
        address boxAddress = address(newBox);
        
        allBoxes.push(boxAddress);
        userBoxes[msg.sender].push(boxAddress);
        
        emit BoxCreated(msg.sender, boxAddress, "Basic");
        return boxAddress;
    }
    
    // 创建高级存款盒
    function createPremiumBox() public returns (address) {
        PremiumDepositBox newBox = new PremiumDepositBox();
        address boxAddress = address(newBox);
        
        allBoxes.push(boxAddress);
        userBoxes[msg.sender].push(boxAddress);
        
        emit BoxCreated(msg.sender, boxAddress, "Premium");
        return boxAddress;
    }
    
    // 创建时间锁定存款盒
    function createTimeLockedBox(uint256 _lockDuration) public returns (address) {
        TimeLockedDepositBox newBox = new TimeLockedDepositBox(_lockDuration);
        address boxAddress = address(newBox);
        
        allBoxes.push(boxAddress);
        userBoxes[msg.sender].push(boxAddress);
        
        emit BoxCreated(msg.sender, boxAddress, "TimeLocked");
        return boxAddress;
    }
    
    // 获取用户的所有存款盒
    function getMyBoxes() public view returns (address[] memory) {
        return userBoxes[msg.sender];
    }
    
    // 获取所有存款盒数量
    function getTotalBoxes() public view returns (uint256) {
        return allBoxes.length;
    }
    
    // 完成所有权转移（新所有者调用）
    function completeOwnershipTransfer(address boxAddress) public {
        IDepositBox box = IDepositBox(boxAddress);
        require(box.getOwner() == msg.sender, "You are not the new owner");
        
        userBoxes[msg.sender].push(boxAddress);
    }
}`;
    } else if (day === 15) {
        return `\ ==================== GasEfficientVoting.sol ====================
\\ SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

// Gas 优化投票合约
// 展示如何使用紧凑数据类型和位运算优化 Gas 消耗
contract GasEfficientVoting {

    // ==================== 紧凑数据类型优化 ====================

    // 使用 uint8 而非 uint256，节省 31 字节存储空间
    uint8 public proposalCount;  // 最多支持 255 个提案

    // 提案结构体 - 使用紧凑数据类型
    struct Proposal {
        uint32 id;           // 4 字节：提案 ID
        uint32 voteCount;    // 4 字节：投票数
        uint64 startTime;    // 8 字节：开始时间
        uint64 endTime;      // 8 字节：结束时间
        bool executed;       // 1 字节：是否已执行
        bytes32 name;        // 32 字节：固定长度名称（比 string 更省 Gas）
        address creator;     // 20 字节：创建者地址
    }

    // ==================== 映射存储 ====================

    // 提案 ID → 提案详情
    mapping(uint256 => Proposal) public proposals;

    // 地址 → 投票位图（1个 uint256 可存储 256 个提案的投票状态）
    mapping(address => uint256) public voterRegistry;

    // 提案 ID → 投票数（使用 uint32 足够大）
    mapping(uint256 => uint32) public proposalVoterCount;

    // ==================== 事件定义 ====================

    event ProposalCreated(uint256 indexed id, bytes32 name, uint256 endTime);
    event Voted(address indexed voter, uint256 indexed proposalId);
    event ProposalExecuted(uint256 indexed id, uint256 voteCount);

    // ==================== 核心功能 ====================

    // 创建提案
    function createProposal(bytes32 _name, uint256 _durationMinutes) public {
        uint256 proposalId = proposalCount;

        // 创建新提案
        proposals[proposalId] = Proposal({
            id: uint32(proposalId),
            voteCount: 0,
            startTime: uint64(block.timestamp),
            endTime: uint64(block.timestamp + _durationMinutes * 1 minutes),
            executed: false,
            name: _name,
            creator: msg.sender
        });

        proposalCount++;  // uint8 自动溢出检查

        emit ProposalCreated(proposalId, _name, block.timestamp + _durationMinutes * 1 minutes);
    }

    // 投票功能 - 使用位运算记录投票状态
    function vote(uint256 _proposalId) public {
        Proposal storage proposal = proposals[_proposalId];

        // 检查提案是否存在
        require(proposal.creator != address(0), "Proposal does not exist");
        require(!proposal.executed, "Proposal already executed");

        // 检查投票时间窗口
        require(block.timestamp >= proposal.startTime, "Voting not started");
        require(block.timestamp <= proposal.endTime, "Voting ended");

        // ==================== 位运算技巧 ====================

        // 生成掩码：1 左移 proposalId 位
        // 例如：proposalId = 5，mask = 0b100000 (二进制)
        uint256 mask = 1 << _proposalId;

        // 获取当前选民的投票位图
        uint256 voterData = voterRegistry[msg.sender];

        // 掩码检查：使用与运算检查是否已投票
        require((voterData & mask) == 0, "Already voted");

        // 记录投票：使用或运算设置对应位为 1
        voterRegistry[msg.sender] = voterData | mask;

        // 增加投票计数
        proposal.voteCount++;
        proposalVoterCount[_proposalId]++;

        emit Voted(msg.sender, _proposalId);
    }

    // 执行提案
    function executeProposal(uint256 _proposalId) public {
        Proposal storage proposal = proposals[_proposalId];

        // 检查提案是否存在
        require(proposal.creator != address(0), "Proposal does not exist");

        // 检查投票是否已结束
        require(block.timestamp > proposal.endTime, "Voting still in progress");

        // 检查是否已执行
        require(!proposal.executed, "Already executed");

        // 标记为已执行
        proposal.executed = true;

        emit ProposalExecuted(_proposalId, proposal.voteCount);
    }

    // ==================== 查询功能 ====================

    // 检查地址是否对某提案投过票
    function hasVoted(address _voter, uint256 _proposalId) public view returns (bool) {
        uint256 mask = 1 << _proposalId;
        uint256 voterData = voterRegistry[_voter];
        return (voterData & mask) != 0;
    }

    // 获取提案详情
    function getProposal(uint256 _proposalId) public view returns (
        uint32 id,
        bytes32 name,
        uint32 voteCount,
        uint64 startTime,
        uint64 endTime,
        bool executed,
        address creator
    ) {
        Proposal storage proposal = proposals[_proposalId];
        require(proposal.creator != address(0), "Proposal does not exist");

        return (
            proposal.id,
            proposal.name,
            proposal.voteCount,
            proposal.startTime,
            proposal.endTime,
            proposal.executed,
            proposal.creator
        );
    }

    // 获取选民的投票位图（用于调试）
    function getVoterBitmap(address _voter) public view returns (uint256) {
        return voterRegistry[_voter];
    }
}

\\ ==================== Gas 优化要点总结 ====================
\\
\\ 1. 紧凑数据类型：
\\    - uint8 (1 字节) 代替 uint256 (32 字节) 存储小范围数字
\\    - uint32 (4 字节) 存储投票数，最大值 42 亿
\\    - uint64 (8 字节) 存储时间戳，支持到公元 294,247 年
\\
\\ 2. 固定长度类型：
\\    - bytes32 (32 字节) 代替 string，避免动态存储开销
\\    - 适合存储固定长度的短文本和哈希值
\\
\\ 3. 位运算优化：
\\    - 1 个 uint256 (32 字节) 存储 256 个布尔值
\\    - 相比 mapping(uint256 => bool)，节省约 40% Gas
\\    - 关键操作：生成掩码(<<)、检查(&)、设置(|)
\\
\\ 4. 存储布局优化：
\\    - 将多个小变量打包到同一存储槽位
\\    - 减少存储读取次数，降低 Gas 消耗
\\
\\ 5. 事件日志：
\\    - 使用 indexed 参数实现链下高效检索
\
\    - 事件不占用状态存储，只消耗少量 Gas`;
    } else if (day === 16) {
        return `// ==================== PluginStore.sol ====================
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

// PluginStore - 插件存储合约
// 这是一个插件系统的核心合约，允许注册和调用各种插件
// 支持玩家资料管理和插件的动态调用
contract PluginStore {

    // ==================== 结构体定义 ====================
    // 玩家资料结构体
    // name: 玩家名称
    // avatar: 玩家头像标识
    struct PlayerProfile {
        string name;
        string avatar;
    }

    // ==================== 映射存储 ====================
    // 存储每个地址的玩家资料
    mapping(address => PlayerProfile) public profiles;

    // 存储已注册的插件
    // key: 插件标识符（字符串）
    // value: 插件合约地址
    mapping(string => address) public plugins;

    // ==================== 玩家资料管理 ====================
    // 设置玩家资料
    function setProfile(string memory _name, string memory _avatar) external {
        profiles[msg.sender] = PlayerProfile(_name, _avatar);
    }

    // 获取玩家资料
    function getProfile(address user) external view returns (string memory, string memory) {
        PlayerProfile memory profile = profiles[user];
        return (profile.name, profile.avatar);
    }

    // ==================== 插件注册 ====================
    // 注册插件
    function registerPlugin(string memory key, address pluginAddress) external {
        plugins[key] = pluginAddress;
    }

    // 获取插件地址
    function getPlugin(string memory key) external view returns (address) {
        return plugins[key];
    }

    // ==================== 低级别调用 (call) ====================
    // 执行插件函数（状态改变）
    function runPlugin(
        string memory key, 
        string memory functionSignature, 
        address user, 
        string memory argument
    ) external {
        // 获取插件地址
        address plugin = plugins[key];
        require(plugin != address(0), "Plugin not registered");

        // ABI编码函数调用数据
        bytes memory data = abi.encodeWithSignature(functionSignature, user, argument);

        // 使用 low-level call 调用插件合约
        (bool success, ) = plugin.call(data);
        require(success, "Plugin execution failed");
    }

    // ==================== 静态调用 (staticcall) ====================
    // 执行插件函数（只读视图）
    function runPluginView(
        string memory key, 
        string memory functionSignature, 
        address user
    ) external view returns (string memory) {
        address plugin = plugins[key];
        require(plugin != address(0), "No plugin found");

        // ABI编码函数调用数据
        bytes memory data = abi.encodeWithSignature(functionSignature, user);

        // 使用 staticcall 调用插件合约（不修改状态）
        (bool success, bytes memory result) = plugin.staticcall(data);
        require(success, "Plugin execution failed");

        // 解码返回数据
        return abi.decode(result, (string));
    }
}

// ==================== WeaponStorePlugin.sol ====================
// 武器商店插件合约
contract WeaponStorePlugin {
    // 存储每个用户当前装备的武器
    mapping(address => string) public equippedWeapon;

    // 设置用户的装备武器
    function setWeapon(address user, string memory weapon) public {
        equippedWeapon[user] = weapon;
    }

    // 获取用户当前装备的武器
    function getWeapon(address user) public view returns (string memory) {
        return equippedWeapon[user];
    }
}

// ==================== AchievementsPlugin.sol ====================
// 成就插件合约
contract AchievementsPlugin {
    // 存储每个用户的最新成就
    mapping(address => string) public latestAchievement;

    // 设置用户的成就
    function setAchievement(address user, string memory achievement) public {
        latestAchievement[user] = achievement;
    }

    // 获取用户的最新成就
    function getAchievement(address user) public view returns (string memory) {
        return latestAchievement[user];
    }
}

// ==================== 使用示例 ====================
// pluginStore.runPlugin("weapon", "setWeapon(address,string)", msg.sender, "Golden Axe");
// 这将调用名为 "weapon" 的插件的 setWeapon 函数，为用户装备 "Golden Axe"

// ==================== 核心概念总结 ====================
//
// 1. 结构体 (struct):
//    - 将多个相关数据组合成自定义类型
//    - PlayerProfile 包含 name 和 avatar
//
// 2. 映射 (mapping):
//    - 键值对存储，O(1) 读写效率
//    - profiles: address => PlayerProfile
//    - plugins: string => address
//
// 3. 低级别调用 (call/staticcall):
//    - call: 可修改状态的动态调用
//    - staticcall: 只读调用，保证不修改状态
//    - 返回 (bool success, bytes result)
//
// 4. ABI编码:
//    - abi.encodeWithSignature: 编码函数调用
//    - abi.decode: 解码返回值
//    - 函数选择器: 函数签名的前4字节(keccak256哈希)
//
// 5. 插件架构:
//    - 核心合约管理插件注册表
//    - 插件合约实现具体功能
//    - 动态委托实现功能扩展`;
    } else if (day === 17) {
        return `// ==================== day17-SubscriptionStorageLayout.sol ====================
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

// SubscriptionStorageLayout - 订阅存储布局合约
// 这是可升级合约架构中的基础合约
// 定义了所有存储变量，确保代理合约和逻辑合约的存储布局一致
// 存储布局的一致性是可升级合约的关键！
contract SubscriptionStorageLayout {

    // 当前逻辑合约地址
    // 代理合约使用此地址进行 delegatecall
    address public logicContract;

    // 合约所有者地址
    // 拥有升级合约等特权操作权限
    address public owner;

    // 订阅信息结构体
    // planId: 订阅计划 ID（如 1=基础版, 2=高级版）
    // expiry: 订阅过期时间戳（秒）
    // paused: 是否处于暂停状态（V2 新增字段）
    struct Subscription {
        uint8 planId;
        uint256 expiry;
        bool paused;
    }

    // 用户地址到订阅信息的映射
    // 存储每个用户的订阅详情
    mapping(address => Subscription) public subscriptions;

    // 计划 ID 到价格的映射
    // 存储每个订阅计划的价格（wei）
    mapping(uint8 => uint256) public planPrices;

    // 计划 ID 到持续时间的映射
    // 存储每个订阅计划的有效期（秒）
    mapping(uint8 => uint256) public planDuration;

    // 安全间隙 - 防止未来升级时存储冲突
    // 这是一个预留的存储空间，用于未来的存储变量
    // 如果不预留，添加新变量可能会与继承合约的存储发生冲突
    // 50 个 uint256 槽位提供了充足的安全缓冲
    uint256[50] private __gap;
}

// ==================== day17-SubscriptionStorage.sol ====================
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

// 导入存储布局合约
import "./day17-SubscriptionStorageLayout.sol";

// SubscriptionStorage - 订阅存储代理合约
// 这是可升级合约架构中的代理合约（Proxy）
// 负责存储所有数据，并将函数调用委托给逻辑实现合约
// 使用 delegatecall 实现数据和逻辑的分离
contract SubscriptionStorage is SubscriptionStorageLayout {

    // 构造函数
    // _logicContract: 初始逻辑合约地址
    constructor(address _logicContract) {
        owner = msg.sender;           // 设置合约所有者
        logicContract = _logicContract;  // 设置初始逻辑合约
    }

    // 升级逻辑合约（仅合约所有者）
    // _newLogic: 新的逻辑合约地址
    // 这是可升级合约的核心功能
    function upgradeTo(address _newLogic) external {
        require(msg.sender == owner, "Not owner");
        logicContract = _newLogic;
    }

    // 回退函数（fallback）- 处理所有未匹配的函数调用
    // 使用 delegatecall 将调用委托给逻辑合约
    // delegatecall 会在当前合约的存储上下文中执行逻辑合约的代码
    fallback() external payable {
        // 获取当前逻辑合约地址
        address impl = logicContract;
        require(impl != address(0), "Implementation not set");

        // 使用内联汇编执行 delegatecall
        assembly {
            // 1. 将调用数据（calldata）复制到内存位置 0
            calldatacopy(0, 0, calldatasize())

            // 2. 执行 delegatecall
            // delegatecall(gas, target, inOffset, inSize, outOffset, outSize)
            // 这会在当前合约的存储上下文中执行 impl 合约的代码
            let result := delegatecall(gas(), impl, 0, calldatasize(), 0, 0)

            // 3. 将返回数据复制到内存
            returndatacopy(0, 0, returndatasize())

            // 4. 根据调用结果返回或回滚
            switch result
            case 0 {
                revert(0, returndatasize())
            }
            default {
                return(0, returndatasize())
            }
        }
    }

    // 接收函数（receive）- 处理纯 ETH 转账
    receive() external payable {}
}

// ==================== day17-SubscriptionLogicV1.sol ====================
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

// 导入存储布局合约
import "./day17-SubscriptionStorageLayout.sol";

// SubscriptionLogicV1 - 订阅逻辑合约 V1
// 这是可升级合约架构中的逻辑实现合约
// 使用代理模式（Proxy Pattern）实现合约升级
// 注意: 逻辑合约本身不存储数据，数据存储在代理合约中
contract SubscriptionLogicV1 is SubscriptionStorageLayout {

    // 初始化函数
    function initialize() external {
        // 可用于设置初始状态
    }

    // 创建订阅计划（仅合约所有者）
    function createPlan(uint8 planId, uint256 price, uint256 duration) external {
        require(msg.sender == owner, "Only owner");
        planPrices[planId] = price;
        planDuration[planId] = duration;
    }

    // 订阅计划
    function subscribe(uint8 planId) external payable {
        require(planPrices[planId] > 0, "Plan does not exist");
        require(msg.value == planPrices[planId], "Incorrect ETH amount");

        subscriptions[msg.sender] = Subscription({
            planId: planId,
            expiry: block.timestamp + planDuration[planId],
            paused: false
        });
    }

    // 检查用户是否处于有效订阅状态
    function isSubscribed(address user) external view returns (bool) {
        return subscriptions[user].expiry > block.timestamp;
    }
}

// ==================== day17-SubscriptionLogicV2.sol ====================
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

// 导入存储布局合约
import "./day17-SubscriptionStorageLayout.sol";

// SubscriptionLogicV2 - 订阅逻辑合约 V2
// 这是 V1 的升级版本，新增了暂停订阅功能
// 展示了可升级合约模式如何添加新功能而不丢失数据
contract SubscriptionLogicV2 is SubscriptionStorageLayout {

    // 创建订阅计划（仅合约所有者）
    function createPlan(uint8 planId, uint256 price, uint256 duration) external {
        require(msg.sender == owner, "Only owner");
        planPrices[planId] = price;
        planDuration[planId] = duration;
    }

    // 订阅计划
    function subscribe(uint8 planId) external payable {
        require(planPrices[planId] > 0, "Plan does not exist");
        require(msg.value == planPrices[planId], "Incorrect ETH amount");

        subscriptions[msg.sender] = Subscription({
            planId: planId,
            expiry: block.timestamp + planDuration[planId],
            paused: false
        });
    }

    // 暂停订阅（V2 新增功能）
    function pauseSubscription() external {
        Subscription storage sub = subscriptions[msg.sender];
        require(sub.expiry > block.timestamp, "Subscription expired");
        require(!sub.paused, "Already paused");

        sub.paused = true;
        // 计算并保存剩余时间
        sub.expiry = sub.expiry - block.timestamp;
    }

    // 恢复订阅（V2 新增功能）
    function resumeSubscription() external {
        Subscription storage sub = subscriptions[msg.sender];
        require(sub.paused, "Not paused");

        sub.paused = false;
        // 重新计算过期时间: 当前时间 + 之前保存的剩余时间
        sub.expiry = block.timestamp + sub.expiry;
    }

    // 检查用户是否处于有效订阅状态（V2 更新）
    function isSubscribed(address user) external view returns (bool) {
         Subscription memory sub = subscriptions[user];
         if (sub.paused) return false;
         return sub.expiry > block.timestamp;
    }
}

// ==================== 可升级合约架构说明 ====================
//
// 1. 代理合约（SubscriptionStorage）:
//    - 存储所有数据（subscriptions, planPrices 等）
//    - 持有用户的 ETH
//    - 通过 delegatecall 将函数调用转发给逻辑合约
//
// 2. 逻辑合约（SubscriptionLogicV1/V2）:
//    - 包含业务逻辑代码
//    - 不存储数据（数据存储在代理合约中）
//    - 可以被替换（升级）而不丢失数据
//
// 3. 升级流程:
//    - 部署新的逻辑合约（如 V2）
//    - 调用 upgradeTo() 更新 logicContract 地址
//    - 所有后续调用都会使用新的逻辑
//    - 数据保持不变
//
// 4. delegatecall 关键点:
//    - 在代理合约的存储上下文中执行
//    - msg.sender 保持为原始调用者
//    - msg.value 保持不变`;
    } else if (day === 18) {
        return `// ==================== day18-MockWeatherOracle.sol ====================
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

// Chainlink 预言机接口定义 - 直接内联，无需外部依赖
interface AggregatorV3Interface {
    function decimals() external view returns (uint8);
    function description() external view returns (string memory);
    function version() external view returns (uint256);
    function getRoundData(uint80 _roundId) external view returns (
        uint80 roundId,
        int256 answer,
        uint256 startedAt,
        uint256 updatedAt,
        uint80 answeredInRound
    );
    function latestRoundData() external view returns (
        uint80 roundId,
        int256 answer,
        uint256 startedAt,
        uint256 updatedAt,
        uint80 answeredInRound
    );
}

// 简单的所有权管理合约 - 直接内联，无需外部依赖
contract Ownable {
    address private _owner;

    event OwnershipTransferred(address indexed previousOwner, address indexed newOwner);

    constructor(address initialOwner) {
        _transferOwnership(initialOwner);
    }

    modifier onlyOwner() {
        _checkOwner();
        _;
    }

    function owner() public view virtual returns (address) {
        return _owner;
    }

    function _checkOwner() internal view virtual {
        require(owner() == msg.sender, "Ownable: caller is not the owner");
    }

    function _transferOwnership(address newOwner) internal virtual {
        address oldOwner = _owner;
        _owner = newOwner;
        emit OwnershipTransferred(oldOwner, newOwner);
    }
}

// MockWeatherOracle - 模拟天气预言机合约
// 实现了 Chainlink 的 AggregatorV3Interface 接口
// 用于开发和测试环境，模拟真实的天气数据预言机
contract MockWeatherOracle is AggregatorV3Interface, Ownable {
    uint8 private _decimals;
    string private _description;
    uint80 private _roundId;
    uint256 private _timestamp;
    uint256 private _lastUpdateBlock;

    constructor() Ownable(msg.sender) {
        _decimals = 0; // 降雨量以整毫米为单位
        _description = "MOCK/RAINFALL/USD";
        _roundId = 1;
        _timestamp = block.timestamp;
        _lastUpdateBlock = block.number;
    }

    function decimals() external view override returns (uint8) {
        return _decimals;
    }

    function description() external view override returns (string memory) {
        return _description;
    }

    function version() external pure override returns (uint256) {
        return 1;
    }

    function getRoundData(uint80 _roundId_)
        external
        view
        override
        returns (uint80 roundId, int256 answer, uint256 startedAt, uint256 updatedAt, uint80 answeredInRound)
    {
        return (_roundId_, _rainfall(), _timestamp, _timestamp, _roundId);
    }

    function latestRoundData()
        external
        view
        override
        returns (uint80 roundId, int256 answer, uint256 startedAt, uint256 updatedAt, uint80 answeredInRound)
    {
        return (_roundId, _rainfall(), _timestamp, _timestamp, _roundId);
    }

    // 计算当前降雨量（内部函数）
    // 使用区块信息生成伪随机数，模拟降雨量变化
    function _rainfall() public view returns (int256) {
        uint256 blocksSinceLastUpdate = block.number - _lastUpdateBlock;

        uint256 randomFactor = uint256(keccak256(abi.encodePacked(
            block.timestamp,
            block.coinbase,
            blocksSinceLastUpdate
        ))) % 1000;

        return int256(randomFactor);
    }

    function _updateRandomRainfall() private {
        _roundId++;
        _timestamp = block.timestamp;
        _lastUpdateBlock = block.number;
    }

    function updateRandomRainfall() external {
        _updateRandomRainfall();
    }
}

// ==================== day18-CropInsurance.sol ====================
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

// CropInsurance - 农作物保险合约（升级版）
// 这是一个参数保险合约，使用 Chainlink 预言机获取降雨量和 ETH/USD 价格
// 当降雨量低于阈值时，自动向投保农民赔付
contract CropInsurance is Ownable {
    // 天气预言机接口，用于获取降雨量数据
    AggregatorV3Interface private weatherOracle;
    // ETH/USD 价格预言机，用于将美元金额转换为 ETH
    AggregatorV3Interface private ethUsdPriceFeed;

    // 常量定义
    uint256 public constant RAINFALL_THRESHOLD = 500;        // 降雨阈值（毫米）
    uint256 public constant INSURANCE_PREMIUM_USD = 10;      // 保险保费（美元）
    uint256 public constant INSURANCE_PAYOUT_USD = 50;       // 保险赔付金额（美元）

    // 存储每个地址的投保状态
    mapping(address => bool) public hasInsurance;
    // 存储每个地址上次索赔的时间戳，用于限制索赔频率
    mapping(address => uint256) public lastClaimTimestamp;

    // 事件定义
    event InsurancePurchased(address indexed farmer, uint256 amount);
    event ClaimSubmitted(address indexed farmer);
    event ClaimPaid(address indexed farmer, uint256 amount);
    event RainfallChecked(address indexed farmer, uint256 rainfall);

    // 构造函数
    constructor(address _weatherOracle, address _ethUsdPriceFeed) payable Ownable(msg.sender) {
        weatherOracle = AggregatorV3Interface(_weatherOracle);
        ethUsdPriceFeed = AggregatorV3Interface(_ethUsdPriceFeed);
    }

    // 购买保险函数
    // 农民支付保费购买保险，保费金额根据当前 ETH 价格动态计算
    function purchaseInsurance() external payable {
        uint256 ethPrice = getEthPrice();
        // 价格转换公式: (USD金额 × 1e26) / ETH价格 = ETH数量（wei）
        // 1e26 = 1e18(wei精度) × 1e8(Chainlink价格精度)
        uint256 premiumInEth = (INSURANCE_PREMIUM_USD * 1e26) / ethPrice;

        require(msg.value >= premiumInEth, "Insufficient premium amount");
        require(!hasInsurance[msg.sender], "Already insured");

        hasInsurance[msg.sender] = true;
        emit InsurancePurchased(msg.sender, msg.value);
    }

    // 检查降雨量并索赔函数
    // 农民调用此函数检查降雨量，如果低于阈值则自动获得赔付
    function checkRainfallAndClaim() external {
        require(hasInsurance[msg.sender], "No active insurance");
        // 24小时冷却期限制
        require(block.timestamp >= lastClaimTimestamp[msg.sender] + 1 days, "Must wait 24h between claims");

        (
            uint80 roundId,
            int256 rainfall,
            ,
            uint256 updatedAt,
            uint80 answeredInRound
        ) = weatherOracle.latestRoundData();

        require(updatedAt > 0, "Round not complete");
        require(answeredInRound >= roundId, "Stale data");

        uint256 currentRainfall = uint256(rainfall);
        emit RainfallChecked(msg.sender, currentRainfall);

        // 参数化赔付：自动检查条件并执行
        if (currentRainfall < RAINFALL_THRESHOLD) {
            lastClaimTimestamp[msg.sender] = block.timestamp;
            emit ClaimSubmitted(msg.sender);

            uint256 ethPrice = getEthPrice();
            uint256 payoutInEth = (INSURANCE_PAYOUT_USD * 1e26) / ethPrice;

            (bool success, ) = msg.sender.call{value: payoutInEth}("");
            require(success, "Transfer failed");

            emit ClaimPaid(msg.sender, payoutInEth);
        }
    }

    // 获取 ETH/USD 价格函数
    // 返回: ETH 价格（美元），精度为 8 位小数
    function getEthPrice() public view returns (uint256) {
        (, int256 price, , , ) = ethUsdPriceFeed.latestRoundData();
        return uint256(price);
    }

    // 获取当前降雨量函数
    function getCurrentRainfall() public view returns (uint256) {
        (, int256 rainfall, , , ) = weatherOracle.latestRoundData();
        return uint256(rainfall);
    }

    // 提取合约余额（仅合约所有者）
    function withdraw() external onlyOwner {
        payable(owner()).transfer(address(this).balance);
    }

    // 接收 ETH 函数
    receive() external payable {}

    // 获取合约余额函数
    function getBalance() public view returns (uint256) {
        return address(this).balance;
    }
}

// ==================== 预言机与参数保险架构说明 ====================
//
// 1. 双预言机设计:
//    - Weather Oracle: 提供降雨量数据
//    - ETH/USD PriceFeed: 提供价格数据用于货币转换
//    - 两者都遵循 Chainlink 的 AggregatorV3Interface 标准
//
// 2. 价格转换机制:
//    - Chainlink 价格预言机返回 8 位小数精度的价格
//    - 公式: ETH数量 = (USD金额 × 1e26) / ETH价格
//    - 1e26 = 1e18(wei精度) × 1e8(Chainlink精度)
//
// 3. 参数保险特点:
//    - 自动触发：无需人工审核，条件满足自动赔付
//    - 透明可信：使用预言机数据，避免争议
//    - 高效低成本：无需理赔调查，降低运营成本
//
// 4. 冷却期机制:
//    - 24小时内只能索赔一次
//    - 防止滥用和频繁索赔
//    - 使用 block.timestamp 记录时间`;
    } else if (day === 19) {
        return `// ==================== day19-SignThis.sol ====================
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract SignThis {
    // 存储活动组织者地址
    address public organizer;

    // 记录用户是否已参加活动
    mapping(address => bool) public hasEntered;

    // 记录参与者列表
    address[] public participants;

    // 事件：用户参与活动
    event UserEntered(address indexed user);

    // 构造函数：设置组织者
    constructor() {
        organizer = msg.sender;
    }

    // 验证签名并记录参与者
    function enter(bytes memory signature) external {
        // 验证签名
        require(_verifySignature(msg.sender, signature), "Invalid signature");

        // 检查是否已参与（防止重入）
        require(!hasEntered[msg.sender], "Already entered");

        // 记录参与者
        hasEntered[msg.sender] = true;
        participants.push(msg.sender);

        // 触发事件
        emit UserEntered(msg.sender);
    }

    // 内部函数：验证签名
    function _verifySignature(address user, bytes memory signature) internal view returns (bool) {
        // 对用户地址进行哈希
        bytes32 messageHash = keccak256(abi.encodePacked(user));

        // 添加 EIP-191 前缀
        bytes32 ethSignedMessageHash = keccak256(
            abi.encodePacked("\\x19Ethereum Signed Message:\\n32", messageHash)
        );

        // 恢复签名者地址
        (bytes32 r, bytes32 s, uint8 v) = _splitSignature(signature);
        address recovered = ecrecover(ethSignedMessageHash, v, r, s);

        // 验证签名者是否为组织者
        return recovered == organizer;
    }

    // 拆分签名为 r, s, v 三个组件
    function _splitSignature(bytes memory sig) internal pure returns (bytes32 r, bytes32 s, uint8 v) {
        require(sig.length == 65, "Invalid signature length");

        assembly {
            r := mload(add(sig, 32))
            s := mload(add(sig, 64))
            v := byte(0, mload(add(sig, 96)))
        }
    }

    // 获取参与者数量
    function getParticipantCount() external view returns (uint256) {
        return participants.length;
    }

    // 检查特定地址是否已参与
    function checkEntered(address user) external view returns (bool) {
        return hasEntered[user];
    }
}

// ==================== 签名验证与无Gas空投说明 ====================
//
// 1. 签名验证原理:
//    - 组织者使用私钥对用户地址进行签名
//    - 用户调用合约时提供签名
//    - 合约使用 ecrecover 恢复签名者地址
//    - 验证恢复的地址是否为组织者
//
// 2. EIP-191 签名标准:
//    - 目的：防止签名被误用于其他场景
//    - 方法：在消息前添加 "\\x19Ethereum Signed Message:\\n32" 前缀
//    - 效果：签名的消息与普通文本签名不同
//
// 3. 无 Gas 空投优势:
//    - 用户无需持有 ETH 即可参与
//    - 组织者承担 Gas 费用
//    - 适用于代币空投、白名单、邀请奖励等场景
//
// 4. 安全考虑:
//    - 使用 nonce 防止重放攻击（可扩展）
//    - 验证签名长度
//    - 使用 require 进行输入验证`;
    } else if (day === 20) {
        return `// ==================== day20-GoldVault.sol ====================
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

// GoldVault - 金库合约
// 演示重入攻击漏洞及其防护措施
contract GoldVault {
    // 存储每个用户的黄金（ETH）余额
    mapping(address => uint256) public goldBalance;

    // 重入锁状态变量
    uint256 private _status;
    uint256 private constant _NOT_ENTERED = 1;
    uint256 private constant _ENTERED = 2;

    // 构造函数 - 初始化重入锁状态
    constructor() {
        _status = _NOT_ENTERED;
    }

    // 自定义 nonReentrant 修饰符 - 防止重入攻击
    modifier nonReentrant() {
        require(_status != _ENTERED, "Reentrant call blocked");
        _status = _ENTERED;
        _;
        _status = _NOT_ENTERED;
    }

    // 存款函数
    function deposit() external payable {
        require(msg.value > 0, "Deposit must be more than 0");
        goldBalance[msg.sender] += msg.value;
    }

    // 有漏洞的提款函数 - 演示重入攻击风险
    function vulnerableWithdraw() external {
        uint256 amount = goldBalance[msg.sender];
        require(amount > 0, "Nothing to withdraw");

        // 漏洞所在: 先发送ETH（外部调用）
        (bool sent, ) = msg.sender.call{value: amount}("");
        require(sent, "ETH transfer failed");

        // 后更新余额 - 如果外部调用重入，余额还未更新！
        goldBalance[msg.sender] = 0;
    }

    // 安全的提款函数 - 使用重入锁保护
    function safeWithdraw() external nonReentrant {
        // 1. Checks: 验证条件
        uint256 amount = goldBalance[msg.sender];
        require(amount > 0, "Nothing to withdraw");

        // 2. Effects: 先更新状态
        goldBalance[msg.sender] = 0;

        // 3. Interactions: 最后进行外部调用
        (bool sent, ) = msg.sender.call{value: amount}("");
        require(sent, "ETH transfer failed");
    }
}

// ==================== day20-GoldThief.sol ====================
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

interface IVault {
    function deposit() external payable;
    function vulnerableWithdraw() external;
    function safeWithdraw() external;
}

// GoldThief - 重入攻击演示合约
contract GoldThief {
    IVault public targetVault;
    address public owner;
    uint public attackCount;
    bool public attackingSafe;

    constructor(address _vaultAddress) {
        targetVault = IVault(_vaultAddress);
        owner = msg.sender;
    }

    // 攻击有漏洞的金库
    function attackVulnerable() external payable {
        require(msg.sender == owner, "Only owner");
        require(msg.value >= 1 ether, "Need at least 1 ETH");

        attackingSafe = false;
        attackCount = 0;

        targetVault.deposit{value: msg.value}();
        targetVault.vulnerableWithdraw();
    }

    // 攻击有防护的金库
    function attackSafe() external payable {
        require(msg.sender == owner, "Only owner");
        require(msg.value >= 1 ether, "Need at least 1 ETH");

        attackingSafe = true;
        attackCount = 0;

        targetVault.deposit{value: msg.value}();
        targetVault.safeWithdraw();
    }

    // 接收函数 - 重入攻击的核心
    receive() external payable {
        attackCount++;

        if (!attackingSafe && address(targetVault).balance >= 1 ether && attackCount < 5) {
            targetVault.vulnerableWithdraw();
        }

        if (attackingSafe) {
            targetVault.safeWithdraw();
        }
    }

    // 提取窃取的 ETH
    function stealLoot() external {
        require(msg.sender == owner, "Only owner");
        (bool success, ) = payable(owner).call{value: address(this).balance}("");
        require(success, "ETH transfer failed");
    }
}

// ==================== 安全最佳实践总结 ====================
//
// 1. Checks-Effects-Interactions 模式:
//    - Checks: 首先验证所有条件（require）
//    - Effects: 然后更新合约状态
//    - Interactions: 最后进行外部调用
//
// 2. 重入锁（Reentrancy Guard）:
//    - 使用布尔值或状态变量跟踪执行状态
//    - 在函数执行期间锁定合约
//
// 3. 实际案例 - The DAO 攻击:
//    - 2016年发生，损失360万ETH
//    - 攻击者利用递归调用漏洞
//    - 导致以太坊硬分叉（ETH/ETC）
//
// 4. 其他防护措施:
//    - 使用 transfer 或 send（2300 gas限制）
//    - 使用 pull 模式代替 push 模式
//    - 限制单次提款金额
//    - 进行专业的安全审计`;
    } else if (day === 21) {
        return `// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

// IERC721 - ERC721 标准接口
// 定义了 NFT 合约必须实现的基本功能
// 符合以太坊改进提案 EIP-721
interface IERC721 {
    // 事件定义
    // 当代币被转移时触发
    event Transfer(address indexed from, address indexed to, uint256 indexed tokenId);
    // 当代币授权给某个地址时触发
    event Approval(address indexed owner, address indexed approved, uint256 indexed tokenId);
    // 当设置或取消操作员授权时触发
    event ApprovalForAll(address indexed owner, address indexed operator, bool approved);

    // 查询某个地址拥有的代币数量
    function balanceOf(address owner) external view returns (uint256);
    // 查询代币的所有者
    function ownerOf(uint256 tokenId) external view returns (address);

    // 授权某个地址操作特定代币
    function approve(address to, uint256 tokenId) external;
    // 查询代币被授权给的地址
    function getApproved(uint256 tokenId) external view returns (address);

    // 设置或取消操作员授权（授权操作员管理所有代币）
    function setApprovalForAll(address operator, bool approved) external;
    // 查询是否授权了操作员
    function isApprovedForAll(address owner, address operator) external view returns (bool);

    // 转移代币（需要授权）
    function transferFrom(address from, address to, uint256 tokenId) external;
    // 安全转移代币（检查接收方是否支持 ERC721）
    function safeTransferFrom(address from, address to, uint256 tokenId) external;
    // 带数据的安全转移
    function safeTransferFrom(address from, address to, uint256 tokenId, bytes calldata data) external;
}

// IERC721Receiver - ERC721 代币接收接口
// 合约必须实现此接口才能接收 ERC721 代币
// 防止代币被意外发送到不支持 ERC721 的合约
interface IERC721Receiver {
    // 当合约接收到 ERC721 代币时调用
    // 必须返回此函数的 selector（0x150b7a02）以确认接收
    function onERC721Received(address operator, address from, uint256 tokenId, bytes calldata data) external returns (bytes4);
}

// SimpleNFT - 简化版 ERC721 NFT 合约
// 实现了 ERC721 标准的基本功能
// 包含铸造、转移、授权等核心功能
contract SimpleNFT is IERC721 {
    // NFT 名称
    string public name;
    // NFT 符号（代币标识）
    string public symbol;

    // 代币 ID 计数器，从 1 开始
    uint256 private _tokenIdCounter = 1;

    // 代币 ID 到所有者的映射
    mapping(uint256 => address) private _owners;
    // 所有者地址到代币数量的映射
    mapping(address => uint256) private _balances;
    // 代币 ID 到被授权地址的映射
    mapping(uint256 => address) private _tokenApprovals;
    // 所有者到操作员授权的映射（嵌套映射）
    mapping(address => mapping(address => bool)) private _operatorApprovals;
    // 代币 ID 到元数据 URI 的映射
    mapping(uint256 => string) private _tokenURIs;

    // 构造函数 - 设置 NFT 名称和符号
    constructor(string memory name_, string memory symbol_) {
        name = name_;
        symbol = symbol_;
    }

    // 查询地址拥有的代币数量
    function balanceOf(address owner) public view override returns (uint256) {
        require(owner != address(0), "Zero address");
        return _balances[owner];
    }

    // 查询代币的所有者
    function ownerOf(uint256 tokenId) public view override returns (address) {
        address owner = _owners[tokenId];
        require(owner != address(0), "Token doesn't exist");
        return owner;
    }

    // 授权地址操作特定代币
    function approve(address to, uint256 tokenId) public override {
        address owner = ownerOf(tokenId);
        require(to != owner, "Already owner");
        // 验证调用者是代币所有者或已授权的操作员
        require(msg.sender == owner || isApprovedForAll(owner, msg.sender), "Not authorized");

        _tokenApprovals[tokenId] = to;
        emit Approval(owner, to, tokenId);
    }

    // 查询代币被授权给的地址
    function getApproved(uint256 tokenId) public view override returns (address) {
        require(_owners[tokenId] != address(0), "Token doesn't exist");
        return _tokenApprovals[tokenId];
    }

    // 设置或取消操作员授权
    function setApprovalForAll(address operator, bool approved) public override {
        require(operator != msg.sender, "Self approval");
        _operatorApprovals[msg.sender][operator] = approved;
        emit ApprovalForAll(msg.sender, operator, approved);
    }

    // 查询是否授权了操作员
    function isApprovedForAll(address owner, address operator) public view override returns (bool) {
        return _operatorApprovals[owner][operator];
    }

    // 转移代币（需要授权）
    function transferFrom(address from, address to, uint256 tokenId) public override {
        require(_isApprovedOrOwner(msg.sender, tokenId), "Not authorized");
        _transfer(from, to, tokenId);
    }

    // 安全转移代币
    function safeTransferFrom(address from, address to, uint256 tokenId) public override {
        safeTransferFrom(from, to, tokenId, "");
    }

    // 带数据的安全转移代币
    function safeTransferFrom(address from, address to, uint256 tokenId, bytes memory data) public override {
        require(_isApprovedOrOwner(msg.sender, tokenId), "Not authorized");
        _safeTransfer(from, to, tokenId, data);
    }

    // 铸造新代币
    // to: 接收者地址
    // uri: 代币元数据 URI
    function mint(address to, string memory uri) public {
        uint256 tokenId = _tokenIdCounter;
        _tokenIdCounter++;

        // 设置代币所有者和余额
        _owners[tokenId] = to;
        _balances[to] += 1;
        _tokenURIs[tokenId] = uri;

        // 触发 Transfer 事件（from 为 0 地址表示铸造）
        emit Transfer(address(0), to, tokenId);
    }

    // 查询代币的元数据 URI
    function tokenURI(uint256 tokenId) public view returns (string memory) {
        require(_owners[tokenId] != address(0), "Token doesn't exist");
        return _tokenURIs[tokenId];
    }

    // 内部转移函数
    function _transfer(address from, address to, uint256 tokenId) internal virtual {
        require(ownerOf(tokenId) == from, "Not owner");
        require(to != address(0), "Zero address");

        // 清除授权
        delete _tokenApprovals[tokenId];

        // 更新余额
        _balances[from] -= 1;
        _balances[to] += 1;
        _owners[tokenId] = to;

        emit Transfer(from, to, tokenId);
    }

    // 内部安全转移函数
    function _safeTransfer(address from, address to, uint256 tokenId, bytes memory data) internal virtual {
        _transfer(from, to, tokenId);
        // 检查接收方是否支持 ERC721
        require(_checkOnERC721Received(from, to, tokenId, data), "Not ERC721Receiver");
    }

    // 检查调用者是否被授权操作代币
    function _isApprovedOrOwner(address spender, uint256 tokenId) internal view returns (bool) {
        address owner = ownerOf(tokenId);
        return (spender == owner || getApproved(tokenId) == spender || isApprovedForAll(owner, spender));
    }

    // 检查接收方合约是否实现了 IERC721Receiver
    function _checkOnERC721Received(address from, address to, uint256 tokenId, bytes memory data) private returns (bool) {
        // 检查 to 是否是合约地址
        if (to.code.length > 0) {
            try IERC721Receiver(to).onERC721Received(msg.sender, from, tokenId, data) returns (bytes4 retval) {
                // 验证返回值是否正确
                return retval == IERC721Receiver.onERC721Received.selector;
            } catch {
                // 调用失败
                return false;
            }
        }
        // EOA（外部账户）总是可以接收
        return true;
    }
}

// ERC721 关键概念:
//
// 1. 代币标识:
//    - 每个代币有唯一的 tokenId（uint256）
//    - 从 0 地址铸造，转移到 0 地址销毁
//
// 2. 所有权管理:
//    - _owners: tokenId => owner
//    - _balances: owner => count
//
// 3. 授权机制:
//    - 单代币授权: approve()
//    - 操作员授权: setApprovalForAll()
//
// 4. 安全转移:
//    - 检查接收方是否支持 ERC721
//    - 防止代币被锁定在不支持的合约中
//
// 5. 元数据:
//    - tokenURI() 返回代币的元数据链接
//    - 通常指向 JSON 文件，包含名称、描述、图片等`;
    } else if (day === 22) {
        return `// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

// ==================== 内联 Ownable 合约 ====================
// 直接内联，无需外部依赖
// 实现了基本的访问控制功能，只有合约所有者能执行特定操作
contract Ownable {
    // 存储合约所有者地址，private 表示只有本合约内部可以访问
    address private _owner;

    // 所有权转移事件，indexed 可以让前端按地址筛选事件
    event OwnershipTransferred(address indexed previousOwner, address indexed newOwner);

    // 构造函数：部署时设置初始所有者
    // initialOwner: 初始所有者地址
    constructor(address initialOwner) {
        _transferOwnership(initialOwner);
    }

    // 修饰器：限制只有所有者可以调用
    // _ 表示被修饰函数的代码将插入到这里
    modifier onlyOwner() {
        _checkOwner();  // 检查调用者是否是所有者
        _;              // 执行被修饰的函数体
    }

    // 获取当前所有者地址
    // public: 任何人都可以调用
    // view: 不修改状态，只读取
    // virtual: 允许子合约重写
    function owner() public view virtual returns (address) {
        return _owner;
    }

    // 内部函数：检查调用者是否是所有者
    // internal: 只能在本合约和子合约中调用
    function _checkOwner() internal view virtual {
        // require 检查条件，不满足则回滚交易并返回错误信息
        require(owner() == msg.sender, "Ownable: caller is not the owner");
    }

    // 内部函数：转移所有权
    // newOwner: 新所有者地址
    function _transferOwnership(address newOwner) internal virtual {
        // 记录旧所有者地址
        address oldOwner = _owner;
        // 更新所有者
        _owner = newOwner;
        // 触发所有权转移事件
        emit OwnershipTransferred(oldOwner, newOwner);
    }
}

// ==================== Mock VRF 协调器接口 ====================
// 模拟 Chainlink VRF Coordinator 接口
// 用于本地测试环境，无需连接真实的 Chainlink 网络
interface IMockVRFCoordinator {
    // 请求随机数（模拟 VRF 请求）
    // keyHash: VRF 密钥哈希，用于标识 VRF 服务
    // subId: 订阅 ID，用于计费
    // requestConfirmations: 请求确认数，等待多少个区块确认
    // callbackGasLimit: 回调函数 gas 限制
    // numWords: 请求的随机数数量
    // 返回: requestId 请求 ID，用于追踪
    function requestRandomWords(
        bytes32 keyHash,
        uint256 subId,
        uint16 requestConfirmations,
        uint32 callbackGasLimit,
        uint32 numWords
    ) external returns (uint256 requestId);
}

// ==================== VRF 消费者接口 ====================
// 定义 VRF 回调函数接口
// 任何想要接收 VRF 随机数的合约都必须实现此接口
interface IVRFConsumer {
    // VRF 回调函数
    // requestId: 请求 ID
    // randomWords: 随机数数组
    function fulfillRandomWords(uint256 requestId, uint256[] calldata randomWords) external;
}

// ==================== Mock VRF 协调器实现 ====================
// 模拟 Chainlink VRF Coordinator 的行为
// 注意：此合约仅用于本地测试，使用伪随机数生成，不安全！
contract MockVRFCoordinator is IMockVRFCoordinator {
    // 请求 ID 计数器，每次请求时递增
    uint256 private _requestIdCounter;
    
    // 记录请求对应的消费者合约地址
    // mapping: 键值对存储，key 是 requestId，value 是消费者地址
    mapping(uint256 => address) public requestToConsumer;
    
    // 随机数请求事件，前端可以监听此事件
    event RandomWordsRequested(
        bytes32 keyHash,
        uint256 requestId,
        uint256 preSeed,
        uint256 subId,
        uint16 minimumRequestConfirmations,
        uint32 callbackGasLimit,
        uint32 numWords,
        address sender
    );
    
    // 请求随机数
    // 这是模拟的 VRF 请求，不会真正调用 Chainlink 网络
    function requestRandomWords(
        bytes32 keyHash,
        uint256 subId,
        uint16 requestConfirmations,
        uint32 callbackGasLimit,
        uint32 numWords
    ) external override returns (uint256 requestId) {
        // 递增请求 ID 计数器
        requestId = ++_requestIdCounter;
        // 记录哪个合约发起了请求
        requestToConsumer[requestId] = msg.sender;
        
        // 触发事件，通知前端有随机数请求
        emit RandomWordsRequested(
            keyHash,
            requestId,
            uint256(keccak256(abi.encodePacked(block.timestamp, msg.sender))), // 预种子
            subId,
            requestConfirmations,
            callbackGasLimit,
            numWords,
            msg.sender
        );
        
        return requestId;
    }
    
    // 模拟 VRF 回调 - 任何人都可以调用此函数来触发随机数回调
    // 在真实环境中，这是由 Chainlink 节点自动调用的
    // requestId: 请求 ID
    // randomWords: 随机数数组
    function fulfillRandomWords(uint256 requestId, uint256[] calldata randomWords) external {
        // 查找发起请求的消费者合约
        address consumer = requestToConsumer[requestId];
        // 确保请求存在
        require(consumer != address(0), "Request not found");
        
        // 调用消费者的回调函数，传入随机数
        IVRFConsumer(consumer).fulfillRandomWords(requestId, randomWords);
    }
    
    // 生成伪随机数数组（仅用于测试）
    // numWords: 需要生成的随机数数量
    // seed: 种子值
    // 返回: 随机数数组
    function generateRandomWords(uint32 numWords, uint256 seed) public view returns (uint256[] memory) {
        // 创建动态数组，长度为 numWords
        uint256[] memory randomWords = new uint256[](numWords);
        // 循环生成随机数
        for (uint32 i = 0; i < numWords; i++) {
            // 使用 keccak256 哈希多个区块参数生成伪随机数
            // 注意：这种方式不安全，矿工可以操控
            randomWords[i] = uint256(keccak256(abi.encodePacked(
                block.timestamp,      // 当前区块时间戳
                block.number,         // 当前区块号
                msg.sender,           // 调用者地址
                seed,                 // 种子
                i                     // 索引
            )));
        }
        return randomWords;
    }
}

// ==================== FairChainLottery 彩票合约 ====================
// 去中心化彩票合约 - Mock VRF 版本
// 用于本地测试环境，演示彩票逻辑
// 注意：此合约使用伪随机数，仅用于学习和测试！
contract FairChainLottery is Ownable, IVRFConsumer {
    // 彩票状态枚举
    // OPEN: 开放参与
    // CLOSED: 关闭，等待开启
    // CALCULATING: 正在计算获胜者
    enum LOTTERY_STATE { OPEN, CLOSED, CALCULATING }
    
    // 当前彩票状态，public 自动生成 getter 函数
    LOTTERY_STATE public lotteryState;

    // 参与者数组，payable 表示可以接收 ETH
    // 存储所有参与彩票的地址
    address payable[] public players;
    
    // 最近的获胜者地址
    address public recentWinner;
    
    // 参与费用（wei 单位）
    uint256 public entryFee;

    // Mock VRF 配置参数
    uint256 public subscriptionId;        // 订阅 ID
    bytes32 public keyHash;               // VRF 密钥哈希
    uint32 public callbackGasLimit = 100000;  // 回调 gas 限制，默认 100000
    uint16 public requestConfirmations = 3;   // 确认数，默认 3 个区块
    uint32 public numWords = 1;               // 请求的随机数数量，默认 1 个
    uint256 public latestRequestId;           // 最新的请求 ID
    
    // VRF 协调器合约接口
    IMockVRFCoordinator public vrfCoordinator;

    // 事件定义，前端可以监听这些事件
    event LotteryStarted();                                    // 彩票开启事件
    event LotteryEnded(uint256 requestId);                     // 彩票结束事件
    event WinnerPicked(address indexed winner, uint256 amount); // 获胜者选出事件
    event PlayerEntered(address indexed player, uint256 amount); // 玩家参与事件

    // 构造函数：初始化合约
    // _vrfCoordinator: VRF 协调器合约地址
    // _subscriptionId: 订阅 ID
    // _keyHash: VRF 密钥哈希
    // _entryFee: 参与费用
    constructor(
        address _vrfCoordinator,
        uint256 _subscriptionId,
        bytes32 _keyHash,
        uint256 _entryFee
    ) Ownable(msg.sender) {  // 调用父合约构造函数，设置所有者为部署者
        // 初始化 VRF 协调器接口
        vrfCoordinator = IMockVRFCoordinator(_vrfCoordinator);
        subscriptionId = _subscriptionId;
        keyHash = _keyHash;
        entryFee = _entryFee;
        // 初始状态为关闭
        lotteryState = LOTTERY_STATE.CLOSED;
    }

    // 参与彩票函数
    // payable: 允许接收 ETH
    function enter() public payable {
        // 检查彩票是否开放
        require(lotteryState == LOTTERY_STATE.OPEN, "Lottery not open");
        // 检查发送的 ETH 是否足够
        require(msg.value >= entryFee, "Not enough ETH");
        // 将参与者添加到数组
        players.push(payable(msg.sender));
        // 触发参与事件
        emit PlayerEntered(msg.sender, msg.value);
    }

    // 开始彩票（仅所有者可以调用）
    // onlyOwner 修饰器限制只有所有者可以调用
    function startLottery() external onlyOwner {
        // 检查当前状态是否为关闭
        require(lotteryState == LOTTERY_STATE.CLOSED, "Can't start yet");
        // 设置状态为开放
        lotteryState = LOTTERY_STATE.OPEN;
        // 触发开启事件
        emit LotteryStarted();
    }

    // 结束彩票并请求随机数（仅所有者可以调用）
    function endLottery() external onlyOwner {
        // 检查彩票是否开放
        require(lotteryState == LOTTERY_STATE.OPEN, "Lottery not open");
        // 检查是否有参与者
        require(players.length > 0, "No players in lottery");
        // 设置状态为计算中
        lotteryState = LOTTERY_STATE.CALCULATING;

        // 向 VRF 协调器请求随机数
        latestRequestId = vrfCoordinator.requestRandomWords(
            keyHash,
            subscriptionId,
            requestConfirmations,
            callbackGasLimit,
            numWords
        );
        
        // 触发结束事件
        emit LotteryEnded(latestRequestId);
    }

    // VRF 回调函数 - 由 MockVRFCoordinator 调用
    // 这是 VRF 返回随机数时调用的函数
    // 第一个参数是 requestId，这里用 _ 表示我们不使用它
    function fulfillRandomWords(uint256, uint256[] calldata randomWords) external override {
        // 检查状态是否为计算中
        require(lotteryState == LOTTERY_STATE.CALCULATING, "Not ready to pick winner");
        // 检查调用者是否是 VRF 协调器（防止恶意调用）
        require(msg.sender == address(vrfCoordinator), "Only coordinator can fulfill");

        // 使用随机数计算获胜者索引
        // randomWords[0] % players.length 确保索引在有效范围内
        uint256 winnerIndex = randomWords[0] % players.length;
        // 获取获胜者地址
        address payable winner = players[winnerIndex];
        // 记录获胜者
        recentWinner = winner;

        // 获取合约当前余额（即奖金总额）
        uint256 prizeAmount = address(this).balance;
        
        // 重置参与者数组，清空所有参与者
        players = new address payable[](0);
        // 设置状态为关闭，准备下一轮
        lotteryState = LOTTERY_STATE.CLOSED;

        // 发送奖金给获胜者
        // call{value: ...} 是推荐的 ETH 发送方式
        (bool sent, ) = winner.call{value: prizeAmount}("");
        // 确保发送成功
        require(sent, "Failed to send ETH to winner");
        
        // 触发获胜者事件
        emit WinnerPicked(winner, prizeAmount);
    }

    // 获取所有参与者地址
    // view: 不修改状态
    // returns (address payable[] memory): 返回参与者数组
    function getPlayers() external view returns (address payable[] memory) {
        return players;
    }
    
    // 获取合约当前余额
    function getBalance() external view returns (uint256) {
        return address(this).balance;
    }
    
    // 获取参与者数量
    function getPlayerCount() external view returns (uint256) {
        return players.length;
    }
}`;
    } else if (day === 23) {
        return `// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

/**
 * @title SimpleLending
 * @dev 一个基础的 DeFi 借贷平台合约
 * 功能：存款、取款、抵押、借款、还款、利息计算
 */
contract SimpleLending {
    
    // ==================== 重入锁 ====================
    // 防止重入攻击的简单机制
    // 当 _locked 为 true 时，不允许再次进入受保护的函数
    bool private _locked;
    
    // 重入锁修饰器
    // 确保函数执行期间不能被重入调用
    modifier nonReentrant() {
        require(!_locked, "Reentrant call");
        _locked = true;
        _;
        _locked = false;
    }
    
    // ==================== 状态变量 ====================
    
    // 用户的存款余额
    // key: 用户地址, value: 存款金额（wei）
    mapping(address => uint256) public depositBalances;

    // 用户的借款余额（本金）
    // key: 用户地址, value: 借款金额（wei）
    mapping(address => uint256) public borrowBalances;

    // 用户的抵押品余额
    // key: 用户地址, value: 抵押品金额（wei）
    mapping(address => uint256) public collateralBalances;

    // 利率，以基点（basis points）表示
    // 1 基点 = 0.01% = 1/10000
    // 500 基点 = 5% 年利率
    uint256 public interestRateBasisPoints = 500;

    // 抵押率，以基点表示
    // 7500 基点 = 75%，表示可以借出抵押品价值的 75%
    // 例如：抵押 1 ETH，最多可以借 0.75 ETH
    uint256 public collateralFactorBasisPoints = 7500;

    // 用户上次计算利息的时间戳
    // key: 用户地址, value: 时间戳（秒）
    mapping(address => uint256) public lastInterestAccrualTimestamp;

    // ==================== 事件 ====================
    // 事件用于前端监听，记录重要操作
    
    // 存款事件
    // indexed: 可以通过用户地址筛选事件
    event Deposit(address indexed user, uint256 amount);
    
    // 取款事件
    event Withdraw(address indexed user, uint256 amount);
    
    // 借款事件
    event Borrow(address indexed user, uint256 amount);
    
    // 还款事件
    event Repay(address indexed user, uint256 amount);
    
    // 存入抵押品事件
    event CollateralDeposited(address indexed user, uint256 amount);
    
    // 取出抵押品事件
    event CollateralWithdrawn(address indexed user, uint256 amount);

    // ==================== 存款功能 ====================
    
    /**
     * @dev 存款函数 - 用户向合约存入 ETH 获取利息收益
     * payable: 允许函数接收 ETH
     */
    function deposit() external payable {
        // 检查存入金额必须大于 0
        require(msg.value > 0, "Must deposit a positive amount");
        
        // 将存入金额加到用户的存款余额中
        // msg.sender: 调用此函数的地址
        // msg.value: 随交易发送的 ETH 数量
        depositBalances[msg.sender] += msg.value;
        
        // 触发存款事件，通知前端
        emit Deposit(msg.sender, msg.value);
    }

    /**
     * @dev 取款函数 - 用户取回存款
     * @param amount 要取出的金额（wei）
     * nonReentrant: 防止重入攻击
     */
    function withdraw(uint256 amount) external nonReentrant {
        // 检查取款金额必须大于 0
        require(amount > 0, "Must withdraw a positive amount");
        
        // 检查用户存款余额是否足够
        require(depositBalances[msg.sender] >= amount, "Insufficient balance");
        
        // 先从余额中扣除（防止重入攻击）
        depositBalances[msg.sender] -= amount;
        
        // 将 ETH 转给用户
        // 使用 call{value: ...} 替代 transfer()，这是现代 Solidity 推荐的方式
        // call 更灵活，可以处理更多 gas，但需要检查返回值
        (bool sent, ) = payable(msg.sender).call{value: amount}("");
        require(sent, "ETH transfer failed");
        
        // 触发取款事件
        emit Withdraw(msg.sender, amount);
    }

    // ==================== 抵押品功能 ====================
    
    /**
     * @dev 存入抵押品 - 用户存入 ETH 作为借款的抵押
     * 抵押品和存款是分开的，抵押品用于担保借款
     */
    function depositCollateral() external payable {
        // 检查存入金额必须大于 0
        require(msg.value > 0, "Must deposit a positive amount as collateral");
        
        // 增加用户的抵押品余额
        collateralBalances[msg.sender] += msg.value;
        
        // 触发抵押品存入事件
        emit CollateralDeposited(msg.sender, msg.value);
    }

    /**
     * @dev 取出抵押品 - 用户取回部分或全部抵押品
     * @param amount 要取出的抵押品金额（wei）
     * 限制：取出后必须保持足够的抵押率来覆盖借款
     * nonReentrant: 防止重入攻击
     */
    function withdrawCollateral(uint256 amount) external nonReentrant {
        // 检查取款金额必须大于 0
        require(amount > 0, "Must withdraw a positive amount");
        
        // 检查抵押品余额是否足够
        require(collateralBalances[msg.sender] >= amount, "Insufficient collateral");

        // 计算用户当前的债务（本金 + 累积利息）
        uint256 borrowedAmount = calculateInterestAccrued(msg.sender);
        
        // 计算所需的最低抵押品金额
        // 公式：所需抵押品 = 债务 / 抵押率
        // 例如：债务 0.75 ETH，抵押率 75%，则需要 1 ETH 抵押品
        uint256 requiredCollateral = (borrowedAmount * 10000) / collateralFactorBasisPoints;

        // 检查取出后是否仍满足抵押率要求
        // 剩余抵押品必须 >= 所需抵押品
        require(
            collateralBalances[msg.sender] - amount >= requiredCollateral,
            "Withdrawal would break collateral ratio"
        );

        // 扣除抵押品余额
        collateralBalances[msg.sender] -= amount;
        
        // 将 ETH 转给用户
        (bool sent, ) = payable(msg.sender).call{value: amount}("");
        require(sent, "ETH transfer failed");
        
        // 触发抵押品取出事件
        emit CollateralWithdrawn(msg.sender, amount);
    }

    // ==================== 借款功能 ====================
    
    /**
     * @dev 借款函数 - 用户根据抵押品借出 ETH
     * @param amount 要借出的金额（wei）
     * 限制：
     * 1. 合约必须有足够的流动性
     * 2. 借款金额不能超过抵押品允许的最大额度
     * nonReentrant: 防止重入攻击
     */
    function borrow(uint256 amount) external nonReentrant {
        // 检查借款金额必须大于 0
        require(amount > 0, "Must borrow a positive amount");
        
        // 检查合约是否有足够的 ETH 可以借出
        require(address(this).balance >= amount, "Not enough liquidity in the pool");

        // 计算用户最多可以借的金额
        // 公式：最大借款 = 抵押品价值 * 抵押率
        // 例如：抵押 1 ETH，抵押率 75%，则最多借 0.75 ETH
        uint256 maxBorrowAmount = (collateralBalances[msg.sender] * collateralFactorBasisPoints) / 10000;
        
        // 计算用户当前的债务（包括累积的利息）
        uint256 currentDebt = calculateInterestAccrued(msg.sender);

        // 检查借款后是否超过最大额度
        // 当前债务 + 新借款 <= 最大可借额度
        require(currentDebt + amount <= maxBorrowAmount, "Exceeds allowed borrow amount");

        // 更新借款余额（旧债务 + 新借款）
        borrowBalances[msg.sender] = currentDebt + amount;
        
        // 更新利息计算时间戳为当前时间
        lastInterestAccrualTimestamp[msg.sender] = block.timestamp;

        // 将 ETH 转给用户
        (bool sent, ) = payable(msg.sender).call{value: amount}("");
        require(sent, "ETH transfer failed");
        
        // 触发借款事件
        emit Borrow(msg.sender, amount);
    }

    // ==================== 还款功能 ====================
    
    /**
     * @dev 还款函数 - 用户偿还借款（附带利息）
     * payable: 允许函数接收 ETH 作为还款
     * 如果还款金额超过债务，多余部分会退回
     * 
     * 安全考虑：
     * 1. 使用 Checks-Effects-Interactions 模式防止重入攻击
     * 2. 使用 nonReentrant 修饰符提供额外保护
     */
    function repay() external payable nonReentrant {
        // ========== Checks ==========
        // 检查还款金额必须大于 0
        require(msg.value > 0, "Must repay a positive amount");

        // 计算用户当前的债务（本金 + 累积利息）
        uint256 currentDebt = calculateInterestAccrued(msg.sender);
        
        // 检查是否有债务需要偿还
        require(currentDebt > 0, "No debt to repay");

        // 确定实际还款金额和退款金额
        uint256 amountToRepay = msg.value;
        uint256 refundAmount = 0;
        
        // 如果还款金额超过债务，计算退款金额
        if (amountToRepay > currentDebt) {
            refundAmount = msg.value - currentDebt;
            amountToRepay = currentDebt;
        }

        // ========== Effects ==========
        // 先更新状态，防止重入攻击
        // 更新借款余额（剩余债务）
        borrowBalances[msg.sender] = currentDebt - amountToRepay;
        
        // 更新利息计算时间戳
        lastInterestAccrualTimestamp[msg.sender] = block.timestamp;

        // ========== Interactions ==========
        // 最后进行外部调用（转账）
        // 如果有退款，先退款
        if (refundAmount > 0) {
            (bool sent, ) = payable(msg.sender).call{value: refundAmount}("");
            require(sent, "ETH refund failed");
        }

        // 触发还款事件
        emit Repay(msg.sender, amountToRepay);
    }

    // ==================== 利息计算 ====================
    
    /**
     * @dev 计算用户的累积债务（本金 + 利息）
     * @param user 用户地址
     * @return 总债务金额（wei）
     * 
     * 利息计算公式：
     * 利息 = 本金 * 年利率 * 时间（年）
     * 
     * 注意：这里使用简单利息计算，不是复利
     */
    function calculateInterestAccrued(address user) public view returns (uint256) {
        // 如果没有借款，返回 0
        if (borrowBalances[user] == 0) {
            return 0;
        }

        // 计算距离上次计息经过的时间（秒）
        uint256 timeElapsed = block.timestamp - lastInterestAccrualTimestamp[user];
        
        // 计算利息
        // 公式：利息 = 本金 * 利率基点 * 时间 / (10000 * 365天)
        // 10000 是因为利率以基点表示
        // 365 days 将秒转换为年
        uint256 interest = (borrowBalances[user] * interestRateBasisPoints * timeElapsed) / (10000 * 365 days);

        // 返回本金 + 利息
        return borrowBalances[user] + interest;
    }

    // ==================== 查询函数 ====================
    
    /**
     * @dev 获取用户的最大可借金额
     * @param user 用户地址
     * @return 最大可借金额（wei）
     */
    function getMaxBorrowAmount(address user) external view returns (uint256) {
        return (collateralBalances[user] * collateralFactorBasisPoints) / 10000;
    }

    /**
     * @dev 获取合约的总流动性（合约持有的 ETH 总量）
     * @return 合约余额（wei）
     */
    function getTotalLiquidity() external view returns (uint256) {
        return address(this).balance;
    }
}`;
    } else if (day === 24) {
        return `// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

/// @title EnhancedSimpleEscrow - 具有超时、取消和事件的安全托管合约
/// @dev 这是一个增强版的托管合约，支持超时取消、争议仲裁和双方协商取消
/// 用于买卖双方在不信任对方的情况下安全交易
contract EnhancedSimpleEscrow {
    
    // ==================== 枚举：托管状态 ====================
    /// @dev 定义托管合约的各种状态
    enum EscrowState { 
        AWAITING_PAYMENT,   // 等待买家付款
        AWAITING_DELIVERY,  // 等待卖家发货/买家确认收货
        COMPLETE,           // 交易完成
        DISPUTED,           // 争议中
        CANCELLED           // 已取消
    }

    // ==================== 状态变量 ====================
    
    /// @notice 买家地址
    /// @dev immutable: 只能在构造函数中设置，之后不可更改，节省 gas
    address public immutable buyer;
    
    /// @notice 卖家地址
    /// @dev immutable: 只能在构造函数中设置
    address public immutable seller;
    
    /// @notice 仲裁者地址
    /// @dev 当买卖双方发生争议时，由仲裁者决定资金归属
    address public immutable arbiter;

    /// @notice 托管金额（wei）
    /// @dev 买家存入的金额，在交易完成或取消时释放
    uint256 public amount;
    
    /// @notice 当前托管状态
    /// @dev 使用枚举跟踪交易进度
    EscrowState public state;
    
    /// @notice 存款时间戳
    /// @dev 记录买家存款的时间，用于计算超时
    uint256 public depositTime;
    
    /// @notice 发货超时时间（秒）
    /// @dev 从存款开始计算，超过此时间买家可以取消交易
    uint256 public deliveryTimeout;

    // ==================== 事件 ====================
    /// @dev 事件用于前端监听，记录重要状态变更
    
    /// @notice 买家已存款事件
    /// @param buyer 买家地址
    /// @param amount 存款金额
    event PaymentDeposited(address indexed buyer, uint256 amount);
    
    /// @notice 买家确认收货事件
    /// @param buyer 买家地址
    /// @param seller 卖家地址
    /// @param amount 释放给卖家的金额
    event DeliveryConfirmed(address indexed buyer, address indexed seller, uint256 amount);
    
    /// @notice 争议发起事件
    /// @param initiator 发起争议的地址（买家或卖家）
    event DisputeRaised(address indexed initiator);
    
    /// @notice 争议解决事件
    /// @param arbiter 仲裁者地址
    /// @param recipient 资金接收方
    /// @param amount 释放金额
    event DisputeResolved(address indexed arbiter, address recipient, uint256 amount);
    
    /// @notice 托管取消事件
    /// @param initiator 发起取消的地址
    event EscrowCancelled(address indexed initiator);
    
    /// @notice 发货超时事件
    /// @param buyer 买家地址
    event DeliveryTimeoutReached(address indexed buyer);

    // ==================== 构造函数 ====================
    
    /// @notice 创建托管合约
    /// @param _seller 卖家地址
    /// @param _arbiter 仲裁者地址（可以是第三方服务或可信地址）
    /// @param _deliveryTimeout 发货超时时间（秒），必须大于 0
    /// @dev 买家是调用构造函数的地址（msg.sender）
    constructor(address _seller, address _arbiter, uint256 _deliveryTimeout) {
        // 检查超时时间必须大于 0
        require(_deliveryTimeout > 0, "Delivery timeout must be greater than zero");
        
        // 设置各方地址
        buyer = msg.sender;     // 调用者就是买家
        seller = _seller;       // 指定的卖家
        arbiter = _arbiter;     // 指定的仲裁者
        
        // 初始状态：等待付款
        state = EscrowState.AWAITING_PAYMENT;
        
        // 设置超时时间
        deliveryTimeout = _deliveryTimeout;
    }

    // ==================== 接收函数 ====================
    
    /// @notice 拒绝直接转账
    /// @dev 防止用户误操作直接转账到合约，必须通过 deposit() 函数存款
    receive() external payable {
        revert("Direct payments not allowed");
    }

    // ==================== 核心功能函数 ====================
    
    /// @notice 买家存款到托管合约
    /// @dev 买家调用此函数并发送 ETH，进入等待发货状态
    /// 要求：
    /// - 只有买家可以调用
    /// - 状态必须是 AWAITING_PAYMENT
    /// - 金额必须大于 0
    function deposit() external payable {
        // 检查调用者是否是买家
        require(msg.sender == buyer, "Only buyer can deposit");
        
        // 检查当前状态是否是等待付款
        require(state == EscrowState.AWAITING_PAYMENT, "Already paid");
        
        // 检查存款金额是否大于 0
        require(msg.value > 0, "Amount must be greater than zero");

        // 记录存款金额
        amount = msg.value;
        
        // 更新状态为等待发货
        state = EscrowState.AWAITING_DELIVERY;
        
        // 记录存款时间（用于计算超时）
        depositTime = block.timestamp;
        
        // 触发存款事件
        emit PaymentDeposited(buyer, amount);
    }

    /// @notice 买家确认收货，释放资金给卖家
    /// @dev 买家收到商品后调用此函数，资金转给卖家，交易完成
    /// 要求：
    /// - 只有买家可以调用
    /// - 状态必须是 AWAITING_DELIVERY
    function confirmDelivery() external {
        // 检查调用者是否是买家
        require(msg.sender == buyer, "Only buyer can confirm");
        
        // 检查状态是否是等待发货
        require(state == EscrowState.AWAITING_DELIVERY, "Not in delivery state");

        // 更新状态为完成
        state = EscrowState.COMPLETE;
        
        // 将资金转给卖家
        (bool sent, ) = payable(seller).call{value: amount}("");
        require(sent, "ETH transfer to seller failed");
        
        // 触发确认收货事件
        emit DeliveryConfirmed(buyer, seller, amount);
    }

    /// @notice 发起争议
    /// @dev 当买卖双方发生纠纷时，任何一方可以发起争议，进入仲裁流程
    /// 要求：
    /// - 买家或卖家可以发起
    /// - 状态必须是 AWAITING_DELIVERY
    function raiseDispute() external {
        // 检查调用者是否是买家或卖家
        require(msg.sender == buyer || msg.sender == seller, "Not authorized");
        
        // 检查状态是否是等待发货
        require(state == EscrowState.AWAITING_DELIVERY, "Can't dispute now");

        // 更新状态为争议中
        state = EscrowState.DISPUTED;
        
        // 触发争议事件
        emit DisputeRaised(msg.sender);
    }

    /// @notice 仲裁者解决争议
    /// @param _releaseToSeller 是否将资金释放给卖家
    /// @dev 仲裁者根据证据决定资金归属
    /// true: 资金给卖家（买家已收货或不诚信）
    /// false: 资金退回买家（卖家未发货或商品有问题）
    /// 要求：
    /// - 只有仲裁者可以调用
    /// - 状态必须是 DISPUTED
    function resolveDispute(bool _releaseToSeller) external {
        // 检查调用者是否是仲裁者
        require(msg.sender == arbiter, "Only arbiter can resolve");
        
        // 检查状态是否是争议中
        require(state == EscrowState.DISPUTED, "No dispute to resolve");

        // 更新状态为完成
        state = EscrowState.COMPLETE;
        
        // 根据仲裁结果释放资金
        if (_releaseToSeller) {
            // 资金给卖家
            (bool sent, ) = payable(seller).call{value: amount}("");
            require(sent, "ETH transfer to seller failed");
            emit DisputeResolved(arbiter, seller, amount);
        } else {
            // 资金退回买家
            (bool sent, ) = payable(buyer).call{value: amount}("");
            require(sent, "ETH transfer to buyer failed");
            emit DisputeResolved(arbiter, buyer, amount);
        }
    }

    /// @notice 超时后买家取消交易
    /// @dev 如果卖家在超时时间内未发货，买家可以取消并取回资金
    /// 要求：
    /// - 只有买家可以调用
    /// - 状态必须是 AWAITING_DELIVERY
    /// - 当前时间必须超过 depositTime + deliveryTimeout
    function cancelAfterTimeout() external {
        // 检查调用者是否是买家
        require(msg.sender == buyer, "Only buyer can trigger timeout cancellation");
        
        // 检查状态是否是等待发货
        require(state == EscrowState.AWAITING_DELIVERY, "Cannot cancel in current state");
        
        // 检查是否已超过超时时间
        require(block.timestamp >= depositTime + deliveryTimeout, "Timeout not reached");

        // 更新状态为已取消
        state = EscrowState.CANCELLED;
        
        // 将合约余额退回买家
        (bool sent, ) = payable(buyer).call{value: address(this).balance}("");
        require(sent, "ETH refund to buyer failed");
        
        // 触发取消事件
        emit EscrowCancelled(buyer);
        
        // 触发超时事件
        emit DeliveryTimeoutReached(buyer);
    }

    /// @notice 双方协商取消交易
    /// @dev 买卖双方同意取消交易，资金退回买家
    /// 适用场景：
    /// - 交易还未完成，双方同意取消
    /// - 买家还未付款，决定不买了
    /// 要求：
    /// - 买家或卖家可以发起
    /// - 状态必须是 AWAITING_DELIVERY 或 AWAITING_PAYMENT
    function cancelMutual() external {
        // 检查调用者是否是买家或卖家
        require(msg.sender == buyer || msg.sender == seller, "Not authorized");
        
        // 检查状态是否可以取消
        require(
            state == EscrowState.AWAITING_DELIVERY || state == EscrowState.AWAITING_PAYMENT,
            "Cannot cancel now"
        );

        // 记录之前的状态
        EscrowState previousState = state;
        
        // 更新状态为已取消
        state = EscrowState.CANCELLED;

        // 如果已经存款，退回资金
        if (previousState == EscrowState.AWAITING_DELIVERY) {
            (bool sent, ) = payable(buyer).call{value: address(this).balance}("");
            require(sent, "ETH refund to buyer failed");
        }

        // 触发取消事件
        emit EscrowCancelled(msg.sender);
    }

    // ==================== 查询函数 ====================
    
    /// @notice 获取剩余超时时间
    /// @return 剩余秒数，如果已超时或不在等待发货状态则返回 0
    /// @dev 用于前端显示倒计时
    function getTimeLeft() external view returns (uint256) {
        // 如果不在等待发货状态，返回 0
        if (state != EscrowState.AWAITING_DELIVERY) return 0;
        
        // 如果已超时，返回 0
        if (block.timestamp >= depositTime + deliveryTimeout) return 0;
        
        // 返回剩余时间
        return (depositTime + deliveryTimeout) - block.timestamp;
    }
}`;
    } else if (day === 25) {
        return `// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

// 导入 OpenZeppelin 的 ERC20 合约
// 使用 GitHub 链接导入，方便在 Remix 中直接使用
import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/v5.0.0/contracts/token/ERC20/ERC20.sol";
import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/v5.0.0/contracts/token/ERC20/IERC20.sol";

/// @title Automated Market Maker with Liquidity Token
/// @title 自动化做市商（AMM）合约
/// @dev 这是一个简化的 Uniswap V1 风格的 AMM 合约
/// @dev 实现了流动性提供、流动性移除和代币交换功能
/// @dev 使用恒定乘积公式：x * y = k
contract AutomatedMarketMaker is ERC20 {
    
    // ==================== 状态变量 ====================
    
    /// @notice 代币 A 的合约接口
    /// @dev 使用 IERC20 接口与任意 ERC20 代币交互
    IERC20 public tokenA;
    
    /// @notice 代币 B 的合约接口
    IERC20 public tokenB;

    /// @notice 代币 A 的储备量
    /// @dev 记录在合约中的 tokenA 数量
    uint256 public reserveA;
    
    /// @notice 代币 B 的储备量
    /// @dev 记录在合约中的 tokenB 数量
    uint256 public reserveB;

    /// @notice 合约所有者地址
    /// @dev 这里虽然记录了 owner，但代码中没有使用 onlyOwner 修饰符
    address public owner;

    // ==================== 事件 ====================
    
    /// @notice 添加流动性事件
    /// @param provider 流动性提供者地址
    /// @param amountA 添加的 tokenA 数量
    /// @param amountB 添加的 tokenB 数量
    /// @param liquidity 铸造的流动性代币数量
    event LiquidityAdded(address indexed provider, uint256 amountA, uint256 amountB, uint256 liquidity);
    
    /// @notice 移除流动性事件
    /// @param provider 流动性提供者地址
    /// @param amountA 取出的 tokenA 数量
    /// @param amountB 取出的 tokenB 数量
    /// @param liquidity 销毁的流动性代币数量
    event LiquidityRemoved(address indexed provider, uint256 amountA, uint256 amountB, uint256 liquidity);
    
    /// @notice 代币交换事件
    /// @param trader 交易者地址
    /// @param tokenIn 输入代币地址
    /// @param amountIn 输入数量
    /// @param tokenOut 输出代币地址
    /// @param amountOut 输出数量
    event TokensSwapped(address indexed trader, address tokenIn, uint256 amountIn, address tokenOut, uint256 amountOut);

    // ==================== 构造函数 ====================
    
    /// @notice 创建 AMM 合约
    /// @param _tokenA 代币 A 的合约地址
    /// @param _tokenB 代币 B 的合约地址
    /// @param _name 流动性代币的名称
    /// @param _symbol 流动性代币的符号
    /// @dev 继承 ERC20 合约，流动性提供者会收到 LP 代币作为凭证
    constructor(
        address _tokenA, 
        address _tokenB, 
        string memory _name, 
        string memory _symbol
    ) ERC20(_name, _symbol) {
        tokenA = IERC20(_tokenA);  // 初始化 tokenA 接口
        tokenB = IERC20(_tokenB);  // 初始化 tokenB 接口
        owner = msg.sender;         // 记录部署者为所有者
    }

    // ==================== 流动性管理 ====================
    
    /// @notice 向流动性池添加流动性
    /// @param amountA 要添加的 tokenA 数量
    /// @param amountB 要添加的 tokenB 数量
    /// @dev 流动性提供者需要提前授权（approve）合约使用其代币
    /// @dev 首次添加流动性决定代币的初始价格比例
    function addLiquidity(uint256 amountA, uint256 amountB) external {
        // 检查输入金额必须大于 0
        require(amountA > 0 && amountB > 0, "Amounts must be > 0");

        // 从用户账户转移 tokenA 到合约
        // transferFrom 需要用户提前 approve
        tokenA.transferFrom(msg.sender, address(this), amountA);
        tokenB.transferFrom(msg.sender, address(this), amountB);

        // 计算应该铸造的流动性代币数量
        uint256 liquidity;
        if (totalSupply() == 0) {
            // 首次添加流动性：使用几何平均数
            // 公式：liquidity = sqrt(amountA * amountB)
            // 这样可以确保不同比例的池子有公平的 LP 代币分配
            liquidity = sqrt(amountA * amountB);
        } else {
            // 后续添加流动性：按比例分配
            // 取两个代币按比例计算的最小值，防止套利
            liquidity = min(
                amountA * totalSupply() / reserveA,
                amountB * totalSupply() / reserveB
            );
        }

        // 铸造流动性代币给提供者
        // LP 代币代表提供者在池子中的份额
        _mint(msg.sender, liquidity);

        // 更新储备量记录
        reserveA += amountA;
        reserveB += amountB;

        // 触发添加流动性事件
        emit LiquidityAdded(msg.sender, amountA, amountB, liquidity);
    }

    /// @notice 从流动性池移除流动性
    /// @param liquidityToRemove 要移除的流动性代币数量
    /// @return amountAOut 取出的 tokenA 数量
    /// @return amountBOut 取出的 tokenB 数量
    /// @dev 用户需要持有 LP 代币才能移除流动性
    function removeLiquidity(uint256 liquidityToRemove) 
        external 
        returns (uint256 amountAOut, uint256 amountBOut) 
    {
        // 检查要移除的流动性大于 0
        require(liquidityToRemove > 0, "Liquidity to remove must be > 0");
        
        // 检查用户有足够的 LP 代币
        require(balanceOf(msg.sender) >= liquidityToRemove, "Insufficient liquidity tokens");

        // 获取总流动性供应量
        uint256 totalLiquidity = totalSupply();
        require(totalLiquidity > 0, "No liquidity in the pool");

        // 计算用户可以取出的代币数量
        // 公式：取出数量 = (移除的流动性 / 总流动性) * 储备量
        amountAOut = liquidityToRemove * reserveA / totalLiquidity;
        amountBOut = liquidityToRemove * reserveB / totalLiquidity;

        // 检查计算出的数量大于 0
        require(amountAOut > 0 && amountBOut > 0, "Insufficient reserves for requested liquidity");

        // 更新储备量（先更新状态，防止重入攻击）
        reserveA -= amountAOut;
        reserveB -= amountBOut;

        // 销毁用户的 LP 代币
        _burn(msg.sender, liquidityToRemove);

        // 将代币转还给用户
        tokenA.transfer(msg.sender, amountAOut);
        tokenB.transfer(msg.sender, amountBOut);

        // 触发移除流动性事件
        emit LiquidityRemoved(msg.sender, amountAOut, amountBOut, liquidityToRemove);
        
        return (amountAOut, amountBOut);
    }

    // ==================== 代币交换 ====================
    
    /// @notice 用 tokenA 交换 tokenB
    /// @param amountAIn 输入的 tokenA 数量
    /// @param minBOut 最小输出的 tokenB 数量（滑点保护）
    /// @dev 使用恒定乘积公式计算交换数量
    /// @dev 收取 0.3% 的手续费（997/1000）
    function swapAforB(uint256 amountAIn, uint256 minBOut) external {
        // 检查输入金额大于 0
        require(amountAIn > 0, "Amount must be > 0");
        
        // 检查池子有足够的流动性
        require(reserveA > 0 && reserveB > 0, "Insufficient reserves");

        // 计算扣除手续费后的输入金额
        // 手续费 0.3%：amountAIn * 997 / 1000
        uint256 amountAInWithFee = amountAIn * 997 / 1000;
        
        // 使用恒定乘积公式计算输出数量
        // 公式：amountOut = (reserveOut * amountInWithFee) / (reserveIn + amountInWithFee)
        // 这是 AMM 的核心算法，保持 x * y = k 的恒定乘积
        uint256 amountBOut = reserveB * amountAInWithFee / (reserveA + amountAInWithFee);

        // 检查输出数量满足最小要求（滑点保护）
        // 如果实际输出小于 minBOut，交易回滚，保护用户免受大额滑点损失
        require(amountBOut >= minBOut, "Slippage too high");

        // 从用户账户收取 tokenA
        tokenA.transferFrom(msg.sender, address(this), amountAIn);
        
        // 向用户发送 tokenB
        tokenB.transfer(msg.sender, amountBOut);

        // 更新储备量
        // 注意：reserveA 增加的是扣除手续费后的金额
        reserveA += amountAInWithFee;
        reserveB -= amountBOut;

        // 触发交换事件
        emit TokensSwapped(msg.sender, address(tokenA), amountAIn, address(tokenB), amountBOut);
    }

    /// @notice 用 tokenB 交换 tokenA
    /// @param amountBIn 输入的 tokenB 数量
    /// @param minAOut 最小输出的 tokenA 数量（滑点保护）
    /// @dev 与 swapAforB 对称，只是方向相反
    function swapBforA(uint256 amountBIn, uint256 minAOut) external {
        // 检查输入金额大于 0
        require(amountBIn > 0, "Amount must be > 0");
        
        // 检查池子有足够的流动性
        require(reserveA > 0 && reserveB > 0, "Insufficient reserves");

        // 计算扣除手续费后的输入金额
        uint256 amountBInWithFee = amountBIn * 997 / 1000;
        
        // 使用恒定乘积公式计算输出数量
        uint256 amountAOut = reserveA * amountBInWithFee / (reserveB + amountBInWithFee);

        // 检查滑点
        require(amountAOut >= minAOut, "Slippage too high");

        // 收取 tokenB，发送 tokenA
        tokenB.transferFrom(msg.sender, address(this), amountBIn);
        tokenA.transfer(msg.sender, amountAOut);

        // 更新储备量
        reserveB += amountBInWithFee;
        reserveA -= amountAOut;

        // 触发交换事件
        emit TokensSwapped(msg.sender, address(tokenB), amountBIn, address(tokenA), amountAOut);
    }

    // ==================== 查询函数 ====================
    
    /// @notice 查看当前储备量
    /// @return 代币 A 的储备量
    /// @return 代币 B 的储备量
    /// @dev view 函数，不消耗 gas，用于前端查询
    function getReserves() external view returns (uint256, uint256) {
        return (reserveA, reserveB);
    }

    // ==================== 工具函数 ====================
    
    /// @notice 返回两个数中的较小值
    /// @param a 第一个数
    /// @param b 第二个数
    /// @return 较小的那个数
    /// @dev internal pure: 内部纯函数，不读取状态
    function min(uint256 a, uint256 b) internal pure returns (uint256) {
        return a < b ? a : b;
    }

    /// @notice 计算平方根（巴比伦算法）
    /// @param y 输入值
    /// @return z 平方根结果
    /// @dev 使用牛顿迭代法计算整数平方根
    /// @dev 用于首次添加流动性时计算 LP 代币数量
    function sqrt(uint256 y) internal pure returns (uint256 z) {
        if (y > 3) {
            z = y;
            uint256 x = y / 2 + 1;
            // 牛顿迭代：x_{n+1} = (y / x_n + x_n) / 2
            while (x < z) {
                z = x;
                x = (y / x + x) / 2;
            }
        } else if (y != 0) {
            z = 1;
        }
        // 如果 y == 0，z 保持为 0
    }
}`;
    } else if (day === 26) {
        return `// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

// 使用 GitHub 链接导入 OpenZeppelin 合约，方便在 Remix 中直接使用
import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/v5.0.0/contracts/token/ERC721/IERC721.sol";
import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/v5.0.0/contracts/utils/ReentrancyGuard.sol";

/// @title NFT 市场合约
/// @title NFT Marketplace
/// @dev 一个简单的 NFT 交易市场合约，支持挂单、购买、版税和市场费用
/// @dev 继承 ReentrancyGuard 防止重入攻击
contract NFTMarketplace is ReentrancyGuard {
    
    // ==================== 状态变量 ====================
    
    /// @notice 合约所有者地址
    /// @dev 拥有管理权限，可以修改市场费用等
    address public owner;
    
    /// @notice 市场手续费比例（以基点为单位）
    /// @dev 100 = 1%，10000 = 100%
    /// @dev 例如：250 表示 2.5% 的手续费
    uint256 public marketplaceFeePercent;
    
    /// @notice 市场手续费接收地址
    /// @dev 平台收取的手续费会发送到这个地址
    address public feeRecipient;

    /// @notice NFT 挂单信息结构体
    /// @dev 存储每个 NFT 的挂单详情
    struct Listing {
        address seller;           // 卖家地址
        address nftAddress;       // NFT 合约地址
        uint256 tokenId;          // NFT 代币 ID
        uint256 price;            // 售价（以 wei 为单位）
        address royaltyReceiver;  // 版税接收地址（通常是创作者）
        uint256 royaltyPercent;   // 版税比例（基点）
        bool isListed;            // 是否正在挂单中
    }

    /// @notice 挂单映射表
    /// @dev NFT合约地址 => TokenID => 挂单信息
    /// @dev 使用双重映射来定位每个 NFT 的挂单
    mapping(address => mapping(uint256 => Listing)) public listings;

    // ==================== 事件 ====================
    
    /// @notice NFT 挂单事件
    /// @param seller 卖家地址
    /// @param nftAddress NFT 合约地址
    /// @param tokenId NFT 代币 ID
    /// @param price 售价
    /// @param royaltyReceiver 版税接收地址
    /// @param royaltyPercent 版税比例
    event Listed(
        address indexed seller,
        address indexed nftAddress,
        uint256 indexed tokenId,
        uint256 price,
        address royaltyReceiver,
        uint256 royaltyPercent
    );

    /// @notice NFT 购买事件
    /// @param buyer 买家地址
    /// @param nftAddress NFT 合约地址
    /// @param tokenId NFT 代币 ID
    /// @param price 成交价格
    /// @param seller 卖家地址
    /// @param royaltyReceiver 版税接收地址
    /// @param royaltyAmount 版税金额
    /// @param marketplaceFeeAmount 市场手续费金额
    event Purchase(
        address indexed buyer,
        address indexed nftAddress,
        uint256 indexed tokenId,
        uint256 price,
        address seller,
        address royaltyReceiver,
        uint256 royaltyAmount,
        uint256 marketplaceFeeAmount
    );

    /// @notice 取消挂单事件
    /// @param seller 卖家地址
    /// @param nftAddress NFT 合约地址
    /// @param tokenId NFT 代币 ID
    event Unlisted(
        address indexed seller,
        address indexed nftAddress,
        uint256 indexed tokenId
    );

    /// @notice 费用更新事件
    /// @param newMarketplaceFee 新的市场手续费比例
    /// @param newFeeRecipient 新的手续费接收地址
    event FeeUpdated(
        uint256 newMarketplaceFee,
        address newFeeRecipient
    );

    // ==================== 构造函数 ====================
    
    /// @notice 创建 NFT 市场合约
    /// @param _marketplaceFeePercent 市场手续费比例（基点）
    /// @param _feeRecipient 手续费接收地址
    /// @dev 初始化合约时设置手续费参数
    constructor(uint256 _marketplaceFeePercent, address _feeRecipient) {
        // 检查手续费不超过 10%（1000 基点）
        require(_marketplaceFeePercent <= 1000, "Marketplace fee too high (max 10%)");
        // 检查手续费接收地址不为零地址
        require(_feeRecipient != address(0), "Fee recipient cannot be zero");

        owner = msg.sender;  // 设置合约所有者为部署者
        marketplaceFeePercent = _marketplaceFeePercent;
        feeRecipient = _feeRecipient;
    }

    // ==================== 修饰符 ====================
    
    /// @notice 仅所有者修饰符
    /// @dev 限制只有合约所有者可以调用某些函数
    modifier onlyOwner() {
        require(msg.sender == owner, "Only owner");
        _;
    }

    // ==================== 管理函数 ====================
    
    /// @notice 设置市场手续费比例
    /// @param _newFee 新的手续费比例（基点）
    /// @dev 只有合约所有者可以调用
    /// @dev 手续费不能超过 10%
    function setMarketplaceFeePercent(uint256 _newFee) external onlyOwner {
        require(_newFee <= 1000, "Marketplace fee too high");
        marketplaceFeePercent = _newFee;
        emit FeeUpdated(_newFee, feeRecipient);
    }

    /// @notice 设置手续费接收地址
    /// @param _newRecipient 新的接收地址
    /// @dev 只有合约所有者可以调用
    function setFeeRecipient(address _newRecipient) external onlyOwner {
        require(_newRecipient != address(0), "Invalid fee recipient");
        feeRecipient = _newRecipient;
        emit FeeUpdated(marketplaceFeePercent, _newRecipient);
    }

    // ==================== 核心功能 ====================
    
    /// @notice 挂单出售 NFT
    /// @param nftAddress NFT 合约地址
    /// @param tokenId NFT 代币 ID
    /// @param price 售价（wei）
    /// @param royaltyReceiver 版税接收地址
    /// @param royaltyPercent 版税比例（基点）
    /// @dev 卖家需要提前授权市场合约转移其 NFT
    function listNFT(
        address nftAddress,
        uint256 tokenId,
        uint256 price,
        address royaltyReceiver,
        uint256 royaltyPercent
    ) external {
        // 检查价格大于 0
        require(price > 0, "Price must be above zero");
        // 检查版税不超过 10%
        require(royaltyPercent <= 1000, "Max 10% royalty allowed");
        // 检查该 NFT 尚未挂单
        require(!listings[nftAddress][tokenId].isListed, "Already listed");

        // 获取 NFT 合约接口
        IERC721 nft = IERC721(nftAddress);
        // 检查调用者是 NFT 的所有者
        require(nft.ownerOf(tokenId) == msg.sender, "Not the owner");
        // 检查市场合约是否被授权转移该 NFT
        require(
            nft.getApproved(tokenId) == address(this) || nft.isApprovedForAll(msg.sender, address(this)),
            "Marketplace not approved"
        );

        // 创建挂单信息
        listings[nftAddress][tokenId] = Listing({
            seller: msg.sender,
            nftAddress: nftAddress,
            tokenId: tokenId,
            price: price,
            royaltyReceiver: royaltyReceiver,
            royaltyPercent: royaltyPercent,
            isListed: true
        });

        // 触发挂单事件
        emit Listed(msg.sender, nftAddress, tokenId, price, royaltyReceiver, royaltyPercent);
    }

    /// @notice 购买 NFT
    /// @param nftAddress NFT 合约地址
    /// @param tokenId NFT 代币 ID
    /// @dev 买家需要发送正确的 ETH 金额
    /// @dev 使用 nonReentrant 防止重入攻击
    function buyNFT(address nftAddress, uint256 tokenId) external payable nonReentrant {
        // 获取挂单信息
        Listing memory item = listings[nftAddress][tokenId];
        // 检查 NFT 正在挂单中
        require(item.isListed, "Not listed");
        // 检查发送的 ETH 金额正确
        require(msg.value == item.price, "Incorrect ETH sent");
        // 检查版税 + 市场费不超过 100%
        require(
            item.royaltyPercent + marketplaceFeePercent <= 10000,
            "Fees exceed 100%"
        );

        // 计算市场手续费
        uint256 feeAmount = (msg.value * marketplaceFeePercent) / 10000;
        // 计算版税金额
        uint256 royaltyAmount = (msg.value * item.royaltyPercent) / 10000;
        // 计算卖家实际收到的金额
        uint256 sellerAmount = msg.value - feeAmount - royaltyAmount;

        // ========== 资金分配 ==========
        
        // 1. 支付市场手续费
        // 使用 call 替代已弃用的 transfer
        if (feeAmount > 0) {
            (bool sent, ) = payable(feeRecipient).call{value: feeAmount}("");
            require(sent, "Fee transfer failed");
        }

        // 2. 支付创作者版税
        if (royaltyAmount > 0 && item.royaltyReceiver != address(0)) {
            (bool sent, ) = payable(item.royaltyReceiver).call{value: royaltyAmount}("");
            require(sent, "Royalty transfer failed");
        }

        // 3. 支付卖家
        (bool sent, ) = payable(item.seller).call{value: sellerAmount}("");
        require(sent, "Seller transfer failed");

        // ========== NFT 转移 ==========
        
        // 将 NFT 从卖家转移给买家
        IERC721(item.nftAddress).safeTransferFrom(item.seller, msg.sender, item.tokenId);

        // 删除挂单记录
        delete listings[nftAddress][tokenId];

        // 触发购买事件
        emit Purchase(
            msg.sender,
            nftAddress,
            tokenId,
            msg.value,
            item.seller,
            item.royaltyReceiver,
            royaltyAmount,
            feeAmount
        );
    }

    /// @notice 取消挂单
    /// @param nftAddress NFT 合约地址
    /// @param tokenId NFT 代币 ID
    /// @dev 只有卖家本人可以取消自己的挂单
    function cancelListing(address nftAddress, uint256 tokenId) external {
        Listing memory item = listings[nftAddress][tokenId];
        // 检查 NFT 正在挂单中
        require(item.isListed, "Not listed");
        // 检查调用者是卖家
        require(item.seller == msg.sender, "Not the seller");

        // 删除挂单记录
        delete listings[nftAddress][tokenId];
        // 触发取消挂单事件
        emit Unlisted(msg.sender, nftAddress, tokenId);
    }

    // ==================== 查询函数 ====================
    
    /// @notice 获取 NFT 的挂单信息
    /// @param nftAddress NFT 合约地址
    /// @param tokenId NFT 代币 ID
    /// @return 挂单信息结构体
    /// @dev view 函数，不消耗 gas
    function getListing(address nftAddress, uint256 tokenId) external view returns (Listing memory) {
        return listings[nftAddress][tokenId];
    }

    // ==================== 回退函数 ====================
    
    /// @notice 接收 ETH 的回退函数
    /// @dev 拒绝直接接收 ETH，必须通过 buyNFT 函数
    receive() external payable {
        revert("Direct ETH not accepted");
    }

    /// @notice 未知函数调用的回退函数
    /// @dev 拒绝所有未知函数调用
    fallback() external payable {
        revert("Unknown function");
    }
}`;
    } else if (day === 27) {
        return `// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

// 使用 GitHub 链接导入 OpenZeppelin 合约，方便在 Remix 中直接使用
import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/v5.0.0/contracts/token/ERC20/IERC20.sol";
import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/v5.0.0/contracts/utils/ReentrancyGuard.sol";
import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/v5.0.0/contracts/utils/math/SafeCast.sol";

// ==================== 自定义接口 ====================

/// @title ERC20 元数据接口
/// @dev 用于获取代币的小数位数、名称和符号
/// @dev 标准 IERC20 不包含这些信息，需要扩展接口
interface IERC20Metadata is IERC20 {
    /// @notice 获取代币小数位数
    /// @return 小数位数（通常为 18）
    function decimals() external view returns (uint8);
    
    /// @notice 获取代币名称
    /// @return 代币全称
    function name() external view returns (string memory);
    
    /// @notice 获取代币符号
    /// @return 代币简称（如 ETH、USDC）
    function symbol() external view returns (string memory);
}

/// @title 收益耕作合约
/// @title Yield Farming Platform
/// @dev 用户质押代币以随时间赚取奖励
/// @dev 支持紧急提取和管理员补充奖励
/// @dev 使用奖励债务（reward debt）模式计算收益
contract YieldFarming is ReentrancyGuard {
    
    // 使用 SafeCast 库进行安全的类型转换
    using SafeCast for uint256;

    // ==================== 状态变量 ====================
    
    /// @notice 质押代币合约接口
    /// @dev 用户质押的这种代币
    IERC20 public stakingToken;
    
    /// @notice 奖励代币合约接口
    /// @dev 用户获得的奖励是这种代币
    IERC20 public rewardToken;

    /// @notice 每秒分配的奖励数量
    /// @dev 这是全局奖励速率，不是每用户的
    /// @dev 实际奖励按质押比例分配
    uint256 public rewardRatePerSecond;

    /// @notice 合约所有者地址
    /// @dev 拥有管理权限，可以补充奖励
    address public owner;

    /// @notice 质押代币的小数位数
    /// @dev 用于计算奖励时的精度调整
    /// @dev 通常为 18，但某些代币可能不同（如 USDC 是 6）
    uint8 public stakingTokenDecimals;

    /// @notice 质押者信息结构体
    /// @dev 记录每个用户的质押状态和奖励信息
    struct StakerInfo {
        uint256 stakedAmount;    // 已质押的代币数量
        uint256 rewardDebt;      // 已累积但尚未领取的奖励
        uint256 lastUpdate;      // 上次更新奖励的时间戳
    }

    /// @notice 质押者信息映射
    /// @dev 用户地址 => 质押信息
    mapping(address => StakerInfo) public stakers;

    // ==================== 事件 ====================
    
    /// @notice 质押事件
    /// @param user 用户地址
    /// @param amount 质押数量
    event Staked(address indexed user, uint256 amount);
    
    /// @notice 取消质押事件
    /// @param user 用户地址
    /// @param amount 取消质押数量
    event Unstaked(address indexed user, uint256 amount);
    
    /// @notice 领取奖励事件
    /// @param user 用户地址
    /// @param amount 奖励数量
    event RewardClaimed(address indexed user, uint256 amount);
    
    /// @notice 紧急提取事件
    /// @param user 用户地址
    /// @param amount 提取数量
    event EmergencyWithdraw(address indexed user, uint256 amount);
    
    /// @notice 补充奖励事件
    /// @param owner 管理员地址
    /// @param amount 补充的奖励数量
    event RewardRefilled(address indexed owner, uint256 amount);

    // ==================== 修饰符 ====================
    
    /// @notice 仅所有者修饰符
    /// @dev 限制只有合约所有者可以调用
    modifier onlyOwner() {
        require(msg.sender == owner, "Not the owner");
        _;
    }

    // ==================== 构造函数 ====================
    
    /// @notice 创建收益耕作合约
    /// @param _stakingToken 质押代币合约地址
    /// @param _rewardToken 奖励代币合约地址
    /// @param _rewardRatePerSecond 每秒奖励数量
    /// @dev 尝试获取质押代币的小数位数，失败则默认为 18
    constructor(
        address _stakingToken,
        address _rewardToken,
        uint256 _rewardRatePerSecond
    ) {
        stakingToken = IERC20(_stakingToken);
        rewardToken = IERC20(_rewardToken);
        rewardRatePerSecond = _rewardRatePerSecond;
        owner = msg.sender;

        // 尝试获取质押代币的小数位数
        // 使用 try-catch 防止某些代币没有实现 decimals()
        try IERC20Metadata(_stakingToken).decimals() returns (uint8 decimals) {
            stakingTokenDecimals = decimals;
        } catch (bytes memory) {
            // 如果获取失败，默认为 18 位小数（标准 ERC20）
            stakingTokenDecimals = 18;
        }
    }

    // ==================== 核心功能 ====================
    
    /// @notice 质押代币
    /// @param amount 要质押的数量
    /// @dev 用户需要提前授权合约使用其代币
    /// @dev 质押后开始累积奖励
    function stake(uint256 amount) external nonReentrant {
        // 检查质押数量大于 0
        require(amount > 0, "Cannot stake 0");

        // 更新用户奖励（计算从上次更新到现在的奖励）
        updateRewards(msg.sender);

        // 从用户账户转移质押代币到合约
        stakingToken.transferFrom(msg.sender, address(this), amount);
        
        // 增加用户的质押数量
        stakers[msg.sender].stakedAmount += amount;

        // 触发质押事件
        emit Staked(msg.sender, amount);
    }

    /// @notice 取消质押代币
    /// @param amount 要取消质押的数量
    /// @dev 取消质押时会自动更新奖励
    function unstake(uint256 amount) external nonReentrant {
        // 检查取消质押数量大于 0
        require(amount > 0, "Cannot unstake 0");
        // 检查用户有足够的质押数量
        require(stakers[msg.sender].stakedAmount >= amount, "Not enough staked");

        // 更新用户奖励
        updateRewards(msg.sender);

        // 减少用户的质押数量
        stakers[msg.sender].stakedAmount -= amount;
        
        // 将质押代币返还给用户
        stakingToken.transfer(msg.sender, amount);

        // 触发取消质押事件
        emit Unstaked(msg.sender, amount);
    }

    /// @notice 领取累积的奖励
    /// @dev 将 rewardDebt 中累积的奖励转给用户
    function claimRewards() external nonReentrant {
        // 更新用户奖励（计算最新奖励）
        updateRewards(msg.sender);

        // 获取可领取的奖励数量
        uint256 reward = stakers[msg.sender].rewardDebt;
        
        // 检查有奖励可领取
        require(reward > 0, "No rewards to claim");
        // 检查合约有足够的奖励代币余额
        require(rewardToken.balanceOf(address(this)) >= reward, "Insufficient reward token balance");

        // 清空用户的奖励债务
        stakers[msg.sender].rewardDebt = 0;
        
        // 将奖励代币转给用户
        rewardToken.transfer(msg.sender, reward);

        // 触发领取奖励事件
        emit RewardClaimed(msg.sender, reward);
    }

    /// @notice 紧急提取质押代币
    /// @dev 紧急情况下可以不领取奖励直接取回质押
    /// @dev 这会清空用户的所有奖励
    function emergencyWithdraw() external nonReentrant {
        // 获取用户的质押数量
        uint256 amount = stakers[msg.sender].stakedAmount;
        
        // 检查有质押可取
        require(amount > 0, "Nothing staked");

        // 清空用户的所有状态（放弃奖励）
        stakers[msg.sender].stakedAmount = 0;
        stakers[msg.sender].rewardDebt = 0;
        stakers[msg.sender].lastUpdate = block.timestamp;

        // 将质押代币返还给用户
        stakingToken.transfer(msg.sender, amount);

        // 触发紧急提取事件
        emit EmergencyWithdraw(msg.sender, amount);
    }

    // ==================== 管理功能 ====================
    
    /// @notice 补充奖励代币
    /// @param amount 要补充的奖励数量
    /// @dev 只有合约所有者可以调用
    /// @dev 需要提前授权合约使用奖励代币
    function refillRewards(uint256 amount) external onlyOwner {
        // 从所有者账户转移奖励代币到合约
        rewardToken.transferFrom(msg.sender, address(this), amount);

        // 触发补充奖励事件
        emit RewardRefilled(msg.sender, amount);
    }

    // ==================== 内部函数 ====================
    
    /// @notice 更新用户的奖励
    /// @param user 用户地址
    /// @dev 内部函数，在质押、取消质押、领取奖励时调用
    /// @dev 计算从 lastUpdate 到现在应得的奖励
    function updateRewards(address user) internal {
        StakerInfo storage staker = stakers[user];

        // 只有当用户有质押时才计算奖励
        if (staker.stakedAmount > 0) {
            // 计算时间差（秒）
            uint256 timeDiff = block.timestamp - staker.lastUpdate;
            
            // 计算奖励倍数（用于精度调整）
            // 10^decimals 用于将计算结果标准化
            uint256 rewardMultiplier = 10 ** stakingTokenDecimals;
            
            // 计算待领取的奖励
            // 公式：时间差 * 每秒奖励 * 质押数量 / 精度倍数
            uint256 pendingReward = (timeDiff * rewardRatePerSecond * staker.stakedAmount) / rewardMultiplier;
            
            // 累加到用户的奖励债务
            staker.rewardDebt += pendingReward;
        }

        // 更新上次计算时间
        staker.lastUpdate = block.timestamp;
    }

    // ==================== 查询函数 ====================
    
    /// @notice 查看用户的待领取奖励
    /// @param user 用户地址
    /// @return 待领取的奖励数量
    /// @dev view 函数，不消耗 gas
    /// @dev 包含已累积的 rewardDebt 和当前正在累积的奖励
    function pendingRewards(address user) external view returns (uint256) {
        StakerInfo memory staker = stakers[user];

        // 从 rewardDebt 开始
        uint256 pendingReward = staker.rewardDebt;

        // 如果用户有质押，计算从 lastUpdate 到现在的奖励
        if (staker.stakedAmount > 0) {
            uint256 timeDiff = block.timestamp - staker.lastUpdate;
            uint256 rewardMultiplier = 10 ** stakingTokenDecimals;
            pendingReward += (timeDiff * rewardRatePerSecond * staker.stakedAmount) / rewardMultiplier;
        }

        return pendingReward;
    }

    /// @notice 查看质押代币的小数位数
    /// @return 小数位数
    /// @dev view 函数，不消耗 gas
    function getStakingTokenDecimals() external view returns (uint8) {
        return stakingTokenDecimals;
    }
}`;
    } else if (day === 28) {
        return `// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

// 使用 GitHub 链接导入 OpenZeppelin 合约，方便在 Remix 中直接使用
import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/v5.0.0/contracts/utils/ReentrancyGuard.sol";
import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/v5.0.0/contracts/token/ERC20/IERC20.sol";

/// @title 去中心化治理合约
/// @title Decentralized Governance
/// @dev 一个基于代币持有量的 DAO 治理合约
/// @dev 支持创建提案、投票、执行提案等功能
/// @dev 包含时间锁机制，确保提案有足够时间被审查
contract DecentralizedGovernance is ReentrancyGuard {
    
    // ==================== 状态变量 ====================
    
    /// @notice 治理代币合约接口
    /// @dev 用于确定投票权（1 代币 = 1 票）
    IERC20 public governanceToken;
    
    /// @notice 提案总数计数器
    /// @dev 每次创建新提案时递增
    uint256 public proposalCount;

    // ==================== 常量配置 ====================
    
    /// @notice 投票期时长
    /// @dev 提案创建后的投票持续时间
    uint256 public constant VOTING_PERIOD = 3 days;
    
    /// @notice 时间锁定期时长
    /// @dev 提案通过后到可以执行的等待时间
    /// @dev 给用户时间审查通过的提案并采取行动
    uint256 public constant TIMELOCK_PERIOD = 2 days;
    
    /// @notice 法定人数百分比
    /// @dev 提案通过所需的最小投票参与率
    /// @dev 10 表示需要至少 10% 的总代币供应量参与投票
    uint256 public constant QUORUM_PERCENTAGE = 10;
    
    /// @notice 创建提案所需的押金
    /// @dev 100 个代币（假设 18 位小数）
    /// @dev 用于防止垃圾提案，提案成功执行后退还
    uint256 public constant PROPOSAL_DEPOSIT = 100 * 10**18;

    // ==================== 数据结构 ====================
    
    /// @notice 提案结构体
    /// @dev 存储提案的所有信息
    struct Proposal {
        uint256 id;                    // 提案唯一标识符
        address proposer;              // 提案创建者地址
        string description;            // 提案描述文本
        uint256 deadline;              // 投票截止时间戳
        uint256 votesFor;              // 赞成票总数
        uint256 votesAgainst;          // 反对票总数
        bool executed;                 // 是否已执行
        bool cancelled;                // 是否已取消
        uint256 executionTime;         // 可执行时间（通过 + 时间锁）
        bytes[] executionData;         // 要执行的调用数据数组
        address[] executionTargets;    // 要调用的目标合约地址数组
        mapping(address => bool) hasVoted;  // 记录谁已经投过票
    }
    
    /// @notice 提案映射表
    /// @dev 提案 ID => 提案信息
    mapping(uint256 => Proposal) public proposals;

    // ==================== 事件 ====================
    
    /// @notice 提案创建事件
    /// @param proposalId 提案 ID
    /// @param proposer 提案创建者
    /// @param description 提案描述
    event ProposalCreated(uint256 indexed proposalId, address indexed proposer, string description);
    
    /// @notice 投票事件
    /// @param proposalId 提案 ID
    /// @param voter 投票者地址
    /// @param support 是否赞成（true=赞成，false=反对）
    /// @param weight 投票权重（代币数量）
    event Voted(uint256 indexed proposalId, address indexed voter, bool support, uint256 weight);
    
    /// @notice 提案执行事件
    /// @param proposalId 被执行的提案 ID
    event ProposalExecuted(uint256 indexed proposalId);
    
    /// @notice 提案取消事件
    /// @param proposalId 被取消的提案 ID
    event ProposalCancelled(uint256 indexed proposalId);

    // ==================== 构造函数 ====================
    
    /// @notice 创建治理合约
    /// @param _governanceToken 治理代币合约地址
    /// @dev 治理代币用于确定投票权
    constructor(address _governanceToken) {
        governanceToken = IERC20(_governanceToken);
    }

    // ==================== 核心功能 ====================
    
    /// @notice 创建新提案
    /// @param _description 提案描述
    /// @param _targets 要调用的目标合约地址数组
    /// @param _data 每个目标合约的调用数据数组
    /// @return 新创建的提案 ID
    /// @dev 需要支付 PROPOSAL_DEPOSIT 押金防止垃圾提案
    /// @dev targets 和 data 数组长度必须相同
    function createProposal(
        string memory _description,
        address[] memory _targets,
        bytes[] memory _data
    ) external returns (uint256) {
        // 1. 收取押金防止垃圾提案
        // 提案者需要授权合约转移其代币
        require(
            governanceToken.transferFrom(msg.sender, address(this), PROPOSAL_DEPOSIT),
            "Deposit failed"
        );
        
        // 2. 创建提案
        proposalCount++;
        Proposal storage newProposal = proposals[proposalCount];
        newProposal.id = proposalCount;
        newProposal.proposer = msg.sender;
        newProposal.description = _description;
        // 设置投票截止时间为当前时间 + 投票期
        newProposal.deadline = block.timestamp + VOTING_PERIOD;
        newProposal.executionTargets = _targets;
        newProposal.executionData = _data;
        
        // 触发提案创建事件
        emit ProposalCreated(proposalCount, msg.sender, _description);
        return proposalCount;
    }

    /// @notice 对提案进行投票
    /// @param _proposalId 要投票的提案 ID
    /// @param _support 是否赞成（true=赞成，false=反对）
    /// @dev 投票权重 = 投票者持有的治理代币数量
    /// @dev 每个地址只能投一次票
    function vote(uint256 _proposalId, bool _support) external {
        Proposal storage proposal = proposals[_proposalId];
        
        // 1. 验证检查
        // 检查投票期是否未结束
        require(block.timestamp < proposal.deadline, "Voting period ended");
        // 检查用户是否未投过票
        require(!proposal.hasVoted[msg.sender], "Already voted");
        // 检查提案是否未被执行
        require(!proposal.executed, "Already executed");
        
        // 2. 获取投票者的代币余额作为投票权重
        // 1 代币 = 1 票，代币越多投票权越大
        uint256 weight = governanceToken.balanceOf(msg.sender);
        require(weight > 0, "No voting power");
        
        // 3. 记录投票
        proposal.hasVoted[msg.sender] = true;
        
        // 根据支持/反对分别累加票数
        if (_support) {
            proposal.votesFor += weight;
        } else {
            proposal.votesAgainst += weight;
        }
        
        // 触发投票事件
        emit Voted(_proposalId, msg.sender, _support, weight);
    }

    /// @notice 最终确定提案（进入时间锁）
    /// @param _proposalId 要最终确定的提案 ID
    /// @dev 任何人都可以调用，不限于提案创建者
    /// @dev 检查投票结果和法定人数
    function finalize(uint256 _proposalId) external {
        Proposal storage proposal = proposals[_proposalId];
        
        // 检查投票期已结束
        require(block.timestamp >= proposal.deadline, "Voting still active");
        // 检查提案未被执行
        require(!proposal.executed, "Already executed");
        
        // 计算法定人数
        // 法定人数 = 总供应量 × 法定人数百分比 / 100
        uint256 totalSupply = governanceToken.totalSupply();
        uint256 quorumRequired = (totalSupply * QUORUM_PERCENTAGE) / 100;
        uint256 totalVotes = proposal.votesFor + proposal.votesAgainst;
        
        // 检查是否达到法定人数（足够多的人参与了投票）
        require(totalVotes >= quorumRequired, "Quorum not met");
        // 检查赞成票是否多于反对票
        require(proposal.votesFor > proposal.votesAgainst, "Proposal rejected");
        
        // 设置执行时间（当前时间 + 时间锁定期）
        proposal.executionTime = block.timestamp + TIMELOCK_PERIOD;
    }

    /// @notice 执行已通过时间锁的提案
    /// @param _proposalId 要执行的提案 ID
    /// @dev 使用 nonReentrant 防止重入攻击
    /// @dev 执行所有预设的合约调用
    function execute(uint256 _proposalId) external nonReentrant {
        Proposal storage proposal = proposals[_proposalId];
        
        // 检查提案已通过 finalize（executionTime > 0）
        require(proposal.executionTime > 0, "Not finalized");
        // 检查时间锁已过期
        require(block.timestamp >= proposal.executionTime, "Timelock active");
        // 检查提案未被执行
        require(!proposal.executed, "Already executed");
        
        // 标记提案为已执行
        proposal.executed = true;
        
        // 执行所有预设的调用
        // 遍历所有目标地址和调用数据
        for (uint256 i = 0; i < proposal.executionTargets.length; i++) {
            // 使用 low-level call 执行调用
            (bool success, ) = proposal.executionTargets[i].call(proposal.executionData[i]);
            require(success, "Execution failed");
        }
        
        // 将押金退还给提案创建者
        governanceToken.transfer(proposal.proposer, PROPOSAL_DEPOSIT);
        
        // 触发提案执行事件
        emit ProposalExecuted(_proposalId);
    }
}

// ==================== 合约设计要点说明 ====================
//
// 1. DAO 治理核心概念:
//    - 去中心化自治组织（DAO）: 由代码和代币持有者共同管理的组织
//    - 提案（Proposal）: 社区成员提出的改进或行动建议
//    - 投票权（Voting Power）: 由治理代币持有量决定
//    - 法定人数（Quorum）: 提案通过所需的最小参与率
//    - 时间锁（Timelock）: 提案通过后到执行的延迟期
//
// 2. 提案生命周期:
//    
//    创建提案 → 投票期（3天） → 最终确定 → 时间锁（2天） → 执行
//       ↓
//    支付押金
//
//    各阶段说明:
//    - 创建: 支付押金，设置提案内容和执行操作
//    - 投票期: 代币持有者投票（赞成/反对）
//    - 最终确定: 检查是否达到法定人数和多数赞成
//    - 时间锁: 给用户时间审查和准备（如需要退出）
//    - 执行: 执行提案中的操作，退还押金
//
// 3. 投票机制:
//    - 1 代币 = 1 票（线性投票）
//    - 代币余额快照在投票时获取
//    - 每个地址只能投一次票
//    - 投票不可撤销或更改
//
// 4. 使用流程:
//    创建提案:
//    1. 准备提案描述和执行操作（targets + data）
//    2. 授权合约使用押金: governanceToken.approve(govAddress, 100e18)
//    3. 调用 createProposal(description, targets, data)
//    
//    投票:
//    1. 持有治理代币
//    2. 调用 vote(proposalId, support) 投票
//    
//    执行提案:
//    1. 等待投票期结束
//    2. 任何人调用 finalize(proposalId) 进入时间锁
//    3. 等待时间锁过期（2天）
//    4. 任何人调用 execute(proposalId) 执行
//
// 5. 安全机制:
//    - ReentrancyGuard: 防止执行阶段的重入攻击
//    - 时间锁: 给用户时间审查通过的提案
//    - 押金机制: 防止垃圾提案
//    - 法定人数: 确保足够参与度
//    - 多数决: 需要赞成票多于反对票
//
// 6. 与真实 DAO 的区别:
//    - 本合约使用简单的时间锁
//    - 真实 DAO（如 Compound、Uniswap）有更复杂的委托投票机制
//    - 真实 DAO 通常有提案阈值（需要持有一定数量代币才能提案）
//    - 真实 DAO 可能有投票委托（delegation）功能
//
// 7. 潜在问题:
//    - 没有取消提案的功能
//    - 投票期间代币转移不影响已投票数（可能被利用）
//    - 没有紧急暂停功能
//    - 执行失败时押金仍会被退还
//
// 8. 关键知识点:
//    - DAO 治理模型
//    - 时间锁安全机制
//    - 低级别调用（low-level call）
//    - 代币治理模式
//`;
    } else if (day === 29) {
        return `// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

// 使用 GitHub 链接导入 OpenZeppelin 合约，方便在 Remix 中直接使用
import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/v5.0.0/contracts/token/ERC20/ERC20.sol";
import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/v5.0.0/contracts/utils/ReentrancyGuard.sol";
import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/v5.0.0/contracts/access/Ownable.sol";

// ==================== Mock Chainlink 预言机 ====================

/// @title Mock Chainlink 价格预言机
/// @dev 模拟 Chainlink AggregatorV3Interface 接口
/// @dev 用于本地测试，管理员可以手动设置价格
contract MockPriceFeed {
    /// @notice 价格数据结构
    struct RoundData {
        uint80 roundId;
        int256 answer;
        uint256 startedAt;
        uint256 updatedAt;
        uint80 answeredInRound;
    }
    
    RoundData public latestRoundDataStored;
    uint8 public decimals = 8;
    address public admin;
    
    constructor(int256 _initialPrice) {
        admin = msg.sender;
        updatePrice(_initialPrice);
    }
    
    function updatePrice(int256 _price) public {
        require(msg.sender == admin, "Only admin");
        latestRoundDataStored = RoundData({
            roundId: latestRoundDataStored.roundId + 1,
            answer: _price,
            startedAt: block.timestamp,
            updatedAt: block.timestamp,
            answeredInRound: latestRoundDataStored.roundId + 1
        });
    }
    
    function latestRoundData() external view returns (
        uint80 roundId,
        int256 answer,
        uint256 startedAt,
        uint256 updatedAt,
        uint80 answeredInRound
    ) {
        return (
            latestRoundDataStored.roundId,
            latestRoundDataStored.answer,
            latestRoundDataStored.startedAt,
            latestRoundDataStored.updatedAt,
            latestRoundDataStored.answeredInRound
        );
    }
}

interface AggregatorV3Interface {
    function decimals() external view returns (uint8);
    function latestRoundData() external view returns (
        uint80 roundId,
        int256 answer,
        uint256 startedAt,
        uint256 updatedAt,
        uint80 answeredInRound
    );
}

// ==================== 稳定币合约 ====================

/// @title 简单稳定币合约
/// @dev 一个超额抵押的稳定币系统，以 ETH 作为抵押品
/// @dev 抵押率要求 150%，即每铸造 1 美元稳定币需要 1.5 美元 ETH 抵押
contract SimpleStablecoin is ERC20, ReentrancyGuard, Ownable {
    
    AggregatorV3Interface internal priceFeed;
    uint256 public constant COLLATERAL_RATIO = 150;
    uint256 public constant LIQUIDATION_BONUS = 5;
    mapping(address => uint256) public collateralDeposited;

    event CollateralDeposited(address indexed user, uint256 amount);
    event StablecoinMinted(address indexed user, uint256 amount);
    event StablecoinBurned(address indexed user, uint256 amount);
    event CollateralWithdrawn(address indexed user, uint256 amount);
    event Liquidation(address indexed liquidator, address indexed user, uint256 debtPaid, uint256 collateralSeized);

    constructor(address _priceFeedAddress) 
        ERC20("StableUSD", "SUSD") 
        Ownable(msg.sender) 
    {
        priceFeed = AggregatorV3Interface(_priceFeedAddress);
    }

    /// @notice 存入 ETH 作为抵押品
    function depositCollateral() external payable {
        require(msg.value > 0, "Must deposit some ETH");
        collateralDeposited[msg.sender] += msg.value;
        emit CollateralDeposited(msg.sender, msg.value);
    }

    /// @notice 铸造稳定币
    /// @param amountToMint 要铸造的稳定币数量
    function mintStablecoin(uint256 amountToMint) external nonReentrant {
        uint256 currentEthValue = getCollateralValueInUsd(msg.sender);
        uint256 currentDebt = balanceOf(msg.sender);
        uint256 maxMintable = (currentEthValue * 100) / COLLATERAL_RATIO;
        
        require(currentDebt + amountToMint <= maxMintable, "Not enough collateral!");
        _mint(msg.sender, amountToMint);
        emit StablecoinMinted(msg.sender, amountToMint);
    }

    /// @notice 销毁稳定币
    function burnStablecoin(uint256 amountToBurn) external nonReentrant {
        _burn(msg.sender, amountToBurn);
        emit StablecoinBurned(msg.sender, amountToBurn);
    }

    /// @notice 提取抵押品
    function withdrawCollateral(uint256 amount) external nonReentrant {
        uint256 currentDebt = balanceOf(msg.sender);
        uint256 remainingCollateral = collateralDeposited[msg.sender] - amount;
        uint256 remainingValue = (remainingCollateral * getEthPrice()) / 1e18;
        uint256 requiredCollateralValue = (currentDebt * COLLATERAL_RATIO) / 100;

        require(remainingValue >= requiredCollateralValue, "Health factor too low");
        collateralDeposited[msg.sender] -= amount;
        
        (bool sent, ) = payable(msg.sender).call{value: amount}("");
        require(sent, "ETH transfer failed");
        emit CollateralWithdrawn(msg.sender, amount);
    }

    /// @notice 清算不健康的头寸
    function liquidate(address user) external nonReentrant {
        uint256 collateralValue = getCollateralValueInUsd(user);
        uint256 debtValue = balanceOf(user);
        
        if (debtValue == 0) return;

        uint256 healthFactor = (collateralValue * 100) / debtValue;
        require(healthFactor < COLLATERAL_RATIO, "Position is healthy");
        
        _burn(msg.sender, debtValue);
        uint256 collateralToTransfer = collateralDeposited[user];
        collateralDeposited[user] = 0;
        
        (bool sent, ) = payable(msg.sender).call{value: collateralToTransfer * (100 + LIQUIDATION_BONUS) / 100}("");
        require(sent, "Collateral transfer failed");
        emit Liquidation(msg.sender, user, debtValue, collateralToTransfer);
    }

    /// @notice 获取 ETH 当前价格（18位小数）
    function getEthPrice() public view returns (uint256) {
        (, int256 price, , , ) = priceFeed.latestRoundData();
        if (price < 0) return 0;
        return uint256(price) * 1e10; // 8位 -> 18位
    }

    /// @notice 获取用户抵押品的美元价值
    function getCollateralValueInUsd(address user) public view returns (uint256) {
        uint256 ethAmount = collateralDeposited[user];
        uint256 ethPrice = getEthPrice();
        return (ethAmount * ethPrice) / 1e18;
    }
    
    /// @notice 获取用户的健康因子
    function getHealthFactor(address user) external view returns (uint256) {
        uint256 collateralValue = getCollateralValueInUsd(user);
        uint256 debtValue = balanceOf(user);
        if (debtValue == 0) return type(uint256).max;
        return (collateralValue * 100) / debtValue;
    }
    
    /// @notice 获取最大可铸造金额
    function getMaxMintable(address user) external view returns (uint256) {
        uint256 collateralValue = getCollateralValueInUsd(user);
        return (collateralValue * 100) / COLLATERAL_RATIO;
    }
}

// ==================== 合约设计要点 ====================
// 1. 超额抵押: 抵押品价值 > 铸造的稳定币价值
// 2. 抵押率: 抵押品价值 / 债务价值（要求 150%）
// 3. 清算机制: 健康因子 < 150% 时可被清算
// 4. 预言机: 使用 Chainlink 获取 ETH/USD 价格
// 5. 小数转换: 8位 -> 18位需要乘以 1e10
`;
    }
    return "";
};
