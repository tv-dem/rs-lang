import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Typography, Form, Select } from 'antd';
import './WelcomForm.scss';

const { Text, Title } = Typography;

const WelcomForm = ({
  pathname,
  currentGame,
  setCurrentCard,
  fetchWords,
  nullify,
  setLevel,
  setPage,
  level,
  page,
  setPercent,
}: any) => {


  const history = useHistory();

  const [isTextBook, setIsTextBook] = useState(false)

  useEffect(() => {

  }, [isTextBook])

  useEffect(() => {
    setCurrentCard(pathname)
    nullify();
    setPercent(100);
  }, []);

  const backgroundLinkStyle: React.CSSProperties = {
    backgroundColor: currentGame ? currentGame.backgroundColor : 'red',
  };

  const backgroundCardStyle: React.CSSProperties = {
    backgroundImage: currentGame ? `url(${currentGame.imageBackground})` : '#',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  const titleStyle: React.CSSProperties = {
    color: currentGame ? currentGame.titleColor : 'black',
    fontSize: '3rem',
    textShadow: '2px 0px 2px rgba(86,86,86, 1)',
  };

  const selectStyle: React.CSSProperties = {
    color: "green",
    fontSize: '1rem',
    textAlign: "center",
    fontWeight: "bold"
  };

  const descriptionsStyle: React.CSSProperties = {
    color: currentGame ? currentGame.descriptionColor : 'black',
    fontSize: '1.5rem',
    textShadow: '2px 0px 1px rgba(86,86,86, 1)',
  };

  const onChangeSelect = (value: number) => {
    setLevel(Number(value));
    setPage(0);
  };

  const onClickHandler = () => {
    fetchWords(level, page);
    history.push(`${currentGame.menuRoute}/${level}`);
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
          {!isTextBook &&
            <Form className="welcomeForm__form">
              <Form.Item initialValue={currentGame.name} hidden></Form.Item>
              <Form.Item
                style={selectStyle}
                className="welcomeForm__form-item"
                name="wordsLevel"
                label="Уровень сложности:"
                initialValue={level.toString()}
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
            </Form>
          }

          <Button
            style={backgroundLinkStyle}
            className="welcomeForm__form-btnStart"
            autoFocus
            htmlType="submit"
            onClick={onClickHandler}
          >
            START
            </Button>

        </div>
      )}
    </>
  );
};
export default WelcomForm;
