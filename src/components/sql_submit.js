import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions         from '../actions';

class SqlSubmit extends Component {

  componentWillMount() {
    this.props.getRecentQueries();
  }

  constructor(props) {
    super(props);

    this.state = {
      sqlQuery: ''
    };
  }

  updateQuery(query) {
    this.setState({
      sqlQuery: query.target.value
    });
  }

  submitQuery() {
    this.props.postSqlQuery(this.state.sqlQuery);
  }

  selectQuery(query) {
    this.updateQuery({target: { value: query.query } });
  }

  render() {
    return <div>
      <textarea id="queryBox" className="form-control" rows="8"
        defaultValue="Enter SQL Query"
        value={this.state.sqlQuery}
        onChange={this.updateQuery.bind(this)}>
      </textarea>
      <button id="sendQuery" type="button" className="btn btn-primary" onClick={this.submitQuery.bind(this)}>Submit</button>
      <div>
        <h3>Recent Queries</h3>
        <ul className="past-queries">
          {this.props.recentQueries.map((query, i) => {
            return <li className="old-query" key={i} onClick={this.selectQuery.bind(this, query)}> {query.query} </li>
          })}
        </ul>
      </div>
    </div>
  }
}

function mapStateToProps({ recentQueries }) {
  return {
    recentQueries
  };
}

export default connect(mapStateToProps, actions)(SqlSubmit);
