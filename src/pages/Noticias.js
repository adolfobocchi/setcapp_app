import React, { useLayoutEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { listarNoticiaRequest, showNoticiaRequest } from '../store/modules/Noticia/actions';
import { PageAreaContent } from '../components/styled';
import { dataTimeFormatada } from '../utils/formats';
import styled from 'styled-components';
import Modal from '../components/Modal';

const NoticiaHeader = styled.div`
    text-align: center;
    margin-top: 20px;
    margin-bottom: 20px;
    p {
        margin-top: 20px;
    }
`

const Home = ({ loading, noticia, noticias, fetchNoticias }) => {
  useLayoutEffect(()=> {
    fetchNoticias()
  },[fetchNoticias])
  if (loading ) {
    return (<Modal />)
  }
  return (
    <>
      {noticias &&
        <>
          <NoticiaHeader>
            <h2>{noticia.titulo}</h2>
            <p>Publicada em:{dataTimeFormatada(noticia.data_hora)}</p>
          </NoticiaHeader>

          <PageAreaContent background='rgba(254,254,254,0.7)' altura={400} dangerouslySetInnerHTML={{ __html: noticia.conteudo }}></PageAreaContent>

        </>
      }
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    loading: state.noticia.loading,
    noticias: state.noticia.noticias,
    noticia: state.noticia.noticia,
    error: state.noticia.error
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchNoticias: () => dispatch(listarNoticiaRequest())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home)