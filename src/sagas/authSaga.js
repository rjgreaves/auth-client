import { put, call } from 'redux-saga/effects';

export function* loginSaga({ payload }){
    console.log(`calling login in for :${payload.email}:${payload.password}`);
}