import  { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { fetchMessages, sendMessage } from '../../services/chatService';

const ChatRoom = ({ chatId }) => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  useEffect(() => {
    const loadMessages = async () => {
      try {
        const data = await fetchMessages(chatId);
        setMessages(data);
      } catch (error) {
        console.error('Erreur lors du chargement des messages', error);
      }
    };

    loadMessages();
  }, [chatId]);

  const handleSendMessage = async () => {
    try {
      const message = await sendMessage(chatId, newMessage);
      setMessages([...messages, message]);
      setNewMessage('');
    } catch (error) {
      console.error('Erreur lors de l\'envoi du message', error);
    }
  };

  return (
    <div className="chat-container">
      <h3>Chat</h3>
      <ul>
        {messages.map((msg) => (
          <li key={msg.id}>{msg.content}</li>
        ))}
      </ul>
      <input
        type="text"
        placeholder="Votre message"
        value={newMessage}
        onChange={(e) => setNewMessage(e.target.value)}
      />
      <button onClick={handleSendMessage}>Envoyer</button>
    </div>
  );
};
ChatRoom.propTypes = {
  chatId: PropTypes.string.isRequired,
};

export default ChatRoom;
