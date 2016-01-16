import { combineReducers } from 'redux';
import CurrentSqlQuery from './current_sql_query';

const rootReducer = combineReducers({
  currentSqlQuery: CurrentSqlQuery
});

export default rootReducer;
