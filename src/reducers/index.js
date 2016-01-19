import { combineReducers } from 'redux';
import CurrentSqlQuery from './current_sql_query';
import SqlQueryResults from './sql_query_results';

const rootReducer = combineReducers({
  currentSqlQuery: CurrentSqlQuery,
  sqlQueryResults: SqlQueryResults
});



export default rootReducer;
