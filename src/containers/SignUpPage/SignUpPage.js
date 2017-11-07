/**
 * Created by reube on 17/07/2017.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form';
import { signUpUser } from '../../actions/authActions';

class SignUpPage extends Component {

    handleFormSubmit({ email, password }) {
        this.props.signUpUser(email, password);
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
                <button action="submit" className="btn btn-primary">Sign Up!</button>
            </form>
       )
    }
}

const mapDispatchToProps = dispatch => ({
    signUpUser: (email, password) => dispatch(signUpUser(email, password)),
});

const mapStateToProps = state => {
    return {errorMessage: state.auth.error};
};

export default connect(mapStateToProps, mapDispatchToProps)(reduxForm({
    form: 'signup',
    fields: ['email', 'password']
})(SignUpPage));
