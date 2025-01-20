import { useState, useEffect } from 'react';
import axios from 'axios';
// import './styles/Friends.css';

const Friends = () => {
  const [friends, setFriends] = useState([]);
  const [newFriend, setNewFriend] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFriends = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/friends', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        });
        setFriends(response.data);
      } catch (error) {
        console.error('Erreur lors du chargement des amis', error);
      } finally {
        setLoading(false);
      }
    };

    fetchFriends();
  }, []);

  const handleAddFriend = async () => {
    try {
      const response = await axios.post(
        'http://localhost:3000/api/friends',
        { email: newFriend },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        }
      );
      setFriends([...friends, response.data]);
      setNewFriend('');
    } catch (error) {
      console.error('Erreur lors de l\'ajout d\'un ami', error);
    }
  };

  const handleRemoveFriend = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/api/friends/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      setFriends(friends.filter((friend) => friend.id !== id));
    } catch (error) {
      console.error('Erreur lors de la suppression d\'un ami', error);
    }
  };

  return (
    <div className="friends-container">
      <h2>Mes Amis</h2>
      <input
        type="email"
        placeholder="Ajouter un ami par email"
        value={newFriend}
        onChange={(e) => setNewFriend(e.target.value)}
      />
      <button className="btn-primary" onClick={handleAddFriend}>
        Ajouter
      </button>
      {loading ? (
        <p>Chargement...</p>
      ) : (
        <ul>
          {friends.map((friend) => (
            <li key={friend.id}>
              {friend.name} - {friend.email}
              <button
                className="btn-danger"
                onClick={() => handleRemoveFriend(friend.id)}
              >
                Supprimer
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Friends;
