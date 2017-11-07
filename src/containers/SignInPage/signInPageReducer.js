/**
 * Created by reube on 19/07/2017.
 */

import { fromJS } from 'immutable';

import { 
  AUTH_USER,
  UNAUTH_USER,
  AUTH_ERROR,
  CHANGE_EMAIL,
  CHANGE_PASSWORD,
} from './constants';

const initialState = fromJS({
  email: '',
  password: '',
  errorMessage: '',
  authenitcated: false
});

export default function(state = initialState, action) {
  switch (action.type) {
    case CHANGE_EMAIL:
      return state.set('email', action.payload);
    case CHANGE_PASSWORD:
      return state.set('password', action.payload);
    case AUTH_USER:
      return { ...state, error: '', authenticated: true };
    case UNAUTH_USER:
      return { ...state, authenticated: false };
    case AUTH_ERROR:
      return state.set('errorMessage', action.payload);
    default:
      return state;
  }
}
