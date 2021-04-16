import { push } from 'connected-react-router';
import {
  authUserStarted,
  createUserSuccess,
  createUserFailure,
  authUserSuccess,
  authUserFailure,
  setIsAuthUser,
  setUserSettings,
  refreshUserToken,
} from './actions';
import API from '../../API/API';

export const createUser = (name: string, password: string, email: string, avatar: string) => async (dispatch: any) => {
  dispatch(authUserStarted());

  try {
    const json = await API.createUser(name, password, email, avatar);
    dispatch(createUserSuccess(json));
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

export const getUserSettings = (userId: string, token: string) => async (dispatch: any) => {
  try {
    const json = await API.getUserSettings(userId, token);
    dispatch(setUserSettings(json.optional));
  } catch (err) {
    if (err.message === '401') {
      console.error('Access token is missing or invalid');
    } else if (err.message === '404') {
      console.error(`Settings not found`);
    } else {
      console.error(`Unhandled rejection, status.code=${err.message}`);
    }
  }
}

export const setSettings = (userId: string, settings: Object, token: string, isAuth: boolean) => (dispatch: any) => {
  if (isAuth) {
    API.updateUserSettings(userId, settings, token)
  }
  dispatch(setUserSettings(settings))
}

export const loginUser = (email: string, password: string) => async (dispatch: any) => {
  dispatch(authUserStarted());

  try {
    const json = await API.signInUser(email, password);
    dispatch(authUserSuccess(json));
    dispatch(setIsAuthUser(true));
    localStorage.setItem('currentUser', JSON.stringify(json));
    dispatch(push('/'));
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

export const getNewUserToken = (userId: string, refreshToken: string) => async (dispatch: any) => {
  dispatch(authUserStarted());

  try {
    const json = await API.getNewToken(userId, refreshToken);
    const currentUser = JSON.parse(String(localStorage.getItem('currentUser')));
    dispatch(refreshUserToken({ ...currentUser, ...json }));
    dispatch(setIsAuthUser(true));
    localStorage.setItem('currentUser', JSON.stringify({ ...currentUser, ...json }));
  } catch (err) {
    if (err.message === '403') {
      dispatch(authUserFailure('Access token is missing, expired or invalid'));
      localStorage.removeItem('currentUser');

      setTimeout(() => {
        dispatch(push('/authorization'));
      }, 1000);

      dispatch(authUserFailure(''));
    } else {
      console.error(`Unhandled rejection, status.code=${err.message}`);
    }

    setIsAuthUser(false);
  }
};
