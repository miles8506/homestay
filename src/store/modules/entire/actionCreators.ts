import * as entireType from './constants'
import { requestEntireRoomList } from '@/services/entire'
import { ReduxDispatchType } from '@/store'
import { IEntireRoomInfo } from '@/services/entire/type'

const setEntireList = (payload: any) => ({ type: entireType.ENTIRE_LIST, payload })
const setTotalCount = (payload: number) => ({ type: entireType.ENTIRE_TOTAL_COUNT, payload })

export const getEntireListAsync = function (offset?: number) {
  return async (dispatch: ReduxDispatchType) => {
    const { list, totalCount } = await requestEntireRoomList<IEntireRoomInfo>(offset)
    dispatch(setEntireList(list))
    dispatch(setTotalCount(totalCount))
  }
}
