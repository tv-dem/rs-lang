import {changeHeaderTitleAC} from "../../Redux/HeaderReducer/actions";
import {connect} from "react-redux";
import Dictionary from "./Dictionary";

const MapDispatchToProps = (dispatch:any) => ({
    onLoad: () => dispatch(changeHeaderTitleAC('Словарь'))
})

const DictionaryContainer = connect(null, MapDispatchToProps)(Dictionary)

export default DictionaryContainer;
