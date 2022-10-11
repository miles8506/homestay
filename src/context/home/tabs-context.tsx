import {
  createContext,
  useContext,
  useState,
  ReactElement,
  MemoExoticComponent
} from 'react'

interface ITabs {
  tabsIndex: number
  changeTabIndex: (num: number) => void
}

const TabsContext = createContext<ITabs>({} as ITabs)

export const useTabsContext = () => useContext(TabsContext)

const TabsProvider = function (OriginCpn: MemoExoticComponent<() => ReactElement>) {
  return function() {
    const [tabsIndex, setTabsIndex] = useState(0)
    const changeTabIndex = (index: number) => setTabsIndex(index)

    return (
      <TabsContext.Provider
        value={{
          tabsIndex,
          changeTabIndex
        }}
      >
        <OriginCpn />
      </TabsContext.Provider>
    )
  }
}

export default TabsProvider
