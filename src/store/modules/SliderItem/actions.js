export const LISTAR_SLIDER_REQUEST = 'LISTAR_SLIDER_REQUEST';
export const LISTAR_SLIDER_SUCCESS = 'LISTAR_SLIDER_SUCCESS';
export const LISTAR_SLIDER_FAILURE = 'LISTAR_SLIDER_FAILURE';

export const SHOW_SLIDER_REQUEST = 'SHOW_SLIDER_REQUEST';
export const SHOW_SLIDER_SUCCESS = 'SHOW_SLIDER_SUCCESS';
export const SHOW_SLIDER_FAILURE = 'SHOW_SLIDER_FAILURE';

export const CRIAR_SLIDER_REQUEST = 'CRIAR_SLIDER_REQUEST';
export const CRIAR_SLIDER_SUCCESS = 'CRIAR_SLIDER_SUCCESS';
export const CRIAR_SLIDER_FAILURE = 'CRIAR_SLIDER_FAILURE';

export const UPDATE_SLIDER_REQUEST = 'UPDATE_SLIDER_REQUEST';
export const UPDATE_SLIDER_SUCCESS = 'UPDATE_SLIDER_SUCCESS';
export const UPDATE_SLIDER_FAILURE = 'UPDATE_SLIDER_FAILURE';

export const DELETE_SLIDER_REQUEST = 'DELETE_SLIDER_REQUEST';
export const DELETE_SLIDER_SUCCESS = 'DELETE_SLIDER_SUCCESS';
export const DELETE_SLIDER_FAILURE = 'DELETE_SLIDER_FAILURE';



export const listarSliderRequest = () => ({
  type: LISTAR_SLIDER_REQUEST,
});

export const listarSliderSuccess = (slider) => ({
  type: LISTAR_SLIDER_SUCCESS,
  payload: { slider },
});

export const listarSliderFailure = (error) => ({
  type: LISTAR_SLIDER_FAILURE,
  payload: { error },
});

export const showSliderRequest = (sliderId) => ({
  type: SHOW_SLIDER_REQUEST,
  payload: sliderId,
});

export const showSliderSuccess = (slider) => ({
  type: SHOW_SLIDER_SUCCESS,
  payload: { slider },
});

export const showSliderFailure = (error) => ({
  type: SHOW_SLIDER_FAILURE,
  payload: { error },
});

export const criarSliderRequest = (slider) => ({
  type: CRIAR_SLIDER_REQUEST,
  payload: { slider },
});

export const criarSliderSuccess = (slider) => ({
  type: CRIAR_SLIDER_SUCCESS,
  payload: { slider },
});;

export const criarSliderFailure = (error) => ({
  type: CRIAR_SLIDER_FAILURE,
  payload: { error },
});

export const updateSliderRequest = (id, slider) => ({
  type: UPDATE_SLIDER_REQUEST,
  payload: { id, slider },
});

export const updateSliderSuccess = (slider) => ({
  type: UPDATE_SLIDER_SUCCESS,
  payload: { slider },
});

export const updateSliderFailure = (error) => ({
  type: UPDATE_SLIDER_FAILURE,
  payload: { error },
});

export const deleteSliderRequest = (id) => ({
  type: DELETE_SLIDER_REQUEST,
  payload: { id },
});

export const deleteSliderSuccess = (id) => ({
  type: DELETE_SLIDER_SUCCESS,
  payload: { id },
});

export const deleteSliderFailure = (error) => ({
  type: DELETE_SLIDER_FAILURE,
  payload: { error },
});

