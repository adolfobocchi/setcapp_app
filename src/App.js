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

const ContentArea = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1140px;
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
