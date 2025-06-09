import React, { useState } from 'react';
import './login.css'; 
import logo from '../../assets/logo.png'; 
import systemName from '../../assets/system-name.png';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState(''); 
  const [password, setPassword] = useState(''); 
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Login attempt with:', { email, password });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-logo">
          <img src={logo} alt="Pneu Track Logo Icon" className="logo-icon" />
          <img src={systemName} alt="Pneu Track System Name" className="logo-text-img" />
        </div>
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label htmlFor="email">Usuário</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
              placeholder="usuario@e-mail.com"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Senha</label>
            <div className="password-container">
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                value={password}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                placeholder={showPassword ? 'insira sua senha' : '••••••••'}
                required
              />
              <span
                className="password-toggle"
                onClick={togglePasswordVisibility}
                role="button"
                tabIndex={0}
                onKeyPress={(e: React.KeyboardEvent<HTMLSpanElement>) => e.key === 'Enter' && togglePasswordVisibility()}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
          </div>
          <button type="submit" className="login-button">
            Login
          </button>
        </form>
        <div className="links-container">
          <a href="#">Esqueceu a senha?</a>
          <a href="#" className="signup-link">
            Não tem uma conta? Cadastre-se agora
          </a>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
