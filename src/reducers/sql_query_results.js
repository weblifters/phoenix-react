import { POST_SQL_QUERY } from '../actions/index';

export default function(state = null, action) {
	console.log(action);

  switch (action.type) {
  case POST_SQL_QUERY:
    return action.payload; 
    break;
  }
  return state;
}
