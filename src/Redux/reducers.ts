import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import HeaderReducer from "./HeaderReducer/reducer";
import TextBookReducer from "./TextBookReducer/reducer";
import DictionaryReducer from "./DictionaryReducer/reducer";
import GamesReducer from './GamesReducer/reducer';

const createRootReducer = (history: any) => combineReducers({
    router: connectRouter(history),
    header: HeaderReducer,
    textBook: TextBookReducer,
    dictionary: DictionaryReducer,
    games:GamesReducer,
})
export default createRootReducer
