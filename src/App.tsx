import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LoginPage from './pages/login'
import TwoFactorAuthPage from './pages/two-factor-auth'
import HomePage from './pages/home'
import ProtectedRoute from './components/ProtectedRoute' // Import ProtectedRoute
import InspectionSchedulePage from './pages/inspection-schedule'
import RegistrationsPage from './pages/registrations'
import TireRegistrationPage from './pages/registrations/tire'; // Added this line

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
        <Route path="/registrations/tire" element={<TireRegistrationPage />} /> {/* Added this line */}
        <Route path="/search" element={<div>Search Page Placeholder</div>} />
        <Route path="/trucks" element={<div>Trucks Page Placeholder</div>} />
        <Route element={<ProtectedRoute />}>
        </Route>
      </Routes>
    </Router>
  )
}

export default App
