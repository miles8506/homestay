import { memo } from 'react'

import { shallowEqual, useSelector } from 'react-redux'
import { ReduxStateType } from '@/store'
import { useEntireContext } from '@/context/entire/entire-context'

import { RoomsWrapper } from './style'
import RoomList from './cpns/room-list'

const Rooms = memo(() => {
  const { totalCount, entireList } = useSelector((state: ReduxStateType) => ({
    totalCount: state.entire.totalCount,
    entireList: state.entire.entireList
  }), shallowEqual)
  const { isShowLoading } = useEntireContext()

  return (
    <RoomsWrapper>
      <div className="title">{totalCount}多處住所</div>
      {entireList && <RoomList list={entireList} customWidth="20%" />}
      {isShowLoading && <div className="loading-mask"></div>}
    </RoomsWrapper>
  )
})

export default Rooms
