import {
  AUTH_USER_STARTED,
  CREATE_USER_SUCCESS,
  CREATE_USER_FAILURE,
  AUTH_USER_FAILURE,
  AUTH_USER_SUCCESS,
  SET_IS_AUTH_USER,
  SET_USER_SETTINGS
} from './actionTypes';
import {
  AuthUserStarted,
  NewUser,
  CreateUserSuccess,
  CreateUserFailure,
  AuthUserFailure,
  AuthUserSuccess,
  CurrentUser,
  SetIsAuthUser,
} from './interfaces';

export const setUserSettings = (settings:Object) => ({
  type: SET_USER_SETTINGS,
  payload: settings,
})


export const authUserStarted = (): AuthUserStarted => ({
  type: AUTH_USER_STARTED,
  payload: '',
} as const);

export const createUserSuccess = (user: NewUser): CreateUserSuccess => ({
  type: CREATE_USER_SUCCESS,
  payload: user,
} as const);

export const createUserFailure = (error: string): CreateUserFailure => ({
  type: CREATE_USER_FAILURE,
  payload: error,
} as const);

export const authUserFailure = (error: string): AuthUserFailure => ({
  type: AUTH_USER_FAILURE,
  payload: error,
} as const);

export const authUserSuccess = (user: CurrentUser): AuthUserSuccess => ({
  type: AUTH_USER_SUCCESS,
  payload: user,
} as const);

export const setIsAuthUser = (param: boolean): SetIsAuthUser => ({
  type: SET_IS_AUTH_USER,
  payload: param,
} as const);
