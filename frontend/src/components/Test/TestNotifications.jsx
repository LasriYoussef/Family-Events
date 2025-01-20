import  { useEffect, useState } from 'react';
import { fetchNotifications, markAsRead } from '../services/notificationService';

const TestNotifications = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const loadNotifications = async () => {
      const data = await fetchNotifications();
      setNotifications(data);
    };

    loadNotifications();
  }, []);

  const handleMarkAsRead = async (id) => {
    await markAsRead(id);
    setNotifications(notifications.filter((n) => n.id !== id));
  };

  return (
    <div>
      <ul>
        {notifications.map((notification) => (
          <li key={notification.id}>
            {notification.message}
            <button onClick={() => handleMarkAsRead(notification.id)}>Marquer comme lu</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TestNotifications;