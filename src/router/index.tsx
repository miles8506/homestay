import { lazy } from 'react'
import { RouteObject, Navigate } from 'react-router-dom'

const Home = lazy(() => import('@/pages/home'))
const Entire = lazy(() => import('@/pages/entire'))
const Detail = lazy(() => import('@/pages/detail'))

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Navigate to='/home' />
  },
  {
    path: '/home',
    element: <Home />
  },
  {
    path: '/entire',
    element: <Entire />
  },
  {
    path: '/detail',
    element: <Detail />
  }
]

export default routes
