import { connect } from "react-redux";
import WelcomForm from "./WelcomForm";
import {
  setCurrentCard,
  nullify,
  setLevel,
  setPage,
  setPercent,
  setIsCheck
} from "../../../Redux/GamesReducer/actions";
import { getWords } from "../../../Redux/GamesReducer/thunk";

const mapStateToProps = (state: any) => ({
  pathname: state.router.location.pathname,
  currentGame: state.games.currentGame,
  words:state.games.words,
  level:state.games.level,
  page:state.games.page
});

const mapDispatchToProps = (dispatch: any) => ({
  setCurrentCard: (pathRoute: string) => dispatch(setCurrentCard(pathRoute)),
  fetchWords: (group: number, page: number) => dispatch(getWords(group, page)),
  nullify: () => dispatch(nullify()),
  setLevel: (level:number) => dispatch(setLevel(level)),
  setPage: (page:number) => dispatch(setPage(page)),
  setPercent:(percent:number)=>dispatch(setPercent(percent)),
  setIsCheck:(isCheck:boolean)=>dispatch(setIsCheck(isCheck))

});

const WelcomFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(WelcomForm);

export default WelcomFormContainer;
