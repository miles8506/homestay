import { memo, FC } from 'react'

import { IHomeInfo } from '@/services'

import { SectionRoomWrapper } from './style'
import SectionHeader from '../section-header'
import RoomList from '../room-list'

interface IProps {
  infoList: IHomeInfo | null
}

const SectionBaseRoom: FC<IProps> = memo(({ infoList }) => {

  return (
    <SectionRoomWrapper>
      <SectionHeader title={infoList?.title} subTitle={infoList?.subtitle} />
      <RoomList list={infoList?.list}/>
    </SectionRoomWrapper>
  )
})

export default SectionBaseRoom
