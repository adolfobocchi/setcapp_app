import {  call, put, all, takeLatest } from 'redux-saga/effects';

import {
  LISTAR_SINDICAL_REQUEST,
  LISTAR_SINDICAL_SUCCESS,
  LISTAR_SINDICAL_FAILURE,
  CRIAR_SINDICAL_REQUEST,
  CRIAR_SINDICAL_SUCCESS,
  CRIAR_SINDICAL_FAILURE,
  UPDATE_SINDICAL_REQUEST,
  UPDATE_SINDICAL_SUCCESS,
  UPDATE_SINDICAL_FAILURE,
  DELETE_SINDICAL_REQUEST,
  DELETE_SINDICAL_SUCCESS,
  DELETE_SINDICAL_FAILURE,
  SHOW_SINDICAL_FAILURE,
  SHOW_SINDICAL_SUCCESS,
  SHOW_SINDICAL_REQUEST,
} from './actions';

import api from '../../../services/api';

export function* listarSindical() {
  try {
    const response = yield call(() => api.get('/sindical'));
    const sindical = response.data;
    yield put({ type: LISTAR_SINDICAL_SUCCESS, payload: sindical });
  } catch (error) {
    yield put({ type: LISTAR_SINDICAL_FAILURE, payload: error.message });
  }
}

export function* showSindical(action) {
  try {
    
    const response = yield call(() => api.get(`/sindical/${action.payload}`));
    const sindical = response.data;
    yield put({ type: SHOW_SINDICAL_SUCCESS, payload: sindical });
  } catch (error) {
    yield put({ type: SHOW_SINDICAL_FAILURE, payload: error.message });
  }
}


// add empresa
export function* criarSindical(action) {
  try {
    const response = yield call(() => api.post('/sindical', action.payload.sindical));
    const sindical = response.data;
    yield put({ type: CRIAR_SINDICAL_SUCCESS, payload: sindical });
  } catch (error) {
    yield put({ type: CRIAR_SINDICAL_FAILURE, payload: error.message });
  }
}


// update empresa
export function* updateSindical(action) {
  try {
    const response = yield call(() => api.put(`/sindical/${action.payload.id}`, action.payload.sindical));
    const sindical = response.data;
    yield put({ type: UPDATE_SINDICAL_SUCCESS, payload: sindical });
  } catch (error) {
    yield put({ type: UPDATE_SINDICAL_FAILURE, payload: error.message });
  }
}


// delete empresa
export function* deleteSindical(action) {
  try {
    yield call(() => api.delete(`/sindical/${action.payload}`));
    yield put({ type: DELETE_SINDICAL_SUCCESS, payload: action.payload });
  } catch (error) {
    yield put({ type: DELETE_SINDICAL_FAILURE, payload: error.message });
  }
}


export default all([
  takeLatest(DELETE_SINDICAL_REQUEST, deleteSindical),
  takeLatest(UPDATE_SINDICAL_REQUEST, updateSindical),
  takeLatest(CRIAR_SINDICAL_REQUEST, criarSindical),
  takeLatest(SHOW_SINDICAL_REQUEST, showSindical),
  takeLatest(LISTAR_SINDICAL_REQUEST, listarSindical),
])