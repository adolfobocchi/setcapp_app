import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Navbar from '../components/NavBar';
import { listarEmpresaRequest } from '../store/modules/Empresa/actions';
import styled from 'styled-components';
import Modal from '../components/Modal';

const ContentArea = styled.div`
  display: flex;
  flex-direction: column;
  width: 90vw;
`

const Home = ({ loading, empresas, fetchEmpresas, children }) => { 

  useEffect(() => {
    fetchEmpresas();
    document.title = '::SETCAPP';
  }, [fetchEmpresas]);

  if(loading) {
    return <Modal />
  }

  return (
    <ContentArea>
      <Header />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </ContentArea>
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