import API from "../../API/API";
import { updateWords, setPending, nullifyRightWord, nullifyWrongWord, setCount } from "./actions";

export const getWords = (group: number, page: number) => (dispatch: any) => {

    dispatch(setPending(true));
    dispatch(nullifyRightWord());
    dispatch(nullifyWrongWord());
    dispatch(setCount(0));

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


