import axios from 'axios';

import {
  ROOT_URL
} from './constants';

export function signInUser(email, password) {

  return axios.post(
    `${ROOT_URL}/signin`,
    { email, password }
  )
  // .then(response => {
  //   // - Save the JWT token
  //   return localStorage.setItem('token', response.data.token);
  // })
  .catch(err => { throw err.response; });
}

export function signUpUser({ email, password }) {

  return axios.post(
    `${ROOT_URL}/signup`,
    { email, password }
  )
  .then(response => {
    // - Save the JWT token
    return localStorage.setItem('token', response.data.token);
  })
  .catch(err => { throw err.response; });
}

