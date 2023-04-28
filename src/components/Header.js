import React from "react";
import {useNavigate} from 'react-router-dom';
import { ContatoArea, FaleConosco, FormRow, HeaderArea, HeaderBar, HeaderContent, Input, LinkRedeSocial, LinkRedeSocialInstagram, LogoArea, LogoImg, Menu, SearchArea } from "./styled";
import { FaInstagram, FaBars, FaSearch, FaWhatsapp } from 'react-icons/fa'
import { connect } from "react-redux";
import { whatsAppFormat } from "../utils/formats";

const API_URL = process.env.REACT_APP_URL_API;

const Header = ({loading, empresas, error}) => {
  const history = useNavigate();
  
  
  function toHome() {
    history('/')
  }
  return (
    <HeaderArea>
      <HeaderBar>
        {empresas.nome}
      </HeaderBar>
      <HeaderContent>
        <LogoArea>
          <LogoImg onClick={toHome} src={`${API_URL}/images/${empresas.logo}`} />
        </LogoArea>
        <SearchArea>
          <FormRow>
            <Input type='search' placeholder="O que você procura?" /> <FaSearch style={{ margin: -40, height: '1.4em', width: '1.4em' }} />
          </FormRow>
        </SearchArea>
        <ContatoArea>
          <FaleConosco href="contato">FALE CONOSCO</FaleConosco>
          <LinkRedeSocial href={`https://wa.me/55${whatsAppFormat(empresas.whatsapp)}`} target='_blank'>
            <FaWhatsapp style={{ height: '2em', width: '2em' }} />
          </LinkRedeSocial>
          <LinkRedeSocialInstagram href={empresas.instagram} target='_blank'>
            <FaInstagram style={{ height: '2em', width: '2em' }} />
          </LinkRedeSocialInstagram>
          <Menu>
            <FaBars style={{ height: '2em', width: '2em' }} />
          </Menu>
        </ContatoArea>
      </HeaderContent>
      
    </HeaderArea>
  );
};

const mapStateToProps = state => {
  return {
    loading: state.empresa.loading,
    empresas: state.empresa.empresa,
    error: state.empresa.error
  };
};

export default connect(mapStateToProps, null)(Header);
