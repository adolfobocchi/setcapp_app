import { takeEvery, call, put } from 'redux-saga/effects';
import axios from 'axios';

import {
  LISTAR_SERVICO_REQUEST,
  LISTAR_SERVICO_SUCCESS,
  LISTAR_SERVICO_FAILURE,
  CRIAR_SERVICO_REQUEST,
  CRIAR_SERVICO_SUCCESS,
  CRIAR_SERVICO_FAILURE,
  UPDATE_SERVICO_REQUEST,
  UPDATE_SERVICO_SUCCESS,
  UPDATE_SERVICO_FAILURE,
  DELETE_SERVICO_REQUEST,
  DELETE_SERVICO_SUCCESS,
  DELETE_SERVICO_FAILURE,
  SHOW_SERVICO_FAILURE,
  SHOW_SERVICO_SUCCESS,
  SHOW_SERVICO_REQUEST,
} from './actions';

import api from '../../../services/api';

export function* listarServico() {
  try {
    const response = yield call(() => api.get('/servico'));
    const servico = response.data;
    yield put({ type: LISTAR_SERVICO_SUCCESS, payload: servico });
  } catch (error) {
    yield put({ type: LISTAR_SERVICO_FAILURE, payload: error.message });
  }
}

export function* watchListarServico() {
  yield takeEvery(LISTAR_SERVICO_REQUEST, listarServico);
}

export function* showServico(action) {
  try {
    
    const response = yield call(() => api.get(`/servico/${action.payload}`));
    const servico = response.data.servico;
    yield put({ type: SHOW_SERVICO_SUCCESS, payload: servico });
  } catch (error) {
    yield put({ type: SHOW_SERVICO_FAILURE, payload: error.message });
  }
}

export function* watchShowServico() {
  yield takeEvery(SHOW_SERVICO_REQUEST, showServico);
}

// add empresa
export function* criarServico(action) {
  try {
    const response = yield call(() => api.post('/servico', action.payload.servico));
    const servico = response.data.servico;
    yield put({ type: CRIAR_SERVICO_SUCCESS, payload: servico });
  } catch (error) {
    yield put({ type: CRIAR_SERVICO_FAILURE, payload: error.message });
  }
}

export function* watchCriarServico() {
  yield takeEvery(CRIAR_SERVICO_REQUEST, criarServico);
}

// update empresa
export function* updateServico(action) {
  try {
    const response = yield call(() => api.put(`/servico/${action.payload.id}`, action.payload.servico));
    const servico = response.data.servico;
    yield put({ type: UPDATE_SERVICO_SUCCESS, payload: servico });
  } catch (error) {
    yield put({ type: UPDATE_SERVICO_FAILURE, payload: error.message });
  }
}

export function* watchUpdateServico() {
  yield takeEvery(UPDATE_SERVICO_REQUEST, updateServico);
}

// delete empresa
export function* deleteServico(action) {
  try {
    yield call(() => axios.delete(`/servico/${action.payload}`));
    yield put({ type: DELETE_SERVICO_SUCCESS, payload: action.payload });
  } catch (error) {
    yield put({ type: DELETE_SERVICO_FAILURE, payload: error.message });
  }
}

export function* watchDeleteServico() {
  yield takeEvery(DELETE_SERVICO_REQUEST, deleteServico);
}
