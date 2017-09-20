import { put, call } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import { types } from '../actions/types';
import { signInUser } from '../api/authApi';
import { authUser, authError } from '../actions/authActions';

export function* signInSaga({ payload }){
    console.log(`calling login in for :${payload.email}:${payload.password}`);
    try {
        const user = yield call(signInUser, payload);
        yield put(authUser(user));
        yield put(push('/feature'));
      } catch (error) {
        yield put(authError(error));
      }
}