import { takeEvery, call, put } from 'redux-saga/effects';
import axios from 'axios';

import {
  LISTAR_LEGISLACAO_REQUEST,
  LISTAR_LEGISLACAO_SUCCESS,
  LISTAR_LEGISLACAO_FAILURE,
  CRIAR_LEGISLACAO_REQUEST,
  CRIAR_LEGISLACAO_SUCCESS,
  CRIAR_LEGISLACAO_FAILURE,
  UPDATE_LEGISLACAO_REQUEST,
  UPDATE_LEGISLACAO_SUCCESS,
  UPDATE_LEGISLACAO_FAILURE,
  DELETE_LEGISLACAO_REQUEST,
  DELETE_LEGISLACAO_SUCCESS,
  DELETE_LEGISLACAO_FAILURE,
  SHOW_LEGISLACAO_FAILURE,
  SHOW_LEGISLACAO_SUCCESS,
  SHOW_LEGISLACAO_REQUEST,
} from './actions';

import api from '../../../services/api';

export function* listarLegislacao() {
  try {
    const response = yield call(() => api.get('/legislacao'));
    const legislacao = response.data[0];
    yield put({ type: LISTAR_LEGISLACAO_SUCCESS, payload: legislacao });
  } catch (error) {
    yield put({ type: LISTAR_LEGISLACAO_FAILURE, payload: error.message });
  }
}

export function* watchListarLegislacao() {
  yield takeEvery(LISTAR_LEGISLACAO_REQUEST, listarLegislacao);
}

export function* showLegislacao(action) {
  try {
    
    const response = yield call(() => api.get(`/legislacao/${action.payload}`));
    const legislacao = response.data.legislacao;
    yield put({ type: SHOW_LEGISLACAO_SUCCESS, payload: legislacao });
  } catch (error) {
    yield put({ type: SHOW_LEGISLACAO_FAILURE, payload: error.message });
  }
}

export function* watchShowLegislacao() {
  yield takeEvery(SHOW_LEGISLACAO_REQUEST, showLegislacao);
}

// add empresa
export function* criarLegislacao(action) {
  try {
    const response = yield call(() => api.post('/legislacao', action.payload.legislacao));
    const legislacao = response.data.legislacao;
    yield put({ type: CRIAR_LEGISLACAO_SUCCESS, payload: legislacao });
  } catch (error) {
    yield put({ type: CRIAR_LEGISLACAO_FAILURE, payload: error.message });
  }
}

export function* watchCriarLegislacao() {
  yield takeEvery(CRIAR_LEGISLACAO_REQUEST, criarLegislacao);
}

// update empresa
export function* updateLegislacao(action) {
  try {
    const response = yield call(() => api.put(`/legislacao/${action.payload.id}`, action.payload.legislacao));
    const legislacao = response.data.legislacao;
    yield put({ type: UPDATE_LEGISLACAO_SUCCESS, payload: legislacao });
  } catch (error) {
    yield put({ type: UPDATE_LEGISLACAO_FAILURE, payload: error.message });
  }
}

export function* watchUpdateLegislacao() {
  yield takeEvery(UPDATE_LEGISLACAO_REQUEST, updateLegislacao);
}

// delete empresa
export function* deleteLegislacao(action) {
  try {
    yield call(() => axios.delete(`/legislacao/${action.payload}`));
    yield put({ type: DELETE_LEGISLACAO_SUCCESS, payload: action.payload });
  } catch (error) {
    yield put({ type: DELETE_LEGISLACAO_FAILURE, payload: error.message });
  }
}

export function* watchDeleteLegislacao() {
  yield takeEvery(DELETE_LEGISLACAO_REQUEST, deleteLegislacao);
}
