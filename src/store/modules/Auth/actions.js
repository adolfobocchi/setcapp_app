export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const TOKEN_REQUEST = 'TOKEN_REQUEST';
export const TOKEN_SUCCESS = 'TOKEN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const TOKEN_FAILURE = 'TOKEN_FAILURE';

export const LOGOUT = 'LOGOUT';

export const loginRequest = (login, password, history) => ({
    type: LOGIN_REQUEST,
    payload: { login, password, history },
});

export const loginSuccess = (token, history) => ({
    type: LOGIN_SUCCESS,
    payload: { token, history },
});

export const tokenRequest = (history) => ({
    type: TOKEN_REQUEST,
    payload: { history },
});

export const tokenSuccess = (history) => ({
    type: TOKEN_SUCCESS,
    payload: { history },
});

export const loginFailure = (error) => ({
    type: LOGIN_FAILURE,
    payload: { error },
});

export const tokenFailure = (history) => ({
    type: TOKEN_FAILURE,
    payload: { history },
});

export const logout = () => ({
    type: LOGOUT,
});