import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { SectionArea, ServicoCard} from './styled';
import styled from 'styled-components';

const API_URL = process.env.REACT_APP_URL_API;


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

const Home = ({ loadin, servicos }) => {
  const [servico, setServico] = useState(servicos);
  useEffect(() => {
    setServico(servicos);
  }, [servicos])
  return (
    <SectionArea background='rgba(200,200,200,0.7)'  direcao={'row'} altura={200}>
      
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

export default connect(mapStateToProps,  null)(Home)