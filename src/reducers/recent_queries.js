import { RECENT_QUERIES } from '../actions/types';

export default function(state = [], action) {
  switch (action.type) {
  case RECENT_QUERIES:
    return action.payload;
  }

  return state;
}
