import { put, call } from 'redux-saga/effects';
import UserTypes from 'App/Stores/User/Actions';
import { userService } from 'App/Services/UserService';
import NavigationService from 'App/Services/NavigationService';

export function* register(action) {
  const response = yield call(userService.register, action.payload);
  if (response) {
    yield put(UserTypes.registerSuccess(response));
    NavigationService.navigateAndReset('Home');
  } else {
    yield put(UserTypes.registerFailure(response.message));
  }
}

export function* login(action) {
  const response = yield call(userService.login, action.payload);
  if (response) {
    yield put(UserTypes.loginSuccess(response));
    NavigationService.navigateAndReset('Home');
  } else {
    yield put(UserTypes.loginFailure(response.message));
  }
}
