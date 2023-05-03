import {
    LISTAR_CONFEDERADO_REQUEST,
    LISTAR_CONFEDERADO_SUCCESS,
    LISTAR_CONFEDERADO_FAILURE,
    SHOW_CONFEDERADO_REQUEST,
    SHOW_CONFEDERADO_SUCCESS,
    SHOW_CONFEDERADO_FAILURE,
    CRIAR_CONFEDERADO_REQUEST,
    CRIAR_CONFEDERADO_SUCCESS,
    CRIAR_CONFEDERADO_FAILURE,
    UPDATE_CONFEDERADO_REQUEST,
    UPDATE_CONFEDERADO_SUCCESS,
    UPDATE_CONFEDERADO_FAILURE,
    DELETE_CONFEDERADO_REQUEST,
    DELETE_CONFEDERADO_SUCCESS,
    DELETE_CONFEDERADO_FAILURE,
    
  } from './actions'
  
  const initialState = {
    loading: false,
    confederado: [],
    error: '',
  };
  
  const confederadoReducer = (state = initialState, action) => {
    switch (action.type) {
      case SHOW_CONFEDERADO_REQUEST:
        return {
          ...state,
          loading: true,
          error: null,
        };
      case SHOW_CONFEDERADO_SUCCESS:
        return {
          ...state,
          confederado: action.payload,
          loading: false,
        };
      case SHOW_CONFEDERADO_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      case LISTAR_CONFEDERADO_REQUEST:
      case CRIAR_CONFEDERADO_REQUEST:
      case UPDATE_CONFEDERADO_REQUEST:
      case DELETE_CONFEDERADO_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case LISTAR_CONFEDERADO_SUCCESS:
        return {
          loading: false,
          confederado: action.payload,
          error: '',
        };
      case CRIAR_CONFEDERADO_SUCCESS:
        return {
          loading: false,
          confederado:  [...state.confederado, action.payload],
          error: '',
        };
      case UPDATE_CONFEDERADO_SUCCESS:
        var index = state.confederado.findIndex((confederado) => confederado.id === action.payload.id);
        state.confederado[index]= action.payload;
        return {
          ...state,
          loading: false,
          confederado: [...state.confederado],
          error: '',
        };
      case DELETE_CONFEDERADO_SUCCESS:
        var index = state.confederado.findIndex((confederado) => confederado.id === action.payload);
        return {
          loading: false,
          confederado: [
            ...state.confederado.slice(0, index),
            ...state.confederado.slice(index + 1)
          ],
          error: '',
        };
      case LISTAR_CONFEDERADO_FAILURE:
      case CRIAR_CONFEDERADO_FAILURE:
      case UPDATE_CONFEDERADO_FAILURE:
      case DELETE_CONFEDERADO_FAILURE:
        return {
          loading: false,
          confederado: [],
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default confederadoReducer;
  