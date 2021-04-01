import { SET_COUNT, ADD_WORD, SET_CURRENT_CARD,SET_CURRENT_WORD } from "./actionTypes";


export const setCount = (count: number) => ({
    type: SET_COUNT,
    count
})

export const addWord = (word: string) => ({
    type: ADD_WORD,
    word
})

export const setCurrentCard = (pathRoute: string) => ({
    type: SET_CURRENT_CARD,
    pathRoute
})

export const setCurrentWord = (word: Object) => ({
    type: SET_CURRENT_WORD,
    word
})
