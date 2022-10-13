import { memo, FC } from 'react'

import { useNavigate } from 'react-router-dom'
import theme from '@/theme'

import { SectionFooterWrapper } from './style'
import IconMoreArrow from '@/assets/svg/icon-more-arrow'

interface IProps {
  text?: string | undefined
}

const SectionFooter: FC<IProps> = memo(({ text }) => {
  const navigate = useNavigate()
  const showText = text ? text : '顯示全部'

  const handleClick = () => {
    navigate('/entire')
  }

  return (
    <SectionFooterWrapper textColor={text ? theme.color.second : '#000'}>
      <div className="text" onClick={handleClick}>{ showText }</div>
      <IconMoreArrow />
    </SectionFooterWrapper>
  )
})

export default SectionFooter
