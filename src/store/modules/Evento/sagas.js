import { takeEvery, call, put } from 'redux-saga/effects';
import axios from 'axios';

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
} from './actions';

import api from '../../../services/api';

export function* listarEvento() {
  try {
    const response = yield call(() => api.get('/evento'));
    const evento = response.data;
    yield put({ type: LISTAR_EVENTO_SUCCESS, payload: evento });
  } catch (error) {
    yield put({ type: LISTAR_EVENTO_FAILURE, payload: error.message });
  }
}

export function* watchListarEvento() {
  yield takeEvery(LISTAR_EVENTO_REQUEST, listarEvento);
}

export function* showEvento(action) {
  try {
    
    const response = yield call(() => api.get(`/evento/${action.payload}`));
    const evento = response.data.evento;
    yield put({ type: SHOW_EVENTO_SUCCESS, payload: evento });
  } catch (error) {
    yield put({ type: SHOW_EVENTO_FAILURE, payload: error.message });
  }
}

export function* watchShowEvento() {
  yield takeEvery(SHOW_EVENTO_REQUEST, showEvento);
}

// add empresa
export function* criarEvento(action) {
  try {
    const response = yield call(() => api.post('/evento', action.payload.evento));
    const evento = response.data.evento;
    yield put({ type: CRIAR_EVENTO_SUCCESS, payload: evento });
  } catch (error) {
    yield put({ type: CRIAR_EVENTO_FAILURE, payload: error.message });
  }
}

export function* watchCriarEvento() {
  yield takeEvery(CRIAR_EVENTO_REQUEST, criarEvento);
}

// update empresa
export function* updateEvento(action) {
  try {
    const response = yield call(() => api.put(`/evento/${action.payload.id}`, action.payload.evento));
    const evento = response.data.evento;
    yield put({ type: UPDATE_EVENTO_SUCCESS, payload: evento });
  } catch (error) {
    yield put({ type: UPDATE_EVENTO_FAILURE, payload: error.message });
  }
}

export function* watchUpdateEvento() {
  yield takeEvery(UPDATE_EVENTO_REQUEST, updateEvento);
}

// delete empresa
export function* deleteEvento(action) {
  try {
    yield call(() => axios.delete(`/evento/${action.payload}`));
    yield put({ type: DELETE_EVENTO_SUCCESS, payload: action.payload });
  } catch (error) {
    yield put({ type: DELETE_EVENTO_FAILURE, payload: error.message });
  }
}

export function* watchDeleteEvento() {
  yield takeEvery(DELETE_EVENTO_REQUEST, deleteEvento);
}
