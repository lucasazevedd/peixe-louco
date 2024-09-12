import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import peixeLogo from '../../assets/imagens/peixe-logo-aquario.png';
import LucasPhoto from '../../assets/imagens/Lucas-Profile-photo.png';
import GabrielPhoto from '../../assets/imagens/gabriel-profile-photo.png';
import RyanPhoto from '../../assets/imagens/ryan-profile-photo.png';
import LaisPhoto from '../../assets/imagens/lais-profile-photo.png';
import LeticiaPhoto from '../../assets/imagens/leticia-profile-photo.png';
import { Helmet } from 'react-helmet';
import './ContactPage.css';

{/* <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"> */}

function ContactPage() {
  return (
    <div>
      <Helmet>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" />
        <title>Página de Contato</title>
      </Helmet>
      <Header />
      <div className="contact-page">
        {/* Company Card */}
        <div className="company-card">
          <img src={peixeLogo} alt="peixe-logo-aquario" />
          <h1>PEIXE LOUCO</h1>
          <div className="social-links" id="company-social-links">
            <a href="https://github.com/lucasazevedd/peixe-louco" target="_blank" rel="noopener noreferrer">
              <button className="button2" id="githubButton"><i className="fab fa-github"></i></button>
            </a>
            <a href="https://www.instagram.com/peixelouco_/" target="_blank" rel="noopener noreferrer">
              <button className="button2" id="instagramButton"><i className="fab fa-instagram"></i></button>
            </a>
          </div>
        </div>

        {/* Developers Cards */}
        <div className="developers-cards">
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img src={LucasPhoto} alt="Foto do Desenvolvedor" />
                <h3>Lucas Israel de Azevedo</h3>
                <p>Desenvolvedor Front-End</p>
              </div>
              <div className="flip-card-back">
                <div className="social-links">
                  <a href="https://www.linkedin.com/in/lucas-israel-de-azevedo-577015259/" target="_blank" rel="noopener noreferrer">
                    <button className="button2" id="linkedinButton">Linkedin <i className="fab fa-linkedin"></i></button>
                  </a>
                  <a href="https://github.com/lucasazevedd" target="_blank" rel="noopener noreferrer">
                    <button className="button2" id="githubButton">GitHub <i className="fab fa-github"></i></button>
                  </a>
                  <a href="https://www.instagram.com/lucasazevedd/" target="_blank" rel="noopener noreferrer">
                    <button className="button2" id="instagramButton">Instagram <i className="fab fa-instagram"></i></button>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img src={GabrielPhoto} alt="Foto do Desenvolvedor" />
                <h3>Gabriel Viana de Carvalho</h3>
                <p>Desenvolvedor Front-End</p>
              </div>
              <div className="flip-card-back">
                <div className="social-links">
                  <a href="https://www.linkedin.com/in/gabriel-viana-b844a9288/" target="_blank" rel="noopener noreferrer">
                    <button className="button2" id="linkedinButton">Linkedin <i className="fab fa-linkedin"></i></button>
                  </a>
                  <a href="https://github.com/K9815" target="_blank" rel="noopener noreferrer">
                    <button className="button2" id="githubButton">GitHub <i className="fab fa-github"></i></button>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img src={RyanPhoto} alt="Foto do Desenvolvedor" />
                <h3>Ryan do Vale Avelar</h3>
                <p>Desenvolvedor Back-End</p>
              </div>
              <div className="flip-card-back">
                <div className="social-links">
                  <a href="https://www.linkedin.com/in/ryanvaledeavelar/" target="_blank" rel="noopener noreferrer">
                    <button className="button2" id="linkedinButton">Linkedin <i className="fab fa-linkedin"></i></button>
                  </a>
                  <a href="https://github.com/Ryanwxs" target="_blank" rel="noopener noreferrer">
                    <button className="button2" id="githubButton">GitHub <i className="fab fa-github"></i></button>
                  </a>
                  <a href="https://www.instagram.com/ryanxw_/" target="_blank" rel="noopener noreferrer">
                    <button className="button2" id="instagramButton">Instagram <i className="fab fa-instagram"></i></button>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img src={LaisPhoto} alt="Foto do Desenvolvedor" />
                <h3>Laís Gabriely</h3>
                <p>Desenvolvedor Back-End</p>
              </div>
              <div className="flip-card-back">
                <div className="social-links">
                  <a href="http://linkedin.com/in/laisdiasdev" target="_blank" rel="noopener noreferrer">
                    <button className="button2" id="linkedinButton">Linkedin <i className="fab fa-linkedin"></i></button>
                  </a>
                  <a href="https://github.com/laisdiasdev" target="_blank" rel="noopener noreferrer">
                    <button className="button2" id="githubButton">GitHub <i className="fab fa-github"></i></button>
                  </a>
                  <a href="https://www.instagram.com/laisgbr/" target="_blank" rel="noopener noreferrer">
                    <button className="button2" id="instagramButton">Instagram <i className="fab fa-instagram"></i></button>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img src={LeticiaPhoto} alt="Foto do Desenvolvedor" />
                <h3>Letícia Ferreira do Nascimento</h3>
                <p>Desenvolvedor Full-Stack</p>
              </div>
              <div className="flip-card-back">
                <div className="social-links">
                  <a href="https://www.linkedin.com/in/let%C3%ADcia-ferr-nasc/?locale=pt_BR" target="_blank" rel="noopener noreferrer">
                    <button className="button2" id="linkedinButton">Linkedin <i className="fab fa-linkedin"></i></button>
                  </a>
                  <a href="https://github.com/laisdiasdev" target="_blank" rel="noopener noreferrer">
                    <button className="button2" id="githubButton">GitHub <i className="fab fa-github"></i></button>
                  </a>
                  <a href="https://www.instagram.com/lelenassc/" target="_blank" rel="noopener noreferrer">
                    <button className="button2" id="instagramButton">Instagram <i className="fab fa-instagram"></i></button>
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      <Footer />
    </div>
  );
}

export default ContactPage;
