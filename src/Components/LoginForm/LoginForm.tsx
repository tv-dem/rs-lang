import React from 'react';
import { NavLink } from 'react-router-dom';
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import Loader from '../Loader';
import './LoginForm.scss';

interface LoginFormProps {
  loginUser: (email: string, password: string) => void;
  authUserFailure: (err: string) => void;
  createUserError: string;
  createUserLoading: boolean;
}

const LoginForm: React.FC<LoginFormProps> = ({ loginUser, authUserFailure, createUserError, createUserLoading }) => {
  const onFinish = (values: any) => {
    const { email, password } = values;
    authUserFailure('');
    loginUser(email, password);
  };

  const onFinishFailed = ({ errorFields }: any) => {
    console.log('Failed:', errorFields[0].errors);
    // authUserFailure(errorFields[0].errors);
  };

  const onEmailChange = () => authUserFailure('');

  return (
    <>
      <h4 className="login-form__title">Log In</h4>
      <Form
        layout="vertical"
        name="login_user"
        className="login-form"
        initialValues={{ remember: true }}
        size="large"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="E-mail:"
          name="email"
          rules={[
            {
              type: 'email',
              message: 'The input is not valid E-mail!',
            },
            {
              required: true,
              message: 'Please input your E-mail!',
            },
          ]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Type e-mail"
            onChange={onEmailChange}
          />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Type your password"
          />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" className="login-form-button">
            Log in
          </Button>
          Or <NavLink to="/authorization/registration">register now!</NavLink>
        </Form.Item>
      </Form>
      {createUserError
        && (
          <div className="alert-error">
            {createUserError}
          </div>
        )}
      {createUserLoading && <Loader />}
    </>
  );
};

export default LoginForm;
