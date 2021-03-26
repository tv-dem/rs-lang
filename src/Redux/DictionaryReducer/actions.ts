import {CHANGE_PAGE, CHANGE_SECTION} from "./actionTypes";

export const changeDictionaryPageAC = (page: number) => ({
    type: CHANGE_PAGE,
    page
})

export const changeSectionAC = (section: string) => ({
    type: CHANGE_SECTION,
    section
})
