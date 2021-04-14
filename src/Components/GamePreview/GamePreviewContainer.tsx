// import {changeHeaderTitleAC} from "../../Redux/HeaderReducer/actions";
import {connect} from "react-redux";
import {getAggregatedWords} from "../../Redux/GamesReducer/thunk";
import GamePreview from "./GamePreview";

const mapStateToProps = ({auth}:any) => ({
  userId: auth.currentUser.userId,
  token: auth.currentUser.token,
})

const MapDispatchToProps = (dispatch:any) => ({
  getAggregatedWords: (userId: string,  type:Array<string>, group:number, page:number, token: string,isTextBook:boolean) => dispatch(getAggregatedWords(userId, type, group, page, token,isTextBook)),
})

const GamePreviewContainer = connect(mapStateToProps, MapDispatchToProps)(GamePreview)


export default GamePreviewContainer;
