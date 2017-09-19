import * as types from './actionTypes';

export const loginAction = (email, password) => ({
    type: types.LOGIN,
    payload: { email, password }
});