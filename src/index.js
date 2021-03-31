import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.scss'
import { Provider } from "react-redux";
import { Route } from "react-router";
import { ConnectedRouter } from 'connected-react-router';
import configureStore, { history } from './Redux/configureStore';

const store = configureStore(); // null вместо initState

ReactDOM.render(
  (<React.StrictMode>
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Route path='/' component={App} />
      </ConnectedRouter>
    </Provider>
  </React.StrictMode>)
  ,
  document.getElementById('root')
);
