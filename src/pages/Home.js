import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { listarEmpresaRequest } from '../store/modules/Empresa/actions';

const Home = ({loadin, empresas, fetchEmpresas}) => {
    const [empresa, setEmpresa] = useState(empresas);
    useEffect(() => {
        fetchEmpresas();
        setEmpresa(empresas)
    }, [fetchEmpresas, empresas])
    return(
        <>
        <Header empresa={empresa}  />
        <Banner />
        <Footer empresa={empresa}/>
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
    };
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(Home)