import React from 'react';
import './sidebar.css';
import { Icon } from '@iconify/react';
import PneuTrackLogoSrc from '../../assets/logo-system-intern.png';
import { NavLink } from 'react-router-dom'; // Import NavLink

const LogoPneuTrackIcon = () => (
    <img src={PneuTrackLogoSrc} alt="PneuTrack Logo" className="sidebar-logo-icon" />
);

interface SidebarProps {
  activePath?: string; 
}

const Sidebar: React.FC<SidebarProps> = () => {

  return (
    <aside className="sidebar-layout">
      <div className="sidebar-header">
        <LogoPneuTrackIcon />
      </div>
      <nav className="sidebar-navigation">
        <NavLink to="/home" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
          <Icon icon="material-symbols-light:home-outline" />
        </NavLink>
        <NavLink to="/inspection-schedule" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
          <Icon icon="icon-park-outline:inspection" />
        </NavLink>
        <NavLink to="/registrations" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}> {/* Placeholder path */} 
          <Icon icon="icon-park-outline:list-add" />
        </NavLink>
        <NavLink to="/search" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}> {/* Placeholder path */} 
          <Icon icon="ph:magnifying-glass" />
        </NavLink>
        <NavLink to="/fleet-overview" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}> {/* Placeholder path */} 
          <Icon icon="mage:delivery-truck" />
        </NavLink>
      </nav>
      <div className="sidebar-bottom">
        <a href="#" className="nav-link">
          <Icon icon="ic:round-logout" />
        </a>
        <span className="sidebar-copyright">© 2025</span>
      </div>
    </aside>
  );
};

export default Sidebar;
