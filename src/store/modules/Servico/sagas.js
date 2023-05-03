import { all, call, put, takeLatest } from 'redux-saga/effects';

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

function* listarServico() {
  try {
    const response = yield call(() => api.get('/servico'));
    const servico = response.data;
    yield put({ type: LISTAR_SERVICO_SUCCESS, payload: servico });
  } catch (error) {
    yield put({ type: LISTAR_SERVICO_FAILURE, payload: error.message });
  }
}

function* showServico(action) {
  try {
    
    const response = yield call(() => api.get(`/servico/${action.payload}`));
    const servico = response.data.servico;
    yield put({ type: SHOW_SERVICO_SUCCESS, payload: servico });
  } catch (error) {
    yield put({ type: SHOW_SERVICO_FAILURE, payload: error.message });
  }
}
// add empresa
function* criarServico(action) {
  try {
    const response = yield call(() => api.post('/servico', action.payload.servico));
    const servico = response.data;
    yield put({ type: CRIAR_SERVICO_SUCCESS, payload: servico });
  } catch (error) {
    yield put({ type: CRIAR_SERVICO_FAILURE, payload: error.message });
  }
}

// update empresa
function* updateServico(action) {
  try {
    const response = yield call(() => api.put(`/servico/${action.payload.id}`, action.payload.servico));
    const servico = response.data;
    yield put({ type: UPDATE_SERVICO_SUCCESS, payload: servico });
  } catch (error) {
    yield put({ type: UPDATE_SERVICO_FAILURE, payload: error.message });
  }
}
// delete empresa
function* deleteServico(action) {
  try {
    yield call(() => api.delete(`/servico/${action.payload}`));
    yield put({ type: DELETE_SERVICO_SUCCESS, payload: action.payload });
  } catch (error) {
    yield put({ type: DELETE_SERVICO_FAILURE, payload: error.message });
  }
}

export default all([
  takeLatest(DELETE_SERVICO_REQUEST, deleteServico),
  takeLatest(UPDATE_SERVICO_REQUEST, updateServico),
  takeLatest(CRIAR_SERVICO_REQUEST, criarServico),
  takeLatest(SHOW_SERVICO_REQUEST, showServico),
  takeLatest(LISTAR_SERVICO_REQUEST, listarServico),
])