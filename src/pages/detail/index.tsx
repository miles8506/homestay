import { memo, useState, useCallback, useEffect } from 'react'

import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import { ReduxStateType } from '@/store'
import { setIsFixed } from '@/store/modules/main'

import { DetailWrapper } from './style'
import DetailInfo from '@/components/detail/detail-info'
import PicturesForm from '@/components/detail/pictures-form'
import PictureBrowser from '@/base-ui/picture-browser'
import Header from '@/components/header'

const Detail = memo(() => {
  const dispatch = useDispatch()
  const { detailInfo, isFixed } = useSelector(
    (state: ReduxStateType) => ({
      detailInfo: state.detail.detailInfo,
      isFixed: state.main.isFixed
    }),
    shallowEqual
  )

  const [isShowPictureBrowse, setIsShowPictureBrowse] = useState(false)
  const handleDisplay = useCallback((isShow: boolean) => {
    setIsShowPictureBrowse(isShow)
  }, [setIsShowPictureBrowse])

  useEffect(() => {
    dispatch(setIsFixed(false))
  }, [])

  return (
    <DetailWrapper>
      <Header isFixed={isFixed} />
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
