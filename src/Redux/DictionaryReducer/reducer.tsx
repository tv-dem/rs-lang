import {CHANGE_PAGE, CHANGE_SECTION,} from "./actionTypes";

const initState = { // заглушка, изначально будет пустой массив, после запроса обновится
    words: [],
    sections: [
        {
            number: 1,
            title: 'Изучаемые',
            section: 'learn',
            options: [
                'в сложные',
                'удалить',
            ]
        },
        {
            number: 2,
            title: 'Сложные',
            section: 'hard',
            options: [
                'в изучаемые',
                'удалить',
            ]
        },
        {
            number: 3,
            title: 'Удаленные',
            section: 'delete',
            options: [
                'восстановить в изучаемые',
                'восстановить в сложные',
            ]
        },
    ],
    currPage: 1,
    currSection: {
        number: 1,
        title: 'Изучаемые',
        section: 'learn',
        options: [
            'в сложные',
            'в удаленные',
        ]
    },
}

const DictionaryReducer = (state = initState, action:any) => {
    console.log('dsf', action)
    switch(action.type){
        case CHANGE_PAGE:
            return {...state, currPage: action.page}
        case CHANGE_SECTION:
            return {...state, currSection: action.section}
        default:
            return state
    }
}


export default DictionaryReducer;
