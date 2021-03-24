import {CHANGE_TITLE} from "./actionTypes";

export const changeHeaderTitleAC = (title: string) => ({
    type: CHANGE_TITLE,
    title
})
