import {connect} from "react-redux";
import TextBookContent from "./TextBookContent";
import {createUserWordTC, updateUserWordTC} from "../../../Redux/TextBookReducer/thunk";

const MapStateToProps = ({textBook, auth}: any) => ({
    currPage: textBook.currPage,
    currLevel: textBook.currLevel,
    words: textBook.words,
    options: [{
        title: 'в сложные',
        section: 'hard',
    }, {
        title: 'удалить',
        section: 'delete'
    }],
    userId: auth.currentUser.userId,
    token: auth.currentUser.token,

})

const MapDispatchToProps = (dispatch: any) => ({
    createUserWord: (wordId: string, userId: string, difficulty: string, optional: Object, token: string,group: number, page:number) =>
        dispatch(createUserWordTC(wordId, userId, difficulty, optional, token,group,page)),
    updateUserWord: (wordId: string, userId: string, difficulty: string, optional: Object, token: string,group: number, page:number) =>
        dispatch(updateUserWordTC(wordId, userId, difficulty, optional, token,group,page)),
})

export default connect(MapStateToProps, MapDispatchToProps)(TextBookContent)
