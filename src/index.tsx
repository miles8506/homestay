import { Suspense } from 'react';
import { HashRouter } from 'react-router-dom';

import 'normalize.css';
import './assets/css/index.scss';
import ReactDOM from 'react-dom/client';
import store from './store';

import App from './App';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <HashRouter>
    <Provider store={store}>
      <Suspense fallback={<div>loading</div>}>
        <App />
      </Suspense>
    </Provider>
  </HashRouter>
);
