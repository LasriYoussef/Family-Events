import 'react';
import { login, register } from '../services/authService';

const TestAuth = () => {
  const handleLogin = async () => {
    try {
      const response = await login('test@example.com', 'password123');
      console.log('Connexion réussie :', response);
    } catch (error) {
      console.error('Erreur lors de la connexion :', error);
    }
  };

  const handleRegister = async () => {
    try {
      const response = await register('Test User', 'newuser@example.com', 'password123');
      console.log('Inscription réussie :', response);
    } catch (error) {
      console.error('Erreur lors de l\'inscription :', error);
    }
  };

  return (
    <div>
      <button onClick={handleLogin}>Tester la connexion</button>
      <button onClick={handleRegister}>Tester l&apos;inscription</button>
    </div>
  );
};

export default TestAuth;