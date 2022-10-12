import { memo, FC } from 'react'

import { SectionLongForWrapper } from './style'

import { ILongForInfo } from '@/services'

import LongForItem from '../long-for-item'
import SectionHeader from '../section-header'
import ScrollView from '@/base-ui/scroll-view'

interface IProps {
  infoList: ILongForInfo
}

const SectionLongFor: FC<IProps> = memo(({ infoList }) => {
  const { list, title, subtitle } = infoList

  return (
    <SectionLongForWrapper>
      <SectionHeader title={title} subTitle={subtitle} />
      <div className="long-for-list">
        <div className="long-for-list-inner">
          <ScrollView>
            {list.map((item) => (
              <LongForItem key={item.city} info={item} />
            ))}
          </ScrollView>
        </div>
      </div>
    </SectionLongForWrapper>
  )
})

export default SectionLongFor
