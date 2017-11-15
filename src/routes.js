import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App/App';
import HomePage from './components/HomePage';
import SignInContainer from './containers/SignInContainer';
import SignUpContainer from './containers/SignUpContainer';
import RequireAuth from './components/auth/Authentication';
import NewsletterListPage from './containers/NewsletterListContainer';
import NewsletterForm from './containers/NewsletterFormContainer';

// Map components to different routes.
// The parent component wraps other components and thus serves as 
// the entrance to other React components.
// IndexRoute maps HomePage component to the default route
export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="signin" component={SignInContainer} />
    <Route path="signup" component={SignUpContainer} />
    <Route path="/newsletters/:newsletterId" component={RequireAuth(NewsletterForm)}></Route>
    <Route path="/newsletters" component={RequireAuth(NewsletterListPage)}></Route>
  </Route>
);
