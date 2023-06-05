import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-info">
            <h3 className="footer-title">MindfulLife</h3>
            <p className="footer-description">Transforme sua vida com equilíbrio e consciência</p>
          </div>
          <div className="footer-links">
            <ul className="footer-menu">
                <Link to="/" class="inicio">
                    <li><a href="#1">Início</a></li>
                </Link>
                <Link to="/recursos/" class="recursos">
                    <li><a href="#2">Recursos</a></li>
                </Link>
                <Link to="/sobre/" class="sobre">
                    <li><a href="#3">Sobre</a></li>
                </Link>
                <Link to="/contacto/" class="contacto">
                    <li><a href="#4">Contato</a></li>
                </Link>
            </ul>
            <ul className="footer-social">
              <li><a href="#5"><FaFacebookF /></a></li>
              <li><a href="#6"><FaTwitter /></a></li>
              <li><a href="#7"><FaInstagram /></a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p className="footer-copy">&copy; {new Date().getFullYear()} MindfulLife. Todos os direitos reservados.</p>
          <p className="footer-terms">Termos de Serviço | Política de Privacidade</p>
        </div>
      </footer>
    );
  };
  
  export default Footer;