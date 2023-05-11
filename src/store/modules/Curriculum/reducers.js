import {
    LISTAR_CURRICULUM_REQUEST,
    LISTAR_CURRICULUM_SUCCESS,
    LISTAR_CURRICULUM_FAILURE,
    SHOW_CURRICULUM_REQUEST,
    SHOW_CURRICULUM_SUCCESS,
    SHOW_CURRICULUM_FAILURE,
    CRIAR_CURRICULUM_REQUEST,
    CRIAR_CURRICULUM_SUCCESS,
    CRIAR_CURRICULUM_FAILURE,
    UPDATE_CURRICULUM_REQUEST,
    UPDATE_CURRICULUM_SUCCESS,
    UPDATE_CURRICULUM_FAILURE,
    DELETE_CURRICULUM_REQUEST,
    DELETE_CURRICULUM_SUCCESS,
    DELETE_CURRICULUM_FAILURE,
    
  } from './actions'
  
  const initialState = {
    loading: false,
    curriculum: [],
    error: '',
  };
  
  const curriculumReducer = (state = initialState, action) => {
    switch (action.type) {
      case SHOW_CURRICULUM_REQUEST:
        return {
          ...state,
          loading: true,
          error: null,
        };
      case SHOW_CURRICULUM_SUCCESS:
        return {
          ...state,
          curriculum: action.payload,
          loading: false,
        };
      case SHOW_CURRICULUM_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      case LISTAR_CURRICULUM_REQUEST:
      case CRIAR_CURRICULUM_REQUEST:
      case UPDATE_CURRICULUM_REQUEST:
      case DELETE_CURRICULUM_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case LISTAR_CURRICULUM_SUCCESS:
        return {
          loading: false,
          curriculum: action.payload,
          error: '',
        };
      case CRIAR_CURRICULUM_SUCCESS:
        return {
          loading: false,
          curriculum: [...state.curriculum, action.payload],
          error: '',
        };
      case UPDATE_CURRICULUM_SUCCESS:
        var index = state.curriculum.findIndex((curriculum) => curriculum.id === action.payload.id);
        state.curriculum[index]= action.payload;
        return {
          ...state,
          loading: false,
          curriculum: [...state.curriculum],
          error: '',
        };
      case DELETE_CURRICULUM_SUCCESS:
        var index = state.curriculum.findIndex((curriculum) => curriculum.id === action.payload);
        return {
          loading: false,
          curriculum: [
            ...state.curriculum.slice(0, index),
            ...state.curriculum.slice(index + 1)
          ],
          error: '',
        };
      case LISTAR_CURRICULUM_FAILURE:
      case CRIAR_CURRICULUM_FAILURE:
      case UPDATE_CURRICULUM_FAILURE:
      case DELETE_CURRICULUM_FAILURE:
        return {
          loading: false,
          curriculum: [],
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default curriculumReducer;
  