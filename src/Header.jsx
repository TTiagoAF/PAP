import React from 'react';
import { FaUser, FaSignOutAlt } from 'react-icons/fa';
import logo from './../img/logo.png';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <Link to="/" class="Voltar">
      <a href="#5" className="logo">
        <img src={logo} alt="MindfulLife" className="logo-image" />
      </a>
      </Link>
      <nav className="nav">
        <ul className="nav-list">
          <li className="nav-item">
          <Link to="/" className="nav-link">
            <a href="#1" className="nav-link">Home</a>
            </Link>
          </li>
          <li className="nav-item">
            <a href="#2" className="nav-link">Finanças</a>
          </li>
          <li className="nav-item">
            <a href="#3" className="nav-link">Metas e Hábitos</a>
          </li>
          <li className="nav-item">
            <a href="#4" className="nav-link">Agenda</a>
          </li>
          <li className="nav-item">
            <a href="#5" className="nav-link">Tarefas</a>
          </li>
        </ul>
      </nav>
      <div className="user-profile">
        <button className="profile-button">
          <FaUser />
        </button>
        <Link to="/Login/" class="logout">
        <button className="logout-button">
          <FaSignOutAlt />
        </button>
        </Link>
      </div>
    </header>
  );
};

export default Header;