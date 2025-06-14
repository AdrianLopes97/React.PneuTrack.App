import React from 'react';
import './sidebar.css'; // Import the CSS file
import { Icon } from '@iconify/react'; // Import Iconify
import PneuTrackLogoSrc from '../../assets/logo-system-intern.png'; // Import the logo

const LogoPneuTrackIcon = () => (
    <img src={PneuTrackLogoSrc} alt="PneuTrack Logo" className="sidebar-logo-icon" />
);

const Sidebar: React.FC = () => {
  return (
    <aside className="sidebar-layout">
      <div className="sidebar-header">
        <LogoPneuTrackIcon />
      </div>
      <nav className="sidebar-navigation">
        <a href="#" className="nav-link active"><Icon icon="material-symbols-light:home-outline" /></a>
        <a href="#" className="nav-link"><Icon icon="icon-park-outline:inspection" /></a>
        <a href="#" className="nav-link"><Icon icon="icon-park-outline:list-add" /></a>
        <a href="#" className="nav-link"><Icon icon="ph:magnifying-glass" /></a>
        <a href="#" className="nav-link"><Icon icon="mage:delivery-truck" /></a>
      </nav>
      <div className="sidebar-bottom">
        <a href="#" className="nav-link"><Icon icon="ic:round-logout" /></a>
        <span className="sidebar-copyright">© 2025</span>
      </div>
    </aside>
  );
};

export default Sidebar;
