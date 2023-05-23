import {  call, put, all, takeLatest } from 'redux-saga/effects';

import {
  SEARCH_REQUEST,
  SEARCH_SUCCESS,
  SEARCH_FAILURE,
} from './actions';

import api from '../../../services/api';

export function* listarSearch(action) {
  console.log(action.payload.query);
  try {
    const response = yield call(() => api.get(`/search/?q=${action.payload.query}`));
    const resultado = response.data;
    yield put({ type: SEARCH_SUCCESS, payload: resultado });
  } catch (error) {
    yield put({ type: SEARCH_FAILURE, payload: error.message });
  }
}

export default all([
  takeLatest(SEARCH_REQUEST, listarSearch),
])