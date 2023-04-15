import React from 'react';
import styled from 'styled-components';
import { SectionArea } from './styled';
import { FaBalanceScale, FaUsers, FaFileUpload } from 'react-icons/fa'

const ServicoFixoCard = styled.a`
    display: flex;
    flex-direction: column;
    height: auto;
    min-height: 250px;
    flex: 1;
    margin: 12px;
    background-color: ${props => props.background};
    padding: 8px;
    text-decoration: none;
    
    color: #000;
`
const ServicoFixoCardIconArea = styled.div`
    height: 80px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`

const ServicoFixoCardTitulo = styled.div`
    height: 40px;
    border-bottom: 3px solid rgba(200,200,200,0.4);
    display: flex;
    align-items: center;
    padding-left: 6px;
    text-transform: uppercase;
    font-size: 1.1em;
    font-weight: bold;
`

const ServicoFixoCardDescricaoArea = styled.div`
    flex: 1;
    display: flex;
    align-items: flex-end;
    padding-left: 6px;
    text-align: justify;
    margin-bottom: 40px;
`

const ServicosFixo = () => {
    const destaqueItem = [
        {key: 0, icone: 'FaBalanceScale', nome:'legislacao', descricao: 'Todo o tipo de regulamentação do setor de transporte que você precisa conhecer e consultar', link: 'legislacao', background: '#F2791D' },
        {key: 1, icone: 'FaUsers',nome: 'eventos', descricao: 'Eventos relacionados ao setor de transporte organizados pelo Sindbru ou parceiros.', link: 'eventos', background: '#1DDAF2' },
        {key: 2, icone: 'FaFileUpload', nome: 'curriculum', descricao: 'Envie-nos seu currículo e candidate-se para possíveis vagas no setor de transporte.', link:'curriculo', background: '#BA29F2' },
    ]
    return (
        <SectionArea background='#FFF' direcao={'row'} altura={200}>
        {destaqueItem.map(item => 
            <ServicoFixoCard key={item.key} href={item.link} background={item.background}>
                <ServicoFixoCardIconArea>
                    {item.icone.includes('FaBalanceScale') &&
                        <FaBalanceScale style={{width: '3em', height: '3em'}}/>
                    }
                    {item.icone.includes('FaUsers') &&
                        <FaUsers style={{width: '3em', height: '3em'}}/>
                    }
                    
                    {item.icone.includes('FaFileUpload') &&
                        <FaFileUpload style={{width: '3em', height: '3em'}}/>
                    }
                </ServicoFixoCardIconArea>
                <ServicoFixoCardTitulo>{item.nome}</ServicoFixoCardTitulo>
                <ServicoFixoCardDescricaoArea>{item.descricao}</ServicoFixoCardDescricaoArea>
            </ServicoFixoCard>
            )}

        </SectionArea>
    )
}

export default ServicosFixo;