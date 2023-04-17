import React from 'react';
import styled from 'styled-components';
import { FaPhone, FaEnvelope, FaWhatsapp, FaPaperPlane } from 'react-icons/fa';
import { connect } from 'react-redux';

const API_URL = process.env.REACT_APP_URL_API;

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
`;

const FooterInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-right: 2px solid rgba(240,240,240,0.5);
  &:nth-child(4) {
    border-right: none;
    }
`;

const FooterTitle = styled.h3`
  margin-bottom: 1rem;
  font-size: 1.2rem;
  text-transform: uppercase;
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

const Footer = ({ empresas }) => {
  return (
    <FooterContainer>
      <FooterInfo>
      <FooterIcon>
            <FaPaperPlane />
          </FooterIcon>
        <FooterText>{`${empresas.endereco} ${empresas.numero}`}</FooterText>
        <FooterText>{`${empresas.bairro}`}</FooterText>
        <FooterText>{`${empresas.cidade}`}</FooterText>
        <FooterText>{`${empresas.estado}`}</FooterText>
      </FooterInfo>

      <FooterInfo>
      <FooterIcon>
            <FaPhone />
          </FooterIcon>
        <FooterText>{`${empresas.telefone}`}</FooterText>
        <FooterText>{`${empresas.whatsapp}`}</FooterText>
      </FooterInfo>

      <FooterInfo>
        <FooterLink href={`mailto:${empresas.email}`}>
          <FooterIcon>
            <FaEnvelope />
          </FooterIcon>
          {`${empresas.email}`}
        </FooterLink>
      </FooterInfo>

      <FooterInfo>
        <FooterLink href={`https://wa.me/55${empresas.whatsapp}`}>
          <FooterIcon>
            <FaWhatsapp />
          </FooterIcon>
          {`${empresas.whatsapp}`}
        </FooterLink>
      </FooterInfo>
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
