import { connect } from 'react-redux';
import LoginForm from './LoginForm';
import { loginUser } from '../../Redux/AuthReducer/thunk';
import { authUserFailure } from '../../Redux/AuthReducer/actions';

const mapStateToProps = (state: any) => ({
  createUserError: state.auth.authError,
  createUserLoading: state.auth.isLoading,
});

const mapDispatchStateToProps = {
  loginUser,
  authUserFailure,
};

export default connect(mapStateToProps, mapDispatchStateToProps)(LoginForm);
