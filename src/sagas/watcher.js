import { takeLatest } from 'redux-saga/effects';
import { signInSaga } from './authSaga';
import { AUTH_SIGNIN } from '../actions/types';

// Watches for SEARCH_MEDIA_REQUEST action type asynchronously
export default function* watchAuthSaga() {
  yield takeLatest(AUTH_SIGNIN, signInSaga);
}