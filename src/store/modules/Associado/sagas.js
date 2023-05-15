import { call, put, all, takeLatest } from 'redux-saga/effects';

import {
  LISTAR_ASSOCIADO_REQUEST,
  LISTAR_ASSOCIADO_SUCCESS,
  LISTAR_ASSOCIADO_FAILURE,
  CRIAR_ASSOCIADO_REQUEST,
  CRIAR_ASSOCIADO_SUCCESS,
  CRIAR_ASSOCIADO_FAILURE,
  UPDATE_ASSOCIADO_REQUEST,
  UPDATE_ASSOCIADO_SUCCESS,
  UPDATE_ASSOCIADO_FAILURE,
  DELETE_ASSOCIADO_REQUEST,
  DELETE_ASSOCIADO_SUCCESS,
  DELETE_ASSOCIADO_FAILURE,
  SHOW_ASSOCIADO_FAILURE,
  SHOW_ASSOCIADO_SUCCESS,
  SHOW_ASSOCIADO_REQUEST,
} from './actions';

import api from '../../../services/api';

export function* listarAssociado(action) {
  try {
    const response = yield call(() => api.get(`/associado/page/${action.payload.page}/${action.payload.ativo}`));
    const associado = response.data;
    yield put({ type: LISTAR_ASSOCIADO_SUCCESS, payload: associado });
  } catch (error) {
    yield put({ type: LISTAR_ASSOCIADO_FAILURE, payload: error.message });
  }
}


export function* showAssociado(action) {
  try {
    const response = yield call(() => api.get(`/associado/${action.payload}`));
    const associado = response.data.associado;
    yield put({ type: SHOW_ASSOCIADO_SUCCESS, payload: associado });
  } catch (error) {
    yield put({ type: SHOW_ASSOCIADO_FAILURE, payload: error.message });
  }
}

// add empresa
export function* criarAssociado(action) {
  try {
    const response = yield call(() => api.post('/associado', action.payload.associado));
    const associado = response.data;
    yield put({ type: CRIAR_ASSOCIADO_SUCCESS, payload: associado });
  } catch (error) {
    yield put({ type: CRIAR_ASSOCIADO_FAILURE, payload: error.message });
  }
}


// update empresa
export function* updateAssociado(action) {
  try {
    const response = yield call(() => api.put(`/associado/${action.payload.id}`, action.payload.associado));
    const associado = response.data;
    yield put({ type: UPDATE_ASSOCIADO_SUCCESS, payload: associado });
  } catch (error) {
    yield put({ type: UPDATE_ASSOCIADO_FAILURE, payload: error.message });
  }
}


// delete empresa
export function* deleteAssociado(action) {
  try {
    yield call(() => api.delete(`/associado/${action.payload}`));
    yield put({ type: DELETE_ASSOCIADO_SUCCESS, payload: action.payload });
  } catch (error) {
    yield put({ type: DELETE_ASSOCIADO_FAILURE, payload: error.message });
  }
}


export default all([
  takeLatest(DELETE_ASSOCIADO_REQUEST, deleteAssociado),
  takeLatest(UPDATE_ASSOCIADO_REQUEST, updateAssociado),
  takeLatest(CRIAR_ASSOCIADO_REQUEST, criarAssociado),
  takeLatest(SHOW_ASSOCIADO_REQUEST, showAssociado),
  takeLatest(LISTAR_ASSOCIADO_REQUEST, listarAssociado),
])
