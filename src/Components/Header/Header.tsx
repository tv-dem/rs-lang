import React from "react";
import './Header.scss';

const Header = ({title, currLevel}:any) => {
    return (
        <div className='content'>
            <header className={`header`}>
                <div className="wrapper">
                    <h1>{title}</h1>
                </div>
            </header>
        </div>
    )
}

export default Header;
