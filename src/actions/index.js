import axios              from 'axios';
import { browserHistory } from 'react-router';
import {
  GET_USER,
  POST_SQL_QUERY,
  UPDATE_SQL_QUERY,
  AUTH_USER,
  AUTH_ERROR,
  UNAUTH_USER
} from './types';

//Set this to whatever port your node server is listening on
const ROOT_URL = 'http://localhost:3090';

export function signin(isLoggedIn) {
  return {
    type: AUTH_USER,
    payload: isLoggedIn
  };
}

export function getUser() {
  const request = axios.get(`${ROOT_URL}/user/get-user`, {
    username: "sunjieming"
  }).then(response => {
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
  const request = axios.post(`${ROOT_URL}/user/save-user-query`, {
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

export function signUpUser({ email, password }) {
  return function(dispatch) {
    const request = axios.post(`${ROOT_URL}/signup`, { email, password })
      .then(response => {
        dispatch({ type: AUTH_USER });
        localStorage.setItem('token', response.data.token);
        browserHistory.push('/query');
      })
      .catch(response => {
        dispatch(authError(response.data.error));
      });
  }
}

export function signinUser({ email, password }) {
  return function(dispatch) {
    const request = axios.post(`${ROOT_URL}/signin`, { email, password })
      .then(response => {
        dispatch({ type: AUTH_USER });
        localStorage.setItem('token', response.data.token);
        browserHistory.push('/query');
      })
      .catch(() => {
        dispatch(authError('Bad Sign In Info'));
      });
  }
}

export function authError(error) {
  return {
    type: AUTH_ERROR,
    payload: error
  };
}

export function signoutUser() {
  localStorage.removeItem('token');
  return { type: UNAUTH_USER };
}
