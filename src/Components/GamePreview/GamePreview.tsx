import React from "react";
import './GamePreview.scss';

const GamePreview = ({src, description}:any) => {
    console.log(src)
    return(
        <div className='game-preview'>
            <img src={src} alt=""/>
            <div className="game-preview__description">
                <span>{description}</span>
            </div>
        </div>
    )
}

export default GamePreview;
