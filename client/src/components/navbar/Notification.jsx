import React, { useState } from 'react';

const Notification = () => {
  const [notifications, setNotifications] = useState([
    // ... (same as before)
    { 
        type: 'appointment',
        doctor: 'Dr. Smith',
        date: '2023-09-25',
        time: '10:00 AM'
      },
      { 
        type: 'labResult',
        message: 'New lab results are available.'
      },
      { 
        type: 'medicationReminder',
        message: 'Reminder: Take your medication at 2 PM.'
      },
      // Add more notifications as needed
    ]);
  

  const removeNotification = (index) => {
    const updatedNotifications = [...notifications];
    updatedNotifications.splice(index, 1);
    setNotifications(updatedNotifications);
  };

  return (
    <div className="patient-portal text-center p-10 bg-gradient-to-r min-h-screen">
    <div className='h-auto w-auto bg-white rounded-xl'>
    <div className='p-10'>
      <h1 className="text-4xl font-bold mb-6 text-black">Notifications</h1>
      <div className="max-w-2xl mx-auto">
        {notifications.map((notification, index) => (
          <div 
          key={index}
          className="flex items-center bg-yellow-200 border border-black p-3 mb-6 rounded-lg shadow-md animate_animated animatefadeIn animate_delay-1s"
        >
          {notification.type === 'appointment' && (
            <div className="flex-grow text-black text-left">
              <p className="text-xl font-bold mb-2">Appointment Booked</p>
              <p className="mb-2 font-semibold">Doctor: {notification.doctor}</p>
              <p className="mb-2 font-semibold">Date: {notification.date}</p>
              <p className="mb-2 font-semibold">Time: {notification.time}</p>
            </div>
          )}
          {notification.type !== 'appointment' && (
            <p className='flex-grow text-black text-left font-semibold'>{notification.message}</p>
          )}
          <button
            className="text-black ml-4 font-semibold"
            onClick={() => removeNotification(index)}
          >
            &#10006; Remove
          </button>
        </div>
        ))}
      </div>
      </div>
      </div>
    </div>
  );
};

export default Notification;