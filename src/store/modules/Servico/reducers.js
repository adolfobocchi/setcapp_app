import {
    LISTAR_SERVICO_REQUEST,
    LISTAR_SERVICO_SUCCESS,
    LISTAR_SERVICO_FAILURE,
    SHOW_SERVICO_REQUEST,
    SHOW_SERVICO_SUCCESS,
    SHOW_SERVICO_FAILURE,
    CRIAR_SERVICO_REQUEST,
    CRIAR_SERVICO_SUCCESS,
    CRIAR_SERVICO_FAILURE,
    UPDATE_SERVICO_REQUEST,
    UPDATE_SERVICO_SUCCESS,
    UPDATE_SERVICO_FAILURE,
    DELETE_SERVICO_REQUEST,
    DELETE_SERVICO_SUCCESS,
    DELETE_SERVICO_FAILURE,
    
  } from './actions'
  
  const initialState = {
    loading: false,
    servico: [],
    error: '',
  };
  
  const servicoReducer = (state = initialState, action) => {
    switch (action.type) {
      case SHOW_SERVICO_REQUEST:
        return {
          ...state,
          loading: true,
          error: null,
        };
      case SHOW_SERVICO_SUCCESS:
        return {
          ...state,
          servico: action.payload,
          loading: false,
        };
      case SHOW_SERVICO_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      case LISTAR_SERVICO_REQUEST:
      case CRIAR_SERVICO_REQUEST:
      case UPDATE_SERVICO_REQUEST:
      case DELETE_SERVICO_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case LISTAR_SERVICO_SUCCESS:
        return {
          loading: false,
          servico: action.payload,
          error: '',
        };
      case CRIAR_SERVICO_SUCCESS:
        return {
          loading: false,
          servico:  action.payload,
          error: '',
        };
      case UPDATE_SERVICO_SUCCESS:
        return {
          ...state,
          loading: false,
          servico: action.payload,
          error: '',
        };
      case DELETE_SERVICO_SUCCESS:
        return {
          loading: false,
          servico: state.servico.filter((user) => user.id !== action.payload),
          error: '',
        };
      case LISTAR_SERVICO_FAILURE:
      case CRIAR_SERVICO_FAILURE:
      case UPDATE_SERVICO_FAILURE:
      case DELETE_SERVICO_FAILURE:
        return {
          loading: false,
          servico: [],
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default servicoReducer;
  