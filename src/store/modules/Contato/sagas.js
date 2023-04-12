import { takeEvery, call, put } from 'redux-saga/effects';
import axios from 'axios';

import {
  LISTAR_CONTATO_REQUEST,
  LISTAR_CONTATO_SUCCESS,
  LISTAR_CONTATO_FAILURE,
  CRIAR_CONTATO_REQUEST,
  CRIAR_CONTATO_SUCCESS,
  CRIAR_CONTATO_FAILURE,
  UPDATE_CONTATO_REQUEST,
  UPDATE_CONTATO_SUCCESS,
  UPDATE_CONTATO_FAILURE,
  DELETE_CONTATO_REQUEST,
  DELETE_CONTATO_SUCCESS,
  DELETE_CONTATO_FAILURE,
  SHOW_CONTATO_FAILURE,
  SHOW_CONTATO_SUCCESS,
  SHOW_CONTATO_REQUEST,
} from './actions';

import api from '../../../services/api';

export function* listarContato() {
  try {
    const response = yield call(() => api.get('/contato'));
    const contato = response.data;
    yield put({ type: LISTAR_CONTATO_SUCCESS, payload: contato });
  } catch (error) {
    yield put({ type: LISTAR_CONTATO_FAILURE, payload: error.message });
  }
}

export function* watchListarContato() {
  yield takeEvery(LISTAR_CONTATO_REQUEST, listarContato);
}

export function* showContato(action) {
  try {
    
    const response = yield call(() => api.get(`/contato/${action.payload}`));
    const contato = response.data.contato;
    yield put({ type: SHOW_CONTATO_SUCCESS, payload: contato });
  } catch (error) {
    yield put({ type: SHOW_CONTATO_FAILURE, payload: error.message });
  }
}

export function* watchShowContato() {
  yield takeEvery(SHOW_CONTATO_REQUEST, showContato);
}

// add empresa
export function* criarContato(action) {
  try {
    const response = yield call(() => api.post('/contato', action.payload.contato));
    const contato = response.data.contato;
    yield put({ type: CRIAR_CONTATO_SUCCESS, payload: contato });
  } catch (error) {
    yield put({ type: CRIAR_CONTATO_FAILURE, payload: error.message });
  }
}

export function* watchCriarContato() {
  yield takeEvery(CRIAR_CONTATO_REQUEST, criarContato);
}

// update empresa
export function* updateContato(action) {
  try {
    const response = yield call(() => api.put(`/contato/${action.payload.id}`, action.payload.contato));
    const contato = response.data.contato;
    yield put({ type: UPDATE_CONTATO_SUCCESS, payload: contato });
  } catch (error) {
    yield put({ type: UPDATE_CONTATO_FAILURE, payload: error.message });
  }
}

export function* watchUpdateContato() {
  yield takeEvery(UPDATE_CONTATO_REQUEST, updateContato);
}

// delete empresa
export function* deleteContato(action) {
  try {
    console.log(action);
    yield call(() => api.delete(`/contato/${action.payload}`));
    yield put({ type: DELETE_CONTATO_SUCCESS, payload: action.payload });
  } catch (error) {
    yield put({ type: DELETE_CONTATO_FAILURE, payload: error.message });
  }
}

export function* watchDeleteContato() {
  yield takeEvery(DELETE_CONTATO_REQUEST, deleteContato);
}
