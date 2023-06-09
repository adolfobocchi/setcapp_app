import React from 'react';
import styled from 'styled-components';
import { SectionArea } from './styled';
import { FaHandshake, FaTruck, FaBuffer } from 'react-icons/fa'

const DestaqueCard = styled.a`
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
    opacity: 0.8;
    @media only screen and (min-width: 700px) {
        flex-basis: 30%;
    }

    @media only screen and (max-width: 699px) {
        flex-basis: 100%;
    }
    
`
const DestaqueCardIconArea = styled.div`
    width: 30%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

const DestaqueCardDescricaoArea = styled.div`
    flex: 1;
    border-left: 3px solid rgba(200,200,200,0.4);
    display: flex;
    align-items: center;
    padding-left: 6px;
`

const Destaque = () => {
    const destaqueItem = [
        {key: 0, icone: 'FaBuffer', descricao: 'Contribuições', link: 'contribuicoes', background: '#F2791D' },
        {key: 1, icone: 'FaTruck', descricao: 'antt', link: 'antt', background: '#1DDAF2' },
        {key: 2, icone: 'FaHandshake', descricao: 'Acordo Coletivo', link:'acordos', background: '#BA29F2' },
    ]
    return (
        <SectionArea background='transparent' direcao={'row'} altura={200}>
        {destaqueItem.map(item => 
            <DestaqueCard key={item.key} href={item.link} background={item.background}>
                <DestaqueCardIconArea>
                    {item.icone.includes('Handshake') &&
                        <FaHandshake style={{width: '3em', height: '3em'}}/>
                    }
                    {item.icone.includes('FaTruck') &&
                        <FaTruck style={{width: '3em', height: '3em'}}/>
                    }
                    
                    {item.icone.includes('FaBuffer') &&
                        <FaBuffer style={{width: '3em', height: '3em'}}/>
                    }
                </DestaqueCardIconArea>
                <DestaqueCardDescricaoArea>{item.descricao}</DestaqueCardDescricaoArea>
            </DestaqueCard>
            )}

        </SectionArea>
    )
}

export default Destaque;