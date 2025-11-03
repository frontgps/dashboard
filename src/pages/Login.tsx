import '@/styles/Login.scss';
import { SignInForm } from '@/components/Forms/SignInForm';
import { Col, Row } from 'antd';

export default function Login() {
  return (
    <div className="container">
      <Row align="middle" justify="center" className="login-container">
        <Col xs={22} sm={20} md={10} className="form-col">
          <SignInForm />
        </Col>

        <Col xs={22} sm={20} md={14} className="image-col">
          <img src="/images/login.jpg" alt="login" className="login-image" />
        </Col>
      </Row>
    </div>
  );
}
