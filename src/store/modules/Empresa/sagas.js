import { takeEvery, call, put, takeLatest, all } from 'redux-saga/effects';

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
  DELETE_IMAGEMEMPRESA_REQUEST,
  DELETE_IMAGEMEMPRESA_SUCCESS,
  DELETE_IMAGEMEMPRESA_FAILURE,
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

export function* showEmpresa(action) {
  try {
    
    const response = yield call(() => api.get(`/empresa/${action.payload}`));
    const empresas = response.data.empresas;
    yield put({ type: SHOW_EMPRESA_SUCCESS, payload: empresas });
  } catch (error) {
    yield put({ type: SHOW_EMPRESA_FAILURE, payload: error.message });
  }
}


// add empresa
export function* criarEmpresa(action) {
  try {
    yield call(() => api.post('/empresa', action.payload.empresa));
    yield takeEvery(CRIAR_EMPRESA_SUCCESS, function*(action) {
      yield action.history('empresas')
    });
  } catch (error) {
    yield put({ type: CRIAR_EMPRESA_FAILURE, payload: error.message });
  }
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


// delete empresa
export function* deleteEmpresa(action) {
  try {
    yield call(() => api.delete(`/empresa/${action.payload}`));
    yield put({ type: DELETE_EMPRESA_SUCCESS, payload: action.payload });
  } catch (error) {
    yield put({ type: DELETE_EMPRESA_FAILURE, payload: error.message });
  }
}



export function* deleteImagemEmpresa(action) {
  try {
    yield call(() => api.delete(`/empresa/imagemempresa/${action.payload.id}`));
    yield put({ type: DELETE_IMAGEMEMPRESA_SUCCESS, payload: action.payload });
  } catch (error) {
    yield put({ type: DELETE_IMAGEMEMPRESA_FAILURE, payload: error.message });
  }
}


export default all([
  takeLatest(DELETE_EMPRESA_REQUEST, deleteEmpresa),
  takeLatest(UPDATE_EMPRESA_REQUEST, updateEmpresa),
  takeLatest(CRIAR_EMPRESA_REQUEST, criarEmpresa),
  takeLatest(SHOW_EMPRESA_REQUEST, showEmpresa),
  takeLatest(LISTAR_EMPRESA_REQUEST, listarEmpresa),
  takeLatest(DELETE_IMAGEMEMPRESA_REQUEST, deleteImagemEmpresa),
])