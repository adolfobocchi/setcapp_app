import React from 'react';
import { connect } from 'react-redux';
import { GaleriaArea } from '../components/empresa/styled';

const API_URL = process.env.REACT_APP_URL_API;

const Home = ({loading, empresas, error}) => {
    return(
        <>
        <h3>Estrutura</h3>
        <GaleriaArea >
        {empresas?.imagens?.map(imagem => {
              return (<img key={imagem.id} src={`${API_URL}/images/${imagem.url}`} style={{margin: 8, width: 'auto', height: 200 }} alt='imagem estrutura'/>)
            })}
            </GaleriaArea>
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