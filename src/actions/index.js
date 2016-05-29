import axios              from 'axios';
import { browserHistory } from 'react-router';
import {
  GET_USER,
  POST_SQL_QUERY,
  UPDATE_SQL_QUERY,
  AUTH_USER,
  AUTH_ERROR,
  UNAUTH_USER,
  RECENT_QUERIES
} from './types';

const ROOT_URL = 'http://localhost:3090';

export function signin(isLoggedIn) {
  return {
    type: AUTH_USER,
    payload: isLoggedIn
  };
}

export function getRecentQueries() {
  return function(dispatch) {
    axios.get(`${ROOT_URL}/user/recent-queries`, {
      headers: { authorization: localStorage.getItem('token') }
    }).then(response => {
      dispatch({ type: RECENT_QUERIES, payload: response.data });
    });
  }
}

export function updateSqlQuery(query) {
  return {
    type: UPDATE_SQL_QUERY,
    payload: query
  };
}

export function postSqlQuery(query) {
  return function(dispatch) {
    axios.post(`${ROOT_URL}/user/save-user-query`, {
      query: query
    },{
      headers: { authorization: localStorage.getItem('token') }
    }).then(response => {
      dispatch({ type: POST_SQL_QUERY, payload: response.data });
      dispatch(getRecentQueries());
    }).catch(response => console.log(response));
  }
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
