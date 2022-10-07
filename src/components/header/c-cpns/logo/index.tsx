import { memo } from 'react'

import { HeaderLogoWrapper } from './style'
import IconLogo from '@/assets/svg/logo-icon'

const HeaderLogo = memo(() => {
  return (
    <HeaderLogoWrapper>
      <div className="logo">
        <IconLogo />
      </div>
    </HeaderLogoWrapper>
  )
})

export default HeaderLogo
