import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { FaBars, FaChevronDown, FaChevronUp, FaTimes} from 'react-icons/fa'
import { connect, useDispatch } from "react-redux";
import { toggleNavbar } from "../store/modules/NavBar/actions";

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #F38735;
  opacity: 0.8;
  margin-bottom: 20px;
  height: 60px;
  z-index: 2;
  @media only screen and (max-width: 768px) {
        display: none;
    }

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
  z-index: 2;
  @media only screen and (max-width: 950px) {
    font-weight: 700;
    font-size: 0.8em;
    padding: 7px 15px;
    }
    @media only screen and (max-width: 768px) {
        
    flex-direction: column;
    height: auto;
    padding: 18px;
    text-align: left;
    align-items: flex-start;
    }
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
  z-index: 2;
`;

const DropdownContent = styled.div`
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  top: 100%;
  left: 0;
  background-color: #F38735;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 2;
  @media only screen and (min-width: 769px) {
    position: absolute;
    font-weight: 700;
    font-size: 0.8em;
    padding: 7px 15px;
    }
    @media only screen and (max-width: 768px) { 
      flex-direction: column;
    height: auto;
    padding: 18px;
    text-align: left;
    align-items: flex-start;
    }
`;


const Overlay = styled.div`
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
`;


const NavDrawer = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #F38735;
  opacity: 0.8;
  margin-bottom: 20px;
  height: 100vh;
  width: 60%;
  z-index: 2;
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



const Navbar = ({toggleMenu}) => {
  const dispatch = useDispatch();
  const navItens = [
    {descricao: 'inicio', rota: '/' , linksSindicato: []},
    {descricao: 'sindicato', rota: '/sindicato' , linksSindicato: [
      {descricao: 'institucional', rota: '/institucional'},
      {descricao: 'diretoria', rota: '/diretoria'},
      {descricao: 'estrutura', rota: '/estrutura'},
      {descricao: 'territorio', rota: '/territorio'},
    ]},
    {descricao: 'serviços', rota: '/servicos' , linksSindicato: []},
    {descricao: 'noticias', rota: '/noticias' , linksSindicato: []},
    {descricao: 'associado', rota: '/associado' , linksSindicato: []},
    {descricao: 'contato', rota: '/contato' , linksSindicato: []},
  ]
  
  const [toggleMenuState, setToggleMenuState] = useState(false);
  
  useEffect(()=> {
    setToggleMenuState(toggleMenu);
  },[toggleMenu])

  const handleToggleMenu = () => {
    dispatch(toggleNavbar());
  };

  return (
    <>
    {toggleMenuState === false ?
      <Nav>
        {navItens.map((item, index) => {
          if (item.linksSindicato.length > 0) {
            return <NavDropdown key={index} descricao={item.descricao} links={item.linksSindicato} />
          } else {
            return <NavItem key={index} href={item.rota}>{item.descricao}</NavItem>
          }
        }
        )}
      </Nav> :
      <Overlay>
      <NavDrawer>
      <div onClick={handleToggleMenu}>
          {toggleMenuState ? <FaTimes style={{ height: '2em', width: '2em' }} /> : <FaBars style={{ height: '2em', width: '2em' }} /> }
          </div>
      {navItens.map((item, index) => {
        if (item.linksSindicato.length > 0) {
          return <NavDropdown key={index} descricao={item.descricao} links={item.linksSindicato} />
        } else {
          return <NavItem key={index} href={item.rota}>{item.descricao}</NavItem>
        }
      }
      )}
      
      </NavDrawer>
      </Overlay>
    }
    </>
  );
};

const mapStateToProps = state => {
  return {
    toggleMenu: state.navbar.visible
  };
};

export default  connect(mapStateToProps,null)(Navbar);
