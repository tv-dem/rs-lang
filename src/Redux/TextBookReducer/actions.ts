import {CHANGE_LEVEL, CHANGE_PAGE, PENDING_FALSE, PENDING_TRUE, UPDATE_WORDS} from "./actionTypes";

export const changeTextBookPageAC = (page:number) => ({
    type: CHANGE_PAGE,
    page
})

export const changeLevelAC = (level: number) => ({
    type: CHANGE_LEVEL,
    level
})

export const setPending = () => ({
    type: PENDING_TRUE,
    pending: true,
})

export const removePending = () => ({
    type: PENDING_FALSE,
    pending: false,
})

export const updateWords = (words: any) => ({
    type: UPDATE_WORDS,
    words
})
