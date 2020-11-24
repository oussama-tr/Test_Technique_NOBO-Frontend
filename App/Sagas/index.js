import { takeLatest, all } from 'redux-saga/effects'
import { UserTypes } from 'App/Stores/User/Actions'
import { ServiceTypes } from 'App/Stores/Service/Actions'
import { fetch, cancel } from './Service'
import { register, login } from './User'

export default function* root() {
  yield all([
    takeLatest(UserTypes.REGISTER, register),
    takeLatest(UserTypes.LOGIN, login),
    takeLatest(ServiceTypes.FETCH, fetch),
    takeLatest(ServiceTypes.CANCEL, cancel),
  ])
}
