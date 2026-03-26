import { ref, computed } from 'vue'
import { useOperationLogStore } from '../stores/operationLogStore'

export function useDay28() {
    const logStore = useOperationLogStore()

    // ========== 状态 ==========
    const currentRole = ref('TokenHolder') // TokenHolder, Proposer, Executor
    const currentTime = ref(Date.now())
    const message = ref('')
    const isError = ref(false)
    let messageTimeout = null

    // 显示消息
    const showMessage = (msg, error = false) => {
        message.value = msg
        isError.value = error
        
        if (messageTimeout) {
            clearTimeout(messageTimeout)
        }
        
        messageTimeout = setTimeout(() => {
            message.value = ''
            isError.value = false
        }, 3000)
    }
    const proposals = ref([
        {
            id: 1,
            description: "升级协议版本",
            state: 'Active',
            deadline: Date.now() + 2 * 24 * 60 * 60 * 1000,
            votesFor: 30000,
            votesAgainst: 10000,
            executionTime: null,
            executed: false,
            proposer: '0x1234...5678',
            hasVoted: {}
        },
        {
            id: 2,
            description: "调整手续费",
            state: 'Queued',
            deadline: Date.now() - 24 * 60 * 60 * 1000,
            votesFor: 45000,
            votesAgainst: 5000,
            executionTime: Date.now() + 1 * 24 * 60 * 60 * 1000,
            executed: false,
            proposer: '0xabcd...ef01',
            hasVoted: {}
        }
    ])
    
    // 事件日志
    const events = ref([])
    
    const userTokenData = ref({
        balance: 5000,
        totalSupply: 100000,
        votingPower: 5000
    })
    
    const proposalCount = ref(2)
    
    // 表单数据
    const newProposalDescription = ref('')
    const newProposalTarget = ref('')
    const newProposalData = ref('')
    const selectedProposalId = ref(1)

    // ========== 计算属性 ==========
    const activeProposals = computed(() => 
        proposals.value.filter(p => p.state === 'Active')
    )
    
    const queuedProposals = computed(() => 
        proposals.value.filter(p => p.state === 'Queued')
    )
    
    const finalizedProposals = computed(() => 
        proposals.value.filter(p => p.state === 'Active' && currentTime.value >= p.deadline)
    )
    
    const executableProposals = computed(() => 
        proposals.value.filter(p => 
            p.state === 'Queued' && 
            currentTime.value >= p.executionTime &&
            !p.executed
        )
    )
    
    const selectedProposal = computed(() => 
        proposals.value.find(p => p.id === selectedProposalId.value)
    )
    
    const currentProposalState = computed(() => {
        const proposal = selectedProposal.value
        if (!proposal) return 'Unknown'
        return proposal.state
    })
    
    const canVote = computed(() => {
        const proposal = selectedProposal.value
        if (!proposal) return false
        return proposal.state === 'Active' && 
               currentTime.value < proposal.deadline &&
               !proposal.hasVoted['currentUser'] &&
               userTokenData.value.votingPower > 0
    })
    
    const canFinalize = computed(() => {
        const proposal = selectedProposal.value
        if (!proposal) return false
        return proposal.state === 'Active' && 
               currentTime.value >= proposal.deadline &&
               !proposal.executed
    })
    
    const canExecute = computed(() => {
        const proposal = selectedProposal.value
        if (!proposal) return false
        return proposal.state === 'Queued' && 
               currentTime.value >= proposal.executionTime &&
               !proposal.executed
    })

    // ========== 方法 ==========
    
    // 切换角色
    const switchRole = (role) => {
        currentRole.value = role
        return {
            success: true,
            message: `已切换到 ${role} 角色`,
            hints: [],
            nextStep: getRoleHint(role)
        }
    }
    
    const getRoleHint = (role) => {
        const hints = {
            TokenHolder: '👉 选择提案并投票！',
            Proposer: '👉 创建一个新提案！',
            Executor: '👉 最终确定或执行提案！'
        }
        return hints[role] || ''
    }
    
    // 快进时间
    const fastForwardTime = (days) => {
        const msToAdd = days * 24 * 60 * 60 * 1000
        currentTime.value += msToAdd
        
        // 更新提案状态
        proposals.value.forEach(proposal => {
            if (proposal.state === 'Active' && currentTime.value >= proposal.deadline) {
                // 投票期结束，可以最终确定
            }
        })
        
        return {
            success: true,
            message: `⏩ 时间快进 ${days} 天！`,
            hints: [],
            nextStep: '👉 查看提案状态变化！'
        }
    }
    
    // 创建提案
    const createProposal = (description, target, data) => {
        if (!description || !target) {
            return {
                success: false,
                message: '❌ 请填写完整的提案信息',
                hints: [],
                nextStep: ''
            }
        }
        
        if (userTokenData.value.balance < 100) {
            return {
                success: false,
                message: '❌ 余额不足，需要100 GOVERN作为押金',
                hints: [],
                nextStep: ''
            }
        }
        
        proposalCount.value++
        const newProposal = {
            id: proposalCount.value,
            description: description,
            state: 'Active',
            deadline: currentTime.value + 3 * 24 * 60 * 60 * 1000,
            votesFor: 0,
            votesAgainst: 0,
            executionTime: null,
            executed: false,
            proposer: 'currentUser',
            hasVoted: {},
            target: target,
            data: data
        }
        
        proposals.value.push(newProposal)
        userTokenData.value.balance -= 100
        
        logStore.addLog(28, '创建提案', `提案 #${newProposal.id}: ${description}`, 'createProposal28')
        
        return {
            success: true,
            message: `📝 提案 #${newProposal.id} 创建成功！`,
            hints: ['proposal_struct'],
            nextStep: '👉 切换到 TokenHolder 角色参与投票！'
        }
    }
    
    // 投票
    const vote = (proposalId, support) => {
        const proposal = proposals.value.find(p => p.id === proposalId)
        
        if (!proposal) {
            return {
                success: false,
                message: '❌ 提案不存在',
                hints: [],
                nextStep: ''
            }
        }
        
        if (proposal.state !== 'Active') {
            return {
                success: false,
                message: '❌ 提案不在投票期',
                hints: [],
                nextStep: ''
            }
        }
        
        if (currentTime.value >= proposal.deadline) {
            return {
                success: false,
                message: '❌ 投票期已结束',
                hints: [],
                nextStep: ''
            }
        }
        
        if (proposal.hasVoted['currentUser']) {
            return {
                success: false,
                message: '❌ 您已经投过票了',
                hints: [],
                nextStep: ''
            }
        }
        
        if (userTokenData.value.votingPower <= 0) {
            return {
                success: false,
                message: '❌ 您没有投票权',
                hints: [],
                nextStep: ''
            }
        }
        
        const weight = userTokenData.value.votingPower
        proposal.hasVoted['currentUser'] = true
        
        if (support) {
            proposal.votesFor += weight
        } else {
            proposal.votesAgainst += weight
        }
        
        logStore.addLog(28, '投票', `提案 #${proposalId}: ${support ? '赞成' : '反对'} (${weight}票)`, 'vote28')
        
        return {
            success: true,
            message: `🗳️ 投票成功！${support ? '赞成' : '反对'} ${weight} 票`,
            hints: ['voting_function'],
            nextStep: '👉 等待投票结束或切换到 Executor 角色！'
        }
    }
    
    // 最终确定提案
    const finalize = (proposalId) => {
        const proposal = proposals.value.find(p => p.id === proposalId)
        
        if (!proposal) {
            return {
                success: false,
                message: '❌ 提案不存在',
                hints: [],
                nextStep: ''
            }
        }
        
        if (currentTime.value < proposal.deadline) {
            return {
                success: false,
                message: '❌ 投票期尚未结束',
                hints: [],
                nextStep: '👉 使用快进时间功能加速！'
            }
        }
        
        if (proposal.executed) {
            return {
                success: false,
                message: '❌ 提案已执行',
                hints: [],
                nextStep: ''
            }
        }
        
        // 检查法定人数
        const totalVotes = proposal.votesFor + proposal.votesAgainst
        const quorumRequired = (userTokenData.value.totalSupply * 10) / 100
        
        if (totalVotes < quorumRequired) {
            proposal.state = 'Defeated'
            return {
                success: false,
                message: '❌ 未达到法定人数，提案被否决',
                hints: [],
                nextStep: ''
            }
        }
        
        // 检查多数决
        if (proposal.votesFor <= proposal.votesAgainst) {
            proposal.state = 'Defeated'
            return {
                success: false,
                message: '❌ 赞成票未超过反对票，提案被否决',
                hints: [],
                nextStep: ''
            }
        }
        
        // 通过，进入时间锁
        proposal.state = 'Queued'
        proposal.executionTime = currentTime.value + 2 * 24 * 60 * 60 * 1000
        
        logStore.addLog(28, '最终确定提案', `提案 #${proposalId} 已通过，进入时间锁`, 'finalize28')
        
        return {
            success: true,
            message: '✅ 提案通过，进入时间锁！',
            hints: ['finalize_function'],
            nextStep: '👉 等待时间锁过期后执行提案！'
        }
    }
    
    // 执行提案
    const execute = (proposalId) => {
        const proposal = proposals.value.find(p => p.id === proposalId)
        
        if (!proposal) {
            return {
                success: false,
                message: '❌ 提案不存在',
                hints: [],
                nextStep: ''
            }
        }
        
        if (proposal.state !== 'Queued') {
            return {
                success: false,
                message: '❌ 提案不在时间锁中',
                hints: [],
                nextStep: ''
            }
        }
        
        if (currentTime.value < proposal.executionTime) {
            return {
                success: false,
                message: '❌ 时间锁尚未过期',
                hints: [],
                nextStep: '👉 使用快进时间功能加速！'
            }
        }
        
        if (proposal.executed) {
            return {
                success: false,
                message: '❌ 提案已执行',
                hints: [],
                nextStep: ''
            }
        }
        
        // 执行提案
        proposal.executed = true
        proposal.state = 'Executed'
        
        // 退还押金
        if (proposal.proposer === 'currentUser') {
            userTokenData.value.balance += 100
        }
        
        logStore.addLog(28, '执行提案', `提案 #${proposalId} 执行成功，押金已退还`, 'execute28')
        
        return {
            success: true,
            message: '🔧 提案执行成功！押金已退还',
            hints: ['low_level_call'],
            nextStep: '🎉 恭喜完成 Day 28 学习！'
        }
    }
    
    // 格式化时间
    const formatTime = (timestamp) => {
        const date = new Date(timestamp)
        return date.toLocaleString('zh-CN')
    }
    
    const formatTimeLeft = (ms) => {
        if (ms <= 0) return '已过期'
        const days = Math.floor(ms / (24 * 60 * 60 * 1000))
        const hours = Math.floor((ms % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000))
        return `${days}天 ${hours}小时`
    }
    
    // 实时数据
    const realtimeData = computed(() => ({
        gasUsage: logStore.getDayGasUsage(28),
        ethCost: logStore.getDayEthCost(28),
        operationCount: logStore.getDayOperationCount(28)
    }))

    return {
        // 状态
        currentRole,
        currentTime,
        proposals,
        userTokenData,
        proposalCount,
        newProposalDescription,
        newProposalTarget,
        newProposalData,
        selectedProposalId,
        message,
        isError,
        events,
        
        // 计算属性
        activeProposals,
        queuedProposals,
        finalizedProposals,
        executableProposals,
        selectedProposal,
        currentProposalState,
        canVote,
        canFinalize,
        canExecute,
        realtimeData,
        
        // 方法
        switchRole,
        fastForwardTime,
        createProposal,
        vote,
        finalize,
        execute,
        formatTime,
        formatTimeLeft,
        showMessage
    }
}
