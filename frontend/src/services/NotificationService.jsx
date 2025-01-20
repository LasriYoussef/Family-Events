import axios from 'axios';

const API_URL = 'http://localhost:3000/api/notifications';

export const fetchNotifications = async () => {
  const response = await axios.get(`${API_URL}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  });
  return response.data;
};

export const markAsRead = async (notificationId) => {
  const response = await axios.put(
    `${API_URL}/${notificationId}/read`,
    {},
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    }
  );
  return response.data;
};
