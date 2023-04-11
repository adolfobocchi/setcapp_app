import { combineReducers } from 'redux';
import authReducer from './Auth/reducers';
import empresaReducer from './Empresa/reducers';
import eventoReducer from './Evento/reducers';
import legislacaoReducer from './Legislacao/reducers';
import sliderReducer from './SliderItem/reducers';

const rootReducer = combineReducers({
  empresa: empresaReducer,
  auth: authReducer,
  legislacao: legislacaoReducer,
  evento: eventoReducer,
  slider: sliderReducer,
});

export default rootReducer;
