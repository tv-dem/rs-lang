import { connect } from "react-redux";
import BestLine from "./BestLine";
import {setCurrentLine, setBestLine} from "../../../Redux/GamesReducer/actions";

const mapStateToProps = (state: any) => ({
  bestLine:state.games.bestLine,
  currentLine:state.games.currentLine,
});

const mapDispatchToProps = (dispatch:any) => ({
    setCurrentLine:(currentLine:number)=>dispatch(setCurrentLine(currentLine)),
    setBestLine:(bestLine:number)=>dispatch(setBestLine(bestLine)),
})

const BestLineContainer = connect(mapStateToProps,mapDispatchToProps)(BestLine);

export default BestLineContainer;
