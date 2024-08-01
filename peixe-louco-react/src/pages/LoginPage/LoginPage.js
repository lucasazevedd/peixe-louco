import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import './LoginPage.css';

function LoginPage() {
    return (
      <div id="login-body">
        <Header dark />
        <section id="login-box">
          <div id="login-div">
            <h1>Login</h1>
            <form action="#" method="POST">
              <div className="login">
                <label htmlFor="username" id="usuario">Usuário</label>
                <input type="text" id="usuario" name="username" placeholder="Seja bem vindo de volta amigo(a)" required />
              </div>
              <div className="login">
                <label htmlFor="password" id="senha">Senha</label>
                <input type="password" id="senha" name="password" placeholder="Você lembra sua senha, né?" required />
              </div>
              <button type="submit" id="entrar">Entrar</button>
            </form>
            <a className="esqueceuSenha" href="#">Esqueceu sua senha?</a>
            <a className="semCadastro" href="/registro">Ainda não tem cadastro?</a>
          </div>
        </section>
        <Footer />
      </div>
    );
  }
  
  export default LoginPage;