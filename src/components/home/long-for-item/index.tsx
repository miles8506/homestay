import { memo, FC } from 'react'

import { ILongFor } from '@/services'

import { LongForItemWrapper } from './style'

interface IProps {
  info: ILongFor
}

const LongForItem: FC<IProps> = memo(({ info }) => {
  const { city, picture_url, price } = info

  return (
    <LongForItemWrapper>
      <div className="long-for">
        <div className="long-for-inner">
          <img className="long-for-img" src={picture_url}></img>
          <div className="long-for-info">
            <span className="city">{city}</span>
            <span className="price">平均價格 {price}</span>
          </div>
        </div>
      </div>
    </LongForItemWrapper>
  )
})

export default LongForItem
