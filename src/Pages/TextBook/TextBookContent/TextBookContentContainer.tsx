import {connect} from "react-redux";
import TextBookContent from "./TextBookContent";
import {createUserWordTC, getAggregatedWordsTC} from "../../../Redux/TextBookReducer/thunk";

const MapStateToProps = ({textBook, user}: any) => ({
    currLevel: textBook.currLevel,
    words: textBook.words,
    options: [{
        title: 'в сложные',
        section: 'hard',
    }, {
        title: 'удалить',
        section: 'delete'
    }],
    userId: user.userId,
    token: user.token,

})

const MapDispatchToProps = (dispatch: any) => ({
    createUserWord: (wordId: string, userId: string, difficulty: string, optional: Object, token: string) =>
        dispatch(createUserWordTC(wordId, userId, difficulty, optional, token)),
})

export default connect(MapStateToProps, MapDispatchToProps)(TextBookContent)
