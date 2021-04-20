import { connect } from "react-redux";
import AudioToggle from "./AudioToggle";
import {setIsSound} from "../../../Redux/GamesReducer/actions";

const mapStateToProps = (state: any) => ({
  isSound:state.games.isSound,
});

const mapDispatchToProps = (dispatch: any) => ({
  setIsSound: (isSound: boolean) => dispatch(setIsSound(isSound)),
})

const AudioToggleContainer = connect(mapStateToProps, mapDispatchToProps)(AudioToggle);

export default AudioToggleContainer;
