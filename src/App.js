import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PrivateRoute from './auth/PrivateRoute';
import Home from './pages/Home';
import Login from './pages/Login';
import PainelPage from './pages/Painel';
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
import DefaultPage from './pages/DefaultPage';
import NoticiasPage from './pages/NoticiasPage';
import EventosPage from './pages/EventosPage';
import ServicosPage from './pages/ServicosPage';
import Evento from './pages/Evento';
import { useEffect } from 'react';



function App() {
  
  useEffect(() => {
    document.title = '::SETCAPP';
  }, []);
  return (
    
    <Router>
      <Routes>
        <Route exact path="/">

          <Route index element={
            <DefaultPage>

              <Home />
            </DefaultPage>
          } />

          <Route exact path="/noticias">
            <Route index element={
              <DefaultPage>

                <NoticiasPage />
              </DefaultPage>
            } />
            <Route exact path=":id/:titulo" element={
              <DefaultPage>
                <Noticia />
              </DefaultPage>
            } />
          </Route>
          <Route exact path="/contato" element={
            <DefaultPage>
              <Contato />
            </DefaultPage>

          } />
          <Route exact path="/associado" element={
            <DefaultPage>
              <Associado />
            </DefaultPage>

          } />
          <Route exact path="/eventos">
            <Route index element={
              <DefaultPage>

                <EventosPage />
              </DefaultPage>
            } />
            <Route exact path=":id/:titulo" element={
              <DefaultPage>
                <Evento />
              </DefaultPage>
            } />
          </Route>
           <Route exact path="/servicos" element={
            <DefaultPage>
              <ServicosPage />
            </DefaultPage>

          } />
          <Route exact path="/institucional" element={
            <DefaultPage>
              <Institucional />
            </DefaultPage>

          } />
          <Route exact path="/diretoria" element={
            <DefaultPage><Diretoria /></DefaultPage>

          } />
          <Route exact path="/estrutura" element={
            <DefaultPage>
              <Estrutura />
            </DefaultPage>
          } />
          <Route exact path="/territorio" element={
            <DefaultPage>
              <Territorio />
            </DefaultPage>
          } />
          <Route exact path="/legislacao" element={
            <DefaultPage>
              <Legislacao />
            </DefaultPage>
          } />

          <Route exact path="/acordos" element={
            <DefaultPage>
              <Acordos />
            </DefaultPage>
          } />
          <Route exact path="/antt" element={
            <DefaultPage>
              <Antt />
            </DefaultPage>
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
  );
}

export default App;
