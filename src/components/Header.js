import React from "react";
import {useNavigate} from 'react-router-dom';
import { ContatoArea, FaleConosco, FormRow, HeaderArea, HeaderBar, HeaderContent, Input, LinkRedeSocial, LinkRedeSocialInstagram, LogoArea, LogoImg, Menu, SearchArea, Dropdown, DropdownItem } from "./styled";
import { FaInstagram, FaBars, FaSearch, FaWhatsapp, FaTimes } from 'react-icons/fa'
import { connect, useDispatch } from "react-redux";
import { whatsAppFormat } from "../utils/formats";
import { toggleNavbar } from "../store/modules/NavBar/actions";
import { useEffect } from "react";
import { useState } from "react";
import { searchRequest } from "../store/modules/Search/actions";
import { useRef } from "react";

const API_URL = process.env.REACT_APP_URL_API;

const Header = ({loading, empresas, error, toggleMenu, fetchSearch, resultadoSearch}) => {
  const history = useNavigate();
  const dispatch = useDispatch();
  const [toggleMenuState, setToggleMenuState] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [dropdownPosition, setDropdownPosition] = useState({ top: 0, left: 0 });
  const searchTimerRef = useRef(null);
  const inputRef = useRef(null);

  
  useEffect(()=> {
    setToggleMenuState(toggleMenu);
  },[toggleMenu])

  useEffect(()=> {
    setSearchResults(resultadoSearch);
  },[resultadoSearch])



  function toHome() {
    history('/')
  }

  const handleToggleMenu = () => {
    dispatch(toggleNavbar());
  };

  const handleSearch = (event) => {
    const searchTerm = event.target.value;
    clearTimeout(searchTimerRef.current);
    if (searchTerm.length >= 3) {
      searchTimerRef.current = setTimeout(() => {
        // Chama a ação de pesquisa passando o termo de pesquisa
        fetchSearch(searchTerm);
        
      }, 2000);
      
    }
    if(searchRequest) {
      setShowDropdown(true);
      setShowDropdown(true);
      const inputPosition = inputRef.current.getBoundingClientRect();
      setDropdownPosition({
        top: inputPosition.top + inputPosition.height,
        left: inputPosition.left,
        width: inputPosition.width,
      });
    }
    
  };

  console.log(showDropdown);

  const handleDropdownItemClick = (link) => {
    // Aqui você pode definir a ação ao clicar em um item do dropdown,
    // por exemplo, redirecionar para a página correspondente.
    // Você pode utilizar o objeto history do react-router-dom para fazer isso.
    history(link);
    setShowDropdown(false);
  };


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
          <FormRow >
            <Input ref={inputRef} type='search' placeholder="O que você procura?" onChange={handleSearch} /> <FaSearch style={{ margin: -50, height: '1.4em', width: '1.4em' }} />
          </FormRow>
          {showDropdown && (
            <Dropdown style={{ top: dropdownPosition.top, left: dropdownPosition.left, width: dropdownPosition.width }}>
              {searchResults.map((result, index) => (
                <DropdownItem key={index} onClick={() => handleDropdownItemClick(result.link)}>
                  {result.descricao.slice(0,30)}
                </DropdownItem>
              ))}
            </Dropdown>
          )}
        </SearchArea>
        <ContatoArea>
          <FaleConosco href="contato">FALE CONOSCO</FaleConosco>
          <LinkRedeSocial href={`https://wa.me/55${whatsAppFormat(empresas.whatsapp)}`} target='_blank'>
            <FaWhatsapp style={{ height: '2em', width: '2em' }} />
          </LinkRedeSocial>
          <LinkRedeSocialInstagram href={empresas.instagram} target='_blank'>
            <FaInstagram style={{ height: '2em', width: '2em' }} />
          </LinkRedeSocialInstagram>
          <Menu onClick={handleToggleMenu}>
          {toggleMenuState ? <FaTimes style={{ height: '2em', width: '2em' }} /> : <FaBars style={{ height: '2em', width: '2em' }} /> }
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
    error: state.empresa.error,
    toggleMenu: state.navbar.visible,
    resultadoSearch: state.search.resultado,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchSearch: (query) => dispatch(searchRequest(query)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
