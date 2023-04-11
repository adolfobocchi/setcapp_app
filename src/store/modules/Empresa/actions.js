export const LISTAR_EMPRESA_REQUEST = 'LISTAR_EMPRESA_REQUEST';
export const LISTAR_EMPRESA_SUCCESS = 'LISTAR_EMPRESA_SUCCESS';
export const LISTAR_EMPRESA_FAILURE = 'LISTAR_EMPRESA_FAILURE';

export const SHOW_EMPRESA_REQUEST = 'SHOW_EMPRESA_REQUEST';
export const SHOW_EMPRESA_SUCCESS = 'SHOW_EMPRESA_SUCCESS';
export const SHOW_EMPRESA_FAILURE = 'SHOW_EMPRESA_FAILURE';

export const CRIAR_EMPRESA_REQUEST = 'CRIAR_EMPRESA_REQUEST';
export const CRIAR_EMPRESA_SUCCESS = 'CRIAR_EMPRESA_SUCCESS';
export const CRIAR_EMPRESA_FAILURE = 'CRIAR_EMPRESA_FAILURE';

export const UPDATE_EMPRESA_REQUEST = 'UPDATE_EMPRESA_REQUEST';
export const UPDATE_EMPRESA_SUCCESS = 'UPDATE_EMPRESA_SUCCESS';
export const UPDATE_EMPRESA_FAILURE = 'UPDATE_EMPRESA_FAILURE';

export const DELETE_EMPRESA_REQUEST = 'DELETE_EMPRESA_REQUEST';
export const DELETE_EMPRESA_SUCCESS = 'DELETE_EMPRESA_SUCCESS';
export const DELETE_EMPRESA_FAILURE = 'DELETE_EMPRESA_FAILURE';



export const listarEmpresaRequest = () => ({
  type: LISTAR_EMPRESA_REQUEST,
});

export const listarEmpresaSuccess = (empresa) => ({
  type: LISTAR_EMPRESA_SUCCESS,
  payload: { empresa },
});

export const listarEmpresaFailure = (error) => ({
  type: LISTAR_EMPRESA_FAILURE,
  payload: { error },
});

export const showEmpresaRequest = (empresaId) => ({
  type: SHOW_EMPRESA_REQUEST,
  payload: empresaId,
});

export const showEmpresaSuccess = (empresa) => ({
  type: SHOW_EMPRESA_SUCCESS,
  payload: { empresa },
});

export const showEmpresaFailure = (error) => ({
  type: SHOW_EMPRESA_FAILURE,
  payload: { error },
});

export const criarEmpresaRequest = (empresa) => ({
  type: CRIAR_EMPRESA_REQUEST,
  payload: { empresa },
});

export const criarEmpresaSuccess = (empresa) => ({
  type: CRIAR_EMPRESA_SUCCESS,
  payload: { empresa },
});;

export const criarEmpresaFailure = (error) => ({
  type: CRIAR_EMPRESA_FAILURE,
  payload: { error },
});

export const updateEmpresaRequest = (id, empresa) => ({
  type: UPDATE_EMPRESA_REQUEST,
  payload: { id, empresa },
});

export const updateEmpresaSuccess = (empresa) => ({
  type: UPDATE_EMPRESA_SUCCESS,
  payload: { empresa },
});

export const updateEmpresaFailure = (error) => ({
  type: UPDATE_EMPRESA_FAILURE,
  payload: { error },
});

export const deleteEmpresaRequest = (id) => ({
  type: DELETE_EMPRESA_REQUEST,
  payload: { id },
});

export const deleteEmpresaSuccess = (id) => ({
  type: DELETE_EMPRESA_SUCCESS,
  payload: { id },
});

export const deleteEmpresaFailure = (error) => ({
  type: DELETE_EMPRESA_FAILURE,
  payload: { error },
});

