import React, { useEffect } from 'react';
import { List, Progress, Tabs, Table } from 'antd';
import Graph from '../../utils/graph';
import Loader from '../../Components/Loader';
import { ReactComponent as StatSvg } from '../../assets/svg/statistics.svg';
import { ReactComponent as StatTodaySvg } from '../../assets/svg/graph_today.svg';
import { ReactComponent as CommonStatSvg } from '../../assets/svg/common_statistics.svg';
import { ReactComponent as VisualStatSvg } from '../../assets/svg/visual_statistics.svg';
import { ReactComponent as GamePadSvg } from '../../assets/svg/game-pad.svg';
import { Stat } from '../../Redux/StatReducer/interfaces';
import { CurrentUser } from '../../Redux/AuthReducer/interfaces';
import './Statistic.scss';

interface StatisticProps {
  onLoad: () => void;
  getStat: (userId: string, token: string) => void;
  stat: Stat;
  isLoadStat: boolean;
  errorStat: string;
  currentUser: CurrentUser;
}

const Statistic: React.FC<StatisticProps> = ({ onLoad, getStat, stat, isLoadStat, errorStat, currentUser }) => {
  const { TabPane } = Tabs;
  const { longTermStat, shortTermStat } = stat;
  const { learnedCards, learnedWords } = longTermStat[longTermStat.length - 1];
  const { userId, token } = currentUser;
  const {
    bestSeries,
    cardsCount,
    cardsLeft,
    correctAnswers,
    currentCardNum,
    currentSeries,
    errorAnswers,
    newWordsCount,
    studiedСardNum,
    timeNow
  } = shortTermStat;

  const dataSource = [
    {
      date: '17-05-2021',
      time: '12-00',
      level: 3,
      round: '1',
      result: '100',
    },
  ];

  const columns = [
    {
      title: 'Дата:',
      dataIndex: 'date',
      key: 'date',
    },
    {
      title: 'Время:',
      dataIndex: 'time',
      key: 'time',
    },
    {
      title: 'Уровень:',
      dataIndex: 'level',
      key: 'level',
    },
    {
      title: 'Раунд:',
      dataIndex: 'round',
      key: 'round',
    },
    {
      title: 'Результат:',
      dataIndex: 'result',
      key: 'result',
    },
  ];

  function callback(key: string) {
    console.log(key);
  };

  useEffect(() => onLoad(), [onLoad]);

  useEffect(() => {
    // if (token) {
    getStat(userId, token);
    // }
  }, []);

  return (
    <>
      <main className="stat__container">
        {isLoadStat
          ? <Loader />
          : (
            <>
              <div className="stat">
                <h1 className="stat__title">
                  <StatSvg />
                  Статистика:
                </h1>
                <List
                  size="small"
                  header={
                    <h4 className="stat__subtitle">
                      <StatTodaySvg />
                      Статистика за сегодня:
                    </h4>
                  }
                  bordered
                >
                  <List.Item className='d-flex flex-btw'>
                    Новые слова:
                    <span className="list-info">{newWordsCount}</span>
                  </List.Item>
                  <List.Item className='d-flex flex-btw'>
                    Карточек изучено:
                    <Progress percent={Math.floor(studiedСardNum / 20 * 100)} steps={10} />
                    <span className="list-info">{studiedСardNum}</span>
                  </List.Item>
                  <List.Item className='d-flex flex-btw'>
                    Карточек осталось:
                    <Progress percent={Math.floor(cardsLeft / 20 * 100)} steps={10} />
                    <span className="list-info">{cardsLeft}</span>
                  </List.Item>
                  <List.Item className='d-flex flex-btw'>
                    Процент правильных ответов:
                    <span className="list-info">{correctAnswers}</span>
                  </List.Item>
                  <List.Item className='d-flex flex-btw'>
                    Лучшая серия ответов:
                    <span className="list-info">{bestSeries}</span>
                  </List.Item>
                </List>

                <List
                  size="small"
                  header={
                    <h4 className="stat__subtitle">
                      <CommonStatSvg />
                      Общая статистика:
                    </h4>
                  }
                  bordered
                >
                  <List.Item className='d-flex flex-btw'>
                    Всего выучено слов:
                    <span className="list-info">{learnedWords}</span>
                  </List.Item>
                  <List.Item className='d-flex flex-btw'>
                    Всего карточек пройдено:
                    <span className="list-info">{learnedCards}</span>
                  </List.Item>
                </List>

                <div className="stat__wrapper">
                  <h4 className="stat__subtitle">
                    <VisualStatSvg />
                    Визуальная статистика:
                  </h4>
                  <Tabs defaultActiveKey="1" onChange={callback}>
                    <TabPane tab="Выучено слов за день:" key="1">
                      <Graph />
                    </TabPane>
                    <TabPane tab="Выучено всего слов:" key="2">
                      <Graph />
                    </TabPane>
                    <TabPane tab="Популярность мини-игр:" key="3">
                      Content of Tab Pane 3
                    </TabPane>
                  </Tabs>
                </div>
              </div>

              <div className="stat__wrapper">
                <h4 className="stat__subtitle">
                  <GamePadSvg />
                  Статистика мини-игр:
                </h4>
                <Tabs type="card">
                  <TabPane tab="Собери слово" key="4">
                    <Table dataSource={dataSource} columns={columns} />;
                  </TabPane>
                  <TabPane tab="Саванна" key="5">
                    <Table dataSource={dataSource} columns={columns} />;
                  </TabPane>
                  <TabPane tab="Аудио вызов" key="6">
                    <Table dataSource={dataSource} columns={columns} />;
                  </TabPane>
                  <TabPane tab="Спринт" key="7">
                    <Table dataSource={dataSource} columns={columns} />;
                  </TabPane>
                </Tabs>
              </div>
              {errorStat
                && (
                  <div className="alert-error">
                    {errorStat}
                  </div>
                )}
            </>
          )}
      </main>
    </>
  )
}

export default Statistic;
