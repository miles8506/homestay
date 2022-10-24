import { createSlice } from "@reduxjs/toolkit"

interface IMainState {
  isFixed: boolean | null
}

const initialState: IMainState = {
  isFixed: null
}

const mainSlice = createSlice({
  name: 'main',
  initialState,
  reducers: {
    setIsFixed(state, { payload }) {
      state.isFixed = payload
    }
  }
})

export const { setIsFixed } = mainSlice.actions
export default mainSlice.reducer
