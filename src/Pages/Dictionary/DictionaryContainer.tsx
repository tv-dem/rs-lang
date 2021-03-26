import {changeHeaderTitleAC} from "../../Redux/HeaderReducer/actions";
import {connect} from "react-redux";
import Dictionary from "./Dictionary";
import {changeDictionaryPageAC, changeSectionAC} from "../../Redux/DictionaryReducer/actions";
import {push} from "connected-react-router";

const mapStateToProps = ({dictionary}:any) => ({
    sections: dictionary.sections,
    currSection: dictionary.currSection,
    currPage: dictionary.currPage,
})

const MapDispatchToProps = (dispatch:any) => ({
    onLoad: () => dispatch(changeHeaderTitleAC('Словарь')),
    onSelectSection: (section:any) => dispatch(changeSectionAC(section)),
    onSelectPage: (page:number, currSection:any) =>{
        dispatch(changeDictionaryPageAC(page))
        dispatch(push(`/dictionary/${currSection.section}/${page}`))
    },
})

const DictionaryContainer = connect(mapStateToProps, MapDispatchToProps)(Dictionary)

export default DictionaryContainer;
