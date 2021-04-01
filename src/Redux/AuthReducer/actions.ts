import { 
  AUTH_USER_STARTED,
  CREATE_USER_SUCCESS, 
  CREATE_USER_FAILURE,  
 } from './actionTypes';
 import { 
  AuthUserStarted, 
  CurrentUser, 
  CreateUserSuccess, 
  CreateUserFailure, 
} from './interfaces';

 export const authUserStarted = (): AuthUserStarted => ({
   type: AUTH_USER_STARTED,
   payload: '',
 } as const);

 export const signInUserSuccess = (user: CurrentUser): CreateUserSuccess => ({
  type: CREATE_USER_SUCCESS,
  payload: user,
} as const);

export const signInUserError = (error: string): CreateUserFailure => ({
  type: CREATE_USER_FAILURE,
  payload: error,
} as const);
