import axios from 'axios';

//Set this to whatever port your node server is listening on
const ROOT_URL = 'localhost:8000';

export const POST_SQL_QUERY= 'POST_SQL_QUERY';
export const UPDATE_SQL_QUERY = 'UPDATE_SQL_QUERY';

export function updateSqlQuery(query) {
  return {
    type: UPDATE_SQL_QUERY,
    payload: query
  };
}

export function postSqlQuery(query) {
  const request = axios.post(ROOT_URL, {
    query: query
  }).then(response => console.log(response))
    .catch(response => console.log(response));
  return {
    type: POST_SQL_QUERY,
    payload: request
  };
}

