import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets/imagens/full-peixe-logo.png';
import './Header.css';

function Header() {

  const location = useLocation();
  
  const getColor = (pathname) => {
    switch (pathname) {
      case '/login':
        return '#1A4789';
      case '/registro':
        return '#1A4789';
      default:
        return '#FFFFFF';
    }
  };

  const backgroundColor = getColor(location.pathname);
  const textColor = backgroundColor !== '#FFFFFF' ? '#FFFFFF' : '#1A4789';

  return (
    <header style={{backgroundColor, color: textColor}}>
      <div className="logo">
        <Link to="/">
          <img 
            id="logo-peixe-louco" 
            src={logo}
            // IMPLEMENTAR VERSÃO MOBILE !!!
            // srcSet="assets/imagens/peixe-icon.png 481w, assets/imagens/full-peixe-logo.png 480w" 
            // sizes="(max-width: 480px) 100vw, 50px" 
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
