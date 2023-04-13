// sagas.js

import { call, put, select, takeLatest } from 'redux-saga/effects';
import { LOGIN_REQUEST, loginSuccess, loginFailure, TOKEN_REQUEST, tokenFailure } from './actions';
import api from '../../../services/api';

export function* login(action) {
  try {
    const response = yield call(() => api.post('/login', action.payload));
    yield put(loginSuccess(response.data.token, action.payload.history));
  } catch (error) {
    yield put(loginFailure(error));
  }
}

export function* authSaga() {
  yield takeLatest(LOGIN_REQUEST, login);
}

export function* verificaToken(action) {
  try {
    const token = yield select(state => state.auth.token);
    const response = yield call(() => api.post('/token', token));
    if (!response.data)
      yield put(tokenFailure(action.payload.history));
  } catch (error) {
    yield put(loginFailure(error));
  }
}

export function* watchVerificaToken() {
  yield takeLatest(TOKEN_REQUEST, verificaToken);
}


