import { connect } from "react-redux";
import AudioCall from "./AudioCall";
import { setCurrentWord, setCount, addRightWord, addWrongWord, setIsCheck, setCurrentLine, setBestLine, setPage } from "../../../Redux/GamesReducer/actions";
import { getWords } from '../../../Redux/GamesReducer/thunk'
import { SetGameStat, UpdateGameStat } from "../../../Redux/StatReducer/actions";
import {createUserWord, setStat} from "../../../Redux/StatReducer/thunk";

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
  bestLine: state.games.bestLine,
  currentLine: state.games.currentLine,
  isSound: state.games.isSound,
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
  setBestLine: (bestLine: number) => dispatch(setBestLine(bestLine)),
  setCurrentLine: (currentLine: number) => dispatch(setCurrentLine(currentLine)),
  setPage: (page: number) => dispatch(setPage(page)),
  SetGameStat: (gameType: string, bestLine: number, total: number, correct: number) => dispatch(SetGameStat(gameType, bestLine, total, correct)),
  UpdateGameStat: (gameType: string, stat: any) => dispatch(UpdateGameStat(gameType, stat)),
  setStat: (userId: string, token: string, body: Object) => dispatch(setStat(userId, token, body)),
  createUserWord: (userId:string, wordId:string, difficulty:string, optional: Object, token:string) =>
    createUserWord(userId, wordId, difficulty, optional, token),
})

const AudioCallContainer = connect(mapStateToProps, mapDispatchToProps)(AudioCall);

export default AudioCallContainer;
