import { FC, memo } from 'react'

import { IHomeInfo } from '@/services'

import { SectionPlusRoomWrapper } from './style'
import SectionHeader from '../section-header'
import SectionFooter from '../section-footer'
import RoomItem from '../room-item'
import ScrollView from '@/base-ui/scroll-view'

interface IProps {
  infoList: IHomeInfo
}

const SectionPlusRoom: FC<IProps> = memo(({ infoList }) => {
  const { title, subtitle, list } = infoList

  return (
    <SectionPlusRoomWrapper>
      <SectionHeader title={title} subTitle={subtitle} />
      <div className="plus-home-list">
        <ScrollView>
          {list.map((item) => (
            <div className="room-item-wrapper" key={item.id}>
              <RoomItem item={item} />
            </div>
          ))}
        </ScrollView>
      </div>
      <SectionFooter text="顯示更多plus房源" />
    </SectionPlusRoomWrapper>
  )
})

export default SectionPlusRoom
