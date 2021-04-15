import {CHANGE_LEVEL, CHANGE_PAGE, FETCH_ERROR, PENDING_FALSE, PENDING_TRUE, UPDATE_WORDS} from "./actionTypes";

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

export const updateWords = (words: any, wordsInSection:number) => ({
    type: UPDATE_WORDS,
    words,
    wordsInSection
})

export const fetchError = (errorMessage:string) => ({
    type: FETCH_ERROR,
    pending: false,
    errorMessage
})
