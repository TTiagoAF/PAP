import React from 'react';
import { FaUser, FaSignOutAlt } from 'react-icons/fa';
import logo from './../img/logo.png';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <a href="#5" className="logo">
        <img src={logo} alt="MindfulLife" className="logo-image" />
      </a>
      <nav className="nav">
        <ul className="nav-list">
          <Link to="/" class="Home">
          <li className="nav-item">
            <a href="#1" className="nav-link">Home</a>
          </li>
          </Link>
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
        <button className="logout-button">
          <FaSignOutAlt />
        </button>
      </div>
    </header>
  );
};

export default Header;