import { POST_SQL_QUERY, UPDATE_SQL_QUERY } from '../actions/index';

export default function(state = '', action) {
  switch (action.type) {
  case POST_SQL_QUERY:
    return ''; 
    break;
  case UPDATE_SQL_QUERY:
    return action.payload;
    break;
  }
  return state;
}
