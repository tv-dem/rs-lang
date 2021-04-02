import { connect } from 'react-redux';
import SignInForm from './SignInForm';
import { createUser } from '../../Redux/AuthReducer/thunk';
import { createUserFailure } from '../../Redux/AuthReducer/actions';

const mapStateToProps = (state: any) => ({
  createUserError: state.auth.authError,
  createUserLoading: state.auth.isLoading,
});

const mapDispatchStateToProps = {
  createUser,
  createUserFailure,
};

export default connect(mapStateToProps, mapDispatchStateToProps)(SignInForm);
