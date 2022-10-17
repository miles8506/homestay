import { memo, FC, useCallback } from 'react'

import { ITabs } from '@/services'
import { useTabsContext } from '@/context/home/tabs-context'

import { SectionTabsRoomWrapper } from './style'
import RoomList from '../room-list'
import SectionHeader from '../section-header'
import Tabs from '../tabs'
import SectionFooter from '../section-footer'
import TabsProvider from '@/context/home/tabs-context'

interface IProps {
  infoList: ITabs | null
}

const SectionTabsRoom: FC<IProps> = memo(({ infoList }) => {
  const { tabsIndex } = useTabsContext()

  const tabsName = infoList?.dest_address.map(item => item.name)

  const getCurrentTabName = () => infoList?.dest_address[tabsIndex].name

  const filterDiscountList = useCallback(() => {
    const currentTabName = getCurrentTabName()
    if (!currentTabName) return []
    return infoList?.dest_list[currentTabName]
  }, [infoList, getCurrentTabName])

  return (
    <SectionTabsRoomWrapper>
      <SectionHeader title={ infoList?.title } subTitle={infoList?.subtitle} />
      <Tabs tabsName={tabsName} />
      <RoomList
        list={filterDiscountList()}
        customWidth='33.33%'
      />
      <SectionFooter text={`顯示更多${getCurrentTabName()}房源`} />
    </SectionTabsRoomWrapper>
  )
})

export default TabsProvider(SectionTabsRoom)
