import { connect } from "react-redux";
import Games from "./Games";

const mapStateToProps = (state: any) => ({
  cards: state.games.cards,
});

const GamesContainer = connect(mapStateToProps)(Games);

export default GamesContainer;
