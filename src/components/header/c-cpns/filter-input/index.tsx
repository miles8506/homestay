import { memo, FC } from 'react'

import { FilterInputWrapper } from './style'

type infoListType = {
  title: string
  desc: string
}

interface IProps {
  infoList: {
    title: string
    searchInfos: infoListType[]
  }
}

const FilterInput: FC<IProps> = memo(({ infoList }) => {
  return (
    <FilterInputWrapper>
      {infoList.searchInfos.map((item, index) => (
        <div className="filter-wrap" key={index}>
          <div className="filter-input">
            <span className="city">{item.title}</span>
            <span className="desc">{item.desc}</span>
          </div>
        </div>
      ))}
    </FilterInputWrapper>
  )
})

export default FilterInput
