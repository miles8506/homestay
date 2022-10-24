import { memo, FC, Dispatch, SetStateAction } from 'react'

import { HeaderSearchBarWrapper } from './style'
import SearchIcon from '@/assets/svg/search-icon'

interface IProps {
  handleSearchClick: Dispatch<SetStateAction<boolean>>
}

const HeaderSearchBar: FC<IProps> = memo(({handleSearchClick}) => {
  return (
    <HeaderSearchBarWrapper onClick={() => handleSearchClick(true)}>
      <div className="search-bar-text">搜尋房源和體驗</div>
      <div className="search-bar-icon">
        <SearchIcon />
      </div>
    </HeaderSearchBarWrapper>
  )
})

export default HeaderSearchBar
