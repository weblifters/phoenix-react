import axios from 'axios';

//Set this to whatever port your node server is listening on
const ROOT_URL = 'http://localhost:8000/api/';

export const POST_SQL_QUERY= 'POST_SQL_QUERY';
export const UPDATE_SQL_QUERY = 'UPDATE_SQL_QUERY';

export function updateSqlQuery(query) {
  return {
    type: UPDATE_SQL_QUERY,
    payload: query
  };
}

export function postSqlQuery(query) {
  console.log('>>>query', query);
  const request = axios.post(`${ROOT_URL}user/save-user-query`, {
    query: query,
    userid: '56a3db668b69b8f197165da7'
  }).then(response => { 
    console.log(response);
    return response.data; 
  }).catch(response => console.log(response));
  return {
    type: POST_SQL_QUERY, 
    payload: request
  };
}
