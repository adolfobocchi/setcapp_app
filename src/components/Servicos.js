import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { listarServicoRequest } from '../store/modules/Servico/actions';
import ServicoCard from './ServicoCard';
import { SectionArea } from './styled';

const Home = ({ loadin, servicos, fetchServico }) => {
  const [servico, setServico] = useState(servicos);
  useEffect(() => {
    fetchServico();
    setServico(servicos)
  }, [fetchServico, servicos])
  return (
    <SectionArea background={'#FFF'} direcao={'row'}>
      {
        servico.map((item, index) => {
          return <ServicoCard key={item.id} servico={item} />
        })
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
    fetchServico: () => dispatch(listarServicoRequest()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home)