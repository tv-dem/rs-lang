import {connect} from "react-redux";
import DictionaryContent from "./DictionaryContent";
import {updateUserWordTC} from "../../../Redux/DictionaryReducer/thunk";

const MapStateToProps = ({dictionary, auth}: any) => {
    const {currSection} = dictionary;
    return {
        currLevel: dictionary.currLevel,
        currSection: currSection.number,
        words: dictionary.words,
        options: currSection.options,
        currPage: dictionary.currPage,
        userId: auth.currentUser.userId,
        token: auth.currentUser.token,
    }
}

const mapDispatchToProps = (dispatch:any) => ({
    updateUserWord: (wordId: string, userId: string, difficulty: string,difficultyUpdate:Array<string>, optional: Object, token: string,group: number, page:number) =>
        dispatch(updateUserWordTC(wordId, userId, difficulty,difficultyUpdate, optional, token,group,page)),
})

export default connect(MapStateToProps, mapDispatchToProps)(DictionaryContent)
