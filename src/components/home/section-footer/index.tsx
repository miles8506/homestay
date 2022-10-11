import IconMoreArrow from '@/assets/svg/icon-more-arrow'
import { memo, FC } from 'react'

import theme from '@/theme'

import { SectionFooterWrapper } from './style'

interface IProps {
  text?: string | undefined
}

const SectionFooter: FC<IProps> = memo(({ text }) => {
  const showText = text ? text : '顯示全部'

  return (
    <SectionFooterWrapper textColor={text ? theme.color.second : '#000'}>
      <div className="text">{ showText }</div>
      <IconMoreArrow />
    </SectionFooterWrapper>
  )
})

export default SectionFooter
