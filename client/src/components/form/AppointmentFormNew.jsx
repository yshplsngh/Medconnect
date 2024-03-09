import React, { useState } from 'react';
import './appointmentform.css';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const AppointmentForm = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedSlot, setSelectedSlot] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
    // You can perform any necessary actions when the date changes here.
  };

  const handleSlotClick = (slot) => {
    setSelectedSlot(slot);
  };

  return (
    <div className="card">
      <div className="card-header">
        <h1>APPOINTMENT FORM</h1>
      </div>
      <div className="card-content">
        <form action="" method="">
          <div className="form-group">
            <label htmlFor="user">Name</label>
            <div className="input">
              <input
                type="text"
                placeholder="First Name"
                name="FirstName"
                id="user"
              ></input>
              <input
                type="text"
                placeholder="Last Name"
                name="LastName"
              ></input>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="user">Appointment</label>
            <div className="calendar-time">
              <div className="calendar">
                <Calendar onChange={handleDateChange} value={selectedDate} />
              </div>
              <div className="time">
                <p className="current-date">
                  Selected Date: {selectedDate.toDateString()}
                </p>
                <div className="time-slots">
                  <button
                    className={`time-button morning ${
                      selectedSlot === 'morning' ? 'selected' : ''
                    }`}
                    onClick={() => handleSlotClick('morning')}
                  >
                    8:00 AM - 12:00 PM
                  </button>
                  <button
                    className={`time-button afternoon ${
                      selectedSlot === 'afternoon' ? 'selected' : ''
                    }`}
                    onClick={() => handleSlotClick('afternoon')}
                  >
                    12:00 PM - 2:00 PM
                  </button>
                  <button
                    className={`time-button afternoon ${
                      selectedSlot === 'afternoon' ? 'selected' : ''
                    }`}
                    onClick={() => handleSlotClick('afternoon')}
                  >
                    2:00 PM - 4:00 PM
                  </button>
                  <button
                    className={`time-button evening ${
                      selectedSlot === 'evening' ? 'selected' : ''
                    }`}
                    onClick={() => handleSlotClick('evening')}
                  >
                    4:00 PM - 6:00 PM
                  </button>
                  <button
                    className={`time-button evening ${
                      selectedSlot === 'evening' ? 'selected' : ''
                    }`}
                    onClick={() => handleSlotClick('evening')}
                  >
                    6:00 PM - 8:00 PM
                  </button>
                  <button
                    className={`time-button night ${
                      selectedSlot === 'night' ? 'selected' : ''
                    }`}
                    onClick={() => handleSlotClick('night')}
                  >
                    8:00 PM - 10:00 PM
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div>
            <button className="submit" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AppointmentForm;
