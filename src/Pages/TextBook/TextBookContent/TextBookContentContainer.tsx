import {connect} from "react-redux";
import TextBookContent from "./TextBookContent";

const MapStateToProps = ({textBook}:any) => ({
    words: textBook.words,
})

export default connect(MapStateToProps)(TextBookContent)
