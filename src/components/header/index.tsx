import React from 'react';
import './header.css'; // Import the CSS file
import {
  FaBell,
  FaUserCircle,
  FaChevronDown,
} from 'react-icons/fa';

const Header: React.FC = () => {
  return (
    <header className="header-layout">
      <div className="user-controls">
        <div className="notification-bell-container">
          <FaBell />
          <span className="notification-dot"></span>
        </div>
        <div className="user-profile">
          <FaUserCircle />
          <FaChevronDown className="dropdown-arrow"/>
        </div>
      </div>
    </header>
  );
};

export default Header;
