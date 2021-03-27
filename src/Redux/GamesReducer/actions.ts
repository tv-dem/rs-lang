import { CHANGE_COUNT, ADD_WORD, SET_CURRENT_CARD } from "./actionTypes";


export const changeNextCount = (count: number) => ({
    type: CHANGE_COUNT,
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
