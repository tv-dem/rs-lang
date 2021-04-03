import React from 'react';
import { NavLink } from 'react-router-dom';
import { ReactComponent as IconUserHeader } from '../../assets/svg/icon-user-header.svg';
import { ReactComponent as IconLogOut } from '../../assets/svg/icon-log-out.svg';
import './DropDownMenu.scss';

const ModalUserBar: React.FC = () => (
  <div className='drop-down-menu'>
    <NavLink
      to="/settings"
      className='drop-down-menu__link'
    >
      <span className="user-bar__icon">
        <IconUserHeader />
      </span>
      Profile
    </NavLink>
    <button className='drop-down-menu__exit-btn'>
      <IconLogOut />
      Exit
    </button>
  </div>
);

export default ModalUserBar;
