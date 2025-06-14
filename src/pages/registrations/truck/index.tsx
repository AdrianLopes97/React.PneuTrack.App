import React, { useState } from 'react';
import './truck.css';
import Sidebar from '../../../components/sidebar';
import Header from '../../../components/header';
import { Icon } from '@iconify/react';
import { useNavigate } from 'react-router-dom';
import 'react-datepicker/dist/react-datepicker.css';

const TruckRegistrationPage: React.FC = () => {
  const navigate = useNavigate();
  
  const handleCardClick = (path: string) => {
    navigate(path);
  };

  const [formData, setFormData] = useState({
    idTruck: '',
    chassi: '',
    tiresQnt: '',
    odometer: '',
    tireSize: '',
    observation: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleBackClick = () => {
    navigate('/registrations');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form data submitted:', formData);
    // Potentially navigate away or show a success message
  };

  // Placeholder options for dropdowns
  // Mock de opções de quantidade de pneus: mínimo 8, subindo de 4 em 4
  const tiresQntOptions = Array.from({ length: 8 }, (_, i) => 8 + i * 4);

  // Mock de opções de tamanho de pneus para caminhão
  const tireSizeOptions = [
    '295/80R22.5',
    '275/80R22.5',
    '285/75R24.5',
    '11R22.5',
    '12R22.5',
    '315/80R22.5',
    '385/65R22.5',
    '215/75R17.5',
    '245/70R19.5',
    '265/70R19.5'
  ];

  return (
    <div className="truck-registration-layout">
      <Sidebar />
      <div className="main-content-area">
        <Header />
        <main className="truck-registration-content">
          <div className="page-title-bar">
            <button className="back-button" onClick={handleBackClick}>
              <Icon icon="material-symbols:arrow-back" />
            </button>
            <h1>Cadastrar caminhão</h1>
          </div>

          <form className="truck-registration-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="idTruck">ID do caminhão</label>
                <input
                  type="text"
                  id="idTruck"
                  name="idTruck"
                  placeholder="Digite..."
                  value={formData.idTruck}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="chassi">Chassi</label>
                <input
                  type="text"
                  id="chassi"
                  name="chassi"
                  placeholder="Digite..."
                  value={formData.chassi}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="tiresQnt">Quantidade de pneus</label>
                <select
                  id="tiresQnt"
                  name="tiresQnt"
                  value={formData.tiresQnt}
                  onChange={handleInputChange}
                >
                  <option value="" disabled>Escolha uma opção</option>
                  {tiresQntOptions.map(option => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="odometer">Hodômetro</label>
                <input
                  type="text"
                  id="odometer"
                  name="odometer"
                  placeholder="Digite..."
                  value={formData.odometer}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="tireSize">Tamanho dos pneus</label>
                <select
                  id="tireSize"
                  name="tireSize"
                  value={formData.tireSize}
                  onChange={handleInputChange}
                >
                  <option value="" disabled>Escolha uma opção</option>
                  {tireSizeOptions.map(option => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="form-group form-group-full-width">
              <label htmlFor="observation">Observações</label>
              <textarea
                id="observation"
                name="observation"
                placeholder="Inserir Observações..."
                value={formData.observation}
                onChange={handleInputChange}
                rows={4}
              />
            </div>

            <div className="form-actions">
              <button 
                onClick={() => handleCardClick('/registrations/truck/register-axis-type')} 
                className="save-button"
              >
                Registrar tipo do eixo
              </button>
            </div>
          </form>
        </main>
      </div>
    </div>
  );
};

export default TruckRegistrationPage;
