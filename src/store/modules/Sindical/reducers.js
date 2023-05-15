import {
    LISTAR_SINDICAL_REQUEST,
    LISTAR_SINDICAL_SUCCESS,
    LISTAR_SINDICAL_FAILURE,
    SHOW_SINDICAL_REQUEST,
    SHOW_SINDICAL_SUCCESS,
    SHOW_SINDICAL_FAILURE,
    CRIAR_SINDICAL_REQUEST,
    CRIAR_SINDICAL_SUCCESS,
    CRIAR_SINDICAL_FAILURE,
    UPDATE_SINDICAL_REQUEST,
    UPDATE_SINDICAL_SUCCESS,
    UPDATE_SINDICAL_FAILURE,
    DELETE_SINDICAL_REQUEST,
    DELETE_SINDICAL_SUCCESS,
    DELETE_SINDICAL_FAILURE,
    
  } from './actions'
  
  const initialState = {
    loading: false,
    sindical: [],
    error: '',
  };
  
  const sindicalReducer = (state = initialState, action) => {
    switch (action.type) {
      case SHOW_SINDICAL_REQUEST:
        return {
          ...state,
          loading: true,
          error: null,
        };
      case SHOW_SINDICAL_SUCCESS:
        return {
          ...state,
          sindical: action.payload,
          loading: false,
        };
      case SHOW_SINDICAL_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      case LISTAR_SINDICAL_REQUEST:
      case CRIAR_SINDICAL_REQUEST:
      case UPDATE_SINDICAL_REQUEST:
      case DELETE_SINDICAL_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case LISTAR_SINDICAL_SUCCESS:
        return {
          loading: false,
          sindical: action.payload,
          error: '',
        };
      case CRIAR_SINDICAL_SUCCESS:
        return {
          loading: false,
          sindical:  [...state.sindical, action.payload],
          error: '',
        };
      case UPDATE_SINDICAL_SUCCESS:
        var index = state.sindical.findIndex((sindical) => sindical.id === action.payload.id);
        state.sindical[index]= action.payload;
        return {
          ...state,
          loading: false,
          sindical: [...state.sindical],
          error: '',
        };
      case DELETE_SINDICAL_SUCCESS:
        var index = state.sindical.findIndex((sindical) => sindical.id === action.payload);
        return {
          loading: false,
          sindical: [
            ...state.sindical.slice(0, index),
            ...state.sindical.slice(index + 1)
          ],
          error: '',
        };
      case LISTAR_SINDICAL_FAILURE:
      case CRIAR_SINDICAL_FAILURE:
      case UPDATE_SINDICAL_FAILURE:
      case DELETE_SINDICAL_FAILURE:
        return {
          loading: false,
          sindical: [],
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default sindicalReducer;
  