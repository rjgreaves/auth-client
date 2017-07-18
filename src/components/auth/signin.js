/**
 * Created by reube on 17/07/2017.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { Field, reduxForm } from 'redux-form';
import {signInUser } from '../../actions';

class SignIn extends Component {

    handleFormSubmit({ email, password }) {
        console.log(email, password);
        this.props.signInUser({email, password});
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
                <button action="submit" className="btn btn-primary">Sign In</button>
            </form>
       )
    }
}


const mapDispatchToProps = dispatch => ({
    signInUser
});

export default connect(null, mapDispatchToProps)(reduxForm({
    form: 'signin',
    fields: ['email', 'password']
})(SignIn));
