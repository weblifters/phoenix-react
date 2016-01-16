import React from 'react';
import { Component } from 'react';
import SqlSubmit from '../containers/sql_submit';

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>Enter SQL Query</h1>
        <SqlSubmit />
      </div>
    );
  }
}
