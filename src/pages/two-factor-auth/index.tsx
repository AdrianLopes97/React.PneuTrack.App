import React, { useState, useRef } from 'react';
import type { ChangeEvent, KeyboardEvent } from 'react'; // Use type-only imports
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import './twoFactorAuth.css';

const TwoFactorAuthPage: React.FC = () => {
  const [code, setCode] = useState<string[]>(new Array(4).fill(''));
  const navigate = useNavigate();
  const inputsRef = useRef<(HTMLInputElement | null)[]>([]);

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const { value } = e.target;
    if (/^\d?$/.test(value)) {
      const newCode = [...code];
      newCode[index] = value;
      setCode(newCode);

      if (value && index < code.length - 1) {
        inputsRef.current[index + 1]?.focus();
      }
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === 'Backspace') {
      if (!code[index] && index > 0) {
        inputsRef.current[index - 1]?.focus();
      }
    }
  };

  const handleContinue = (e: React.FormEvent) => {
    e.preventDefault();
    const enteredCode = code.join('');
    if (enteredCode.length === 4) {
      alert(`Código "${enteredCode}" inserido. Funcionalidade de verificação a ser implementada.`);

      navigate('/');
    } else {
      alert('Por favor, insira o código de 4 dígitos.');
    }
  };

  const handleResendCode = () => {
    alert('Funcionalidade de reenviar código a ser implementada.');
  };

  return (
    <div className="two-factor-auth-page">
      <div className="two-factor-auth-container">
        <div className="two-factor-auth-header">
          <button onClick={() => navigate(-1)} className="back-button" aria-label="Voltar">
            <FaArrowLeft />
          </button>
          <h1 className="two-factor-auth-title">Código de ativação</h1>
        </div>

        <p className="two-factor-auth-instruction">
          Digite o código de 4 dígitos que você recebeu no seu telefone.
        </p>

        <form onSubmit={handleContinue}>
          <div className="code-inputs-container">
            {code.map((digit, index) => (
              <input
                key={index}
                ref={(el) => {
                  inputsRef.current[index] = el;
                }}
                className="code-input"
                value={digit}
                onChange={(e) => handleInputChange(e, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                maxLength={1}
                required
                aria-label={`Dígito ${index + 1} do código de ativação`}
              />
            ))}
          </div>

          <button type="submit" className="continue-button">
            Continuar
          </button>
        </form>

        <p className="resend-code-link">
          Não recebeu o código? <a href="#" onClick={handleResendCode}>Reenviar</a>
        </p>
      </div>
    </div>
  );
};

export default TwoFactorAuthPage;
