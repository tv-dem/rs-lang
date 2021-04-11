import { connect } from "react-redux";
import Savanna from "./Savanna";
import { setCurrentWord, setCount, addRightWord, addWrongWord, setIsCheck,setPercent } from "../../../Redux/GamesReducer/actions";
import { getWords } from '../../../Redux/GamesReducer/thunk'

const mapStateToProps = (state: any) => ({
  pathname: state.router.location.pathname,
  words: state.games.words,
  count: state.games.count,
  right: state.games.right,
  wrong: state.games.wrong,
  currentWord: state.games.currentWord,
  pending: state.games.pending,
  level: state.games.level,
  page: state.games.page,
  isCheck: state.games.isCheck,
  bestLine:state.games.bestLine,
});

const mapDispatchToProps = (dispatch: any) => ({
  setCurrentWord: (word: Object) => dispatch(setCurrentWord(word)),
  setCount: (count: number) => dispatch(setCount(count)),
  fetchWords: (group: number, page: number) => dispatch(getWords(group, page)),
  addRightWord: (word: Object) => dispatch(addRightWord(word)),
  addWrongWord: (word: Object) => dispatch(addWrongWord(word)),
  setIsCheck: (isCheck: boolean) => dispatch(setIsCheck(isCheck)),
  setPercent:(percent:number)=>dispatch(setPercent(percent)),
})

const SavannaContainer = connect(mapStateToProps, mapDispatchToProps)(Savanna);

export default SavannaContainer;
