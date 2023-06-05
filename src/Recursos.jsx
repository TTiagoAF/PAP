import React from 'react';
import Footer from './Footer';

const ResourcesPage = () => {
  return (
    <div className="resources-page">
      <h1 className="page-title">Recursos</h1>

      <div className="resource">
        <h3 className="resource-title">Gerenciamento de Finanças</h3>
        <p className="resource-description">
          Acompanhe suas despesas e receitas, defina orçamentos, e tenha uma visão clara do seu fluxo financeiro.
        </p>
      </div>

      <div className="resource">
        <h3 className="resource-title">Definição de Metas e Hábitos</h3>
        <p className="resource-description">
          Estabeleça metas pessoais e acompanhe seus hábitos diários para alcançar um estilo de vida mais saudável e produtivo.
        </p>
      </div>

      <div className="resource">
        <h3 className="resource-title">Agenda e Calendário</h3>
        <p className="resource-description">
          Organize seus compromissos, eventos e tarefas em uma agenda integrada para otimizar sua rotina diária.
        </p>
      </div>

      <div className="resource">
        <h3 className="resource-title">Gerenciamento de Tarefas</h3>
        <p className="resource-description">
          Crie e gerencie suas tarefas, defina prioridades, atribua prazos e acompanhe seu progresso em um só lugar.
        </p>
      </div>
      <Footer/>
    </div>
  );
};

export default ResourcesPage;