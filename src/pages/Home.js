import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import Banner from '../components/Banner';
import Destaque from '../components/Destaque';
import Federados from '../components/Federados';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Navbar from '../components/NavBar';
import Noticias from '../components/Noticias';
import Servicos from '../components/Servicos';
import { listarEmpresaRequest } from '../store/modules/Empresa/actions';
import ServicosFixo from '../components/ServicosFixos';
import { listarLegislacaoRequest } from '../store/modules/Legislacao/actions';

const API_URL = process.env.REACT_APP_URL_API;

const Home = ({loadin, empresas, fetchEmpresas, fetchLegislacao}) => {
    const [empresa, setEmpresa] = useState(empresas);
    useEffect(() => {
        fetchEmpresas();
        setEmpresa(empresas)
    }, [fetchEmpresas, empresas])
    return(
        <>
        <Header />
        <Navbar />
        <Banner />
        <Destaque />
        <Noticias />
        <ServicosFixo />
        <Servicos />
        <Federados />
        <Footer />
        </>
    )
}

const mapStateToProps = state => {
    return {
      loading: state.empresa.loading,
      empresas: state.empresa.empresa,
      error: state.empresa.error
    };
  };
  
  const mapDispatchToProps = dispatch => {
    return {
      fetchEmpresas: () => dispatch(listarEmpresaRequest()),
      fetchLegislacao: () => dispatch(listarLegislacaoRequest()),
    };
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(Home)