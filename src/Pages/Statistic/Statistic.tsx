import React, { useEffect } from 'react';
import { List, Progress, Tabs, Table } from 'antd';
import Graph from '../../utils/graph';
import Loader from '../../Components/Loader';
import { nanoid } from 'nanoid';
import { ReactComponent as StatSvg } from '../../assets/svg/statistics.svg';
import { ReactComponent as StatTodaySvg } from '../../assets/svg/graph_today.svg';
import { ReactComponent as CommonStatSvg } from '../../assets/svg/common_statistics.svg';
import { ReactComponent as VisualStatSvg } from '../../assets/svg/visual_statistics.svg';
import { ReactComponent as GamePadSvg } from '../../assets/svg/game-pad.svg';
import { Stat } from '../../Redux/StatReducer/interfaces';
import { CurrentUser } from '../../Redux/AuthReducer/interfaces';
import './Statistic.scss';

const dataSource = [
  {
    key: nanoid(),
    date: '17-05-2021',
    time: '12-00',
    level: 3,
    round: '1',
    result: '100',
  },
];

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

  const studiedСard = Object.entries(studiedСardNum).reduce((acc: number, card: Array<number | string>) => acc + +card[1], 0);

  // map daily data for chart
  const dataChartToday = Object.entries(studiedСardNum).reduce((acc: any, item: Array<number | string>) => {
    const dataItem = {
      x: item[0],
      y: acc.reduce((ac: any, it: { [key: string]: string | number }) => ac + it.y, 0) + item[1]
    };
    acc.push(dataItem);
    return acc;
  }, [] as Array<{ [key: string]: string | number }>);

  // map total data for chart
  const dataChartTotal = longTermStat.reduce((acc, item) => {
    const dataItem = {
      x: item.date,
      y: item.learnedWords,
    };
    acc.push(dataItem);
    return acc;
  }, [] as Array<{ x: string, y: number }>);

  const columns = [
    {
      title: 'Дата:',
      dataIndex: 'date',
      key: nanoid(),
    },
    {
      title: 'Время:',
      dataIndex: 'time',
      key: nanoid(),
    },
    {
      title: 'Уровень:',
      dataIndex: 'level',
      key: nanoid(),
    },
    {
      title: 'Раунд:',
      dataIndex: 'round',
      key: nanoid(),
    },
    {
      title: 'Результат:',
      dataIndex: 'result',
      key: nanoid(),
    },
  ];

  function callback(key: string) {
    console.log(key);
  };

  useEffect(() => onLoad(), [onLoad]);

  useEffect(() => {
    getStat(userId, token);
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
                    <Progress percent={Math.floor(studiedСard / 20 * 100)} steps={10} />
                    <span className="list-info">{studiedСard}</span>
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
                      <Graph
                        statType='Количество выученных слов за день:'
                        graphType='line'
                        data={dataChartToday}
                        color='255, 99, 132'
                        isStepped={true}
                      />
                    </TabPane>
                    <TabPane tab="Выучено всего слов:" key="2">
                      <Graph
                        statType='Количество выученных всего слов:'
                        graphType='line'
                        data={dataChartTotal}
                        color='83, 201, 115'
                      />
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
