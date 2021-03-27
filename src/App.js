import React, {useEffect} from 'react';
import {Route, Switch, useLocation} from "react-router";
import MainPage from "./Pages/MainPage/MainPage";
import NavPagesContainer from "./Components/NavPages/NavPagesContainer";
import Games from "./Pages/Games/Games";
import Statistic from "./Pages/Statistic/Statistic";
import Dictionary from "./Pages/Dictionary/Dictionary";

import {
  TransitionGroup,
  CSSTransition
} from "react-transition-group";
import HeaderContainer from "./Components/Header/HeaderContainer";
import FooterContainer from "./Components/Footer/FooterContainer";
import WelcomForm from './Components/Games/Menu/WelcomForm'
import {Redirect} from "react-router-dom";
import MainPageContainer from "./Pages/MainPage/MainPageContainer";
import TextBookContainer from "./Pages/TextBook/TextBookContainer";
import GamesContainer from "./Pages/Games/GamesContainer";
import StatisticContainer from "./Pages/Statistic/StatisticContainer";
import DictionaryContainer from "./Pages/Dictionary/DictionaryContainer";

function App() {
  useEffect(()=>{
    window.scrollTo(0,0)
  })
  let location = useLocation();
  return ( <div className='app'>
    <NavPagesContainer/>
    <HeaderContainer/>
    <div className='content'>
      <TransitionGroup className="transition-group">
        <CSSTransition
          key={location.key}
          classNames="fade"
          timeout={500}
        >
          <Switch>
            <Route path='/games/:game' render={()=><WelcomForm/>} />
            <Route path='/games' component={GamesContainer} />
            <Route path='/statistic' component={StatisticContainer} />
            <Route path='/dictionary/:section/:page' component={DictionaryContainer} />
            <Route path='/textbook/:level/:page' component={TextBookContainer} />
            <Route path='/home' component={MainPageContainer} />
          </Switch>
        </CSSTransition>
      </TransitionGroup>
      {/*<Redirect from='/' to='/'/>*/}
    </div>
    <FooterContainer/>
    </div>
  );
}

export default App;
