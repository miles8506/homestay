import { memo, useEffect } from 'react'

import { useDispatch } from 'react-redux'
import { getEntireListAsync } from '@/store/modules/entire'
import { ReduxDispatchType } from '@/store'
import entireProvider from '@/context/entire/entire-context'

import { EntireWrapper } from './style'
import FilterBar from '@/components/entire/filter-bar'
import Rooms from '@/components/entire/rooms'
import Pagination from '@/components/entire/pagination'

const Entire = memo(() => {
  const dispatch: ReduxDispatchType = useDispatch()

  useEffect(() => {
    dispatch(getEntireListAsync())
  }, [dispatch])

  return (
    <EntireWrapper>
      <FilterBar />
      <Rooms />
      <Pagination />
    </EntireWrapper>
  )
})

export default entireProvider(Entire)
