import { memo, FC } from 'react'

import { SectionHeaderWrapper } from './style'

interface ISectionHeaderProps {
  title: string | undefined
  subTitle?: string
}

const SectionHeader: FC<ISectionHeaderProps> = memo(({ title, subTitle }) => {
  return (
    <SectionHeaderWrapper>
      <h2 className="title">{title}</h2>
      <h4 className="sub-title">{subTitle}</h4>
    </SectionHeaderWrapper>
  )
})

export default SectionHeader
