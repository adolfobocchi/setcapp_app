import React, { useState } from 'react';
import styled from 'styled-components';
import ListarAcordo from '../components/acordo/ListarAcordo';
import ListarConfederado from '../components/confederado/ListarConfederado';
import ListarContato from '../components/contato/ListarContato';
import FormEmpresa from '../components/empresa/FormEmpresa';
import ListarEvento from '../components/evento/ListarEvento';
import LegislacaoForm from '../components/legislacao/FormLegislacao';
import Logout from '../components/Logout';
import ListarNoticia from '../components/noticia/ListarNoticia';
import ListarServico from '../components/servico/ListarServico';
import ListarSlider from '../components/slider/ListarSlider';
import Titulo from '../components/Titulo';
import ListarAntt from '../components/antt/ListarAntt';
import ListarAssociado from '../components/associado/ListarAssociado';

const Container = styled.div`
  background: #FFF;
  display: flex;
  min-height: 100vh;
  width: 100vw;
`;

const Menu = styled.div`
  width: 200px;
  background-color: #f8f8f8;
  padding: 20px;
`;

const MenuItem = styled.div`
  margin-bottom: 10px;
  cursor: pointer;
`;

const Content = styled.div`
  flex: 1;
  padding: 20px;
`;

const HomePainel = () => {
  return (
    <><h3>Utilize o menu lateral para configurar as seções do site.</h3></>
  )
}

const Painel = () => {
  const menuItems = [
    { key: 0, label: "Painel", component: <HomePainel /> },
    { key: 1, label: "Empresa", component: <FormEmpresa /> },
    { key: 2, label: "Legislacao", component: <LegislacaoForm /> },
    { key: 3, label: "Eventos", component: <ListarEvento /> },
    { key: 4, label: "Sliders", component: <ListarSlider /> },
    { key: 5, label: "Noticias", component: <ListarNoticia /> },
    { key: 6, label: "Serviços", component: <ListarServico /> },
    { key: 7, label: "Federação", component: <ListarConfederado /> },
    { key: 8, label: "Acordos", component: <ListarAcordo /> },
    { key: 9, label: "Contatos", component: <ListarContato /> },
    { key: 10, label: "Antt", component: <ListarAntt /> },
    { key: 11, label: "Associado", component: <ListarAssociado /> },
    { key: 12, label: "Sair", component: <Logout /> },
  ]
  const [selectedMenuItem, setSelectedMenuItem] = useState(menuItems[0]);


  const handleMenuItemClick = (menuItem) => {
    setSelectedMenuItem(menuItem);
  };

  return (
    <Container>
      <Menu>
        {menuItems.map((menuItem) => (
          <MenuItem
            key={menuItem.key}
            onClick={() => handleMenuItemClick(menuItem)}
            style={{
              fontWeight: selectedMenuItem.key === menuItem.key ? 'bold' : 'normal',
            }}
          >
            {menuItem.label}
          </MenuItem>
        ))}
      </Menu>
      <Content>
        <Titulo titulo={selectedMenuItem.label} ></Titulo>
        {selectedMenuItem.component}
      </Content>
    </Container>
  );
};
export default Painel;
