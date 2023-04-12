// reducers.js

import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } from './actions';

const initialState = {
  isAuthenticated: false,
  token: null,
  error: null,
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
    case LOGIN_FAILURE:
      return {
        ...state,
        isAuthenticated: false,
        token: null,
        error: action.payload.error,
      };
    case LOGOUT:
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
