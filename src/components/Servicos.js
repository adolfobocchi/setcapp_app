import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { listarServicoRequest } from '../store/modules/Servico/actions';
import { SectionArea } from './styled';
import styled from 'styled-components';

const API_URL = process.env.REACT_APP_URL_API;


const ServicoCard = styled.a`
    display: flex;
    height: 300px;
    flex: 1;
    margin: 12px;
    background-color: ${props => props.background};
    padding: 4px;
    text-decoration: none;
    color: #000;
`
const ServicoCardIconArea = styled.div`
    width: 30%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

const ServicoCardImg = styled.img`
    width: 100px;
    height: 100px;
    border-radius: 50%;
`

const ServicoCardContent = styled.div`
  flex: 1;
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: center;
`

const ServicoCardTitulo = styled.div`
    height: 40px;
    text-transform: uppercase;
    font-size: 1.1em;
    font-weight: bold;
`

const Home = ({ loadin, servicos, fetchServico }) => {
  const [servico, setServico] = useState(servicos);
  useEffect(() => {
    fetchServico();
    setServico(servicos)
  }, [fetchServico, servicos])
  return (
    <SectionArea background={'#DDD'} direcao={'row'} altura={200}>
      
      {
        servico.map((item, index) =>
          <ServicoCard style={{flexDirection: index === 1 && 'row-reverse'} } key={item.id} href={item.link} background={item.background}>
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
    fetchServico: () => dispatch(listarServicoRequest()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home)