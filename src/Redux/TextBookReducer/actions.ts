import {CHANGE_PAGE} from "./actionTypes";

export const changeTextBookPageAC = (title: string) => ({
    type: CHANGE_PAGE,
    title
})
