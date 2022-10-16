import { memo, PropsWithChildren, FC, useEffect, useRef } from 'react'

import { IndicatorWrapper } from './style'

interface IProps {
  currentIndex: number
}

const Indicator: FC<PropsWithChildren<IProps>> = memo(({ children, currentIndex }) => {
  const indicatorRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const itemEl = indicatorRef.current?.children[currentIndex]
    const indicatorWidth = indicatorRef.current?.clientWidth
    const itemElWidth = indicatorRef.current?.children[currentIndex].clientWidth
    const itemElOffsetLeft = (itemEl as HTMLElement).offsetLeft
    const indicatorScrollWidth = indicatorRef.current?.scrollWidth
    if (itemElWidth && indicatorWidth && indicatorScrollWidth && itemElOffsetLeft !== undefined && indicatorRef.current) {
      let distance = (itemElOffsetLeft + itemElWidth / 2) - indicatorWidth / 2
      if (distance < 0) distance = 0
      if (distance > indicatorScrollWidth - indicatorWidth) distance = indicatorScrollWidth - indicatorWidth
      indicatorRef.current.style.transform = `translateX(${-distance}px)`
    }

  }, [currentIndex]);

  return (
    <IndicatorWrapper>
      <div className="indicator">
        <div className="indicator-content" ref={indicatorRef}>{children}</div>
      </div>
    </IndicatorWrapper>
  )
})

export default Indicator
