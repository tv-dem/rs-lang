import React from "react";
import './Header.scss';

const Header = ({title}:any) => {
    return (
   
            <header className="header">
                <div className="wrapper">
                    <h1>{title}</h1>
                </div>
            </header>

    )
}

export default Header;
