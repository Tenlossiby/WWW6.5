import { computed } from 'vue'
import { useDay1 } from './useDay1'
import { useDay2 } from './useDay2'
import { useDay3 } from './useDay3'
import { useDay4 } from './useDay4'
import { useDay5 } from './useDay5'
import { useDay6 } from './useDay6'
import { useDay7 } from './useDay7'
import { useDay8 } from './useDay8'
import { useDay9 } from './useDay9'
import { useDay10 } from './useDay10'
import { useDay11 } from './useDay11'
import { useDay12 } from './useDay12'
import { useDay13 } from './useDay13'
import { useDay14 } from './useDay14'
import { useDay15 } from './useDay15'
import { useDay16 } from './useDay16'
import { useDay17 } from './useDay17'
import { useDay18 } from './useDay18'
import { useDay19 } from './useDay19'
import { useDay20 } from './useDay20'
import { useDay21 } from './useDay21'
import { useDay22 } from './useDay22'
import { useDay23 } from './useDay23'
import { useDay24 } from './useDay24'
import { useDay25 } from './useDay25'
import { useDay26 } from './useDay26'
import { useDay27 } from './useDay27'
import { useDay28 } from './useDay28'
import { useDay29 } from './useDay29'

/**
 * 获取当前 day 的 realtimeData
 * @param {number} currentDay - 当前 day 编号
 * @returns {object} 包含 realtimeData 的对象
 */
export function useCurrentDayRealtimeData(currentDay) {
  // 响应式地根据当前 day 返回对应的 realtimeData
  const realtimeData = computed(() => {
    switch (currentDay.value) {
      case 1:
        return useDay1().realtimeData.value
      case 2:
        return useDay2().realtimeData.value
      case 3:
        return useDay3().realtimeData.value
      case 4:
        return useDay4().realtimeData.value
      case 5:
        return useDay5().realtimeData.value
      case 6:
        return useDay6().realtimeData.value
      case 7:
        return useDay7().realtimeData.value
      case 8:
        return useDay8().realtimeData.value
      case 9:
        return useDay9().realtimeData.value
      case 10:
        return useDay10().realtimeData.value
      case 11:
        return useDay11().realtimeData.value
      case 12:
        return useDay12().realtimeData.value
      case 13:
        return useDay13().realtimeData.value
      case 14:
        return useDay14().realtimeData.value
      case 15:
        return useDay15().realtimeData.value
      case 16:
        return useDay16().realtimeData.value
      case 17:
        return useDay17().realtimeData.value
      case 18:
        return useDay18().realtimeData.value
      case 19:
        return useDay19().realtimeData.value
      case 20:
        return useDay20().realtimeData.value
      case 21:
        return useDay21().realtimeData.value
      case 22:
        return useDay22().realtimeData.value
      case 23:
        return useDay23().realtimeData.value
      case 24:
        return useDay24().realtimeData.value
      case 25:
        return useDay25().realtimeData.value
      case 26:
        return useDay26().realtimeData.value
      case 27:
        return useDay27().realtimeData.value
      case 28:
        return useDay28().realtimeData.value
      case 29:
        return useDay29().realtimeData.value
      default:
        // 对于未实现的 day，返回空数据
        return {
          gasUsage: 0,
          ethCost: 0,
          operationCount: 0
        }
    }
  })

  return { realtimeData }
}
