import {CHANGE_TITLE} from "./actionTypes";

const initState = {
    title: '',
}

const HeaderReducer = (state = initState, action:any) => {
    switch(action.type){
        case CHANGE_TITLE:
            return {...state, title: action.title}
        default:
            return state
    }
}

export default HeaderReducer;
