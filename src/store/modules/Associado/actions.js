export const LISTAR_ASSOCIADO_REQUEST = 'LISTAR_ASSOCIADO_REQUEST';
export const LISTAR_ASSOCIADO_SUCCESS = 'LISTAR_ASSOCIADO_SUCCESS';
export const LISTAR_ASSOCIADO_FAILURE = 'LISTAR_ASSOCIADO_FAILURE';

export const SHOW_ASSOCIADO_REQUEST = 'SHOW_ASSOCIADO_REQUEST';
export const SHOW_ASSOCIADO_SUCCESS = 'SHOW_ASSOCIADO_SUCCESS';
export const SHOW_ASSOCIADO_FAILURE = 'SHOW_ASSOCIADO_FAILURE';

export const CRIAR_ASSOCIADO_REQUEST = 'CRIAR_ASSOCIADO_REQUEST';
export const CRIAR_ASSOCIADO_SUCCESS = 'CRIAR_ASSOCIADO_SUCCESS';
export const CRIAR_ASSOCIADO_FAILURE = 'CRIAR_ASSOCIADO_FAILURE';

export const UPDATE_ASSOCIADO_REQUEST = 'UPDATE_ASSOCIADO_REQUEST';
export const UPDATE_ASSOCIADO_SUCCESS = 'UPDATE_ASSOCIADO_SUCCESS';
export const UPDATE_ASSOCIADO_FAILURE = 'UPDATE_ASSOCIADO_FAILURE';

export const DELETE_ASSOCIADO_REQUEST = 'DELETE_ASSOCIADO_REQUEST';
export const DELETE_ASSOCIADO_SUCCESS = 'DELETE_ASSOCIADO_SUCCESS';
export const DELETE_ASSOCIADO_FAILURE = 'DELETE_ASSOCIADO_FAILURE';



export const listarAssociadoRequest = () => ({
  type: LISTAR_ASSOCIADO_REQUEST,
});

export const listarAssociadoSuccess = (associado) => ({
  type: LISTAR_ASSOCIADO_SUCCESS,
  payload: { associado },
});

export const listarAssociadoFailure = (error) => ({
  type: LISTAR_ASSOCIADO_FAILURE,
  payload: { error },
});

export const showAssociadoRequest = (associadoId) => ({
  type: SHOW_ASSOCIADO_REQUEST,
  payload: associadoId,
});

export const showAssociadoSuccess = (associado) => ({
  type: SHOW_ASSOCIADO_SUCCESS,
  payload: { associado },
});

export const showAssociadoFailure = (error) => ({
  type: SHOW_ASSOCIADO_FAILURE,
  payload: { error },
});

export const criarAssociadoRequest = (associado) => ({
  type: CRIAR_ASSOCIADO_REQUEST,
  payload: { associado },
});

export const criarAssociadoSuccess = (associado) => ({
  type: CRIAR_ASSOCIADO_SUCCESS,
  payload: { associado },
});;

export const criarAssociadoFailure = (error) => ({
  type: CRIAR_ASSOCIADO_FAILURE,
  payload: { error },
});

export const updateAssociadoRequest = (id, associado) => ({
  type: UPDATE_ASSOCIADO_REQUEST,
  payload: { id, associado },
});

export const updateAssociadoSuccess = (associado) => ({
  type: UPDATE_ASSOCIADO_SUCCESS,
  payload: { associado },
});

export const updateAssociadoFailure = (error) => ({
  type: UPDATE_ASSOCIADO_FAILURE,
  payload: { error },
});

export const deleteAssociadoRequest = (id) => ({
  type: DELETE_ASSOCIADO_REQUEST,
  payload: id,
});

export const deleteAssociadoSuccess = (id) => ({
  type: DELETE_ASSOCIADO_SUCCESS,
  payload: {id} ,
});

export const deleteAssociadoFailure = (error) => ({
  type: DELETE_ASSOCIADO_FAILURE,
  payload: { error },
});

