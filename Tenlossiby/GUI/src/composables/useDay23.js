import { ref, computed } from 'vue'
import { useOperationLogStore } from '@/stores/operationLogStore'
import { useProgressStore } from '@/stores/progressStore'
import { gasEstimates } from '@/data/concepts'

export function useDay23() {
    const logStore = useOperationLogStore()
    const progressStore = useProgressStore()

    // ========== 用户资产状态 ==========
    const walletBalance = ref(10) // 用户钱包余额（ETH）
    const depositBalance = ref(0) // 存款余额
    const collateralBalance = ref(0) // 抵押品余额
    const borrowBalance = ref(0) // 借款本金
    const lastInterestAccrualTime = ref(Date.now()) // 上次计息时间戳

    // ========== 合约参数 ==========
    const interestRateBasisPoints = 500 // 年利率 5%（500基点）
    const collateralFactorBasisPoints = 7500 // 抵押率 75%（7500基点）
    const contractLiquidity = ref(0) // 合约总流动性

    // ========== 事件日志 ==========
    const eventLogs = ref([])

    // ========== 计算属性 ==========

    // 计算累积利息
    const accruedInterest = computed(() => {
        if (borrowBalance.value === 0) return 0
        const timeElapsed = (Date.now() - lastInterestAccrualTime.value) / 1000 // 秒
        const interest = (borrowBalance.value * interestRateBasisPoints * timeElapsed) / (10000 * 365 * 24 * 60 * 60)
        return interest
    })

    // 当前总债务（本金 + 利息）
    const currentDebt = computed(() => {
        return borrowBalance.value + accruedInterest.value
    })

    // 最大可借额度
    const maxBorrowAmount = computed(() => {
        return (collateralBalance.value * collateralFactorBasisPoints) / 10000
    })

    // 剩余可借额度
    const remainingBorrowAmount = computed(() => {
        const remaining = maxBorrowAmount.value - currentDebt.value
        return remaining > 0 ? remaining : 0
    })

    // 健康因子
    const healthFactor = computed(() => {
        if (currentDebt.value === 0) return 999 // 无债务时显示为安全
        return collateralBalance.value / currentDebt.value
    })

    // 健康状态
    const healthStatus = computed(() => {
        const hf = healthFactor.value
        if (hf >= 1.5) return { status: 'safe', label: '安全', color: '#22c55e', icon: '🟢' }
        if (hf >= 1.0) return { status: 'warning', label: '警告', color: '#eab308', icon: '🟡' }
        return { status: 'danger', label: '危险', color: '#ef4444', icon: '🔴' }
    })

    // ========== 辅助函数 ==========

    // 添加事件日志
    const addEventLog = (eventType, details) => {
        const timestamp = new Date().toLocaleTimeString('zh-CN', { hour12: false })
        eventLogs.value.unshift({
            timestamp,
            eventType,
            details
        })
        // 只保留最近20条
        if (eventLogs.value.length > 20) {
            eventLogs.value = eventLogs.value.slice(0, 20)
        }
    }

    // ========== 概念解锁辅助函数 ==========

    // 解锁概念
    const unlockConcept = (concept) => {
        if (!progressStore.isConceptUnlocked(23, concept)) {
            progressStore.unlockConcept(23, concept)
            return true
        }
        return false
    }

    // 检查并自动解锁最后一个概念（解决循环依赖）
    const checkAndUnlockLastConcept = (hints) => {
        const unlockedConcepts = progressStore.getDayProgress(23)?.unlockedConcepts || []
        const currentCount = unlockedConcepts.length
        const totalConcepts = 8 // Day23 总共有 8 个概念
        
        // 如果已经有 7 个概念，自动解锁最后一个 lending_security
        if (currentCount >= 7 && !unlockedConcepts.includes('lending_security')) {
            if (unlockConcept('lending_security')) {
                hints.push('lending_security')
            }
        }
        
        return hints
    }

    // ========== 核心操作函数 ==========

    // 存款
    const deposit = (amount) => {
        if (amount <= 0) {
            return { success: false, message: '存款金额必须大于0' }
        }
        if (amount > walletBalance.value) {
            return { success: false, message: '钱包余额不足' }
        }

        // 执行存款
        walletBalance.value -= amount
        depositBalance.value += amount
        contractLiquidity.value += amount

        // 添加日志
        logStore.addLog(23, '存款', `存入 ${amount} ETH`, gasEstimates.deposit23 || 35000)
        addEventLog('Deposit', `存入 ${amount} ETH`)

        // 构建 hints 数组
        const hints = ['lending_pool']
        
        // 检查是否需要自动解锁最后一个概念
        checkAndUnlockLastConcept(hints)

        return {
            success: true,
            message: `✅ 成功存入 ${amount} ETH`,
            hints,
            nextStep: '📍 切换到「🏦 抵押」标签页存入抵押品！'
        }
    }

    // 取款
    const withdraw = (amount) => {
        if (amount <= 0) {
            return { success: false, message: '取款金额必须大于0' }
        }
        if (amount > depositBalance.value) {
            return { success: false, message: '存款余额不足' }
        }

        // 执行取款（CEI模式：先检查，再更新状态，最后转账）
        depositBalance.value -= amount
        walletBalance.value += amount
        contractLiquidity.value -= amount

        // 添加日志
        logStore.addLog(23, '取款', `取出 ${amount} ETH`, gasEstimates.withdraw23 || 35000)
        addEventLog('Withdraw', `取出 ${amount} ETH`)

        return {
            success: true,
            message: `✅ 成功取出 ${amount} ETH`,
            hints: [],
            nextStep: '👉 继续探索其他功能！'
        }
    }

    // 存入抵押品
    const depositCollateral = (amount) => {
        if (amount <= 0) {
            return { success: false, message: '抵押金额必须大于0' }
        }
        if (amount > walletBalance.value) {
            return { success: false, message: '钱包余额不足' }
        }

        // 执行存入抵押
        walletBalance.value -= amount
        collateralBalance.value += amount

        // 添加日志
        logStore.addLog(23, '存入抵押', `存入 ${amount} ETH 作为抵押品`, gasEstimates.depositCollateral23 || 45000)
        addEventLog('CollateralDeposited', `存入 ${amount} ETH 作为抵押品`)

        // 构建 hints 数组
        const hints = ['collateral_deposit']
        
        // 检查是否需要自动解锁最后一个概念
        checkAndUnlockLastConcept(hints)

        return {
            success: true,
            message: `✅ 成功存入 ${amount} ETH 作为抵押品`,
            hints,
            nextStep: '📍 切换到「💸 借款」标签页尝试借款！'
        }
    }

    // 取出抵押品
    const withdrawCollateral = (amount) => {
        if (amount <= 0) {
            return { success: false, message: '取款金额必须大于0' }
        }
        if (amount > collateralBalance.value) {
            return { success: false, message: '抵押品余额不足' }
        }

        // 检查抵押率
        const requiredCollateral = (currentDebt.value * 10000) / collateralFactorBasisPoints
        if (collateralBalance.value - amount < requiredCollateral) {
            return {
                success: false,
                message: '❌ 取出后将低于最低抵押率要求，请先还款或减少取款金额'
            }
        }

        // 执行取出抵押
        collateralBalance.value -= amount
        walletBalance.value += amount

        // 添加日志
        logStore.addLog(23, '取出抵押', `取出 ${amount} ETH 抵押品`, gasEstimates.withdrawCollateral23 || 35000)
        addEventLog('CollateralWithdrawn', `取出 ${amount} ETH 抵押品`)

        return {
            success: true,
            message: `✅ 成功取出 ${amount} ETH 抵押品`,
            hints: [],
            nextStep: '👉 继续管理你的抵押品！'
        }
    }

    // 借款
    const borrow = (amount) => {
        if (amount <= 0) {
            return { success: false, message: '借款金额必须大于0' }
        }
        if (amount > contractLiquidity.value) {
            return { success: false, message: '合约流动性不足' }
        }
        if (currentDebt.value + amount > maxBorrowAmount.value) {
            return {
                success: false,
                message: `❌ 超出最大可借额度。当前可借: ${remainingBorrowAmount.value.toFixed(4)} ETH`
            }
        }

        // 执行借款
        // 先计算并累积当前利息
        const interest = accruedInterest.value
        borrowBalance.value = currentDebt.value + amount
        lastInterestAccrualTime.value = Date.now()
        contractLiquidity.value -= amount
        walletBalance.value += amount

        // 添加日志
        logStore.addLog(23, '借款', `借出 ${amount} ETH`, gasEstimates.borrow23 || 45000)
        addEventLog('Borrow', `借出 ${amount} ETH`)

        // 构建 hints 数组
        const hints = ['borrow_mechanism']
        
        // 首次借款时解锁健康因子
        hints.push('health_factor')
        
        // 借款超过抵押品30%时解锁清算阈值（降低阈值使其更容易触发）
        const borrowRatio = currentDebt.value / (collateralBalance.value || 1)
        if (borrowRatio > 0.3) {
            hints.push('liquidation_threshold')
        }
        
        // 检查是否需要自动解锁最后一个概念
        checkAndUnlockLastConcept(hints)

        return {
            success: true,
            message: `✅ 成功借出 ${amount} ETH`,
            hints,
            nextStep: '📍 查看健康因子变化！当健康因子低于1时会被清算。点击「💸 借款」标签页内的「✅ 还款」偿还债务！'
        }
    }

    // 还款
    const repay = (amount) => {
        if (amount <= 0) {
            return { success: false, message: '还款金额必须大于0' }
        }
        if (currentDebt.value === 0) {
            return { success: false, message: '没有债务需要偿还' }
        }
        if (amount > walletBalance.value) {
            return { success: false, message: '钱包余额不足' }
        }

        // 计算实际还款金额和退款
        const debt = currentDebt.value
        let actualRepay = amount
        let refund = 0

        if (amount > debt) {
            refund = amount - debt
            actualRepay = debt
        }

        // 执行还款
        walletBalance.value -= amount
        borrowBalance.value = debt - actualRepay
        lastInterestAccrualTime.value = Date.now()
        contractLiquidity.value += actualRepay

        // 如果有退款，加回钱包
        if (refund > 0) {
            walletBalance.value += refund
        }

        // 添加日志
        logStore.addLog(23, '还款', `偿还 ${actualRepay.toFixed(6)} ETH${refund > 0 ? `，退款 ${refund.toFixed(6)} ETH` : ''}`, gasEstimates.repay23 || 40000)
        addEventLog('Repay', `偿还 ${actualRepay.toFixed(6)} ETH`)

        // 构建 hints 数组
        const hints = ['interest_calculation', 'repay_function']
        
        // 检查是否需要自动解锁最后一个概念
        checkAndUnlockLastConcept(hints)

        return {
            success: true,
            message: `✅ 成功偿还 ${actualRepay.toFixed(6)} ETH${refund > 0 ? `，退款 ${refund.toFixed(6)} ETH` : ''}`,
            hints,
            nextStep: '📍 还款成功！健康因子已提升。继续借款体验清算机制，或查看完整代码了解借贷安全！'
        }
    }

    // ========== 实时数据（用于 Sidebar） ==========
    const realtimeData = computed(() => {
        const logs = logStore.getDayLogs(23)
        const operationCount = logs.length
        const gasUsage = logs.reduce((sum, log) => sum + (log.gasUsed || 0), 0)
        const ethCost = logs.reduce((sum, log) => sum + (log.ethCost || 0), 0)

        return {
            operationCount,
            gasUsage,
            ethCost,
            walletBalance: walletBalance.value,
            depositBalance: depositBalance.value,
            collateralBalance: collateralBalance.value,
            borrowBalance: borrowBalance.value,
            currentDebt: currentDebt.value,
            maxBorrowAmount: maxBorrowAmount.value,
            healthFactor: healthFactor.value,
            contractLiquidity: contractLiquidity.value
        }
    })

    return {
        // 状态
        walletBalance,
        depositBalance,
        collateralBalance,
        borrowBalance,
        lastInterestAccrualTime,
        contractLiquidity,
        eventLogs,

        // 计算属性
        accruedInterest,
        currentDebt,
        maxBorrowAmount,
        remainingBorrowAmount,
        healthFactor,
        healthStatus,

        // 操作函数
        deposit,
        withdraw,
        depositCollateral,
        withdrawCollateral,
        borrow,
        repay,

        // 实时数据
        realtimeData
    }
}
