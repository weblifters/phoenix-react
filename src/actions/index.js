import axios from 'axios';
import {
  GET_USER,
  POST_SQL_QUERY,
  UPDATE_SQL_QUERY,
  CHANGE_AUTH
} from './types';

//Set this to whatever port your node server is listening on
const ROOT_URL = 'http://localhost:8000/';

export function signin(isLoggedIn) {
  return {
    type: CHANGE_AUTH,
    payload: isLoggedIn
  };
}

export function getUser() {
  const request = axios.get(`${ROOT_URL}user/get-user`, {
    username: "sunjieming"
  }).then(response => {
    console.log('response', response);
    return response.data;
  }).catch(response => console.log(response));
  return {
    type: GET_USER,
    payload: request
  };
}

export function updateSqlQuery(query) {
  return {
    type: UPDATE_SQL_QUERY,
    payload: query
  };
}

export function postSqlQuery(query) {
  const request = axios.post(`${ROOT_URL}user/save-user-query`, {
    query: query,
    username: 'sunjieming'
  }).then(response => {
    return response.data;
  }).catch(response => console.log(response));

  return {
    type: POST_SQL_QUERY,
    payload: request
  };
}
