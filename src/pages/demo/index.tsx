import { memo, useState } from 'react'

import Indicator from '@/base-ui/indicator'

const Demo = memo(() => {
  const btns = ['aaa', 'bbb', 'ccc', 'ddd', 'eee', 'fff', 'ggg']
  const [currentIndex, setCurrentIndex] = useState(0)

  const handlePrevClick = () => {
    setCurrentIndex(prev => prev === 0 ? btns.length - 1 : prev - 1)
  }

  const handleNextClick = () => {
    setCurrentIndex(prev => prev === btns.length - 1 ? 0 : prev + 1)
  }

  return (
    <div>
      <button onClick={handlePrevClick}>上一個</button>
      <button onClick={handleNextClick}>下一個</button>
      <Indicator currentIndex={currentIndex}>
        {
          btns.map(item => (
            <button key={item}>{item}</button>
          ))
        }
      </Indicator>
    </div>
  )
})

export default Demo
