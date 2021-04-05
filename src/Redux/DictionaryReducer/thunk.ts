import API from "../../API/API";
import {fetchError, removePending, setPending, updateWords} from "./actions";


export const getWords = (userId: string,  type:Array<string>, group:number, page:number, token: string) => (dispatch:any) => {
    const params = {"$or":type.map((t: string) => ({"userWord.difficulty":t}))};
    console.log(params)
    dispatch(setPending());
    API.getAggregatedWordsByParams(userId, params, group, page, token)
        .then(res => {
            if(res) {
                const {paginatedResults,totalCount}=res[0];
                console.log('res', res)
                if(!totalCount[0]){
                    dispatch(updateWords(paginatedResults, 0));
                    dispatch(removePending());
                    return
                }
                dispatch(updateWords(paginatedResults, totalCount[0].count));
            } else{
                dispatch(updateWords([], 0))
                fetchError('error');
            }
            dispatch(removePending());
        })
}

export const updateUserWordTC = (wordId: string, userId: string, difficulty: string, difficultyUpdate:Array<string>, optional: Object, token: string,group: number, page:number) => ((dispatch:any)=>{
    debugger;
    API.updateUserWord(wordId,userId,difficulty,{},token)
        .then(res => {
            console.log('res:',res)
            dispatch(getWords(userId,difficultyUpdate,group,page, token))
        })
})
