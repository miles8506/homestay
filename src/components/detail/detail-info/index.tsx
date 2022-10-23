import { memo, FC } from 'react'

import { DetailInfoWrapper } from './style'

interface IProps {
  pictureUrls: string[] | undefined
  handleDisplay: (isShow: boolean) => void
}

const DetailInfo: FC<IProps> = memo(({ pictureUrls, handleDisplay }) => {
  return (
    <DetailInfoWrapper>
      <div className="main-picture">
        <div className="picture">
          <img src={pictureUrls && pictureUrls[0]} alt="" />
          <div className="cover" onClick={() => handleDisplay(true)}></div>
        </div>
      </div>
      <div className="else-picture">
        {pictureUrls?.slice(1, 5).map((item) => (
          <div key={item} className="picture">
            <img src={item} key={item} />
            <div className="cover" onClick={() => handleDisplay(true)}></div>
          </div>
        ))}
      </div>
      <div className='display-btn' onClick={() => handleDisplay(true)}>顯示圖片</div>
    </DetailInfoWrapper>
  )
})

export default DetailInfo
