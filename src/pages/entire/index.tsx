import { memo } from 'react'

import { EntireWrapper } from './style'
import FilterBar from '@/components/entire/filter-bar'
import Main from '@/components/entire/main'
import Pagination from '@/components/entire/pagination'

const Entire = memo(() => {
  return (
    <EntireWrapper>
      <FilterBar />
      <Main />
      <Pagination />
    </EntireWrapper>
  )
})

export default Entire
