import { memo } from 'react'

import { useNavigate } from 'react-router-dom'

import { HeaderLogoWrapper } from './style'
import IconLogo from '@/assets/svg/logo-icon'

const HeaderLogo = memo(() => {
  const navigate = useNavigate()

  return (
    <HeaderLogoWrapper>
      <div className="logo" onClick={() => navigate('/home')}>
        <IconLogo />
      </div>
    </HeaderLogoWrapper>
  )
})

export default HeaderLogo
