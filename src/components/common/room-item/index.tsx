import { memo, FC, useRef } from 'react'

import { IEntireRoomInfoItem } from '@/services'

import { RoomItemWrapper } from './style'
import MSRating from '@/base-ui/ms-rating'
import Pictures from '@/components/entire/rooms/cpns/pictures'
import ArrowLeftIcon from '@/assets/svg/arrow-left-icon'
import ArrowRightIcon from '@/assets/svg/arrow-right-icon'
import { CarouselRef } from 'antd/lib/carousel'

interface IProps {
  item: IEntireRoomInfoItem
}

const RoomItem: FC<IProps> = memo(({ item }) => {
  const carouselRef = useRef<CarouselRef>(null)

  const handleLeftClick = () => {
    carouselRef.current?.prev()
  }

  const handleRightClick = () => {
    carouselRef.current?.next()
  }

  return (
    <RoomItemWrapper textColor={item.star_rating_color}>
      <div className="room-img-cover">
        <div className="wrap">
          {item.picture_urls ? (
            <div className='picture-wrap'>
              <div className="control">
                <div className="left-cover" onClick={handleLeftClick}>
                  <span className="prev-btn">
                    <ArrowLeftIcon width={30} height={30} />
                  </span>
                </div>
                <div className="right-cover" onClick={handleRightClick}>
                  <span className="next-btn">
                    <ArrowRightIcon width={30} height={30} />
                  </span>
                </div>
              </div>
              <Pictures picturesUrl={item.picture_urls} ref={carouselRef} />
            </div>
          ) : (
            <img src={item.picture_url} alt="" />
          )}
        </div>
      </div>
      <div className="room-detail">{item.verify_info.messages.join(' · ')}</div>
      <div className="room-name">{item.name}</div>
      <div className="room-price">${item.price}/晚</div>
      <div className="room-evaluate">
        <MSRating
          readOnly
          defaultValue={item.reviews_count}
          precision={0.1}
          customStyle={{
            fontSize: '12px',
            color: '#00848A'
          }}
        />
        <span className="review-count">{item.reviews_count}</span>
        {item.bottom_info?.content && (
          <span className="count"> ·{item.bottom_info?.content}</span>
        )}
      </div>
    </RoomItemWrapper>
  )
})

export default RoomItem
