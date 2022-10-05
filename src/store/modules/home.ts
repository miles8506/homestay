import { createSlice } from '@reduxjs/toolkit'

interface IInitialState {
  count: number
}

const initialState: IInitialState = {
  count: 0
}

const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {

  }
})

export default homeSlice.reducer
