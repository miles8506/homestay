import { memo, useState } from 'react'

import filterData from '@/assets/data/filter.json'
import classNames from 'classnames'

import { FilterBarWrapper } from './style'

const FilterBar = memo(() => {
  const [selectItems, setSelectItems] = useState<string[]>([])

  const isSome = (itemName: string) => selectItems.some((item) => itemName === item)

  const handleFilterClick = (itemName: string) => {
    setSelectItems((prev) => {
      const newSelectItems = [...prev]
      const resIndex = newSelectItems.findIndex(item => item === itemName)
      resIndex === -1 ? newSelectItems.push(itemName) : newSelectItems.splice(resIndex, 1)
      return newSelectItems
    })
  }

  return (
    <FilterBarWrapper>
      <div className="filter-list">
        {filterData.map((item, index) => (
          <div
            key={index}
            className={classNames(
              'filter-item',
              isSome(item) ? 'active' : ''
            )}
            onClick={() => handleFilterClick(item)}
          >
            {item}
          </div>
        ))}
      </div>
    </FilterBarWrapper>
  )
})

export default FilterBar
