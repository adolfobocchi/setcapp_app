export const LISTAR_CURRICULUM_REQUEST = 'LISTAR_CURRICULUM_REQUEST';
export const LISTAR_CURRICULUM_SUCCESS = 'LISTAR_CURRICULUM_SUCCESS';
export const LISTAR_CURRICULUM_FAILURE = 'LISTAR_CURRICULUM_FAILURE';

export const SHOW_CURRICULUM_REQUEST = 'SHOW_CURRICULUM_REQUEST';
export const SHOW_CURRICULUM_SUCCESS = 'SHOW_CURRICULUM_SUCCESS';
export const SHOW_CURRICULUM_FAILURE = 'SHOW_CURRICULUM_FAILURE';

export const CRIAR_CURRICULUM_REQUEST = 'CRIAR_CURRICULUM_REQUEST';
export const CRIAR_CURRICULUM_SUCCESS = 'CRIAR_CURRICULUM_SUCCESS';
export const CRIAR_CURRICULUM_FAILURE = 'CRIAR_CURRICULUM_FAILURE';

export const UPDATE_CURRICULUM_REQUEST = 'UPDATE_CURRICULUM_REQUEST';
export const UPDATE_CURRICULUM_SUCCESS = 'UPDATE_CURRICULUM_SUCCESS';
export const UPDATE_CURRICULUM_FAILURE = 'UPDATE_CURRICULUM_FAILURE';

export const DELETE_CURRICULUM_REQUEST = 'DELETE_CURRICULUM_REQUEST';
export const DELETE_CURRICULUM_SUCCESS = 'DELETE_CURRICULUM_SUCCESS';
export const DELETE_CURRICULUM_FAILURE = 'DELETE_CURRICULUM_FAILURE';



export const listarCurriculumRequest = () => ({
  type: LISTAR_CURRICULUM_REQUEST,
});

export const listarCurriculumSuccess = (curriculum) => ({
  type: LISTAR_CURRICULUM_SUCCESS,
  payload: { curriculum },
});

export const listarCurriculumFailure = (error) => ({
  type: LISTAR_CURRICULUM_FAILURE,
  payload: { error },
});

export const showCurriculumRequest = (curriculumId) => ({
  type: SHOW_CURRICULUM_REQUEST,
  payload: curriculumId,
});

export const showCurriculumSuccess = (curriculum) => ({
  type: SHOW_CURRICULUM_SUCCESS,
  payload: { curriculum },
});

export const showCurriculumFailure = (error) => ({
  type: SHOW_CURRICULUM_FAILURE,
  payload: { error },
});

export const criarCurriculumRequest = (curriculum) => ({
  type: CRIAR_CURRICULUM_REQUEST,
  payload: { curriculum },
});

export const criarCurriculumSuccess = (curriculum) => ({
  type: CRIAR_CURRICULUM_SUCCESS,
  payload: { curriculum },
});;

export const criarCurriculumFailure = (error) => ({
  type: CRIAR_CURRICULUM_FAILURE,
  payload: { error },
});

export const updateCurriculumRequest = (id, curriculum) => ({
  type: UPDATE_CURRICULUM_REQUEST,
  payload: { id, curriculum },
});

export const updateCurriculumSuccess = (curriculum) => ({
  type: UPDATE_CURRICULUM_SUCCESS,
  payload: { curriculum },
});

export const updateCurriculumFailure = (error) => ({
  type: UPDATE_CURRICULUM_FAILURE,
  payload: { error },
});

export const deleteCurriculumRequest = (id) => ({
  type: DELETE_CURRICULUM_REQUEST,
  payload: id,
});

export const deleteCurriculumSuccess = (id) => ({
  type: DELETE_CURRICULUM_SUCCESS,
  payload: id,
});

export const deleteCurriculumFailure = (error) => ({
  type: DELETE_CURRICULUM_FAILURE,
  payload: { error },
});

