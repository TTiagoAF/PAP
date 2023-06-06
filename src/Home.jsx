import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Financas from './../img/Financas.png';
import Agenda from './../img/Agenda.png';
import Habitos from './../img/Habitos.png';
import Check from './../img/Checklist.png';

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
      <div className="card">
        <div className="text">
          <h2>Finanças</h2>
          <p>Acompanhe as suas despesas e receitas para um melhor controle financeiro.</p>
        </div>
        <div className="par">
          <img src={Financas} alt="Imagem" />
        </div>
      </div>
      <div className="card-impar">
        <div className="impar">
          <img src={Habitos} alt="Imagem" />
        </div>
        <div className="text-impar">
          <h2>Metas e Hábitos</h2>
          <p>Defina metas e acompanhe seus hábitos diários para alcançar uma vida mais saudável e produtiva.</p>
        </div>
      </div>
      <div className="card">
        <div className="text">
          <h2>Agenda</h2>
          <p>Organize seus compromissos e eventos em uma agenda completa e fácil de usar.</p>
        </div>
        <div className="par" >
          <img src={Agenda} alt="Imagem" />
        </div>
      </div>
      <div className="card-impar">
        <div className="impar">
          <img src={Check} alt="Imagem" />
        </div>
        <div className="text-impar">
          <h2>Tarefas</h2>
          <p>Gerencie suas tarefas diárias, atribua prioridades e acompanhe seu progresso.</p>
        </div>
      </div>
      <section className="testimonial">
        <div className="testimonial-content">
          <h2 className="testimonial-quote">MindfulLife mudou completamente a forma como administro minhas tarefas e metas. Recomendo!</h2>
          <p className="testimonial-author">- Paulo Borges</p>
        </div>
      </section>
      <Footer/>
    </div>
  );
};

export default HomePage;