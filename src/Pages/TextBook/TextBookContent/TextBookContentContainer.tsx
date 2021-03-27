import {connect} from "react-redux";
import TextBookContent from "./TextBookContent";

const MapStateToProps = ({textBook}:any) => ({
    words: textBook.words,
    options: ['в сложные', 'в изучаемые']
})

export default connect(MapStateToProps)(TextBookContent)
