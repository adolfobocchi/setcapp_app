import {
    LISTAR_ACORDO_REQUEST,
    LISTAR_ACORDO_SUCCESS,
    LISTAR_ACORDO_FAILURE,
    SHOW_ACORDO_REQUEST,
    SHOW_ACORDO_SUCCESS,
    SHOW_ACORDO_FAILURE,
    CRIAR_ACORDO_REQUEST,
    CRIAR_ACORDO_SUCCESS,
    CRIAR_ACORDO_FAILURE,
    UPDATE_ACORDO_REQUEST,
    UPDATE_ACORDO_SUCCESS,
    UPDATE_ACORDO_FAILURE,
    DELETE_ACORDO_REQUEST,
    DELETE_ACORDO_SUCCESS,
    DELETE_ACORDO_FAILURE,
    
  } from './actions'
  
  const initialState = {
    loading: false,
    acordo: [],
    error: '',
  };
  
  const acordoReducer = (state = initialState, action) => {
    switch (action.type) {
      case SHOW_ACORDO_REQUEST:
        return {
          ...state,
          loading: true,
          error: null,
        };
      case SHOW_ACORDO_SUCCESS:
        return {
          ...state,
          acordo: action.payload,
          loading: false,
        };
      case SHOW_ACORDO_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      case LISTAR_ACORDO_REQUEST:
      case CRIAR_ACORDO_REQUEST:
      case UPDATE_ACORDO_REQUEST:
      case DELETE_ACORDO_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case LISTAR_ACORDO_SUCCESS:
        return {
          loading: false,
          acordo: action.payload,
          error: '',
        };
      case CRIAR_ACORDO_SUCCESS:
        return {
          loading: false,
          acordo:  action.payload,
          error: '',
        };
      case UPDATE_ACORDO_SUCCESS:
        return {
          ...state,
          loading: false,
          acordo: action.payload,
          error: '',
        };
      case DELETE_ACORDO_SUCCESS:
        return {
          loading: false,
          acordo: state.acordo.filter((user) => user.id !== action.payload),
          error: '',
        };
      case LISTAR_ACORDO_FAILURE:
      case CRIAR_ACORDO_FAILURE:
      case UPDATE_ACORDO_FAILURE:
      case DELETE_ACORDO_FAILURE:
        return {
          loading: false,
          acordo: [],
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default acordoReducer;
  