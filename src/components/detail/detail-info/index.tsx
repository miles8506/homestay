import { memo, FC } from 'react'

import { DetailInfoWrapper } from './style'

interface IProps {
  pictureUrls: string[] | undefined
}

const DetailInfo: FC<IProps> = memo(({ pictureUrls }) => {
  return (
    <DetailInfoWrapper>
      {/* {
        pictureUrls?.map(item => (
          <div key={item}>{item}</div>
        ))
      } */}
      <div className="main-picture">
        <div className="picture">
          <img src={pictureUrls && pictureUrls[0]} alt="" />
          <div className="cover"></div>
        </div>
      </div>
      <div className="else-picture">
        {pictureUrls?.slice(1, 5).map((item) => (
          <div key={item} className="picture">
            <img src={item} key={item} />
            <div className="cover"></div>
          </div>
        ))}
      </div>
    </DetailInfoWrapper>
  )
})

export default DetailInfo
