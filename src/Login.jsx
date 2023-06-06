import React, { useState } from 'react';
import logo from './../img/logo.png';
import image from './../img/Login.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
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
        <img src={image} alt="Imagem" className="login-image" />
      <div className="login-container">
        <div className="login-left">
          <img src={logo} alt="MindfulLife Logo" className="login-logo" />
        </div>
        <div className="login-right">
          <h1 className="login-title">Bem-vindo à MindfulLife</h1>
          <form className="login-form" onSubmit={handleFormSubmit}>
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
            <button type="submit" className="login-button">Entrar</button>
          </form>
          <div className="login-links">
            <p className="login-forgot-password"><a href="#1">Esqueceu sua senha?</a></p>
            <p className="login-register">Ainda não tem uma conta? <a href="#2">Registre-se</a></p>
          </div>
          <div className="social-login">
            <button className="google-login" onClick={handleGoogleLogin}>Login com Google</button>
            <button className="facebook-login" onClick={handleFacebookLogin}>Login com Facebook</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;