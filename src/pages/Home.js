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
import { listarServicoRequest } from '../store/modules/Servico/actions';
import { listarNoticiaRequest } from '../store/modules/Noticia/actions';
import { listarConfederadoRequest } from '../store/modules/Confederado/actions';

const API_URL = process.env.REACT_APP_URL_API;

const Home = ({loadin, empresas, fetchEmpresas, fetchLegislacao, fetchNoticia, fetchServico, fetchConfederado}) => {
    const [empresa, setEmpresa] = useState(empresas);
    useEffect(() => {
        fetchEmpresas();
        fetchLegislacao();
        fetchNoticia();
        fetchServico();
        fetchConfederado();
        setEmpresa(empresas)
    }, [empresas])
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
      fetchServico: () =>  dispatch(listarServicoRequest()),
      fetchNoticia: () =>  dispatch(listarNoticiaRequest()),
      fetchConfederado: () => dispatch(listarConfederadoRequest())
    };
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(Home)