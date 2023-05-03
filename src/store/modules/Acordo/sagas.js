import { call, put, takeLatest, all } from 'redux-saga/effects';

import {
  LISTAR_ACORDO_REQUEST,
  LISTAR_ACORDO_SUCCESS,
  LISTAR_ACORDO_FAILURE,
  CRIAR_ACORDO_REQUEST,
  CRIAR_ACORDO_SUCCESS,
  CRIAR_ACORDO_FAILURE,
  UPDATE_ACORDO_REQUEST,
  UPDATE_ACORDO_SUCCESS,
  UPDATE_ACORDO_FAILURE,
  DELETE_ACORDO_REQUEST,
  DELETE_ACORDO_SUCCESS,
  DELETE_ACORDO_FAILURE,
  SHOW_ACORDO_FAILURE,
  SHOW_ACORDO_SUCCESS,
  SHOW_ACORDO_REQUEST,
} from './actions';

import api from '../../../services/api';

function* listarAcordo() {
  try {
    const response = yield call(() => api.get('/acordo'));
    const acordo = response.data;
    yield put({ type: LISTAR_ACORDO_SUCCESS, payload: acordo });
  } catch (error) {
    yield put({ type: LISTAR_ACORDO_FAILURE, payload: error.message });
  }
}

 function* showAcordo(action) {
  try {
    
    const response = yield call(() => api.get(`/acordo/${action.payload}`));
    const acordo = response.data;
    yield put({ type: SHOW_ACORDO_SUCCESS, payload: acordo });
  } catch (error) {
    yield put({ type: SHOW_ACORDO_FAILURE, payload: error.message });
  }
}

// add empresa
 function* criarAcordo(action) {
  try {
    const response = yield call(() => api.post('/acordo', action.payload.acordo));
    const acordo = response.data;
    yield put({ type: CRIAR_ACORDO_SUCCESS, payload: acordo });
  } catch (error) {
    yield put({ type: CRIAR_ACORDO_FAILURE, payload: error.message });
  }
}
// update empresa
 function* updateAcordo(action) {
  try {
    const response = yield call(() => api.put(`/acordo/${action.payload.id}`, action.payload.acordo));
    const acordo = response.data;
    yield put({ type: UPDATE_ACORDO_SUCCESS, payload: acordo });
  } catch (error) {
    yield put({ type: UPDATE_ACORDO_FAILURE, payload: error.message });
  }
}

// delete empresa
 function* deleteAcordo(action) {
  try {
    yield call(() => api.delete(`/acordo/${action.payload}`));
    yield put({ type: DELETE_ACORDO_SUCCESS, payload: action.payload });
  } catch (error) {
    yield put({ type: DELETE_ACORDO_FAILURE, payload: error.message });
  }
}


export default all([
  takeLatest(DELETE_ACORDO_REQUEST, deleteAcordo),
  takeLatest(UPDATE_ACORDO_REQUEST, updateAcordo),
  takeLatest(CRIAR_ACORDO_REQUEST, criarAcordo),
  takeLatest(SHOW_ACORDO_REQUEST, showAcordo),
  takeLatest(LISTAR_ACORDO_REQUEST, listarAcordo),
])
