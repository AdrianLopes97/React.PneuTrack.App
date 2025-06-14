import React from 'react';
import './home.css'; // Import the CSS file
import {
  FaBell,
  FaUserCircle,
  FaChevronDown,
} from 'react-icons/fa';
import { Icon } from '@iconify/react'; // Import Iconify
import LupaIcon from '../../components/icons/lupa';
import Sidebar from '../../components/sidebar'; // Import the Sidebar component

const HomePage: React.FC = () => {
  return (
    <div className="home-page-layout">
      <Sidebar />
      <main className="home-main-content">
        <header className="main-top-header">
          <div className="user-controls">
            <div className="notification-bell-container">
              <FaBell />
              <span className="notification-dot"></span>
            </div>
            <div className="user-profile">
              <FaUserCircle />
              <FaChevronDown />
            </div>
          </div>
        </header>

        <section className="page-content-area">
          <div className="greeting-section">
            <h1>Olá, Usuário!</h1>
            <p>Bem-vindo de volta!</p>
          </div>

          <div className="task-prompt-section">
            <h2>O que você gostaria de fazer?</h2>
          </div>

          <button className="primary-action-button">
            <LupaIcon className="lupa-icon" />
            <div className="button-text-content">
              <div className="button-icon-text">
                <span>Inspecionar caminhão</span>
              </div>
              <div className="button-subtitle">
                Avalie o estado dos pneus e registre no app
              </div>
            </div>
          </button>

          <div className="secondary-actions-grid">
            <div className="action-card">
              <Icon icon="vaadin:stock" />
              <span>Estoque</span>
            </div>
            <div className="action-card">
              <Icon icon="iconoir:reports" />
              <span>Relatórios</span>
            </div>
            <div className="action-card">
              <Icon icon="ix:maintenance-warning" />
              <span>Manutenções</span>
            </div>
            <div className="action-card">
              <Icon icon="mdi-light:settings" />
              <span>Configurações</span>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default HomePage;
