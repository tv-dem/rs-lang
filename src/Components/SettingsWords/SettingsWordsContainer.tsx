import {connect} from "react-redux";
import SettingsWords from "./SettingsWords";
import {setSettings} from "../../Redux/UserReducer/actions";

const mapStateToProps = ({user, auth}:any) => ({
    options: user.options,
    translate: user.translate,
    isAuth: auth.isAuth,
})

const mapDispatchToProps = (dispatch:any) => ({
    setSettings: (translate:boolean, options:boolean) => dispatch(setSettings(translate, options))
})
const SettingsWordsContainer = connect(mapStateToProps, mapDispatchToProps)(SettingsWords);
export default SettingsWordsContainer;
