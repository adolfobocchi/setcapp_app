import { call, put, all, takeLatest } from 'redux-saga/effects';

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

function* listarContato() {
  try {
    const response = yield call(() => api.get('/contato'));
    const contato = response.data;
    yield put({ type: LISTAR_CONTATO_SUCCESS, payload: contato });
  } catch (error) {
    yield put({ type: LISTAR_CONTATO_FAILURE, payload: error.message });
  }
}



function* showContato(action) {
  try {

    const response = yield call(() => api.get(`/contato/${action.payload}`));
    const contato = response.data.contato;
    yield put({ type: SHOW_CONTATO_SUCCESS, payload: contato });
  } catch (error) {
    yield put({ type: SHOW_CONTATO_FAILURE, payload: error.message });
  }
}


// add empresa
function* criarContato(action) {
  try {
    const response = yield call(() => api.post('/contato', action.payload.contato));
    const contato = response.data.contato;
    yield put({ type: CRIAR_CONTATO_SUCCESS, payload: contato });
  } catch (error) {
    yield put({ type: CRIAR_CONTATO_FAILURE, payload: error.message });
  }
}

// update empresa
function* updateContato(action) {
  try {
    const response = yield call(() => api.put(`/contato/${action.payload.id}`, action.payload.contato));
    const contato = response.data.contato;
    yield put({ type: UPDATE_CONTATO_SUCCESS, payload: contato });
  } catch (error) {
    yield put({ type: UPDATE_CONTATO_FAILURE, payload: error.message });
  }
}

// delete empresa
function* deleteContato(action) {
  try {
    yield call(() => api.delete(`/contato/${action.payload}`));
    yield put({ type: DELETE_CONTATO_SUCCESS, payload: action.payload });
  } catch (error) {
    yield put({ type: DELETE_CONTATO_FAILURE, payload: error.message });
  }
}


export default all([
  takeLatest(DELETE_CONTATO_REQUEST, deleteContato),
  takeLatest(UPDATE_CONTATO_REQUEST, updateContato),
  takeLatest(CRIAR_CONTATO_REQUEST, criarContato),
  takeLatest(SHOW_CONTATO_REQUEST, showContato),
  takeLatest(LISTAR_CONTATO_REQUEST, listarContato),
])