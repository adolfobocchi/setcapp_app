import {
    LISTAR_SLIDER_REQUEST,
    LISTAR_SLIDER_SUCCESS,
    LISTAR_SLIDER_FAILURE,
    SHOW_SLIDER_REQUEST,
    SHOW_SLIDER_SUCCESS,
    SHOW_SLIDER_FAILURE,
    CRIAR_SLIDER_REQUEST,
    CRIAR_SLIDER_SUCCESS,
    CRIAR_SLIDER_FAILURE,
    UPDATE_SLIDER_REQUEST,
    UPDATE_SLIDER_SUCCESS,
    UPDATE_SLIDER_FAILURE,
    DELETE_SLIDER_REQUEST,
    DELETE_SLIDER_SUCCESS,
    DELETE_SLIDER_FAILURE,
    
  } from './actions'
  
  const initialState = {
    loading: false,
    slider: [],
    error: '',
  };
  
  const sliderReducer = (state = initialState, action) => {
    switch (action.type) {
      case SHOW_SLIDER_REQUEST:
        return {
          ...state,
          loading: true,
          error: null,
        };
      case SHOW_SLIDER_SUCCESS:
        return {
          ...state,
          slider: action.payload,
          loading: false,
        };
      case SHOW_SLIDER_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      case LISTAR_SLIDER_REQUEST:
      case CRIAR_SLIDER_REQUEST:
      case UPDATE_SLIDER_REQUEST:
      case DELETE_SLIDER_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case LISTAR_SLIDER_SUCCESS:
        return {
          loading: false,
          slider: action.payload,
          error: '',
        };
      case CRIAR_SLIDER_SUCCESS:
        return {
          loading: false,
          slider:  [...state.slider, action.payload],
          error: '',
        };
      case UPDATE_SLIDER_SUCCESS:
        var index = state.slider.findIndex((slider) => slider.id === action.payload.id);
        state.slider[index]= action.payload;
        return {
          ...state,
          loading: false,
          slider: [...state.slider],
          error: '',
        };
      case DELETE_SLIDER_SUCCESS:
        var index = state.slider.findIndex((slider) => slider.id === action.payload);
        return {
          loading: false,
          slider: [
            ...state.slider.slice(0, index),
            ...state.slider.slice(index + 1)
          ],
          error: '',
        };
      case LISTAR_SLIDER_FAILURE:
      case CRIAR_SLIDER_FAILURE:
      case UPDATE_SLIDER_FAILURE:
      case DELETE_SLIDER_FAILURE:
        return {
          loading: false,
          slider: [],
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default sliderReducer;
  