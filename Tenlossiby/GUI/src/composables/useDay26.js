import { ref, computed } from 'vue'
import { useProgressStore } from '../stores/progressStore'
import { useOperationLogStore } from '../stores/operationLogStore'

export function useDay26() {
    const progressStore = useProgressStore()
    const logStore = useOperationLogStore()

    // ========== 市场状态 ==========
    const listings = ref([]) // 所有挂单列表
    const marketplaceFeePercent = ref(250) // 默认 2.5% (基点)
    const feeRecipient = ref('0xMarketplaceOwner...')
    const totalVolume = ref(0) // 总交易量

    // ========== 表单状态 ==========
    const listForm = ref({
        nftAddress: '',
        tokenId: null,
        price: null,
        royaltyReceiver: '',
        royaltyPercent: 0
    })

    const selectedListing = ref(null)

    // ========== 用户NFT库存（模拟）==========
    const userNFTs = ref([
        { tokenId: 1, nftAddress: '0xNFTContract1...', name: 'CryptoArt #1' },
        { tokenId: 2, nftAddress: '0xNFTContract1...', name: 'CryptoArt #2' },
        { tokenId: 3, nftAddress: '0xNFTContract2...', name: 'GameItem #1' }
    ])

    // ========== 消息提示 ==========
    const message = ref('')
    const isError = ref(false)

    const showMessage = (msg, error = false) => {
        message.value = msg
        isError.value = error
        setTimeout(() => {
            message.value = ''
        }, 3000)
    }

    // ========== 计算属性 ==========
    const activeListings = computed(() => {
        return listings.value.filter(item => item.isListed)
    })

    const myListings = computed(() => {
        const currentUser = '0xCurrentUser...' // 模拟当前用户
        return listings.value.filter(item => item.seller === currentUser && item.isListed)
    })

    // ========== 操作方法 ==========

    // 挂单
    const listNFT = (formData) => {
        const hints = []
        let nextStep = ''

        // 验证
        if (!formData.nftAddress || !formData.tokenId || !formData.price) {
            showMessage('❌ 请填写完整的挂单信息', true)
            return {
                success: false,
                message: '请填写完整的挂单信息'
            }
        }

        if (formData.price <= 0) {
            showMessage('❌ 价格必须大于 0', true)
            return {
                success: false,
                message: '价格必须大于 0'
            }
        }

        if (formData.royaltyPercent > 10) {
            showMessage('❌ 版税比例不能超过 10%', true)
            return {
                success: false,
                message: '版税比例不能超过 10%'
            }
        }

        // 创建挂单
        const newListing = {
            id: Date.now(),
            seller: '0xCurrentUser...',
            nftAddress: formData.nftAddress,
            tokenId: formData.tokenId,
            price: parseFloat(formData.price),
            royaltyReceiver: formData.royaltyReceiver || '0xCreator...',
            royaltyPercent: formData.royaltyPercent * 100, // 转换为基点
            isListed: true,
            createdAt: new Date()
        }

        listings.value.push(newListing)

        // 记录日志
        logStore.addLog(26, '挂单NFT', `Token #${formData.tokenId} 售价 ${formData.price} ETH`, 'listNFT26')

        // 检查解锁
        const unlockedConcepts = progressStore.getDayProgress(26)?.unlockedConcepts || []
        if (!unlockedConcepts.includes('listing_mechanism')) {
            hints.push('listing_mechanism')
            showMessage(`✅ 挂单成功！Token #${formData.tokenId} 已在市场上出售\n🎉 恭喜解锁：挂单机制！📍 切换到「🏪 购买」标签页体验购买流程！`)
        } else {
            showMessage(`✅ 挂单成功！Token #${formData.tokenId} 已在市场上出售`)
        }

        nextStep = '📍 切换到「🏪 购买」标签页体验购买流程！'

        return {
            success: true,
            message: `挂单成功！Token #${formData.tokenId} 售价 ${formData.price} ETH`,
            listing: newListing,
            hints,
            nextStep
        }
    }

    // 购买
    const buyNFT = (listing) => {
        const hints = []
        let nextStep = ''

        if (!listing || !listing.isListed) {
            showMessage('❌ 该NFT未在出售中', true)
            return {
                success: false,
                message: '该NFT未在出售中'
            }
        }

        // 计算费用分配
        const feeAmount = (listing.price * marketplaceFeePercent.value) / 10000
        const royaltyAmount = (listing.price * listing.royaltyPercent) / 10000
        const sellerAmount = listing.price - feeAmount - royaltyAmount

        // 更新状态
        listing.isListed = false
        listing.buyer = '0xCurrentUser...'
        totalVolume.value += listing.price

        // 记录日志
        logStore.addLog(26, '购买NFT', `Token #${listing.tokenId} 价格 ${listing.price} ETH`, 'buyNFT26')

        // 检查解锁
        const unlockedConcepts = progressStore.getDayProgress(26)?.unlockedConcepts || []
        const newUnlocks = []

        if (!unlockedConcepts.includes('buy_now_price')) {
            hints.push('buy_now_price')
            newUnlocks.push('一口价')
        }
        if (!unlockedConcepts.includes('owner_revenue')) {
            hints.push('owner_revenue')
            newUnlocks.push('卖家收益')
        }

        // 根据解锁数量显示不同提示
        if (newUnlocks.length > 0) {
            const unlockText = newUnlocks.join('、')
            showMessage(`✅ 购买成功！Token #${listing.tokenId} 已转移到你的账户\n🎉 恭喜解锁：${unlockText}！📍 切换到「❌ 取消」标签页学习如何取消挂单！`)
        } else {
            showMessage(`✅ 购买成功！Token #${listing.tokenId} 已转移到你的账户`)
        }

        nextStep = '📍 切换到「❌ 取消」标签页学习如何取消挂单！'

        return {
            success: true,
            message: `购买成功！Token #${listing.tokenId} 已转移`,
            feeAmount,
            royaltyAmount,
            sellerAmount,
            hints,
            nextStep
        }
    }

    // 取消挂单
    const cancelListing = (listing) => {
        const hints = []
        let nextStep = ''

        if (!listing || !listing.isListed) {
            showMessage('❌ 该挂单不存在或已取消', true)
            return {
                success: false,
                message: '该挂单不存在或已取消'
            }
        }

        // 更新状态
        listing.isListed = false

        // 记录日志
        logStore.addLog(26, '取消挂单', `Token #${listing.tokenId}`, 'cancelListing26')

        // 检查解锁
        const unlockedConcepts = progressStore.getDayProgress(26)?.unlockedConcepts || []
        if (!unlockedConcepts.includes('cancel_listing')) {
            hints.push('cancel_listing')
            showMessage(`✅ 挂单已取消！Token #${listing.tokenId} 不再出售\n🎉 恭喜解锁：取消挂单！🎉 Day26 所有概念已解锁！`)
        } else {
            showMessage(`✅ 挂单已取消！Token #${listing.tokenId} 不再出售`)
        }

        nextStep = '🎉 Day26 所有概念已解锁！'

        return {
            success: true,
            message: `挂单已取消！Token #${listing.tokenId}`,
            hints,
            nextStep
        }
    }

    // 计算费用分配（预览）
    const calculateDistribution = (price, royaltyPercent) => {
        if (!price || price <= 0) return { feeAmount: 0, royaltyAmount: 0, sellerAmount: 0 }
        const feeAmount = (price * marketplaceFeePercent.value) / 10000
        const royaltyAmount = (price * royaltyPercent) / 10000
        const sellerAmount = price - feeAmount - royaltyAmount
        return { feeAmount, royaltyAmount, sellerAmount }
    }

    // ========== Realtime Data（用于实时数据展示）==========
    const realtimeData = computed(() => ({
        gasUsage: logStore.getDayGasUsage(26),
        ethCost: logStore.getDayEthCost(26),
        operationCount: logStore.getDayOperationCount(26)
    }))

    return {
        // 状态
        listings,
        marketplaceFeePercent,
        feeRecipient,
        totalVolume,
        listForm,
        selectedListing,
        userNFTs,
        activeListings,
        myListings,
        message,
        isError,
        // 方法
        listNFT,
        buyNFT,
        cancelListing,
        calculateDistribution,
        showMessage,
        // 实时数据
        realtimeData
    }
}
