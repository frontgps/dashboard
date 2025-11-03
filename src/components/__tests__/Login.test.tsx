import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import Login from '../../pages/Login';
import { SignInForm } from '../Forms/SignInForm';
import customRender from '@/test/utils';

const navigateMock = vi.fn();
vi.mock('react-router-dom', async (orig) => {
  const actual: any = await orig();
  return {
    ...actual,
    useNavigate: () => navigateMock,
  };
});

let mockIsAuth = false;
vi.mock('@/zustand/authStore', () => ({
  useAuthStore: (selector: (s: any) => any) => selector({ isAuth: mockIsAuth }),
}));

const mutateSpy = vi.fn();

vi.mock('@/hooks/useLogin', () => ({
  useLogin: () => ({
    mutateLogin: (...args: Parameters<typeof mutateSpy>) => mutateSpy(...args),
    isPending: false,
    error: null,
  }),
}));

const renderUI = () => render(<SignInForm />);

beforeEach(() => {
  vi.clearAllMocks();
  mockIsAuth = false;
});

describe('Login page', () => {
  it('renders inputs and submit button', () => {
    renderUI();

    expect(screen.getByPlaceholderText(/email or username/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/password/i)).toBeInTheDocument();

    expect(screen.getByRole('button', { name: /sign in/i })).toBeInTheDocument();

    // const sw = screen.getByRole('switch');
    // expect(sw).toHaveAttribute('aria-checked', 'true');
  });
});
