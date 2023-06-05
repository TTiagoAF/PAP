import React from 'react';
import Footer from './Footer';

const AboutPage = () => {
  return (
    <div className="about-page">
      <h1 className="page-title">Sobre a Empresa</h1>
      <p className="page-description">
        A MindfulLife é uma empresa comprometida em ajudar as pessoas a alcançarem uma vida equilibrada, saudável e significativa. 
        Nossa missão é fornecer ferramentas e recursos que promovam o bem-estar físico, mental e emocional dos nossos usuários.
      </p>
      <p className="page-description">
        Desde a nossa fundação em 2023, temos nos dedicado a desenvolver soluções inovadoras e intuitivas que auxiliam nossos usuários 
        a gerenciar suas finanças, estabelecer metas, acompanhar hábitos saudáveis, organizar suas tarefas e otimizar seu tempo.
      </p>
      <p className="page-description">
        Nosso time de especialistas está constantemente empenhado em melhorar nossos produtos e serviços, visando proporcionar uma experiência 
        excepcional aos nossos clientes. Acreditamos que a atenção plena e o autoconhecimento são fundamentais para uma vida equilibrada e 
        estamos comprometidos em compartilhar esse conhecimento com a comunidade.
      </p>
      <p className="page-description">
        Se você está em busca de uma vida mais consciente e produtiva, junte-se a nós na MindfulLife e descubra como podemos ajudá-lo a 
        transformar sua vida para melhor.
      </p>
      <Footer/>
    </div>
  );
};

export default AboutPage;