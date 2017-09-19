import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import HomePage from './components/HomePage';
import LoginPage from './containers/LoginPage';

// Map components to different routes.
// The parent component wraps other components and thus serves as 
// the entrance to other React components.
// IndexRoute maps HomePage component to the default route
export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="login" component={LoginPage} />
  </Route>
);

/*
              <Route path="/signin" component={SignIn}></Route>
              <Route path="/signout" component={SignOut}></Route>
              <Route path="/signup" component={SignUp}></Route>
              <Route path="/feature" component={RequireAuth(Feature)}></Route>
*/