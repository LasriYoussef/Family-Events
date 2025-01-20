import  { useState } from 'react';
import PropTypes from 'prop-types';

const ChatInput = ({ onSend }) => {
  const [message, setMessage] = useState('');

  const handleSend = () => {
    onSend(message);
    setMessage('');
  };

  return (
    <div className="chat-input-container">
      <input
        type="text"
        placeholder="Écrivez votre message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button onClick={handleSend}>Envoyer</button>
    </div>
  );
};
ChatInput.propTypes = {
  onSend: PropTypes.func.isRequired,
};

export default ChatInput;
