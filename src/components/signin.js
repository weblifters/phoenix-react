import React from 'react';
import { Component } from 'react';
import { connect }          from 'react-redux';
import * as actions         from '../actions';
import { reduxForm } from 'redux-form';

class Signin extends Component {
  handleFormSubmit(formProps) {
    this.props.signinUser(formProps);
  }

  renderAlert() {
    if (this.props.errorMessage) {
      return <div className="alert alert-danger">
        <strong>Oops! </strong> {this.props.errorMessage}
      </div>
    }
  }

  render() {
    const { handleSubmit, fields: { email, password }} = this.props;

    return <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))} >
      <fieldset className="form-group">
        <label>Email:</label>
        <input {...email} className="form-control"></input>
      </fieldset>
      <fieldset className="form-group">
        <label>Password:</label>
        <input {...password} type="password" className="form-control"></input>
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

export default reduxForm({
  form: 'signin',
  fields: ['email', 'password']
}, mapStateToProps, actions)(Signin);
