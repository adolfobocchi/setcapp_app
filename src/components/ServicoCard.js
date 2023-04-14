import React from 'react';
import styled from 'styled-components';

const ServicoCardArea = styled.div`
    height: 300px;
    width: 50%;
    display: flex;
    flex-direction: column;
    padding: 16px;

`

const CardImageArea = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 80px;
    margin-bottom: 6px;
`

const CardTituloArea = styled.div`
    width: 100%;
    height: 30px;
    font-weight: bold;
    text-transform: uppercase;
    text-align: center;
    margin-bottom: 12px;
`

const CardDescricaoArea = styled.div`
    width: 100%;
    text-overflow: ellipsis;
`

const Imagem = styled.img`
    height: 80px;
    width: 80px;
`

const API_URL = 'http://setcapp-api.azurewebsites.net';
/* const API_URL = 'http://localhost:3001'; */
const ServicoCard = ({ servico }) => {

    return (
        <ServicoCardArea>
            <CardImageArea>
                <Imagem src={`${API_URL}/images/${servico.url}`} alt='Imagem servico' />
            </CardImageArea>
            <CardTituloArea>
                {servico.nome}
            </CardTituloArea>
            <CardDescricaoArea dangerouslySetInnerHTML={{ __html: servico.descricao }}>

            </CardDescricaoArea>
        </ServicoCardArea>
    );
}

export default ServicoCard;