import React from 'react';
import './inspectionSchedule.css';
import Sidebar from '../../components/sidebar';
import Header from '../../components/header';
import { Icon } from '@iconify/react';

// Mock data for inspection items - replace with actual data fetching
const inspectionItems = [
  { placa: 'EAT-1010', checked: true },
  { placa: 'XEB-4U80', checked: true },
  { placa: 'ZXY-7A12', checked: false },
  { placa: 'QRS-9B34', checked: false },
  { placa: 'LMN-5C67', checked: false },
  { placa: 'JKL-3D89', checked: false },
  { placa: 'TUV-1E23', checked: false }, // Assuming the first TUV-1E23 is distinct or a typo in image
  { placa: 'TAR-1R53', checked: false },
  { placa: 'CAR-7T78', checked: false },
  { placa: 'TUV-1E23', checked: false }, // Second TUV-1E23
  { placa: 'TUV-1E23', checked: false }, // Third TUV-1E23
];

const InspectionSchedulePage: React.FC = () => {
  return (
    <div className="inspection-schedule-layout">
      <Sidebar />
      <div className="main-content-area">
        <Header />
        <main className="inspection-content">
          <div className="page-title-bar">
            <button className="back-button">
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
                <div className="item-checkbox">
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
