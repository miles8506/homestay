import { createSlice, createAsyncThunk, AsyncThunk } from '@reduxjs/toolkit'
import { getGoodPriceData } from '@/services/home'
import { IGoodPriceInfo } from '@/services'

interface IInitialState {
  goodPriceInfo: IGoodPriceInfo | null
}

const initialState: IInitialState = {
  goodPriceInfo: null
}

export const requestHomeGoodPrice = createAsyncThunk('homeGoodPrice', async () => {
  const res = await getGoodPriceData()
  return res
})

const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {

  },
  extraReducers(build) {
    build.addCase(requestHomeGoodPrice.fulfilled, (state, { payload }) => {
      state.goodPriceInfo = payload
    })
  }
})

export default homeSlice.reducer
