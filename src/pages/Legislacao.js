import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Navbar from '../components/NavBar';

const API_URL = process.env.REACT_APP_URL_API;

const Home = ({loading, legislacaos, error}) => {
    const [legislacao, setLegislacao] = useState(legislacaos);
    useEffect(() => {
        setLegislacao(legislacaos)
    }, [legislacaos])
    return(
        <>
        <Header />
        <Navbar />
        <div dangerouslySetInnerHTML={{ __html: legislacao.conteudo }}></div>
        <Footer />
        </>
    )
}

const mapStateToProps = state => {
    return {
      loading: state.legislacao.loading,
      legislacaos: state.legislacao.legislacao,
      error: state.legislacao.error
    };
  };
  
  export default connect(mapStateToProps, null)(Home)