import { memo, FC } from 'react'

import classNames from 'classnames'
import { useTabsContext } from '@/context/home/tabs-context'

import { TabsWrapper } from './style'
import ScrollView from '@/base-ui/scroll-view'

interface IProps {
  tabsName: string[] | undefined
}

const Tabs: FC<IProps> = memo(({ tabsName = [] }) => {
  const { tabsIndex, changeTabIndex } = useTabsContext()

  return (
    <TabsWrapper>
      <ScrollView>
        {
          tabsName.map((item, index) => (
            <div
              key={item}
              className={classNames(['tabs-item', tabsIndex === index ? 'active' : ''])}
              onClick={() => changeTabIndex(index)}
            >{item}</div>
          ))
        }
      </ScrollView>
    </TabsWrapper>
  )
})

export default Tabs
