import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { PageAreaContent } from '../components/styled';
import { listarLegislacaoRequest } from '../store/modules/Legislacao/actions';
import Modal from '../components/Modal';

const Home = ({loading, fetchLegislacao, legislacaos, error}) => {
    const [legislacaoState, setLegislacaoState] = useState(null);
    useEffect(() => {
        fetchLegislacao()
      }, []);
      useEffect(() => {
        setLegislacaoState(legislacaos)
      }, [legislacaos]);
      if (loading) {
        return <Modal />
      }
    return(
        <>
        <PageAreaContent  background='rgba(254,254,254,0.7)'  altura={400} dangerouslySetInnerHTML={{ __html: legislacaoState?.conteudo }}></PageAreaContent>
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

  const mapDispatchToProps = dispatch => {
    return {
      fetchLegislacao: () => dispatch(listarLegislacaoRequest()),
    };
  };
  
  
  export default connect(mapStateToProps, mapDispatchToProps)(Home)