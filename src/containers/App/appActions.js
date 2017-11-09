import {
  AUTH_USER,
  UNAUTH_USER
} from './constants';

export function authUser(token){
  return {
    type: AUTH_USER,
    payload: token
  };
}

export function unAuthUser(){
  return {
    type: UNAUTH_USER
  };
}
