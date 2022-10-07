import { memo, useEffect } from 'react'

import { msRequest } from '@/services'

const Home = memo(() => {
  useEffect(() => {
    msRequest.get({ url: '/home/highscore' }).then(res => {
      console.log(res)
    })
  })

  return (
    <div>
    </div>
  )
})

export default Home
