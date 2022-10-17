import { memo } from 'react'

import { useSelector, shallowEqual } from 'react-redux'
import { ReduxStateType } from '@/store'

const Detail = memo(() => {
  const { detailInfo } = useSelector((state: ReduxStateType) => ({
    detailInfo: state.detail.detailInfo
  }), shallowEqual)

  return (
    <div>
      {detailInfo?.name}
    </div>
  )
})

export default Detail