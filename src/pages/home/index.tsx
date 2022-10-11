import { memo, useEffect } from 'react'
import { useSelector, shallowEqual, useDispatch } from 'react-redux'

import { requestHomeGoodPrice } from '@/store/modules/home'
import { ReduxDispatchType, ReduxStateType } from '@/store'

import { HomeWrapper } from './style'
import Banner from '@/components/home/banner'
import SectionBaseRoom from '@/components/home/sectoin-base-room'
import TabsProvider from '@/context/home/tabs-context'
import SectionTabsRoom from '@/components/home/section-tabs-room'

const Home = memo(() => {
  const { goodPriceInfo, highScoreInfo, discountInfo, recommendInfo } = useSelector(
    (state: ReduxStateType) => ({
      goodPriceInfo: state.home.goodPriceInfo,
      highScoreInfo: state.home.highScoreInfo,
      discountInfo: state.home.discountInfo,
      recommendInfo: state.home.recommendInfo
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
        { discountInfo && <SectionTabsRoom infoList={discountInfo} /> }
        { recommendInfo && <SectionTabsRoom infoList={recommendInfo} /> }
        { goodPriceInfo && <SectionBaseRoom infoList={goodPriceInfo} /> }
        { highScoreInfo && <SectionBaseRoom infoList={highScoreInfo}/> }
      </div>
    </HomeWrapper>
  )
})

export default TabsProvider(Home)
