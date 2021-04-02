import {CHANGE_LEVEL, CHANGE_PAGE, CHANGE_SECTION,} from "./actionTypes";

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
            const section = state.sections.find(({section}) => section===action.sectionName)
            console.log(section)
            return {...state, currSection: section}
        case CHANGE_LEVEL:
            return {...state, currLevel: action.level}
        default:
            return state
    }
}


export default DictionaryReducer;
