import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { GaleriaArea } from '../components/empresa/styled';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Navbar from '../components/NavBar';
import Titulo from '../components/Titulo';

const Home = ({loading, empresas, error}) => {
    const [empresa, setEmpresa] = useState(empresas);
    useEffect(() => {
        setEmpresa(empresas)
    }, [empresas])
    return(
        <>
        <Header empresa={empresa}  />
        <Navbar />
        <h3>Estrutura</h3>
        <GaleriaArea >
        {empresa?.imagens?.map(imagem => {
              return (<img key={imagem.id} src={`http://localhost:3001/images/${imagem.url}`} style={{margin: 8, width: 'auto', height: 200 }} />)
            })}
            </GaleriaArea>
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