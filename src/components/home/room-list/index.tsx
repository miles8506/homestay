import { memo, FC } from 'react'

import { IHomeInfoItem, IEntireRoomInfoItem } from '@/services'

import { RoomListWrapper } from './style'
import RoomItem from '../../common/room-item'

interface IProps {
  list: IHomeInfoItem[] | IEntireRoomInfoItem[] | undefined,
  customWidth?: string
}

const RoomList: FC<IProps> = memo(({ list = [], customWidth = '25%' }) => {
  return (
    <RoomListWrapper customWidth={customWidth}>
      {
        list.slice(0, 8).map((item) => (
          <div key={item._id} className="room-item-wrapper">
            <RoomItem item={item}/>
          </div>
        ))
      }
    </RoomListWrapper>
  )
})

export default RoomList
