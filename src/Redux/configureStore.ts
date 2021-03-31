import { createBrowserHistory } from 'history'
import { applyMiddleware, compose, createStore } from 'redux'
import { routerMiddleware } from 'connected-react-router'
import createRootReducer from './reducers'

export const history = createBrowserHistory()

const configureStore = (preloadedState:any) => {
    const store = createStore(
      createRootReducer(history), // root reducer with router state
      preloadedState,
      compose(
          applyMiddleware(
            routerMiddleware(history), // for dispatching history actions
          ),
      ),
    )
    return store
};

export default configureStore;
