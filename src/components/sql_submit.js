import React, { Component } from 'react';

class SqlSubmit extends Component {

  constructor(props) {
    super(props);

    this.state = { sqlQuery: '' };
    
    //this binds 'this' inside of these component methods so we can update state
    this.updateQuery = this.updateQuery.bind(this);
    this.submitQuery = this.submitQuery.bind(this);
  }

  updateQuery(query) {
    this.setState({
      sqlQuery: query.target.value 
    });
  }

  submitQuery(query) {
    console.log(this.state.sqlQuery);
    //use axios to make api call
  }
  
  render() {
    return (
      <div>
        <textarea 
          defaultValue="Enter SQL Query"
          value={this.state.sqlQuery}
          onChange={this.updateQuery}>
        </textarea>
        <button onClick={this.submitQuery}>Submit</button>
      </div>
    );
  }
}

export default SqlSubmit;
