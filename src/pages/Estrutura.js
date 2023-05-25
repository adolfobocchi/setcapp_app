import React from 'react';
import { connect } from 'react-redux';
import { GaleriaArea } from '../components/empresa/styled';
import { SectionArea } from '../components/styled';

const API_URL = process.env.REACT_APP_URL_API;

const Home = ({loading, empresas, error}) => {
    return(
        <>
        <h3 style={{textAlign: 'center'}}>Estrutura</h3>
        <SectionArea background='rgba(254,254,254,0.7)' altura={400} direcao={'row'}>
        <GaleriaArea >
        {empresas?.imagens?.map(imagem => {
              return (
                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                  <img key={imagem.id} src={`${API_URL}/images/${imagem.url}`} style={{margin: 8, width: 'auto', height: 200 }} alt='imagem estrutura'/>
                  <span>{imagem.legenda}</span>
                </div>
              )


            })}
            </GaleriaArea>
            </SectionArea>
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