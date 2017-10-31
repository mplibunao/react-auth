import axios from 'axios';
import { AUTH_USER } from './types'; 

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
        
        callback();
      })
      .catch(() => {
      /**
      *  If request is bad
      *  - Show an error to the user
      */
      });

    

    
    }

    
}