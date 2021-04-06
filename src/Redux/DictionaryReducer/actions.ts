import {CHANGE_PAGE, CHANGE_SECTION, CHANGE_LEVEL, UPDATE_WORDS} from "./actionTypes";
import {PENDING_FALSE,FETCH_ERROR, PENDING_TRUE} from "./actionTypes";

export const changeDictionaryPageAC = (page: number) => ({
    type: CHANGE_PAGE,
    page
})

export const changeSectionAC = (sectionName: string) => ({
    type: CHANGE_SECTION,
    sectionName
})

export const changeDictionarylevelAC = (level: number) => ({
    type: CHANGE_LEVEL,
    level
})

export const updateWords = (words:any, wordsInSection:number) => ({
    type: UPDATE_WORDS,
    wordsInSection,
    words
})

export const setPending = () => ({
    type: PENDING_TRUE,
    pending: true,
})

export const removePending = () => ({
    type: PENDING_FALSE,
    pending: false,
})

export const fetchError = (errorMessage:string) => ({
    type: FETCH_ERROR,
    pending: false,
    errorMessage
})
