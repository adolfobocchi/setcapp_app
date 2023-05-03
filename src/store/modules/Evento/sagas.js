import { call, put, all, takeLatest } from 'redux-saga/effects';

import {
  LISTAR_EVENTO_REQUEST,
  LISTAR_EVENTO_SUCCESS,
  LISTAR_EVENTO_FAILURE,
  CRIAR_EVENTO_REQUEST,
  CRIAR_EVENTO_SUCCESS,
  CRIAR_EVENTO_FAILURE,
  UPDATE_EVENTO_REQUEST,
  UPDATE_EVENTO_SUCCESS,
  UPDATE_EVENTO_FAILURE,
  DELETE_EVENTO_REQUEST,
  DELETE_EVENTO_SUCCESS,
  DELETE_EVENTO_FAILURE,
  SHOW_EVENTO_FAILURE,
  SHOW_EVENTO_SUCCESS,
  SHOW_EVENTO_REQUEST,
  DELETE_IMAGEMEVENTO_REQUEST,
  DELETE_IMAGEMEVENTO_SUCCESS,
  DELETE_IMAGEMEVENTO_FAILURE,
} from './actions';

import api from '../../../services/api';

function* listarEvento(action) {
  try {
    const response = yield call(() => api.get(`/evento/page/${action.payload.page}/${action.payload.ativo}`));
    const evento = response.data;
    yield put({ type: LISTAR_EVENTO_SUCCESS, payload: evento });
  } catch (error) {
    yield put({ type: LISTAR_EVENTO_FAILURE, payload: error.message });
  }
}

function* showEvento(action) {
  try {
    
    const response = yield call(() => api.get(`/evento/${action.payload}`));
    const evento = response.data;
    yield put({ type: SHOW_EVENTO_SUCCESS, payload: evento });
  } catch (error) {
    yield put({ type: SHOW_EVENTO_FAILURE, payload: error.message });
  }
}

// add empresa
function* criarEvento(action) {
  try {
    const response = yield call(() => api.post('/evento', action.payload.evento));
    const evento = response.data;
    yield put({ type: CRIAR_EVENTO_SUCCESS, payload: evento });
  } catch (error) {
    yield put({ type: CRIAR_EVENTO_FAILURE, payload: error.message });
  }
}

// update empresa
function* updateEvento(action) {
  try {
    const response = yield call(() => api.put(`/evento/${action.payload.id}`, action.payload.evento));
    const evento = response.data;
    yield put({ type: UPDATE_EVENTO_SUCCESS, payload: evento });
  } catch (error) {
    yield put({ type: UPDATE_EVENTO_FAILURE, payload: error.message });
  }
}

// delete empresa
function* deleteEvento(action) {
  try {
    yield call(() => api.delete(`/evento/${action.payload}`));
    yield put({ type: DELETE_EVENTO_SUCCESS, payload: action.payload });
  } catch (error) {
    yield put({ type: DELETE_EVENTO_FAILURE, payload: error.message });
  }
}

export function* deleteImagemEvento(action) {
  try {
    yield call(() => api.delete(`/evento/imagemevento/${action.payload.idImagem}`));
    yield put({ type: DELETE_IMAGEMEVENTO_SUCCESS, payload: action.payload });
  } catch (error) {
    yield put({ type: DELETE_IMAGEMEVENTO_FAILURE, payload: error.message });
  }
}

export default all([
  takeLatest(DELETE_EVENTO_REQUEST, deleteEvento),
  takeLatest(UPDATE_EVENTO_REQUEST, updateEvento),
  takeLatest(CRIAR_EVENTO_REQUEST, criarEvento),
  takeLatest(SHOW_EVENTO_REQUEST, showEvento),
  takeLatest(LISTAR_EVENTO_REQUEST, listarEvento),
  takeLatest(DELETE_IMAGEMEVENTO_REQUEST, deleteImagemEvento),
])