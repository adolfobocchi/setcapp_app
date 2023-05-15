import {
    LISTAR_ASSOCIADO_REQUEST,
    LISTAR_ASSOCIADO_SUCCESS,
    LISTAR_ASSOCIADO_FAILURE,
    SHOW_ASSOCIADO_REQUEST,
    SHOW_ASSOCIADO_SUCCESS,
    SHOW_ASSOCIADO_FAILURE,
    CRIAR_ASSOCIADO_REQUEST,
    CRIAR_ASSOCIADO_SUCCESS,
    CRIAR_ASSOCIADO_FAILURE,
    UPDATE_ASSOCIADO_REQUEST,
    UPDATE_ASSOCIADO_SUCCESS,
    UPDATE_ASSOCIADO_FAILURE,
    DELETE_ASSOCIADO_REQUEST,
    DELETE_ASSOCIADO_SUCCESS,
    DELETE_ASSOCIADO_FAILURE,
    
  } from './actions'
  
  const initialState = {
    loading: false,
    associados: [],
    associado: null,
    error: '',
    page: 1
  };
  
  const associadoReducer = (state = initialState, action) => {
    switch (action.type) {
      case SHOW_ASSOCIADO_REQUEST:
        return {
          ...state,
          loading: true,
          error: null,
        };
      case SHOW_ASSOCIADO_SUCCESS:
        return {
          ...state,
          associado: action.payload,
          loading: false,
        };
      case SHOW_ASSOCIADO_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      case LISTAR_ASSOCIADO_REQUEST:
        return {
          ...state,
          page: action.payload.page,
          loading: true,
        };
      case CRIAR_ASSOCIADO_REQUEST:
      case UPDATE_ASSOCIADO_REQUEST:
      case DELETE_ASSOCIADO_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case LISTAR_ASSOCIADO_SUCCESS:
        return {
          ...state,
          loading: false,
          associados: action.payload,
          error: '',
        };
      case CRIAR_ASSOCIADO_SUCCESS:
        return {
          ...state,
          loading: false,
          associados:  [...state.associados, action.payload],
          error: '',
        };
      case UPDATE_ASSOCIADO_SUCCESS:
        var index = state.associados.findIndex((associado) => associado.id === action.payload.id);
        state.associados[index]= action.payload;
        return {
          ...state,
          loading: false,
          associados: [...state.associados],
          error: '',
        };
      case DELETE_ASSOCIADO_SUCCESS:
        var index = state.associados.findIndex((associado) => associado.id === action.payload);
        return {
          ...state,
          loading: false,
          associados: [
            ...state.associados.slice(0, index),
            ...state.associados.slice(index + 1)
          ],
          error: '',
        };
      case LISTAR_ASSOCIADO_FAILURE:
      case CRIAR_ASSOCIADO_FAILURE:
      case UPDATE_ASSOCIADO_FAILURE:
      case DELETE_ASSOCIADO_FAILURE:
        return {
          ...state,
          loading: false,
          associado: null,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default associadoReducer;
  