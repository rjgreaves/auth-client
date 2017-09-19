/**
 * Created by reube on 17/07/2017.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { Field, reduxForm } from 'redux-form';
import { loginAction } from '../actions/loginActions';

class LoginPage extends Component {

    handleFormSubmit({ email, password }) {
<<<<<<< HEAD:src/containers/LoginPage.js
        console.log(email, password);
        this.props.loginAction(email, password);
=======
        return this.props.signInUser({email, password});
    }

    renderAlert() {
        if (this.props.errorMessage) {
            return (
                <div className="alert alert-danger">
                    <strong>Oops! </strong>{this.props.errorMessage}
                </div>
            )

        }
>>>>>>> 69aa522b20359fd48bb7d95ff89817a4f9891326:src/components/auth/signin.js
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

<<<<<<< HEAD:src/containers/LoginPage.js

const mapDispatchToProps = (dispatch) => {
    return {
        loginAction: (email, password) => dispatch(loginAction(email, password))
    };
};
=======
const mapDispatchToProps = dispatch => ({
    signInUser: (email, password) => dispatch(signInUser(email, password))
});
>>>>>>> 69aa522b20359fd48bb7d95ff89817a4f9891326:src/components/auth/signin.js

const mapStateToProps = state => {
    return {errorMessage: state.auth.error};
};

export default connect(mapStateToProps, mapDispatchToProps)(reduxForm({
    form: 'signin',
    fields: ['email', 'password']
})(LoginPage));
