import { connect } from "react-redux";
import WelcomForm from "./WelcomForm";
import {
  setCurrentCard,
  nullifyWords,
} from "../../../Redux/GamesReducer/actions";
import { getWords, } from "../../../Redux/GamesReducer/thunk";

const mapStateToProps = (state: any) => ({
  pathname: state.router.location.pathname,
  currentGame: state.games.currentGame,
  words:state.games.words,
});

const mapDispatchToProps = (dispatch: any) => ({
  setCurrentCard: (pathRoute: string) => dispatch(setCurrentCard(pathRoute)),
  fetchWords: (group: number, page: number) => dispatch(getWords(group, page)),
  nullifyWords: () => dispatch(nullifyWords),
});

const WelcomFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(WelcomForm);

export default WelcomFormContainer;
