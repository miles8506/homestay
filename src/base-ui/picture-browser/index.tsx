import { memo, FC, useEffect, useState, useRef } from 'react'

import { PictureBrowserWrapper } from './style'
import CloseIcon from '@/assets/svg/close-icon'
import ArrowLeftIcon from '@/assets/svg/arrow-left-icon'
import ArrowRightIcon from '@/assets/svg/arrow-right-icon'
import { CSSTransition, SwitchTransition } from 'react-transition-group'
import Indicator from '../indicator'
import classNames from 'classnames'
import TriangleArrowBottomIcon from '@/assets/svg/triangle-arrow-bottom-icon'
import TriangleArrowTopIcon from '@/assets/svg/triangle-arrow-top-icon'

interface IProps {
  pictureUrls: string[] | undefined
  handleDisplay: (isShow: boolean) => void
}

const PictureBrowser: FC<IProps> = memo(({ pictureUrls, handleDisplay }) => {
  const [currentIndex, setCurrentIndex] = useState(1)
  const [isNext, setIsNext] = useState(true)
  const [isShowBottomIcon, setIsShowBottomIcon] = useState(true)
  const scrollImgsRef = useRef<any>(null)

  const addCurrentIndex = () => {
    if (!pictureUrls) return
    setIsNext(true)
    setCurrentIndex((prev) => {
      if (prev === pictureUrls?.length - 1) return 0
      return prev + 1
    })
  }

  const subCurrentIndex = () => {
    if (!pictureUrls) return
    setIsNext(false)
    setCurrentIndex((prev) => {
      if (prev === 0) return pictureUrls.length - 1
      return prev - 1
    })
  }

  const handleIndicatorClick = (changeIndex: number) => {
    setIsNext(changeIndex > currentIndex)
    setCurrentIndex(changeIndex)
  }

  const handleScrollImgsRef = () => {
    if (!scrollImgsRef.current) return
    setIsShowBottomIcon(prev => {
      prev ? scrollImgsRef.current.style.height = '0px' : scrollImgsRef.current.style.height = '67px'
      return !prev
    })
  }

  useEffect(() => {
    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [])

  return (
    <PictureBrowserWrapper isNext={isNext}>
      <div className="top">
        <div className="close-btn" onClick={() => handleDisplay(false)}>
          <CloseIcon />
        </div>
      </div>
      <div className="slider">
        <div className="left-control">
          <div className="left-btn" onClick={subCurrentIndex}>
            <ArrowLeftIcon height={77} width={77} />
          </div>
        </div>
        <div className="picture">
          <SwitchTransition mode="in-out">
            <CSSTransition
              key={pictureUrls && pictureUrls[currentIndex]}
              classNames="pic"
              addEndListener={() => null}
              timeout={200}
            >
              <img src={pictureUrls && pictureUrls[currentIndex]} alt="" />
            </CSSTransition>
          </SwitchTransition>
        </div>
        <div className="right-control">
          <div className="right-btn" onClick={addCurrentIndex}>
            <ArrowRightIcon height={77} width={77} />
          </div>
        </div>
      </div>
      <div className="preview-wrap">
        <div className="preview">
          <div className="info">
            <div className="des">
              <div className="detail">{currentIndex}/{pictureUrls?.length}:room apartment圖片{currentIndex}</div>
              <div
                className="control-info"
                onClick={handleScrollImgsRef}
              >
                隱藏照片列表
                {isShowBottomIcon ? <TriangleArrowBottomIcon /> : <TriangleArrowTopIcon />}
              </div>
            </div>
            <div className="scroll-imgs" ref={scrollImgsRef}>
            <Indicator currentIndex={currentIndex}>
              {
                pictureUrls?.map((item, index) => (
                  <div
                    className={
                      classNames('item', { 'is-active': index === currentIndex })
                    }
                    onClick={() => handleIndicatorClick(index)}
                    key={item}
                  >
                    <img src={item} />
                  </div>
                ))
              }
            </Indicator>
            </div>
          </div>
        </div>
      </div>
    </PictureBrowserWrapper>
  )
})

export default PictureBrowser
