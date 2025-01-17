import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
  return (
    <div className="notfound-container">
      <h1>404</h1>
      <p>Oups, la page que vous recherchez n'existe pas.</p>
      <Link to="/">
        <button className="btn-primary">Retour à l'accueil</button>
      </Link>
    </div>
  );
};

export default NotFound;
