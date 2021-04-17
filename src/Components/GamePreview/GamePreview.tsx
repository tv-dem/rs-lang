import React from "react";
import './GamePreview.scss';
import {useHistory} from "react-router-dom";

const GamePreview = ({src,isTextBook,currentGame, description, getAggregatedWords,userId, type, group, page, token}:any) => {
  const history = useHistory();
    return(
        <div onClick={()=> {
          history.push(`/games/${currentGame}/${group}`);
        }} className='game-preview'>
            <img src={src} alt=""/>
            <div className="game-preview__description">
                <span>{description}</span>
            </div>
        </div>
    )
}

export default GamePreview;
