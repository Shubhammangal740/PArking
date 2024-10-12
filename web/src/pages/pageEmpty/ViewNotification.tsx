// src/components/ViewNotifications.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ViewNotifications = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:5000/notifications')
      .then(response => setNotifications(response.data))
      .catch(error => console.error('Error fetching notifications:', error));
  }, []);

  return (
    <div>
      <h2>All Notifications</h2>
      <ul>
        {notifications.map((notification, index) => (
          <li key={index}>{notification.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default ViewNotifications;
