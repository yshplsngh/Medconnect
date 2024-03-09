import React, { useState } from 'react';
import './appointmentform.css';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import upcoming from "../img/upcoming.gif";

const AppointmentForm = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [message, setMessage] = useState('');

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setMessage('');
  };

  const isDateDisabled = ({ date, view }) => {
    const currentDate = new Date();
    return view === 'month' && date < currentDate;
  };

  const timeSlots = [
    {
      id: 'morning',
      label: '8:00 AM - 12:00 PM',
      available: true,
    },
    {
      id: 'afternoon',
      label: '12:00 PM - 2:00 PM',
      available: true,
    },
    {
      id: 'lateafternoon',
      label: '2:00 PM - 4:00 PM',
      available: false,
    },
    {
      id: 'evening',
      label: '4:00 PM - 6:00 PM',
      available: true,
    },
    {
      id: 'night',
      label: '8:00 PM - 10:00 PM',
      available: true,
    },
  ];

  const handleSlotClick = (slot) => {
    const clickedSlot = timeSlots.find((s) => s.id === slot);

    if (!clickedSlot.available) {
      alert('This slot is not available. Please choose another.');
    } else {
      setSelectedSlot(clickedSlot);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedSlot) {
      alert(Your appointment is scheduled for ${selectedSlot.label} on ${selectedDate.toDateString()}.);
      // You can submit the form data to your backend or perform further actions here
    } else {
      setMessage('Please select a time slot before submitting.');
    }
  };

  return (
    <div className="card">
      <div className="card-header">
        <h1>APPOINTMENT FORM</h1>
      </div>
      <div className="upcoming-container">
        <img src={upcoming} alt="Upcoming" className="upcoming-gif" />
      </div>
      <div className="card-content">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="user" className="appoint">Appointment</label>
            <div className="calendar-time">
              <div className="calendar">
                <Calendar
                  onChange={handleDateChange}
                  value={selectedDate}
                  calendarType="US"
                  showNavigation={true}
                  minDate={new Date()}
                  tileClassName={({ date, view }) => {
                    if (view === 'month') {
                      return 'custom-tile';
                    }
                    return '';
                  }}
                  tileDisabled={isDateDisabled}
                />
                {message && <p className="message">{message}</p>}
              </div>
              <div className="time">
                <p className="current-date">
                  <span className="date-circle">
                    Selected Date: {selectedDate.toDateString()}
                  </span>
                </p>
                <div className="time-slots">
                  {timeSlots.map((slot) => (
                    <button
                      key={slot.id}
                      className={`time-button ${
                        selectedSlot === slot.id ? 'selected' : ''
                      } ${!slot.available ? 'unavailable' : 'available'}`}
                      onClick={() => handleSlotClick(slot.id)}
                    >
                      {slot.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AppointmentForm;