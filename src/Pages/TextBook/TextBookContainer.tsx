import {changeHeaderTitleAC} from "../../Redux/HeaderReducer/actions";
import {connect} from "react-redux";
import TextBook from "./TextBook";

const MapStateToProps = ({textBook}:any) => ({
    words: textBook.words,
})

const MapDispatchToProps = (dispatch:any) => ({
    onLoad: () => dispatch(changeHeaderTitleAC('Учебник'))
})

const TextBookContainer = connect(MapStateToProps, MapDispatchToProps)(TextBook)

export default TextBookContainer;
