import axios from 'axios';
import { browserHistory } from 'react-router';
import { AUTH_USER } from './types';

const ROOT_URL = 'http://localhost:3090';

export function signinUser({ email, password }){
  return function(dispatch) {
    // submit email/password to the server
    axios.post(`${ROOT_URL}/signin`, { email, password })
      .then(response => {
        // if request is good...
        // - update state to indicate user is authenticated
        dispatch({ tpe: AUTH_USER });
        // - save the jwt token
        // - redirect to the route '/feature'
        browserHistory.push('/feature');
      })
      .catch(() => {
        // if request is bad...
        // -show an error to the user
      });
  }
}
