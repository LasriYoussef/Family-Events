import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
// import '../styles/Dashboard.css';

const Dashboard = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/events', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        });
        setEvents(response.data);
      } catch (error) {
        console.error('Erreur lors du chargement des événements', error);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  return (
    <div className="dashboard-container">
      <h2>Tableau de bord</h2>
      {loading ? (
        <p>Chargement...</p>
      ) : (
        <>
          {events.length > 0 ? (
            <ul>
              {events.map((event) => (
                <li key={event.id}>
                  {event.title} - {new Date(event.date).toLocaleDateString()}
                </li>
              ))}
            </ul>
          ) : (
            <p>Aucun événement à venir.</p>
          )}
        </>
      )}
      <div className="dashboard-actions">
        <Link to="/calendar">
          <button className="btn-primary">Voir le calendrier</button>
        </Link>
        <Link to="/friends">
          <button className="btn-primary">Gérer les amis</button>
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
