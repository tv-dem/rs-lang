import React from 'react';
import { NavLink } from 'react-router-dom';
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import './SignInForm.scss';

const SignInForm: React.FC = () => {
  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <>
      <h4 className="sign-in-form__title">Sign In</h4>
      <Form
        layout="vertical"
        name="sign-in_user"
        className="sign-in-form"
        initialValues={{ remember: true }}
        size="large"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          name="email"
          label="E-mail"
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
          <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Type e-mail" />
        </Form.Item>

        <Form.Item
          name="password"
          label="Password"
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
          hasFeedback
        >
          <Input prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Type your password"
          />
        </Form.Item>

        <Form.Item
          name="confirm"
          label="Confirm Password"
          dependencies={['password']}
          hasFeedback
          rules={[
            {
              required: true,
              message: 'Please confirm your password!',
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error('The two passwords that you entered do not match!'));
              },
            }),
          ]}
        >
          <Input prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Type your password"
          />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" className="sign-in-form-button">
            Sign in
          </Button>
          Or <NavLink to="/authorization">login now!</NavLink>
        </Form.Item>
      </Form>
    </>
  );
};

export default SignInForm;
