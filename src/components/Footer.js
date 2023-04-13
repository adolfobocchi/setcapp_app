import React from 'react';
import styled from 'styled-components';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaWhatsapp } from 'react-icons/fa';

const FooterContainer = styled.footer`
  background-color: #1c1c1c;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  flex-wrap: wrap;
  text-align: center;
`;

const FooterInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1rem;
`;

const FooterTitle = styled.h3`
  margin-bottom: 1rem;
  font-size: 1.2rem;
`;

const FooterText = styled.p`
  font-size: 0.8rem;
  line-height: 1.5;
  margin-bottom: 0.5rem;
`;

const FooterLink = styled.a`
  color: #fff;
  text-decoration: none;
  font-weight: bold;
`;

const FooterIcon = styled.span`
  font-size: 1.5rem;
  margin-right: 0.5rem;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterInfo>
        <FooterTitle>Endereço</FooterTitle>
        <FooterText>Rua do Sindicato, 123</FooterText>
        <FooterText>Centro - Cidade/Estado</FooterText>
      </FooterInfo>

      <FooterInfo>
        <FooterTitle>Telefone</FooterTitle>
        <FooterText>(11) 1234-5678</FooterText>
        <FooterText>(11) 98765-4321</FooterText>
      </FooterInfo>

      <FooterInfo>
        <FooterTitle>E-mail</FooterTitle>
        <FooterLink href="mailto:contato@sindicato.com.br">
          <FooterIcon>
            <FaEnvelope />
          </FooterIcon>
          contato@sindicato.com.br
        </FooterLink>
      </FooterInfo>

      <FooterInfo>
        <FooterTitle>WhatsApp</FooterTitle>
        <FooterLink href="https://wa.me/5511987654321">
          <FooterIcon>
            <FaWhatsapp />
          </FooterIcon>
          (11) 98765-4321
        </FooterLink>
      </FooterInfo>
    </FooterContainer>
  );
};

export default Footer;
