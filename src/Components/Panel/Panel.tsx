import React from 'react';
import './Panel.scss';
import { NavLink } from "react-router-dom";

const Panel = ({ panelInfo }: any) => {
    return <div className='panel'>
        {panelInfo.map((el: any, i: number) => (
            <NavLink to={el.link} onClick={el.onSelect} key={i}>
                <div className="item">
                    <span className="item__text">
                        {el.title}
                    </span>
                    <div className={`item__bar b${i + 1}`} />
                </div>
            </NavLink>
        ))}
    </div>
};

export default Panel;
