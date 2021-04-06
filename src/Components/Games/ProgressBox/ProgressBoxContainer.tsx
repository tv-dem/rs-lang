import { connect } from "react-redux";
import ProgressBox from "./ProgressBox";
import {setPercent} from "../../../Redux/GamesReducer/actions";

const mapStateToProps = (state: any) => ({
  percent:state.games.percent,
});

const mapDispatchToProps = (dispatch:any) => ({
    setPercent:(percent:number)=>dispatch(setPercent(percent))
})

const ProgressBoxContainer = connect(mapStateToProps,mapDispatchToProps)(ProgressBox);

export default ProgressBoxContainer;
