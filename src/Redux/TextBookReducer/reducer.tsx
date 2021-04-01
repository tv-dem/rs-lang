import {CHANGE_LEVEL, CHANGE_PAGE, UPDATE_WORDS,} from "./actionTypes";

const initState = { // заглушка, изначально будет пустой массив, после запроса обновится
    words: [],
    currPage: 1,
    currLevel: 1,
    levels: [
        {
            title: 'level 1'
        },
        {
            title: 'level 2'
        },
        {
            title: 'level 3'
        },
        {
            title: 'level 4'
        },
        {
            title: 'level 5'
        },
        {
            title: 'level 6'
        },
    ]
}

const TextBookReducer = (state = initState, action:any) => {
    switch(action.type){
        case CHANGE_PAGE:
            return {...state, currPage: Number(action.page)}
        case CHANGE_LEVEL:
            return {...state, currLevel: Number(action.level)}
        case UPDATE_WORDS:
            console.log(action)
            return {...state, words: action.words}
        default:
            return state
    }
}


export default TextBookReducer;
