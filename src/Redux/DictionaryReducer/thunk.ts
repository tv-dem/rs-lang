import API from "../../API/API";
import {updateWords} from "../TextBookReducer/actions";

export const getTextBookWordsTC = (group: number, page:number) => ((dispatch:any)=>{
    API.getWordsByGroupPage(group, page)
        .then(words => {
            dispatch(updateWords(words));
        })
})
