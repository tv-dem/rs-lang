import React from 'react';
import {Route, Switch, useLocation} from "react-router";
import MainPage from "./Pages/MainPage/MainPage";
import NawPages from "./Components/NavPages/NawPages";
import Games from "./Pages/Games/Games";
import Statistic from "./Pages/Statistic/Statistic";
import Dictionary from "./Pages/Dictionary/Dictionary";

import {
  TransitionGroup,
  CSSTransition
} from "react-transition-group";
import TextBook from "./Pages/TextBook/TextBook";
import HeaderContainer from "./Components/Header/HeaderContainer";
import FooterContainer from "./Components/Footer/FooterContainer";
import WelcomForm from './Components/Games/Menu/WelcomForm'
import {Redirect} from "react-router-dom";

function App() {
  let location = useLocation();
  return ( <>
    <NawPages/>
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
            <Route path='/games' component={Games} />
            <Route path='/statistic' component={Statistic} />
            <Route path='/dictionary' component={Dictionary} />
            <Route path='/textbook' component={TextBook} />
            <Route path='/' component={MainPage} />
            
          </Switch>
        </CSSTransition>
      </TransitionGroup>
      <Redirect from='/' to='/'/>
    </div>
    <FooterContainer/>

    </>
  );
}

export default App;
