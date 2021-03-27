import {CHANGE_COUNT, ADD_WORD} from "./actionTypes";

export const changeNextCount = (count: number) => ({
    type: CHANGE_COUNT,
    count
})

export const addWord = (word:Object) => ({
    type: ADD_WORD,
    word
})
