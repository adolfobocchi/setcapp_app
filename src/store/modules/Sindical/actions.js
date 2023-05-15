export const LISTAR_SINDICAL_REQUEST = 'LISTAR_SINDICAL_REQUEST';
export const LISTAR_SINDICAL_SUCCESS = 'LISTAR_SINDICAL_SUCCESS';
export const LISTAR_SINDICAL_FAILURE = 'LISTAR_SINDICAL_FAILURE';

export const SHOW_SINDICAL_REQUEST = 'SHOW_SINDICAL_REQUEST';
export const SHOW_SINDICAL_SUCCESS = 'SHOW_SINDICAL_SUCCESS';
export const SHOW_SINDICAL_FAILURE = 'SHOW_SINDICAL_FAILURE';

export const CRIAR_SINDICAL_REQUEST = 'CRIAR_SINDICAL_REQUEST';
export const CRIAR_SINDICAL_SUCCESS = 'CRIAR_SINDICAL_SUCCESS';
export const CRIAR_SINDICAL_FAILURE = 'CRIAR_SINDICAL_FAILURE';

export const UPDATE_SINDICAL_REQUEST = 'UPDATE_SINDICAL_REQUEST';
export const UPDATE_SINDICAL_SUCCESS = 'UPDATE_SINDICAL_SUCCESS';
export const UPDATE_SINDICAL_FAILURE = 'UPDATE_SINDICAL_FAILURE';

export const DELETE_SINDICAL_REQUEST = 'DELETE_SINDICAL_REQUEST';
export const DELETE_SINDICAL_SUCCESS = 'DELETE_SINDICAL_SUCCESS';
export const DELETE_SINDICAL_FAILURE = 'DELETE_SINDICAL_FAILURE';



export const listarSindicalRequest = () => ({
  type: LISTAR_SINDICAL_REQUEST,
});

export const listarSindicalSuccess = (sindical) => ({
  type: LISTAR_SINDICAL_SUCCESS,
  payload: { sindical },
});

export const listarSindicalFailure = (error) => ({
  type: LISTAR_SINDICAL_FAILURE,
  payload: { error },
});

export const showSindicalRequest = (sindicalId) => ({
  type: SHOW_SINDICAL_REQUEST,
  payload: sindicalId,
});

export const showSindicalSuccess = (sindical) => ({
  type: SHOW_SINDICAL_SUCCESS,
  payload: { sindical },
});

export const showSindicalFailure = (error) => ({
  type: SHOW_SINDICAL_FAILURE,
  payload: { error },
});

export const criarSindicalRequest = (sindical) => ({
  type: CRIAR_SINDICAL_REQUEST,
  payload: { sindical },
});

export const criarSindicalSuccess = (sindical) => ({
  type: CRIAR_SINDICAL_SUCCESS,
  payload: { sindical },
});;

export const criarSindicalFailure = (error) => ({
  type: CRIAR_SINDICAL_FAILURE,
  payload: { error },
});

export const updateSindicalRequest = (id, sindical) => ({
  type: UPDATE_SINDICAL_REQUEST,
  payload: { id, sindical },
});

export const updateSindicalSuccess = (sindical) => ({
  type: UPDATE_SINDICAL_SUCCESS,
  payload: { sindical },
});

export const updateSindicalFailure = (error) => ({
  type: UPDATE_SINDICAL_FAILURE,
  payload: { error },
});

export const deleteSindicalRequest = (id) => ({
  type: DELETE_SINDICAL_REQUEST,
  payload: id,
});

export const deleteSindicalSuccess = (id) => ({
  type: DELETE_SINDICAL_SUCCESS,
  payload: id,
});

export const deleteSindicalFailure = (error) => ({
  type: DELETE_SINDICAL_FAILURE,
  payload: { error },
});

