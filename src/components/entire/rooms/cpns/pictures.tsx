import { FC, memo, RefAttributes, forwardRef } from 'react'

import { PicturesWrapper } from './style'
import { Carousel } from 'antd'
import { CarouselRef } from 'antd/lib/carousel'

interface IProps {
  picturesUrl: string[]
}

const Pictures: FC<IProps & RefAttributes<CarouselRef>> = memo(forwardRef(({ picturesUrl }, ref) => {
  return (
    <PicturesWrapper>
      <Carousel dots={false} ref={ref}>
        {picturesUrl?.map((item) => (
          <>
            <img src={item} alt="" />
          </>
        ))}
      </Carousel>
    </PicturesWrapper>
  )
}))

export default Pictures
