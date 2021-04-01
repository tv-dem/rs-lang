import {connect} from "react-redux";
import SettingsWords from "./SettingsWords";
import {setSettings} from "../../Redux/UserReducer/actions";

const mapStateToProps = ({user}:any) => ({
    options: user.options,
    translate: user.translate,
})

const mapDispatchToProps = (dispatch:any) => ({
    setSettings: (translate:boolean, options:boolean) => dispatch(setSettings(translate, options))
})
const SettingsWordsContainer = connect(mapStateToProps, mapDispatchToProps)(SettingsWords);
export default SettingsWordsContainer;
