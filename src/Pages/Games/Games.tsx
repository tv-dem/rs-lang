import React from 'react';
import { Link } from "react-router-dom";
import GameCards from './GameCards/GameCards.json'
import { Card } from 'antd';
import './Games.scss'

const { Meta } = Card;


const Games: React.FC = () => {


    return (
        <div className="game-page" >
            {GameCards.map((game) =>{

const backgroundStyle:React.CSSProperties = {
    backgroundColor:game.imageLink
}
           return (<Link className="game-page__link" to={`${game.menuRoute}`}>

                <Card
               title={game.name}
                    hoverable
                    className={`game-page__${game.name} card-item`}
                    style={backgroundStyle} 
                    cover={<div className="card-item_img-logo"/>}
                >
                    <Meta className="card-item_title"  description={game.descriptions} />
                </Card>

            </Link>)}
            )}
        </div>
    )
}

export default Games;
