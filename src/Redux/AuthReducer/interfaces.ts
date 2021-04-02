export interface NewUser {
  id: string;
  name: string;
  email: string;
}

export interface CurrentUser {
  message: string;
  token: string;
  refreshToken: string;
  userId: string;
  name: string;
}
export interface AuthUserStarted {
  type: string;
  payload: '';
}

export interface CreateUserSuccess {
  type: string;
  payload: NewUser;
}

export interface CreateUserFailure {
  type: string;
  payload: string;
}

export interface AuthUserFailure {
  type: string;
  payload: string;
}

export interface AuthUserSuccess {
  type: string;
  payload: CurrentUser;
}

export interface SetIsAuthUser {
  type: string;
  payload: boolean;
}
