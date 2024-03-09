import React, { useState } from 'react';
import tenor from './images/tenor.gif';
import ambu from './images/ambu.gif';

function AmbulanceService() {
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [selectedAmbulanceType, setSelectedAmbulanceType] = useState("");
  const [selectedExtraService, setSelectedExtraService] = useState("");
  const [showPersonalService, setShowPersonalService] = useState(true);

  const ambulances = [
    {
      type: 'Private Hospital Ambulance',
      image: tenor,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      type: 'Government Hospital Ambulance',
      image: ambu,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
  ];

  const bookAmbulance = (ambulanceType) => {
    setSelectedAmbulanceType(ambulanceType);
    setShowBookingModal(true);
  };

  const cancelBooking = () => {
    setShowBookingModal(false);
    setSelectedAmbulanceType("");
  };

  const confirmBooking = () => {
    // Implement your booking logic here
    alert(`Booking for ${selectedAmbulanceType} with Extra Service: ${selectedExtraService} is in progress.`);
    setShowBookingModal(false);
    setSelectedAmbulanceType("");
    setSelectedExtraService("");
  };

  const togglePersonalService = () => {
    setShowPersonalService(!showPersonalService);
  };

  const pageStyle = {
    background: 'linear-gradient(45deg, #f0f0f0, #ffffff)',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '2rem',
  };

  return (
    <div style={pageStyle}>
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-bold">Ambulance Services</h1>
        <div className="relative inline-block mt-4">
          <label className="text-lg pr-2">Personal Ambulance</label>
          <label className="switch">
            <input type="checkbox" checked={showPersonalService} onChange={togglePersonalService} />
            <span className="slider"></span>
          </label>
        </div>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {ambulances.map((ambulance, index) => (
          <div key={index} className="transform transition-transform hover:scale-105">
            <div className="rounded-lg p-4 shadow-2xl flex flex-col h-full hover:shadow-lg">
              <div className="w-40 h-40 rounded-lg overflow-hidden mx-auto mb-4">
                <img src={ambulance.image} alt={ambulance.type} className="w-full h-full object-cover rounded-lg" />
              </div>
              <h2 className="text-2xl font-semibold mb-2">{ambulance.type}</h2>
              <p className="text-gray-600 mb-4">{ambulance.description}</p>
              <button onClick={() => bookAmbulance(ambulance.type)} className="bg-blue-500 text-white font-semibold px-4 py-2 rounded hover:bg-blue-600 mt-auto transform transition-transform hover:scale-105">
                Book Ambulance
              </button>
            </div>
          </div>
        ))}
      </div>

      <select value={selectedExtraService} onChange={(e) => setSelectedExtraService(e.target.value)} className="bg-white border rounded px-4 py-2 my-4">
        <option value="">Personal Service</option>
      </select>

      {/* Modal for booking confirmation */}
      {showBookingModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="bg-white p-4 rounded-lg shadow-md z-10">
            <h2 className="text-xl font-semibold mb-4">Confirm Booking</h2>
            <p className="text-gray-600 mb-4">Do you want to book this ambulance?</p>
            <div className="flex justify-end">
              <button onClick={cancelBooking} className="bg-gray-400 text-white font-semibold px-4 py-2 rounded mr-4 hover:bg-gray-500">Cancel</button>
              <button onClick={confirmBooking} className="bg-blue-500 text-white font-semibold px-4 py-2 rounded hover:bg-blue-600">Book</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default AmbulanceService;
