import { all, call, put, takeLatest } from 'redux-saga/effects';

import {
  LISTAR_SLIDER_REQUEST,
  LISTAR_SLIDER_SUCCESS,
  LISTAR_SLIDER_FAILURE,
  CRIAR_SLIDER_REQUEST,
  CRIAR_SLIDER_SUCCESS,
  CRIAR_SLIDER_FAILURE,
  UPDATE_SLIDER_REQUEST,
  UPDATE_SLIDER_SUCCESS,
  UPDATE_SLIDER_FAILURE,
  DELETE_SLIDER_REQUEST,
  DELETE_SLIDER_SUCCESS,
  DELETE_SLIDER_FAILURE,
  SHOW_SLIDER_FAILURE,
  SHOW_SLIDER_SUCCESS,
  SHOW_SLIDER_REQUEST,
} from './actions';

import api from '../../../services/api';

function* listarSlider() {
  try {
    const response = yield call(() => api.get('/slider'));
    const slider = response.data;
    yield put({ type: LISTAR_SLIDER_SUCCESS, payload: slider });
  } catch (error) {
    yield put({ type: LISTAR_SLIDER_FAILURE, payload: error.message });
  }
}

function* showSlider(action) {
  try {
    
    const response = yield call(() => api.get(`/slider/${action.payload}`));
    const slider = response.data.slider;
    yield put({ type: SHOW_SLIDER_SUCCESS, payload: slider });
  } catch (error) {
    yield put({ type: SHOW_SLIDER_FAILURE, payload: error.message });
  }
}

// add empresa
function* criarSlider(action) {
  try {
    const response = yield call(() => api.post('/slider', action.payload.slider));
    const slider = response.data;
    yield put({ type: CRIAR_SLIDER_SUCCESS, payload: slider });
  } catch (error) {
    yield put({ type: CRIAR_SLIDER_FAILURE, payload: error.message });
  }
}

// update empresa
function* updateSlider(action) {
  try {
    const response = yield call(() => api.put(`/slider/${action.payload.id}`, action.payload.slider));
    const slider = response.data;
    yield put({ type: UPDATE_SLIDER_SUCCESS, payload: slider });
  } catch (error) {
    yield put({ type: UPDATE_SLIDER_FAILURE, payload: error.message });
  }
}

// delete empresa
function* deleteSlider(action) {
  try {
    yield call(() => api.delete(`/slider/${action.payload}`));
    yield put({ type: DELETE_SLIDER_SUCCESS, payload: action.payload });
  } catch (error) {
    yield put({ type: DELETE_SLIDER_FAILURE, payload: error.message });
  }
}


export default all([
  takeLatest(DELETE_SLIDER_REQUEST, deleteSlider),
  takeLatest(UPDATE_SLIDER_REQUEST, updateSlider),
  takeLatest(CRIAR_SLIDER_REQUEST, criarSlider),
  takeLatest(SHOW_SLIDER_REQUEST, showSlider),
  takeLatest(LISTAR_SLIDER_REQUEST, listarSlider),
])
