import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import './ApoiaPage.css';

function ApoiaPage() {
  return (
    <div>
      <Header />
      <section id="apoia">
        <h1>Apoia-se</h1>
        <p>Peixe-Louco é feito por uma pequena equipe que está fazendo esse projeto por amor.</p>
        <p>Se você quiser ajudar contribuindo clique no botão ou clique em anúncios após o término de alguma tarefa</p>
        <div>
          <a href="#Apoia-se">Apoia-se</a>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default ApoiaPage;
