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

function App() {
  let location = useLocation();
  return ( <>
    <NawPages/>
      <TransitionGroup>
        <CSSTransition
          key={location.key}
          classNames="fade"
          timeout={500}
        >
        <Switch>
          <Route path='/main' component={MainPage} />
          <Route path='/games' component={Games} />
          <Route path='/statistic' component={Statistic} />
          <Route path='/dictionary' component={Dictionary} />
        </Switch>
        </CSSTransition>
      </TransitionGroup>
    </>
  );
}

export default App;
