import { connect } from "react-redux";
import AudioCall from "./AudioCall";
import { setCurrentWord, setCount, addRightWord, addWrongWord, setIsCheck, setCurrentLine, setBestLine, setPage} from "../../../Redux/GamesReducer/actions";
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
  currentLine:state.games.currentLine,
  isSound:state.games.isSound,

});

const mapDispatchToProps = (dispatch: any) => ({
  setCurrentWord: (word: Object) => dispatch(setCurrentWord(word)),
  setCount: (count: number) => dispatch(setCount(count)),
  fetchWords: (group: number, page: number) => dispatch(getWords(group, page)),
  addRightWord: (word: Object) => dispatch(addRightWord(word)),
  addWrongWord: (word: Object) => dispatch(addWrongWord(word)),
  setIsCheck: (isCheck: boolean) => dispatch(setIsCheck(isCheck)),
  setBestLine:(bestLine:number)=>dispatch(setBestLine(bestLine)),
  setCurrentLine:(currentLine:number)=>dispatch(setCurrentLine(currentLine)),
  setPage:(page:number)=>dispatch(setPage(page)),
})

const AudioCallContainer = connect(mapStateToProps, mapDispatchToProps)(AudioCall);

export default AudioCallContainer;
