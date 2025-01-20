import  { useState, useEffect } from 'react';
import { fetchEvents, createEvent, deleteEvent } from '../../services/calendarService';

const TestCalendar = () => {
  const [events, setEvents] = useState([]);
  const [newEvent, setNewEvent] = useState({ title: '', date: '' });

  useEffect(() => {
    const loadEvents = async () => {
      const data = await fetchEvents();
      setEvents(data);
    };

    loadEvents();
  }, []);

  const handleCreateEvent = async () => {
    const event = await createEvent(newEvent);
    setEvents([...events, event]);
    setNewEvent({ title: '', date: '' });
  };

  const handleDeleteEvent = async (id) => {
    await deleteEvent(id);
    setEvents(events.filter((event) => event.id !== id));
  };

  return (
    <div>
      <ul>
        {events.map((event) => (
          <li key={event.id}>
            {event.title} - {event.date}
            <button onClick={() => handleDeleteEvent(event.id)}>Supprimer</button>
          </li>
        ))}
      </ul>
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
      <button onClick={handleCreateEvent}>Ajouter un événement</button>
    </div>
  );
};

export default TestCalendar;