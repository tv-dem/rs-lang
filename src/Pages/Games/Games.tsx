import React from 'react';
import {Route} from "react-router";
import { Link } from "react-router-dom";
import GameCards from './GameCards/GameCards.json'
import { Card } from 'antd';
import './Games.scss'

const { Meta } = Card;


const Games: React.FC = () => (
    <div className="game-page" >
            {GameCards.map((game) => {

                const backgroundStyle: React.CSSProperties = {
                    backgroundColor: game.imageLink,
                    borderRadius: "3%",
                }

                return (
                    <>

                    

                        <Link className="game-page__link" to={`${game.menuRoute}`}>

                            <Card
                                hoverable
                                style={backgroundStyle}
                                className={`game-page__${game.name} card-item`}
                                cover={<div className="card-item__box">IMG </div>}
                            >
                                Click to me!
                    </Card>
                            <div className="game-page__link_context" >
                                <div className="link_context-title">{game.name}</div>
                                <div className="link_context-descriptions">{game.descriptions}</div>
                            </div>
                        </Link>
          

                    </>
                )
            }

            )}
      

    </div>
)

export default Games;
