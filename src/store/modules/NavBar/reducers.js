import { TOGGLE_NAVBAR } from './actions';

const initialState = {
  visible: false,
};

export default function navbarReducer(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_NAVBAR:
      return {
        ...state,
        visible: !state.visible
      };
    default:
      return state;
  }
}
