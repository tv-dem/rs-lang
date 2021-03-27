import {changeHeaderTitleAC} from "../../Redux/HeaderReducer/actions";
import {connect} from "react-redux";
import MainPage from "./MainPage";

const MapDispatchToProps = (dispatch:any) => ({
    onLoad: () => dispatch(changeHeaderTitleAC('Домашняя'))
})

const MainPageContainer = connect(null, MapDispatchToProps)(MainPage)

export default MainPageContainer;
