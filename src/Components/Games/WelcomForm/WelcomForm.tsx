import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Typography, Form, Select, Input } from "antd";
import "./WelcomForm.scss";

const { Text, Title } = Typography;

const WelcomForm = ({ pathname, currentGame, setCurrentCard }: any) => {
  const [level, setLevel] = useState(0);

  useEffect(() => setCurrentCard(pathname), [setCurrentCard]);

  const backgroundLinkStyle: React.CSSProperties = {
    backgroundColor: currentGame ? currentGame.backgroundColor : "red",
  };

  const backgroundCardStyle: React.CSSProperties = {
    backgroundImage: currentGame ? `url(${currentGame.imageBackground})` : "#",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  const titleStyle: React.CSSProperties = {
    color: currentGame ? currentGame.titleColor : "black",
    fontSize: "3rem",
    textShadow: "2px 0px 2px rgba(86,86,86, 1)",
  };

  const descriptionsStyle: React.CSSProperties = {
    color: currentGame ? currentGame.descriptionColor : "black",
    fontSize: "1.5rem",
    textShadow: "2px 0px 1px rgba(86,86,86, 1)",
  };

  const onChangeSelect = (value: number) => {
    setLevel(value);
  };

  return (
    <>
      {currentGame && (
        <div style={backgroundCardStyle} className="welcomeForm">
          <Title level={3} className="welcomeForm-title">
            <Text style={titleStyle} strong>
              {currentGame.name}
            </Text>
          </Title>

          <Title level={5} className="welcomeForm-howToPlay">
            <Text style={descriptionsStyle} strong>
              {currentGame.howToPlay}
            </Text>
          </Title>

          <Form className="welcomeForm__form">
            <Form.Item             
              initialValue={currentGame.name}
              hidden
            ></Form.Item>
            <Form.Item
              className="welcomeForm__form-item"
              name="wordsLevel"
              label="Выберите уровень сложности слов:"
              initialValue="0"
            >
              <Select
                className="welcomeForm__form-select"
                onChange={onChangeSelect}
              >
                <Select.Option value="0">FIRST</Select.Option>
                <Select.Option value="1">SECOND</Select.Option>
                <Select.Option value="2">THIRD</Select.Option>
                <Select.Option value="3">FOURTH</Select.Option>
                <Select.Option value="4">FIFTH</Select.Option>
                <Select.Option value="5">SIXTH</Select.Option>
              </Select>
            </Form.Item>

            <Link to={`${currentGame.menuRoute}/${level+1}`}>
              <Button
                style={backgroundLinkStyle}
                className="welcomeForm__form-btnStart"
                autoFocus
                htmlType="submit"
              >
                START
              </Button>
            </Link>
          </Form>
        </div>
      )}
    </>
  );
};
export default WelcomForm;
