import React, { useState } from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import './RegisterPage.css';

function RegisterPage() {
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setErrorMessage('As senhas não coincidem');
      return;
    }

    try {
      const response = await fetch('http://localhost:3000/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ fullname, email, username, password })
      });

      if (response.ok) {
        alert('Usuário registrado com sucesso!');
        // Opcional: redirecionar o usuário para a página de login, limpar o form, ou outro lugar após o registro
      } else {
        alert('Erro ao registrar o usuário!');
      }
    } catch (error) {
      console.error('Erro ao enviar a requisição:', error);
      alert('Erro ao registrar o usuário!');
    }
  };

  return (
    <div id="login-body">
      <Header dark />
      <section id="register-box">
        <div id="register-div">
          <h1>Registro de Usuário</h1>
          <form onSubmit={handleSubmit}> {/* Atualizado para usar onSubmit */}
            <div className="campos-registro">
              <label htmlFor="fullname">Nome Completo</label>
              <input
                type="text"
                id="fullname"
                value={fullname} // O valor do campo é definido pelo estado 'fullname'
                onChange={(e) => setFullname(e.target.value)} //// Atualiza o estado `fullname` quando o valor muda
                placeholder="Seu nome"
                required
              />
            </div>
            <div className="campos-registro">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="O seu melhor email, aquele que você realmente lê"
                required
              />
            </div>
            <div className="campos-registro">
              <label htmlFor="username">Usuário</label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Como as pessoas vão te conhecer por aqui"
                required
              />
            </div>
            <div className="campos-registro">
              <label htmlFor="password">Senha</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Uma senha forte, nada de '1234'"
                required
              />
            </div>
            <div className="campos-registro">
              <label htmlFor="confirm-password">Confirme a Senha</label>
              <input
                type="password"
                id="confirm-password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Exatamente igual a de cima"
                required
              />
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
