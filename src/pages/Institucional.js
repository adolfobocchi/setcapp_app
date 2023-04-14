import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Navbar from '../components/NavBar';

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
        <div dangerouslySetInnerHTML={{ __html: empresa.institucional }}></div>
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