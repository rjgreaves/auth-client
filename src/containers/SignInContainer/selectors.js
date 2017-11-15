/**
 * SignInContainer selectors
 */

import { createSelector } from 'reselect';

const selectSignIn = (state) => state.get('signInContainer');

const makeSelectEmail = () => createSelector(
  selectSignIn,
  (signInState) => signInState.get('email')
);

const makeSelectPassword = () => createSelector(
  selectSignIn,
  (signInState) => signInState.get('password')
);

const makeSelectError = () => createSelector(
  selectSignIn,
  (signInState) => signInState.get('errorMessage')
);

export {
  selectSignIn,
  makeSelectEmail,
  makeSelectPassword,
  makeSelectError
};
