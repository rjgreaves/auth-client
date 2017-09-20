import axios from 'axios';
import { browserHistory } from 'react-router';
import {
    AUTH_USER,
    AUTH_ERROR,
    UNAUTH_USER,
    FETCH_MESSAGE
} from '../actions/types';

const ROOT_URL = 'http://localhost:3090';

export function signInUser({ email, password }) {

    return axios.post(
        `${ROOT_URL}/signin`,
        { email, password }
    )
        .then(response => {
            // - Save the JWT token
            localStorage.setItem('token', response.data.token);
        });
}
