import { ref, computed } from 'vue'
import { useProgressStore } from '../stores/progressStore'
import { useOperationLogStore } from '../stores/operationLogStore'

export function useDay25() {
    const progressStore = useProgressStore()
    const logStore = useOperationLogStore()

    // 流动性池状态
    const reserveA = ref(0)
    const reserveB = ref(0)
    const totalSupply = ref(0)

    // 用户余额
    const userBalances = ref({
        tokenA: 1000,
        tokenB: 1000,
        lpToken: 0
    })

    // 交易历史
    const transactions = ref([])

    // 当前价格
    const currentPrice = computed(() => {
        if (reserveB.value === 0) return 0
        return reserveA.value / reserveB.value
    })

    // 计算平方根（牛顿迭代法）
    const sqrt = (y) => {
        if (y <= 0) return 0
        if (y <= 3) return 1
        let z = y
        let x = Math.floor(y / 2) + 1
        while (x < z) {
            z = x
            x = Math.floor((Math.floor(y / x) + x) / 2)
        }
        return z
    }

    // 计算最小值
    const min = (a, b) => a < b ? a : b

    // 添加流动性
    const addLiquidity = (amountA, amountB) => {
        const hints = []
        let nextStep = ''

        // 验证
        if (amountA <= 0 || amountB <= 0) {
            return {
                success: false,
                message: '❌ 添加数量必须大于 0'
            }
        }

        if (userBalances.value.tokenA < amountA || userBalances.value.tokenB < amountB) {
            return {
                success: false,
                message: '❌ 余额不足'
            }
        }

        // 计算LP代币
        let liquidity
        if (totalSupply.value === 0) {
            liquidity = sqrt(amountA * amountB)
        } else {
            liquidity = min(
                Math.floor(amountA * totalSupply.value / reserveA.value),
                Math.floor(amountB * totalSupply.value / reserveB.value)
            )
        }

        // 更新状态
        userBalances.value.tokenA -= amountA
        userBalances.value.tokenB -= amountB
        userBalances.value.lpToken += liquidity
        reserveA.value += amountA
        reserveB.value += amountB
        totalSupply.value += liquidity

        // 记录交易
        transactions.value.unshift({
            type: 'addLiquidity',
            amountA,
            amountB,
            liquidity,
            timestamp: Date.now()
        })

        // 记录日志
        logStore.addLog(25, '添加流动性', `存入 ${amountA} Token A + ${amountB} Token B，获得 ${liquidity.toFixed(2)} LP代币`, 'addLiquidity25')

        // 检查解锁
        const unlockedConcepts = progressStore.getDayProgress(25)?.unlockedConcepts || []
        if (!unlockedConcepts.includes('add_liquidity')) {
            hints.push('add_liquidity')
        }

        nextStep = '📍 向下滚动到「🔄 交易」区块进行代币交换！'

        return {
            success: true,
            message: `✅ 成功添加流动性！获得 ${liquidity.toFixed(2)} LP代币`,
            liquidity,
            hints,
            nextStep
        }
    }

    // 代币交换 A -> B
    const swapAforB = (amountAIn, minBOut) => {
        const hints = []
        let nextStep = ''

        // 验证
        if (amountAIn <= 0) {
            return {
                success: false,
                message: '❌ 交换数量必须大于 0'
            }
        }

        if (userBalances.value.tokenA < amountAIn) {
            return {
                success: false,
                message: '❌ Token A 余额不足'
            }
        }

        if (reserveA.value === 0 || reserveB.value === 0) {
            return {
                success: false,
                message: '❌ 流动性池为空，请先添加流动性'
            }
        }

        // 计算输出（含0.3%手续费）
        const amountAInWithFee = Math.floor(amountAIn * 997 / 1000)
        const amountBOut = Math.floor(reserveB.value * amountAInWithFee / (reserveA.value + amountAInWithFee))

        // 滑点保护
        if (amountBOut < minBOut) {
            return {
                success: false,
                message: `❌ 滑点过高！预计获得 ${amountBOut.toFixed(4)} Token B，但设置的最小值为 ${minBOut}`
            }
        }

        // 更新状态
        userBalances.value.tokenA -= amountAIn
        userBalances.value.tokenB += amountBOut
        reserveA.value += amountAInWithFee
        reserveB.value -= amountBOut

        // 记录交易
        transactions.value.unshift({
            type: 'swap',
            direction: 'A->B',
            amountIn: amountAIn,
            amountOut: amountBOut,
            timestamp: Date.now()
        })

        // 记录日志
        logStore.addLog(25, '代币交换', `支付 ${amountAIn} Token A，获得 ${amountBOut.toFixed(4)} Token B`, 'swapAforB25')

        // 检查解锁
        const unlockedConcepts = progressStore.getDayProgress(25)?.unlockedConcepts || []
        if (!unlockedConcepts.includes('swap_mechanism')) {
            hints.push('swap_mechanism')
        }

        nextStep = '📍 继续交换查看滑点效果，或点击「➖ 移除流动性」取回代币！'

        return {
            success: true,
            message: `✅ 交换成功！支付 ${amountAIn} Token A，获得 ${amountBOut.toFixed(4)} Token B`,
            amountBOut,
            hints,
            nextStep
        }
    }

    // 代币交换 B -> A
    const swapBforA = (amountBIn, minAOut) => {
        const hints = []
        let nextStep = ''

        // 验证
        if (amountBIn <= 0) {
            return {
                success: false,
                message: '❌ 交换数量必须大于 0'
            }
        }

        if (userBalances.value.tokenB < amountBIn) {
            return {
                success: false,
                message: '❌ Token B 余额不足'
            }
        }

        if (reserveA.value === 0 || reserveB.value === 0) {
            return {
                success: false,
                message: '❌ 流动性池为空，请先添加流动性'
            }
        }

        // 计算输出（含0.3%手续费）
        const amountBInWithFee = Math.floor(amountBIn * 997 / 1000)
        const amountAOut = Math.floor(reserveA.value * amountBInWithFee / (reserveB.value + amountBInWithFee))

        // 滑点保护
        if (amountAOut < minAOut) {
            return {
                success: false,
                message: `❌ 滑点过高！预计获得 ${amountAOut.toFixed(4)} Token A，但设置的最小值为 ${minAOut}`
            }
        }

        // 更新状态
        userBalances.value.tokenB -= amountBIn
        userBalances.value.tokenA += amountAOut
        reserveB.value += amountBInWithFee
        reserveA.value -= amountAOut

        // 记录交易
        transactions.value.unshift({
            type: 'swap',
            direction: 'B->A',
            amountIn: amountBIn,
            amountOut: amountAOut,
            timestamp: Date.now()
        })

        // 记录日志
        logStore.addLog(25, '代币交换', `支付 ${amountBIn} Token B，获得 ${amountAOut.toFixed(4)} Token A`, 'swapBforA25')

        // 检查解锁
        const unlockedConcepts = progressStore.getDayProgress(25)?.unlockedConcepts || []
        if (!unlockedConcepts.includes('swap_mechanism')) {
            hints.push('swap_mechanism')
        }

        nextStep = '📍 继续交换查看滑点效果，或点击「➖ 移除流动性」取回代币！'

        return {
            success: true,
            message: `✅ 交换成功！支付 ${amountBIn} Token B，获得 ${amountAOut.toFixed(4)} Token A`,
            amountAOut,
            hints,
            nextStep
        }
    }

    // 移除流动性
    const removeLiquidity = (liquidity) => {
        const hints = []
        let nextStep = ''

        // 验证
        if (liquidity <= 0) {
            return {
                success: false,
                message: '❌ 移除数量必须大于 0'
            }
        }

        if (userBalances.value.lpToken < liquidity) {
            return {
                success: false,
                message: '❌ LP代币余额不足'
            }
        }

        if (totalSupply.value === 0) {
            return {
                success: false,
                message: '❌ 流动性池为空'
            }
        }

        // 计算输出
        const amountAOut = Math.floor(liquidity * reserveA.value / totalSupply.value)
        const amountBOut = Math.floor(liquidity * reserveB.value / totalSupply.value)

        // 更新状态
        userBalances.value.lpToken -= liquidity
        userBalances.value.tokenA += amountAOut
        userBalances.value.tokenB += amountBOut
        reserveA.value -= amountAOut
        reserveB.value -= amountBOut
        totalSupply.value -= liquidity

        // 记录交易
        transactions.value.unshift({
            type: 'removeLiquidity',
            liquidity,
            amountAOut,
            amountBOut,
            timestamp: Date.now()
        })

        // 记录日志
        logStore.addLog(25, '移除流动性', `销毁 ${liquidity.toFixed(2)} LP代币，获得 ${amountAOut} Token A + ${amountBOut} Token B`, 'removeLiquidity25')

        // 检查解锁
        const unlockedConcepts = progressStore.getDayProgress(25)?.unlockedConcepts || []
        if (!unlockedConcepts.includes('remove_liquidity')) {
            hints.push('remove_liquidity')
        }
        if (!unlockedConcepts.includes('reserves_management')) {
            hints.push('reserves_management')
        }

        nextStep = '🎉 移除流动性成功！👉 点击滑点保护说明了解安全防护机制！'

        return {
            success: true,
            message: `✅ 成功移除流动性！获得 ${amountAOut} Token A + ${amountBOut} Token B`,
            amountAOut,
            amountBOut,
            hints,
            nextStep
        }
    }

    // 计算交换输出（预览）
    const calculateSwapOutput = (amountIn, reserveIn, reserveOut) => {
        if (amountIn <= 0 || reserveIn === 0 || reserveOut === 0) return 0
        const amountInWithFee = Math.floor(amountIn * 997 / 1000)
        return Math.floor(reserveOut * amountInWithFee / (reserveIn + amountInWithFee))
    }

    // 计算价格影响
    const calculatePriceImpact = (amountIn, reserveIn) => {
        if (amountIn <= 0 || reserveIn === 0) return 0
        return (amountIn / reserveIn) * 100
    }

    // 实时数据
    const realtimeData = computed(() => ({
        gasUsage: logStore.getDayGasUsage(25),
        ethCost: logStore.getDayEthCost(25),
        operationCount: logStore.getDayOperationCount(25)
    }))

    return {
        // 状态
        reserveA,
        reserveB,
        totalSupply,
        userBalances,
        transactions,
        currentPrice,
        realtimeData,
        // 方法
        addLiquidity,
        swapAforB,
        swapBforA,
        removeLiquidity,
        calculateSwapOutput,
        calculatePriceImpact
    }
}
