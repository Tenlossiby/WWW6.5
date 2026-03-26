import { ref, computed } from 'vue'
import { useOperationLogStore } from '../stores/operationLogStore'

export function useDay27() {
    const logStore = useOperationLogStore()

    // 合约状态
    const rewardRatePerSecond = ref(1000)  // 每秒奖励数量
    const stakingTokenDecimals = ref(18)   // 质押代币小数位
    const rewardPoolBalance = ref(50000)   // 奖励池余额
    const totalStaked = ref(0)             // 总质押量

    // 用户状态
    const stakerInfo = ref({
        stakedAmount: 0,       // 已质押数量
        rewardDebt: 0,         // 累积奖励债务
        lastUpdate: Date.now() // 上次更新时间
    })

    // 钱包余额
    const walletBalances = ref({
        stake: 5000,   // STAKE 代币余额
        reward: 1000   // REWARD 代币余额
    })

    // 当前角色
    const currentRole = ref('staker')  // 'staker' 或 'owner'

    // 表单数据
    const stakeForm = ref({ amount: '' })
    const unstakeForm = ref({ amount: '' })
    const refillForm = ref({ amount: '' })

    // 事件日志
    const events = ref([])

    // 消息提示
    const message = ref('')
    const isError = ref(false)

    // 显示消息
    const showMessage = (msg, error = false) => {
        message.value = msg
        isError.value = error
        setTimeout(() => {
            message.value = ''
        }, 3000)
    }

    // 添加事件
    const addEvent = (type, icon, messageText) => {
        const now = new Date()
        const time = `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}:${now.getSeconds().toString().padStart(2, '0')}`
        events.value.unshift({ type, icon, message: messageText, time })
        if (events.value.length > 20) {
            events.value = events.value.slice(0, 20)
        }
    }

    // 更新奖励（核心计算函数）
    const updateRewards = () => {
        const now = Date.now()
        const timeDiff = Math.floor((now - stakerInfo.value.lastUpdate) / 1000) // 转换为秒
        if (timeDiff > 0 && stakerInfo.value.stakedAmount > 0) {
            const rewardMultiplier = 10 ** stakingTokenDecimals.value
            const pendingReward = (timeDiff * rewardRatePerSecond.value * stakerInfo.value.stakedAmount) / rewardMultiplier
            stakerInfo.value.rewardDebt += pendingReward
        }
        stakerInfo.value.lastUpdate = now
    }

    // 计算待领取奖励（实时预览）
    const pendingRewards = computed(() => {
        const now = Date.now()
        const timeDiff = Math.floor((now - stakerInfo.value.lastUpdate) / 1000)
        const rewardMultiplier = 10 ** stakingTokenDecimals.value
        const newReward = (timeDiff * rewardRatePerSecond.value * stakerInfo.value.stakedAmount) / rewardMultiplier
        return stakerInfo.value.rewardDebt + newReward
    })

    // 切换角色
    const toggleRole = (role) => {
        currentRole.value = role

        if (role === 'owner') {
            return {
                success: true,
                message: '👑 已切换到 Owner 身份！',
                nextStep: '📍 向下滚动到「👑 Owner 操作」区块，输入补充数量后点击「💰 补充奖励」按钮！'
            }
        } else {
            return {
                success: true,
                message: '👤 已切换到 Staker 身份！',
                nextStep: '📍 向下滚动到「🔄 质押操作」区块，在「💧 质押」标签页输入数量，然后点击「💧 质押代币」按钮！'
            }
        }
    }

    // 质押
    const stake = (amount) => {
        const numAmount = parseFloat(amount)
        if (!numAmount || numAmount <= 0) {
            showMessage('请输入有效的质押数量', true)
            return { success: false, message: '无效的质押数量' }
        }

        if (walletBalances.value.stake < numAmount) {
            showMessage('STAKE 余额不足', true)
            return { success: false, message: '余额不足' }
        }

        // 先更新奖励
        updateRewards()

        // 执行质押
        stakerInfo.value.stakedAmount += numAmount
        walletBalances.value.stake -= numAmount
        totalStaked.value += numAmount

        // 记录日志
        logStore.addLog(27, '质押代币', `质押 ${numAmount} STAKE`, 'stake27')
        addEvent('staked', '💧', `质押 ${numAmount} STAKE`)

        showMessage(`💧 质押成功！质押 ${numAmount} STAKE`)

        return {
            success: true,
            message: `质押 ${numAmount} STAKE 成功`,
            hints: ['stake_function'],
            nextStep: '⏱️ 奖励正在实时累积中，点击"快进"按钮加速查看效果！'
        }
    }

    // 取消质押
    const unstake = (amount) => {
        const numAmount = parseFloat(amount)
        if (!numAmount || numAmount <= 0) {
            showMessage('请输入有效的取消质押数量', true)
            return { success: false, message: '无效的取消质押数量' }
        }

        if (stakerInfo.value.stakedAmount < numAmount) {
            showMessage('质押数量不足', true)
            return { success: false, message: '质押数量不足' }
        }

        // 先更新奖励
        updateRewards()

        // 执行取消质押
        stakerInfo.value.stakedAmount -= numAmount
        walletBalances.value.stake += numAmount
        totalStaked.value -= numAmount

        // 记录日志
        logStore.addLog(27, '取消质押', `取消质押 ${numAmount} STAKE`, 'unstake27')
        addEvent('unstaked', '💸', `取消质押 ${numAmount} STAKE`)

        showMessage(`💸 取消质押成功！取回 ${numAmount} STAKE`)

        return {
            success: true,
            message: `取消质押 ${numAmount} STAKE 成功`,
            hints: ['unstake_function'],
            nextStep: '👉 点击安全防护区了解重入保护！'
        }
    }

    // 领取奖励
    const claimRewards = () => {
        // 先更新奖励
        updateRewards()

        const reward = stakerInfo.value.rewardDebt
        if (reward <= 0) {
            showMessage('没有可领取的奖励', true)
            return { success: false, message: '没有可领取的奖励' }
        }

        if (rewardPoolBalance.value < reward) {
            showMessage('奖励池余额不足', true)
            return { success: false, message: '奖励池余额不足' }
        }

        // 执行领取
        stakerInfo.value.rewardDebt = 0
        walletBalances.value.reward += reward
        rewardPoolBalance.value -= reward

        // 记录日志
        logStore.addLog(27, '领取奖励', `领取 ${reward.toFixed(4)} REWARD`, 'claimRewards27')
        addEvent('reward_claimed', '🎁', `领取 ${reward.toFixed(4)} REWARD`)

        showMessage(`🎁 奖励领取成功！获得 ${reward.toFixed(4)} REWARD`)

        return {
            success: true,
            message: `领取 ${reward.toFixed(4)} REWARD 成功`,
            hints: ['claim_rewards'],
            nextStep: '👉 尝试取消质押部分代币！'
        }
    }

    // 紧急提取
    const emergencyWithdraw = () => {
        const amount = stakerInfo.value.stakedAmount
        if (amount <= 0) {
            showMessage('没有可提取的质押', true)
            return { success: false, message: '没有可提取的质押' }
        }

        // 清空所有状态（放弃奖励）
        const abandonedRewards = stakerInfo.value.rewardDebt
        stakerInfo.value.stakedAmount = 0
        stakerInfo.value.rewardDebt = 0
        stakerInfo.value.lastUpdate = Date.now()
        walletBalances.value.stake += amount
        totalStaked.value -= amount

        // 记录日志
        logStore.addLog(27, '紧急提取', `紧急提取 ${amount} STAKE，放弃 ${abandonedRewards.toFixed(4)} REWARD 奖励`, 'emergencyWithdraw27')
        addEvent('emergency_withdraw', '🚨', `紧急提取 ${amount} STAKE，放弃奖励`)

        showMessage(`🚨 紧急提取成功！取回 ${amount} STAKE，放弃 ${abandonedRewards.toFixed(4)} REWARD 奖励`)

        return {
            success: true,
            message: `紧急提取 ${amount} STAKE 成功`,
            hints: ['emergency_withdraw'],
            nextStep: '🎉 恭喜完成 Day 27 学习！所有知识点已解锁！'
        }
    }

    // 补充奖励（Owner）
    const refillRewards = (amount) => {
        const numAmount = parseFloat(amount)
        if (!numAmount || numAmount <= 0) {
            showMessage('请输入有效的补充数量', true)
            return { success: false, message: '无效的补充数量' }
        }

        rewardPoolBalance.value += numAmount

        // 记录日志
        logStore.addLog(27, '补充奖励', `补充 ${numAmount} REWARD 到奖励池`, 'refillRewards27')
        addEvent('reward_refilled', '💰', `Owner 补充 ${numAmount} REWARD 到奖励池`)

        showMessage(`💰 奖励池已补充 ${numAmount} REWARD`)

        return {
            success: true,
            message: `补充 ${numAmount} REWARD 成功`,
            hints: [],
            nextStep: '👉 切换到 Staker 角色参与质押！'
        }
    }

    // 时间快进（演示用）
    const fastForwardTime = (hours) => {
        const milliseconds = hours * 3600 * 1000
        stakerInfo.value.lastUpdate -= milliseconds
        showMessage(`⏩ 时间快进${hours}小时！奖励已累积！`)

        return {
            success: true,
            message: `⏩ 时间快进${hours}小时！`,
            nextStep: '⏱️ 看到奖励增长了吗？这就是时间加权的魅力！📍 向下滚动到「🔄 质押操作」区，点击「🎁 领取奖励」标签页，然后点击「🎁 领取奖励」按钮！'
        }
    }

    // 实时数据
    const realtimeData = computed(() => ({
        gasUsage: logStore.getDayGasUsage(27),
        ethCost: logStore.getDayEthCost(27),
        operationCount: logStore.getDayOperationCount(27)
    }))

    return {
        // 状态
        rewardRatePerSecond,
        stakingTokenDecimals,
        rewardPoolBalance,
        totalStaked,
        stakerInfo,
        walletBalances,
        currentRole,
        stakeForm,
        unstakeForm,
        refillForm,
        events,
        message,
        isError,

        // 计算属性
        pendingRewards,
        realtimeData,

        // 方法
        showMessage,
        toggleRole,
        stake,
        unstake,
        claimRewards,
        emergencyWithdraw,
        refillRewards,
        fastForwardTime,
        updateRewards
    }
}
