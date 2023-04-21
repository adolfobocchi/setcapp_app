export const LISTAR_ANTT_REQUEST = 'LISTAR_ANTT_REQUEST';
export const LISTAR_ANTT_SUCCESS = 'LISTAR_ANTT_SUCCESS';
export const LISTAR_ANTT_FAILURE = 'LISTAR_ANTT_FAILURE';

export const SHOW_ANTT_REQUEST = 'SHOW_ANTT_REQUEST';
export const SHOW_ANTT_SUCCESS = 'SHOW_ANTT_SUCCESS';
export const SHOW_ANTT_FAILURE = 'SHOW_ANTT_FAILURE';

export const CRIAR_ANTT_REQUEST = 'CRIAR_ANTT_REQUEST';
export const CRIAR_ANTT_SUCCESS = 'CRIAR_ANTT_SUCCESS';
export const CRIAR_ANTT_FAILURE = 'CRIAR_ANTT_FAILURE';

export const UPDATE_ANTT_REQUEST = 'UPDATE_ANTT_REQUEST';
export const UPDATE_ANTT_SUCCESS = 'UPDATE_ANTT_SUCCESS';
export const UPDATE_ANTT_FAILURE = 'UPDATE_ANTT_FAILURE';

export const DELETE_ANTT_REQUEST = 'DELETE_ANTT_REQUEST';
export const DELETE_ANTT_SUCCESS = 'DELETE_ANTT_SUCCESS';
export const DELETE_ANTT_FAILURE = 'DELETE_ANTT_FAILURE';



export const listarAnttRequest = () => ({
  type: LISTAR_ANTT_REQUEST,
});

export const listarAnttSuccess = (antt) => ({
  type: LISTAR_ANTT_SUCCESS,
  payload: { antt },
});

export const listarAnttFailure = (error) => ({
  type: LISTAR_ANTT_FAILURE,
  payload: { error },
});

export const showAnttRequest = (anttId) => ({
  type: SHOW_ANTT_REQUEST,
  payload: anttId,
});

export const showAnttSuccess = (antt) => ({
  type: SHOW_ANTT_SUCCESS,
  payload: { antt },
});

export const showAnttFailure = (error) => ({
  type: SHOW_ANTT_FAILURE,
  payload: { error },
});

export const criarAnttRequest = (antt) => ({
  type: CRIAR_ANTT_REQUEST,
  payload: { antt },
});

export const criarAnttSuccess = (antt) => ({
  type: CRIAR_ANTT_SUCCESS,
  payload: { antt },
});;

export const criarAnttFailure = (error) => ({
  type: CRIAR_ANTT_FAILURE,
  payload: { error },
});

export const updateAnttRequest = (id, antt) => ({
  type: UPDATE_ANTT_REQUEST,
  payload: { id, antt },
});

export const updateAnttSuccess = (antt) => ({
  type: UPDATE_ANTT_SUCCESS,
  payload: { antt },
});

export const updateAnttFailure = (error) => ({
  type: UPDATE_ANTT_FAILURE,
  payload: { error },
});

export const deleteAnttRequest = (id) => ({
  type: DELETE_ANTT_REQUEST,
  payload: { id },
});

export const deleteAnttSuccess = (id) => ({
  type: DELETE_ANTT_SUCCESS,
  payload: { id },
});

export const deleteAnttFailure = (error) => ({
  type: DELETE_ANTT_FAILURE,
  payload: { error },
});

