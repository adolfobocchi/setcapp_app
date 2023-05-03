import {
    LISTAR_ANTT_REQUEST,
    LISTAR_ANTT_SUCCESS,
    LISTAR_ANTT_FAILURE,
    SHOW_ANTT_REQUEST,
    SHOW_ANTT_SUCCESS,
    SHOW_ANTT_FAILURE,
    CRIAR_ANTT_REQUEST,
    CRIAR_ANTT_SUCCESS,
    CRIAR_ANTT_FAILURE,
    UPDATE_ANTT_REQUEST,
    UPDATE_ANTT_SUCCESS,
    UPDATE_ANTT_FAILURE,
    DELETE_ANTT_REQUEST,
    DELETE_ANTT_SUCCESS,
    DELETE_ANTT_FAILURE,
    
  } from './actions'
  
  const initialState = {
    loading: false,
    antt: [],
    error: '',
  };
  
  const anttReducer = (state = initialState, action) => {
    switch (action.type) {
      case SHOW_ANTT_REQUEST:
        return {
          ...state,
          loading: true,
          error: null,
        };
      case SHOW_ANTT_SUCCESS:
        return {
          ...state,
          antt: action.payload,
          loading: false,
        };
      case SHOW_ANTT_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      case LISTAR_ANTT_REQUEST:
      case CRIAR_ANTT_REQUEST:
      case UPDATE_ANTT_REQUEST:
      case DELETE_ANTT_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case LISTAR_ANTT_SUCCESS:
        return {
          loading: false,
          antt: action.payload,
          error: '',
        };
      case CRIAR_ANTT_SUCCESS:
        return {
          loading: false,
          antt:  [...state.antt, action.payload],
          error: '',
        };
      case UPDATE_ANTT_SUCCESS:
        var index = state.antt.findIndex((antt) => antt.id === action.payload.id);
        state.antt[index]= action.payload;
        return {
          ...state,
          loading: false,
          antt: [...state.antt],
          error: '',
        };
      case DELETE_ANTT_SUCCESS:
        var index = state.antt.findIndex((antt) => antt.id === action.payload);
        return {
          loading: false,
          antt: [
            ...state.antt.slice(0, index),
            ...state.antt.slice(index + 1)
          ],
          error: '',
        };
      case LISTAR_ANTT_FAILURE:
      case CRIAR_ANTT_FAILURE:
      case UPDATE_ANTT_FAILURE:
      case DELETE_ANTT_FAILURE:
        return {
          loading: false,
          antt: [],
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default anttReducer;
  