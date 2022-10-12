import ArrowLeftIcon from '@/assets/svg/arrow-left-icon'
import ArrowRightIcon from '@/assets/svg/arrow-right-icon'
import { memo, FC, PropsWithChildren, useState, useEffect, useRef } from 'react'

import { ScrollViewWrapper } from './style'

const ScrollView: FC<PropsWithChildren> = memo(({ children }) => {
  const scrollContentRef = useRef<HTMLDivElement | null>(null)
  const tabsCurrentIndexRef = useRef(0)
  const distanceWidthRef = useRef(0)
  const [isShowRightBtn, setIsShowRightBtn] = useState(false)
  const [isShowLeftBtn, setIsShowLeftBtn] = useState(false)

  const handleClick = (isRight: boolean) => {
    if (scrollContentRef.current?.style.transform === undefined) return
    isRight
      ? (tabsCurrentIndexRef.current += 1)
      : (tabsCurrentIndexRef.current -= 1)
    const El = scrollContentRef.current?.children[tabsCurrentIndexRef.current]
    const scrollGap = (El as HTMLElement).offsetLeft
    scrollContentRef.current.style.transform = `translateX(-${scrollGap}px)`
    setIsShowLeftBtn(scrollGap > 0)
    setIsShowRightBtn(scrollGap < distanceWidthRef.current)
  }

  useEffect(() => {
    const allWidth = scrollContentRef.current?.scrollWidth
    const contentWidth = scrollContentRef.current?.clientWidth
    if (allWidth && contentWidth) {
      distanceWidthRef.current = allWidth - contentWidth
      setIsShowRightBtn(() => distanceWidthRef.current > 0)
    }
  }, [children])

  return (
    <ScrollViewWrapper>
      {/* {isShowLeftBtn && <div onClick={() => handleClick(false)}>left button</div>}
      {isShowRightBtn && <div onClick={() => handleClick(true)}>right button</div>} */}
      <div className="scroll-main">
        <div className="scroll-content" ref={scrollContentRef}>
          {children}
        </div>
      </div>
      {isShowLeftBtn && (
        <span className="scroll-left-icon" onClick={() => handleClick(false)}>
          <ArrowLeftIcon />
        </span>
      )}
      {isShowRightBtn && (
        <span className="scroll-right-icon" onClick={() => handleClick(true)}>
          <ArrowRightIcon />
        </span>
      )}
    </ScrollViewWrapper>
  )
})

export default ScrollView
