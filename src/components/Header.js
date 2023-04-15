import React from "react";
import {useNavigate} from 'react-router-dom';
import { ContatoArea, FormRow, HeaderArea, HeaderBar, HeaderContent, Input, LinkArea, LinkRedeSocial, LogoArea, LogoImg, SearchArea } from "./styled";
import { FaInstagram, FaSearch } from 'react-icons/fa'
import { connect } from "react-redux";

const API_URL = process.env.REACT_APP_URL_API;

const Header = ({ empresas }) => {
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
          <LinkArea href="contato">FALE CONOSCO</LinkArea>
          <LinkRedeSocial href={empresas.instagram} target='_blank'>
            <FaInstagram style={{ height: '2em', width: '2em' }} />
          </LinkRedeSocial>
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
