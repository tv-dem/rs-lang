import {changeHeaderTitleAC} from "../../Redux/HeaderReducer/actions";
import {connect} from "react-redux";
import Games from "./Games";

const MapDispatchToProps = (dispatch:any) => ({
    onLoad: () => dispatch(changeHeaderTitleAC('Игры'))
})

const GamesContainer = connect(null, MapDispatchToProps)(Games)

export default GamesContainer;
