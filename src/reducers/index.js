import { combineReducers } from 'redux';
import CurrentSqlQuery from './current_sql_query';
import SqlQueryResults from './sql_query_results';
import GetUser from './get_user';

const rootReducer = combineReducers({
  currentSqlQuery: CurrentSqlQuery,
  sqlQueryResults: SqlQueryResults,
  getUser: GetUser
});

export default rootReducer;
