import { memo } from 'react'

import { useSelector, shallowEqual } from 'react-redux'
import { ReduxStateType } from '@/store'

import { DetailWrapper } from './style'
import DetailInfo from '@/components/detail/detail-info'
import PicturesForm from '@/components/detail/pictures-form'

const Detail = memo(() => {
  const { detailInfo } = useSelector((state: ReduxStateType) => ({
    detailInfo: state.detail.detailInfo
  }), shallowEqual)

  return (
    <DetailWrapper>
      <DetailInfo pictureUrls={detailInfo?.picture_urls} />
      <PicturesForm />
    </DetailWrapper>
  )
})

export default Detail