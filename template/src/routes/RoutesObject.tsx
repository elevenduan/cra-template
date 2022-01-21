import { lazy } from 'react';
// layout
const BasicLayout = lazy(() => import('../layouts/BasicLayout'));
// no match
const NoMatch = lazy(() => import('../pages/NoMatch'));
/* pages */
const Login = lazy(() => import('../pages/Login'));
const Home = lazy(() => import('../pages/Home'));
const About = lazy(() => import('../pages/About'));
/* pages */

// routes
const RoutesObject = [
  {
    path: '/',
    element: <BasicLayout />,
    children: [
      { index: true, element: <Home />, title: '首页' },
      { path: 'login', element: <Login />, title: '登录' },
      { path: 'about', element: <About />, title: '关于' },
      { path: '*', element: <NoMatch />, title: '未找到页面' }
    ]
  }
];
export default RoutesObject;
