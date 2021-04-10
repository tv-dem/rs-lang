import { connect } from "react-redux";
import Statistic from "./Statistic";
import { getStat, onLoad } from '../../Redux/StatReducer/thunk';

const MapDispatchToProps = {
    onLoad,
    getStat
};

const mapStateToProps = (state: any) => ({
    longTermStat: state.stat.longTermStat,
    isLoadStat: state.stat.isLoadStat,
    errorStat: state.stat.errorStat,
    currentUser: state.auth.currentUser,
});

const StatisticContainer = connect(mapStateToProps, MapDispatchToProps)(Statistic)

export default StatisticContainer;
