import { all } from "redux-saga/effects";
import acordo from './Acordo/sagas';
import antt from './Antt/sagas';
import associado from './Associado/sagas';
import auth from './Auth/sagas';
import confederado from './Confederado/sagas';
import contato from './Contato/sagas';
import empresa from './Empresa/sagas';
import evento from './Evento/sagas';
import legislacao from './Legislacao/sagas';
import noticia from './Noticia/sagas';
import servico from './Servico/sagas';
import slider from './SliderItem/sagas';

export default function* rootSaga() {
  return yield all([
    acordo,
    antt,
    associado,
    auth,
    confederado,
    contato,
    empresa,
    evento,
    legislacao,
    noticia,
    servico,
    slider
  ]);
}
