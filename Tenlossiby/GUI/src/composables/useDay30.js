import { ref, computed, reactive } from 'vue'
import { useOperationLogStore } from '@/stores/operationLogStore'

// ========== Day 30 MiniDex 状态管理 ==========
export function useDay30() {
    const logStore = useOperationLogStore()
    // ========== 工厂相关状态 ==========
    const allPairs = ref([])
    const selectedPair = ref(null)

    // ========== 交易对相关状态 ==========
    const reserves = ref({ token0: 0, token1: 0 })
    const totalSupply = ref(0)
    const userLPBalance = ref(0)
    const userToken0Balance = ref(10000)  // 模拟用户初始余额
    const userToken1Balance = ref(50)     // 模拟用户初始余额

    // ========== 操作状态 ==========
    const activeTab = ref('add')  // 'add' | 'remove'
    const swapDirection = ref('0to1')  // '0to1' | '1to0'

    // ========== 输入状态 ==========
    const addAmount0 = ref('')
    const addAmount1 = ref('')
    const removeAmount = ref('')
    const swapAmountIn = ref('')
    const swapAmountOut = ref('')

    // ========== 数学面板点击次数（顺序解锁）==========
    const mathPanelClicks = ref(0)

    // ========== 计算属性 ==========
    
    // 当前价格
    const currentPrice = computed(() => {
        if (reserves.value.token0 === 0 || reserves.value.token1 === 0) return 0
        return reserves.value.token1 / reserves.value.token0
    })

    // 反向价格
    const reversePrice = computed(() => {
        if (reserves.value.token0 === 0 || reserves.value.token1 === 0) return 0
        return reserves.value.token0 / reserves.value.token1
    })

    // 流动性比例
    const liquidityRatio = computed(() => {
        if (reserves.value.token0 === 0 || reserves.value.token1 === 0) return 0
        return reserves.value.token1 / reserves.value.token0
    })

    // 滑点影响
    const priceImpact = computed(() => {
        if (!swapAmountIn.value || reserves.value.token0 === 0) return 0
        const amountIn = parseFloat(swapAmountIn.value)
        if (isNaN(amountIn) || amountIn === 0) return 0
        return (amountIn / (reserves.value.token0 + amountIn)) * 100
    })

    // 用户LP份额
    const userLPShare = computed(() => {
        if (totalSupply.value === 0) return 0
        return (userLPBalance.value / totalSupply.value) * 100
    })

    // 添加流动性时的计算LP代币
    const calculatedLPTokens = computed(() => {
        const amount0 = parseFloat(addAmount0.value) || 0
        const amount1 = parseFloat(addAmount1.value) || 0
        
        if (amount0 === 0 || amount1 === 0) return 0
        
        if (totalSupply.value === 0) {
            // 首次添加：几何平均
            return Math.sqrt(amount0 * amount1)
        } else {
            // 后续添加：按比例
            const lp0 = (amount0 * totalSupply.value) / reserves.value.token0
            const lp1 = (amount1 * totalSupply.value) / reserves.value.token1
            return Math.min(lp0, lp1)
        }
    })

    // 移除流动性时计算的代币数量
    const calculatedRemoveTokens = computed(() => {
        const liquidity = parseFloat(removeAmount.value) || 0
        if (liquidity === 0 || totalSupply.value === 0) return { token0: 0, token1: 0 }
        
        return {
            token0: (liquidity * reserves.value.token0) / totalSupply.value,
            token1: (liquidity * reserves.value.token1) / totalSupply.value
        }
    })

    // 交换输出计算
    const calculatedSwapOutput = computed(() => {
        const amountIn = parseFloat(swapAmountIn.value) || 0
        if (amountIn === 0) return 0
        
        const reserveIn = swapDirection.value === '0to1' ? reserves.value.token0 : reserves.value.token1
        const reserveOut = swapDirection.value === '0to1' ? reserves.value.token1 : reserves.value.token0
        
        if (reserveIn === 0 || reserveOut === 0) return 0
        
        // 恒定乘积公式计算输出
        // amountOut = (amountIn * reserveOut) / (reserveIn + amountIn)
        return (amountIn * reserveOut) / (reserveIn + amountIn)
    })

    // ========== 方法 ==========
    
    // 创建交易对
    const createPair = (token0, token1) => {
        const pair = {
            address: `0x${Math.random().toString(16).slice(2, 42)}`,
            token0,
            token1,
            reserve0: 0,
            reserve1: 0,
            totalSupply: 0
        }
        allPairs.value.push(pair)
        
        // 添加操作日志
        logStore.addLog(30, '创建交易对', `${token0.symbol}-${token1.symbol}`, 'createPair30')
        
        return pair
    }

    // 选择交易对
    const selectPair = (pair) => {
        selectedPair.value = pair
        reserves.value = { token0: pair.reserve0, token1: pair.reserve1 }
        totalSupply.value = pair.totalSupply
    }

    // 添加流动性
    const addLiquidity = (amount0, amount1) => {
        const a0 = parseFloat(amount0)
        const a1 = parseFloat(amount1)
        
        if (isNaN(a0) || isNaN(a1) || a0 <= 0 || a1 <= 0) return null
        
        // 扣除用户余额
        userToken0Balance.value -= a0
        userToken1Balance.value -= a1
        
        let liquidity
        if (totalSupply.value === 0) {
            // 首次添加
            liquidity = Math.sqrt(a0 * a1)
        } else {
            // 后续添加
            const lp0 = (a0 * totalSupply.value) / reserves.value.token0
            const lp1 = (a1 * totalSupply.value) / reserves.value.token1
            liquidity = Math.min(lp0, lp1)
        }
        
        // 更新状态
        reserves.value.token0 += a0
        reserves.value.token1 += a1
        totalSupply.value += liquidity
        userLPBalance.value += liquidity
        
        // 更新选中交易对
        if (selectedPair.value) {
            selectedPair.value.reserve0 = reserves.value.token0
            selectedPair.value.reserve1 = reserves.value.token1
            selectedPair.value.totalSupply = totalSupply.value
        }
        
        // 添加操作日志
        logStore.addLog(30, '添加流动性', `存入 ${a0} Token0, ${a1} Token1`, 'addLiquidity30')
        
        return liquidity
    }

    // 移除流动性
    const removeLiquidity = (liquidity) => {
        const lp = parseFloat(liquidity)
        if (isNaN(lp) || lp <= 0 || lp > userLPBalance.value) return null
        
        // 计算可取出的代币
        const amount0 = (lp * reserves.value.token0) / totalSupply.value
        const amount1 = (lp * reserves.value.token1) / totalSupply.value
        
        // 更新状态
        reserves.value.token0 -= amount0
        reserves.value.token1 -= amount1
        totalSupply.value -= lp
        userLPBalance.value -= lp
        
        // 返还用户余额
        userToken0Balance.value += amount0
        userToken1Balance.value += amount1
        
        // 更新选中交易对
        if (selectedPair.value) {
            selectedPair.value.reserve0 = reserves.value.token0
            selectedPair.value.reserve1 = reserves.value.token1
            selectedPair.value.totalSupply = totalSupply.value
        }
        
        // 添加操作日志
        logStore.addLog(30, '移除流动性', `移除 ${lp} LP代币`, 'removeLiquidity30')
        
        return { amount0, amount1 }
    }

    // 交换代币
    const swap = (amountIn, direction) => {
        const amount = parseFloat(amountIn)
        if (isNaN(amount) || amount <= 0) return null
        
        const reserveIn = direction === '0to1' ? reserves.value.token0 : reserves.value.token1
        const reserveOut = direction === '0to1' ? reserves.value.token1 : reserves.value.token0
        
        if (reserveIn === 0 || reserveOut === 0) return null
        
        // 计算输出
        const amountOut = (amount * reserveOut) / (reserveIn + amount)
        
        // 更新储备
        if (direction === '0to1') {
            reserves.value.token0 += amount
            reserves.value.token1 -= amountOut
            userToken0Balance.value -= amount
            userToken1Balance.value += amountOut
        } else {
            reserves.value.token1 += amount
            reserves.value.token0 -= amountOut
            userToken1Balance.value -= amount
            userToken0Balance.value += amountOut
        }
        
        // 更新选中交易对
        if (selectedPair.value) {
            selectedPair.value.reserve0 = reserves.value.token0
            selectedPair.value.reserve1 = reserves.value.token1
        }
        
        // 添加操作日志
        const directionText = direction === '0to1' ? 'Token0 → Token1' : 'Token1 → Token0'
        logStore.addLog(30, '代币交换', `${directionText} 交换 ${amount}`, 'swap30')
        
        return amountOut
    }

    // 计算交换输出（不执行）
    const calculateSwapOutput = (amountIn, direction) => {
        const amount = parseFloat(amountIn) || 0
        if (amount === 0) return 0
        
        const reserveIn = direction === '0to1' ? reserves.value.token0 : reserves.value.token1
        const reserveOut = direction === '0to1' ? reserves.value.token1 : reserves.value.token0
        
        if (reserveIn === 0 || reserveOut === 0) return 0
        
        return (amount * reserveOut) / (reserveIn + amount)
    }

    // 检查流动性比例
    const checkLiquidityRatio = (amount0, amount1) => {
        const a0 = parseFloat(amount0) || 0
        const a1 = parseFloat(amount1) || 0
        
        if (a0 === 0 || a1 === 0) return { valid: false, ratio: 0 }
        
        const inputRatio = a1 / a0
        const poolRatio = liquidityRatio.value
        
        if (poolRatio === 0) return { valid: true, ratio: inputRatio }
        
        const diff = Math.abs(inputRatio - poolRatio) / poolRatio
        return {
            valid: diff < 0.01, // 允许1%误差
            ratio: inputRatio,
            poolRatio,
            diff: diff * 100
        }
    }

    // 演示地址排序
    const demonstrateAddressSorting = (addr1, addr2) => {
        // 模拟地址排序逻辑
        const sorted = addr1.toLowerCase() < addr2.toLowerCase()
        return {
            token0: sorted ? addr1 : addr2,
            token1: sorted ? addr2 : addr1
        }
    }

    // 重置状态
    const resetState = () => {
        allPairs.value = []
        selectedPair.value = null
        reserves.value = { token0: 0, token1: 0 }
        totalSupply.value = 0
        userLPBalance.value = 0
        userToken0Balance.value = 10000
        userToken1Balance.value = 50
        activeTab.value = 'add'
        swapDirection.value = '0to1'
        addAmount0.value = ''
        addAmount1.value = ''
        removeAmount.value = ''
        swapAmountIn.value = ''
        swapAmountOut.value = ''
        mathPanelClicks.value = 0
    }

    // 格式化数字
    const formatNumber = (num, decimals = 2) => {
        if (num === undefined || num === null) return '0'
        return new Intl.NumberFormat('en-US', {
            minimumFractionDigits: decimals,
            maximumFractionDigits: decimals
        }).format(num)
    }

    // 实时数据
    const realtimeData = computed(() => ({
        gasUsage: logStore.getDayGasUsage(30),
        ethCost: logStore.getDayEthCost(30),
        operationCount: logStore.getDayOperationCount(30)
    }))

    return {
        // 状态
        allPairs,
        selectedPair,
        reserves,
        totalSupply,
        userLPBalance,
        userToken0Balance,
        userToken1Balance,
        activeTab,
        swapDirection,
        addAmount0,
        addAmount1,
        removeAmount,
        swapAmountIn,
        swapAmountOut,
        mathPanelClicks,
        
        // 计算属性
        currentPrice,
        reversePrice,
        liquidityRatio,
        priceImpact,
        userLPShare,
        calculatedLPTokens,
        calculatedRemoveTokens,
        calculatedSwapOutput,
        
        // 方法
        createPair,
        selectPair,
        addLiquidity,
        removeLiquidity,
        swap,
        calculateSwapOutput,
        checkLiquidityRatio,
        demonstrateAddressSorting,
        resetState,
        formatNumber,
        
        // 实时数据
        realtimeData
    }
}
