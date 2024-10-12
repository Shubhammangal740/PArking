import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './style.css';

const NotificationsApp = () => {
//   const [notifications, setNotifications] = useState([]);
//   const [newNotification, setNewNotification] = useState('');

//   // Fetch all notifications when the component mounts
//   useEffect(() => {
//     axios.get(' http://127.0.0.1:5000/notifications')
//       .then(response => setNotifications(response.data))
//       .catch(error => console.error('Error fetching notifications:', error));
//   }, []);

//   //Add a new notification
//   const handleAddNotification = () => {
//     if (newNotification.trim()) {
//       axios.post(' http://127.0.0.1:5000/notifications', { text: newNotification })
//         .then(response => {
//           setNotifications([...notifications, { text: newNotification }]);
//           setNewNotification('');  // Clear the input field
//         })
//         .catch(error => console.error('Error adding notification:', error));
//     }
//   };

//   return (
//     <div>
//       <h2>Notifications</h2>

//       {/* Input to add new notification */}
//       <input
//         type="text"
//         value={newNotification}
//         onChange={(e) => setNewNotification(e.target.value)}
//         placeholder="Enter new notification"
//       />
//       <button onClick={handleAddNotification}>Add Notification</button>
      
// <ul>
//   {notifications.map((notification, index) => (
//     <li key={index}>{notification.text}</li>
//   ))}
  
// </ul>
// </div>

//   );
};

export default NotificationsApp;
