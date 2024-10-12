// src/components/AddNotification.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddNotification = () => {
  const [newNotification, setNewNotification] = useState('');
  const navigate = useNavigate();

  const handleAddNotification = () => {
    if (newNotification.trim()) {
      axios.post(' http://127.0.0.1:5000/notifications', { text: newNotification })
        .then(() => {
          setNewNotification(''); // Clear input
          navigate('/view-notifications'); // Redirect to notifications page
        })
        .catch(error => console.error('Error adding notification:', error));
    }
  };

  return (
    <div>
      <h2>Add New Notification</h2>
      <input
        type="text"
        value={newNotification}
        onChange={(e) => setNewNotification(e.target.value)}
        placeholder="Enter new notification"
      />
      <button onClick={handleAddNotification}>Add Notification</button>
    </div>
  );
};

export default AddNotification;
