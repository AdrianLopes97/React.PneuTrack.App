import React, { useState } from 'react';
import './maintenance.css';
import Sidebar from '../../../components/sidebar';
import Header from '../../../components/header';
import { Icon } from '@iconify/react';
import { useNavigate } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const MaintenanceRegistrationPage: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    idPneu: '',
    serviceType: '',
    sendDate: null as Date | null,
    returnDate: null as Date | null,
    reason: '',
    status: '',
    returnStatus: '',
    protocol: '',
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
  const serviceTypeOptions = ['Calibrar', 'Recapagem', 'Remendação'];

  const reasonOptions = [
    'Desgaste excessivo',
    'Furo ou perfuração',
    'Bolha na lateral',
    'Descolamento da banda de rodagem',
    'Corte na carcaça',
    'Vazamento de ar',
    'Danos por impacto',
    'Desgaste irregular',
    'Problemas na válvula',
    'Reforma preventiva'
  ];

  return (
    <div className="maintenance-registration-layout">
      <Sidebar />
      <div className="main-content-area">
        <Header />
        <main className="maintenance-registration-content">
          <div className="page-title-bar">
            <button className="back-button" onClick={handleBackClick}>
              <Icon icon="material-symbols:arrow-back" />
            </button>
            <h1>Registrar manutenção</h1>
          </div>

          <form className="maintenance-registration-form" onSubmit={handleSubmit}>
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
                <label htmlFor="serviceType">Tipo de serviço</label>
                <select
                  id="serviceType"
                  name="serviceType"
                  value={formData.serviceType}
                  onChange={handleInputChange}
                >
                  <option value="" disabled>Escolha uma opção</option>
                  {serviceTypeOptions.map(option => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
              </div>
              <div className="form-group form-group-date">
                <label htmlFor="sendDate">Data de envio</label>
                <div className="date-input-container">
                  <DatePicker
                    selected={formData.sendDate}
                    onChange={handleDateChange}
                    dateFormat="dd/MM/yyyy"
                    placeholderText="__/__/____"
                    className="form-control"
                    id="sendDate"
                    name="sendDate"
                    customInput={<input type="text" />}
                  />
                  <Icon icon="solar:calendar-line-duotone" className="date-icon" />
                </div>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group form-group-date">
                <label htmlFor="returnDate">Data de retorno</label>
                <div className="date-input-container">
                  <DatePicker
                    selected={formData.returnDate}
                    onChange={handleDateChange}
                    dateFormat="dd/MM/yyyy"
                    placeholderText="__/__/____"
                    className="form-control"
                    id="returnDate"
                    name="returnDate"
                    customInput={<input type="text" />}
                  />
                  <Icon icon="solar:calendar-line-duotone" className="date-icon" />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="reason">Motivo</label>
                <select
                  id="reason"
                  name="reason"
                  value={formData.reason}
                  onChange={handleInputChange}
                >
                  <option value="" disabled>Escolha uma opção</option>
                  {reasonOptions.map(option => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="status">Status</label>
                <input
                  type="text"
                  id="status"
                  name="status"
                  placeholder="Digite..."
                  value={formData.status}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="returnStatus">Status de retorno</label>
                <input
                  type="text"
                  id="returnStatus"
                  name="returnStatus"
                  placeholder="Digite..."
                  value={formData.returnStatus}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="custo">Protocolo</label>
                <input
                  type="text"
                  id="Protocolo"
                  name="Protocolo"
                  placeholder="Digite..."
                  value={formData.protocol}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="form-actions">
              <button type="submit" className="save-button">
                Registrar
              </button>
            </div>
          </form>
        </main>
      </div>
    </div>
  );
};

export default MaintenanceRegistrationPage;
