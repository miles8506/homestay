import { memo, FC } from 'react'

import { IGoodPriceInfoItem } from '@/services'

import { RoomItemWrapper } from './style'
import MSRating from '@/base-ui/ms-rating'

interface IProps {
  item: IGoodPriceInfoItem
}

const RoomItem: FC<IProps> = memo(({ item }) => {

  return (
    <RoomItemWrapper textColor={item.star_rating_color}>
      <div className="room-img-cover">
        <img src={item.picture_url} alt="" />
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
        <span className='review-count'>{item.reviews_count}</span>
        {
          item.bottom_info?.content && <span className='count'> ·{item.bottom_info?.content}</span>
        }
      </div>
    </RoomItemWrapper>
  )
})

export default RoomItem

