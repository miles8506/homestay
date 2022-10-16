import { memo } from 'react'

import { useEntireContext } from '@/context/entire/entire-context'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { ReduxDispatchType, ReduxStateType } from '@/store'
import { getEntireListAsync } from '@/store/modules/entire'

import { PaginationWrapper } from './style'
import { Pagination as MUIPagination } from '@mui/material'

const Pagination = memo(() => {
  const { totalCount } = useSelector((state: ReduxStateType) => ({
    totalCount: state.entire.totalCount
  }), shallowEqual)
  const dispatch: ReduxDispatchType = useDispatch()
  const { page, changePage, changeShowLoading } = useEntireContext()
  const startCount = 20 * page + 1
  const endCount = (page + 1) * 20
  const count = Math.ceil(totalCount / 20)

  const handleChange = async (e: React.ChangeEvent<unknown>, value: number) => {
    window.scroll(0, 0)
    changeShowLoading(true)
    changePage(value - 1)
    await dispatch(getEntireListAsync(20 * value))
    changeShowLoading(false)
  }

  return (
    <PaginationWrapper>
      {totalCount && (
        <>
          <MUIPagination count={count} onChange={handleChange} />
          <div className="pagination-info">
            第{startCount} - {endCount} 個房源，共超過 {totalCount} 個
          </div>
        </>
      )}
    </PaginationWrapper>
  )
})

export default Pagination
