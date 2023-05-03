import { combineReducers } from 'redux';
import acordoReducer from './Acordo/reducers';
import authReducer from './Auth/reducers';
import confederadoReducer from './Confederado/reducers';
import contatoReducer from './Contato/reducers';
import empresaReducer from './Empresa/reducers';
import eventoReducer from './Evento/reducers';
import legislacaoReducer from './Legislacao/reducers';
import noticiaReducer from './Noticia/reducers';
import servicoReducer from './Servico/reducers';
import sliderReducer from './SliderItem/reducers';
import anttReducer from './Antt/reducers';
import associadoReducer from './Associado/reducers';
import confirmationReducer from './Confirmation/reducers';

const rootReducer = combineReducers({

  auth: authReducer,
  empresa: empresaReducer,
  legislacao: legislacaoReducer,
  evento: eventoReducer,
  slider: sliderReducer,
  noticia: noticiaReducer,
  servico: servicoReducer,
  confederado: confederadoReducer,
  acordo: acordoReducer,
  antt: anttReducer,
  contato: contatoReducer,
  associado: associadoReducer,
  confirmation: confirmationReducer,
});

export default rootReducer;
