import React from 'react';
import { connect } from 'react-redux';
import { PageAreaContent } from '../components/styled';

const Home = ({loading, empresas, error}) => {

    return(
        <>
        <PageAreaContent  background='rgba(254,254,254,0.7)'  altura={400} dangerouslySetInnerHTML={{ __html: empresas.institucional }}></PageAreaContent>
        
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