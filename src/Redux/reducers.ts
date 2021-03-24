import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import HeaderReducer from "./HeaderReducer/reducer";

const createRootReducer = (history: any) => combineReducers({
    router: connectRouter(history),
    header: HeaderReducer,
})
export default createRootReducer
