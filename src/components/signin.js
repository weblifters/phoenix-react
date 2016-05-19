import React from 'react';
import { Component } from 'react';
import { reduxForm } from 'redux-form';

export default class Signin extends Component {
  render() {
    const { handleSubmit } = this.props;
    return <form onSubmit={handleSubmit}>
        <h3>Sign In</h3>
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
//   form: 'SignIn',
//   fields: ['email', 'password']
// })(Signin);
