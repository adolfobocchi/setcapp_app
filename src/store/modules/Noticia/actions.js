export const LISTAR_NOTICIA_REQUEST = 'LISTAR_NOTICIA_REQUEST';
export const LISTAR_NOTICIA_SUCCESS = 'LISTAR_NOTICIA_SUCCESS';
export const LISTAR_NOTICIA_FAILURE = 'LISTAR_NOTICIA_FAILURE';

export const SHOW_NOTICIA_REQUEST = 'SHOW_NOTICIA_REQUEST';
export const SHOW_NOTICIA_SUCCESS = 'SHOW_NOTICIA_SUCCESS';
export const SHOW_NOTICIA_FAILURE = 'SHOW_NOTICIA_FAILURE';

export const CRIAR_NOTICIA_REQUEST = 'CRIAR_NOTICIA_REQUEST';
export const CRIAR_NOTICIA_SUCCESS = 'CRIAR_NOTICIA_SUCCESS';
export const CRIAR_NOTICIA_FAILURE = 'CRIAR_NOTICIA_FAILURE';

export const UPDATE_NOTICIA_REQUEST = 'UPDATE_NOTICIA_REQUEST';
export const UPDATE_NOTICIA_SUCCESS = 'UPDATE_NOTICIA_SUCCESS';
export const UPDATE_NOTICIA_FAILURE = 'UPDATE_NOTICIA_FAILURE';

export const DELETE_NOTICIA_REQUEST = 'DELETE_NOTICIA_REQUEST';
export const DELETE_NOTICIA_SUCCESS = 'DELETE_NOTICIA_SUCCESS';
export const DELETE_NOTICIA_FAILURE = 'DELETE_NOTICIA_FAILURE';



export const listarNoticiaRequest = () => ({
  type: LISTAR_NOTICIA_REQUEST,
});

export const listarNoticiaSuccess = (noticia) => ({
  type: LISTAR_NOTICIA_SUCCESS,
  payload: { noticia },
});

export const listarNoticiaFailure = (error) => ({
  type: LISTAR_NOTICIA_FAILURE,
  payload: { error },
});

export const showNoticiaRequest = (noticiaId) => ({
  type: SHOW_NOTICIA_REQUEST,
  payload: noticiaId,
});

export const showNoticiaSuccess = (noticia) => ({
  type: SHOW_NOTICIA_SUCCESS,
  payload: { noticia },
});

export const showNoticiaFailure = (error) => ({
  type: SHOW_NOTICIA_FAILURE,
  payload: { error },
});

export const criarNoticiaRequest = (noticia) => ({
  type: CRIAR_NOTICIA_REQUEST,
  payload: { noticia },
});

export const criarNoticiaSuccess = (noticia) => ({
  type: CRIAR_NOTICIA_SUCCESS,
  payload: { noticia },
});;

export const criarNoticiaFailure = (error) => ({
  type: CRIAR_NOTICIA_FAILURE,
  payload: { error },
});

export const updateNoticiaRequest = (id, noticia) => ({
  type: UPDATE_NOTICIA_REQUEST,
  payload: { id, noticia },
});

export const updateNoticiaSuccess = (noticia) => ({
  type: UPDATE_NOTICIA_SUCCESS,
  payload: { noticia },
});

export const updateNoticiaFailure = (error) => ({
  type: UPDATE_NOTICIA_FAILURE,
  payload: { error },
});

export const deleteNoticiaRequest = (id) => ({
  type: DELETE_NOTICIA_REQUEST,
  payload: id,
});

export const deleteNoticiaSuccess = (id) => ({
  type: DELETE_NOTICIA_SUCCESS,
  payload: {id},
});

export const deleteNoticiaFailure = (error) => ({
  type: DELETE_NOTICIA_FAILURE,
  payload: { error },
});

