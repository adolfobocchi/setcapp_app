export const LISTAR_CONFEDERADO_REQUEST = 'LISTAR_CONFEDERADO_REQUEST';
export const LISTAR_CONFEDERADO_SUCCESS = 'LISTAR_CONFEDERADO_SUCCESS';
export const LISTAR_CONFEDERADO_FAILURE = 'LISTAR_CONFEDERADO_FAILURE';

export const SHOW_CONFEDERADO_REQUEST = 'SHOW_CONFEDERADO_REQUEST';
export const SHOW_CONFEDERADO_SUCCESS = 'SHOW_CONFEDERADO_SUCCESS';
export const SHOW_CONFEDERADO_FAILURE = 'SHOW_CONFEDERADO_FAILURE';

export const CRIAR_CONFEDERADO_REQUEST = 'CRIAR_CONFEDERADO_REQUEST';
export const CRIAR_CONFEDERADO_SUCCESS = 'CRIAR_CONFEDERADO_SUCCESS';
export const CRIAR_CONFEDERADO_FAILURE = 'CRIAR_CONFEDERADO_FAILURE';

export const UPDATE_CONFEDERADO_REQUEST = 'UPDATE_CONFEDERADO_REQUEST';
export const UPDATE_CONFEDERADO_SUCCESS = 'UPDATE_CONFEDERADO_SUCCESS';
export const UPDATE_CONFEDERADO_FAILURE = 'UPDATE_CONFEDERADO_FAILURE';

export const DELETE_CONFEDERADO_REQUEST = 'DELETE_CONFEDERADO_REQUEST';
export const DELETE_CONFEDERADO_SUCCESS = 'DELETE_CONFEDERADO_SUCCESS';
export const DELETE_CONFEDERADO_FAILURE = 'DELETE_CONFEDERADO_FAILURE';



export const listarConfederadoRequest = () => ({
  type: LISTAR_CONFEDERADO_REQUEST,
});

export const listarConfederadoSuccess = (confederado) => ({
  type: LISTAR_CONFEDERADO_SUCCESS,
  payload: { confederado },
});

export const listarConfederadoFailure = (error) => ({
  type: LISTAR_CONFEDERADO_FAILURE,
  payload: { error },
});

export const showConfederadoRequest = (confederadoId) => ({
  type: SHOW_CONFEDERADO_REQUEST,
  payload: confederadoId,
});

export const showConfederadoSuccess = (confederado) => ({
  type: SHOW_CONFEDERADO_SUCCESS,
  payload: { confederado },
});

export const showConfederadoFailure = (error) => ({
  type: SHOW_CONFEDERADO_FAILURE,
  payload: { error },
});

export const criarConfederadoRequest = (confederado) => ({
  type: CRIAR_CONFEDERADO_REQUEST,
  payload: { confederado },
});

export const criarConfederadoSuccess = (confederado) => ({
  type: CRIAR_CONFEDERADO_SUCCESS,
  payload: { confederado },
});;

export const criarConfederadoFailure = (error) => ({
  type: CRIAR_CONFEDERADO_FAILURE,
  payload: { error },
});

export const updateConfederadoRequest = (id, confederado) => ({
  type: UPDATE_CONFEDERADO_REQUEST,
  payload: { id, confederado },
});

export const updateConfederadoSuccess = (confederado) => ({
  type: UPDATE_CONFEDERADO_SUCCESS,
  payload: { confederado },
});

export const updateConfederadoFailure = (error) => ({
  type: UPDATE_CONFEDERADO_FAILURE,
  payload: { error },
});

export const deleteConfederadoRequest = (id) => ({
  type: DELETE_CONFEDERADO_REQUEST,
  payload: id,
});

export const deleteConfederadoSuccess = (id) => ({
  type: DELETE_CONFEDERADO_SUCCESS,
  payload: id,
});

export const deleteConfederadoFailure = (error) => ({
  type: DELETE_CONFEDERADO_FAILURE,
  payload: { error },
});

