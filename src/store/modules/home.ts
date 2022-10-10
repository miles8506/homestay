import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getGoodPriceData, getHighScoreData, getDiscountData } from '@/services/home'
import { IHomeInfo, IDiscount } from '@/services'

interface IInitialState {
  goodPriceInfo: IHomeInfo | null
  highScoreInfo: IHomeInfo | null
  discountInfo: IDiscount | null
}

const initialState: IInitialState = {
  goodPriceInfo: null,
  highScoreInfo: null,
  discountInfo: null
}

export const requestHomeGoodPrice = createAsyncThunk('homeGoodPrice', async (args, { dispatch }) => {
  getGoodPriceData<IHomeInfo>().then(res => dispatch(setGoodPriceInfo(res)))
  getHighScoreData<IHomeInfo>().then(res => dispatch(setHighScoreInfo(res)))
  getDiscountData<IDiscount>().then(res => dispatch(setDiscountInfo(res)))
})

const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    setGoodPriceInfo(state, { payload }) {
      state.goodPriceInfo = payload
    },
    setHighScoreInfo(state, { payload }) {
      state.highScoreInfo = payload
    },
    setDiscountInfo(state, { payload }) {
      state.discountInfo = payload
    }
  },
  // extraReducers(build) {
  //   build.addCase(requestHomeGoodPrice.fulfilled, (state, { payload }) => {
  //     state.goodPriceInfo = payload
  //   })
  // }
})

export default homeSlice.reducer
export const { setGoodPriceInfo, setHighScoreInfo, setDiscountInfo } = homeSlice.actions
