import React, { useEffect, useState } from 'react';
import { MdApartment, MdClose } from 'react-icons/md';
import styled from 'styled-components';
import './Style.css'
import ModalLoading from '../ModalLoading';

const ModalWrapper = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  height: auto;
  height: calc(100vh);
  display: flex;
  flex-direction: column;
  z-index: 9999;
  overflow-y: scroll;
  font-size: 13px;
  overflow-y: auto;
`;



const ModalContent = styled.div`
  background-color: rgba(255, 255,255, 0.9);
  border-radius: 5px;
  position: relative;
  display: flex;
  align-items: center;
  flex: 1;
  flex-direction: column;
  overflow-y: auto;

  
`;

const ModalHeader = styled.div`
  background-color: rgba(100, 100,100, 0.9);
  padding: 10px;
  height: 60px;
  width: 100vw;
  display: flex;
  justify-content: flex-end;
  position: fixed;
`;
const ContentInfoBasic = styled.div`
  width: 100vw;
  display: flex;
  margin-top: 60px;
`;
const ContentInfoSetorizacao = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
`;
const ContentInfoSetor = styled.div`
  margin: 8px;
  flex: 1;
  min-width: 300px;
  padding: 20px;
`;

const ContentInfoSeparador = styled.div`
  border-bottom: 2px solid #000;
  width: 100%;
  margin-bottom: 10px;
`;

const ContentInfoText = styled.div`
  color: #000;
  font-weight: 500;
  margin-bottom: 6px;
  font-size: 1em;
`;

const ContentInfoArea = styled.div`
  margin-left: 10px;
`;

const Collabel = styled.div`
  
  display: flex;
  width: auto;
  justify-content: center;
  align-items: center;
  border: 1px solid #000;
  min-height: 110px;
  padding: '15px 10px',px;
  background-color: #DDD;
  overflow: hidden;
  white-space: normal;
  padding: 6px;
`;
const API_URL = process.env.REACT_APP_URL_API;

