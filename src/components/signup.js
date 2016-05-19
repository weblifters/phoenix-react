import React from 'react';
import { Component } from 'react';
import { connect }          from 'react-redux';
import * as actions         from '../actions';
import { reduxForm } from 'redux-form';

export default class Signup extends Component {
  render() {
    const { handleSubmit } = this.props;
    return <form onSubmit={this.props.signin}>
        <h3>Sign Up</h3>
        <div className="form-group">
          <label>Email</label>
          <input type="text" className="form-control" />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input type="password" className="form-control" />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
  }
}

// export default reduxForm({
//   form: 'SignUp',
//   fields: ['email', 'password']
// })(Signup);

function mapStateToProps(state) {
  return {
    authenticated: state.authenticated
  };
}

export default connect(mapStateToProps, actions)(SignIn);
