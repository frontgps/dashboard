import { useLogin } from '@/hooks/useLogin';
import { useAuthStore } from '@/zustand/authStore';
import type { FormProps } from 'antd';
import { Button, Form, Input, Switch, Typography } from 'antd';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const { Text } = Typography;

type LoginFormValues = {
  email: string;
  password: string;
  remember?: boolean;
};

export function SignInForm() {
  const { mutateLogin, isPending, error } = useLogin();

  const [form] = Form.useForm<LoginFormValues>();
  const onFinish: FormProps<LoginFormValues>['onFinish'] = (values) => {
    mutateLogin(
      { identity: values.identity, password: values.password },
      {
        onError: (err: any) => {
          const msg = err?.response?.data?.message || 'Username or password is incorrect';

          form.setFields([
            { name: 'identity', errors: [msg] },
            { name: 'password', errors: [msg] },
          ]);
        },
      },
    );
  };

  const isAuth = useAuthStore((state) => state.isAuth);
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuth) navigate('/dashboard');
  }, [isAuth]);

  return (
    <div className="login-form-wrapper">
      <h2 className="login-title">Sign In</h2>
      <Text className="login-subtitle">Enter your email and password to sign in</Text>

      <Form<LoginFormValues>
        layout="vertical"
        form={form}
        onFinish={onFinish}
        className="login-form"
      >
        <Form.Item
          label={<span className="login-label">Email</span>}
          name="identity"
          rules={[
            { required: true, message: 'Please enter your email or username!' },
            { message: 'Invalid email format!' },
          ]}
          className="login-form-item"
        >
          <Input placeholder="Email or username" size="large" className="login-input" />
        </Form.Item>

        <Form.Item
          label={<span className="login-label">Password</span>}
          name="password"
          rules={[
            { required: true, message: 'Please enter your password!' },
            { min: 8, message: 'Password must be at least 8 characters' },
          ]}
          className="login-form-item"
        >
          <Input.Password placeholder="Password" size="large" className="login-input" />
        </Form.Item>

        <Form.Item className="remember-me">
          <div className="remember-wrapper">
            <Form.Item name="remember" valuePropName="checked" noStyle initialValue={true}>
              <Switch />
            </Form.Item>
            <Text className="remember-text">Remember me</Text>
          </div>
        </Form.Item>

        <Form.Item className="login-button-item">
          <Button
            type="primary"
            htmlType="submit"
            size="large"
            block
            loading={isPending}
            className="login-button"
          >
            SIGN IN
          </Button>
        </Form.Item>
      </Form>

      <div className="signup-box">
        <Text className="signup-text">Don’t have an account? </Text>
        <a href="/signup" className="signup-link">
          Sign Up
        </a>
      </div>
    </div>
  );
}
