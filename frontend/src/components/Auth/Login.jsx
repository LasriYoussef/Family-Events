import { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import './Auth.css'; // Styles pour la page d'authentification

const Login = ({ onSwitchToRegister }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/api/auth/login', {
        email,
        password,
      });
      localStorage.setItem('token', response.data.token); // Stockage du token JWT
      alert('Connexion réussie !');
    } catch (err) {
      setError(err.response?.data?.message || 'Une erreur est survenue.');
    }
  };

  return (
    <div className="auth-container">
      <h2>Connexion</h2>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleLogin}>
        <input 
          type="email" 
          placeholder="Adresse email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          required 
        />
        <input 
          type="password" 
          placeholder="Mot de passe" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          required 
        />
        <button type="submit">Se connecter</button>
      </form>
      <p>
        Pas encore de compte ?{' '}
        <button className="link-button" onClick={onSwitchToRegister}>Inscrivez-vous</button>
      </p>
    </div>
  );
};
Login.propTypes = {
  onSwitchToRegister: PropTypes.func.isRequired,
};

export default Login;
