import { memo, useEffect, useState, MouseEvent } from 'react'

import { HeaderNavigateWrapper } from './style'

import AvatarIcon from '@/assets/svg/avatar-icon'
import GlobalIcon from '@/assets/svg/global-icon'
import MenuIcon from '@/assets/svg/menu-icon'

const HeaderNavigate = memo(() => {
  const [isShowPenal, setIsShowPenal] = useState(false)

  useEffect(() => {
    function handlePenalVisible() {
      setIsShowPenal(false)
    }
    window.addEventListener('click', handlePenalVisible)

    return () => {
      window.removeEventListener('click', handlePenalVisible)
    }
  }, [])

  const handleClickProfile = (e: MouseEvent<HTMLSpanElement>) => {
    e.stopPropagation()
    setIsShowPenal(!isShowPenal)
  }

  return (
    <HeaderNavigateWrapper>
      <span className='login-btn'>登入</span>
      <span className='registry-btn'>註冊</span>
      <span className='global-btn'>
        <GlobalIcon />
      </span>
      <span className='profile-btn' onClick={(e) => handleClickProfile(e)}>
        <MenuIcon />
        <AvatarIcon />
        {
          isShowPenal && (
            <div className="penal">
              <div className="registry item">註冊</div>
              <div className="login item">登入</div>
              <div className='item'>出租房源</div>
              <div className='item'>展開體驗</div>
              <div className='item'>幫助</div>
            </div>
          )
        }
      </span>
    </HeaderNavigateWrapper>
  )
})

export default HeaderNavigate
