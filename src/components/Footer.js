import React from 'react';
import styled from 'styled-components';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaWhatsapp } from 'react-icons/fa';

const API_URL = process.env.REACT_APP_URL_API;

const FooterContainer = styled.footer`
  background-color: #000;
  color: #F38735;
  display: flex;
  justify-content: center;
  padding: 2rem;
  flex-wrap: wrap;
  text-align: center;
  margin-top: 40px;
  width: 100%;
`;

const FooterInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1rem;
  border-right: 2px solid rgba(240,240,240,0.5);
  padding-right: 10px;
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
  color: #F38735;
  text-decoration: none;
  font-weight: bold;
  text-transform: uppercase;
  display: flex;
  flex-direction: column;
`;

const FooterIcon = styled.span`
  font-size: 1.5rem;
  margin-right: 0.5rem;
`;

const Footer = ({empresa}) => {
  return (
    <FooterContainer>
      <FooterInfo>
        <FooterTitle>Endereço</FooterTitle>
        <FooterText>{`${empresa.endereco} ${empresa.numero}`}</FooterText>
        <FooterText>{`${empresa.bairro} ${empresa.cidade}`}</FooterText>
        <FooterText>{`${empresa.estado}`}</FooterText>
      </FooterInfo>

      <FooterInfo>
        <FooterTitle>Telefone</FooterTitle>
        <FooterText>{`${empresa.telefone}`}</FooterText>
        <FooterText>{`${empresa.whatsapp}`}</FooterText>
      </FooterInfo>

      <FooterInfo>
        <FooterTitle>E-mail</FooterTitle>
        <FooterLink href={`mailto:${empresa.email}`}>
          <FooterIcon>
            <FaEnvelope />
          </FooterIcon>
          {`${empresa.email}`}
        </FooterLink>
      </FooterInfo>

      <FooterInfo>
        <FooterTitle>WhatsApp</FooterTitle>
        <FooterLink href={`https://wa.me/55${empresa.whatsapp}`}>
          <FooterIcon>
            <FaWhatsapp />
          </FooterIcon>
          {`${empresa.whatsapp}`}
        </FooterLink>
      </FooterInfo>
    </FooterContainer>
  );
};

export default Footer;
