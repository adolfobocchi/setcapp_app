import React, { useState } from 'react';
import styled from 'styled-components';
import FormEmpresa from '../components/empresa/FormEmpresa';
import ListarEvento from '../components/evento/ListarEvento';
import LegislacaoForm from '../components/legislacao/FormLegislacao';
import ListarSlider from '../components/slider/ListarSlider';

const Container = styled.div`
  display: flex;
  height: 100%;
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

const Painel = () => {
  const menuItems=[
    {key: 1, label: "Empresa", component: <FormEmpresa /> },
    {key: 2, label: "Legislacao", component: <LegislacaoForm />},
    {key: 3, label: "Evento", component: <ListarEvento />},
    {key: 4, label: "Slider", component: <ListarSlider />}
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
              fontWeight: selectedMenuItem === menuItem ? 'bold' : 'normal',
            }}
          >
            {menuItem.label}
          </MenuItem>
        ))}
      </Menu>
      <Content>{selectedMenuItem.component}</Content>
    </Container>
  );
};

export default Painel;
