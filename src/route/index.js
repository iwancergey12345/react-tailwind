import { Suspense, lazy } from 'react';
import { useRoutes, Route, Navigate } from 'react-router-dom';

const Loadable = (Component) => (props) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { pathname } = useLocation();

  return (
    <Suspense fallback={<LoadingScreen isDashboard={pathname.includes('/dashboard')} />}>
      <Component {...props} />
    </Suspense>
  );
};

export default function Route() {
  return useRoutes([
    {
      path: '/',
      element: <Layout />,
      children: [
        { element: <Navigate to="/home" replace />, index: true },
        { path: '/home', element: <Home /> }
      ]
    }
  ])
}

const Home = Loadable(lazy(() => import('../pages/Home')));