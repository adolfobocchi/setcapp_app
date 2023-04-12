export const LISTAR_CONTATO_REQUEST = 'LISTAR_CONTATO_REQUEST';
export const LISTAR_CONTATO_SUCCESS = 'LISTAR_CONTATO_SUCCESS';
export const LISTAR_CONTATO_FAILURE = 'LISTAR_CONTATO_FAILURE';

export const SHOW_CONTATO_REQUEST = 'SHOW_CONTATO_REQUEST';
export const SHOW_CONTATO_SUCCESS = 'SHOW_CONTATO_SUCCESS';
export const SHOW_CONTATO_FAILURE = 'SHOW_CONTATO_FAILURE';

export const CRIAR_CONTATO_REQUEST = 'CRIAR_CONTATO_REQUEST';
export const CRIAR_CONTATO_SUCCESS = 'CRIAR_CONTATO_SUCCESS';
export const CRIAR_CONTATO_FAILURE = 'CRIAR_CONTATO_FAILURE';

export const UPDATE_CONTATO_REQUEST = 'UPDATE_CONTATO_REQUEST';
export const UPDATE_CONTATO_SUCCESS = 'UPDATE_CONTATO_SUCCESS';
export const UPDATE_CONTATO_FAILURE = 'UPDATE_CONTATO_FAILURE';

export const DELETE_CONTATO_REQUEST = 'DELETE_CONTATO_REQUEST';
export const DELETE_CONTATO_SUCCESS = 'DELETE_CONTATO_SUCCESS';
export const DELETE_CONTATO_FAILURE = 'DELETE_CONTATO_FAILURE';



export const listarContatoRequest = () => ({
  type: LISTAR_CONTATO_REQUEST,
});

export const listarContatoSuccess = (contato) => ({
  type: LISTAR_CONTATO_SUCCESS,
  payload: { contato },
});

export const listarContatoFailure = (error) => ({
  type: LISTAR_CONTATO_FAILURE,
  payload: { error },
});

export const showContatoRequest = (contatoId) => ({
  type: SHOW_CONTATO_REQUEST,
  payload: contatoId,
});

export const showContatoSuccess = (contato) => ({
  type: SHOW_CONTATO_SUCCESS,
  payload: { contato },
});

export const showContatoFailure = (error) => ({
  type: SHOW_CONTATO_FAILURE,
  payload: { error },
});

export const criarContatoRequest = (contato) => ({
  type: CRIAR_CONTATO_REQUEST,
  payload: { contato },
});

export const criarContatoSuccess = (contato) => ({
  type: CRIAR_CONTATO_SUCCESS,
  payload: { contato },
});;

export const criarContatoFailure = (error) => ({
  type: CRIAR_CONTATO_FAILURE,
  payload: { error },
});

export const updateContatoRequest = (id, contato) => ({
  type: UPDATE_CONTATO_REQUEST,
  payload: { id, contato },
});

export const updateContatoSuccess = (contato) => ({
  type: UPDATE_CONTATO_SUCCESS,
  payload: { contato },
});

export const updateContatoFailure = (error) => ({
  type: UPDATE_CONTATO_FAILURE,
  payload: { error },
});

export const deleteContatoRequest = (id) => ({
  type: DELETE_CONTATO_REQUEST,
  payload: { id },
});

export const deleteContatoSuccess = (id) => ({
  type: DELETE_CONTATO_SUCCESS,
  payload: { id },
});

export const deleteContatoFailure = (error) => ({
  type: DELETE_CONTATO_FAILURE,
  payload: { error },
});

