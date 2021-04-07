import React, { useEffect } from 'react';
import { Progress, Card } from 'antd';
import { ReactComponent as AwardSvg } from '../../assets/svg/award.svg';
import { ReactComponent as LevelUpSvg } from '../../assets/svg/level-up.svg';
import { ReactComponent as ArrowUpSvg } from '../../assets/svg/up-arrow.svg';
import { ReactComponent as StarSvg } from '../../assets/svg/star.svg';
import { ReactComponent as RatingSvg } from '../../assets/svg/rating.svg';
import './MainPage.scss';

const MainPage: React.FC = ({ onLoad }: any) => {
  useEffect(() => onLoad(), [onLoad])

  const gridStyle = {
    width: '50%',
  };

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
              <Card.Grid style={gridStyle}>
                <div className="achievement__body">
                  <div className="achievement__body_row">
                    <div className="level-container">
                      <h5 className="level-title">
                        Уровень
                      </h5>
                      <span className="level">
                        1
                      </span>
                    </div>
                    <div className="level-icon">
                      <LevelUpSvg />
                    </div>
                  </div>
                  <p>
                    <ArrowUpSvg className='level-progress' />
                    <span className='level-text'>2</span>
                  </p>
                  <Progress percent={30} />
                </div>
              </Card.Grid>
              <Card.Grid style={gridStyle}>
                <div className="achievement__body">
                  <div className="achievement__body_row">
                    <div className="level-container">
                      <h5 className="level-title">
                        Очки Уровня
                      </h5>
                      <span className="level --green">
                        1
                      </span>
                    </div>
                    <div className="level-icon --green">
                      <StarSvg />
                    </div>
                  </div>
                  <p>
                    Очков на уровне:&nbsp;
                    <span className='level-text'>20</span>
                  </p>
                </div>
              </Card.Grid>
              <Card.Grid style={gridStyle}>
                <div className="achievement__body">
                  <div className="achievement__body_row">
                    <div className="level-container">
                      <h5 className="level-title">
                        Всего очков:
                      </h5>
                      <span className="level --blue">
                        0
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
              <Card.Grid style={gridStyle}>
                <div className="achievement__body">
                  <div className="achievement__body_row">
                    <div className="level-container">
                      <h5 className="level-title">
                        Лига
                      </h5>
                      <span className="level --red">
                        I
                      </span>
                    </div>
                    <div className="level-icon --red">
                      <AwardSvg />
                    </div>
                  </div>
                  <p>
                    <span title="user rank" className="level-rank" />
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
