import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Navbar from '../components/NavBar';
import { PageAreaContent } from '../components/styled';
import styled from 'styled-components';
import { listarAcordoRequest } from '../store/modules/Acordo/actions';
import { dataTimeFormatada } from '../utils/formats';

const API_URL = process.env.REACT_APP_URL_API;

const AcordosHeader = styled.div`
    text-align: center;
    margin-top: 20px;
    margin-bottom: 20px;
    p {
        margin-top: 20px;
    }
`

const Home = ({loading, acordos, fetchAcordos , error}) => {
    const [acordo, setAcordos] = useState(acordos);
    useEffect(() => {
        fetchAcordos();
        
        setAcordos(acordos);
    }, [acordos])
    return(
        <>
        <Header />
        <Navbar />
        <AcordosHeader>
        <h2>Acordos</h2>
        </AcordosHeader>
        
        <PageAreaContent  background='rgba(254,254,254,0.7)'  altura={400} >
            <ul>
            {
                acordos.map((acordo, index) => (
                    <li>
                        <h3>{acordo.nome}</h3>
                        <p>Atualizado em: {dataTimeFormatada(acordo.updatedAt)}</p>
                        {acordo?.url &&
                            <a href={`${API_URL}/images/${acordo.url}`} target="_blank"> Arquivo </a>
                        }
                    </li>
                ))
            }
            </ul>
        </PageAreaContent>
        <Footer />
        </>
    )
}

const mapStateToProps = state => {
    return {
      loading: state.acordo.loading,
      acordos: state.acordo.acordo,
      error: state.acordo.error
    };
  };


  const mapDispatchToProps = dispatch => {
    return {
      fetchAcordos: () => dispatch(listarAcordoRequest())
    };
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(Home)