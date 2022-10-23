import { memo, useState, useCallback } from 'react'

import { useSelector, shallowEqual } from 'react-redux'
import { ReduxStateType } from '@/store'

import { DetailWrapper } from './style'
import DetailInfo from '@/components/detail/detail-info'
import PicturesForm from '@/components/detail/pictures-form'
import PictureBrowser from '@/base-ui/picture-browser'

const Detail = memo(() => {
  const { detailInfo } = useSelector(
    (state: ReduxStateType) => ({
      detailInfo: state.detail.detailInfo
    }),
    shallowEqual
  )

  const [isShowPictureBrowse, setIsShowPictureBrowse] = useState(true)
  const handleDisplay = useCallback((isShow: boolean) => {
    setIsShowPictureBrowse(isShow)
  }, [setIsShowPictureBrowse])

  return (
    <DetailWrapper>
      <DetailInfo
        pictureUrls={detailInfo?.picture_urls}
        handleDisplay={handleDisplay}
      />
      <PicturesForm />
      {isShowPictureBrowse && (
        <PictureBrowser
          handleDisplay={handleDisplay}
          pictureUrls={detailInfo?.picture_urls}
        />
      )}
    </DetailWrapper>
  )
})

export default Detail
