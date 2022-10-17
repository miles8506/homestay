import { configureStore } from '@reduxjs/toolkit'
import { default as homeReducer } from './modules/home'
import { default as entireReducer } from './modules/entire/reducer'
import { default as detailReducer } from './modules/detail'

const store = configureStore({
  reducer: {
    home: homeReducer,
    entire: entireReducer,
    detail: detailReducer
  }
})

export default store
export type ReduxStateType = ReturnType<typeof store.getState>
export type ReduxDispatchType = typeof store.dispatch
