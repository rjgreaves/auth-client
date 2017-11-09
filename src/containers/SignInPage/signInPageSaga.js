import { select, takeLatest, put, call } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import { signInUser } from '../../api/authApi';
import { authError } from './signInPageActions';
import { authUser } from '../App/appActions';
import { AUTH_SIGNIN } from './constants';
import { makeSelectEmail, makeSelectPassword } from './signInPageSelectors';

export function* signInSaga({ payload }) {
  const email = yield select(makeSelectEmail());
  const password = yield select(makeSelectPassword());
  try {
    const response = yield call(signInUser, email, password);
    console.log(response.data.token);
    yield put(authUser(response.data.token));
    yield put(push('/newsletters'));
  } catch (err) {
    console.log(err);
    if (err.status === 422) {
      console.log(err);
      yield put(authError(err.data.errorMessage));
    }
  }
}

export default function* rootSaga() {
  yield [
    takeLatest(AUTH_SIGNIN, signInSaga)
  ]
}
