import { Suspense } from 'react'
import { HashRouter } from 'react-router-dom'

import 'antd/dist/antd.min.css'
import 'normalize.css'
import './assets/css/index.scss'
import ReactDOM from 'react-dom/client'
import store from './store'
import theme from './theme'

import App from './App'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)

root.render(
  <HashRouter>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Suspense fallback={<div>loading</div>}>
          <App />
        </Suspense>
      </ThemeProvider>
    </Provider>
  </HashRouter>
)
