import React from "react";
import {connect} from "react-redux";
import {changeHeaderTitleAC} from "../../Redux/HeaderReducer/actions";
import NawPages from "./NawPages";

const mapStateToProps = ({textBook, dictionary}:any) => ({
    currLevel: textBook.currLevel,
    currPage: textBook.currPage,
    currDictSection: dictionary.currSection,
    currDictPage: dictionary.currPage,
})

const mapDispatchToProps = (dispatch:any) => ({
    onChange: (title:string) => dispatch(changeHeaderTitleAC(title)),
})
export default connect(mapStateToProps, mapDispatchToProps)(NawPages);
