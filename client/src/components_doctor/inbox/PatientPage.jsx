import React from 'react';
import PatientCard from './PatientCard'; // Assuming you have a PatientCard component
import patient1 from './images/doc1.jpg'; // Update image paths as needed
import patient2 from './images/doc2.jpg';
import patient3 from './images/doc3.jpg';
import patient4 from './images/doc4.png';
import patient5 from './images/doc5.jpg';

const patientData = [
  {
    patientName: 'John Smith',
    appointmentDetails: 'Appointment Date: October 10, 2023',
    slotDetails: 'Slot: Morning',
    location: 'Location: Medical Clinic A',
    img: patient1,
    disease: 'Disease: Dental',
    status: 'upcoming',
  },
  {
    patientName: 'Jane Doe',
    appointmentDetails: 'Appointment Date: September 20, 2023',
    slotDetails: 'Slot: Afternoon',
    location: 'Location: Medical Clinic B',
    img: patient2,
    disease: 'Disease: Dental',
    status: 'past',
  },
  {
    patientName: 'Emily Brown',
    appointmentDetails: 'Appointment Date: November 5, 2023',
    slotDetails: 'Slot: Morning',
    location: 'Location: Health Center X',
    img: patient3,
    disease: 'Disease: Orthopedic',
    status: 'upcoming',
  },
  {
    patientName: 'Michael Johnson',
    appointmentDetails: 'Appointment Date: August 15, 2023',
    slotDetails: 'Slot: Evening',
    location: 'Location: Medical Clinic C',
    img: patient4,
    disease: 'Disease: Cardiology',
    status: 'past',
  },
  {
    patientName: 'Sarah Adams',
    appointmentDetails: 'Appointment Date: December 1, 2023',
    slotDetails: 'Slot: Afternoon',
    location: 'Location: Health Center Y',
    img: patient5,
    disease: 'Disease: Dermatology',
    status: 'upcoming',
  },
  {
    patientName: 'Sarah Adams',
    appointmentDetails: 'Appointment Date: December 1, 2023',
    slotDetails: 'Slot: Afternoon',
    location: 'Location: Health Center Y',
    img: patient5,
    disease: 'Disease: Dermatology',
    status: 'upcoming',
  },
  // Add more patient data objects as needed
];

function PatientPage() {
  const upcomingAppointments = patientData.filter((patient) => patient.status === 'upcoming');
  const pastAppointments = patientData.filter((patient) => patient.status === 'past');

  // Function to split an array into chunks of a specified size
  const chunkArray = (array, chunkSize) => {
    const chunks = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      chunks.push(array.slice(i, i + chunkSize));
    }
    return chunks;
  };

  const chunkedUpcomingAppointments = chunkArray(upcomingAppointments, 3);
  const chunkedPastAppointments = chunkArray(pastAppointments, 3);

  return (
    <div className="container mx-auto p-16">
      <h1 className="text-3xl font-semibold mb-4"></h1>

      {/* Upcoming Appointments */}
      <h2 className="text-2xl font-semibold mb-2">Upcoming Appointments</h2>
      <div className="bg-blue-100 rounded-lg shadow-md p-4">
        {chunkedUpcomingAppointments.map((row, rowIndex) => (
          <div className="flex justify-between mb-4" key={rowIndex}>
            {row.map((patient, index) => (
              <div className="w-1/3 px-2" key={index}>
                <PatientCard {...patient} />
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Past Appointments */}
      <h2 className="text-2xl font-semibold mt-4 mb-2">Past Appointments</h2>
      <div>
        {chunkedPastAppointments.map((row, rowIndex) => (
          <div className="flex justify-between mb-4" key={rowIndex}>
            {row.map((patient, index) => (
              <div className="w-1/3 px-2" key={index}>
                <PatientCard {...patient} showButtons={false} />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default PatientPage;