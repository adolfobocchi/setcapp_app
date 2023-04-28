import { all } from "redux-saga/effects";
/*
import { criarAcordo, deleteAcordo, listarAcordo, showAcordo, updateAcordo, watchCriarAcordo, watchDeleteAcordo, watchListarAcordo, watchShowAcordo, watchUpdateAcordo } from "./Acordo/sagas";
import {authSaga, login, verificaToken, watchVerificaToken} from "./Auth/sagas";
import { criarConfederado, deleteConfederado, listarConfederado, showConfederado, updateConfederado, watchCriarConfederado, watchDeleteConfederado, watchListarConfederado, watchShowConfederado, watchUpdateConfederado } from "./Confederado/sagas";
import { criarContato, deleteContato, listarContato, showContato, updateContato, watchCriarContato, watchDeleteContato, watchListarContato, watchShowContato, watchUpdateContato } from "./Contato/sagas";
import { criarEmpresa, listarEmpresa, showEmpresa, updateEmpresa, deleteEmpresa, watchCriarEmpresa, watchShowEmpresa, watchListarEmpresa, watchUpdateEmpresa, watchDeleteEmpresa, watchDeleteImagemEmpresa, deleteImagemEmpresa } from "./Empresa/sagas";
import { criarEvento, deleteEvento, listarEvento, showEvento, updateEvento, watchCriarEvento, watchDeleteEvento, watchListarEvento, watchShowEvento, watchUpdateEvento } from "./Evento/sagas";
import { criarLegislacao, deleteLegislacao, listarLegislacao, showLegislacao, updateLegislacao, watchCriarLegislacao, watchDeleteLegislacao, watchListarLegislacao, watchShowLegislacao, watchUpdateLegislacao } from './Legislacao/sagas'
import { criarNoticia, deleteNoticia, listarNoticia, showNoticia, updateNoticia, watchCriarNoticia, watchDeleteNoticia, watchListarNoticia, watchShowNoticia, watchUpdateNoticia } from "./Noticia/sagas";
import { criarServico, deleteServico, listarServico, showServico, updateServico, watchCriarServico, watchDeleteServico, watchListarServico, watchShowServico, watchUpdateServico } from "./Servico/sagas";
import { criarSlider, deleteSlider, listarSlider, showSlider, updateSlider, watchCriarSlider, watchDeleteSlider, watchListarSlider, watchShowSlider, watchUpdateSlider } from "./SliderItem/sagas";
import { criarAntt, deleteAntt, listarAntt, showAntt, updateAntt, watchCriarAntt, watchDeleteAntt, watchListarAntt, watchShowAntt, watchUpdateAntt } from "./Antt/sagas";
import { deleteAssociado, showAssociado, updateAssociado, watchCriarAssociado, watchDeleteAssociado, watchListarAssociado, watchShowAssociado, watchUpdateAssociado } from "./Associado/sagas";
*/
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
