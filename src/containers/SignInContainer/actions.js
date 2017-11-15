import {
  AUTH_SIGNIN,
  AUTH_ERROR,
  CHANGE_EMAIL,
  CHANGE_PASSWORD
} from './constants';

/**
 * Changes the input field of the form
 *
 * @param  {name} name The new text of the input field
 *
 * @return {object}    An action object with a type of CHANGE_USERNAME
 */
export function changeEmail(name) {
  return {
    type: CHANGE_EMAIL,
    payload: name,
  };
}

export function changePassword(password) {
  return {
    type: CHANGE_PASSWORD,
    payload: password,
  };
}

export function signIn(){
  return {
    type: AUTH_SIGNIN
  };
}

export function authError(error){ 
  return {
    type: AUTH_ERROR,
    payload: error
  };
}
