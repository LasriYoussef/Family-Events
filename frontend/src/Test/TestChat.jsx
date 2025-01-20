import  { useState, useEffect } from 'react';
import { fetchMessages, sendMessage } from '../services/chatService';

const TestChat = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  useEffect(() => {
    const loadMessages = async () => {
      const data = await fetchMessages('chatId123');
      setMessages(data);
    };

    loadMessages();
  }, []);

  const handleSendMessage = async () => {
    const message = await sendMessage('chatId123', newMessage);
    setMessages([...messages, message]);
    setNewMessage('');
  };

  return (
    <div>
      <ul>
        {messages.map((message) => (
          <li key={message.id}>{message.content}</li>
        ))}
      </ul>
      <input
        type="text"
        placeholder="Message"
        value={newMessage}
        onChange={(e) => setNewMessage(e.target.value)}
      />
      <button onClick={handleSendMessage}>Envoyer</button>
    </div>
  );
};

export default TestChat;