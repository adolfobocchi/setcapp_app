import { takeEvery, call, put } from 'redux-saga/effects';
import axios from 'axios';

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

export function* listarNoticia() {
  try {
    const response = yield call(() => api.get('/noticia'));
    const noticia = response.data;
    yield put({ type: LISTAR_NOTICIA_SUCCESS, payload: noticia });
  } catch (error) {
    yield put({ type: LISTAR_NOTICIA_FAILURE, payload: error.message });
  }
}

export function* watchListarNoticia() {
  yield takeEvery(LISTAR_NOTICIA_REQUEST, listarNoticia);
}

export function* showNoticia(action) {
  try {
    
    const response = yield call(() => api.get(`/noticia/${action.payload}`));
    const noticia = response.data.noticia;
    yield put({ type: SHOW_NOTICIA_SUCCESS, payload: noticia });
  } catch (error) {
    yield put({ type: SHOW_NOTICIA_FAILURE, payload: error.message });
  }
}

export function* watchShowNoticia() {
  yield takeEvery(SHOW_NOTICIA_REQUEST, showNoticia);
}

// add empresa
export function* criarNoticia(action) {
  try {
    const response = yield call(() => api.post('/noticia', action.payload.noticia));
    const noticia = response.data.noticia;
    yield put({ type: CRIAR_NOTICIA_SUCCESS, payload: noticia });
  } catch (error) {
    yield put({ type: CRIAR_NOTICIA_FAILURE, payload: error.message });
  }
}

export function* watchCriarNoticia() {
  yield takeEvery(CRIAR_NOTICIA_REQUEST, criarNoticia);
}

// update empresa
export function* updateNoticia(action) {
  try {
    const response = yield call(() => api.put(`/noticia/${action.payload.id}`, action.payload.noticia));
    const noticia = response.data.noticia;
    yield put({ type: UPDATE_NOTICIA_SUCCESS, payload: noticia });
  } catch (error) {
    yield put({ type: UPDATE_NOTICIA_FAILURE, payload: error.message });
  }
}

export function* watchUpdateNoticia() {
  yield takeEvery(UPDATE_NOTICIA_REQUEST, updateNoticia);
}

// delete empresa
export function* deleteNoticia(action) {
  try {
    yield call(() => axios.delete(`/noticia/${action.payload}`));
    yield put({ type: DELETE_NOTICIA_SUCCESS, payload: action.payload });
  } catch (error) {
    yield put({ type: DELETE_NOTICIA_FAILURE, payload: error.message });
  }
}

export function* watchDeleteNoticia() {
  yield takeEvery(DELETE_NOTICIA_REQUEST, deleteNoticia);
}
