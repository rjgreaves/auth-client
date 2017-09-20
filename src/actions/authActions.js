import {
    AUTH_SIGNIN,
    AUTH_USER,
    AUTH_ERROR
} from './types';

export const signInUser = (email, password) => ({
    type: AUTH_SIGNIN,
    payload: { email, password }
});

export const authUser = (token) => ({
    type: AUTH_USER
});

export const authError = (error) => ({
    type: AUTH_ERROR,
    payload: error
});