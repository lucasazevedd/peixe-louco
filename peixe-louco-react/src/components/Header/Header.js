import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets/imagens/full-peixe-logo.png';
import logoAlt from '../../assets/imagens/full-peixe-logo-alt.png';
import miniLogo from '../../assets/imagens/peixe-icon.png';
import './Header.css';

function Header() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 480);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 480);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const getColor = (pathname) => {
    switch (pathname) {
      case '/login':
      case '/registro':
        return '#1A4789';
      default:
        return '#FFFFFF';
    }
  };

  const getImage = (pathname, isMobile) => {
    if (isMobile) {
      return miniLogo;
    }
    switch (pathname) {
      case '/login':
      case '/registro':
        return logoAlt;
      default:
        return logo;
    }
  };

  const backgroundColor = getColor(location.pathname);
  const textColor = backgroundColor !== '#FFFFFF' ? '#FFFFFF' : '#1A4789';
  const imageSrc = getImage(location.pathname, isMobile);
  const barColor = location.pathname === '/login' || location.pathname === '/registro' ? '#FFFFFF' : '#1A4789';
  const buttonClass = location.pathname === '/login' || location.pathname === '/registro' ? 'button-header' : 'button2';


  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header style={{ backgroundColor, color: textColor }}>
      <div className="logo">
        <Link to="/">
          <img 
            id="logo-peixe-louco" 
            src={imageSrc}
            alt="Logo somente do Peixe com o Nome" 
          />
        </Link>
      </div>
      
      <nav id="menu" className={menuOpen ? 'show' : ''}>
        <Link to="/login"><button className={buttonClass} id="nav-buttons">Entrar</button></Link>
        <Link to="/registro"><button className={buttonClass} id="nav-buttons">Registrar</button></Link>
        <Link to="/disciplinas"><button className={buttonClass} id="nav-buttons">Disciplinas</button></Link>
        <Link to="/apoia"><button className={buttonClass} id="nav-buttons">Apoia-se</button></Link>
        <Link to="/contato"><button className={buttonClass} id="nav-buttons">Contato</button></Link>
      </nav>

      
      <div className={`menu-icon ${menuOpen ? 'change' : ''}`} onClick={toggleMenu}>
        <div className="bar1" style={{ backgroundColor: barColor }}></div>
        <div className="bar2" style={{ backgroundColor: barColor }}></div>
        <div className="bar3" style={{ backgroundColor: barColor }}></div>
      </div>
    </header>
  );
}

export default Header;
