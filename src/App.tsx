import React, { useEffect } from 'react';
import { Route, Switch, useLocation } from "react-router";
import { Redirect } from "react-router-dom";
import { connect } from 'react-redux';
import {
  TransitionGroup,
  CSSTransition
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
import {getUserSettings} from "./Redux/AuthReducer/thunk";


interface AppProps {
  isAuth: boolean;
  userId: string;
  token: string;
  getUserSettings: any;
}

const App: React.FC<AppProps> = ({ isAuth,getUserSettings, userId,token }) => {
  useEffect(() => {
    window.scrollTo(0, 0)
  });
  useEffect(()=>{
    if(isAuth){
      getUserSettings(userId, token);
    }
  }, [isAuth])
  let location = useLocation();
  return (
    <>
      <HeaderContainer />
      <NavPagesContainer />
      <div className='content'>
         <TransitionGroup className="transition-group">
        {/*  <CSSTransition
            key={location.key}
            classNames="fade"
            timeout={500}

          > */}
        <Switch>
          <Route path='/games/LetterSolver/:level' component={LetterSolverContainer} />
          <Route path='/games/Sprint/:level' component={Sprint} />
          <Route path='/games/Savanna/:level' component={SavannaContainer} />
          <Route path='/games/AudioCall/:level' component={AudioCallContainer} />
          <Route path='/games/:game' component={WelcomFormContainer} />
          <Route path='/games' component={GamesContainer} />
          <Route path='/textbook/:level/:page' component={TextBookContainer} />
          <Route path='/home' component={MainPageContainer} />
          {isAuth && (
            <>
              <Route path='/statistic' component={StatisticContainer} />
              <Route path='/dictionary/:section/:level/:page' component={DictionaryContainer} />
            </>
          )}
          {/* <Redirect to='/home' /> */}
        </Switch>
         {/* </CSSTransition> */}
        </TransitionGroup>
      </div>
      <FooterContainer />
    </>
  );
};

const mapStateToProps = ({auth}: any) => ({
  isAuth: auth.isAuth,
  userId: auth.currentUser.userId,
  token: auth.currentUser.token,
});

const mapDispatchToProps = (dispatch:any) => ({
    getUserSettings: (userId:string, token:string) => dispatch(getUserSettings(userId, token)),
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
