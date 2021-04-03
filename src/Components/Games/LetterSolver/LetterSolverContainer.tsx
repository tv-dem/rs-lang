import { connect } from "react-redux";
import LetterSolver from "./LetterSolver";
import {setCurrentWord,setCount,addRightWord,addWrongWord,nullifyRightWord,nullifyWrongWord} from "../../../Redux/GamesReducer/actions";
import {getWords} from '../../../Redux/GamesReducer/thunk'

const mapStateToProps = (state: any) => ({
  pathname: state.router.location.pathname,
  words:state.games.words,
  count:state.games.count,
  right:state.games.right,
  wrong:state.games.wrong,
  currentWord:state.games.currentWord,
  currentGame: state.games.currentGame,
});

const mapDispatchToProps = (dispatch:any) => ({
    setCurrentWord: (word:Object) => dispatch(setCurrentWord(word)),
    setCount:(count:number)=>dispatch(setCount(count)),
    fetchWords:(group: number, page: number) => dispatch( getWords(group, page)),
    addRightWord:(word:Object)=>dispatch(addRightWord(word)),
    addWrongWord:(word:Object)=>dispatch(addWrongWord(word)),
    nullifyRightWord:()=>dispatch(nullifyRightWord),
    nullifyWrongWord:()=>dispatch(nullifyWrongWord),

})

const LetterSolverContainer = connect(mapStateToProps,mapDispatchToProps)(LetterSolver);

export default LetterSolverContainer;
