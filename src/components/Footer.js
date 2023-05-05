import React from 'react';
import styled from 'styled-components';
import { FaPhone, FaEnvelope, FaWhatsapp, FaPaperPlane } from 'react-icons/fa';
import { connect } from 'react-redux';
import { whatsAppFormat } from '../utils/formats';
import Modal from './Modal';


const FooterContainer = styled.footer`
  background-color: rgba(0,0,0,0.5);
  color: #CCC;
  display: flex;
  justify-content: center;
  padding: 2rem;
  flex-wrap: wrap;
  text-align: center;
  margin-top: 40px;
  width: 100%;
  margin-bottom: 20px;
`;

const FooterInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-right: 10px;
  padding-left: 10px;
  border-right: 2px solid rgba(240,240,240,0.5);
  &:nth-child(4) {
    border-right: none;
    }
    @media only screen and (min-width: 840px) {
        flex-basis: 22%;
    }

    @media (max-width: 839px) and (min-width: 700px)  {
        flex-basis: 50%;
        border-right: none;
        &:nth-child(1),  &:nth-child(2){
          border-bottom: 2px solid rgba(240,240,240,0.5);
        }

        &:nth-child(3),  &:nth-child(4){
          margin-top: 12px;
        }
        
    }

    @media only screen and (max-width: 699px) {
        flex-basis: 100%;
        border-right: none;
          border-bottom: 2px solid rgba(240,240,240,0.5);
          margin-top: 12px;
          margin-bottom: 12px;
          padding-bottom: 12px;
        
    }
`;

const FooterText = styled.p`
  font-size: 0.8rem;
  line-height: 1.5;
  margin-bottom: 0.5rem;
  text-transform: uppercase;
`;

const FooterLink = styled.a`
  color: #CCC;
  text-decoration: none;
  text-transform: uppercase;
  display: flex;
  flex-direction: column;
`;

const FooterIcon = styled.span`
  font-size: 1.5rem;
  margin-right: 0.5rem;
`;

const Footer = ({ loading, empresas, error }) => {

  if(loading || !empresas) {
    return <Modal />
  }

  return (

    <FooterContainer>
      {empresas &&
        <>
          <FooterInfo>
            <FooterIcon>
              <FaPaperPlane />
            </FooterIcon>
            <FooterText>ENDEREÇO</FooterText>
            <FooterText>{`${empresas.endereco} ${empresas.numero}`}</FooterText>
            <FooterText>{`${empresas.bairro}`}</FooterText>
            <FooterText>{`${empresas.cidade}`}</FooterText>
            <FooterText>{`${empresas.estado}`}</FooterText>
          </FooterInfo>

          <FooterInfo>
            <FooterIcon>
              <FaPhone />
            </FooterIcon>
            <FooterText>TELEFONE</FooterText>
            <FooterText>{`${empresas.telefone}`}</FooterText>
            <FooterText>{`${empresas.whatsapp}`}</FooterText>
          </FooterInfo>

          <FooterInfo>
            <FooterLink href={`mailto:${empresas.email}`}>
              <FooterIcon>
                <FaEnvelope />
              </FooterIcon>
              <FooterText>E-MAIL</FooterText>
              {`${empresas.email}`}
            </FooterLink>
          </FooterInfo>

          <FooterInfo>
            <FooterLink href={`https://wa.me/55${whatsAppFormat(empresas.whatsapp)}`}>
              <FooterIcon>
                <FaWhatsapp />
              </FooterIcon>
              <FooterText>WHATSAPP</FooterText>
              {`${empresas.whatsapp}`}
            </FooterLink>
          </FooterInfo>
        </>
      }

    </FooterContainer>
  );
};



const mapStateToProps = state => {
  return {
    loading: state.empresa.loading,
    empresas: state.empresa.empresa,
    error: state.empresa.error
  };
};


export default connect(mapStateToProps, null)(Footer);
