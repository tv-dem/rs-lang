import React from 'react';
import './UserBar.scss';

const UserBar: React.FC = () => {
  const isAuth = true;

  return (
    <div className="wrapper">
      {isAuth
        ? (
          'PersonalInfo Page'
        )
        : (
          'LoginPage'
        )
      }
    </div>
  );
};

export default UserBar;
