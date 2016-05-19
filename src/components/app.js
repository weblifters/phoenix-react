import React, { Component } from 'react';
import SqlSubmit            from './sql_submit';
import QueryGrid            from './query_grid';
import Header               from './header';

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        {this.props.children}
      </div>
    );
  }
}

// <h1 id="title">Enter a SQL Query</h1>
// <SqlSubmit />
// <QueryGrid />
