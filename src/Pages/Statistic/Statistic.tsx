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
import { Stat, LongTermStat } from '../../Redux/StatReducer/interfaces';
import { CurrentUser } from '../../Redux/AuthReducer/interfaces';
import { columns } from '../../utils/constants';
import './Statistic.scss';

const mapTotalDataForChart = (stat: LongTermStat[]) => {
  return stat.reduce((acc, item) => {
    const dataItem = {
      x: item.date,
      y: item.learnedWords,
    };
    acc.push(dataItem);
    return acc;
  }, [] as Array<{ x: string, y: number }>);
};

const mapDailyDataForChart = (stat: { [key: string]: number }) => {
  return Object.entries(stat).reduce((acc: any, item: Array<number | string>) => {
    const dataItem = {
      x: item[0],
      y: acc.reduce((ac: any, it: { [key: string]: string | number }) => ac + it.y, 0) + item[1]
    };
    acc.push(dataItem);
    return acc;
  }, [] as Array<{ [key: string]: string | number }>);
};

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
  const { longTermStat, shortTermStat, gameStatWord, gameStatSprint, gameStatSavanna, gameStatAudio } = stat;
  const { learnedCards, learnedWords } = longTermStat[longTermStat.length - 1];
  const { userId, token } = currentUser;
  const {
    bestSeries,
    cardsLeft,
    correctAnswers,
    newWordsCount,
    studiedСardNum,
  } = shortTermStat;

  const studiedСard = Object.entries(studiedСardNum).reduce((acc: number, card: Array<number | string>) => acc + +card[1], 0);

  // map daily data for chart
  const dataChartToday = mapDailyDataForChart(studiedСardNum);

  // map total data for chart
  const dataChartTotal = mapTotalDataForChart(longTermStat);

  // map game data for chart
  const data = [gameStatWord.length, gameStatSavanna.length, gameStatAudio.length, gameStatSprint.length];
  const labels = ["Собери слово", "Саванна", "Аудио вызов", "Спринт"];

  function callback(key: string) {
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
                  {/*<List.Item className='d-flex flex-btw'>*/}
                  {/*  Всего карточек пройдено:*/}
                  {/*  <span className="list-info">{learnedCards}</span>*/}
                  {/*</List.Item>*/}
                </List>

                <div className="stat__wrapper">
                  <h4 className="stat__subtitle">
                    <VisualStatSvg />
                    Визуальная статистика:
                  </h4>
                  <Tabs defaultActiveKey="1" onChange={callback}>
                    <TabPane tab="Выучено слов за день:" key={nanoid()}>
                      <Graph
                        statType='Количество выученных слов за день:'
                        graphType='line'
                        data={dataChartToday}
                        color='255, 99, 132'
                        isStepped={true}
                      />
                    </TabPane>
                    <TabPane tab="Выучено всего слов:" key={nanoid()}>
                      <Graph
                        statType='Количество выученных всего слов:'
                        graphType='line'
                        data={dataChartTotal}
                        color='83, 201, 115'
                      />
                    </TabPane>
                    <TabPane tab="Популярность мини-игр:" key={nanoid()}>
                      <Graph
                        statType='Сыграно раз:'
                        graphType='bar'
                        data={data}
                        color='243,196,94'
                        isStepped={false}
                        labels={labels}
                      />
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
                  <TabPane tab="Собери слово" key={nanoid()}>
                    {gameStatWord
                      ? <Table dataSource={gameStatWord} columns={columns} scroll={{ x: true }} />
                      : 'Вы еще не играли в эту игру!'
                    }
                  </TabPane>
                  <TabPane tab="Саванна" key={nanoid()}>
                    {gameStatSavanna
                      ? <Table dataSource={gameStatSavanna} columns={columns} scroll={{ x: true }} />
                      : 'Вы еще не играли в эту игру!'
                    }
                  </TabPane>
                  <TabPane tab="Аудио вызов" key={nanoid()}>
                    {gameStatAudio
                      ? <Table dataSource={gameStatAudio} columns={columns} scroll={{ x: true }} />
                      : 'Вы еще не играли в эту игру!'
                    }
                  </TabPane>
                  <TabPane tab="Спринт" key={nanoid()}>
                    {gameStatSprint
                      ? <Table dataSource={gameStatSprint} columns={columns} scroll={{ x: true }} />
                      : 'Вы еще не играли в эту игру!'
                    }
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
