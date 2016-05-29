import { POST_SQL_QUERY } from '../actions/types';

export default function(state = null, action) {

  switch (action.type) {
  case POST_SQL_QUERY:
    return action.payload;
    break;
  }
  return state;
}
