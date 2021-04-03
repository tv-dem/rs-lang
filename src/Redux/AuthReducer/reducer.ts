import { NewUser, CurrentUser } from './interfaces';
import {
  AUTH_USER_STARTED,
  CREATE_USER_SUCCESS,
  CREATE_USER_FAILURE,
  AUTH_USER_FAILURE,
  AUTH_USER_SUCCESS,
  SET_IS_AUTH_USER,
} from './actionTypes';
import * as actions from './actions';

const initialState = {
  isLoading: false,
  user: {} as NewUser,
  authError: '',
  currentUser: JSON.parse(localStorage.getItem('currentUser') as string) || {} as CurrentUser,
  isAuth: !!(JSON.parse(localStorage.getItem('currentUser') as string)?.token),
};

type InferValueTypes<T> = T extends { [key: string]: infer U } ? U : never;

type ActionTypes = ReturnType<InferValueTypes<typeof actions>>;

const authReducer = (state = initialState, action: ActionTypes) => {
  switch (action.type) {
    case AUTH_USER_STARTED: {
      return {
        ...state,
        isLoading: true,
        authError: '',
      };
    }

    case CREATE_USER_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        authError: '',
        user: action.payload,
      };
    }

    case CREATE_USER_FAILURE: {
      return {
        ...state,
        isLoading: false,
        authError: action.payload,
      };
    }

    case AUTH_USER_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        authError: '',
        currentUser: action.payload,
      };
    }

    case SET_IS_AUTH_USER: {
      return {
        ...state,
        isAuth: action.payload,
      };
    }

    case AUTH_USER_FAILURE: {
      return {
        ...state,
        isLoading: false,
        authError: action.payload,
      };
    }

    default: {
      return {
        ...state
      };
    }
  }
};

export default authReducer;