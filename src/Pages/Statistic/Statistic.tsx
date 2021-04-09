import React, { useEffect } from 'react';
import { List, Progress, Tabs, Table } from 'antd';
import { ReactComponent as StatSvg } from '../../assets/svg/statistics.svg';
import { ReactComponent as StatTodaySvg } from '../../assets/svg/graph_today.svg';
import { ReactComponent as CommonStatSvg } from '../../assets/svg/common_statistics.svg';
import { ReactComponent as VisualStatSvg } from '../../assets/svg/visual_statistics.svg';
import { ReactComponent as GamePadSvg } from '../../assets/svg/game-pad.svg';
import './Statistic.scss';

const Statistic: React.FC = ({ onLoad }: any) => {
  useEffect(() => onLoad(), [onLoad]);

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

  const { TabPane } = Tabs;

  function callback(key: string) {
    console.log(key);
  };

  return (
    <>
      <main className="stat__container">
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
              <List.Item className='d-flex flex-btw'>
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
            renderItem={item => (
              <List.Item className='d-flex flex-btw'>
                {item}
                <span className="list-info">0</span>
              </List.Item>
            )}
          />

          <div className="stat__wrapper">
            <h4 className="stat__subtitle">
              <VisualStatSvg />
              Визуальная статистика:
            </h4>
            <Tabs defaultActiveKey="1" onChange={callback}>
              <TabPane tab="Выучено слов за день:" key="1">
                Content of Tab Pane 1
              </TabPane>
              <TabPane tab="Выучено всего слов:" key="2">
                Content of Tab Pane 2
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
            <TabPane tab="Собери слово" key="1">
              <Table dataSource={dataSource} columns={columns} />;
            </TabPane>
            <TabPane tab="Саванна" key="2">
              <Table dataSource={dataSource} columns={columns} />;
            </TabPane>
            <TabPane tab="Аудио вызов" key="3">
              <Table dataSource={dataSource} columns={columns} />;
            </TabPane>
            <TabPane tab="Спринт" key="4">
              <Table dataSource={dataSource} columns={columns} />;
            </TabPane>
          </Tabs>
        </div>
      </main>
    </>
  )
}

export default Statistic;
