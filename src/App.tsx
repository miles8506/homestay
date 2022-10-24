import { memo } from 'react';
import { useRoutes } from 'react-router-dom'

import routes from './router'
import useScrollToTop from './hooks/use-scrollToTop';

import Footer from './components/footer'

const App = memo(() => {
  useScrollToTop()

  return (
    <div>
      {useRoutes(routes)}
      <Footer />
    </div>
  );
});

export default App
