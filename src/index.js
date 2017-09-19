import ReactDOM from 'react-dom';
<<<<<<< HEAD
import React from 'react';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';  
import configureStore from './store/configureStore';
import routes from './routes';
=======
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import reduxThunk from 'redux-thunk';

import App from './components/app';
import SignIn from './components/auth/signin';
import reducers from './reducers';
import SignOut from './components/auth/signout';
import SignUp from './components/auth/signup';
import Feature from './components/feature';
import RequireAuth from './components/auth/require_auth';
import Welcome from './components/welcome';
import { AUTH_USER } from './actions/types';
>>>>>>> 69aa522b20359fd48bb7d95ff89817a4f9891326

// Initialize store
const store = configureStore();

const store = createStoreWithMiddleware(reducers);

const token = localStorage.getItem('token');

// If we have a token consider the user logged in
if(token) {
    // we need to update application state
    store.dispatch({ type: AUTH_USER });
}

ReactDOM.render(
  <Provider store={store}>
<<<<<<< HEAD
    <Router history={browserHistory} routes={routes} />
  </Provider>, document.getElementById('root')
);
=======
      <Router history={browserHistory}>
          <Route path="/" component={App}>
              <IndexRoute component={Welcome}/>
              <Route path="/signin" component={SignIn}></Route>
              <Route path="/signout" component={SignOut}></Route>
              <Route path="/signup" component={SignUp}></Route>
              <Route path="/feature" component={RequireAuth(Feature)}></Route>
          </Route>
      </Router>
  </Provider>
  , document.querySelector('.container'));
>>>>>>> 69aa522b20359fd48bb7d95ff89817a4f9891326
