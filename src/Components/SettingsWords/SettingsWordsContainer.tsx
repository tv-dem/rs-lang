import {connect} from "react-redux";
import SettingsWords from "./SettingsWords";
import {setSettings} from "../../Redux/AuthReducer/thunk";

const mapStateToProps = ({auth}:any) => ({
    options: auth.userSettings.options,
    translate: auth.userSettings.translate,
    isAuth: auth.isAuth,
    userId: auth.currentUser.userId,
    token: auth.currentUser.token,
})

const mapDispatchToProps = (dispatch:any) => ({
  setSettings: (userId:string, settings:any, token:string, isAuth:boolean) => dispatch(setSettings(userId, settings, token, isAuth)),
})
const SettingsWordsContainer = connect(mapStateToProps, mapDispatchToProps)(SettingsWords);
export default SettingsWordsContainer;
