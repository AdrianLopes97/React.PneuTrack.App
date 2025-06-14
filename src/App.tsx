import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LoginPage from './pages/login'
import TwoFactorAuthPage from './pages/two-factor-auth'
import HomePage from './pages/home'
import ProtectedRoute from './components/ProtectedRoute' // Import ProtectedRoute

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/2fa" element={<TwoFactorAuthPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route element={<ProtectedRoute />}>
        </Route>
      </Routes>
    </Router>
  )
}

export default App
