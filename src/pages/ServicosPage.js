import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { listarServicoRequest } from '../store/modules/Servico/actions';
import {  ServicoCardIconArea,ServicoCardImg, ServicoCardContent, ServicoCardTitulo, SectionArea, ServicoCard } from '../components/styled';
import Modal from '../components/Modal';

const API_URL = process.env.REACT_APP_URL_API;

const Home = ({ loading, servicos, fetchServicos, error }) => {
  useEffect(() => {
    fetchServicos()
  }, []);

  if (loading) {
    return <Modal />
  }
  return (
    <SectionArea background='rgba(200,200,200,0.7)'  direcao={'row'} altura={200} >
      
      {
        servicos.map((item, index) =>
          <ServicoCard style={{flexDirection: index % 2 === 1 && 'row-reverse'} } key={item.id} href={item.link} background={item.background}>
            <ServicoCardIconArea >
              <ServicoCardImg src={`${API_URL}/images/${item.url}`} />
            </ServicoCardIconArea>
            <ServicoCardContent>
              <ServicoCardTitulo>{item.nome}</ServicoCardTitulo>
              <div dangerouslySetInnerHTML={{ __html: item.descricao }}></div>
            </ServicoCardContent>
            
          </ServicoCard>)
      }
    </SectionArea>
  )
}

const mapStateToProps = state => {
  return {
    loading: state.servico.loading,
    servicos: state.servico.servico,
    error: state.servico.error
  };
};


const mapDispatchToProps = dispatch => {
  return {
    fetchServicos: () => dispatch(listarServicoRequest()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home)


