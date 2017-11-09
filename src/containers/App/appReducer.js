/*
 * AppReducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */

import { fromJS } from 'immutable';

import { 
  AUTH_USER,
  UNAUTH_USER
} from './constants';

// The initial state of the App
const initialState = fromJS({
  loading: false,
  error: false,
  currentUser: false,
  userData: {
    repositories: false,
  },
  authenticated: false
});

function appReducer(state = initialState, action) {
  switch (action.type) {
    case AUTH_USER:
    localStorage.setItem('token', action.payload);
    console.log('User authed');
    return state.set('authenticated', true);
  case UNAUTH_USER:
    localStorage.removeItem('token');
    console.log('User un-authed');
    return state.set('authenticated', false);
  default:
      return state;
  }
}

export default appReducer;
