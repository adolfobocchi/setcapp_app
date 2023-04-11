import {
    LISTAR_LEGISLACAO_REQUEST,
    LISTAR_LEGISLACAO_SUCCESS,
    LISTAR_LEGISLACAO_FAILURE,
    SHOW_LEGISLACAO_REQUEST,
    SHOW_LEGISLACAO_SUCCESS,
    SHOW_LEGISLACAO_FAILURE,
    CRIAR_LEGISLACAO_REQUEST,
    CRIAR_LEGISLACAO_SUCCESS,
    CRIAR_LEGISLACAO_FAILURE,
    UPDATE_LEGISLACAO_REQUEST,
    UPDATE_LEGISLACAO_SUCCESS,
    UPDATE_LEGISLACAO_FAILURE,
    DELETE_LEGISLACAO_REQUEST,
    DELETE_LEGISLACAO_SUCCESS,
    DELETE_LEGISLACAO_FAILURE,
    
  } from './actions'
  
  const initialState = {
    loading: false,
    legislacao: {},
    error: '',
  };
  
  const legislacaoReducer = (state = initialState, action) => {
    switch (action.type) {
      case SHOW_LEGISLACAO_REQUEST:
        return {
          ...state,
          loading: true,
          error: null,
        };
      case SHOW_LEGISLACAO_SUCCESS:
        return {
          ...state,
          legislacao: action.payload,
          loading: false,
        };
      case SHOW_LEGISLACAO_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      case LISTAR_LEGISLACAO_REQUEST:
      case CRIAR_LEGISLACAO_REQUEST:
      case UPDATE_LEGISLACAO_REQUEST:
      case DELETE_LEGISLACAO_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case LISTAR_LEGISLACAO_SUCCESS:
        return {
          loading: false,
          legislacao: action.payload,
          error: '',
        };
      case CRIAR_LEGISLACAO_SUCCESS:
        return {
          loading: false,
          legislacao:  action.payload,
          error: '',
        };
      case UPDATE_LEGISLACAO_SUCCESS:
        return {
          ...state,
          loading: false,
          legislacao: action.payload,
          error: '',
        };
      case DELETE_LEGISLACAO_SUCCESS:
        return {
          loading: false,
          legislacao: state.legislacao.filter((user) => user.id !== action.payload),
          error: '',
        };
      case LISTAR_LEGISLACAO_FAILURE:
      case CRIAR_LEGISLACAO_FAILURE:
      case UPDATE_LEGISLACAO_FAILURE:
      case DELETE_LEGISLACAO_FAILURE:
        return {
          loading: false,
          legislacao: [],
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default legislacaoReducer;
  