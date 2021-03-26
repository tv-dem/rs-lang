import {changeHeaderTitleAC} from "../../Redux/HeaderReducer/actions";
import {connect} from "react-redux";
import Statistic from "./Statistic";

const MapDispatchToProps = (dispatch:any) => ({
    onLoad: () => dispatch(changeHeaderTitleAC('Статистика'))
})

const StatisticContainer = connect(null, MapDispatchToProps)(Statistic)

export default StatisticContainer;
