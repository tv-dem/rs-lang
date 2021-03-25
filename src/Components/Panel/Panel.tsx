import React from 'react';
import './Panel.scss';

const Panel = ({panelInfo}: any) => {
    return <div className='panel'>
        {panelInfo.map((el:any, i:number) => (
            <div className="item">
            <span className="item__text">
                {el.title}
            </span>
                <div className={`item__bar b${i + 1}`}/>
            </div>
        ))}
    </div>
};

export default Panel;
