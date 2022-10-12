import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import {
  getGoodPriceData,
  getHighScoreData,
  getDiscountData,
  getRecommendData
} from '@/services/home'
import { getLongForData, IHomeInfo, ILongForInfo, ITabs } from '@/services'

interface IInitialState {
  goodPriceInfo: IHomeInfo | null
  highScoreInfo: IHomeInfo | null
  discountInfo: ITabs | null
  recommendInfo: ITabs | null
  longForInfo: ILongForInfo | null
}

const initialState: IInitialState = {
  goodPriceInfo: null,
  highScoreInfo: null,
  discountInfo: null,
  recommendInfo: null,
  longForInfo: null
}

export const requestHomeGoodPrice = createAsyncThunk(
  'homeGoodPrice',
  async (args, { dispatch }) => {
    getGoodPriceData<IHomeInfo>().then((res) => dispatch(setGoodPriceInfo(res)))
    getHighScoreData<IHomeInfo>().then((res) => dispatch(setHighScoreInfo(res)))
    getDiscountData<ITabs>().then((res) => dispatch(setDiscountInfo(res)))
    getRecommendData<ITabs>().then((res) => dispatch(setRecommendInfo(res)))
    getLongForData<ILongForInfo[]>().then(res => dispatch(setLongForInfo(res)))
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
    },
    setLongForInfo(state, { payload }) {
      state.longForInfo = payload
    }
  }
  // extraReducers(build) {
  //   build.addCase(requestHomeGoodPrice.fulfilled, (state, { payload }) => {
  //     state.goodPriceInfo = payload
  //   })
  // }
})

export default homeSlice.reducer
export const { setGoodPriceInfo, setHighScoreInfo, setDiscountInfo, setRecommendInfo, setLongForInfo } =
  homeSlice.actions
