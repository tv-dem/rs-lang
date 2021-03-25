import {CHANGE_PAGE} from "./actionTypes";

export const changeDictionaryPageAC = (title: string) => ({
    type: CHANGE_PAGE,
    title
})
