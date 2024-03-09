// const PatientSlot = ({ patientName, appointmentDetails, slotDetails, location, img, disease }) => {
//   return (
//     <div className="relative bg-gray-100 rounded-lg p-4 mb-4 hover:shadow-lg transition duration-300">
//       <div className="absolute top-0 left-0 w-16 h-16 bg-blue-500 text-white text-center font-semibold rounded-tl-lg rounded-br-lg flex items-center justify-center">
//         {patientName.charAt(0)}
//       </div>
//       <div className="mb-4 ml-16">
//         <img src={img} alt={patientName} className="w-32 h-32 object-cover rounded-full mx-auto" />
//       </div>
//       <h3 className="text-xl font-semibold text-center">{patientName}</h3>
//       <div className="text-center">
//         <p className="text-gray-600 mb-2">{appointmentDetails}</p>
//         <p className="text-gray-600 mb-2">{slotDetails}</p>
//         <p className="text-gray-600 mb-2">{location}</p>
//         <p className="text-gray-600">{disease && `${disease}`}</p>
//       </div>
//       <div className="flex justify-center mt-4 space-x-4">
//         <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300">
//           Chat with Patient
//         </button>
//         <button className="bg-gray-400 text-white px-4 py-2 rounded-lg hover:bg-gray-500 transition duration-300">
//           View Patient
//         </button>
//       </div>
//     </div>
//   );
// };

// export default PatientSlot;


import React from 'react';

const PatientCard = ({ name, age, slot, date, disease, status }) => {
  const handleCancelAppointment = () => {
    alert('Appointment canceled');
  };

  const handleRescheduleAppointment = () => {
    alert('Appointment rescheduled');
  };

  const cardBorderColor = status === 'past' ? 'border-gray-400' : 'border-blue-500';

  return (
    <div className={`bg-white rounded-lg shadow-md ${cardBorderColor} border p-4 w-72 mx-auto mt-6`}>
      <h2 className="text-xl font-semibold">{name}</h2>
      <p><strong>Age:</strong> {age}</p>
      <p><strong>Appointment Slot:</strong> {slot}</p>
      <p><strong>Date:</strong> {date}</p>
      <p><strong>Disease:</strong> {disease}</p>

      <div className="mt-4 flex justify-between">
        {status === 'past' ? (
          <p className="text-gray-600">Appointment is in the past</p>
        ) : (
          <>
            <button
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-full shadow-md focus:outline-none focus:ring focus:ring-red-300"
              onClick={handleCancelAppointment}
            >
              <span className="block">Cancel</span>
              <span className="block">Appointment</span>
            </button>
            <button
              className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-full shadow-md focus:outline-none focus:ring focus:ring-yellow-300"
              onClick={handleRescheduleAppointment}
            >
              <span className="block">Reschedule</span>
              <span className="block">Appointment</span>
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default PatientCard;
