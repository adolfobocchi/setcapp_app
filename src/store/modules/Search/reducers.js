import {
    SEARCH_REQUEST,
    SEARCH_SUCCESS,
    SEARCH_FAILURE,
    
  } from './actions'
  
  const initialState = {
    loading: false,
    resultado: [],
    error: '',
  };
  
  const searchReducer = (state = initialState, action) => {
    switch (action.type) {
      
      case SEARCH_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case SEARCH_SUCCESS:
        console.log(action.payload);
        return {
          loading: false,
          resultado: [...action.payload],
          error: '',
        };
      case SEARCH_FAILURE:
        return {
          loading: false,
          resultado: [],
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default searchReducer;
  