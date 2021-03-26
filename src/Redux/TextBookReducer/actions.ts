import {CHANGE_LEVEL, CHANGE_PAGE} from "./actionTypes";

export const changeTextBookPageAC = (page:number) => ({
    type: CHANGE_PAGE,
    page
})

export const changeLevelAC = (level: number) => ({
    type: CHANGE_LEVEL,
    level
})
