// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import Formulario from './pages/Formulario'; // 👈 Importamos la nueva página

const App = () => (
  <Router>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/formulario" element={<Formulario />} /> {/* 👈 Nueva ruta */}
    </Routes>
    <Footer />
  </Router>
);

export default App;
