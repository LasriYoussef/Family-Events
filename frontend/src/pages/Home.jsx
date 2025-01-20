import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// import './Home.css';

const Home = () => {
  const navigate = useNavigate();
  
  // Vérifier si l'utilisateur est connecté
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      navigate('/dashboard'); // Redirection vers le tableau de bord si connecté
    }
  }, [navigate]);

  return (
    <div className="home-container">
      <h1>Bienvenue sur Family-Event</h1>
      <p>Connectez-vous pour accéder à vos événements et discussions.</p>
      <button className="btn-primary" onClick={() => navigate('/auth')}>
       Se connecter ou s&apos;inscrire
      </button>
    </div>
  );
};

export default Home;
