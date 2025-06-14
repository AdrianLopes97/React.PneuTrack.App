import React from 'react';
import './fleet-overview.css';
import Sidebar from '../../components/sidebar';
import Header from '../../components/header';
import { Icon } from '@iconify/react';
import { useNavigate } from 'react-router-dom';

const FleetOverviewPage: React.FC = () => {
  const navigate = useNavigate();

  const handleCardClick = (path: string) => {
    navigate(path);
  };

  return (
    <div className="fleet-overview-layout">
      <Sidebar />
      <div className="main-content-area">
        <Header />
        <main className="fleet-overview-content">
          <div className="page-title-bar">
            <h1>Visão geral da frota</h1>
          </div>
          <div className="fleet-overview-cards-container">
            <div className="fleet-overview-card" onClick={() => handleCardClick('/fleet-overview/register-option')}>
              <Icon icon="circum:circle-plus" className="card-icon" />
              <span>Cadastrar Opção</span>
            </div>
            <div className="fleet-overview-card" onClick={() => handleCardClick('/fleet-overview/reports')}>
              <Icon icon="iconoir:reports" className="card-icon" />
              <span>Relatórios</span>
            </div>
            <div className="fleet-overview-card" onClick={() => handleCardClick('/fleet-overview/performance-indicators')}>
              <Icon icon="mdi:report-line-shimmer" className="card-icon" />
              <span>Pesquisar Indicadores de desempenho</span>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default FleetOverviewPage;
