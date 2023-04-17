import React, { useState } from "react";
import styled from "styled-components";
import { FaChevronDown, FaChevronUp} from 'react-icons/fa'

const API_URL = process.env.REACT_APP_URL_API;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #F38735;
  opacity: 0.8;
  margin-bottom: 20px;
  height: 60px;
`;

const NavItem = styled.a`
  display: flex;
  color: #000;
  text-align: center;
  justify-content: center;
  align-items: center;
  padding: 14px 30px;
  text-decoration: none;
  width: 100%;
  height: 100%;
  &:hover {
    background-color: #C2F24E;
    color: black;
  }
  text-transform: uppercase;
  font-weight: 700;
  font-size: 0.99em;
  position: relative;
`;
const NavLink = styled.a`
  color: #000;
  text-decoration: none;
  padding-top: 16px;
  padding-bottom: 16px;
  cursor: pointer;
  width: 100%;
  &:hover {
    background-color: #C2F24E;
  }
`;

const DropdownContent = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  top: 100%;
  left: 0;
  background-color: #F38735;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
`;

const NavDropdown = ({descricao, links}) => {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <NavItem>
      <NavLink onClick={handleDropdown}>{descricao}{showDropdown ? <FaChevronUp /> : <FaChevronDown />}</NavLink>
      {showDropdown && (
        <DropdownContent>
          {links.map(link => <NavLink href={link.rota}>{link.descricao}</NavLink>)}
        </DropdownContent>
      )}
    </NavItem>
  );
};

const Navbar = () => {
  const navItens = [
    {descricao: 'inicio', rota: '/' , linksSindicato: []},
    {descricao: 'sindicato', rota: 'sindicato' , linksSindicato: [
      {descricao: 'institucional', rota: 'institucional'},
      {descricao: 'diretoria', rota: 'diretoria'},
      {descricao: 'estrutura', rota: 'estrutura'},
      {descricao: 'territorio', rota: 'territorio'},
    ]},
    {descricao: 'serviços', rota: 'servicos' , linksSindicato: []},
    {descricao: 'associado', rota: 'associado' , linksSindicato: []},
    {descricao: 'contato', rota: 'contato' , linksSindicato: []},
  ]
  return (
    <Nav>
      {navItens.map((item, index) => {
        if (item.linksSindicato.length > 0) {
          return <NavDropdown key={index} descricao={item.descricao} links={item.linksSindicato} />
        } else {
          return <NavItem key={index} href={item.rota}>{item.descricao}</NavItem>
        }
      }
      )}
    </Nav>
  );
};

export default Navbar;
