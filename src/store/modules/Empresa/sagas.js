import { takeEvery, call, put } from 'redux-saga/effects';
import axios from 'axios';

import {
  LISTAR_EMPRESA_REQUEST,
  LISTAR_EMPRESA_SUCCESS,
  LISTAR_EMPRESA_FAILURE,
  CRIAR_EMPRESA_REQUEST,
  CRIAR_EMPRESA_SUCCESS,
  CRIAR_EMPRESA_FAILURE,
  UPDATE_EMPRESA_REQUEST,
  UPDATE_EMPRESA_SUCCESS,
  UPDATE_EMPRESA_FAILURE,
  DELETE_EMPRESA_REQUEST,
  DELETE_EMPRESA_SUCCESS,
  DELETE_EMPRESA_FAILURE,
  SHOW_EMPRESA_FAILURE,
  SHOW_EMPRESA_SUCCESS,
  SHOW_EMPRESA_REQUEST,
} from './actions';

import api from '../../../services/api';

export function* listarEmpresa() {
  try {
    const response = yield call(() => api.get('/empresa'));
    const empresas = response.data[0];
    
    yield put({ type: LISTAR_EMPRESA_SUCCESS, payload: empresas });
  } catch (error) {
    yield put({ type: LISTAR_EMPRESA_FAILURE, payload: error.message });
  }
}

export function* watchListarEmpresa() {
  yield takeEvery(LISTAR_EMPRESA_REQUEST, listarEmpresa);
}

export function* showEmpresa(action) {
  try {
    
    const response = yield call(() => api.get(`/empresa/${action.payload}`));
    const empresas = response.data.empresas;
    yield put({ type: SHOW_EMPRESA_SUCCESS, payload: empresas });
  } catch (error) {
    yield put({ type: SHOW_EMPRESA_FAILURE, payload: error.message });
  }
}

export function* watchShowEmpresa() {
  yield takeEvery(SHOW_EMPRESA_REQUEST, showEmpresa);
}

// add empresa
export function* criarEmpresa(action) {
  try {
    const response = yield call(() => api.post('/empresa', action.payload.empresa));
    yield takeEvery(CRIAR_EMPRESA_SUCCESS, function*(action) {
      yield action.history('empresas')
    });
  } catch (error) {
    yield put({ type: CRIAR_EMPRESA_FAILURE, payload: error.message });
  }
}

export function* watchCriarEmpresa() {
  yield takeEvery(CRIAR_EMPRESA_REQUEST, criarEmpresa);
}

// update empresa
export function* updateEmpresa(action) {
  try {
    const response = yield call(() => api.put(`/empresa/${action.payload.id}`, action.payload.empresa));
    const empresa = response.data.empresa;
    yield put({ type: UPDATE_EMPRESA_SUCCESS, payload: empresa });
  } catch (error) {
    yield put({ type: UPDATE_EMPRESA_FAILURE, payload: error.message });
  }
}

export function* watchUpdateEmpresa() {
  yield takeEvery(UPDATE_EMPRESA_REQUEST, updateEmpresa);
}

// delete empresa
export function* deleteEmpresa(action) {
  try {
    yield call(() => axios.delete(`/empresa/${action.payload}`));
    yield put({ type: DELETE_EMPRESA_SUCCESS, payload: action.payload });
  } catch (error) {
    yield put({ type: DELETE_EMPRESA_FAILURE, payload: error.message });
  }
}

export function* watchDeleteEmpresa() {
  yield takeEvery(DELETE_EMPRESA_REQUEST, deleteEmpresa);
}
