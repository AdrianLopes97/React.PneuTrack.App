import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import App from './App.tsx'; // Assuming App.tsx might contain layout common to all pages
import HomePage from './pages/home'; // Import HomePage
import InspectionSchedulePage from './pages/inspection-schedule'; // Import InspectionSchedulePage
import './index.css';
import { AuthProvider } from './contexts/AuthContext';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/inspection-schedule" element={<InspectionSchedulePage />} />
          {/* Define placeholder routes for other sidebar links if they should navigate */}
          <Route path="/list-add" element={<div>List Add Page Placeholder</div>} /> 
          <Route path="/search" element={<div>Search Page Placeholder</div>} />
          <Route path="/trucks" element={<div>Trucks Page Placeholder</div>} />
        </Routes>
      </Router>
    </AuthProvider>
  </StrictMode>,
);
