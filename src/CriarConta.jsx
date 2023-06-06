import React, { useState } from 'react';
import logo from './../img/logo.png';
import imagem from './../img/Create.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const SignupPage = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const togglePasswordVisibility2 = () => {
    setShowPassword2(!showPassword2);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleUsername = (e) => {
    setUsername(e.target.value);
  };
  const handleConfirm = (e) => {
    setConfirm(e.target.value);
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Lógica para autenticação do usuário aqui
  };

  const handleGoogleLogin = () => {
    // Lógica para fazer login com o Google aqui
  };

  const handleFacebookLogin = () => {
    // Lógica para fazer login com o Facebook aqui
  };

  return (
    <div className="login-page">
        <img src={imagem} alt="Imagem" className="login-image" />
      <div className="login-container">
        <div className="login-left">
          <img src={logo} alt="MindfulLife Logo" className="login-logo" />
        </div>
        <div className="login-right">
          <h1 className="login-title">Bem-vindo à MindfulLife</h1>
          <form className="login-form" onSubmit={handleFormSubmit}>
          <input
              type="username"
              placeholder="Username"
              value={username}
              onChange={handleUsername}
              className="login-input"
            />
            <input
              type="email"
              placeholder="E-mail"
              value={email}
              onChange={handleEmailChange}
              className="login-input"
            />
            <div className="password-input-container">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Senha"
                value={password}
                onChange={handlePasswordChange}
                className="signup-input"
              />
              <FontAwesomeIcon
                icon={showPassword ? faEyeSlash : faEye}
                className="password-toggle-icon"
                onClick={togglePasswordVisibility}
              />
            </div>
            <div className="password-input-container">
              <input
                type={showPassword2 ? "text" : "password"}
                placeholder="Confirmar senha"
                value={confirm}
                onChange={handleConfirm}
                className="signup-input"
              />
              <FontAwesomeIcon
                icon={showPassword2 ? faEyeSlash : faEye}
                className="password-toggle-icon"
                onClick={togglePasswordVisibility2}
              />
            </div>
            <button type="submit" className="login-button">Criar</button>
          </form>
          <div className="login-links">
            <p className="login-register">Já têm conta? <a href="#2">Login</a></p>
          </div>
          <div className="social-login">
            <button className="google-login" onClick={handleGoogleLogin}>Criar conta com Google</button>
            <button className="facebook-login" onClick={handleFacebookLogin}>Criar conta com Facebook</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;