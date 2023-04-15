import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { listarConfederadoRequest } from '../store/modules/Confederado/actions';
import { SectionArea } from './styled';
import styled from 'styled-components';



const API_URL = process.env.REACT_APP_URL_API;


const FederadoCard = styled.a`
    display: flex;
    flex: 1;
    margin: 12px;
    background-color: ${props => props.background};
    padding: 4px;
    text-decoration: none;
    color: #000;
    text-transform: uppercase;
    font-size: 1.1em;
    font-weight: bold;
    justify-content: center;
`
const FederadoCardIconArea = styled.div`
    width: 200px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

const FederadoCardImg = styled.img`
    width: 180px;
    height: auto;
`

const Home = ({ loadin, confederados, fetchConfederado }) => {
  const [confederado, setConfederado] = useState(confederados);
  useEffect(() => {
    fetchConfederado();
    setConfederado(confederados)
  }, [fetchConfederado, confederados])
  return (
    <SectionArea background={'#FFF'} direcao={'row'} altura={200}>
      {


        confederado.map((item, index) =>
          <FederadoCard key={item.id} href={`${item.link}`} >
            <FederadoCardIconArea>
              <FederadoCardImg src={`${API_URL}/images/${item.url}`}/>
            </FederadoCardIconArea>
          </FederadoCard>
        )
      }
    </SectionArea>
  )
}

const mapStateToProps = state => {
  return {
    loading: state.confederado.loading,
    confederados: state.confederado.confederado,
    error: state.confederado.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchConfederado: () => dispatch(listarConfederadoRequest()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home)