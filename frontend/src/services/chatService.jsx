import axios from 'axios';

const API_URL = 'http://localhost:3000/api/chat';

export const fetchMessages = async (chatId) => {
  const response = await axios.get(`${API_URL}/${chatId}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  });
  return response.data;
};

export const sendMessage = async (chatId, messageContent) => {
  const response = await axios.post(
    `${API_URL}/${chatId}/message`,
    { content: messageContent },
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    }
  );
  return response.data;
};
