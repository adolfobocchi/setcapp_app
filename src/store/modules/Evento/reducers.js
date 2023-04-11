import {
    LISTAR_EVENTO_REQUEST,
    LISTAR_EVENTO_SUCCESS,
    LISTAR_EVENTO_FAILURE,
    SHOW_EVENTO_REQUEST,
    SHOW_EVENTO_SUCCESS,
    SHOW_EVENTO_FAILURE,
    CRIAR_EVENTO_REQUEST,
    CRIAR_EVENTO_SUCCESS,
    CRIAR_EVENTO_FAILURE,
    UPDATE_EVENTO_REQUEST,
    UPDATE_EVENTO_SUCCESS,
    UPDATE_EVENTO_FAILURE,
    DELETE_EVENTO_REQUEST,
    DELETE_EVENTO_SUCCESS,
    DELETE_EVENTO_FAILURE,
    
  } from './actions'
  
  const initialState = {
    loading: false,
    evento: [],
    error: '',
  };
  
  const eventoReducer = (state = initialState, action) => {
    switch (action.type) {
      case SHOW_EVENTO_REQUEST:
        return {
          ...state,
          loading: true,
          error: null,
        };
      case SHOW_EVENTO_SUCCESS:
        return {
          ...state,
          evento: action.payload,
          loading: false,
        };
      case SHOW_EVENTO_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      case LISTAR_EVENTO_REQUEST:
      case CRIAR_EVENTO_REQUEST:
      case UPDATE_EVENTO_REQUEST:
      case DELETE_EVENTO_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case LISTAR_EVENTO_SUCCESS:
        return {
          loading: false,
          evento: action.payload,
          error: '',
        };
      case CRIAR_EVENTO_SUCCESS:
        return {
          loading: false,
          evento:  action.payload,
          error: '',
        };
      case UPDATE_EVENTO_SUCCESS:
        return {
          ...state,
          loading: false,
          evento: action.payload,
          error: '',
        };
      case DELETE_EVENTO_SUCCESS:
        return {
          loading: false,
          evento: state.evento.filter((user) => user.id !== action.payload),
          error: '',
        };
      case LISTAR_EVENTO_FAILURE:
      case CRIAR_EVENTO_FAILURE:
      case UPDATE_EVENTO_FAILURE:
      case DELETE_EVENTO_FAILURE:
        return {
          loading: false,
          evento: [],
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default eventoReducer;
  