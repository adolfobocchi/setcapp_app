import {call, put, all, takeLatest } from 'redux-saga/effects';

import {
  LISTAR_NOTICIA_REQUEST,
  LISTAR_NOTICIA_SUCCESS,
  LISTAR_NOTICIA_FAILURE,
  CRIAR_NOTICIA_REQUEST,
  CRIAR_NOTICIA_SUCCESS,
  CRIAR_NOTICIA_FAILURE,
  UPDATE_NOTICIA_REQUEST,
  UPDATE_NOTICIA_SUCCESS,
  UPDATE_NOTICIA_FAILURE,
  DELETE_NOTICIA_REQUEST,
  DELETE_NOTICIA_SUCCESS,
  DELETE_NOTICIA_FAILURE,
  SHOW_NOTICIA_FAILURE,
  SHOW_NOTICIA_SUCCESS,
  SHOW_NOTICIA_REQUEST,
} from './actions';

import api from '../../../services/api';


function* listarNoticia(action) {
  try {
    const response = yield call(() => api.get(`/noticia/page/${action.payload.page}/${action.payload.ativo}`));
    const noticia = response.data;
    yield put({ type: LISTAR_NOTICIA_SUCCESS, payload: noticia});
  } catch (error) {
    yield put({ type: LISTAR_NOTICIA_FAILURE, payload: error.message });
  }
}

function* showNoticia(action) {
  try {
    const response = yield call(() => api.get(`/noticia/${action.payload}`));
    const noticia = response.data;
    yield put({ type: SHOW_NOTICIA_SUCCESS, payload: noticia });
  } catch (error) {
    yield put({ type: SHOW_NOTICIA_FAILURE, payload: error.message });
  }
}
// add empresa

function* criarNoticia(action) {
  try {
    const response = yield call(() => api.post('/noticia', action.payload.noticia));
    const noticia = response.data;
    yield put({ type: CRIAR_NOTICIA_SUCCESS, payload: noticia });
  } catch (error) {
    yield put({ type: CRIAR_NOTICIA_FAILURE, payload: error.message });
  }
}

// update empresa

function* updateNoticia(action) {
  try {
    const response = yield call(() => api.put(`/noticia/${action.payload.id}`, action.payload.noticia));
    const noticia = response.data;
    yield put({ type: UPDATE_NOTICIA_SUCCESS, payload: noticia });
  } catch (error) {
    yield put({ type: UPDATE_NOTICIA_FAILURE, payload: error.message });
  }
}

function* deleteNoticia(action) {
  try {
    yield call(() => api.delete(`/noticia/${action.payload}`));
    yield put({ type: DELETE_NOTICIA_SUCCESS, payload: action.payload });
  } catch (error) {
    yield put({ type: DELETE_NOTICIA_FAILURE, payload: error.message });
  }
}


export default all([
  takeLatest(DELETE_NOTICIA_REQUEST, deleteNoticia),
  takeLatest(UPDATE_NOTICIA_REQUEST, updateNoticia),
  takeLatest(CRIAR_NOTICIA_REQUEST, criarNoticia),
  takeLatest(SHOW_NOTICIA_REQUEST, showNoticia),
  takeLatest(LISTAR_NOTICIA_REQUEST, listarNoticia),
])
