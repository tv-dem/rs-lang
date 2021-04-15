import React from "react";
import UserBar from '../UserBar/UserBarContainer';
import './Header.scss';

const Header = ({ title, currLevel }: any) => {
  return (
    // <div className='content'>
    <header className='header'>
      <div className="wrapper">
        {/* <h1>{title}</h1> */}
        <UserBar />
      </div>
    </header>
    // </div>
  )
};

export default Header;
