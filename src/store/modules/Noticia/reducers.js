import {
    LISTAR_NOTICIA_REQUEST,
    LISTAR_NOTICIA_SUCCESS,
    LISTAR_NOTICIA_FAILURE,
    SHOW_NOTICIA_REQUEST,
    SHOW_NOTICIA_SUCCESS,
    SHOW_NOTICIA_FAILURE,
    CRIAR_NOTICIA_REQUEST,
    CRIAR_NOTICIA_SUCCESS,
    CRIAR_NOTICIA_FAILURE,
    UPDATE_NOTICIA_REQUEST,
    UPDATE_NOTICIA_SUCCESS,
    UPDATE_NOTICIA_FAILURE,
    DELETE_NOTICIA_REQUEST,
    DELETE_NOTICIA_SUCCESS,
    DELETE_NOTICIA_FAILURE,
    
  } from './actions'
  
  const initialState = {
    loading: false,
    noticias: [],
    noticia: null,
    error: '',
  };

  
  
  const noticiaReducer = (state = initialState, action) => {
    switch (action.type) {
      case SHOW_NOTICIA_REQUEST:
        return {
          ...state,
          loading: true,
          error: null,
        };
      case SHOW_NOTICIA_SUCCESS:
        return {
          ...state,
          noticia: action.payload,
          loading: false,
        };
      case SHOW_NOTICIA_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      case LISTAR_NOTICIA_REQUEST:
      case CRIAR_NOTICIA_REQUEST:
      case UPDATE_NOTICIA_REQUEST:
      case DELETE_NOTICIA_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case LISTAR_NOTICIA_SUCCESS:
        return {
          ...state,
          loading: false,
          noticias: action.payload,
          error: '',
        };
      case CRIAR_NOTICIA_SUCCESS:
        return {
          ...state,
          loading: false,
          noticia:  action.payload,
          error: '',
        };
      case UPDATE_NOTICIA_SUCCESS:
        return {
          ...state,
          loading: false,
          noticia: action.payload,
          error: '',
        };
      case DELETE_NOTICIA_SUCCESS:
        return {
          ...state,
          loading: false,
          noticia: state.noticia.filter((noticia) => noticia.id !== action.payload),
          error: '',
        };
      case LISTAR_NOTICIA_FAILURE:
      case CRIAR_NOTICIA_FAILURE:
      case UPDATE_NOTICIA_FAILURE:
      case DELETE_NOTICIA_FAILURE:
        return {
          ...state,
          loading: false,
          noticia: null,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default noticiaReducer;
  