import { connect } from "react-redux";
import LetterSolver from "./LetterSolver";
import {setCurrentWord,setCount} from "../../../Redux/GamesReducer/actions";
import {getTextBookWordsTC} from '../../../Redux/GamesReducer/thunk'

const mapStateToProps = (state: any) => ({
  pathname: state.router.location.pathname,
  words:state.games.words,
  count:state.games.count,
  currentWord:state.games.currentWord,
});

const mapDispatchToProps = (dispatch:any) => ({
    setCurrentWord: (word:Object) => dispatch(setCurrentWord(word)),
    setCount:(count:number)=>dispatch(setCount(count)),
    getTextBookWordsTC:(group: number, page: number) =>  getTextBookWordsTC(group, page,dispatch)
})

const LetterSolverContainer = connect(mapStateToProps,mapDispatchToProps)(LetterSolver);

export default LetterSolverContainer;
