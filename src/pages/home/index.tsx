import { memo, useEffect } from 'react'
import { useSelector, shallowEqual, useDispatch } from 'react-redux'

import { requestHomeGoodPrice } from '@/store/modules/home'
import { ReduxDispatchType, ReduxStateType } from '@/store'
import { useTabsContext } from '@/context/home/tabs-context'

import { HomeWrapper } from './style'
import Banner from '@/components/home/banner'
import SectionBaseRoom from '@/components/home/sectoin-base-room'
import TabsProvider from '@/context/home/tabs-context'
import Tabs from '@/components/home/tabs'

import SectionHeader from '@/components/home/section-header'
import RoomList from '@/components/home/room-list'

const Home = memo(() => {
  const { goodPriceInfo, highScoreInfo, discountInfo } = useSelector(
    (state: ReduxStateType) => ({
      goodPriceInfo: state.home.goodPriceInfo,
      highScoreInfo: state.home.highScoreInfo,
      discountInfo: state.home.discountInfo
    }),
    shallowEqual
  )
  const dispatch = useDispatch<ReduxDispatchType>()
  const { tabsIndex } = useTabsContext()

  const tabsName = discountInfo?.dest_address.map(item => item.name)
  const filterDiscountList = () => {
    const currentTabName = discountInfo?.dest_address[tabsIndex].name
    if (!currentTabName) return []
    return discountInfo?.dest_list[currentTabName]
  }

  useEffect(() => {
    dispatch(requestHomeGoodPrice())
  }, [dispatch])

  return (
    <HomeWrapper>
      <Banner />
      <div className="content">
        <div className="discount">
          <SectionHeader title={discountInfo?.title} subTitle={discountInfo?.subtitle} />
          <Tabs tabsName={tabsName} />
          <RoomList
            list={filterDiscountList()}
            customWidth='33.33%'
          />
        </div>
        <SectionBaseRoom infoList={goodPriceInfo} />
        <SectionBaseRoom infoList={highScoreInfo}/>
      </div>
    </HomeWrapper>
  )
})

export default TabsProvider(Home)
