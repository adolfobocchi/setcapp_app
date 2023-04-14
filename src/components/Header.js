import React from "react";
import {useNavigate} from 'react-router-dom';
import { ContatoArea, FormRow, HeaderArea, HeaderBar, HeaderContent, Input, LinkArea, LinkRedeSocial, LogoArea, LogoImg, SearchArea } from "./styled";
import { FaInstagram, FaSearch } from 'react-icons/fa'
const Header = ({ empresa }) => {
  const history = useNavigate();
  function toHome() {
    history('/')
  }
  return (
    <HeaderArea>
      <HeaderBar>
        {empresa.nome}
      </HeaderBar>
      <HeaderContent>
        <LogoArea>
          <LogoImg onClick={toHome} src={`http://localhost:3001/images/${empresa.logo}`} />
        </LogoArea>
        <SearchArea>
          <FormRow>
            <Input type='search' placeholder="O que você procura?" /> <FaSearch style={{ margin: -40, height: '1.4em', width: '1.4em' }} />
          </FormRow>
        </SearchArea>
        <ContatoArea>
          <LinkArea href="contato">FALE CONOSCO</LinkArea>
          <LinkRedeSocial href={empresa.instagram} target='_blank'>
            <FaInstagram style={{ height: '2em', width: '2em' }} />
          </LinkRedeSocial>
        </ContatoArea>
      </HeaderContent>

    </HeaderArea>
  );
};

export default Header;
