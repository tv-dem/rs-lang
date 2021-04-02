import API from "../../API/API";
import {updateWords} from "./actions";

export const getWords = (group: number, page:number) => (dispatch:any)=> {
    API.getWordsByGroupPage(group, page)
        .then(words => {           
            dispatch(updateWords(words));
        })
}
