import {changeHeaderTitleAC} from "../../Redux/HeaderReducer/actions";
import {connect} from "react-redux";
import Dictionary from "./Dictionary";
import {changeDictionaryPageAC, changeSectionAC,changeDictionarylevelAC} from "../../Redux/DictionaryReducer/actions";
import {push} from "connected-react-router";

const mapStateToProps = ({dictionary}:any) => ({
    levels: dictionary.levels,
    currLevel: dictionary.currLevel,
    sections: dictionary.sections,
    currSection: dictionary.currSection,
    currPage: dictionary.currPage,
})

const MapDispatchToProps = (dispatch:any) => ({
    onLoad: (title:string) => dispatch(changeHeaderTitleAC('Словарь. '+title)),
    refreshSection: (section:string) => dispatch(changeSectionAC(section)),
    refreshPage: (page:any) => dispatch(changeDictionaryPageAC(page)),
    refreshLevel: (level:any) => dispatch(changeDictionarylevelAC(level)),
    refreshPath: (currSection:any,level:number, page:number) =>{
        dispatch(push(`/dictionary/${currSection.section}/${level}/${page}`))
    },
})

const DictionaryContainer = connect(mapStateToProps, MapDispatchToProps)(Dictionary)

export default DictionaryContainer;
