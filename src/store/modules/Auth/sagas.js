// sagas.js

import { call, put, takeLatest } from 'redux-saga/effects';
import { LOGIN_REQUEST, loginSuccess, loginFailure } from './actions';
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
