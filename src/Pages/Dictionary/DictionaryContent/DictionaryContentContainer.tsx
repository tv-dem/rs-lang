import {connect} from "react-redux";
import DictionaryContent from "./DictionaryContent";

const MapStateToProps = ({textBook}:any) => ({
    words: textBook.words,
})

export default connect(MapStateToProps)(DictionaryContent)
