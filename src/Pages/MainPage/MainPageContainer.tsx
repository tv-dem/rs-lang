import { changeHeaderTitleAC } from "../../Redux/HeaderReducer/actions";
import { connect } from "react-redux";
import MainPage from "./MainPage";
import { getStat } from '../../Redux/StatReducer/thunk';

const MapDispatchToProps = (dispatch: any) => ({
    onLoad: () => dispatch(changeHeaderTitleAC('Домашняя')),
    getStat
});

const mapStateToProps = (state: any) => ({
    stat: state.stat.stat,
    isLoadStat: state.stat.isLoadStat,
    errorStat: state.stat.errorStat,
    currentUser: state.auth.currentUser,
});

const MainPageContainer = connect(mapStateToProps, MapDispatchToProps)(MainPage)

export default MainPageContainer;
