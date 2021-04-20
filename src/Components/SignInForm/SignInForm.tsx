import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Form, Input, Button, Upload } from 'antd';
import {
  UserOutlined,
  LockOutlined,
  EyeInvisibleOutlined,
  EyeTwoTone,
  UploadOutlined
} from '@ant-design/icons';
import Loader from '../Loader';
import { CLOUDINARY_UPLOAD_PRESET, CLOUDINARY_URL } from '../../utils/constants';
import './SignInForm.scss';

interface SignInFormProps {
  createUser: (name: string, password: string, email: string, avatar: string) => void;
  createUserFailure: (err: string) => void;
  createUserError: string;
  createUserLoading: boolean;
}

const SignInForm: React.FC<SignInFormProps> = ({ createUser, createUserFailure, createUserError, createUserLoading }) => {
  type ValidateStatus = Parameters<typeof Form.Item>[0]['validateStatus'];
  const [avatar, setAvatar] = useState('');
  const [password, setPassword] = useState<{
    password: string;
    validateStatus?: ValidateStatus;
    errorMsg?: string | null;
  }>({
    password: '',
  });

  function validatePassword(
    value: string,
  ): { validateStatus: ValidateStatus; errorMsg: string | null } {
    if (value.length >= 8) {
      return {
        validateStatus: 'success',
        errorMsg: null,
      };
    }

    return {
      validateStatus: 'error',
      errorMsg: 'The password must contain at least 8 characters!',
    };
  };

  const onPasswordChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setPassword({
      ...validatePassword(target.value),
      password: target.value,
    });
    createUserFailure('');
  };

  const onFinishFailed = () => {
    // createUserFailure(errorInfo);
  };

  const normFile = (e: any) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  };

  const handleUploadPhoto = (file: any): string => {
    const formData = new FormData();

    formData.append('file', file);
    formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);

    fetch(CLOUDINARY_URL, {
      method: 'POST',
      body: formData,
    })
      .then((res) => res.json())
      .then((res) => {
        setAvatar(res.secure_url);
      })
      .catch((e) => console.log(e.message));

    return '';
  };

  const onFinish = ({ name, email, password }: any) => {
    createUserFailure('');
    createUser(name, password, email, avatar);
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
          name="name"
          label="Nickname"
          tooltip="What do you want others to call you?"
          rules={[{ required: true, message: 'Please input your nickname!', whitespace: true }]}
        >
          <Input />
        </Form.Item>

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
              message: password.errorMsg as string,
            },
          ]}
          validateStatus={password.validateStatus}
          hasFeedback
        >
          <Input.Password
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Type your password"
            iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
            value={password.password}
            onChange={onPasswordChange}
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
          <Input.Password
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Type your password"
            iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
          />
        </Form.Item>

        <Form.Item
          name="upload"
          label="Upload the photo"
          valuePropName="fileList"
          getValueFromEvent={normFile}
          extra="Your Avatar"
        >
          <Upload
            action={handleUploadPhoto}
            listType="picture"
            maxCount={1}
          >
            <Button icon={<UploadOutlined />}>Upload</Button>
          </Upload>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" className="sign-in-form-button">
            Sign in
          </Button>
          Or <NavLink to="/authorization">login now!</NavLink>
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

export default SignInForm;
