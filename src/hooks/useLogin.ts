import { login } from '@/api/login';
import type { AuthSuccessResponse, LoginCredentials } from '@/types/auth';
import { useAuthStore } from '@/zustand/authStore';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

export function useLogin() {
  const setAuth = useAuthStore((state) => state.setAuth);
  const navigate = useNavigate();

  const {
    mutate: mutateLogin,
    error,
    isPending,
  } = useMutation<AuthSuccessResponse, Error, LoginCredentials>({
    mutationFn: ({ identity, password }) => login({ identity, password }),
    onSuccess: (data) => {
      setAuth(data);
      navigate('/dashboard');
    },
    onError: (err) => {
      console.error(err.message);
    },
  });

  return { mutateLogin, error, isPending };
}
