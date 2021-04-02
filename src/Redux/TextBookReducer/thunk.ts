import API from "../../API/API";
import {removePending, setPending, updateWords} from "./actions";

export const getTextBookWordsTC = (group: number, page:number) => (dispatch:any)=>{
    dispatch(setPending())
    API.getWordsByGroupPage(group, page)
        .then(words => {
            console.log('getWordsByGroupPage')
            dispatch(updateWords(words));
            dispatch(removePending())
        })
}


export const createUserWordTC = (wordId: string, userId: string, difficulty: string, optional: Object, token: string,group: number, page:number) => ((dispatch:any)=>{
    API.createUserWord(wordId,userId,difficulty,{},token)
        .then(res => {
            console.log('res:',res)
            dispatch(setPending())
            API.getAggregatedWords(userId, group, page, token)
                .then(res => {
                    console.log('res', res)
                    dispatch(updateWords(res[0].paginatedResults))
                    dispatch(removePending())
                })
        })
})

export const updateUserWordTC = (wordId: string, userId: string, difficulty: string, optional: Object, token: string,group: number, page:number) => ((dispatch:any)=>{
    API.updateUserWord(wordId,userId,difficulty,{},token)
        .then(res => {
            console.log('res:',res)
            dispatch(setPending())
            API.getAggregatedWords(userId, group, page, token)
                .then(res => {
                    console.log('res', res)
                    dispatch(updateWords(res[0].paginatedResults))
                    dispatch(removePending())
                })
        })
})


export const getAggregatedWordsTC = (userId: string, group: number, page:number, token:string) => (dispatch:any) => {
    dispatch(setPending())
    API.getAggregatedWords(userId, group, page, token)
        .then(res => {
            console.log('res', res)
            dispatch(updateWords(res[0].paginatedResults))
            dispatch(removePending())
        })
}
