import React from 'react';
import { NavLink } from 'react-router-dom';
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import './LoginForm.scss';

const LoginForm: React.FC = () => {
  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

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
          name="e-mail"
          rules={[{ required: true, message: 'Please input your e-mail!' }]}
        >
          <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Type e-mail" />
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
    </>
  );
};

export default LoginForm;
