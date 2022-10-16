import { memo, FC } from 'react'

import { IHomeInfoItem, IEntireRoomInfoItem } from '@/services'

import { RoomListWrapper } from './style'
import RoomItem from '../room-item'

interface IProps {
  list: IHomeInfoItem[] | IEntireRoomInfoItem[] | undefined,
  customWidth?: string
  showCount?: number
}

const RoomList: FC<IProps> = memo(({ list = [], customWidth = '25%', showCount = 8 }) => {
  return (
    <RoomListWrapper customWidth={customWidth}>
      {
        list.slice(0, showCount).map((item) => (
          <div key={item?._id ?? item.id} className="room-item-wrapper">
            <RoomItem item={item}/>
          </div>
        ))
      }
    </RoomListWrapper>
  )
})

export default RoomList
