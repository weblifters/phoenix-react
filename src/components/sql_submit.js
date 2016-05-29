import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateSqlQuery, postSqlQuery, getRecentQueries } from '../actions/index';
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

    //this binds 'this' inside of these component methods so we can update state
    this.updateQuery = this.updateQuery.bind(this);
    this.submitQuery = this.submitQuery.bind(this);
    //this.getRecentQueries();
  }

  updateQuery(query) {
    this.setState({
      sqlQuery: query.target.value
    });
    this.props.updateSqlQuery(this.state.sqlQuery); //might not be necessary
  }

  submitQuery() {
    this.props.postSqlQuery(this.state.sqlQuery).then( response => {
      //this.getUser();
    });
  }

  selectQuery(query) {
    this.updateQuery({target: { value: query.query } });
  }

  render() {
    console.log('this.props', this.props);
    return <div>
      <textarea id="queryBox" className="form-control" rows="8"
        defaultValue="Enter SQL Query"
        value={this.state.sqlQuery}
        onChange={this.updateQuery}>
      </textarea>
      <button id="sendQuery" type="button" className="btn btn-primary" onClick={this.submitQuery}>Submit</button>
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

function mapStateToProps({ recentQueries, sqlQuery }) {
  return {
    recentQueries,
    sqlQuery
  };
}

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({ updateSqlQuery, postSqlQuery, getRecentQueries }, dispatch);
// }

export default connect(mapStateToProps, actions)(SqlSubmit);
