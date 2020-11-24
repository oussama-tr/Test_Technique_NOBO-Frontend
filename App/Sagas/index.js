import { takeLatest, all } from 'redux-saga/effects'
import { UserTypes } from 'App/Stores/User/Actions'
import { register, login } from './User'

export default function* root() {
  yield all([
    takeLatest(UserTypes.REGISTER, register),
    takeLatest(UserTypes.LOGIN, login),

  ])
}
