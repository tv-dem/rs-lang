import {changeHeaderTitleAC} from "../../Redux/HeaderReducer/actions";
import {connect} from "react-redux";
import TextBook from "./TextBook";
import {changeLevelAC, changeTextBookPageAC} from "../../Redux/TextBookReducer/actions";
import {push} from "connected-react-router";

const MapStateToProps = ({textBook, router}:any) => ({
    words: textBook.words,
    levels: textBook.levels,
    currPage: textBook.currPage,
    currLevel: textBook.currLevel,
})

const MapDispatchToProps = (dispatch:any) => ({
    onLoad: (page:any,level:any) => {
        dispatch(changeHeaderTitleAC('Учебник'))
    },
    onSelectLevel: (level:number) => {
        console.log(level)
        dispatch(changeLevelAC(level))
    },
    onSelectPage: (page:number, currlevel:number) => {
        dispatch(changeTextBookPageAC(page))
        dispatch(push(`/textbook/${currlevel}/${page}`))
    },
})

const TextBookContainer = connect(MapStateToProps, MapDispatchToProps)(TextBook)

export default TextBookContainer;
