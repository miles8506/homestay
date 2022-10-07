import { memo } from 'react'

import { HeaderSearchBarWrapper } from './style'
import SearchIcon from '@/assets/svg/search-icon'

const HeaderSearchBar = memo(() => {
  return (
    <HeaderSearchBarWrapper>
      <div className="search-bar-text">搜尋房源和體驗</div>
      <div className="search-bar-icon">
        <SearchIcon />
      </div>
    </HeaderSearchBarWrapper>
  )
})

export default HeaderSearchBar
