import React, { useLayoutEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { PageAreaContent } from '../components/styled';
import { dataFormatada, dataTimeFormatada } from '../utils/formats';
import styled from 'styled-components';
import Modal from '../components/Modal';
import { showEventoRequest } from '../store/modules/Evento/actions';

const NoticiaHeader = styled.div`
    text-align: center;
    margin-top: 20px;
    margin-bottom: 20px;
    p {
        margin-top: 20px;
    }
`

const API_URL = process.env.REACT_APP_URL_API;

const Home = ({ loading, evento, showEvento }) => {
  let { id } = useParams();
  useLayoutEffect(()=> {
    showEvento(id)
  },[showEvento,id])
  if (loading ) {
    return (<Modal />)
  }
  return (
    <>
      {evento &&
        <>
          <NoticiaHeader>
            <h2>{evento.titulo}</h2>
            <p>Publicada em:{`${dataFormatada(evento.data)} - ${evento.hora}`}</p>
          </NoticiaHeader>

          <PageAreaContent background='rgba(254,254,254,0.7)' altura={'auto'} dangerouslySetInnerHTML={{ __html: evento.descricao }}></PageAreaContent>
          <div style={{ display: 'flex', flex: 1, flexWrap: 'wrap', flexDirection: 'row', alignItems: 'center' }}>
              {evento.imagens?.map(imagem => {
                return (
                  <div key={imagem.id} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 10 }}>
                    <img src={`${API_URL}/images/${imagem.url}`} style={{ height: 200 }} alt='imagem eventos' />

                  </div>

                )
              })}
            </div>
        </>
      }
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    loading: state.evento.loading,
    evento: state.evento.evento,
    error: state.evento.error
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    showEvento: (id) => dispatch(showEventoRequest(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home)