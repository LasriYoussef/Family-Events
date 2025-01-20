import  { useEffect, useState } from 'react';
import { fetchNotifications, markAsRead } from '../../services/NotificationService';

const NotificationList = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const loadNotifications = async () => {
      try {
        const data = await fetchNotifications();
        setNotifications(data);
      } catch (error) {
        console.error('Erreur lors du chargement des notifications', error);
      }
    };

    loadNotifications();
  }, []);

  const handleMarkAsRead = async (id) => {
    try {
      await markAsRead(id);
      setNotifications(notifications.filter((n) => n.id !== id));
    } catch (error) {
      console.error('Erreur lors de la mise à jour de la notification', error);
    }
  };

  return (
    <div className="notifications-container">
      <h3>Notifications</h3>
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

export default NotificationList;
