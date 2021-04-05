import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.scss'
import { Provider } from "react-redux";
import { Route, Switch } from "react-router";
import { ConnectedRouter } from 'connected-react-router';
import store, { history } from './Redux/configureStore';
import AuthorizationPage from './Pages/AuthorizationPage/AuthorizationPage';

// @ts-ignore
// const store = configureStore(); // null вместо initState

ReactDOM.render(
  (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Switch>
          <Route path='/authorization' component={AuthorizationPage} />
          <Route path='/' component={App} />
        </Switch>
      </ConnectedRouter>
    </Provider>
  ),
  document.getElementById('root')
);
