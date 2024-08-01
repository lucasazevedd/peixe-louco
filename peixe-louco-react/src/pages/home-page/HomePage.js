import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Wave from '../components/Wave';
import './HomePage.css';

function HomePage() {
  return (
    <div>
      <Header />
      <section className="welcome-section">
        <div className="welcome-content">
          <div>
            <img 
              id="logo-peixe-louco" 
              src="assets/imagens/peixe-logo-aquario.png" 
              alt="Logo somente do Peixe" 
            />
          </div>
          <div>
            <h1>Junte-se ao Peixe Louco e Mergulhe no Conhecimento!</h1>
            <p>Ei, aventureiro! Preparado para testar seus conhecimentos de um jeito totalmente novo? Venha competir, aprender e se divertir com nossos desafios de perguntas e respostas! Vamos lá, o mar do saber está te esperando!”</p>
            <a href="/registro"><button className="button2" id="cta-button">Comece agora</button></a>
            <a href="/login"><button className="button2" id="cta-button">Já tenho uma conta</button></a>
          </div>
        </div>
      </section>

      <Wave />

      <section className="homepg-s2">
        <div className="page-content" id="homepg-disc">
          <h1>Navegue sem Complicações!</h1>
          <p>No Peixe Louco, não precisa baixar nada. Acesse diretamente do seu navegador e comece a jogar em segundos. Simples, rápido e direto ao ponto, como um peixe inteligente faria!</p>
        </div>
      </section>

      <section className="homepg-s3">
        <div className="page-content" id="homepg-disc">
          <h1>Desafie sua Mente e Brilhe!</h1>
          <p>Quantas perguntas você consegue responder sem errar? Descubra no Peixe Louco! Teste seus conhecimentos em diversas disciplinas e mostre que você é o mestre do mar do saber!</p>
        </div>
      </section>

      <section className="homepg-s4">
        <div className="page-content" id="homepg-disc">
          <h1>Convide seus Amigos e Mostre Quem é o Rei dos Mares!</h1>
          <p>Nada mais divertido do que competir com os amigos, não é? No Peixe Louco, você pode desafiar seus amigos e ver quem domina o mar das perguntas. É hora de mostrar quem sabe mais!</p>
        </div>
      </section>

      <section className="homepg-s5">
        <div className="page-content" id="homepg-disc">
          <h1>Explore o Oceano do Conhecimento!</h1>
          <p>De português a ciências, temos desafios para todas as disciplinas! Clique no botão abaixo para saber mais sobre como o Peixe Louco pode te ajudar a se tornar um verdadeiro gênio.</p>
          <a href="/disciplinas"><button className="buttondisc" id="button-disciplinas">Descubra</button></a>
        </div>
      </section>

      <section className="homepg-s6">
        <div className="page-content" id="homepg-disc">
          <h1>Conheça os Cérebros por Trás do Peixe Louco</h1>
          <p>Curioso para saber quem criou essa aventura de conhecimento? Nossa equipe de desenvolvedores é formada por verdadeiros gênios! Clique abaixo e conheça quem está por trás do Peixe Louco.</p>
          <a href="/contato"><button className="buttondisc" id="button-disciplinas">Venha nos conhecer</button></a>
        </div>
      </section>
      
      <section className="homepg-s7">
        <div className="page-content" id="homepg-disc">
          <h1>Apoie o Peixe Louco e Ajude a Difundir o Conhecimento!</h1>
          <p>Acha que nosso projeto é incrível? Você pode nos apoiar e ajudar a levar o Peixe Louco a mais pessoas. Saiba mais sobre como contribuir e fazer parte dessa jornada do conhecimento.</p>
          <a href="/apoia"><button className="buttondisc" id="button-disciplinas">Quero ajudar</button></a>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default HomePage;
