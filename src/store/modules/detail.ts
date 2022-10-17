import { createSlice } from '@reduxjs/toolkit'

import { IEntireRoomInfoItem } from '@/services'

interface IInitialState {
  detailInfo: null | IEntireRoomInfoItem
}

const initialState: IInitialState = {
  detailInfo: null
}

const detailSlice = createSlice({
  name: 'detail',
  initialState,
  reducers: {
    setDetail(state, { payload }) {
      state.detailInfo = payload
    }
  }
})

const reducer = detailSlice.reducer
export const { setDetail } = detailSlice.actions
export default reducer
