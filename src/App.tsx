import React, { useEffect } from 'react';
import { Route, Switch, useLocation } from "react-router";
// import { Redirect } from "react-router-dom";
import NavPagesContainer from "./Components/NavPages/NavPagesContainer";
import {
  TransitionGroup,
  CSSTransition
} from "react-transition-group";
import HeaderContainer from "./Components/Header/HeaderContainer";
import FooterContainer from "./Components/Footer/FooterContainer";
import WelcomFormContainer from './Components/Games/WelcomForm/WelcomFormContainer'
import MainPageContainer from "./Pages/MainPage/MainPageContainer";
import TextBookContainer from "./Pages/TextBook/TextBookContainer";
import GamesContainer from "./Pages/Games/GamesContainer";
import StatisticContainer from "./Pages/Statistic/StatisticContainer";
import DictionaryContainer from "./Pages/Dictionary/DictionaryContainer";
import LetterSolverContainer from './Components/Games/LetterSolver/LetterSolverContainer';

const App: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  });

  let location = useLocation();

  return (
    <>
      <HeaderContainer />
      <NavPagesContainer />
      <div className='content'>
        <TransitionGroup className="transition-group">
          <CSSTransition
            key={location.key}
            classNames="fade"
            timeout={500}
          >
            <Switch>
              <Route path='/games/LetterSolver/:level' component={LetterSolverContainer} />
              <Route path='/games/Sprint/:level' component={LetterSolverContainer} />
              <Route path='/games/Savanna/:level' component={LetterSolverContainer} />
              <Route path='/games/AudioCall/:level' component={LetterSolverContainer} />
              <Route path='/games/:game' component={WelcomFormContainer} />
              <Route path='/games' component={GamesContainer} />
              <Route path='/statistic' component={StatisticContainer} /> {/* isAuth */}
              <Route path='/dictionary/:section/:page' component={DictionaryContainer} /> {/* isAuth */}
              <Route path='/textbook/:level/:page' component={TextBookContainer} />
              <Route path='/home' component={MainPageContainer} />
              <Route path='*' component={MainPageContainer} />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      </div>
      <FooterContainer />
    </>
  );
}

export default App;
