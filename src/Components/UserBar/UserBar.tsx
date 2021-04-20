import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import settingsImg from '../../assets/img/settings.png';
import { CurrentUser } from '../../Redux/AuthReducer/interfaces';
import DropDownMenu from '../DropDownMenu/DropDownMenuContainer';
import './UserBar.scss';

interface UserBarProps {
  isAuth: boolean;
  currentUser: CurrentUser;
}

const UserBar: React.FC<UserBarProps> = ({ isAuth, currentUser }) => {
  const [isShowMenu, setShowMenu] = useState(false);
  const { name, avatar } = currentUser;

  const toggleDropDownMenu = () => {
    setShowMenu((prevState) => !prevState);
  };

  return (
    <div className="user-bar__wrapper">
      {isAuth
        ? (
          <>
            <Avatar
              style={{ backgroundColor: '#d19aed' }}
              icon={<UserOutlined />}
              src={avatar}
              alt={`${name} avatar`}
            />
            <div className="user-bar_title">
              {name}
            </div>
            <button onClick={toggleDropDownMenu}>
              <img
                className='user-bar_settings'
                src={settingsImg}
                alt='Settings'
                title='Settings'
              />
            </button>
            {isShowMenu && <DropDownMenu />}
          </>
        )
        : (
          <>
            <NavLink to='/authorization'>
              <button className='login-btn'>
                Войти
              </button>
            </NavLink>
          </>
        )
      }
    </div>
  );
};

export default UserBar;
