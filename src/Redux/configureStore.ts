import { createBrowserHistory } from 'history'
import { applyMiddleware, compose, createStore } from 'redux'
import { routerMiddleware } from 'connected-react-router'
import createRootReducer from './reducers'
import thunkMiddleware from 'redux-thunk';

export const history = createBrowserHistory();

const persistedState = ()=>{
  const reduxState =localStorage.getItem('reduxState')

   if (typeof reduxState === 'string') {
     return {games: JSON.parse(reduxState)};
   }
    return ({})
 }

// const configureStore = (preloadedState: any) => {
  const store = createStore(
    createRootReducer(history), // root reducer with router state
    persistedState(),
    compose(
      applyMiddleware(
        thunkMiddleware,
        routerMiddleware(history), // for dispatching history actions
      ),
    ),
  )
  // return store;
// };

store.subscribe(() => {
  localStorage.setItem('reduxState', JSON.stringify(store.getState().games));
})

export default store;

