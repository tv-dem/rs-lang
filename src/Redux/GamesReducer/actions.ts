import {
    SET_COUNT,
    UPDATE_WORDS,
    SET_CURRENT_CARD,
    SET_CURRENT_WORD,
    ADD_RIGHT_WORD,
    ADD_WRONG_WORD,
    NULLIFY_RIGHT_WORDS,
    NULLIFY_WRONG_WORDS,
    NULLIFY_WORDS,
    SET_PENDING,
    SET_LEVEL,
    SET_PAGE, 
    SET_BEST_LINE,
    SET_CURRENT_LINE
} from "./actionTypes";

export const setBestLine = (bestLine: number) => ({
    type: SET_BEST_LINE,
    bestLine
})

export const setCurrentLine = (currentLine: number) => ({
    type: SET_CURRENT_LINE,
    currentLine
})

export const setCount = (count: number) => ({
    type: SET_COUNT,
    count
})

export const updateWords = (words: string) => ({
    type: UPDATE_WORDS,
    words
})

export const nullifyWords = () => ({
    type: NULLIFY_WORDS,
})


export const setCurrentCard = (pathRoute: string) => ({
    type: SET_CURRENT_CARD,
    pathRoute
})

export const setCurrentWord = (word: Object) => ({
    type: SET_CURRENT_WORD,
    word
})

export const addRightWord = (word: Object) => ({
    type: ADD_RIGHT_WORD,
    word
})

export const addWrongWord = (word: Object) => ({
    type: ADD_WRONG_WORD,
    word
})

export const nullifyRightWord = () => ({
    type: NULLIFY_RIGHT_WORDS,
})

export const nullifyWrongWord = () => ({
    type: NULLIFY_WRONG_WORDS,
})

export const setPending = (status: boolean) => ({
    type: SET_PENDING,
    status
})

export const setLevel = (level: number) =>{
    console.log(`level ${level}`)
    return ({
    type: SET_LEVEL,
    level
})}

export const setPage = (page: number) =>{ 
    console.log(`page ${page}`)
    return({
    type: SET_PAGE,
    page
})}



