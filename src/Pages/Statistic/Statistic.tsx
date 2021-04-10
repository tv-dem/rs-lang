import React, { useEffect } from 'react';
import { List, Progress, Tabs, Table } from 'antd';
import Graph from '../../utils/graph';
import Loader from '../../Components/Loader';
import { ReactComponent as StatSvg } from '../../assets/svg/statistics.svg';
import { ReactComponent as StatTodaySvg } from '../../assets/svg/graph_today.svg';
import { ReactComponent as CommonStatSvg } from '../../assets/svg/common_statistics.svg';
import { ReactComponent as VisualStatSvg } from '../../assets/svg/visual_statistics.svg';
import { ReactComponent as GamePadSvg } from '../../assets/svg/game-pad.svg';
import { LongTermStat } from '../../Redux/StatReducer/interfaces';
import { CurrentUser } from '../../Redux/AuthReducer/interfaces';
import './Statistic.scss';

const shortTermStat = {
  bestSeries: 5,
  cardsCount: 5,
  cardsLeft: 16,
  correctAnswers: 5,
  currentCardNum: 5,
  currentSeries: 5,
  // currentWord: { _id: "5e9f5ee35eb9e72bc21af4a4", group: 0, page: 0, word: "August", image: "files/01_0004.jpg", … }
  errorAnswers: 0,
  newWordsCount: 5,
  studiedСardNum: 5,
  timeNow: new Date().getHours(),
};

interface StatisticProps {
  onLoad: () => void;
  getStat: (userId: string, token: string) => void;
  longTermStat: LongTermStat;
  isLoadStat: boolean;
  errorStat: string;
  currentUser: CurrentUser;
}

const Statistic: React.FC<StatisticProps> = ({ onLoad, getStat, longTermStat, isLoadStat, errorStat, currentUser }: any) => {
  const { TabPane } = Tabs;

  const { learnedCards, learnedWords } = longTermStat[longTermStat.length - 1];
  const { userId, token } = currentUser;

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

  const todayData = [
    'Новые слова:',
    'Карточек изучено:',
    'Карточек осталось:',
    'Процент правильных ответов:',
    'Лучшая серия ответов:'
  ];

  const commonData = [
    'Всего выучено слов:',
    'Всего карточек пройдено:'
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
                  dataSource={todayData}
                  renderItem={item => (
                    <List.Item className='d-flex flex-btw' key={item}>
                      {item}
                      <Progress percent={30} steps={10} />
                      <span className="list-info">0</span>
                    </List.Item>
                  )}
                />

                <List
                  size="small"
                  header={
                    <h4 className="stat__subtitle">
                      <CommonStatSvg />
                Общая статистика:
              </h4>
                  }
                  bordered
                  dataSource={commonData}
                >
                  <List.Item className='d-flex flex-btw'>
                    {commonData[0]}
                    <span className="list-info">{learnedWords}</span>
                  </List.Item>
                  <List.Item className='d-flex flex-btw'>
                    {commonData[1]}
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
