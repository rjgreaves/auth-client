/**
 * SignInContainer selectors
 */

import { createSelector } from 'reselect';

const selectApp = (state) => state.get('global');

const makeSelectAuthenticated = () => createSelector(
  selectApp,
  (appState) => appState.get('authenticated')
);

export {
  selectApp,
  makeSelectAuthenticated
};
