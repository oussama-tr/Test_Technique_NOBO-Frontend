import { put, call } from 'redux-saga/effects';
import ServiceTypes from 'App/Stores/Service/Actions';
import { serviceService } from 'App/Services/ServiceService';

export function* fetch(action) {
  yield put(ServiceTypes.fetchLoading());
  const response = yield call(serviceService.fetch, action.payload);
  if (response) {
    yield put(ServiceTypes.fetchSuccess(response));
    yield put(ServiceTypes.actionSuccess(null));
  } else {
    yield put(ServiceTypes.fetchFailure("error"));
  }
}

export function* cancel(action) {
  const response = yield call(serviceService.cancel, action.payload);
  if (response) {
    yield put(ServiceTypes.actionSuccess("should update"));
  }
}
