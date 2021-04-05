import { push } from 'connected-react-router';
import {
  authUserStarted,
  createUserSuccess,
  createUserFailure,
  authUserSuccess,
  authUserFailure,
  setIsAuthUser,
} from './actions';
import API from '../../API/API';

export const createUser = (name: string, password: string, email: string, avatar: string) => async (dispatch: any) => {
  dispatch(authUserStarted());

  try {
    const json = await API.createUser(name, password, email, avatar);
    dispatch(createUserSuccess(json));
    console.log(json);
    dispatch(push('/authorization'));
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

export const loginUser = (email: string, password: string) => async (dispatch: any) => {
  dispatch(authUserStarted());

  try {
    const json = await API.signInUser(email, password);
    dispatch(authUserSuccess(json));
    dispatch(setIsAuthUser(true));
    localStorage.setItem('currentUser', JSON.stringify(json));
    dispatch(push('/'));
    console.log(json);
  } catch (err) {
    if (err.message === '403') {
      dispatch(authUserFailure('Incorrect e-mail or password'));
    } else if (err.message === '404') {
      dispatch(authUserFailure(`Couldn't find a(an) this email: ${email}`));
    } else {
      console.error(`Unhandled rejection, status.code=${err.message}`);
    }

    setIsAuthUser(false);
  }
};