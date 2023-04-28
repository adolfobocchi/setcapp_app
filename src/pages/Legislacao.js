import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { PageAreaContent } from '../components/styled';

const Home = ({loading, legislacaos, error}) => {
    const [legislacao, setLegislacao] = useState(legislacaos);
    useEffect(() => {
        setLegislacao(legislacaos)
    }, [legislacaos])
    return(
        <>
        <PageAreaContent  background='rgba(254,254,254,0.7)'  altura={400} dangerouslySetInnerHTML={{ __html: legislacao.conteudo }}></PageAreaContent>
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
  
  export default connect(mapStateToProps, null)(Home)