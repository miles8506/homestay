import { memo, useEffect } from 'react'
import { useSelector, shallowEqual, useDispatch } from 'react-redux'

import { requestHomeGoodPrice } from '@/store/modules/home'
import { ReduxDispatchType, ReduxStateType } from '@/store'

import { HomeWrapper } from './style'
import Banner from '@/components/home/banner'
import SectionBaseRoom from '@/components/home/sectoin-base-room'
import SectionTabsRoom from '@/components/home/section-tabs-room'
import SectionLongFor from '@/components/home/section-long-for'
import SectionPlusRoom from '@/components/home/section-plus-room'

const Home = memo(() => {
  const { goodPriceInfo, highScoreInfo, discountInfo, recommendInfo, longForInfo, homePlusInfo } = useSelector(
    (state: ReduxStateType) => ({
      goodPriceInfo: state.home.goodPriceInfo,
      highScoreInfo: state.home.highScoreInfo,
      discountInfo: state.home.discountInfo,
      recommendInfo: state.home.recommendInfo,
      longForInfo: state.home.longForInfo,
      homePlusInfo: state.home.homePlusInfo
    }),
    shallowEqual
  )
  const dispatch = useDispatch<ReduxDispatchType>()

  useEffect(() => {
    dispatch(requestHomeGoodPrice())
  }, [dispatch])

  return (
    <HomeWrapper>
      <Banner />``
      <div className="content">
        {discountInfo && <SectionTabsRoom infoList={discountInfo} />}
        {recommendInfo && <SectionTabsRoom infoList={recommendInfo} />}
        {longForInfo && <SectionLongFor infoList={longForInfo} />}
        {goodPriceInfo && <SectionBaseRoom infoList={goodPriceInfo} />}
        {highScoreInfo && <SectionBaseRoom infoList={highScoreInfo} />}
        {homePlusInfo && <SectionPlusRoom infoList={homePlusInfo} />}
      </div>
    </HomeWrapper>
  )
})

export default Home
