import axios from 'axios';
import {
  AUTH_USER,
  AUTH_ERROR,
  UNAUTH_USER
} from './types'; 

const ROOT_URL = 'http://localhost:3090';

/**
 *  Redux-thunk allow action creators to return a function instead
 *  These function give us access to the dispatch method of redux which allow us to create our own actions
 *  Make it easy to do conditional branching of logic
 */ 
export function signinUser({email, password}, callback) {
  return (dispatch) => {
  // Submit email/password to server
  axios.post(`${ROOT_URL}/signin`, { email, password})
    .then(response => {
    /** If request is good... 
     *  - Update state to indicate user is authenticated
     *  - Save the JWT Token
     *  - Redirect to route '/feature
     */
      dispatch({ type: AUTH_USER })
      localStorage.setItem('token', response.data.token);
      callback();
    }) 
    .catch(() => {
      dispatch(authError('Bad Login Info'));
    });
  }
}

export function signupUser({email, password}, callback) {
  return (dispatch) => {
    axios.post(`${ROOT_URL}/signup`, { email, password })
      .then(response => {
        dispatch({ type: AUTH_USER });
        localStorage.setItem('token', response.data.token);
        callback();
      })
      .catch((response) => {
        dispatch(authError(response.error));
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