import React, { memo } from 'react'

import HeaderLogo from '@/components/header/c-cpns/logo'
import HeaderSearchBar from '@/components/header/c-cpns/search-bar'
import HeaderNavigate from '@/components/header/c-cpns/navigate'


import { HeaderWrapper } from './style'

const Header = memo(() => {
  return (
    <HeaderWrapper>
      <HeaderLogo />
      <HeaderSearchBar />
      <HeaderNavigate />
    </HeaderWrapper>
  )
})

export default Header