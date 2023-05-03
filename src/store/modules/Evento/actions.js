export const LISTAR_EVENTO_REQUEST = 'LISTAR_EVENTO_REQUEST';
export const LISTAR_EVENTO_SUCCESS = 'LISTAR_EVENTO_SUCCESS';
export const LISTAR_EVENTO_FAILURE = 'LISTAR_EVENTO_FAILURE';

export const SHOW_EVENTO_REQUEST = 'SHOW_EVENTO_REQUEST';
export const SHOW_EVENTO_SUCCESS = 'SHOW_EVENTO_SUCCESS';
export const SHOW_EVENTO_FAILURE = 'SHOW_EVENTO_FAILURE';

export const CRIAR_EVENTO_REQUEST = 'CRIAR_EVENTO_REQUEST';
export const CRIAR_EVENTO_SUCCESS = 'CRIAR_EVENTO_SUCCESS';
export const CRIAR_EVENTO_FAILURE = 'CRIAR_EVENTO_FAILURE';

export const UPDATE_EVENTO_REQUEST = 'UPDATE_EVENTO_REQUEST';
export const UPDATE_EVENTO_SUCCESS = 'UPDATE_EVENTO_SUCCESS';
export const UPDATE_EVENTO_FAILURE = 'UPDATE_EVENTO_FAILURE';

export const DELETE_EVENTO_REQUEST = 'DELETE_EVENTO_REQUEST';
export const DELETE_EVENTO_SUCCESS = 'DELETE_EVENTO_SUCCESS';
export const DELETE_EVENTO_FAILURE = 'DELETE_EVENTO_FAILURE';

export const DELETE_IMAGEMEVENTO_REQUEST = 'DELETE_IMAGEMEVENTO_REQUEST';
export const DELETE_IMAGEMEVENTO_SUCCESS = 'DELETE_IMAGEMEVENTO_SUCCESS';
export const DELETE_IMAGEMEVENTO_FAILURE = 'DELETE_IMAGEMEVENTO_FAILURE';


export const listarEventoRequest = () => ({
  type: LISTAR_EVENTO_REQUEST,
});

export const listarEventoSuccess = (evento) => ({
  type: LISTAR_EVENTO_SUCCESS,
  payload: { evento },
});

export const listarEventoFailure = (error) => ({
  type: LISTAR_EVENTO_FAILURE,
  payload: { error },
});

export const showEventoRequest = (eventoId) => ({
  type: SHOW_EVENTO_REQUEST,
  payload: eventoId,
});

export const showEventoSuccess = (evento) => ({
  type: SHOW_EVENTO_SUCCESS,
  payload: { evento },
});

export const showEventoFailure = (error) => ({
  type: SHOW_EVENTO_FAILURE,
  payload: { error },
});

export const criarEventoRequest = (evento) => ({
  type: CRIAR_EVENTO_REQUEST,
  payload: { evento },
});

export const criarEventoSuccess = (evento) => ({
  type: CRIAR_EVENTO_SUCCESS,
  payload: evento,
});;

export const criarEventoFailure = (error) => ({
  type: CRIAR_EVENTO_FAILURE,
  payload: { error },
});

export const updateEventoRequest = (id, evento) => ({
  type: UPDATE_EVENTO_REQUEST,
  payload: { id, evento },
});

export const updateEventoSuccess = (evento) => ({
  type: UPDATE_EVENTO_SUCCESS,
  payload: evento,
});

export const updateEventoFailure = (error) => ({
  type: UPDATE_EVENTO_FAILURE,
  payload: { error },
});

export const deleteEventoRequest = (id) => ({
  type: DELETE_EVENTO_REQUEST,
  payload: id,
});

export const deleteEventoSuccess = (id) => ({
  type: DELETE_EVENTO_SUCCESS,
  payload: id,
});

export const deleteEventoFailure = (error) => ({
  type: DELETE_EVENTO_FAILURE,
  payload: { error },
});

export const deleteImagemEventoRequest = (idEvento, idImagem ) => ({
  type: DELETE_IMAGEMEVENTO_REQUEST,
  payload: { idEvento, idImagem},
});

export const deleteImagemEventoSuccess = (idEvento, idImagem) => ({
  type: DELETE_IMAGEMEVENTO_SUCCESS,
  payload: { idEvento, idImagem },
});

export const deleteImagemEventoFailure = (error) => ({
  type: DELETE_IMAGEMEVENTO_FAILURE,
  payload: { error },
});

