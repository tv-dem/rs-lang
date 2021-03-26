import {connect} from "react-redux";
import DictionaryContent from "./DictionaryContent";

const MapStateToProps = ({dictionary}: any) => {
    const {currSection} = dictionary;
    return {
        words: dictionary.words,
        options: currSection.options,
    }
}

export default connect(MapStateToProps)(DictionaryContent)
