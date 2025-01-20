import 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <nav>
        <Link to="/">Accueil</Link>
        <Link to="/dashboard">Tableau de bord</Link>
        <Link to="/friends">Amis</Link>
        <Link to="/login">Connexion</Link>
      </nav>
    </header>
  );
};

export default Header;
