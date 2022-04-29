import { Suspense, lazy } from 'react';
import { useRoutes, Navigate,useLocation } from 'react-router-dom';
import LoadingScreen from '../components/LoadingScreen';
import Layout from '../layout';

const Loadable = (Component) => (props) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { pathname } = useLocation();

  return (
    <Suspense fallback={<LoadingScreen isShow={pathname.includes('/dashboard')} />}>
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