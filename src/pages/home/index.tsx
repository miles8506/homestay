import { memo, useEffect } from 'react'
import { useSelector, shallowEqual, useDispatch } from 'react-redux'

import { requestHomeGoodPrice } from '@/store/modules/home'
import { ReduxDispatchType, ReduxStateType } from '@/store'

import { HomeWrapper } from './style'
import Banner from '@/components/home/banner'
import SectionHeader from '@/components/home/section-header'
import RoomItem from '@/components/home/room-item'
import RoomList from '@/components/home/room-list'

const Home = memo(() => {
  const { goodPriceInfo } = useSelector(
    (state: ReduxStateType) => ({
      goodPriceInfo: state.home.goodPriceInfo
    }),
    shallowEqual
  )
  const dispatch = useDispatch<ReduxDispatchType>()

  useEffect(() => {
    dispatch(requestHomeGoodPrice())
  }, [dispatch])

  return (
    <HomeWrapper>
      <Banner />
      <div className="content">
        <SectionHeader title={goodPriceInfo?.title} />
        <RoomList list={goodPriceInfo?.list}/>
      </div>
    </HomeWrapper>
  )
})

export default Home
