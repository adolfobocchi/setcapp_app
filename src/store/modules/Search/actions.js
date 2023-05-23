export const SEARCH_REQUEST = 'SEARCH_REQUEST';
export const SEARCH_SUCCESS = 'SEARCH_SUCCESS';
export const SEARCH_FAILURE = 'SEARCH_FAILURE';



export const searchRequest = (query) => ({
  type: SEARCH_REQUEST,
  payload: { query },
});

export const searchSuccess = (resultado) => ({
  type: SEARCH_SUCCESS,
  payload: { resultado },
});

export const searchFailure = (error) => ({
  type: SEARCH_FAILURE,
  payload: { error },
});
