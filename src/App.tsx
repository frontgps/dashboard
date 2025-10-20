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
const UsersPage = lazy(() => import('@/pages/users'));
const CreateUserModal = lazy(() => import('@/pages/users/create'));

export const router = createBrowserRouter([
  {
    path: '/dashboard',
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
        path: '/dashboard/mahdi',
        element: withSuspense(<HomePage />),
      },
    ],
  },
  {
    path: '/login',
    element: withSuspense(<LoginPage />),
  },
  {
    path: '/users',
    element: withSuspense(
      <ProtectedRoutes>
        <UsersPage />
      </ProtectedRoutes>,
    ),
  },
  {
    path: '/users/create',
    element: withSuspense(
      <ProtectedRoutes>
        <CreateUserModal />
      </ProtectedRoutes>,
    ),
  },
  {
    path: '/users/edit/:id',
    element: withSuspense(
      <ProtectedRoutes>
        <UsersPage />
      </ProtectedRoutes>,
    ),
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
