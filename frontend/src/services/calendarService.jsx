import axios from 'axios';

const API_URL = 'http://localhost:3000/api/events';

export const fetchEvents = async () => {
  const response = await axios.get(`${API_URL}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  });
  return response.data;
};

export const createEvent = async (eventData) => {
  const response = await axios.post(`${API_URL}`, eventData, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  });
  return response.data;
};

export const deleteEvent = async (eventId) => {
  const response = await axios.delete(`${API_URL}/${eventId}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  });
  return response.data;
};
