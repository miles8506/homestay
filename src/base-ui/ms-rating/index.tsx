import { memo, FC } from 'react'

import { MSRatingWrapper } from './style'
import Rating, { RatingProps } from '@mui/material/Rating'

interface IProps extends RatingProps {
  customStyle?: any
}

const MSRating: FC<IProps> = memo(({customStyle = {}, ...elseProps}) => {
  return (
    <MSRatingWrapper>
      <Rating
        {...elseProps}
        sx={customStyle}
      />
    </MSRatingWrapper>
  )
})

export default MSRating
