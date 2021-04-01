import React from "react";
import {connect} from "react-redux";
import Header from "./Header";

const mapStateToProps = ({header, textBook}:any) => ({
    title: header.title,
    currLevel: textBook.currLevel,
})
export default connect(mapStateToProps)(Header);
