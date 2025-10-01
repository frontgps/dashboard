import { useState } from "react";
import { Row, Col, Typography, Form, Input, Button, Switch } from "antd";
import type { FormProps } from "antd";
import "@/styles/Login.scss";

const { Text } = Typography;

type LoginFormValues = {
  email: string;
  password: string;
  remember?: boolean;
};

export default function Login() {
  useLogin()
  const onFinish: FormProps<LoginFormValues>["onFinish"] = (values) => {
  
  };

  return (
    <div className="container">
      <Row align="middle" justify="center" className="login-container">
        <Col xs={22} sm={20} md={10} className="form-col">
          <div className="login-form-wrapper">
            <h2 className="login-title">Sign In</h2>
            <Text className="login-subtitle">
              Enter your email and password to sign in
            </Text>

            <Form<LoginFormValues>
              layout="vertical"
              onFinish={onFinish}
              className="login-form">
              <Form.Item
                label={<span className="login-label">Email</span>}
                name="email"
                rules={[
                  { required: true, message: "Please enter your email!" },
                  { type: "email", message: "Invalid email format!" },
                ]}
                className="login-form-item">
                <Input placeholder="Email" size="large" className="login-input" />
              </Form.Item>

              <Form.Item
                label={<span className="login-label">Password</span>}
                name="password"
                rules={[{ required: true, message: "Please enter your password!" }]}
                className="login-form-item">
                <Input.Password
                  placeholder="Password"
                  size="large"
                  className="login-input"
                />
              </Form.Item>

              <Form.Item className="remember-me">
                <div className="remember-wrapper">
                  <Form.Item
                    name="remember"
                    valuePropName="checked"
                    noStyle
                    initialValue={true}>
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
                  loading={loading}
                  className="login-button">
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
        </Col>

        <Col xs={22} sm={20} md={14} className="image-col">
          <img src="/images/login.jpg" alt="login" className="login-image" />
        </Col>
      </Row>
    </div>
  );
}
