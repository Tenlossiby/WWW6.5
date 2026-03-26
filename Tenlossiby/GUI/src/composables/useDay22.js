import { ref, computed } from 'vue'
import { useOperationLogStore } from '../stores/operationLogStore'

export function useDay22() {
    const logStore = useOperationLogStore()

    // 彩票状态: CLOSED, OPEN, CALCULATING
    const lotteryState = ref('CLOSED')
    
    // 参与者列表
    const players = ref([])
    
    // 最近的获胜者
    const recentWinner = ref('')
    
    // 合约余额 (ETH)
    const contractBalance = ref(0)
    
    // 上次奖金金额
    const lastPrizeAmount = ref(0)
    
    // 事件日志
    const events = ref([])
    
    // VRF 步骤 (1: 请求, 2: 处理中, 3: 完成)
    const vrfStep = ref(0)
    
    // 当前角色: player 或 owner
    const currentRole = ref('player')
    
    // 参与表单
    const enterForm = ref({
        address: ''
    })
    
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
    const addEvent = (type, icon, message) => {
        const now = new Date()
        const time = `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}:${now.getSeconds().toString().padStart(2, '0')}`
        events.value.unshift({ type, icon, message, time })
        // 只保留最近 20 条事件
        if (events.value.length > 20) {
            events.value = events.value.slice(0, 20)
        }
    }
    
    // 切换角色
    const toggleRole = (role) => {
        currentRole.value = role
    }
    
    // 开启彩票 (仅 Owner)
    const startLottery = () => {
        if (lotteryState.value !== 'CLOSED') {
            showMessage('彩票当前不是关闭状态，无法开启', true)
            return { success: false, message: '彩票当前不是关闭状态' }
        }
        
        lotteryState.value = 'OPEN'
        players.value = []
        recentWinner.value = ''
        vrfStep.value = 0
        
        // 记录日志
        logStore.addLog(22, '开启彩票', '彩票已开启，玩家可以参与', 'startLottery22')
        addEvent('lottery-started', '🚀', '彩票已开启')
        
        showMessage('🚀 彩票已开启！玩家现在可以参与！')
        
        return {
            success: true,
            message: '彩票已开启',
            hints: ['startLottery() 仅 Owner 可调用', '将状态从 CLOSED 改为 OPEN'],
            nextStep: '切换到 Player 角色参与彩票'
        }
    }
    
    // 参与彩票 (Player)
    const enter = (address) => {
        if (!address) {
            showMessage('请输入参与地址', true)
            return { success: false, message: '请输入参与地址' }
        }
        
        if (lotteryState.value !== 'OPEN') {
            showMessage('彩票未开放，无法参与', true)
            return { success: false, message: '彩票未开放' }
        }
        
        // 检查地址是否已参与
        if (players.value.includes(address)) {
            showMessage('该地址已经参与过了', true)
            return { success: false, message: '地址已参与' }
        }
        
        // 添加参与者
        players.value.push(address)
        contractBalance.value += 0.01
        
        // 记录日志
        logStore.addLog(22, '参与彩票', `地址: ${address.slice(0, 10)}... 支付: 0.01 ETH`, 'enter22')
        addEvent('player-entered', '🎫', `玩家 ${address.slice(0, 10)}... 参与彩票`)
        
        showMessage(`🎫 参与成功！${address.slice(0, 10)}... 已加入彩票`)
        
        return {
            success: true,
            message: '参与成功',
            hints: ['enter() 是 payable 函数', '需要支付至少 entryFee (0.01 ETH)'],
            nextStep: '点击查看参与者列表了解动态数组'
        }
    }
    
    // 结束彩票 (仅 Owner)
    const endLottery = () => {
        if (lotteryState.value !== 'OPEN') {
            showMessage('彩票未开放，无法结束', true)
            return { success: false, message: '彩票未开放' }
        }
        
        if (players.value.length === 0) {
            showMessage('没有参与者，无法结束', true)
            return { success: false, message: '没有参与者' }
        }
        
        lotteryState.value = 'CALCULATING'
        vrfStep.value = 1
        
        // 记录日志
        logStore.addLog(22, '结束彩票', '彩票已结束，请求随机数', 'endLottery22')
        addEvent('lottery-ended', '🏁', '彩票结束，等待 VRF 回调')
        
        showMessage('🏁 彩票已结束！等待 VRF 随机数...')
        
        return {
            success: true,
            message: '彩票已结束，请求随机数',
            hints: ['endLottery() 向 VRF 协调器请求随机数', '状态变为 CALCULATING'],
            nextStep: '点击「触发 VRF 回调」模拟 Chainlink VRF 返回随机数'
        }
    }
    
    // 触发 VRF 回调 (模拟)
    const fulfillRandomWords = () => {
        if (lotteryState.value !== 'CALCULATING') {
            showMessage('彩票不在计算状态', true)
            return { success: false, message: '彩票不在计算状态' }
        }
        
        vrfStep.value = 2
        
        // 模拟生成随机数
        const randomWords = [generateRandomNumber()]
        
        // 计算获胜者索引
        const winnerIndex = randomWords[0] % players.value.length
        const winner = players.value[winnerIndex]
        
        // 记录奖金金额
        lastPrizeAmount.value = contractBalance.value
        
        vrfStep.value = 3
        
        // 更新状态
        recentWinner.value = winner
        
        // 记录日志
        logStore.addLog(22, 'VRF回调', `随机数: ${randomWords[0]} 获胜者: ${winner.slice(0, 10)}...`, 'fulfillRandomWords22')
        addEvent('winner-picked', '🏆', `获胜者: ${winner.slice(0, 10)}... 赢得 ${lastPrizeAmount.value} ETH`)
        
        // 重置彩票
        setTimeout(() => {
            lotteryState.value = 'CLOSED'
            players.value = []
            contractBalance.value = 0
            vrfStep.value = 0
        }, 3000)
        
        showMessage(`🏆 获胜者选出！${winner.slice(0, 10)}... 赢得 ${lastPrizeAmount.value} ETH`)
        
        return {
            success: true,
            message: `获胜者: ${winner}`,
            hints: ['randomWords[0] % players.length 计算获胜者索引', '使用 call{value: ...} 发送奖金'],
            nextStep: '点击查看获胜者详情了解奖金发放机制'
        }
    }
    
    // 生成伪随机数 (模拟)
    const generateRandomNumber = () => {
        return Math.floor(Math.random() * 1000000)
    }
    
    // 实时数据
    const realtimeData = computed(() => ({
        gasUsage: logStore.getDayGasUsage(22),
        ethCost: logStore.getDayEthCost(22),
        operationCount: logStore.getDayOperationCount(22)
    }))
    
    return {
        // 状态
        lotteryState,
        players,
        recentWinner,
        contractBalance,
        lastPrizeAmount,
        events,
        vrfStep,
        currentRole,
        enterForm,
        message,
        isError,
        
        // 方法
        showMessage,
        toggleRole,
        startLottery,
        enter,
        endLottery,
        fulfillRandomWords,
        
        // 计算属性
        realtimeData
    }
}
