import { connect } from "react-redux";
import WelcomForm from "./WelcomForm";
import {setCurrentCard} from "../../../Redux/GamesReducer/actions";

const mapStateToProps = (state: any) => ({
  pathname: state.router.location.pathname,
  currentGame:state.games.currentGame,
});

const mapDispatchToProps = (dispatch:any) => ({
    setCurrentCard: (pathRoute:string) => dispatch(setCurrentCard(pathRoute)),
})

const WelcomFormContainer = connect(mapStateToProps,mapDispatchToProps)(WelcomForm);

export default WelcomFormContainer;
