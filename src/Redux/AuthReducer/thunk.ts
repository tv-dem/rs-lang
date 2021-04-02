import {
  authUserStarted,
  createUserSuccess,
  createUserFailure,
} from './actions';
import API from '../../API/API';

export const createUser = (name: string, password: string, email: string) => async (dispatch: any) => {
  dispatch(authUserStarted());

  try {
    const json = await API.createUser(name, password, email);
    dispatch(createUserSuccess(json));
  } catch (err) {
    if (err.message === '422') {
      dispatch(createUserFailure('Incorrect e-mail or password'));
    } else if (err.message === '417') {
      dispatch(createUserFailure('User with this e-mail is already exists'));
    } else {
      console.error(`Unhandled rejection, status.code=${err.message}`);
    }
  }
};
