import React from 'react';
import { Component } from 'react';
import { connect }          from 'react-redux';
import * as actions         from '../actions';
import { reduxForm } from 'redux-form';

class Signup extends Component {
  handleFormSubmit(formProps) {
    this.props.signUpUser(formProps);
  }

  renderAlert() {
    if (this.props.errorMessage) {
      return <div className="alert alert-danger">
        <strong>Oops! </strong> {this.props.errorMessage}
        </div>
      }
    }

    render() {
      const { handleSubmit, fields: { email, password, passwordConfirm }} = this.props;

      return <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
        <fieldset className="form-group">
          <label>Email:</label>
          <input {...email} className="form-control"></input>
          {email.touched && email.error && <div className="alert-danger">{email.error}</div>}
        </fieldset>
        <fieldset className="form-group">
          <label>Password:</label>
          <input {...password} type="password" className="form-control"></input>
          {password.touched && password.error && <div className="alert-danger">{password.error}</div>}
        </fieldset>
        <fieldset className="form-group">
          <label>Confirm Password:</label>
          <input {...passwordConfirm} type="password" className="form-control"></input>
          {passwordConfirm.touched && passwordConfirm.error && <div className="alert-danger">{passwordConfirm.error}</div>}
        </fieldset>
        {this.renderAlert()}
        <button action="submit" className="btn btn-primary">Submit</button>
      </form>
    }
  }

  function mapStateToProps(state) {
    return {
      errorMessage: state.auth.error
    };
  }

  function validate(formProps) {
    const errors = {};

    if (!formProps.email) {
      errors.email = 'Please enter an email';
    }

    if (!formProps.password) {
      errors.password = 'Please enter a password';
    }

    if (!formProps.passwordConfirm) {
      errors.passwordConfirm = 'Please confirm password';
    }

    if (formProps.password !== formProps.passwordConfirm) {
      errors.password = 'Passwords must match';
    }

    return errors;
  }

  export default reduxForm({
    form: 'signup',
    fields: ['email', 'password', 'passwordConfirm'],
    validate
  }, mapStateToProps, actions)(Signup);
