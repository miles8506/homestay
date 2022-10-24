import { memo, FC, useState } from 'react'

import HeaderLogo from '@/components/header/c-cpns/logo'
import HeaderNavigate from '@/components/header/c-cpns/navigate'
import headerData from '@/assets/data/header.json'
import FilterBar from './c-cpns/filter-bar'
import HeaderSearchBar from './c-cpns/search-bar'

import { HeaderWrapper, ButtonHeaderWrapper } from './style'
import classNames from 'classnames'

interface IProps {
  isFixed: boolean | null
}

const Header: FC<IProps> = memo(({ isFixed }) => {
  const [isSearch, setIsSearch] = useState(false)

  return (
    <HeaderWrapper className={classNames({ 'is-fixed': isFixed })}>
      <div className="header">
        <div className="top-header">
          <HeaderLogo />
          {
            isSearch ? <FilterBar infoList={headerData} /> : <HeaderSearchBar handleSearchClick={setIsSearch} />
          }
          <HeaderNavigate />
        </div>
        <ButtonHeaderWrapper customHeight={isSearch ? 100 : 0} />
      </div>
      {isSearch && <div className="cover" onClick={() => setIsSearch(false)}></div>}
    </HeaderWrapper>
  )
})

export default Header
