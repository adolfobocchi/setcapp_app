import { all, call } from "redux-saga/effects";
import {authSaga, login} from "./Auth/sagas";
import { criarEmpresa, listarEmpresa, showEmpresa, updateEmpresa, deleteEmpresa, watchCriarEmpresa, watchShowEmpresa, watchListarEmpresa, watchUpdateEmpresa, watchDeleteEmpresa } from "./Empresa/sagas";
import { criarEvento, deleteEvento, listarEvento, showEvento, updateEvento, watchCriarEvento, watchDeleteEvento, watchListarEvento, watchShowEvento, watchUpdateEvento } from "./Evento/sagas";
import { criarLegislacao, deleteLegislacao, listarLegislacao, showLegislacao, updateLegislacao, watchCriarLegislacao, watchDeleteLegislacao, watchListarLegislacao, watchShowLegislacao, watchUpdateLegislacao } from './Legislacao/sagas'
import { criarSlider, deleteSlider, listarSlider, showSlider, updateSlider, watchCriarSlider, watchDeleteSlider, watchListarSlider, watchShowSlider, watchUpdateSlider } from "./SliderItem/sagas";

export default function* rootSaga() {
  yield all([
    call(criarEmpresa),
    call(listarEmpresa),
    call(showEmpresa),
    call(updateEmpresa),
    call(deleteEmpresa),
    call(watchCriarEmpresa),
    call(watchDeleteEmpresa),
    call(watchListarEmpresa),
    call(watchShowEmpresa),
    call(watchUpdateEmpresa),
    call(authSaga),
    call(login),
    call(criarLegislacao),
    call(listarLegislacao),
    call(showLegislacao),
    call(updateLegislacao),
    call(deleteLegislacao),
    call(watchCriarLegislacao),
    call(watchDeleteLegislacao),
    call(watchListarLegislacao),
    call(watchShowLegislacao),
    call(watchUpdateLegislacao),
    call(criarEvento),
    call(listarEvento),
    call(showEvento),
    call(updateEvento),
    call(deleteEvento),
    call(watchCriarEvento),
    call(watchDeleteEvento),
    call(watchListarEvento),
    call(watchShowEvento),
    call(watchUpdateEvento),
    call(criarSlider),
    call(listarSlider),
    call(showSlider),
    call(updateSlider),
    call(deleteSlider),
    call(watchCriarSlider),
    call(watchDeleteSlider),
    call(watchListarSlider),
    call(watchShowSlider),
    call(watchUpdateSlider),
  ]);
}
