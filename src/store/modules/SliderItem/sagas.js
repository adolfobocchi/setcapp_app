import { takeEvery, call, put } from 'redux-saga/effects';
import axios from 'axios';

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

export function* listarSlider() {
  try {
    const response = yield call(() => api.get('/slider'));
    console.log(response.data);
    const slider = response.data;
    yield put({ type: LISTAR_SLIDER_SUCCESS, payload: slider });
  } catch (error) {
    yield put({ type: LISTAR_SLIDER_FAILURE, payload: error.message });
  }
}

export function* watchListarSlider() {
  yield takeEvery(LISTAR_SLIDER_REQUEST, listarSlider);
}

export function* showSlider(action) {
  try {
    
    const response = yield call(() => api.get(`/slider/${action.payload}`));
    const slider = response.data.slider;
    yield put({ type: SHOW_SLIDER_SUCCESS, payload: slider });
  } catch (error) {
    yield put({ type: SHOW_SLIDER_FAILURE, payload: error.message });
  }
}

export function* watchShowSlider() {
  yield takeEvery(SHOW_SLIDER_REQUEST, showSlider);
}

// add empresa
export function* criarSlider(action) {
  try {
    const response = yield call(() => api.post('/slider', action.payload.slider));
    const slider = response.data.slider;
    yield put({ type: CRIAR_SLIDER_SUCCESS, payload: slider });
  } catch (error) {
    yield put({ type: CRIAR_SLIDER_FAILURE, payload: error.message });
  }
}

export function* watchCriarSlider() {
  yield takeEvery(CRIAR_SLIDER_REQUEST, criarSlider);
}

// update empresa
export function* updateSlider(action) {
  try {
    const response = yield call(() => api.put(`/slider/${action.payload.id}`, action.payload.slider));
    const slider = response.data.slider;
    yield put({ type: UPDATE_SLIDER_SUCCESS, payload: slider });
  } catch (error) {
    yield put({ type: UPDATE_SLIDER_FAILURE, payload: error.message });
  }
}

export function* watchUpdateSlider() {
  yield takeEvery(UPDATE_SLIDER_REQUEST, updateSlider);
}

// delete empresa
export function* deleteSlider(action) {
  try {
    yield call(() => axios.delete(`/slider/${action.payload}`));
    yield put({ type: DELETE_SLIDER_SUCCESS, payload: action.payload });
  } catch (error) {
    yield put({ type: DELETE_SLIDER_FAILURE, payload: error.message });
  }
}

export function* watchDeleteSlider() {
  yield takeEvery(DELETE_SLIDER_REQUEST, deleteSlider);
}
