/**
 * Created by reube on 17/07/2017.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { Field, reduxForm } from 'redux-form';
import { signInUser } from '../actions/authActions';

class LoginPage extends Component {

    handleFormSubmit({ email, password }) {
        this.props.signInUser(email, password);
    }

    renderAlert() {
        if (this.props.errorMessage) {
            return (
                <div className="alert alert-danger">
                    <strong>Oops! </strong>{this.props.errorMessage}
                </div>
            )

        }
    }

    render() {

        const  { handleSubmit, fields: {email, password }} = this.props;

        return (
            <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
                <fieldset className="form-group">
                    <label>Email:</label>
                    <Field name="email" component="input" type="text" className="form-control"/>
                </fieldset>
                <fieldset className="form-group">
                    <label>Password:</label>
                    <Field name="password" component="input" type="password" className="form-control"/>
                </fieldset>
                {this.renderAlert()}
                <button action="submit" className="btn btn-primary">Sign In</button>
            </form>
       )
    }
}

const mapDispatchToProps = dispatch => ({
    signInUser: (email, password) => dispatch(signInUser(email, password))
});

const mapStateToProps = state => {
    return {errorMessage: state.auth.error};
};

export default connect(mapStateToProps, mapDispatchToProps)(reduxForm({
    form: 'signin',
    fields: ['email', 'password']
})(LoginPage));
