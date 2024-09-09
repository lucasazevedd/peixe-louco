import React from 'react';
import { useLocation } from 'react-router-dom';
import './Footer.css';

function Footer() {

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
    <footer style={{backgroundColor, color: textColor}} id="footer">
      <p>© 2024 Peixe Louco 🐟. Todos os direitos reservados.</p>
    </footer>
  );
}

export default Footer;
