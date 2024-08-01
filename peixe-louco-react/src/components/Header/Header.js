import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header>
      <div className="logo">
        <Link to="/">
          <img 
            id="logo-peixe-louco" 
            src="assets/imagens/full-peixe-logo.png" 
            srcSet="assets/imagens/peixe-icon.png 481w, assets/imagens/full-peixe-logo.png 480w" 
            sizes="(max-width: 480px) 100vw, 50px" 
            alt="Logo somente do Peixe com o Nome" 
          />
        </Link>
      </div>
      
      <nav id="menu">
        <Link to="/login"><button className="button2" id="nav-buttons">Entrar</button></Link>
        <Link to="/registro"><button className="button2" id="nav-buttons">Registrar</button></Link>
        <Link to="/disciplinas"><button className="button2" id="nav-buttons">Disciplinas</button></Link>
        <Link to="/apoia"><button className="button2" id="nav-buttons">Apoia-se</button></Link>
        <Link to="/contato"><button className="button2" id="nav-buttons">Contato</button></Link>
      </nav>
      
      <div className="menu-icon">
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
      </div>
    </header>
  );
}

export default Header;
