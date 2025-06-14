import React, { useState } from 'react';
import './inspectionSchedule.css';
import Sidebar from '../../components/sidebar';
import Header from '../../components/header';
import { Icon } from '@iconify/react';
import { useNavigate } from 'react-router-dom';

const initialInspectionItems = [
  { placa: 'EAT-1010', checked: false },
  { placa: 'XEB-4U80', checked: false },
  { placa: 'ZXY-7A12', checked: false },
  { placa: 'QRS-9B34', checked: false },
  { placa: 'LMN-5C67', checked: false },
  { placa: 'JKL-3D89', checked: false },
  { placa: 'TUV-1E23', checked: false },
  { placa: 'TAR-1R53', checked: false },
  { placa: 'CAR-7T78', checked: false },
  { placa: 'TUV-1E23', checked: false },
  { placa: 'TUV-1E23', checked: false },
];

const InspectionSchedulePage: React.FC = () => {
  const navigate = useNavigate();
  const [inspectionItems, setInspectionItems] = useState(initialInspectionItems);

  const handleBackClick = () => {
    navigate('/home');
  };

  const handleCheckboxClick = (index: number) => {
    const newInspectionItems = [...inspectionItems];
    newInspectionItems[index].checked = !newInspectionItems[index].checked;
    setInspectionItems(newInspectionItems);
  };

  return (
    <div className="inspection-schedule-layout">
      <Sidebar />
      <div className="main-content-area">
        <Header />
        <main className="inspection-content">
          <div className="page-title-bar">
            <button className="back-button" onClick={handleBackClick}>
              <Icon icon="material-symbols:arrow-back" />
            </button>
            <h1>Cronograma de inspeções</h1>
          </div>

          <div className="inspection-list-container">
            {inspectionItems.map((item, index) => (
              <div key={index} className="inspection-item">
                <div className="item-details">
                  <span className="placa-label">Placa</span>
                  <span className="placa-value">{item.placa}</span>
                </div>
                <div className="item-checkbox" onClick={() => handleCheckboxClick(index)} style={{ cursor: 'pointer' }}>
                  {item.checked ? (
                    <Icon icon="material-symbols:check-box" className="checkbox-checked" />
                  ) : (
                    <Icon icon="material-symbols:check-box-outline-blank" className="checkbox-unchecked" />
                  )}
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default InspectionSchedulePage;
