import axios from 'axios';

const ROOT_URL = 'http://localhost:3090';

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

