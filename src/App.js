import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PrivateRoute from './auth/PrivateRoute';
import Home from './pages/Home';
import Login from './pages/Login';
import PainelPage from './pages/Painel';
import styled from 'styled-components';
import Institucional from './pages/Institucional';
import Diretoria from './pages/Diretoria';
import Estrutura from './pages/Estrutura';
import Territorio from './pages/Territorio';
import Legislacao from './pages/Legislacao';
import Noticia from './pages/Noticia';
import Acordos from './pages/Acordos';
import Antt from './pages/Antt';
import Contato from './pages/Contato';
import Associado from './pages/Associado';

const ContentArea = styled.div`
  display: flex;
  flex-direction: column;
  width: 90vw;
`

function App() {
  return (

    <Router>
      <Routes>
        <Route exact path="/">

          <Route index element={
            <ContentArea>
              <Home />
            </ContentArea>
          } />
          
          <Route exact path="/contato" element={
            <ContentArea>
              <Contato />
            </ContentArea>

          } />
          <Route exact path="/associado" element={
            <ContentArea>
              <Associado />
            </ContentArea>

          } />
          <Route exact path="/institucional" element={
            <ContentArea>
              <Institucional />
            </ContentArea>

          } />
          <Route exact path="/diretoria" element={
            <ContentArea><Diretoria /></ContentArea>

          } />
          <Route exact path="/estrutura" element={
            <ContentArea>
              <Estrutura />
            </ContentArea>
          } />
          <Route exact path="/territorio" element={
            <ContentArea>
              <Territorio />
            </ContentArea>
          } />
          <Route exact path="/legislacao" element={
            <ContentArea>
              <Legislacao />
            </ContentArea>
          } />
          <Route path="/noticias/:id/:titulo"  element={
            <ContentArea>
              <Noticia />
            </ContentArea>
          } />
          <Route exact path="/acordos" element={
            <ContentArea>
              <Acordos />
            </ContentArea>
          } />
          <Route exact path="/antt" element={
            <ContentArea>
              <Antt />
            </ContentArea>
          } />
        </Route>
        <Route exact path="/login" element={
          <ContentArea>
            <Login />
          </ContentArea>
        } />
        <Route path='/painel' >
          <Route index element={
            <PrivateRoute >
              <PainelPage />
            </PrivateRoute>
          } />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
