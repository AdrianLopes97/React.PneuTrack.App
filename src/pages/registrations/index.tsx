import React from 'react';
import './registrations.css';
import Sidebar from '../../components/sidebar';
import Header from '../../components/header';
import { Icon } from '@iconify/react';
import { useNavigate } from 'react-router-dom';

const RegistrationsPage: React.FC = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/home'); // Or to the previous page if more appropriate
  };

  // Placeholder for navigation or action when a card is clicked
  const handleCardClick = (path: string) => {
    navigate(path);
  };

  return (
    <div className="registrations-layout">
      <Sidebar />
      <div className="main-content-area">
        <Header />
        <main className="registrations-content">
          <div className="page-title-bar">
            <button className="back-button" onClick={handleBackClick}>
              <Icon icon="material-symbols:arrow-back" />
            </button>
            <h1>Cadastros</h1>
          </div>
          <div className="registration-cards-container">
            <div className="registration-card" onClick={() => handleCardClick('/registrations/truck')}>
              <Icon icon="mage:delivery-truck" className="card-icon" />
              <span>Cadastrar Caminhão</span>
            </div>
            <div className="registration-card" onClick={() => handleCardClick('/registrations/tire')}>
              <Icon icon="ph:tire" className="card-icon" />
              <span>Cadastrar Pneu</span>
            </div>
            <div className="registration-card" onClick={() => handleCardClick('/registrations/maintenance')}>
              <Icon icon="ix:maintenance-warning" className="card-icon" />
              <span>Registrar Manutenção</span>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default RegistrationsPage;
