import { INITIAL_STATE } from './InitialState';
import { createReducer } from 'reduxsauce';
import { UserTypes } from './Actions';


export const registerSuccess = (state, { response }) => ({
  ...state,
  user: response.user,
  token: response.token,
  registerErrorMessage: null,
});

export const registerFailure = (state, { errorMessage }) => ({
  ...state,
  user: null,
  token: null,
  registerErrorMessage: errorMessage,
});

export const loginSuccess = (state, { response }) => ({
  ...state,
  user: response.user,
  token: response.token,
  loginErrorMessage: null,
});

export const loginFailure = (state, { errorMessage }) => ({
  ...state,
  user: null,
  token: null,
  loginErrorMessage: errorMessage,
});

export const reducer = createReducer(INITIAL_STATE, {
  [UserTypes.REGISTER_SUCCESS]: registerSuccess,
  [UserTypes.REGISTER_FAILURE]: registerFailure,
  [UserTypes.LOGIN_SUCCESS]: loginSuccess,
  [UserTypes.LOGIN_FAILURE]: loginFailure,
});
