import React from 'react';
import Footer from './Footer';

const ContactPage = () => {
  return (
    <div className="contact-page">
      <h1 className="page-title">Entre em Contato</h1>
      <p className="page-description">Se você tiver alguma dúvida ou precisar de suporte, não hesite em nos contatar.</p>

      <form className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Nome:</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">E-mail:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="message">Mensagem:</label>
          <textarea id="message" name="message" rows="6" required></textarea>
        </div>
        <button type="submit" className="submit-button">Enviar</button>
      </form>
      <Footer/>
    </div>
  );
};

export default ContactPage;