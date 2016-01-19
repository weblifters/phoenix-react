import React, { Component } from 'react';
import { connect } from 'react-redux';
 
class QueryGrid extends Component {

  constructor(props) {
    super(props);
  }

  propTypes: {
  	sqlQueryResults: React.PropTypes.array
  };

  render() {
  	console.log(">>>> sqlQueryResults", this.props.sqlQueryResults);

    let content = <p>Enter a SQL query into the text area above to generate a report.</p>;
    if (this.props.sqlQueryResults){
      content = (
        <div>
        <table className="table">
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
              console.log(row);
              return (<tr key={index}>
                  {row.map((column, index) => {
                    return <td key={index}>{column}</td>;
                  })}  
                </tr>)
                }
            )}

            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
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
