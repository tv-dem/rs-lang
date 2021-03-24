import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css'
import {Provider} from "react-redux";
import {Switch, Route} from "react-router";
import {ConnectedRouter} from 'connected-react-router'
import configureStore, { history } from './Redux/configureStore'
import {BrowserRouter} from "react-router-dom";

const store = configureStore(); // null вместо initState

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ConnectedRouter history={history}>
          <Route path='/' component={App} />
      </ConnectedRouter>
    </Provider>
  </React.StrictMode>
  ,
  document.getElementById('root')
);
