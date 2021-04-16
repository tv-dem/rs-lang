import React, { useEffect, useState } from 'react';
import { Progress, Card } from 'antd';
import { ReactComponent as AwardSvg } from '../../assets/svg/award.svg';
import { ReactComponent as LevelUpSvg } from '../../assets/svg/level-up.svg';
import { ReactComponent as ArrowUpSvg } from '../../assets/svg/up-arrow.svg';
import { ReactComponent as StarSvg } from '../../assets/svg/star.svg';
import { ReactComponent as RatingSvg } from '../../assets/svg/rating.svg';
import { Stat } from '../../Redux/StatReducer/interfaces';
import { CurrentUser } from '../../Redux/AuthReducer/interfaces';
import { ligaData } from '../../utils/constants';
import './MainPage.scss';

interface MainPageProps {
  onLoad: () => void;
  getStat: (userId: string, token: string) => void;
  stat: Stat;
  isLoadStat: boolean;
  errorStat: string;
  currentUser: CurrentUser,
}

const MainPage: React.FC<MainPageProps> = ({ onLoad, getStat, isLoadStat, errorStat, stat, currentUser }: any) => {
  const { longTermStat } = stat;
  const { learnedWords } = longTermStat[longTermStat.length - 1];
  const { userId, token } = currentUser;
  const countWordsInLevel = 360;
  const totalCountWords = 3600;

  const [mainPageState, setMainPageState] = useState({
    currentLevel: Math.trunc(learnedWords * countWordsInLevel / totalCountWords),
    currentPoints: (learnedWords / countWordsInLevel - Math.trunc((learnedWords / countWordsInLevel))) * countWordsInLevel,
  });

  useEffect(() => onLoad(), [onLoad]);

  useEffect(() => {
    getStat(userId, token);
  }, []);

  useEffect(() => {
    setMainPageState({
      currentLevel: Math.trunc(learnedWords * countWordsInLevel / totalCountWords),
      currentPoints: (learnedWords / countWordsInLevel - Math.trunc((learnedWords / countWordsInLevel))) * countWordsInLevel,
    });
  }, [learnedWords]);

  return (
    <>
      <main className="home-page__container">
        <div className="home-page">
          <div className="achievement">
            <h5 className="achievement__title">
              <AwardSvg />
              Ваши достижения:
            </h5>
            <Card>
              <Card.Grid className='achievement__grid'>
                <div className="achievement__body">
                  <div className="achievement__body_row">
                    <div className="level-container">
                      <h5 className="level-title">
                        Уровень
                      </h5>
                      <span className="level">
                        {mainPageState.currentLevel}
                      </span>
                    </div>
                    <div className="level-icon">
                      <LevelUpSvg />
                    </div>
                  </div>
                  <p>
                    <ArrowUpSvg className='level-progress' />
                    <span className='level-text'>{mainPageState.currentLevel === 10 ? mainPageState.currentLevel : mainPageState.currentLevel + 1}</span>
                  </p>
                  <Progress percent={Math.floor(mainPageState.currentLevel / countWordsInLevel * 100)} steps={10} />
                </div>
              </Card.Grid>
              <Card.Grid className='achievement__grid'>
                <div className="achievement__body">
                  <div className="achievement__body_row">
                    <div className="level-container">
                      <h5 className="level-title">
                        Очки Уровня
                      </h5>
                      <span className="level --green">
                        {mainPageState.currentPoints}
                      </span>
                    </div>
                    <div className="level-icon --green">
                      <StarSvg />
                    </div>
                  </div>
                  <p>
                    Очков на уровне:&nbsp;
                    <span className='level-text'>{countWordsInLevel}</span>
                  </p>
                </div>
              </Card.Grid>
              <Card.Grid className='achievement__grid'>
                <div className="achievement__body">
                  <div className="achievement__body_row">
                    <div className="level-container">
                      <h5 className="level-title">
                        Всего очков:
                      </h5>
                      <span className="level --blue">
                        {learnedWords}
                      </span>
                    </div>
                    <div className="level-icon --blue">
                      <RatingSvg />
                    </div>
                  </div>
                  <p>
                    Набери как можно больше!
                  </p>
                </div>
              </Card.Grid>
              <Card.Grid className='achievement__grid'>
                <div className="achievement__body">
                  <div className="achievement__body_row">
                    <div className="level-container">
                      <h5 className="level-title">
                        Лига
                      </h5>
                      <span className="level --red">
                        {ligaData[mainPageState.currentLevel].liga}
                      </span>
                    </div>
                    <div
                      className="level-icon --red">
                      <AwardSvg />
                    </div>
                  </div>
                  <p>
                    <span
                      title="user rank"
                      className="level-rank"
                      style={{ backgroundPosition: `${ligaData[mainPageState.currentLevel].coords}` }}
                    />
                  </p>
                </div>
              </Card.Grid>
            </Card>
          </div>
        </div>
      </main>
    </>
  )
}

export default MainPage;
