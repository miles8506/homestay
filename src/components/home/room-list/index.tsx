import { memo, FC } from 'react'

import { IHomeInfoItem } from '@/services'

import { RoomListWrapper } from './style'
import RoomItem from '../room-item'

interface IProps {
  list: IHomeInfoItem[] | undefined,
  customWidth?: string
}

const RoomList: FC<IProps> = memo(({ list = [], customWidth = '25%' }) => {
  return (
    <RoomListWrapper customWidth={customWidth}>
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
