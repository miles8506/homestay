import { memo, FC, useState } from 'react'

import { FilterTabWrapper } from './style'
import FilterInput from '../filter-input'
import classNames from 'classnames'

interface IProps {
  infoList: any
}

const FilterTab: FC<IProps> = memo(({ infoList }) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  return (
    <FilterTabWrapper>
      <div className="filter-tab">
        {infoList.map((item: any, index: number) => (
          <div
            key={item.title}
            className={classNames('tab', { active: index === currentIndex })}
            onClick={() => setCurrentIndex(index)}
          >
            {item.title}
          </div>
        ))}
        <FilterInput infoList={infoList[currentIndex]} />
      </div>
    </FilterTabWrapper>
  )
})

export default FilterTab
