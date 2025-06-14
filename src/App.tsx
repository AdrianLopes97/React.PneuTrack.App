import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LoginPage from './pages/login'
import TwoFactorAuthPage from './pages/two-factor-auth'
import HomePage from './pages/home'
import ProtectedRoute from './components/ProtectedRoute' // Import ProtectedRoute
import InspectionSchedulePage from './pages/inspection-schedule'
import RegistrationsPage from './pages/registrations'
import TireRegistrationPage from './pages/registrations/tire'; // Added this line
import MaintenanceRegistrationPage from './pages/registrations/maintenance'
import TruckRegistrationPage from './pages/registrations/truck'
import RegisterTruckAxisTypePage from './pages/registrations/truck/register-axis-type'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/2fa" element={<TwoFactorAuthPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/inspection-schedule" element={<InspectionSchedulePage />} />
        <Route path="/registrations" element={<RegistrationsPage />} />
        <Route path="/registrations/tire" element={<TireRegistrationPage />} />
        <Route path="/registrations/maintenance" element={<MaintenanceRegistrationPage />} />
        <Route path="/registrations/truck" element={<TruckRegistrationPage />} />
        <Route path="/registrations/truck/register-axis-type" element={<RegisterTruckAxisTypePage />} />
        <Route path="/search" element={<div>Search Page Placeholder</div>} />
        <Route path="/trucks" element={<div>Trucks Page Placeholder</div>} />
        <Route element={<ProtectedRoute />}>
        </Route>
      </Routes>
    </Router>
  )
}

export default App
