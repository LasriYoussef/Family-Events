import  { useState, useEffect } from 'react';
import { fetchEvents, createEvent, deleteEvent } from '../../services/calendarService';

const CalendarView = () => {
  const [events, setEvents] = useState([]);
  const [newEvent, setNewEvent] = useState({ title: '', date: '' });

  useEffect(() => {
    const loadEvents = async () => {
      try {
        const data = await fetchEvents();
        setEvents(data);
      } catch (error) {
        console.error('Erreur lors du chargement des événements', error);
      }
    };

    loadEvents();
  }, []);

  const handleCreateEvent = async () => {
    try {
      const event = await createEvent(newEvent);
      setEvents([...events, event]);
      setNewEvent({ title: '', date: '' });
    } catch (error) {
      console.error('Erreur lors de la création de l\'événement', error);
    }
  };

  const handleDeleteEvent = async (id) => {
    try {
      await deleteEvent(id);
      setEvents(events.filter((event) => event.id !== id));
    } catch (error) {
      console.error('Erreur lors de la suppression de l\'événement', error);
    }
  };

  return (
    <div className="calendar-container">
      <h3>Calendrier</h3>
      <ul>
        {events.map((event) => (
          <li key={event.id}>
            {event.title} - {event.date}
            <button onClick={() => handleDeleteEvent(event.id)}>Supprimer</button>
          </li>
        ))}
      </ul>
      <div>
        <input
          type="text"
          placeholder="Titre"
          value={newEvent.title}
          onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
        />
        <input
          type="date"
          value={newEvent.date}
          onChange={(e) => setNewEvent({ ...newEvent, date: e.target.value })}
        />
        <button onClick={handleCreateEvent}>Ajouter</button>
      </div>
    </div>
  );
};

export default CalendarView;
