/**
 * Created by reube on 17/07/2017.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux'
import { compose } from 'redux'
import { createStructuredSelector } from 'reselect';

import injectReducer from '../../utils/injectReducer';
import injectSaga from '../../utils/injectSaga';
import reducer from './reducer';
import saga from './saga';
import { changeEmail, changePassword, signIn } from './actions';
import { makeSelectEmail, makeSelectPassword, makeSelectError } from './selectors';

class SignInContainer extends Component {

  renderAlert() {
    console.log(this.props.errorMessage);
    if (this.props.errorMessage) {
      return (
        <div className="alert alert-danger">
          <strong>Oops! </strong>{this.props.errorMessage}
        </div>
      )
    }
  }

  render() {

    return (
      <form onSubmit={this.props.onSubmitForm}>
        <fieldset className="form-group">
          <label>Email:</label>
          <input name="email" type="text" value={this.props.email} onChange={this.props.onChangeEmail} className="form-control" />
        </fieldset>
        <fieldset className="form-group">
          <label>Password:</label>
          <input name="password" type="password" value={this.props.password} onChange={this.props.onChangePassword} className="form-control" />
        </fieldset>
        {this.renderAlert()}
        <button action="submit" className="btn btn-primary">Sign In</button>
      </form>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  onChangeEmail: (evt) => dispatch(changeEmail(evt.target.value)),
  onChangePassword: (evt) => dispatch(changePassword(evt.target.value)),
  onSubmitForm: (evt) => {
    if (evt !== undefined && evt.preventDefault) evt.preventDefault();
    dispatch(signIn());
  }
});

const mapStateToProps = createStructuredSelector({
  email: makeSelectEmail(),
  password: makeSelectPassword(),
  errorMessage: makeSelectError(),
})

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'signInContainer', reducer });
const withSaga = injectSaga({ key: 'signInContainer', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect
)(SignInContainer);
