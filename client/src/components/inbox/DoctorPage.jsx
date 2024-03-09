import React from 'react';
import DoctorCard from './DoctorCard';
import doc1 from './images/doc1.jpg';
import doc2 from './images/doc2.jpg';
import doc3 from './images/doc3.jpg';
import doc4 from './images/doc4.png';
import doc5 from './images/doc5.jpg';
import Footer from '../Footer';

const doctorData = [
  {
    doctorName: 'Dr. John Doe',
    appointmentDetails: 'Appointment Date: October 10, 2023',
    slotDetails: 'Slot: Morning',
    location: 'Location: Medical Clinic A',
    img: doc1,
    disease: 'Disease: Dental',
    status: 'upcoming',
  },
  {
    doctorName: 'Dr. Jane Smith',
    appointmentDetails: 'Appointment Date: September 20, 2023',
    slotDetails: 'Slot: Afternoon',
    location: 'Location: Medical Clinic B',
    img: doc2,
    disease: 'Disease: Dental',
    status: 'past',
  },
  {
    doctorName: 'Dr. Emily Brown',
    appointmentDetails: 'Appointment Date: November 5, 2023',
    slotDetails: 'Slot: Morning',
    location: 'Location: Health Center X',
    img: doc3,
    disease: 'Disease: Orthopedic',
    status: 'upcoming',
  },
  {
    doctorName: 'Dr. Michael Johnson',
    appointmentDetails: 'Appointment Date: August 15, 2023',
    slotDetails: 'Slot: Evening',
    location: 'Location: Medical Clinic C',
    img: doc4,
    disease: 'Disease: Cardiology',
    status: 'past',
  },
  {
    doctorName: 'Dr. Sarah Adams',
    appointmentDetails: 'Appointment Date: December 1, 2023',
    slotDetails: 'Slot: Afternoon',
    location: 'Location: Health Center Y',
    img: doc5,
    disease: 'Disease: Dermatology',
    status: 'upcoming',
  },
  // Add more doctor data objects as needed
];

function DoctorPage() {
    const upcomingAppointments = doctorData.filter((doctor) => doctor.status === 'upcoming');
    const pastAppointments = doctorData.filter((doctor) => doctor.status === 'past');
  
    return (
      <div className="container mx-auto p-16">
        <h1 className="text-3xl font-semibold mb-4"></h1>
  
        {/* Upcoming Appointments */}
        <h2 className="text-2xl font-semibold mb-2">Upcoming Appointments</h2>
        <div className="bg-blue-100 rounded-lg shadow-md p-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {upcomingAppointments.map((doctor, index) => (
              <DoctorCard {...doctor} key={index} />
            ))}
          </div>
        </div>
  
        {/* Past Appointments */}
        <h2 className="text-2xl font-semibold mt-4 mb-2">Past Appointments</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {pastAppointments.map((doctor, index) => (
            <DoctorCard {...doctor} key={index} />
          ))}
        </div>
        <Footer />
      </div>
    );
  }
  
  export default DoctorPage;