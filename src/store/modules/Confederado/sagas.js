import { call, put, takeLatest, all } from 'redux-saga/effects';

import {
  LISTAR_CONFEDERADO_REQUEST,
  LISTAR_CONFEDERADO_SUCCESS,
  LISTAR_CONFEDERADO_FAILURE,
  CRIAR_CONFEDERADO_REQUEST,
  CRIAR_CONFEDERADO_SUCCESS,
  CRIAR_CONFEDERADO_FAILURE,
  UPDATE_CONFEDERADO_REQUEST,
  UPDATE_CONFEDERADO_SUCCESS,
  UPDATE_CONFEDERADO_FAILURE,
  DELETE_CONFEDERADO_REQUEST,
  DELETE_CONFEDERADO_SUCCESS,
  DELETE_CONFEDERADO_FAILURE,
  SHOW_CONFEDERADO_FAILURE,
  SHOW_CONFEDERADO_SUCCESS,
  SHOW_CONFEDERADO_REQUEST,
} from './actions';

import api from '../../../services/api';

function* listarConfederado() {
  try {
    const response = yield call(() => api.get('/confederado'));
    const confederado = response.data;
    yield put({ type: LISTAR_CONFEDERADO_SUCCESS, payload: confederado });
  } catch (error) {
    yield put({ type: LISTAR_CONFEDERADO_FAILURE, payload: error.message });
  }
}

function* showConfederado(action) {
  try {
    
    const response = yield call(() => api.get(`/confederado/${action.payload}`));
    const confederado = response.data.confederado;
    yield put({ type: SHOW_CONFEDERADO_SUCCESS, payload: confederado });
  } catch (error) {
    yield put({ type: SHOW_CONFEDERADO_FAILURE, payload: error.message });
  }
}


// add empresa
function* criarConfederado(action) {
  try {
    const response = yield call(() => api.post('/confederado', action.payload.confederado));
    const confederado = response.data.confederado;
    yield put({ type: CRIAR_CONFEDERADO_SUCCESS, payload: confederado });
  } catch (error) {
    yield put({ type: CRIAR_CONFEDERADO_FAILURE, payload: error.message });
  }
}

// update empresa
function* updateConfederado(action) {
  try {
    const response = yield call(() => api.put(`/confederado/${action.payload.id}`, action.payload.confederado));
    const confederado = response.data.confederado;
    yield put({ type: UPDATE_CONFEDERADO_SUCCESS, payload: confederado });
  } catch (error) {
    yield put({ type: UPDATE_CONFEDERADO_FAILURE, payload: error.message });
  }
}

// delete empresa
function* deleteConfederado(action) {
  try {
    yield call(() => api.delete(`/confederado/${action.payload}`));
    yield put({ type: DELETE_CONFEDERADO_SUCCESS, payload: action.payload });
  } catch (error) {
    yield put({ type: DELETE_CONFEDERADO_FAILURE, payload: error.message });
  }
}


export default all([
  takeLatest(DELETE_CONFEDERADO_REQUEST, deleteConfederado),
  takeLatest(UPDATE_CONFEDERADO_REQUEST, updateConfederado),
  takeLatest(CRIAR_CONFEDERADO_REQUEST, criarConfederado),
  takeLatest(SHOW_CONFEDERADO_REQUEST, showConfederado),
  takeLatest(LISTAR_CONFEDERADO_REQUEST, listarConfederado),
])