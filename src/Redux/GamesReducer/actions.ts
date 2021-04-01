import { SET_COUNT, UPDATE_WORDS, SET_CURRENT_CARD,SET_CURRENT_WORD } from "./actionTypes";


export const setCount = (count: number) => ({
    type: SET_COUNT,
    count
})

export const updateWords = (words: string) => ({
    type: UPDATE_WORDS,
    words
})

export const setCurrentCard = (pathRoute: string) => ({
    type: SET_CURRENT_CARD,
    pathRoute
})

export const setCurrentWord = (word: Object) => ({
    type: SET_CURRENT_WORD,
    word
})
