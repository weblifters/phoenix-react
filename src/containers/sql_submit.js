import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateSqlQuery, postSqlQuery } from '../actions/index'; 
 
class SqlSubmit extends Component {

  constructor(props) {
    super(props);

    this.state = { sqlQuery: '', queryResults: {} };
    
    //this binds 'this' inside of these component methods so we can update state
    this.updateQuery = this.updateQuery.bind(this);
    this.submitQuery = this.submitQuery.bind(this);
  }

  updateQuery(query) {
    this.setState({
      sqlQuery: query.target.value 
    });
    this.props.updateSqlQuery(this.state.sqlQuery);//might not be necessary
  }

  submitQuery(query) {
    console.log(this.state.sqlQuery);
    this.props.postSqlQuery(this.state.sqlQuery);
  }
  
  render() {
    return (
      <div>
        <textarea id="queryBox" className="form-control" rows="8"
          defaultValue="Enter SQL Query"
          value={this.state.sqlQuery}
          onChange={this.updateQuery}>
        </textarea>
        <button id="sendQuery" type="button" className="btn btn-primary" onClick={this.submitQuery}>Submit</button>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ updateSqlQuery, postSqlQuery }, dispatch);
}

export default connect(null, mapDispatchToProps)(SqlSubmit);
