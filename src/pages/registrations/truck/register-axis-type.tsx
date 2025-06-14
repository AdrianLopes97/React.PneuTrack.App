import React from 'react';
import './register-axis-type.css';
import Sidebar from '../../../components/sidebar';
import Header from '../../../components/header';
import { Icon } from '@iconify/react';
import { useNavigate } from 'react-router-dom';
import TruckAxleImage from '../../../assets/eixo_caminhao.png'; // Import the image

const RegisterTruckAxisTypePage: React.FC = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/registrations/truck'); 
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    
  };

  return (
    <div className="register-axis-type-layout">
      <Sidebar />
      <div className="main-content-area-axis-type">
        <Header />
        <main className="register-axis-type-content">
          <div className="page-title-bar-axis-type">
            <button onClick={handleBackClick} className="back-button-axis-type" aria-label="Voltar">
              <Icon icon="mdi:arrow-left" />
            </button>
            <h1>Cadastrar Caminhão</h1>
          </div>
          <div className="page-title-bar-axis-type">
            <h2>Tipo de eixo</h2>
          </div>
          <form onSubmit={handleSubmit} className="axis-type-form-container">
            <div className="truck-axle-image-container">
              <img src={TruckAxleImage} alt="Eixos de Caminhão" className="truck-axle-image" />
            </div>

            <div className="form-actions">
              <button type="submit" className="save-button">
                Cadastrar
              </button>
            </div>
          </form>
        </main>
      </div>
    </div>
  );
};

export default RegisterTruckAxisTypePage;
