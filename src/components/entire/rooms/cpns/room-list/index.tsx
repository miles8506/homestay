import { FC, memo } from 'react'

import { useDispatch } from 'react-redux'
import { IEntireRoomInfoItem } from '@/services'
import { useNavigate } from 'react-router-dom'
import { setDetail } from '@/store/modules/detail'

import { RoomListWrapper } from './style'
import RoomItem from '@/components/common/room-item'

interface IProps {
  list: IEntireRoomInfoItem[] | undefined
  customWidth: string
}

const RoomList: FC<IProps> = memo(({ list = [], customWidth = '25%' }) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleNavigate = (detail: IEntireRoomInfoItem) => {
    navigate('/detail')
    dispatch(setDetail(detail))
  }

  return (
    <RoomListWrapper customWidth={customWidth}>
      {list.map((item) => (
        <div key={item._id} className="room-item-wrapper">
          <RoomItem item={item} handleNavigate={handleNavigate} />
        </div>
      ))}
    </RoomListWrapper>
  )
})

export default RoomList
