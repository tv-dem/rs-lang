import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.scss'
import { Provider } from "react-redux";
import { Route, Switch } from "react-router";
import { ConnectedRouter } from 'connected-react-router';
import configureStore, { history } from './Redux/configureStore';
import LoginPage from './Pages/LoginPage/LoginPage';

const store = configureStore(); // null вместо initState

ReactDOM.render(
  (<React.StrictMode>
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Switch>
          <Route exact path='/' component={App} />
          <Route path='/login' component={LoginPage} />
        </Switch>
      </ConnectedRouter>
    </Provider>
  </React.StrictMode>)
  ,
  document.getElementById('root')
);
