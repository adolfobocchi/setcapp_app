import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Navbar from '../components/NavBar';
import { PageAreaContent, SectionArea } from '../components/styled';

const API_URL = process.env.REACT_APP_URL_API;

const Home = ({loading, empresas, error}) => {
    const [empresa, setEmpresa] = useState(empresas);
    useEffect(() => {
        setEmpresa(empresas)
    }, [empresas])
    return(
        <>
        <Header empresa={empresa}  />
        <Navbar />
        <PageAreaContent  background='rgba(254,254,254,0.7)'  altura={400} dangerouslySetInnerHTML={{ __html: empresa.institucional }}></PageAreaContent>
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
  
  export default connect(mapStateToProps, null)(Home)