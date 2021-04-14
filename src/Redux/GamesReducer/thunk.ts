import API from "../../API/API";
import { updateWords, setPending,nullify } from "./actions";

export const getWords = (group: number, page: number) => (dispatch: any) => {


    dispatch(setPending(true));

    dispatch(nullify());

    try {
        API.getWordsByGroupPage(group, page)
            .then(words => {
                dispatch(updateWords(words));
                dispatch(setPending(false));
            })
    } catch (error) {
        console.error(`Unhandled rejection, status.code=${error.message}`);
    }

}


export const getAggregatedWords = (userId: string,  type:Array<string>, group:number, page:number, token: string,isTextBook:boolean) => (dispatch:any) => {
  const arr = type.map((t: string) => ({"userWord.difficulty": t}));
  if(isTextBook){
    // @ts-ignore
    arr.push({"userWord":null})
  }
  const params = {"$or": arr};
  console.log()
  API.getAggregatedWordsByParams(userId, params, group, page, token)
    .then(res => {
      const {paginatedResults} = res[0];
      dispatch(updateWords(paginatedResults));
      dispatch(setPending(false));
    })
}

