import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import './RegisterPage.css';

function RegisterPage() {
  return (
    <div id="login-body">
      <Header dark />
      <section id="register-box">
        <div id="register-div">
          <h1>Registro de Usuário</h1>
          <form action="#" method="POST">
            <div className="campos-registro">
              <label htmlFor="fullname">Nome Completo</label>
              <input type="text" id="fullname" name="fullname" placeholder="Seu nome" required />
            </div>
            <div className="campos-registro">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" placeholder="O seu melhor email, aquele que você realmente lê" required />
            </div>
            <div className="campos-registro">
              <label htmlFor="username">Usuário</label>
              <input type="text" id="usuario-rg" name="username" placeholder="Como as pessoas vão te conhecer por aqui" required />
            </div>
            <div className="campos-registro">
              <label htmlFor="password">Senha</label>
              <input type="password" id="senha-rg" name="password" placeholder="Uma senha forte, nada de '1234'" required />
            </div>
            <div className="campos-registro">
              <label htmlFor="confirm-password">Confirme a Senha</label>
              <input type="password" id="confirmar-senha" name="confirm-password" placeholder="Exatamente igual a de cima" required />
            </div>
            <button type="submit" id="botao-registro">Registrar</button>
          </form>
          <a className="esqueceuSenha" href="/login">Já tem cadastro?</a>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default RegisterPage;
