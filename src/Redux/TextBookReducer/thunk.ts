import API from "../../API/API";
import {updateWords} from "./actions";

export const getTextBookWordsTC = (group: number, page:number) => (dispatch:any)=>{
    API.getWordsByGroupPage(group, page)
        .then(words => {
            console.log('getWordsByGroupPage')
            dispatch(updateWords(words));
        })
}


export const createUserWordTC = (wordId: string, userId: string, difficulty: string, optional: Object, token: string) => ((dispatch:any)=>{
    API.createUserWord(wordId,userId,difficulty,{},token)
        .then(res => {
            console.log('res:',res)
        })
})

export const getAggregatedWordsTC = (userId: string, group: number, page:number, token:string) => (dispatch:any) => {
    API.getAggregatedWords(userId, group, page, token)
        .then(res => {
            console.log('res', res)
            dispatch(updateWords(res[0].paginatedResults))
        })
}
