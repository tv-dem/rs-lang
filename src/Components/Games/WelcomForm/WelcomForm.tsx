import React, { useEffect } from "react";
import { Button, Typography, Form, Select, Input } from "antd";
import "./WelcomForm.scss";

const WelcomForm = ({ pathname, currentGame, setCurrentCard }: any) => {
  useEffect(() => setCurrentCard(pathname), [setCurrentCard]);

  const { Text, Title } = Typography;

  const backgroundLinkStyle: React.CSSProperties = {
    backgroundColor: currentGame ? currentGame.backgroundColor : "red",
  };

  const backgroundCardStyle: React.CSSProperties = {
    backgroundImage: currentGame ? `url(${currentGame.imageLink})` : "#",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };

  const titleStyle: React.CSSProperties = {
    color: currentGame ? currentGame.titleColor : "black",
  };

  const descriptionsStyle: React.CSSProperties = {
    color: currentGame ? currentGame.descriptionColor : "black",
  };

  const startGame = (values: any) => {
    const { wordsLevel } = values;
    window.location.href = `${currentGame.menuRoute}/${wordsLevel}`;
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

          <Form className="welcomeForm__form" onFinish={startGame}>
            <Form.Item
              name="name"
              initialValue={currentGame.name}
              hidden
            ></Form.Item>
            <Form.Item
              className="welcomeForm__form-item"
              name="wordsLevel"
              label="Выберите уровень сложности слов:"
              initialValue="0"
            >
              <Select className="welcomeForm__form-select">
                <Select.Option value="0">FIRST</Select.Option>
                <Select.Option value="1">SECOND</Select.Option>
                <Select.Option value="2">THIRD</Select.Option>
                <Select.Option value="3">FOURTH</Select.Option>
                <Select.Option value="4">FIFTH</Select.Option>
                <Select.Option value="5">SIXTH</Select.Option>
              </Select>
            </Form.Item>

            <Button
              style={backgroundLinkStyle}
              className="welcomeForm__form-btnStart"
              autoFocus
              htmlType="submit"
            >
              START
            </Button>
          </Form>
        </div>
      )}
    </>
  );
};
export default WelcomForm;
