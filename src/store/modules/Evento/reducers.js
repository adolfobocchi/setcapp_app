import {
    LISTAR_EVENTO_REQUEST,
    LISTAR_EVENTO_SUCCESS,
    LISTAR_EVENTO_FAILURE,
    SHOW_EVENTO_REQUEST,
    SHOW_EVENTO_SUCCESS,
    SHOW_EVENTO_FAILURE,
    CRIAR_EVENTO_REQUEST,
    CRIAR_EVENTO_SUCCESS,
    CRIAR_EVENTO_FAILURE,
    UPDATE_EVENTO_REQUEST,
    UPDATE_EVENTO_SUCCESS,
    UPDATE_EVENTO_FAILURE,
    DELETE_EVENTO_REQUEST,
    DELETE_EVENTO_SUCCESS,
    DELETE_EVENTO_FAILURE,
    DELETE_IMAGEMEVENTO_REQUEST,
    DELETE_IMAGEMEVENTO_SUCCESS,
    DELETE_IMAGEMEVENTO_FAILURE,
  } from './actions'
  
  const initialState = {
    loading: false,
    evento: [],
    error: '',
  };
  
  const eventoReducer = (state = initialState, action) => {
    switch (action.type) {
      case SHOW_EVENTO_REQUEST:
        return {
          ...state,
          loading: true,
          error: null,
        };
      case SHOW_EVENTO_SUCCESS:
        return {
          ...state,
          evento: action.payload,
          loading: false,
        };
      case SHOW_EVENTO_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      case LISTAR_EVENTO_REQUEST:
      case CRIAR_EVENTO_REQUEST:
      case UPDATE_EVENTO_REQUEST:
      case DELETE_IMAGEMEVENTO_REQUEST:
      case DELETE_EVENTO_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case LISTAR_EVENTO_SUCCESS:
        return {
          loading: false,
          evento: action.payload,
          error: '',
        };
      case CRIAR_EVENTO_SUCCESS:
        return {
          loading: false,
          evento: [...state.evento, action.payload],
          error: '',
        };
      case UPDATE_EVENTO_SUCCESS:
        var index = state.evento.findIndex((evento) => evento.id === action.payload.id);
        state.evento[index]= action.payload;
        return {
          ...state,
          loading: false,
          evento: [...state.evento],
          error: '',
        };
      case DELETE_IMAGEMEVENTO_SUCCESS: 
        var index = state.evento.findIndex((evento) => evento.id === action.payload.idEvento); 
        var indexImagem = state.evento[index].imagens.findIndex((imagem) => imagem.id === action.payload.idImagem); 
        state.evento[index].imagens = [
          ...state.evento[index].imagens.slice(0, indexImagem),
          ...state.evento[index].imagens.slice(indexImagem+1),
        ]
        return {
          loading: false,
          evento: [...state.evento],
          error: '',
        };
      case DELETE_EVENTO_SUCCESS:
        var index = state.evento.findIndex((evento) => evento.id === action.payload);
        return {
          loading: false,
          evento: [
            ...state.evento.slice(0, index),
            ...state.evento.slice(index + 1)
          ],
          error: '',
        };
      case LISTAR_EVENTO_FAILURE:
      case CRIAR_EVENTO_FAILURE:
      case UPDATE_EVENTO_FAILURE:
      case DELETE_IMAGEMEVENTO_FAILURE:
      case DELETE_EVENTO_FAILURE:
        return {
          loading: false,
          evento: [],
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default eventoReducer;
  