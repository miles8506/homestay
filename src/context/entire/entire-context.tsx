import { FC, useState, createContext, useContext } from 'react'

interface IEntireContext {
  page: number
  isShowLoading: boolean
  changePage: (page: number) => void
  changeShowLoading: (status: boolean) => void
}

const EntireContext = createContext<IEntireContext>({} as IEntireContext)

export const useEntireContext = () => useContext(EntireContext)

export default function EntireProvider<T = any>(OriginComponent: FC<T>) {
  return function (props: any) {
    const [page, setPage] = useState(0)
    const [isShowLoading, setIsShowLoading] = useState(false)
    const changePage = (page: number) => setPage(page)
    const changeShowLoading = (status: boolean) => setIsShowLoading(status)

    return (
      <EntireContext.Provider value={{
        page,
        isShowLoading,
        changePage,
        changeShowLoading
      }}>
        <OriginComponent {...props} />
      </EntireContext.Provider>
    )
  }
}
