import React from 'react';
import styled from 'styled-components';
import { SectionArea } from './styled';
import { FaBalanceScale, FaUsers, FaFileUpload } from 'react-icons/fa'

const ServicoFixoCard = styled.a`
    display: flex;
    height: 100px;
    flex: 1;
    margin: 12px;
    background-color: ${props => props.background};
    padding: 4px;
    text-decoration: none;
    color: #000;
    text-transform: uppercase;
    font-size: 1.1em;
    font-weight: bold;
`
const ServicoFixoCardIconArea = styled.div`
    width: 30%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

const ServicoFixoCardTitulo = styled.div`
    flex: 1;
    border-left: 3px solid rgba(200,200,200,0.4);
    display: flex;
    align-items: center;
    padding-left: 6px;
`

const ServicoFixoCardDescricaoArea = styled.div`
    flex: 1;
    border-left: 3px solid rgba(200,200,200,0.4);
    display: flex;
    align-items: center;
    padding-left: 6px;
`

const ServicosFixo = () => {
    const destaqueItem = [
        {key: 0, icone: 'FaBalanceScale', nome:'legislacao', descricao: 'Legislacao afsdfasdf fasdfasdfasdf', link: 'legislacao', background: '#F2791D' },
        {key: 1, icone: 'FaUsers',nome: 'eventos', descricao: 'eventos fasdfasdfasdf fasdfasdfasdf', link: 'eventos', background: '#1DDAF2' },
        {key: 2, icone: 'FaFileUpload', nome: 'curriculo', descricao: 'Curriculo asdfasdfasdff afsd asdf', link:'curriculo', background: '#BA29F2' },
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