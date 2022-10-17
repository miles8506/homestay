import { memo, FC, useRef, useState } from 'react'

import { IEntireRoomInfoItem } from '@/services'

import { RoomItemWrapper } from './style'
import MSRating from '@/base-ui/ms-rating'
import Pictures from '@/components/entire/rooms/cpns/pictures'
import ArrowLeftIcon from '@/assets/svg/arrow-left-icon'
import ArrowRightIcon from '@/assets/svg/arrow-right-icon'
import { CarouselRef } from 'antd/lib/carousel'
import Indicator from '@/base-ui/indicator'
import classNames from 'classnames'

interface IProps {
  item: IEntireRoomInfoItem
  handleNavigate?: (detail: IEntireRoomInfoItem) => void
}

const RoomItem: FC<IProps> = memo(({ item, handleNavigate }) => {
  const carouselRef = useRef<CarouselRef>(null)
  const [currentIndex, setCurrentIndex] = useState(0)

  const handleLeftClick = (e: Event) => {
    e.stopPropagation()
    carouselRef.current?.prev()
    setCurrentIndex((prev) =>
      prev === 0 ? (item.picture_urls as string[]).length - 1 : prev - 1
    )
  }

  const handleRightClick = (e: Event) => {
    e.stopPropagation()
    carouselRef.current?.next()
    setCurrentIndex((prev) =>
      prev === (item.picture_urls as string[]).length - 1 ? 0 : prev + 1
    )
  }

  return (
    <RoomItemWrapper textColor={item.star_rating_color} onClick={() => handleNavigate && handleNavigate(item)}>
      <div className="room-img-cover">
        <div className="wrap">
          {item.picture_urls ? (
            <div className="picture-wrap">
              <div className="control">
                <div className="left-cover" onClick={(e: any) => handleLeftClick(e)}>
                  <span className="prev-btn">
                    <ArrowLeftIcon width={30} height={30} />
                  </span>
                </div>
                <div className="right-cover" onClick={(e: any) => handleRightClick(e)}>
                  <span className="next-btn">
                    <ArrowRightIcon width={30} height={30} />
                  </span>
                </div>
              </div>
              <div className="indicator-list">
                <div className="dot-wrap">
                  <div className="dot-bar">
                    <Indicator currentIndex={currentIndex}>
                      {item.picture_urls.map((item, index) => (
                        <span key={item} className="dot-item">
                          <span
                            className={classNames('dot', {
                              active: currentIndex === index
                            })}
                          ></span>
                        </span>
                      ))}
                    </Indicator>
                  </div>
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
