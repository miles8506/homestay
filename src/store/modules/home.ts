import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import {
  getGoodPriceData,
  getHighScoreData,
  getDiscountData,
  getRecommendData
} from '@/services/home'
import { IHomeInfo, ITabs } from '@/services'

interface IInitialState {
  goodPriceInfo: IHomeInfo | null
  highScoreInfo: IHomeInfo | null
  discountInfo: ITabs | null
  recommendInfo: ITabs | null
}

const initialState: IInitialState = {
  goodPriceInfo: null,
  highScoreInfo: null,
  discountInfo: null,
  recommendInfo: null
}

export const requestHomeGoodPrice = createAsyncThunk(
  'homeGoodPrice',
  async (args, { dispatch }) => {
    getGoodPriceData<IHomeInfo>().then((res) => dispatch(setGoodPriceInfo(res)))
    getHighScoreData<IHomeInfo>().then((res) => dispatch(setHighScoreInfo(res)))
    getDiscountData<ITabs>().then((res) => dispatch(setDiscountInfo(res)))
    getRecommendData<ITabs>().then((res) => dispatch(setRecommendInfo(res)))
  }
)

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
    },
    setRecommendInfo(state, { payload }) {
      state.recommendInfo = payload
    }
  }
  // extraReducers(build) {
  //   build.addCase(requestHomeGoodPrice.fulfilled, (state, { payload }) => {
  //     state.goodPriceInfo = payload
  //   })
  // }
})

export default homeSlice.reducer
export const { setGoodPriceInfo, setHighScoreInfo, setDiscountInfo, setRecommendInfo } =
  homeSlice.actions
