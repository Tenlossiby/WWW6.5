import { ref, computed } from 'vue'
import { useProgressStore } from '@/stores/progressStore'
import { useOperationLogStore } from '@/stores/operationLogStore'

export function useDay24() {
    const progressStore = useProgressStore()
    const logStore = useOperationLogStore()

    // ============ 核心状态 ============
    const escrowState = ref('AWAITING_PAYMENT') // AWAITING_PAYMENT, AWAITING_DELIVERY, COMPLETE, DISPUTED, CANCELLED
    const currentRole = ref('buyer') // buyer, seller, arbiter

    // 角色地址（模拟）
    const addresses = {
        buyer: '0xBuyer' + Math.random().toString(36).substring(2, 10),
        seller: '0xSeller' + Math.random().toString(36).substring(2, 10),
        arbiter: '0xArbiter' + Math.random().toString(36).substring(2, 10)
    }

    // 资金状态
    const funds = ref({
        buyerWallet: 5.0,
        sellerWallet: 2.0,
        escrowAmount: 0,
        arbiterWallet: 1.0
    })

    // 交易信息
    const escrowInfo = ref({
        amount: 0,
        depositTime: null,
        deliveryTimeout: 60, // 60秒（演示用，实际合约是24小时=86400秒）
        isDisputed: false
    })

    // 事件日志
    const eventLog = ref([])

    // 解锁的概念
    const unlockedConcepts = computed(() => {
        return progressStore.getDayProgress(24)?.unlockedConcepts || []
    })

    // ============ 计算属性 ============
    const timeLeft = computed(() => {
        if (escrowState.value !== 'AWAITING_DELIVERY') return 0
        const elapsed = (Date.now() - escrowInfo.value.depositTime) / 1000
        return Math.max(0, escrowInfo.value.deliveryTimeout - elapsed)
    })

    const isTimeout = computed(() => timeLeft.value === 0)

    const progressPercentage = computed(() => {
        const progress = progressStore.getDayProgress(24)
        if (!progress || progress.totalConcepts === 0) return 0
        return Math.round((progress.unlockedConcepts.length / progress.totalConcepts) * 100)
    })

    // ============ 实时数据接口（供Sidebar使用） ============
    const realtimeData = computed(() => ({
        gasUsage: logStore.getDayGasUsage(24),
        ethCost: logStore.getDayEthCost(24),
        operationCount: logStore.getDayOperationCount(24)
    }))

    // ============ 概念解锁 ============
    const unlockConcept = (concept) => {
        if (!unlockedConcepts.value.includes(concept)) {
            progressStore.unlockConcept(24, concept)
            return true
        }
        return false
    }

    // 检查并自动解锁最后一个概念（解决循环依赖）
    const checkAndUnlockLastConcept = (hints) => {
        const currentCount = unlockedConcepts.value.length
        const totalConcepts = 8 // Day24 总共有 8 个概念
        
        // 如果已经有 7 个概念，自动解锁最后一个 state_management
        if (currentCount >= 7 && !unlockedConcepts.value.includes('state_management')) {
            if (unlockConcept('state_management')) {
                hints.push('state_management')
            }
        }
        
        return hints
    }

    // ============ 操作函数（返回规范对象） ============

    /**
     * 存款操作
     * @param {number} amount - 存款金额
     * @returns {object} { success, message, hints, nextStep }
     */
    const deposit = (amount) => {
        const hints = []

        // 执行存款逻辑
        funds.value.buyerWallet -= amount
        funds.value.escrowAmount = amount
        escrowInfo.value.amount = amount
        escrowInfo.value.depositTime = Date.now()
        escrowState.value = 'AWAITING_DELIVERY'

        // 添加事件日志
        eventLog.value.unshift({
            type: 'PaymentDeposited',
            buyer: addresses.buyer,
            amount: amount,
            timestamp: new Date().toLocaleString()
        })

        // 记录操作日志
        logStore.addLog(24, '存款', `存款 ${amount} ETH`, 'deposit24')

        // 解锁概念
        if (unlockConcept('escrow_contract')) {
            hints.push('escrow_contract')
        }

        // 检查是否需要自动解锁最后一个概念
        checkAndUnlockLastConcept(hints)

        return {
            success: true,
            message: '✅ 存款成功！🎉 恭喜解锁：托管合约！👉 点击「⏱️ 超时倒计时」区域学习区块时间戳！',
            hints,
            nextStep: '📝 你了解了托管合约！PaymentDeposited事件记录了买家存款。👉 点击「⏱️ 超时倒计时」区域学习区块时间戳！'
        }
    }

    /**
     * 确认收货
     * @returns {object} { success, message, hints, nextStep }
     */
    const confirmDelivery = () => {
        const hints = []
        const amount = escrowInfo.value.amount

        // 执行转账
        funds.value.escrowAmount = 0
        funds.value.sellerWallet += amount
        escrowState.value = 'COMPLETE'

        // 添加事件日志
        eventLog.value.unshift({
            type: 'DeliveryConfirmed',
            buyer: addresses.buyer,
            seller: addresses.seller,
            amount: amount,
            timestamp: new Date().toLocaleString()
        })

        // 记录操作日志
        logStore.addLog(24, '确认收货', `确认收货，转账 ${amount} ETH`, 'confirmDelivery24')

        // 解锁概念
        if (unlockConcept('buyer_seller_arbitration')) {
            hints.push('buyer_seller_arbitration')
        }

        // 检查是否需要自动解锁最后一个概念
        checkAndUnlockLastConcept(hints)

        return {
            success: true,
            message: '✅ 确认收货成功！🎉 恭喜解锁：买卖仲裁！👉 点击「🛡️ 安全防护」区域学习receive与revert！',
            hints,
            nextStep: '💸 你了解了买卖仲裁！合约使用call将资金发送给卖家。👉 点击「🛡️ 安全防护」区域学习receive与revert！'
        }
    }

    /**
     * 发起争议
     * @returns {object} { success, message, hints, nextStep }
     */
    const raiseDispute = () => {
        const hints = []
        escrowState.value = 'DISPUTED'
        escrowInfo.value.isDisputed = true

        // 解锁争议解决概念
        const unlockedConcepts = progressStore.getDayProgress(24)?.unlockedConcepts || []
        if (!unlockedConcepts.includes('dispute_resolution')) {
            hints.push('dispute_resolution')
        }

        eventLog.value.unshift({
            type: 'DisputeRaised',
            initiator: currentRole.value === 'buyer' ? addresses.buyer : addresses.seller,
            timestamp: new Date().toLocaleString()
        })

        // 记录操作日志
        logStore.addLog(24, '发起争议', `发起争议，等待仲裁`, 'raiseDispute24')

        // 检查是否需要自动解锁最后一个概念
        checkAndUnlockLastConcept(hints)

        return {
            success: true,
            message: '⚠️ 争议已发起！等待仲裁者裁决。',
            hints,
            nextStep: '⚖️ 争议已发起！现在只有仲裁者可以resolveDispute()解决争议。'
        }
    }

    /**
     * 仲裁裁决
     * @param {boolean} releaseToSeller - 是否给卖家
     * @returns {object} { success, message, hints, nextStep }
     */
    const resolveDispute = (releaseToSeller) => {
        const hints = []
        const amount = escrowInfo.value.amount
        const recipient = releaseToSeller ? 'seller' : 'buyer'

        funds.value.escrowAmount = 0
        funds.value[recipient + 'Wallet'] += amount
        escrowState.value = 'COMPLETE'

        // 解锁多方安全概念
        const unlockedConcepts = progressStore.getDayProgress(24)?.unlockedConcepts || []
        if (!unlockedConcepts.includes('multi_party_security')) {
            hints.push('multi_party_security')
        }

        eventLog.value.unshift({
            type: 'DisputeResolved',
            arbiter: addresses.arbiter,
            recipient: addresses[recipient],
            amount: amount,
            timestamp: new Date().toLocaleString()
        })

        // 记录操作日志
        logStore.addLog(24, '仲裁裁决', `仲裁裁决，资金${releaseToSeller ? '给卖家' : '退买家'}`, 'resolveDispute24')

        // 检查是否需要自动解锁最后一个概念
        checkAndUnlockLastConcept(hints)

        return {
            success: true,
            message: `⚖️ 仲裁完成！资金已${releaseToSeller ? '释放给卖家' : '退回买家'}。`,
            hints,
            nextStep: '🔐 仲裁完成！多方安全机制保护了所有参与者的利益。'
        }
    }

    /**
     * 超时取消
     * @returns {object} { success, message, hints, nextStep }
     */
    const cancelAfterTimeout = () => {
        const hints = []
        const amount = escrowInfo.value.amount

        funds.value.escrowAmount = 0
        funds.value.buyerWallet += amount
        escrowState.value = 'CANCELLED'

        // 解锁时间锁释放概念
        const unlockedConcepts = progressStore.getDayProgress(24)?.unlockedConcepts || []
        if (!unlockedConcepts.includes('time_locked_release')) {
            hints.push('time_locked_release')
        }

        eventLog.value.unshift({
            type: 'EscrowCancelled',
            initiator: addresses.buyer,
            reason: 'timeout',
            timestamp: new Date().toLocaleString()
        })

        // 记录操作日志
        logStore.addLog(24, '超时取消', `超时取消，资金退回买家`, 'cancelAfterTimeout24')

        // 检查是否需要自动解锁最后一个概念
        checkAndUnlockLastConcept(hints)

        return {
            success: true,
            message: '⏱️ 超时取消成功！资金已退回买家。',
            hints,
            nextStep: '⏱️ 超时保护机制保护了买家权益！时间锁释放确保资金安全退回。'
        }
    }

    /**
     * 协商取消
     * @returns {object} { success, message, hints, nextStep }
     */
    const cancelMutual = () => {
        const hints = []
        if (escrowState.value === 'AWAITING_DELIVERY') {
            const amount = escrowInfo.value.amount
            funds.value.escrowAmount = 0
            funds.value.buyerWallet += amount
        }

        escrowState.value = 'CANCELLED'

        eventLog.value.unshift({
            type: 'EscrowCancelled',
            initiator: currentRole.value === 'buyer' ? addresses.buyer : addresses.seller,
            reason: 'mutual',
            timestamp: new Date().toLocaleString()
        })

        // 记录操作日志
        logStore.addLog(24, '协商取消', `双方协商取消交易`, 'cancelMutual24')

        // 解锁协商取消概念
        const unlockedConcepts = progressStore.getDayProgress(24)?.unlockedConcepts || []
        if (!unlockedConcepts.includes('mutual_cancellation')) {
            hints.push('mutual_cancellation')
        }

        // 检查是否需要自动解锁最后一个概念
        checkAndUnlockLastConcept(hints)

        return {
            success: true,
            message: '❌ 协商取消成功！交易已取消。',
            hints,
            nextStep: '🤝 双方协商取消了交易。这展示了托管合约的灵活性！'
        }
    }

    /**
     * 切换角色
     * @param {string} role - buyer, seller, arbiter
     * @returns {object} { success, message }
     */
    const switchRole = (role) => {
        currentRole.value = role
        const hints = []

        // 切换到仲裁者角色时解锁 arbiter_role
        if (role === 'arbiter') {
            const unlockedConcepts = progressStore.getDayProgress(24)?.unlockedConcepts || []
            if (!unlockedConcepts.includes('arbiter_role')) {
                hints.push('arbiter_role')
            }
        }

        const roleNames = {
            buyer: '买家',
            seller: '卖家',
            arbiter: '仲裁者'
        }

        const roleNextSteps = {
            buyer: `🎭 已切换到买家身份！👉 点击「💰 存款 / Deposit」按钮存入ETH，体验托管流程！`,
            seller: `🎭 已切换到卖家身份！等待买家确认收货后资金将转入你的钱包。`,
            arbiter: `🎭 已切换到仲裁者身份！当发生争议时，你可以裁决资金归属。`
        }

        // 检查是否需要自动解锁最后一个概念
        checkAndUnlockLastConcept(hints)

        return {
            success: true,
            message: `🎭 已切换到 ${roleNames[role]}！`,
            hints,
            nextStep: roleNextSteps[role]
        }
    }

    /**
     * 重置交易
     */
    const resetEscrow = () => {
        escrowState.value = 'AWAITING_PAYMENT'
        funds.value = {
            buyerWallet: 5.0,
            sellerWallet: 2.0,
            escrowAmount: 0,
            arbiterWallet: 1.0
        }
        escrowInfo.value = {
            amount: 0,
            depositTime: null,
            deliveryTimeout: 60, // 60秒（演示用）
            isDisputed: false
        }
        eventLog.value = []
    }

    return {
        // 状态
        escrowState,
        currentRole,
        addresses,
        funds,
        escrowInfo,
        eventLog,
        unlockedConcepts,

        // 计算属性
        timeLeft,
        isTimeout,
        progressPercentage,
        realtimeData,

        // 操作函数
        deposit,
        confirmDelivery,
        raiseDispute,
        resolveDispute,
        cancelAfterTimeout,
        cancelMutual,
        switchRole,
        resetEscrow
    }
}
