import React from "react";
import {connect} from "react-redux";
import Header from "./Header";

const mapStateToProps = ({header}:any) => ({
    title: header.title,
})
export default connect(mapStateToProps)(Header);
