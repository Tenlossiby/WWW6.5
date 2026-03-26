import { ref, computed } from 'vue'
import { useOperationLogStore } from '../stores/operationLogStore'
import { gasEstimates, ethPricePerGwei } from '../data/concepts'

export function useDay29() {
    const logStore = useOperationLogStore()

    // ========== 系统状态 ==========
    const ethPrice = ref(2000 * 1e8)  // ETH价格（8位小数）
    const totalCollateral = ref(0)     // 系统总抵押品（wei）
    const totalSupply = ref(0)         // SUSD总供应量

    // ========== 用户状态 ==========
    const userCollateral = ref(0)      // 用户抵押ETH数量（wei）
    const userDebt = ref(0)            // 用户债务（SUSD）
    const userSUSDBalance = ref(0)     // 用户SUSD余额

    // ========== 其他用户（用于演示清算）==========
    const otherUsers = ref([
        {
            address: '0xabcd...ef01',
            collateral: 1e18,      // 1 ETH
            debt: 1000e18,         // 1000 SUSD
            // 当ETH=$1500时: healthFactor = 150% (临界点)
            // 当ETH=$1400时: healthFactor = 140% (可清算)
        },
        {
            address: '0x9876...5432',
            collateral: 0.5e18,    // 0.5 ETH
            debt: 800e18,          // 800 SUSD
            // 当ETH=$2000时: healthFactor = 125% (可清算)
        }
    ])

    // ========== 事件日志 ==========
    const events = ref([])

    // ========== 操作统计 ==========
    const operationCount = ref(0)
    const totalGasUsed = ref(0)

    // ========== 计算属性 ==========

    // ETH价格（18位小数）
    const ethPriceInUsd = computed(() => {
        return (ethPrice.value * 1e10) / 1e18
    })

    // 用户抵押品美元价值
    const userCollateralValue = computed(() => {
        return (userCollateral.value * ethPrice.value * 1e10) / 1e36
    })

    // 用户健康因子
    const userHealthFactor = computed(() => {
        if (userDebt.value === 0) return 999
        return (userCollateralValue.value * 100) / userDebt.value
    })

    // 最大可铸造金额（18位小数）
    const maxMintable = computed(() => {
        return ((userCollateralValue.value * 100) / 150) * 1e18
    })

    // 还可铸造金额（18位小数）
    const remainingMintable = computed(() => {
        return Math.max(0, maxMintable.value - userDebt.value)
    })

    // 系统抵押率
    const systemCollateralRatio = computed(() => {
        if (totalSupply.value === 0) return 0
        const totalCollateralValue = (totalCollateral.value * ethPrice.value * 1e10) / 1e36
        return (totalCollateralValue * 100) / totalSupply.value
    })

    // 可清算头寸列表
    const liquidationCandidates = computed(() => {
        return otherUsers.value
            .filter(user => {
                const collateralValue = (user.collateral * ethPrice.value * 1e10) / 1e36
                const healthFactor = user.debt > 0
                    ? (collateralValue * 100) / user.debt
                    : 999
                return healthFactor < 150 && user.debt > 0
            })
            .map(user => {
                const collateralValue = (user.collateral * ethPrice.value * 1e10) / 1e36
                const healthFactor = user.debt > 0
                    ? (collateralValue * 100) / user.debt
                    : 999
                const liquidationReward = user.collateral * 1.05
                return {
                    ...user,
                    collateralValue,
                    healthFactor,
                    liquidationReward
                }
            })
    })

    // 实时数据（用于Sidebar显示）
    const realtimeData = computed(() => ({
        gasUsage: logStore.getDayGasUsage(29),
        ethCost: logStore.getDayEthCost(29),
        operationCount: logStore.getDayOperationCount(29)
    }))

    // ========== 辅助函数 ==========

    // 记录事件
    const logEvent = (eventType, data) => {
        const event = {
            type: eventType,
            timestamp: new Date().toLocaleString(),
            ...data
        }
        events.value.unshift(event)
    }

    // 记录操作日志
    const logOperation = (operation, details, gasKey) => {
        operationCount.value++
        totalGasUsed.value += gasEstimates[gasKey] || 0
        logStore.addLog(29, operation, details, gasKey)
    }

    // ========== 核心方法 ==========

    // 存入抵押品
    const depositCollateral = (amount) => {
        if (amount <= 0) {
            return {
                success: false,
                message: '❌ 存入金额必须大于0',
                hints: [],
                nextStep: ''
            }
        }

        userCollateral.value += amount
        totalCollateral.value += amount

        const gasUsed = gasEstimates.depositCollateral29
        logOperation('存入抵押品', `${amount / 1e18} ETH`, 'depositCollateral29')
        logEvent('CollateralDeposited', {
            user: 'currentUser',
            amount: amount
        })

        return {
            success: true,
            message: '✅ 存入抵押品成功！🎉 恭喜解锁：存入抵押品！将ETH等加密资产存入智能合约作为抵押，是DeFi借贷的第一步！👉 切换到「🏦 铸造稳定币」标签铸造SUSD！',
            hints: ['deposit_collateral'],
            nextStep: '👉 切换到「🏦 铸造稳定币」标签铸造SUSD！',
            gasUsed
        }
    }

    // 铸造稳定币
    const mintStablecoin = (amount) => {
        if (amount <= 0) {
            return {
                success: false,
                message: '❌ 铸造金额必须大于0',
                hints: [],
                nextStep: ''
            }
        }

        if (userDebt.value + amount > maxMintable.value) {
            return {
                success: false,
                message: '❌ 抵押品不足！无法铸造这么多SUSD',
                hints: [],
                nextStep: '👉 先存入更多ETH抵押品，或减少铸造数量'
            }
        }

        userDebt.value += amount
        userSUSDBalance.value += amount
        totalSupply.value += amount

        const gasUsed = gasEstimates.mintStablecoin29
        logOperation('铸造稳定币', `${amount / 1e18} SUSD`, 'mintStablecoin29')
        logEvent('StablecoinMinted', {
            user: 'currentUser',
            amount: amount
        })

        return {
            success: true,
            message: '✅ 铸造SUSD成功！🎉 恭喜解锁：铸造稳定币！根据存入的抵押品价值，按照抵押率铸造相应数量的稳定币，实现去中心化货币发行！👉 尝试销毁一些SUSD或提取部分抵押品！',
            hints: ['mint_stablecoin'],
            nextStep: '👉 尝试销毁一些SUSD或提取部分抵押品！',
            gasUsed
        }
    }

    // 销毁稳定币
    const burnStablecoin = (amount) => {
        if (amount <= 0) {
            return {
                success: false,
                message: '❌ 销毁金额必须大于0',
                hints: [],
                nextStep: ''
            }
        }

        if (amount > userSUSDBalance.value) {
            return {
                success: false,
                message: '❌ SUSD余额不足',
                hints: [],
                nextStep: ''
            }
        }

        userDebt.value -= amount
        userSUSDBalance.value -= amount
        totalSupply.value -= amount

        const gasUsed = gasEstimates.burnStablecoin29
        logOperation('销毁稳定币', `${amount / 1e18} SUSD`, 'burnStablecoin29')
        logEvent('StablecoinBurned', {
            user: 'currentUser',
            amount: amount
        })

        return {
            success: true,
            message: '✅ 销毁SUSD成功！🎉 恭喜解锁：销毁稳定币！销毁稳定币可以减少债务，提高健康因子，是管理抵押债务的重要操作！👉 尝试提取抵押品或降低ETH价格演示清算！',
            hints: ['burn_stablecoin'],
            nextStep: '👉 尝试提取抵押品或降低ETH价格演示清算！',
            gasUsed
        }
    }

    // 提取抵押品
    const withdrawCollateral = (amount) => {
        if (amount <= 0) {
            return {
                success: false,
                message: '❌ 提取金额必须大于0',
                hints: [],
                nextStep: ''
            }
        }

        if (amount > userCollateral.value) {
            return {
                success: false,
                message: '❌ 抵押品余额不足',
                hints: [],
                nextStep: ''
            }
        }

        const newCollateral = userCollateral.value - amount
        const newCollateralValue = (newCollateral * ethPrice.value * 1e10) / 1e36
        const requiredValue = (userDebt.value / 1e18 * 150) / 100

        if (newCollateralValue < requiredValue && userDebt.value > 0) {
            return {
                success: false,
                message: '❌ 提取后健康因子过低！请先销毁部分SUSD',
                hints: [],
                nextStep: '👉 先销毁一些SUSD降低债务，再提取抵押品'
            }
        }

        userCollateral.value = newCollateral
        totalCollateral.value -= amount

        const gasUsed = gasEstimates.withdrawCollateral29
        logOperation('提取抵押品', `${amount / 1e18} ETH`, 'withdrawCollateral29')
        logEvent('CollateralWithdrawn', {
            user: 'currentUser',
            amount: amount
        })

        return {
            success: true,
            message: '✅ 提取抵押品成功！🎉 恭喜解锁：提取抵押品！在满足抵押率要求的前提下，可以提取部分抵押品，实现资金灵活使用！👉 降低ETH价格到$1400以下，然后执行清算！',
            hints: ['withdraw_collateral'],
            nextStep: '👉 降低ETH价格到$1400以下，然后执行清算！',
            gasUsed
        }
    }

    // 更新ETH价格（用于演示）
    const updateEthPrice = (newPrice) => {
        ethPrice.value = newPrice * 1e8

        logEvent('PriceUpdated', {
            newPrice: newPrice,
            timestamp: Date.now()
        })

        const candidates = liquidationCandidates.value
        return {
            success: true,
            message: `✅ ETH价格已更新为 $${newPrice}`,
            hints: [],
            nextStep: candidates.length > 0
                ? `👉 发现 ${candidates.length} 个可清算头寸！前往清算区执行清算！`
                : '👉 当前没有可清算头寸，尝试进一步降低价格',
            candidates: candidates.length
        }
    }

    // 执行清算
    const liquidate = (userAddress) => {
        const userIndex = otherUsers.value.findIndex(u => u.address === userAddress)
        if (userIndex === -1) {
            return {
                success: false,
                message: '❌ 用户不存在',
                hints: [],
                nextStep: ''
            }
        }

        const user = otherUsers.value[userIndex]
        const collateralValue = (user.collateral * ethPrice.value * 1e10) / 1e36
        const healthFactor = user.debt > 0 ? (collateralValue * 100) / user.debt : 999

        if (healthFactor >= 150) {
            return {
                success: false,
                message: '❌ 该头寸健康，无法清算',
                hints: [],
                nextStep: '👉 降低ETH价格使健康因子低于150%'
            }
        }

        const collateralToTransfer = user.collateral
        const bonusCollateral = collateralToTransfer * 1.05

        // 更新系统状态
        totalCollateral.value -= user.collateral
        totalSupply.value -= user.debt

        // 移除被清算用户
        otherUsers.value.splice(userIndex, 1)

        const gasUsed = gasEstimates.liquidate29
        logOperation('清算', `清算用户 ${userAddress}`, 'liquidate29')
        logEvent('Liquidation', {
            liquidator: 'currentUser',
            user: userAddress,
            debtPaid: user.debt,
            collateralSeized: bonusCollateral
        })

        return {
            success: true,
            message: '✅ 清算成功！🎉 恭喜解锁：清算机制！当抵押品价值下跌导致健康因子低于阈值时，清算人可以代还债务并获得抵押品加奖励，维护系统稳定！🎉 恭喜完成Day 29所有概念学习！',
            hints: ['liquidation'],
            nextStep: '🎉 恭喜完成Day 29所有概念学习！',
            gasUsed,
            reward: bonusCollateral
        }
    }

    // 重置状态（用于测试）
    const resetState = () => {
        userCollateral.value = 0
        userDebt.value = 0
        userSUSDBalance.value = 0
        totalCollateral.value = 0
        totalSupply.value = 0
        operationCount.value = 0
        totalGasUsed.value = 0
        events.value = []
        otherUsers.value = [
            {
                address: '0xabcd...ef01',
                collateral: 1e18,
                debt: 1000e18
            },
            {
                address: '0x9876...5432',
                collateral: 0.5e18,
                debt: 800e18
            }
        ]
    }

    return {
        // 状态
        ethPrice,
        totalCollateral,
        totalSupply,
        userCollateral,
        userDebt,
        userSUSDBalance,
        otherUsers,
        events,
        operationCount,
        totalGasUsed,

        // 计算属性
        ethPriceInUsd,
        userCollateralValue,
        userHealthFactor,
        maxMintable,
        remainingMintable,
        systemCollateralRatio,
        liquidationCandidates,
        realtimeData,

        // 方法
        depositCollateral,
        mintStablecoin,
        burnStablecoin,
        withdrawCollateral,
        updateEthPrice,
        liquidate,
        resetState
    }
}
