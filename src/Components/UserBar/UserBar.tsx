import React from 'react';
import { NavLink } from 'react-router-dom';
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import settingsImg from '../../assets/img/settings.png';
import './UserBar.scss';

const UserBar: React.FC = () => {
  const isAuth = false;

  return (
    <div className="user-bar__wrapper">
      {isAuth
        ? (
          <>
            <NavLink to='/authorization'>
              <button className='login-btn'>
                Войти
              </button>
            </NavLink>
          </>
        )
        : (
          <>
            <Avatar
              style={{ backgroundColor: '#87d068' }}
              icon={<UserOutlined />}
              src='test'
            />
            <div className="user-bar_title">
              UserName
            </div>
            <NavLink to='/'>
              <img
                className='user-bar_settings'
                src={settingsImg}
                alt='Settings'
                title='Settings'
              />
            </NavLink>
          </>
        )
      }
    </div>
  );
};

export default UserBar;
