import API from "../../API/API";
import { updateWords } from "./actions";

export const getTextBookWordsTC = (group: number, page: number) => (dispatch: any) => {
    API.getWordsByGroupPage(group, page)
        .then(words => {
            console.log('getWordsByGroupPage')
            dispatch(updateWords(words));
        })
}
