import ReactDOM from 'react-dom';
import React from 'react';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';  
import configureStore from './store/configureStore';
import routes from './routes';
import { AUTH_USER } from './containers/SignInPage/constants';

// Initialize store
const store = configureStore();

const token = localStorage.getItem('token');

// If we have a token consider the user logged in
if(token) {
    // we need to update application state
    store.dispatch({ type: AUTH_USER });
}

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>, document.getElementById('root')
);
