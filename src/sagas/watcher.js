import { takeLatest } from 'redux-saga/effects';
import { loginSaga } from './authSaga';
import * as types from '../actions/actionTypes';

// Watches for SEARCH_MEDIA_REQUEST action type asynchronously
export default function* watchAuthSaga() {
  yield takeLatest(types.LOGIN, loginSaga);
}