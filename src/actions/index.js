import axios from 'axios';
import { browserHistory } from 'react-router';
import {
    AUTH_USER,
    AUTH_ERROR,
    UNAUTH_USER,
    FETCH_MESSAGE
} from './types';

const ROOT_URL = 'http://localhost:3090';

export function signInUser({email, password}) {

    return function(dispatch) {

        // submit email/password to server
        axios.post(
            `${ROOT_URL}/signin`,
            { email, password }
        )
        .then(response => {
            // if request is good...
            // - Update state to authenticated
            dispatch({ type: AUTH_USER });

            // - Save the JWT token
            localStorage.setItem('token', response.data.token);

            // - Redirect to route/feature
            browserHistory.push('/feature');
        })
        .catch(err => {
            // If request is bad...
            // - Show an error to the user
            dispatch(authError('Bad Sign In Info'));
        });

    }
}

export function signUpUser({ email, password }) {
    return function (dispatch) {
        // submit email/password to server
        axios.post(`${ROOT_URL}/signup`, { email, password })
            .then(response => {
                // if request is good...
                // - Update state to authenticated
                dispatch({ type: AUTH_USER });

                // - Save the JWT token
                localStorage.setItem('token', response.data.token);

                // - Redirect to route/feature
                browserHistory.push('/feature');
            })
            .catch(err => {
                // If request is bad...
                // - Show an error to the user
                dispatch(authError(err.response.data.error));
            });
    };
}

export function authError(error) {
    return {
        type: AUTH_ERROR,
        payload: error
    };
}

export function signoutUser() {
    localStorage.removeItem('token');
    return { type: UNAUTH_USER }
}

export function fetchMessage() {
    return function(dispatch) {
        axios.get(ROOT_URL, {
            headers: {
                authorization: localStorage.getItem('token')
            }
        })
        .then((response) => {
            dispatch({
                type: FETCH_MESSAGE,
                payload: response.data.message
            })
        });
    }
}