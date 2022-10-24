import { memo, useEffect } from 'react'

import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import { getEntireListAsync } from '@/store/modules/entire'
import { ReduxDispatchType, ReduxStateType } from '@/store'
import entireProvider from '@/context/entire/entire-context'
import { setIsFixed } from '@/store/modules/main'

import { EntireWrapper } from './style'
import FilterBar from '@/components/entire/filter-bar'
import Rooms from '@/components/entire/rooms'
import Pagination from '@/components/entire/pagination'
import Header from '@/components/header'

const Entire = memo(() => {
  const dispatch: ReduxDispatchType = useDispatch()
  const { isFixed } = useSelector((state: ReduxStateType) => ({
    isFixed: state.main.isFixed
  }), shallowEqual)

  useEffect(() => {
    dispatch(getEntireListAsync())
    dispatch(setIsFixed(true))
  }, [dispatch])

  return (
    <EntireWrapper>
      <Header isFixed={isFixed} />
      <FilterBar />
      <Rooms />
      <Pagination />
    </EntireWrapper>
  )
})

export default entireProvider(Entire)
