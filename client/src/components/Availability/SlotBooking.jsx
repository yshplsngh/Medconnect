import React, { useState } from 'react';
import './appointmentform.css';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import upcoming from '../../img/upcoming.gif';
import axios from 'axios'
import { useLocation, useNavigate } from "react-router-dom";
import useAuth from '../../hooks/useAuth';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AppointmentForm = () => {
  const { tokenfetching } = useAuth();
  const authToken = tokenfetching();
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [message, setMessage] = useState('');
  const location = useLocation();
  const data = location.state;
  console.log(data);
  const navigate = useNavigate();
  const toastOptions = {
    position: "bottom-right",
    autoClose: 4000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };
  const handle = async (e) => {
    e.preventDefault();
    // console.log(selectedDate);
    // console.log(selectedSlot.label);

    try {
      const slotdata = {
        docid: data,
        timeslot: {
          day: selectedDate,
          time: selectedSlot.label,
        }
      };
      const response = await axios.post('http://localhost:5000/api/page/slotbooking', {
        slotdata, authToken
      })
      console.log(response);
      if (!response.status) {
        toast.error("appointment failed", toastOptions);
      } else {
        toast.success("appointment booked", toastOptions);
        navigate('/payment');
      }
    } catch (error) {
      console.log(error);
    }
  }

  const handleDateChange = (date) => {
    setSelectedDate(date);
    // Reset the message when the date changes
    setMessage('');
  };

  const isDateDisabled = ({ date, view }) => {
    // Disable dates before the current date
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
      available: false, // Set this to false for unavailable slots
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

    if (clickedSlot.available) {
      setSelectedSlot(clickedSlot);
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
        <form onSubmit={handle}>
          <div className="form-group">
            <label htmlFor="user" className="appoint">Appointment</label>
            <div className="calendar-time">
              <div className="calendar">
                <Calendar
                  onChange={handleDateChange}
                  value={selectedDate}
                  calendarType="US"
                  showNavigation={true}
                  minDate={new Date()} // Set minDate to the current date
                  tileClassName={({ date, view }) =>
                    view === 'month' && date.getDate() === selectedDate.getDate()
                      ? 'custom-tile current-date'
                      : 'custom-tile'
                  }
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
                    <div
                      key={slot.id}
                      className={`time-button ${selectedSlot === slot.id ? 'selected' : ''
                        } ${!slot.available ? 'unavailable' : 'available'}`}
                      onClick={() => handleSlotClick(slot.id)}
                    >
                      {slot.label}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          {/* <div className="patient-message"> */}
          {/* <label htmlFor="patientMessage">Patient Message</label> */}
          {/* <textarea
              id="patientMessage"
              name="patientMessage"
              rows="4"
              placeholder="Add a message for the patient..."
            ></textarea> */}
          {/* </div> */}
          <div>
            <button>
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AppointmentForm;

