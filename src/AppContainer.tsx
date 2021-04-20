import { connect } from 'react-redux';
import { getUserSettings, getNewUserToken } from "./Redux/AuthReducer/thunk";
import App from './App';

const mapStateToProps = ({ auth }: any) => ({
  isAuth: auth.isAuth,
  userId: auth.currentUser.userId,
  token: auth.currentUser.token,
  refreshToken: auth.currentUser.refreshToken,
});

const mapDispatchToProps = ({
  getUserSettings,
  getNewUserToken
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
