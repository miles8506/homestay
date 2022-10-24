import { memo, FC } from 'react'

import { FilterBarWrapper } from './style'
import FilterTab from '../filter-tab'

type infoListType = {
  title: string
  desc: string
}

interface IProps {
  infoList: {
    title: string
    searchInfos: infoListType[]
  }[]
}

const FilterBar: FC<IProps> = memo(({ infoList }) => {
  return (
    <FilterBarWrapper>
      <FilterTab infoList={infoList} />
    </FilterBarWrapper>
  )
})

export default FilterBar