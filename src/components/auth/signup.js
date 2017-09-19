/**
 * Created by reube on 19/07/2017.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import * as actions from '../../actions';
import { renderField } from '../helpers/form-control-helpers';

class SignUp extends Component {

    handleFormSubmit(formProps) {
        // Call action creator to sign up user!
        this.props.signUpUser(formProps);
    }

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

        const { handleSubmit} = this.props;

        return (
            <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
                <fieldset className="form-group">
                    <fieldset className="form-group">
                        <Field name="email" component={renderField} label="Email" className="form-control"/>
                    </fieldset>
                    <fieldset className="form-group">
                        <Field name="password" component={renderField} label="Password" className="form-control" type="password"/>
                    </fieldset>
                    <fieldset className="form-group">
                        <Field name="passwordConfirm" component={renderField} label="Confirm Password" className="form-control" type="password"/>
                    </fieldset>
                </fieldset>
                {this.renderAlert()}
                <button action="submit" className="btn btn-primary">Sign up!</button>
            </form>
        );
    }
}

function validate(formProps) {
    const errors = {};

    if(!formProps.email) {
        errors.email = 'Please enter an email';
    }

    if(!formProps.password) {
        errors.password = 'Please enter a password';
    }

    if(!formProps.passwordConfirm) {
        errors.passwordConfirm = 'Please confirm your password';
    }

    if(formProps.password !== formProps.passwordConfirm) {
        errors.passwordConfirm = 'Passwords do not match!';
    }

    console.log(errors);

    return errors;
}

const mapDispatchToProps = dispatch => ({
    signUpUser: (email, password) => dispatch(signUpUser(email, password))
});

const mapStateToProps = state => {
    return {errorMessage: state.auth.error};
};

const form = reduxForm({
    form: 'signup',
    validate
});

export default connect(mapStateToProps, actions)(form(SignUp));

