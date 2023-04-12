import {
    LISTAR_CONTATO_REQUEST,
    LISTAR_CONTATO_SUCCESS,
    LISTAR_CONTATO_FAILURE,
    SHOW_CONTATO_REQUEST,
    SHOW_CONTATO_SUCCESS,
    SHOW_CONTATO_FAILURE,
    CRIAR_CONTATO_REQUEST,
    CRIAR_CONTATO_SUCCESS,
    CRIAR_CONTATO_FAILURE,
    UPDATE_CONTATO_REQUEST,
    UPDATE_CONTATO_SUCCESS,
    UPDATE_CONTATO_FAILURE,
    DELETE_CONTATO_REQUEST,
    DELETE_CONTATO_SUCCESS,
    DELETE_CONTATO_FAILURE,
    
  } from './actions'
  
  const initialState = {
    loading: false,
    contato: [],
    error: '',
  };
  
  const contatoReducer = (state = initialState, action) => {
    switch (action.type) {
      case SHOW_CONTATO_REQUEST:
        return {
          ...state,
          loading: true,
          error: null,
        };
      case SHOW_CONTATO_SUCCESS:
        return {
          ...state,
          contato: action.payload,
          loading: false,
        };
      case SHOW_CONTATO_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      case LISTAR_CONTATO_REQUEST:
      case CRIAR_CONTATO_REQUEST:
      case UPDATE_CONTATO_REQUEST:
      case DELETE_CONTATO_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case LISTAR_CONTATO_SUCCESS:
        return {
          loading: false,
          contato: action.payload,
          error: '',
        };
      case CRIAR_CONTATO_SUCCESS:
        return {
          loading: false,
          contato:  action.payload,
          error: '',
        };
      case UPDATE_CONTATO_SUCCESS:
        return {
          ...state,
          loading: false,
          contato: action.payload,
          error: '',
        };
      case DELETE_CONTATO_SUCCESS:
        return {
          loading: false,
          contato: state.contato.filter((user) => user.id !== action.payload),
          error: '',
        };
      case LISTAR_CONTATO_FAILURE:
      case CRIAR_CONTATO_FAILURE:
      case UPDATE_CONTATO_FAILURE:
      case DELETE_CONTATO_FAILURE:
        return {
          loading: false,
          contato: [],
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default contatoReducer;
  