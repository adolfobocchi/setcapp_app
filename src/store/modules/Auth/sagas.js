// sagas.js

import { all, call, put, select, takeLatest } from 'redux-saga/effects';
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



export default all([
  takeLatest(LOGIN_REQUEST, login)
])
