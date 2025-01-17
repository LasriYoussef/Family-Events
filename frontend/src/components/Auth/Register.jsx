import { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import './Auth.css'; // Styles pour la page d'authentification

const Register = ({ onSwitchToLogin }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [error, setError] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setError('Les mots de passe ne correspondent pas.');
      return;
    }
    try {
      await axios.post('http://localhost:3000/api/auth/register', {
        name: formData.name,
        email: formData.email,
        password: formData.password,
      });
      alert('Inscription réussie ! Vous pouvez maintenant vous connecter.');
      onSwitchToLogin();
    } catch (err) {
      setError(err.response?.data?.message || 'Une erreur est survenue.');
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="auth-container">
      <h2>Inscription</h2>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleRegister}>
        <input 
          type="text" 
          name="name" 
          placeholder="Nom complet" 
          value={formData.name} 
          onChange={handleChange} 
          required 
        />
        <input 
          type="email" 
          name="email" 
          placeholder="Adresse email" 
          value={formData.email} 
          onChange={handleChange} 
          required 
        />
        <input 
          type="password" 
          name="password" 
          placeholder="Mot de passe" 
          value={formData.password} 
          onChange={handleChange} 
          required 
        />
        <input 
          type="password" 
          name="confirmPassword" 
          placeholder="Confirmer le mot de passe" 
          value={formData.confirmPassword} 
          onChange={handleChange} 
          required 
        />
        <button type="submit">S&apos;inscrire</button>
      </form>
      <p>
        Déjà un compte ?{' '}
        <button className="link" onClick={onSwitchToLogin}>Connectez-vous</button>
      </p>
    </div>
  );
};
Register.propTypes = {
  onSwitchToLogin: PropTypes.func.isRequired,
};

export default Register;
