import {
  createContext,
  useContext,
  useState,
  ReactElement,
  MemoExoticComponent,
  FC
} from 'react'

interface ITabs {
  tabsIndex: number
  changeTabIndex: (num: number) => void
}

const TabsContext = createContext<ITabs>({} as ITabs)

export const useTabsContext = () => useContext(TabsContext)

const TabsProvider = function <IProps>(OriginCpn: MemoExoticComponent<() => ReactElement> | FC<IProps>) {
  return function(props: any) {
    const [tabsIndex, setTabsIndex] = useState(0)
    const changeTabIndex = (index: number) => setTabsIndex(index)

    return (
      <TabsContext.Provider
        value={{
          tabsIndex,
          changeTabIndex
        }}
      >
        <OriginCpn {...props} />
      </TabsContext.Provider>
    )
  }
}

export default TabsProvider
