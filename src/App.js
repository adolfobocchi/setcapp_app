import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PrivateRoute from './auth/PrivateRoute';
import Home from './pages/Home';
import Login from './pages/Login';
import PainelPage from './pages/Painel';

function App() {
  return (
    <Router>
      <Routes>
      <Route exact path="/" element={
          <Home />
        } />
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
