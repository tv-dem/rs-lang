import { connect } from 'react-redux';
import UserBar from './UserBar';

const mapStateToProps = (state: any) => ({
  isAuth: state.auth.isAuth,
  currentUser: state.auth.currentUser,
});

export default connect(mapStateToProps)(UserBar);
