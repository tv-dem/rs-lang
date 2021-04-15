import React, { useEffect } from 'react';
import { Route, Switch, useLocation } from "react-router";
// import { Redirect } from "react-router-dom";
import {
  TransitionGroup,
} from "react-transition-group";
import NavPagesContainer from "./Components/NavPages/NavPagesContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";
import FooterContainer from "./Components/Footer/FooterContainer";
import WelcomFormContainer from './Components/Games/WelcomForm/WelcomFormContainer'
import MainPageContainer from "./Pages/MainPage/MainPageContainer";
import TextBookContainer from "./Pages/TextBook/TextBookContainer";
import GamesContainer from "./Pages/Games/GamesContainer";
import StatisticContainer from "./Pages/Statistic/StatisticContainer";
import DictionaryContainer from "./Pages/Dictionary/DictionaryContainer";
import LetterSolverContainer from './Components/Games/LetterSolver/LetterSolverContainer';
import Sprint from './Components/Games/Sprint/SprintContainer';
import AudioCallContainer from './Components/Games/AudioCall/AudioCallContainer';
import SavannaContainer from './Components/Games/Savanna/SavannaContainer';
import StartPage from "./Pages/StartPage/StartPage";
import {getUserSettings} from "./Redux/AuthReducer/thunk";


interface AppProps {
  isAuth: boolean;
  userId: string;
  token: string;
  refreshToken: string;
  getUserSettings: (userId: string, refreshToken: string) => void;
  getNewUserToken: (userId: string, refreshToken: string) => void;
}

const App: React.FC<AppProps> = ({ isAuth, getUserSettings, userId, token, refreshToken, getNewUserToken }) => {
  useEffect(() => {
    window.scrollTo(0, 0)
  });

  useEffect(() => {
    getNewUserToken(userId, refreshToken);
    getUserSettings(userId, token);
  }, []);

  let location = useLocation();
  return (
    <>
      <HeaderContainer />
      <NavPagesContainer />
      <div className='content'>
        <TransitionGroup className="transition-group">
          <Switch>
            <Route path='/games/LetterSolver/:level' component={LetterSolverContainer} />
            <Route path='/games/Sprint/:level' component={Sprint} />
            <Route path='/games/Savanna/:level' component={SavannaContainer} />
            <Route path='/games/AudioCall/:level' component={AudioCallContainer} />
            <Route path='/games/:game' component={WelcomFormContainer} />
            <Route path='/games' component={GamesContainer} />
            <Route path='/textbook/:level/:page' component={TextBookContainer} />
            <Route path='/home' component={MainPageContainer} />
            <Route path='/' component={StartPage} />
            {isAuth && (
              <>
                <Route path='/statistic' component={StatisticContainer} />
                <Route path='/dictionary/:section/:level/:page' component={DictionaryContainer} />
              </>
            )}
            {/* <Redirect to='/home' /> */}
          </Switch>
        </TransitionGroup>
      </div>
      <FooterContainer />
    </>
  );
};

export default App;
