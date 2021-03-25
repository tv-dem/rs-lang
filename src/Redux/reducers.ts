import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import HeaderReducer from "./HeaderReducer/reducer";
import TextBookReducer from "./TextBookReducer/reducer";

const createRootReducer = (history: any) => combineReducers({
    router: connectRouter(history),
    header: HeaderReducer,
    textBook: TextBookReducer,
})
export default createRootReducer
