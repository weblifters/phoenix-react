import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateSqlQuery, postSqlQuery, getUser } from '../actions/index';

class SqlSubmit extends Component {

  constructor(props) {
    super(props);

    this.state = {
      queryResults: {},
      user: { queries: [] },
      sqlQuery: 'SELECT FIRST_NAME, LAST_NAME, MAILING_STATE FROM STUDENTS'
    };

    //this binds 'this' inside of these component methods so we can update state
    this.updateQuery = this.updateQuery.bind(this);
    this.submitQuery = this.submitQuery.bind(this);
    this.getUser();
  }

  updateQuery(query) {
    this.setState({
      sqlQuery: query.target.value
    });
    this.props.updateSqlQuery(this.state.sqlQuery); //might not be necessary
  }

  submitQuery() {
    console.log('this.state.sqlQuery', this.state.sqlQuery);
    this.props.postSqlQuery(this.state.sqlQuery).then( response => {
      console.log('RESPONSE', response);
      this.getUser();
    });
  }

  getUser() {
    var that = this
    var promise = this.props.getUser();
    promise.then(function(data){
      that.setState({
        user: data.payload
      })
    });
  }

  selectQuery(query) {
    this.updateQuery({target: { value: query.query } });
  }

  render() {
    return (
      <div>
        <textarea id="queryBox" className="form-control" rows="8"
          defaultValue="SELECT FIRST_NAME, LAST_NAME, MAILING_STATE FROM STUDENTS"
          value={this.state.sqlQuery}
          onChange={this.updateQuery}>
        </textarea>
        <button id="sendQuery" type="button" className="btn btn-primary" onClick={this.submitQuery}>Submit</button>
        <div>
          <h3>Recent Queries</h3>
          <ul className="past-queries">
            {this.state.user.queries.map( (query, i) => {
              return <li className="old-query" key={i} onClick={this.selectQuery.bind(this, query)}> {query.query} </li>
             })}
          </ul>
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ updateSqlQuery, postSqlQuery, getUser }, dispatch);
}

export default connect(null, mapDispatchToProps)(SqlSubmit);
