import { connect } from "react-redux";
import LetterSolver from "./LetterSolver";
import {setCurrentCard} from "../../../Redux/GamesReducer/actions";

const mapStateToProps = (state: any) => ({
  pathname: state.router.location.pathname,
  currentGame:state.games.currentGame,
});

const mapDispatchToProps = (dispatch:any) => ({
    setCurrentCard: (pathRoute:string) => dispatch(setCurrentCard(pathRoute)),
})

const LetterSolverContainer = connect(mapStateToProps,mapDispatchToProps)(LetterSolver);

export default LetterSolverContainer;
