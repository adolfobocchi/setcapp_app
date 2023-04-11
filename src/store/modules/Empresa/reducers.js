import {
    LISTAR_EMPRESA_REQUEST,
    LISTAR_EMPRESA_SUCCESS,
    LISTAR_EMPRESA_FAILURE,
    SHOW_EMPRESA_REQUEST,
    SHOW_EMPRESA_SUCCESS,
    SHOW_EMPRESA_FAILURE,
    CRIAR_EMPRESA_REQUEST,
    CRIAR_EMPRESA_SUCCESS,
    CRIAR_EMPRESA_FAILURE,
    UPDATE_EMPRESA_REQUEST,
    UPDATE_EMPRESA_SUCCESS,
    UPDATE_EMPRESA_FAILURE,
    DELETE_EMPRESA_REQUEST,
    DELETE_EMPRESA_SUCCESS,
    DELETE_EMPRESA_FAILURE,
    
  } from './actions'
  
  const initialState = {
    loading: false,
    empresa: {},
    error: '',
  };
  
  const empresaReducer = (state = initialState, action) => {
    switch (action.type) {
      case SHOW_EMPRESA_REQUEST:
        return {
          ...state,
          loading: true,
          error: null,
        };
      case SHOW_EMPRESA_SUCCESS:
        return {
          ...state,
          empresa: action.payload,
          loading: false,
        };
      case SHOW_EMPRESA_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      case LISTAR_EMPRESA_REQUEST:
      case CRIAR_EMPRESA_REQUEST:
      case UPDATE_EMPRESA_REQUEST:
      case DELETE_EMPRESA_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case LISTAR_EMPRESA_SUCCESS:
        return {
          loading: false,
          empresa: action.payload,
          error: '',
        };
      case CRIAR_EMPRESA_SUCCESS:
        return {
          loading: false,
          empresa:  action.payload,
          error: '',
        };
      case UPDATE_EMPRESA_SUCCESS:
        return {
          ...state,
          loading: false,
          empresa: action.payload,
          error: '',
        };
      case DELETE_EMPRESA_SUCCESS:
        return {
          loading: false,
          empresa: state.empresa.filter((user) => user.id !== action.payload),
          error: '',
        };
      case LISTAR_EMPRESA_FAILURE:
      case CRIAR_EMPRESA_FAILURE:
      case UPDATE_EMPRESA_FAILURE:
      case DELETE_EMPRESA_FAILURE:
        return {
          loading: false,
          empresa: [],
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default empresaReducer;
  