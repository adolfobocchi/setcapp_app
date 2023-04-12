export const LISTAR_SERVICO_REQUEST = 'LISTAR_SERVICO_REQUEST';
export const LISTAR_SERVICO_SUCCESS = 'LISTAR_SERVICO_SUCCESS';
export const LISTAR_SERVICO_FAILURE = 'LISTAR_SERVICO_FAILURE';

export const SHOW_SERVICO_REQUEST = 'SHOW_SERVICO_REQUEST';
export const SHOW_SERVICO_SUCCESS = 'SHOW_SERVICO_SUCCESS';
export const SHOW_SERVICO_FAILURE = 'SHOW_SERVICO_FAILURE';

export const CRIAR_SERVICO_REQUEST = 'CRIAR_SERVICO_REQUEST';
export const CRIAR_SERVICO_SUCCESS = 'CRIAR_SERVICO_SUCCESS';
export const CRIAR_SERVICO_FAILURE = 'CRIAR_SERVICO_FAILURE';

export const UPDATE_SERVICO_REQUEST = 'UPDATE_SERVICO_REQUEST';
export const UPDATE_SERVICO_SUCCESS = 'UPDATE_SERVICO_SUCCESS';
export const UPDATE_SERVICO_FAILURE = 'UPDATE_SERVICO_FAILURE';

export const DELETE_SERVICO_REQUEST = 'DELETE_SERVICO_REQUEST';
export const DELETE_SERVICO_SUCCESS = 'DELETE_SERVICO_SUCCESS';
export const DELETE_SERVICO_FAILURE = 'DELETE_SERVICO_FAILURE';



export const listarServicoRequest = () => ({
  type: LISTAR_SERVICO_REQUEST,
});

export const listarServicoSuccess = (servico) => ({
  type: LISTAR_SERVICO_SUCCESS,
  payload: { servico },
});

export const listarServicoFailure = (error) => ({
  type: LISTAR_SERVICO_FAILURE,
  payload: { error },
});

export const showServicoRequest = (servicoId) => ({
  type: SHOW_SERVICO_REQUEST,
  payload: servicoId,
});

export const showServicoSuccess = (servico) => ({
  type: SHOW_SERVICO_SUCCESS,
  payload: { servico },
});

export const showServicoFailure = (error) => ({
  type: SHOW_SERVICO_FAILURE,
  payload: { error },
});

export const criarServicoRequest = (servico) => ({
  type: CRIAR_SERVICO_REQUEST,
  payload: { servico },
});

export const criarServicoSuccess = (servico) => ({
  type: CRIAR_SERVICO_SUCCESS,
  payload: { servico },
});;

export const criarServicoFailure = (error) => ({
  type: CRIAR_SERVICO_FAILURE,
  payload: { error },
});

export const updateServicoRequest = (id, servico) => ({
  type: UPDATE_SERVICO_REQUEST,
  payload: { id, servico },
});

export const updateServicoSuccess = (servico) => ({
  type: UPDATE_SERVICO_SUCCESS,
  payload: { servico },
});

export const updateServicoFailure = (error) => ({
  type: UPDATE_SERVICO_FAILURE,
  payload: { error },
});

export const deleteServicoRequest = (id) => ({
  type: DELETE_SERVICO_REQUEST,
  payload: { id },
});

export const deleteServicoSuccess = (id) => ({
  type: DELETE_SERVICO_SUCCESS,
  payload: { id },
});

export const deleteServicoFailure = (error) => ({
  type: DELETE_SERVICO_FAILURE,
  payload: { error },
});

