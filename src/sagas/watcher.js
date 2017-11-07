import { fork, takeLatest } from 'redux-saga/effects';
import { signInSaga, signUpSaga } from './authSaga';
import { AUTH_SIGNIN, AUTH_SIGNUP } from '../actions/types';

// Watches for SEARCH_MEDIA_REQUEST action type asynchronously
export default function* watchAuthSaga() {
  yield fork(
    yield takeLatest(AUTH_SIGNIN, signInSaga),
    yield takeLatest(AUTH_SIGNUP, signUpSaga)
  );
}

