import React, { useState } from 'react';
import './tire.css';
import Sidebar from '../../../components/sidebar';
import Header from '../../../components/header';
import { Icon } from '@iconify/react';
import { useNavigate } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const TireRegistrationPage: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    idPneu: '',
    marca: '',
    modelo: '',
    tamanho: '',
    hodometro: '',
    data: null as Date | null, // Changed to Date or null
    custo: '',
    observacoes: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleDateChange = (date: Date | null) => {
    setFormData(prev => ({ ...prev, data: date }));
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
  const marcaOptions = ['Marca A', 'Marca B', 'Marca C'];
  const modeloOptions = ['Modelo X', 'Modelo Y', 'Modelo Z'];
  const tamanhoOptions = ['295/80R22.5', '275/80R22.5', '1000R20'];

  return (
    <div className="tire-registration-layout">
      <Sidebar />
      <div className="main-content-area">
        <Header />
        <main className="tire-registration-content">
          <div className="page-title-bar">
            <button className="back-button" onClick={handleBackClick}>
              <Icon icon="material-symbols:arrow-back" />
            </button>
            <h1>Cadastrar Pneu</h1>
          </div>

          <form className="tire-registration-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="idPneu">ID do pneu</label>
                <input
                  type="text"
                  id="idPneu"
                  name="idPneu"
                  placeholder="Digite..."
                  value={formData.idPneu}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="marca">Marca</label>
                <select
                  id="marca"
                  name="marca"
                  value={formData.marca}
                  onChange={handleInputChange}
                >
                  <option value="" disabled>Escolha uma opção</option>
                  {marcaOptions.map(option => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="modelo">Modelo</label>
                <select
                  id="modelo"
                  name="modelo"
                  value={formData.modelo}
                  onChange={handleInputChange}
                >
                  <option value="" disabled>Escolha uma opção</option>
                  {modeloOptions.map(option => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="tamanho">Tamanho</label>
                <select
                  id="tamanho"
                  name="tamanho"
                  value={formData.tamanho}
                  onChange={handleInputChange}
                >
                  <option value="" disabled>Escolha uma opção</option>
                  {tamanhoOptions.map(option => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="hodometro">Hodômetro</label>
                <input
                  type="text"
                  id="hodometro"
                  name="hodometro"
                  placeholder="Digite..."
                  value={formData.hodometro}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group form-group-date">
                <label htmlFor="data">Data</label>
                <div className="date-input-container">
                  <DatePicker
                    selected={formData.data}
                    onChange={handleDateChange}
                    dateFormat="dd/MM/yyyy"
                    placeholderText="__/__/____"
                    className="form-control" // Ensure styling is applied if you have a global .form-control
                    id="data"
                    name="data"
                    customInput={<input type="text" />}
                  />
                  <Icon icon="solar:calendar-line-duotone" className="date-icon" />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="custo">Custo</label>
                <input
                  type="text"
                  id="custo"
                  name="custo"
                  placeholder="Digite..."
                  value={formData.custo}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <div className="form-group form-group-full-width">
              <label htmlFor="observacoes">Observações</label>
              <textarea
                id="observacoes"
                name="observacoes"
                placeholder="Inserir Observações..."
                value={formData.observacoes}
                onChange={handleInputChange}
                rows={4}
              />
            </div>

            <div className="form-actions">
              <button type="submit" className="save-button">
                Salvar
              </button>
            </div>
          </form>
        </main>
      </div>
    </div>
  );
};

export default TireRegistrationPage;
