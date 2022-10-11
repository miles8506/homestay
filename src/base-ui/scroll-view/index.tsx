import { memo, FC, PropsWithChildren, useState, useEffect, useRef} from 'react'

import { ScrollViewWrapper } from './style'

const ScrollView: FC<PropsWithChildren> = memo(({ children }) => {
  const scrollContentRef = useRef<HTMLDivElement | null>(null)
  const tabsCurrentIndexRef = useRef(1)
  const distanceWidthRef = useRef(0)
  const [isShowRightBtn, setIsShowRightBtn] = useState(false)

  useEffect(() => {
    const allWidth = scrollContentRef.current?.scrollWidth
    const contentWidth = scrollContentRef.current?.clientWidth
    if (allWidth && contentWidth) {
      distanceWidthRef.current = allWidth - contentWidth
      setIsShowRightBtn(() => distanceWidthRef.current > 0)
    }
  }, [children])

  const handleRightBtn = () => {
    if (scrollContentRef.current?.style.transform === undefined) return
    const El = scrollContentRef.current?.children[tabsCurrentIndexRef.current]
    const scrollGap = (El as HTMLElement).offsetLeft
    scrollContentRef.current.style.transform = `translateX(${-scrollGap}px)`
    tabsCurrentIndexRef.current += 1
    if (scrollGap >= distanceWidthRef.current) {
      setIsShowRightBtn(false)
    }
  }

  return (
    <ScrollViewWrapper>
      <div>left button</div>
      {isShowRightBtn && <div onClick={handleRightBtn}>right button</div>}
      <div className="scroll-content" ref={scrollContentRef}>
        {children}
      </div>
    </ScrollViewWrapper>
  )
})

export default ScrollView
