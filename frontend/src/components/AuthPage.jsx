import { useState } from 'react';
import Login from './Login';
import Register from './Register';

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleAuthMode = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="auth-page">
      {isLogin ? (
        <Login onSwitchToRegister={toggleAuthMode} />
      ) : (
        <Register onSwitchToLogin={toggleAuthMode} />
      )}
    </div>
  );
};

export default AuthPage;
