import * as entireType from './constants'
import { IEntireRoomInfoItem } from '@/services/entire/type'

interface IInitialState {
  entireList: IEntireRoomInfoItem[] | null,
  totalCount: number | null
}

const initialState:IInitialState = {
  entireList: null,
  totalCount: null
}

export default function reducer(state = initialState, action: any) {
  switch (action.type) {
    case entireType.ENTIRE_LIST:
      return { ...state, entireList: action.payload }
    case entireType.ENTIRE_TOTAL_COUNT:
      return { ...state, totalCount: action.payload }
    default:
      return state
  }
}
