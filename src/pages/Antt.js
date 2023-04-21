import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Navbar from '../components/NavBar';
import { PageAreaContent } from '../components/styled';
import styled from 'styled-components';
import { listarAnttRequest } from '../store/modules/Antt/actions';
import { dataTimeFormatada } from '../utils/formats';

const API_URL = process.env.REACT_APP_URL_API;

const AnttHeader = styled.div`
    text-align: center;
    margin-top: 20px;
    margin-bottom: 20px;
    p {
        margin-top: 20px;
    }
`

const Home = ({loading, antss, fetchAntt , error}) => {
    const [antt, setAntt] = useState(antss);
    useEffect(() => {
        fetchAntt();
        
        setAntt(antss);
    }, [antss])
    return(
        <>
        <Header />
        <Navbar />
        <AnttHeader>
        <h2>Antt</h2>
        </AnttHeader>
        
        <PageAreaContent  background='rgba(254,254,254,0.7)'  altura={400} >
            <ul>
            {
                antss.map((antt, index) => (
                    <li>
                        <h3>{antt.nome}</h3>
                        <p>Atualizado em: {dataTimeFormatada(antt.updatedAt)}</p>
                        {antt?.url &&
                            <a href={`${API_URL}/images/${antt.url}`} target="_blank"> Arquivo </a>
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
      loading: state.antt.loading,
      antss: state.antt.antt,
      error: state.antt.error
    };
  };


  const mapDispatchToProps = dispatch => {
    return {
      fetchAntt: () => dispatch(listarAnttRequest())
    };
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(Home)