import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { PageAreaContent } from '../components/styled';
import styled from 'styled-components';
import { listarAnttRequest } from '../store/modules/Antt/actions';
import { dataTimeFormatada } from '../utils/formats';
import Modal from '../components/Modal';

const API_URL = process.env.REACT_APP_URL_API;

const AnttHeader = styled.div`
    text-align: center;
    margin-top: 20px;
    margin-bottom: 20px;
    p {
        margin-top: 20px;
    }
`

const Home = ({ loading, antss, fetchAntt, error }) => {
    useEffect(() => {
        fetchAntt();
    }, [fetchAntt])

    if(loading) {
        return <Modal />
    }
    return (
        <>
            <AnttHeader>
                <h2>Antt</h2>
            </AnttHeader>

            <PageAreaContent background='rgba(254,254,254,0.7)' altura={400} >
                <ul>
                    {
                        antss.map((antt, index) => (
                            <li>
                                <p>Atualizado em: {dataTimeFormatada(antt.updatedAt)}</p>
                                
                                <div dangerouslySetInnerHTML={{ __html: antt.conteudo }}></div>
                                {antt?.url &&
                                    <a href={`${API_URL}/images/${antt.url}`} target="_blank" rel="noreferrer"> Arquivo </a>
                                }
                            </li>
                        ))
                    }
                </ul>
            </PageAreaContent>
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