const ModalInfo = ({ dados, close }) => {

  const [dadosState, setDadosState] = useState(null);

  useEffect(() => {
    setDadosState(dados);
  }, [dados])
  if (!dadosState) {
    return <ModalLoading />
  }

  const openPrintWindow = () => {
    const printWindow = window.open('', '_blank');
    printWindow.document.write('<html><head><title>Relatório</title>');
    // printWindow.document.write('<style>.corFundo {background-color: #DDD;}</style>'); // Estilo para o fundo de cor
    printWindow.document.write('</head><body>');
    printWindow.document.write('<div style="width: 210mm; height: 297mm; page-break-inside: avoid; page-break-before: always; page-break-after: always;">'); // Tamanho da página A4
    let content = document.getElementById('modal-content').cloneNode(true);

    // Encontrar o elemento com id "table-area" dentro do conteúdo clonado
    const tableArea = content.querySelector('#table-area');

    // Ajustar o estilo width do elemento encontrado
    if (tableArea) {
      tableArea.style.width = '210mm'; // ou qualquer outra largura desejada
      tableArea.style.fontSize = '0.8em'
    }

    content.classList.add('print');
    printWindow.document.write(content.innerHTML);
    printWindow.document.write('</div></body></html>');
    printWindow.document.close();
    printWindow.print();
  };

  return (
    <div style={{
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      position: 'fixed',
      top: 0,
      left: 0,
      height: 'auto',
      height: 'calc(100vh)',
      display: 'flex',
      flexDirection: 'column',
      zIndex: 9999,
      overflowY: 'scroll',
      fontSize: '11px',

    }} >

      <div style={{
        backgroundColor: 'rgba(255, 255,255, 0.9)',
        borderRadius: '5px',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        flex: 1,
        flexDirection: 'column',

      }}  >


        <div style={{
          backgroundColor: 'rgba(100, 100,100, 0.9)',
          padding: '10px',
          height: '60px',
          width: '100vw',
          display: 'flex',
          justifyContent: 'flex-end',
          position: 'fixed',


        }}>

          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: "center", fontSize: '1.5em' }}>
            <h2>ASSOCIADO</h2>
            <h3>{dadosState.nomeFantasia}</h3>
          </div>

          <MdClose onClick={() => close(false)} color='#F00' style={{ cursor: 'pointer', height: '3em', width: '3em', marginRight: 8 }} />
          <button style={{ padding: '10px 10px' }} onClick={openPrintWindow}>Imprimir</button>
        </div>
        <div id='modal-content'  >
         
        <div style={{
            width: '100vw',
            display: 'flex',
            flexDirection: 'column',  
            marginTop: '60px',
            fontSize: '1em',
          }}>
              <h1 style={{ textAlign: 'center', marginTop: '20px', border: '2px solid #000',
                borderRadius: '10px', background: '#CCC' }}>FICHA CADASTRAL DE ASSOCIADO</h1>
              <h2 style={{ textAlign: 'center', marginTop: '20px' }}>GERAL</h2>
              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                paddingLeft: 0,
                width: '100vw',
                border: '2px solid #000',
                borderRadius: '10px',
                justifyContent: 'center',
                padding: '10px'
              }} >

            <div style={{
                color: '#000',
                fontWeight: '600',
                marginBottom: '6px',
                
                flex: '0 0 30%',
              }} >{`Razão social: ${dadosState.razaoSocial}`}</div >
             <div style={{
                color: '#000',
                fontWeight: '600',
                marginBottom: '6px',
                
                flex: '0 0 30%',
              }} >{`CNPJ: ${dadosState.cnpj}`}</div >
             <div style={{
                color: '#000',
                fontWeight: '600',
                marginBottom: '6px',
                
                flex: '0 0 30%',
              }} >{`I.E: ${dadosState.ie}`}</div >
             <div style={{
                color: '#000',
                fontWeight: '600',
                marginBottom: '6px',
                
                flex: '0 0 30%',
              }} >{`Junta Comercial: ${dadosState.juntacomercial}`}</div >
             <div style={{
                color: '#000',
                fontWeight: '600',
                marginBottom: '6px',
                
                flex: '0 0 30%',
              }} >{`Inicio Atividade: ${dadosState.dataInicioAtividade}`}</div >
             <div style={{
                color: '#000',
                fontWeight: '600',
                marginBottom: '6px',
                
                flex: '0 0 30%',
              }} >{`Matriz: ${dadosState.matriz ? 'Sim' : 'Não'}`}</div >
             <div style={{
                color: '#000',
                fontWeight: '600',
                marginBottom: '6px',
                
                flex: '0 0 30%',
              }} >{`Responsavel: ${dadosState.responsavel}`}</div >
             <div style={{
                color: '#000',
                fontWeight: '600',
                marginBottom: '6px',
                
                flex: '0 0 30%',
              }} >{`Endereço: ${dadosState.endereco}`}</div >
             <div style={{
                color: '#000',
                fontWeight: '600',
                marginBottom: '6px',
                
                flex: '0 0 30%',
              }} >{`Cidade: ${dadosState.cidade}`}</div >
             <div style={{
                color: '#000',
                fontWeight: '600',
                marginBottom: '6px',
                
                flex: '0 0 30%',
              }} >{`bairro: ${dadosState.bairro}`}</div >
             <div style={{
                color: '#000',
                fontWeight: '600',
                marginBottom: '6px',
                
                flex: '0 0 30%',
              }} >{`Cep: ${dadosState.cep}`}</div >
              <div style={{
                 color: '#000',
                 fontWeight: '600',
                 marginBottom: '6px',
                 
                 flex: '0 0 30%',
               }} >{`Estado: ${dadosState.estado}`}</div >
             <div style={{
                color: '#000',
                fontWeight: '600',
                marginBottom: '6px',
                
                flex: '0 0 30%',
              }} >{`Telefone: ${dadosState.telefone}`}</div >
             <div style={{
                color: '#000',
                fontWeight: '600',
                marginBottom: '6px',
                
                flex: '0 0 30%',
              }} >{`Celular: ${dadosState.celular}`}</div >
             <div style={{
                color: '#000',
                fontWeight: '600',
                marginBottom: '6px',
                
                flex: '0 0 30%',
              }} >{`E-mail: ${dadosState.email}`}</div >
             <div style={{
                color: '#000',
                fontWeight: '600',
                marginBottom: '6px',
                
                flex: '0 0 30%',
              }} >{`Veiculos: ${dadosState.veiculos}`}</div >
              </div>
              <h2 style={{ textAlign: 'center', marginTop: '20px'}}>TRANSPORTE</h2>
               <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                paddingLeft: 0,
                width: '100vw',
                border: '2px solid #000',
                borderRadius: '10px',
                justifyContent: 'center',
                padding: '10px',
              }} >
              
             <div style={{
                color: '#000',
                fontWeight: '600',
                marginBottom: '6px',
                
                flex: '0 0 30%'
              }} >{`Carga comum: ${dadosState.cargacomum ? 'Sim' : 'Não'}`}</div >
             <div style={{
                color: '#000',
                fontWeight: '600',
                marginBottom: '6px',
                
                flex: '0 0 30%'
              }} >{`Carga Liquida a Granel: ${dadosState.cargaliquidagranel ? 'Sim' : 'Não'}`}</div >
             <div style={{
                color: '#000',
                fontWeight: '600',
                marginBottom: '6px',
                
                flex: '0 0 30%'
              }} >{`Carga Solida a Granel: ${dadosState.cargasolidagranel ? 'Sim' : 'Não'}`}</div >
             <div style={{
                color: '#000',
                fontWeight: '600',
                marginBottom: '6px',
                
                flex: '0 0 30%'
              }} >{`Cargas Indivisiveis e Excedentes em Peso/Dimensões: ${dadosState.cargaindivisiveis ? 'Sim' : 'Não'}`}</div >
             <div style={{
                color: '#000',
                fontWeight: '600',
                marginBottom: '6px',
                
                flex: '0 0 30%'
              }} >{`Carga Aquecida: ${dadosState.cargaaquecida ? 'Sim' : 'Não'}`}</div >
             <div style={{
                color: '#000',
                fontWeight: '600',
                marginBottom: '6px',
                
                flex: '0 0 30%'
              }} >{`Produtos Siderúrgicos e Bobinas em geral: ${dadosState.cargasiderurgica ? 'Sim' : 'Não'}`}</div >
             <div style={{
                color: '#000',
                fontWeight: '600',
                marginBottom: '6px',
                
                flex: '0 0 30%'
              }} >{`Madeiras, em toras, Postes e Tubos: ${dadosState.cargamadeiras ? 'Sim' : 'Não'}`}</div >
             <div style={{
                color: '#000',
                fontWeight: '600',
                marginBottom: '6px',
                
                flex: '0 0 30%'
              }} >{`Animais Vivos: ${dadosState.cargaviva ? 'Sim' : 'Não'}`}</div >
             <div style={{
                color: '#000',
                fontWeight: '600',
                marginBottom: '6px',
                
                flex: '0 0 30%'
              }} >{`Produtos pereciveis e temperatura controlada: ${dadosState.cargaperecivel ? 'Sim' : 'Não'}`}</div >
             <div style={{
                color: '#000',
                fontWeight: '600',
                marginBottom: '6px',
                
                flex: '0 0 30%'
              }} >{`Lixo: ${dadosState.cargalixo ? 'Sim' : 'Não'}`}</div >
             <div style={{
                color: '#000',
                fontWeight: '600',
                marginBottom: '6px',
                
                flex: '0 0 30%'
              }} >{`Valores em unidades blindadas: ${dadosState.cargavalores ? 'Sim' : 'Não'}`}</div >
             <div style={{
                color: '#000',
                fontWeight: '600',
                marginBottom: '6px',
                
                flex: '0 0 30%'
              }} >{`Concreto em execução (betoneira): ${dadosState.cargaconcreto ? 'Sim' : 'Não'}`}</div >
             <div style={{
                color: '#000',
                fontWeight: '600',
                marginBottom: '6px',
                
                flex: '0 0 30%'
              }} >{`Veiculos automotores: ${dadosState.cargaveiculos ? 'Sim' : 'Não'}`}</div >
             <div style={{
                color: '#000',
                fontWeight: '600',
                marginBottom: '6px',
                
                flex: '0 0 30%'
              }} >{`Containers: ${dadosState.cargacontainer ? 'Sim' : 'Não'}`}</div >
             <div style={{
                color: '#000',
                fontWeight: '600',
                marginBottom: '6px',
                
                flex: '0 0 30%'
              }} >{`Outros a citar: ${dadosState.cargaoutros ? 'Sim' : 'Não'}`}</div >
              </div>
          </div>
        </div>
      </div >

    </div >
  );
};

export default ModalInfo;


