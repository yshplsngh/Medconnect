import React, { useState } from 'react';

const DoctorPanel = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState(null);

  const doctor = {
    name: 'Dr. John Doe',
    image: 'https://www.writergirl.com/wp-content/uploads/2014/11/Doctor-790X1024.jpg',
    specialty: 'Cardiologist',
    address: '123 Main Street',
    availableDates: ['2023-09-09', '2023-09-10', '2023-09-11'],
    availableTimeSlots: {
      '2023-09-09': ['10:00 AM - 11:00 AM', '11:00 AM - 12:00 PM'],
      '2023-09-10': ['2:00 PM - 3:00 PM', '3:00 PM - 4:00 PM'],
      '2023-09-11': ['10:00 AM - 11:00 AM', '11:00 AM - 12:00 PM']
    }
  };

  const showDateSlots = (date) => {
    setSelectedDate(date);
    setSelectedTimeSlot(null);
  };

  const bookAppointment = (slot) => {
    setSelectedTimeSlot(slot);
    // Add any booking logic here
  };

  return (
    <div className="max-w-lg mx-auto bg-white p-6 shadow-lg rounded-lg mt-8 text-center">
      <div className="mb-4">
        <img src={doctor.image} alt="Doctor Profile" className="w-32 h-32 rounded-full mx-auto mb-2" />
        <h2 className="text-xl font-bold">{doctor.name}</h2>
      </div>

      <p className="text-gray-600">{doctor.specialty}</p>
      <p className="text-gray-600">{doctor.address}</p>

      <div className="mb-4">
        <h3 className="text-lg font-bold mt-4">Available Dates:</h3>
        {doctor.availableDates.map((date, index) => (
          <button
            key={index}
            onClick={() => showDateSlots(date)}
            className={`bg-blue-500 text-white p-2 rounded m-2 focus:outline-none ${selectedDate === date && 'bg-blue-700'}`}
          >
            {date}
          </button>
        ))}
      </div>

      {selectedDate && (
        <div>
          <h3 className="text-lg font-bold mt-4">Available Time Slots:</h3>
          {doctor.availableTimeSlots[selectedDate].map((slot, index) => (
            <button
              key={index}
              onClick={() => bookAppointment(slot)}
              className={`bg-green-500 text-white p-2 rounded m-2 focus:outline-none ${selectedTimeSlot === slot && 'bg-green-700'}`}
            >
              {slot}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default DoctorPanel;
