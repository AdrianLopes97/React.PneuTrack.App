import React from 'react';
import './search.css';
import Sidebar from '../../components/sidebar';
import Header from '../../components/header';
import { Icon } from '@iconify/react';
import { useNavigate } from 'react-router-dom';

const SearchPage: React.FC = () => {
  const navigate = useNavigate();

  const handleCardClick = (path: string) => {
    navigate(path);
  };

  return (
    <div className="search-layout">
      <Sidebar />
      <div className="main-content-area">
        <Header />
        <main className="search-content">
          <div className="page-title-bar">
            <h1>Pesquisas</h1>
          </div>
          <div className="search-instructions">
            <span>O que você gostaria de pesquisar?</span>
          </div>
          <div className="search-cards-container">
            <div className="search-card" onClick={() => handleCardClick('/search/tire')}>
              <Icon icon="ph:tire" className="card-icon" />
              <span>Pesquisar Pneu</span>
            </div>
            <div className="search-card" onClick={() => handleCardClick('/search/truck')}>
              <Icon icon="mage:delivery-truck" className="card-icon" />
              <span>Pesquisar Caminhão</span>
            </div>
            <div className="search-card" onClick={() => handleCardClick('/search/maintenance')}>
              <Icon icon="ix:maintenance-warning" className="card-icon" />
              <span>Pesquisar Manutenção</span>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default SearchPage;
