import React, { useState } from 'react';

function PersonalService() {
  const [showContactInformation, setShowContactInformation] = useState(true);
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [selectedAmbulanceType, setSelectedAmbulanceType] = useState("");
  const [selectedExtraService, setSelectedExtraService] = useState("");

  const bookAmbulance = (ambulanceType) => {
    setSelectedAmbulanceType(ambulanceType);
    setShowBookingModal(true);
  };

  const cancelBooking = () => {
    setShowBookingModal(false);
    setSelectedAmbulanceType("");
  };

  const confirmBooking = () => {
    alert(`Booking for ${selectedAmbulanceType} with Extra Service: ${selectedExtraService} is in progress.`);
    setShowBookingModal(false);
    setSelectedAmbulanceType("");
    setSelectedExtraService("");
  };

  const toggleContactInformation = () => {
    setShowContactInformation(!showContactInformation);
  };

  const callNumber = (phoneNumber) => {
    window.location.href = `tel:${phoneNumber}`;
  };

  const sendEmail = (email) => {
    window.location.href = `mailto:${email}`;
  };

  const pageStyle = {
    marginTop: '100px',
  };

  return (
    <div className="p-6 bg-gray-100" style={pageStyle}>
      <h1 className="text-3xl font-bold text-center my-8 relative">
        Personal Service
        <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 border-b-2 border-black"></span>
      </h1>

      <div className="flex flex-wrap justify-center -mx-4">
        {/* Card for Personal Ambulance */}
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 mb-8 transform transition-transform hover:scale-105">
          <div className="rounded-lg p-4 shadow-md flex flex-col h-full hover:shadow-lg">
            <img src="https://images.unsplash.com/photo-1662046184230-404233fea380?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YW1idWxhbmNlJTIwY2FyfGVufDB8fDB8fHww&w=1000&q=80" alt="Private Ambulance" className="w-full h-auto rounded mb-4" />
            <h2 className="text-2xl font-semibold mb-2">Personal Ambulance</h2>
            <p className="text-gray-600 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <button onClick={() => bookAmbulance('Personal Ambulance')} className="bg-blue-500 text-white font-semibold px-4 py-2 rounded hover:bg-blue-600 mt-auto transform transition-transform hover:scale-105">
              Book Ambulance
            </button>
          </div>
        </div>
      </div>

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

      {/* Contact Information Section */}
      <div className="fixed inset-x-0 bottom-0 bg-black text-white flex items-center justify-between p-4">
        <div className="flex items-center">
          <span className="mr-2">Contact Information</span>
          <button onClick={toggleContactInformation} className="text-white focus:outline-none">
            <i className="fa fa-chevron-up"></i> {/* You can use an appropriate icon library */}
          </button>
        </div>
        {showContactInformation && (
          <div className="flex items-center space-x-4">
            <span>Address: 1234 Example St, City</span>
            <span onClick={() => callNumber('1234567890')} className="cursor-pointer hover:text-red-500">Phone: +1 (123) 456-7890</span>
            <span onClick={() => sendEmail('info@example.com')} className="cursor-pointer hover:text-red-500">Email: info@example.com</span>
          </div>
        )}
      </div>
    </div>
  );
}

export default PersonalService;
