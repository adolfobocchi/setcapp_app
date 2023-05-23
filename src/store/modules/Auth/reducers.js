// reducers.js

import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT, TOKEN_SUCCESS, TOKEN_FAILURE, TOKEN_EXPIRED } from './actions';
import jwtDecode from 'jwt-decode';

const initialState = {
  isAuthenticated: false,
  token: null,
  error: null
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        isAuthenticated: false,
        error: null,
      };
    case LOGIN_SUCCESS:
      action.payload.history('/painel');
      return {
        ...state,
        isAuthenticated: true,
        token: action.payload.token,
        error: null,
      };
    case TOKEN_SUCCESS:
    case LOGIN_FAILURE:
      return {
        ...state,
        isAuthenticated: false,
        token: null,
        error: action.payload.error,
      };
    case TOKEN_FAILURE:
      action.payload.history('/login');
      return {
        ...state,
        isAuthenticated: false,
        token: null,
        error: null,
      };
    case LOGOUT:
      return {
        ...state,
        isAuthenticated: false,
        token: null,
        error: null,
      };
    case TOKEN_EXPIRED:
      if(state.token) {
        const decodedToken = jwtDecode(state.token);
        const currentTime = Date.now() / 1000;
        if (decodedToken.exp > currentTime) {
          return {
            ...state,
            isAuthenticated: true,
          };
        }
      }
      return {
        ...state,
        isAuthenticated: false,
        token: null,
        error: null,
      };
      
    default:
      return state;
  }
};

export default authReducer;
