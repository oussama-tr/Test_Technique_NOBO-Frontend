import { INITIAL_STATE } from './InitialState';
import { createReducer } from 'reduxsauce';
import { ServiceTypes } from './Actions';


export const fetchLoading = (state) => ({
  ...state,
  loading: true,
	errorMessage: null,
});

export const fetchSuccess = (state, { response }) => ({
  ...state,
  rows: response,
  loading: false,
  errorMessage: null,
});

export const fetchFailure = (state, { errorMessage }) => ({
  ...state,
  loading: false,
  errorMessage: errorMessage,
});

export const actionSuccess = (state, { response }) => ({
  ...state,
  response: response,
});

export const reducer = createReducer(INITIAL_STATE, {
  [ServiceTypes.FETCH_LOADING]: fetchLoading,
  [ServiceTypes.FETCH_SUCCESS]: fetchSuccess,
  [ServiceTypes.FETCH_FAILURE]: fetchFailure,
  [ServiceTypes.ACTION_SUCCESS]: actionSuccess,
});
