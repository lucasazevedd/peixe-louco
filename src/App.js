import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import LoginPage from './pages/LoginPage/LoginPage';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import ContactPage from './pages/ContactPage/ContactPage';
import DisciplinasPage from './pages/DisciplinasPage/DisciplinasPage';
import ApoiaPage from './pages/ApoiaPage/ApoiaPage';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/registro" element={<RegisterPage />} />
        <Route path="/contato" element={<ContactPage />} />
        <Route path="/disciplinas" element={<DisciplinasPage />} />
        <Route path="/apoia" element={<ApoiaPage />} />
      </Routes>
    </div>
  );
}

export default App;
