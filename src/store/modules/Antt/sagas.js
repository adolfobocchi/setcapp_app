import {  call, put, all, takeLatest } from 'redux-saga/effects';

import {
  LISTAR_ANTT_REQUEST,
  LISTAR_ANTT_SUCCESS,
  LISTAR_ANTT_FAILURE,
  CRIAR_ANTT_REQUEST,
  CRIAR_ANTT_SUCCESS,
  CRIAR_ANTT_FAILURE,
  UPDATE_ANTT_REQUEST,
  UPDATE_ANTT_SUCCESS,
  UPDATE_ANTT_FAILURE,
  DELETE_ANTT_REQUEST,
  DELETE_ANTT_SUCCESS,
  DELETE_ANTT_FAILURE,
  SHOW_ANTT_FAILURE,
  SHOW_ANTT_SUCCESS,
  SHOW_ANTT_REQUEST,
} from './actions';

import api from '../../../services/api';

export function* listarAntt() {
  try {
    const response = yield call(() => api.get('/antt'));
    const antt = response.data;
    yield put({ type: LISTAR_ANTT_SUCCESS, payload: antt });
  } catch (error) {
    yield put({ type: LISTAR_ANTT_FAILURE, payload: error.message });
  }
}

export function* showAntt(action) {
  try {
    
    const response = yield call(() => api.get(`/antt/${action.payload}`));
    const antt = response.data.antt;
    yield put({ type: SHOW_ANTT_SUCCESS, payload: antt });
  } catch (error) {
    yield put({ type: SHOW_ANTT_FAILURE, payload: error.message });
  }
}


// add empresa
export function* criarAntt(action) {
  try {
    const response = yield call(() => api.post('/antt', action.payload.antt));
    const antt = response.data;
    yield put({ type: CRIAR_ANTT_SUCCESS, payload: antt });
  } catch (error) {
    yield put({ type: CRIAR_ANTT_FAILURE, payload: error.message });
  }
}


// update empresa
export function* updateAntt(action) {
  try {
    const response = yield call(() => api.put(`/antt/${action.payload.id}`, action.payload.antt));
    const antt = response.data;
    yield put({ type: UPDATE_ANTT_SUCCESS, payload: antt });
  } catch (error) {
    yield put({ type: UPDATE_ANTT_FAILURE, payload: error.message });
  }
}


// delete empresa
export function* deleteAntt(action) {
  try {
    yield call(() => api.delete(`/antt/${action.payload}`));
    yield put({ type: DELETE_ANTT_SUCCESS, payload: action.payload });
  } catch (error) {
    yield put({ type: DELETE_ANTT_FAILURE, payload: error.message });
  }
}


export default all([
  takeLatest(DELETE_ANTT_REQUEST, deleteAntt),
  takeLatest(UPDATE_ANTT_REQUEST, updateAntt),
  takeLatest(CRIAR_ANTT_REQUEST, criarAntt),
  takeLatest(SHOW_ANTT_REQUEST, showAntt),
  takeLatest(LISTAR_ANTT_REQUEST, listarAntt),
])