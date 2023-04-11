export const LISTAR_LEGISLACAO_REQUEST = 'LISTAR_LEGISLACAO_REQUEST';
export const LISTAR_LEGISLACAO_SUCCESS = 'LISTAR_LEGISLACAO_SUCCESS';
export const LISTAR_LEGISLACAO_FAILURE = 'LISTAR_LEGISLACAO_FAILURE';

export const SHOW_LEGISLACAO_REQUEST = 'SHOW_LEGISLACAO_REQUEST';
export const SHOW_LEGISLACAO_SUCCESS = 'SHOW_LEGISLACAO_SUCCESS';
export const SHOW_LEGISLACAO_FAILURE = 'SHOW_LEGISLACAO_FAILURE';

export const CRIAR_LEGISLACAO_REQUEST = 'CRIAR_LEGISLACAO_REQUEST';
export const CRIAR_LEGISLACAO_SUCCESS = 'CRIAR_LEGISLACAO_SUCCESS';
export const CRIAR_LEGISLACAO_FAILURE = 'CRIAR_LEGISLACAO_FAILURE';

export const UPDATE_LEGISLACAO_REQUEST = 'UPDATE_LEGISLACAO_REQUEST';
export const UPDATE_LEGISLACAO_SUCCESS = 'UPDATE_LEGISLACAO_SUCCESS';
export const UPDATE_LEGISLACAO_FAILURE = 'UPDATE_LEGISLACAO_FAILURE';

export const DELETE_LEGISLACAO_REQUEST = 'DELETE_LEGISLACAO_REQUEST';
export const DELETE_LEGISLACAO_SUCCESS = 'DELETE_LEGISLACAO_SUCCESS';
export const DELETE_LEGISLACAO_FAILURE = 'DELETE_LEGISLACAO_FAILURE';



export const listarLegislacaoRequest = () => ({
  type: LISTAR_LEGISLACAO_REQUEST,
});

export const listarLegislacaoSuccess = (legislacao) => ({
  type: LISTAR_LEGISLACAO_SUCCESS,
  payload: { legislacao },
});

export const listarLegislacaoFailure = (error) => ({
  type: LISTAR_LEGISLACAO_FAILURE,
  payload: { error },
});

export const showLegislacaoRequest = (legislacaoId) => ({
  type: SHOW_LEGISLACAO_REQUEST,
  payload: legislacaoId,
});

export const showLegislacaoSuccess = (legislacao) => ({
  type: SHOW_LEGISLACAO_SUCCESS,
  payload: { legislacao },
});

export const showLegislacaoFailure = (error) => ({
  type: SHOW_LEGISLACAO_FAILURE,
  payload: { error },
});

export const criarLegislacaoRequest = (legislacao) => ({
  type: CRIAR_LEGISLACAO_REQUEST,
  payload: { legislacao },
});

export const criarLegislacaoSuccess = (legislacao) => ({
  type: CRIAR_LEGISLACAO_SUCCESS,
  payload: { legislacao },
});;

export const criarLegislacaoFailure = (error) => ({
  type: CRIAR_LEGISLACAO_FAILURE,
  payload: { error },
});

export const updateLegislacaoRequest = (id, legislacao) => ({
  type: UPDATE_LEGISLACAO_REQUEST,
  payload: { id, legislacao },
});

export const updateLegislacaoSuccess = (legislacao) => ({
  type: UPDATE_LEGISLACAO_SUCCESS,
  payload: { legislacao },
});

export const updateLegislacaoFailure = (error) => ({
  type: UPDATE_LEGISLACAO_FAILURE,
  payload: { error },
});

export const deleteLegislacaoRequest = (id) => ({
  type: DELETE_LEGISLACAO_REQUEST,
  payload: { id },
});

export const deleteLegislacaoSuccess = (id) => ({
  type: DELETE_LEGISLACAO_SUCCESS,
  payload: { id },
});

export const deleteLegislacaoFailure = (error) => ({
  type: DELETE_LEGISLACAO_FAILURE,
  payload: { error },
});

