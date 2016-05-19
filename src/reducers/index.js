import { combineReducers } from 'redux';
import CurrentSqlQuery from './current_sql_query';
import SqlQueryResults from './sql_query_results';
import GetUser from './get_user';
import { reducer as formReducer } from 'redux-form';
import authenticationReducer from './authentication';

const rootReducer = combineReducers({
  currentSqlQuery: CurrentSqlQuery,
  sqlQueryResults: SqlQueryResults,
  getUser: GetUser,
  form: formReducer,
  authenticated: authenticationReducer
});

export default rootReducer;
