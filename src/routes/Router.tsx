import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { lazy, Suspense } from 'react';
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import ProtectedRoutes from '@/pages/ProtectedRoutes';
import Dashboard from '@/pages/Dashboard';
const queryClient = new QueryClient();

const withSuspense = (el: React.JSX.Element) => (
  <Suspense fallback={<>Loading...</>}>{el}</Suspense>
);

const ProtectedLayout = lazy(() => import('@/layout/ProtectedLayout'));

const HomePage = lazy(() => import('@/pages/Dashboard'));
const LoginPage = lazy(() => import('@/pages/Login'));
const UsersPage = lazy(() => import('@/pages/users'));
const NotFoundPage = lazy(() => import('@/pages/NotFound'));
// const CreateUserModal = lazy(() => import('@/pages/users/create'));

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
        element: withSuspense(
          <ProtectedRoutes>
            <Dashboard />
          </ProtectedRoutes>,
        ),
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
        path: '/users/edit/:id',
        element: withSuspense(
          <ProtectedRoutes>
            <UsersPage />
          </ProtectedRoutes>,
        ),
      },
    ],
  },
  {
    path: '/login',
    element: withSuspense(<LoginPage />),
  },
  {
    path: '*',
    element: withSuspense(<NotFoundPage />),
  },

  // PLOP_INJECT_ROUTES
]);

export default function Router() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}
