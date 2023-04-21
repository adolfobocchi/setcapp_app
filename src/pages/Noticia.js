import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Navbar from '../components/NavBar';
import { useParams } from 'react-router-dom';
import { showNoticiaRequest } from '../store/modules/Noticia/actions';
import { PageAreaContent } from '../components/styled';
import { dataTimeFormatada } from '../utils/formats';
import styled from 'styled-components';

const API_URL = process.env.REACT_APP_URL_API;

const NoticiaHeader = styled.div`
    text-align: center;
    margin-top: 20px;
    margin-bottom: 20px;
    p {
        margin-top: 20px;
    }
`

const Home = ({loading, noticias, showNoticia, error}) => {
    const [noticia, setNoticia] = useState(noticias);
    let { id } = useParams();
    useEffect(() => {
        showNoticia(id);
        setNoticia(noticias);
    }, [noticias])
    return(
        <>
        <Header />
        <Navbar />
        <NoticiaHeader>
        <h2>{noticia.titulo}</h2>
        <p>Publicada em:{dataTimeFormatada(noticia.data_hora)}</p>
        </NoticiaHeader>
        
        <PageAreaContent  background='rgba(254,254,254,0.7)'  altura={400} dangerouslySetInnerHTML={{ __html: noticia.conteudo }}></PageAreaContent>
        <Footer />
        </>
    )
}

const mapStateToProps = state => {
    return {
      loading: state.noticia.loading,
      noticias: state.noticia.noticia,
      error: state.noticia.error
    };
  };


  const mapDispatchToProps = dispatch => {
    return {
      showNoticia: (id) => dispatch(showNoticiaRequest(id))
    };
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(Home)