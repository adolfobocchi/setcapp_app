export const LISTAR_ACORDO_REQUEST = 'LISTAR_ACORDO_REQUEST';
export const LISTAR_ACORDO_SUCCESS = 'LISTAR_ACORDO_SUCCESS';
export const LISTAR_ACORDO_FAILURE = 'LISTAR_ACORDO_FAILURE';

export const SHOW_ACORDO_REQUEST = 'SHOW_ACORDO_REQUEST';
export const SHOW_ACORDO_SUCCESS = 'SHOW_ACORDO_SUCCESS';
export const SHOW_ACORDO_FAILURE = 'SHOW_ACORDO_FAILURE';

export const CRIAR_ACORDO_REQUEST = 'CRIAR_ACORDO_REQUEST';
export const CRIAR_ACORDO_SUCCESS = 'CRIAR_ACORDO_SUCCESS';
export const CRIAR_ACORDO_FAILURE = 'CRIAR_ACORDO_FAILURE';

export const UPDATE_ACORDO_REQUEST = 'UPDATE_ACORDO_REQUEST';
export const UPDATE_ACORDO_SUCCESS = 'UPDATE_ACORDO_SUCCESS';
export const UPDATE_ACORDO_FAILURE = 'UPDATE_ACORDO_FAILURE';

export const DELETE_ACORDO_REQUEST = 'DELETE_ACORDO_REQUEST';
export const DELETE_ACORDO_SUCCESS = 'DELETE_ACORDO_SUCCESS';
export const DELETE_ACORDO_FAILURE = 'DELETE_ACORDO_FAILURE';



export const listarAcordoRequest = () => ({
  type: LISTAR_ACORDO_REQUEST,
});

export const listarAcordoSuccess = (acordo) => ({
  type: LISTAR_ACORDO_SUCCESS,
  payload: { acordo },
});

export const listarAcordoFailure = (error) => ({
  type: LISTAR_ACORDO_FAILURE,
  payload: { error },
});

export const showAcordoRequest = (acordoId) => ({
  type: SHOW_ACORDO_REQUEST,
  payload: acordoId,
});

export const showAcordoSuccess = (acordo) => ({
  type: SHOW_ACORDO_SUCCESS,
  payload: { acordo },
});

export const showAcordoFailure = (error) => ({
  type: SHOW_ACORDO_FAILURE,
  payload: { error },
});

export const criarAcordoRequest = (acordo) => ({
  type: CRIAR_ACORDO_REQUEST,
  payload: { acordo },
});

export const criarAcordoSuccess = (acordo) => ({
  type: CRIAR_ACORDO_SUCCESS,
  payload: { acordo },
});;

export const criarAcordoFailure = (error) => ({
  type: CRIAR_ACORDO_FAILURE,
  payload: { error },
});

export const updateAcordoRequest = (id, acordo) => ({
  type: UPDATE_ACORDO_REQUEST,
  payload: { id, acordo },
});

export const updateAcordoSuccess = (acordo) => ({
  type: UPDATE_ACORDO_SUCCESS,
  payload: { acordo },
});

export const updateAcordoFailure = (error) => ({
  type: UPDATE_ACORDO_FAILURE,
  payload: { error },
});

export const deleteAcordoRequest = (id) => ({
  type: DELETE_ACORDO_REQUEST,
  payload: id,
});

export const deleteAcordoSuccess = (id) => ({
  type: DELETE_ACORDO_SUCCESS,
  payload: id,
});

export const deleteAcordoFailure = (error) => ({
  type: DELETE_ACORDO_FAILURE,
  payload: { error },
});

