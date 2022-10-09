import { memo, FC } from 'react'

import { IGoodPriceInfoItem } from '@/services'

import { RoomListWrapper } from './style'
import RoomItem from '../room-item'

interface IProps {
  list: IGoodPriceInfoItem[] | undefined
}

const RoomList: FC<IProps> = memo(({ list = [] }) => {
  return (
    <RoomListWrapper>
      {
        list.slice(0, 8).map((item) => (
          <div key={item.id} className="room-item-wrapper">
            <RoomItem item={item}/>
          </div>
        ))
      }
    </RoomListWrapper>
  )
})

export default RoomList
