import { connect } from "react-redux";
import Savanna from "./Savanna";
import { setCurrentWord, setCount, addRightWord, addWrongWord, setIsCheck,setPercent,setValHearts,setPage, setCurrentLine } from "../../../Redux/GamesReducer/actions";
import { getWords } from '../../../Redux/GamesReducer/thunk'
import {SetGameStat, UpdateGameStat} from "../../../Redux/StatReducer/actions";
import {setStat} from "../../../Redux/StatReducer/thunk";

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
  hearts:state.games.hearts,
  currentLine:state.games.currentLine,
  userId: state.auth.currentUser.userId,
  token: state.auth.currentUser.token,
  body: state.stat.stat,
});

const mapDispatchToProps = (dispatch: any) => ({
  setCurrentWord: (word: Object) => dispatch(setCurrentWord(word)),
  setCount: (count: number) => dispatch(setCount(count)),
  fetchWords: (group: number, page: number) => dispatch(getWords(group, page)),
  addRightWord: (word: Object) => dispatch(addRightWord(word)),
  addWrongWord: (word: Object) => dispatch(addWrongWord(word)),
  setIsCheck: (isCheck: boolean) => dispatch(setIsCheck(isCheck)),
  setPercent:(percent:number)=>dispatch(setPercent(percent)),
  setValHearts:(hearts:number)=>dispatch(setValHearts(hearts)),
  setPage:(page:number)=>dispatch(setPage(page)),
  setCurrentLine:(currentLine:number)=>dispatch(setCurrentLine(currentLine)),
  SetGameStat: (gameType: string, bestLine:number, total:number,correct:number)=>dispatch(SetGameStat(gameType, bestLine, total,correct)),
  UpdateGameStat: (gameType: string, bestLine:number, total:number,correct:number)=>dispatch(UpdateGameStat(gameType, bestLine, total,correct)),
  setStat: (userId:string, token:string, body:Object)=> dispatch(setStat(userId, token, body)),
})

const SavannaContainer = connect(mapStateToProps, mapDispatchToProps)(Savanna);

export default SavannaContainer;
