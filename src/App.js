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
  width: 1140px;
`

function App() {
  return (
    <ContentArea>
      <Router>
        <Routes>
          <Route exact path="/">
            
            <Route index element={
              <Home />
            } />
            <Route exact path="/institucional" element={
              <Institucional />
            } /> 
            <Route exact path="/diretoria" element={
              <Diretoria />
            } />
            <Route exact path="/estrutura" element={
              <Estrutura />
            } />
            <Route exact path="/territorio" element={
              <Territorio />
            } />
            <Route exact path="/legislacao" element={
              <Legislacao />
            } />
          </Route>
          <Route exact path="/login" element={
            <Login />
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
    </ContentArea>
  );
}

export default App;
