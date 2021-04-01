import { AUTH_USER_STARTED } from './actionTypes';

export interface CurrentUser {
  id: string;
  email: string;
}
export interface AuthUserStarted {
  type: string;
  payload: '';
}

export interface CreateUserSuccess {
  type: string;
  payload: CurrentUser;
}

export interface CreateUserFailure {
  type: string;
  payload: string;
}
