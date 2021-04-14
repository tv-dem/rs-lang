import { connect } from "react-redux";
import { changeHeaderTitleAC } from "../../Redux/HeaderReducer/actions";
import NawPages from "./NawPages";

const mapStateToProps = ({ textBook, dictionary, auth }: any) => {
  console.log(dictionary)
  return {
  currDictLevel: dictionary.currLevel,
  currLevel: textBook.currLevel,
  currPage: textBook.currPage,
  currDictSection: dictionary.currSection,
  currDictPage: dictionary.currPage,
  isAuth: auth.isAuth,
}}

const mapDispatchToProps = (dispatch: any) => ({
  onChange: (title: string) => dispatch(changeHeaderTitleAC(title)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NawPages);
