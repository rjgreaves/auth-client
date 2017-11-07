import { put, call } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import { signUpUser } from '../../api/authApi';
import { authUser, authError } from '../../actions/authActions';

export default function* signUpSaga({ payload }) {
  console.log(`calling signup in for :${payload.email}:${payload.password}`);
  try {
    const response = yield call(signUpUser, payload);
    console.log(response);
    yield put(authUser(response));
    yield put(push('/newsletters'));
  } catch (err) {
    console.log(err);
    if (err.status === 422) {
      console.log(err);
      yield put(authError(err.data));
    }
  }
}