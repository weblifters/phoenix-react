import React, { Component } from 'react';
import { connect } from 'react-redux';

class QueryGrid extends Component {

  constructor(props) {
    super(props);

    this.exportCSV = this.exportCSV.bind(this);
  }

  propTypes: {
    sqlQueryResults: React.PropTypes.array
  };

  exportCSV() {
    let headers    = '#,'
      , csvContent = "data:text/csv;charset=utf-8,"
      , data
      , encodedUri
      ;

    this.props.sqlQueryResults.metaData.forEach((header, index) => {
      headers += index < this.props.sqlQueryResults.metaData.length ? header.name + ',' : header.name;
    });

    csvContent += headers + '\n';
    this.props.sqlQueryResults.rows.forEach((row, index) => {
      data = row.join(',');
      csvContent += index < this.props.sqlQueryResults.rows.length ? data + "\n" : data;
    });
    encodedUri = encodeURI(csvContent);
    window.open(encodedUri);
  }

  render() {
    let content = <p>Enter a SQL query into the text area above to generate a report.</p>;
    if (this.props.sqlQueryResults){
      content = (
        <div className="query-container">
        <button className="btn btn-primary csv" onClick={this.exportCSV}>Export As CSV</button>
        <table className="table reportGrid">
          <thead className="thead-inverse">
            <tr>
              <th>#</th>
              {this.props.sqlQueryResults.metaData.map((header, index) => {
                return <th key={index}>{header.name}</th>;
              })}
            </tr>
          </thead>
          <tbody>
            {this.props.sqlQueryResults.rows.map((row, index) => {
              row.unshift(index+1);
              return (<tr key={index}>
                  {row.map((column, index) => {
                    return <td key={index}>{column}</td>;
                  })}
                </tr>)
                }
            )}
          </tbody>
        </table>
      </div>
      );
    }
    return content;
  }
}

function query(state){
	return {
		sqlQueryResults: state.sqlQueryResults
	};
}

export default connect(query)(QueryGrid);
