import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { lazy, Suspense } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ProtectedRoutes from './pages/ProtectedRoutes';
const queryClient = new QueryClient();

const withSuspense = (el: React.JSX.Element) => (
  <Suspense fallback={<>Loading...</>}>{el}</Suspense>
);

const ProtectedLayout = lazy(() => import('@/layout/ProtectedLayout'));

const HomePage = lazy(() => import('@/pages/Dashboard'));
const LoginPage = lazy(() => import('@/pages/Login'));

export const router = createBrowserRouter([
  {
    path: '/',
    element: withSuspense(
      <ProtectedRoutes>
        <ProtectedLayout />
      </ProtectedRoutes>,
    ),
    children: [
      {
        path: '/dashboard',
        element: withSuspense(<HomePage />),
      },
      {
        path: '/mahdi',
        element: withSuspense(<HomePage />),
      },
      {
        path: '/tables',
        element: withSuspense(<div>Tables Page</div>),
      },
      {
        path: '/billing',
        element: withSuspense(<div>Billing Page</div>),
      },
      {
        path: '/rtl',
        element: withSuspense(<div>RTL Page</div>),
      },
      {
        path: '/profile',
        element: withSuspense(<div>Profile Page</div>),
      },
    ],
  },
  {
    path: '/login',
    element: withSuspense(<LoginPage />),
  },
  // PLOP_INJECT_ROUTES
]);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
