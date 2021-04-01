import {connect} from "react-redux";
import DictionaryContent from "./DictionaryContent";

const MapStateToProps = ({dictionary}: any) => {
    const {currSection} = dictionary;
    return {
        currSection: currSection.number,
        words: dictionary.words,
        options: currSection.options,
    }
}

export default connect(MapStateToProps)(DictionaryContent)
