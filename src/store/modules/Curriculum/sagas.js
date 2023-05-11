import { call, put, all, takeLatest } from 'redux-saga/effects';

import {
  LISTAR_CURRICULUM_REQUEST,
  LISTAR_CURRICULUM_SUCCESS,
  LISTAR_CURRICULUM_FAILURE,
  CRIAR_CURRICULUM_REQUEST,
  CRIAR_CURRICULUM_SUCCESS,
  CRIAR_CURRICULUM_FAILURE,
  UPDATE_CURRICULUM_REQUEST,
  UPDATE_CURRICULUM_SUCCESS,
  UPDATE_CURRICULUM_FAILURE,
  DELETE_CURRICULUM_REQUEST,
  DELETE_CURRICULUM_SUCCESS,
  DELETE_CURRICULUM_FAILURE,
  SHOW_CURRICULUM_FAILURE,
  SHOW_CURRICULUM_SUCCESS,
  SHOW_CURRICULUM_REQUEST,
} from './actions';

import api from '../../../services/api';

function* listarCurriculum() {
  try {
    const response = yield call(() => api.get('/curriculo')); 
    const curriculum = response.data;
    yield put({ type: LISTAR_CURRICULUM_SUCCESS, payload: curriculum });
  } catch (error) {
    yield put({ type: LISTAR_CURRICULUM_FAILURE, payload: error.message });
  }
}



function* showCurriculum(action) {
  try {

    const response = yield call(() => api.get(`/curriculo/${action.payload}`));
    const curriculum = response.data;
    yield put({ type: SHOW_CURRICULUM_SUCCESS, payload: curriculum });
  } catch (error) {
    yield put({ type: SHOW_CURRICULUM_FAILURE, payload: error.message });
  }
}


// add empresa
function* criarCurriculum(action) {
  try {
    const response = yield call(() => api.post('/curriculo', action.payload.curriculum));
    const curriculum = response.data;
    yield put({ type: CRIAR_CURRICULUM_SUCCESS, payload: curriculum });
  } catch (error) {
    yield put({ type: CRIAR_CURRICULUM_FAILURE, payload: error.message });
  }
}

// update empresa
function* updateCurriculum(action) {
  try {
    const response = yield call(() => api.put(`/curriculo/${action.payload.id}`, action.payload.curriculum));
    const curriculum = response.data;
    yield put({ type: UPDATE_CURRICULUM_SUCCESS, payload: curriculum });
  } catch (error) {
    yield put({ type: UPDATE_CURRICULUM_FAILURE, payload: error.message });
  }
}

// delete empresa
function* deleteCurriculum(action) {
  try {
    yield call(() => api.delete(`/curriculo/${action.payload}`));
    yield put({ type: DELETE_CURRICULUM_SUCCESS, payload: action.payload });
  } catch (error) {
    yield put({ type: DELETE_CURRICULUM_FAILURE, payload: error.message });
  }
}


export default all([
  takeLatest(DELETE_CURRICULUM_REQUEST, deleteCurriculum),
  takeLatest(UPDATE_CURRICULUM_REQUEST, updateCurriculum),
  takeLatest(CRIAR_CURRICULUM_REQUEST, criarCurriculum),
  takeLatest(SHOW_CURRICULUM_REQUEST, showCurriculum),
  takeLatest(LISTAR_CURRICULUM_REQUEST, listarCurriculum),
])