import {CHANGE_LEVEL, CHANGE_PAGE, CHANGE_SECTION, UPDATE_WORDS,} from "./actionTypes";
import {FETCH_ERROR, PENDING_FALSE, PENDING_TRUE} from "./actionTypes";

const initState = { // заглушка, изначально будет пустой массив, после запроса обновится
    words: [],
    sections: [
        {
            number: 1,
            title: 'Изучаемые',
            section: 'learn',
            options: []
        },
        {
            number: 2,
            title: 'Сложные',
            section: 'hard',
            options: []
        },
        {
            number: 3,
            title: 'Удаленные',
            section: 'delete',
            options: ['восстановить']
        },
    ],
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
    currLevel: 1,
    currPage: 1,
    pending: false,
    isError: '',
    currSection: {
        number: 1,
        title: 'Изучаемые',
        section: 'learn',
        options: []
    },
    wordsInSection: 0,
}

const DictionaryReducer = (state = initState, action:any) => {
    console.log(action)
    switch(action.type){
        case PENDING_TRUE:
            return {...state, pending: action.pending}
        case FETCH_ERROR:
            return {...state, pending: action.pending, isError: action.errorMessage}
        case PENDING_FALSE:
            console.log(PENDING_FALSE)
            return {...state, pending: action.pending}
        case CHANGE_PAGE:
            return {...state, currPage: action.page}
        case CHANGE_SECTION:
            const section = state.sections.find(({section}) => section===action.sectionName)
            return {...state, currSection: section}
        case CHANGE_LEVEL:
            return {...state, currLevel: action.level}
        case UPDATE_WORDS:
            return {...state, words: action.words, wordsInSection: action.wordsInSection}
        default:
            return state
    }
}


export default DictionaryReducer;
