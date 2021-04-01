import {CHANGE_LEVEL, CHANGE_PAGE, UPDATE_WORDS} from "./actionTypes";

export const changeTextBookPageAC = (page:number) => ({
    type: CHANGE_PAGE,
    page
})

export const changeLevelAC = (level: number) => ({
    type: CHANGE_LEVEL,
    level
})

export const updateWords = (words: any) => ({
    type: UPDATE_WORDS,
    words
})
