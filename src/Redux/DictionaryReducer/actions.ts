import {CHANGE_PAGE, CHANGE_SECTION, CHANGE_LEVEL} from "./actionTypes";

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
