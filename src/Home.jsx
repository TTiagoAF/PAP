import React from 'react';
import Header from './Header';
import { FaMoneyBillAlt, FaCheckCircle, FaCalendar, FaTasks } from 'react-icons/fa';
import Footer from './Footer';

const HomePage = () => {
  return (
    <div className="homepage">
        <Header />
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Bem-vindo ao MindfulLife</h1>
          <p className="hero-subtitle">Transforme sua vida com equilíbrio e consciência</p>
          <a href="#6" className="cta-button">Começar Agora</a>
        </div>
      </section>
      <h2 className="section-title">Recursos</h2>
      <section className="features">
        <div className="feature">
          <h3 className="feature-title">Finanças</h3>
          <FaMoneyBillAlt className="feature-icon" />
          <p className="feature-description">Acompanhe as suas despesas e receitas para um melhor controle financeiro.</p>
        </div>
        <div className="feature">
          <h3 className="feature-title">Metas e Hábitos</h3>
          <FaCheckCircle className="feature-icon" />
          <p className="feature-description">Defina metas e acompanhe seus hábitos diários para alcançar uma vida mais saudável e produtiva.</p>
        </div>
        <div className="feature">
          <h3 className="feature-title">Agenda</h3>
          <FaCalendar className="feature-icon" />
          <p className="feature-description">Organize seus compromissos e eventos em uma agenda completa e fácil de usar.</p>
        </div>
        <div className="feature">
          <h3 className="feature-title">Tarefas</h3>
          <FaTasks className="feature-icon" />
          <p className="feature-description">Gerencie suas tarefas diárias, atribua prioridades e acompanhe seu progresso.</p>
        </div>
      </section>
      <section className="testimonial">
        <div className="testimonial-content">
          <h2 className="testimonial-quote">MindfulLife mudou completamente a forma como administro minhas tarefas e metas. Recomendo!</h2>
          <p className="testimonial-author">- Paulo Borges</p>
        </div>
      </section>

      <section className="cta">
        <h2 className="cta-title">Comece hoje a transformar sua vida!</h2>
        <button className="cta-button">Criar Conta</button>
      </section>
      <Footer/>
    </div>
  );
};

export default HomePage;