import {CHANGE_LEVEL, CHANGE_PAGE, FETCH_ERROR, PENDING_FALSE, PENDING_TRUE, UPDATE_WORDS,} from "./actionTypes";

const initState = {
    words: [],
    currPage: 1,
    currLevel: 1,
    pending: false,
    isError: '',
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
    ],
    wordsInSection: 0,
}

const TextBookReducer = (state = initState, action:any) => {
    switch(action.type){
        case PENDING_TRUE:
            return {...state, pending: action.pending}
        case FETCH_ERROR:
            return {...state, pending: action.pending, isError: action.errorMessage}
        case PENDING_FALSE:
            console.log(PENDING_FALSE)
            return {...state, pending: action.pending}
        case CHANGE_PAGE:
            return {...state, currPage: Number(action.page)}
        case CHANGE_LEVEL:
            return {...state, currLevel: Number(action.level)}
        case UPDATE_WORDS:
            console.log(action)
            return {...state, words: action.words, wordsInSection: action.wordsInSection}
        default:
            return state
    }
}


export default TextBookReducer;
