import React from "react";
import { Route } from "react-router";
import { Link } from "react-router-dom";
import { Card } from "antd";
import "./Games.scss";

const { Meta } = Card;

const Games: React.FC = ({ cards }: any) => {
  return (
    <div className="game-page">
      {cards.map((game: any) => {
        const backgroundLinkStyle: React.CSSProperties = {
          backgroundColor: game.backgroundColor,
        };

        const backgroundCardStyle: React.CSSProperties = {
          backgroundImage: `url(${game.imageLink})`,
          backgroundRepeat: "round",
          borderRadius: "3%",
        };

        const titleStyle: React.CSSProperties = {
          color: game.titleColor,
        };

        const descriptionsStyle: React.CSSProperties = {
          color: game.descriptionColor,
        };

        return (
          <Link
            style={backgroundLinkStyle}
            key={game.name}
            className="game-page__link"
            to={`${game.menuRoute}`}
          >
            <Card
              hoverable
              style={backgroundCardStyle}
              className={`game-page__${game.name} card-item`}
            ></Card>
            <div className="game-page__link_context">
              <div style={titleStyle} className="link_context-title">
                {game.name}
              </div>
              <div
                style={descriptionsStyle}
                className="link_context-descriptions"
              >
                {game.descriptions}
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Games;
