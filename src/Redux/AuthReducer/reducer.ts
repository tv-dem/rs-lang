import { CurrentUser } from './interfaces';
import { 
  AUTH_USER_STARTED,
  CREATE_USER_SUCCESS, 
  CREATE_USER_FAILURE,  
 } from './actionTypes';
 import * as actions from './actions';

 const initialState = {
   isLoading: false,
   user: {} as CurrentUser,
   error: '',
 };

 type InferValueTypes<T> = T extends {[key: string]: infer U } ? U : never;

 type ActionTypes = ReturnType<InferValueTypes<typeof actions>>;

 const authReducer = (state = initialState, action: ActionTypes) => {
  switch(action.type) {
    case AUTH_USER_STARTED: {
      return {
        ...state,
        isLoading: true,
      };
    }

    case CREATE_USER_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        user: action.payload,
      };
    }

    case CREATE_USER_FAILURE: {
      return {
        ...state,
        isLoading: false,
        error: action.payload,
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