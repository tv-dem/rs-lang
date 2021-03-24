import React from "react";
import {connect} from "react-redux";
import {changeHeaderTitleAC} from "../../Redux/HeaderReducer/actions";
import NawPages from "./NawPages";

const mapDispatchToProps = (dispatch:any) => ({
    onChange: (title:string) => dispatch(changeHeaderTitleAC(title)),
})
export default connect(null, mapDispatchToProps)(NawPages);
