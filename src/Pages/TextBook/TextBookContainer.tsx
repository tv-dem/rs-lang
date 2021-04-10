import { changeHeaderTitleAC } from "../../Redux/HeaderReducer/actions";
import { connect } from "react-redux";
import TextBook from "./TextBook";
import { changeLevelAC, changeTextBookPageAC, } from "../../Redux/TextBookReducer/actions";
import { push } from "connected-react-router";
import { createUserWordTC, getAggregatedWordsTC, getTextBookWordsTC } from "../../Redux/TextBookReducer/thunk";

const MapStateToProps = ({textBook, auth}: any) => ({
    words: textBook.words,
    levels: textBook.levels,
    currPage: textBook.currPage,
    currLevel: textBook.currLevel,
    userId: auth.currentUser.userId,
    token: auth.currentUser.token,
    pending: textBook.pending,
    isAuth: auth.isAuth,
})

const MapDispatchToProps = (dispatch: any) => ({
    fetchWords: (group: number, page: number) => {
        dispatch(getTextBookWordsTC(group, page))
    },
    getAggregatedWords: (userId: string, group: number, page:number, token:string) => {
        dispatch(getAggregatedWordsTC(userId, group, page, token))
    },
    onLoad: (page: any, level: any) => {
        dispatch(changeHeaderTitleAC('Учебник'))
    },
    onSelectLevel: (level: number) => {
        dispatch(changeLevelAC(level))
    },
    onSelectPage: (page: number, currlevel: number) => {
        dispatch(changeTextBookPageAC(page))
        dispatch(push(`/textbook/${currlevel}/${page}`))
    },
})

const TextBookContainer = connect(MapStateToProps, MapDispatchToProps)(TextBook)

export default TextBookContainer;
