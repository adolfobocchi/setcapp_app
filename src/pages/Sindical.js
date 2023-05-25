import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { PageAreaContent } from '../components/styled';
import styled from 'styled-components';
import { listarSindicalRequest } from '../store/modules/Sindical/actions';
import { dataTimeFormatada } from '../utils/formats';
import Modal from '../components/Modal';

const API_URL = process.env.REACT_APP_URL_API;

const SindicalHeader = styled.div`
    text-align: center;
    margin-top: 20px;
    margin-bottom: 20px;
    p {
        margin-top: 20px;
    }
`

const Home = ({ loading, sindicals, fetchSindical, error }) => {
    useEffect(() => {
        fetchSindical();
    }, [fetchSindical])

    if(loading) {
        return <Modal />
    }
    return (
        <>
            <SindicalHeader>
                <h2>contribuições</h2>
            </SindicalHeader>

            <PageAreaContent background='rgba(254,254,254,0.7)' altura={400} >
                <ul>
                    {
                        sindicals.map((antt, index) => (
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
        loading: state.sindical.loading,
        sindicals: state.sindical.sindical,
        error: state.sindical.error
    };
};


const mapDispatchToProps = dispatch => {
    return {
        fetchSindical: () => dispatch(listarSindicalRequest())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home)