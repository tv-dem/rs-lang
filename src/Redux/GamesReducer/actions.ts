import {
    SET_COUNT,
    UPDATE_WORDS,
    SET_CURRENT_CARD,
    SET_CURRENT_WORD,
    ADD_RIGHT_WORD,
    ADD_WRONG_WORD,
    NULLIFY,
    SET_PENDING,
    SET_LEVEL,
    SET_BEST_LINE,
    SET_CURRENT_LINE,
    SET_PAGE,
    SET_PERCENT,
    SET_IS_CHECK,
    SET_VALUE_HEARTS,
    SET_IS_SOUND
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

export const nullify = () => ({
    type: NULLIFY,
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

export const setPending = (status: boolean) => ({
    type: SET_PENDING,
    status
})

export const setLevel = (level: number) =>({
    type: SET_LEVEL,
    level
})

export const setPage = (page: number) =>({
    type: SET_PAGE,
    page
})

export const setPercent = (percent: number) =>({
    type: SET_PERCENT,
    percent
})

export const setIsCheck = (isCheck: boolean) =>({
    type: SET_IS_CHECK,
    isCheck
})

export const setValHearts = (hearts: number) =>({
    type: SET_VALUE_HEARTS,
    hearts
})

export const setIsSound = (isSound: boolean) =>({
    type: SET_IS_SOUND,
    isSound
})
