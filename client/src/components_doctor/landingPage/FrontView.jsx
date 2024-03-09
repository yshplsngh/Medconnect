import React from 'react';
import back from './images/backgr.jpg';
import MonthlyProgressChart from './MonthlyProgressChart';
import { Link } from 'react-router-dom';

// Import GIF images
import todaysAppointmentsGif from './images/appointment.png';
import totalPatientsGif from './images/hospitalisation.png';

const DoctorDashboard = ({totalpat,docname}) => {
  const backgroundImageStyle = {
    backgroundImage: `url(${back})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    opacity: '0.9',
    backdropFilter: 'blur(5px)',
    display: 'flex',
    justifyContent: 'center',
    paddingTop: '50px',
  };

  const mainDivStyle = {
    marginTop: '150px',
  };

  const cardStyle = {
    background: 'rgba(255, 255, 255, 0.8)',
    padding: '1rem',
    borderRadius: '0.5rem',
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
    transition: 'box-shadow 0.3s ease',
    height: 'auto', // Adjust the height to "auto" to make cards expand based on content
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center', // Center content horizontally
    textAlign: 'center', // Center text horizontally
  };

  const buttonStyle = {
    transition: 'background-color 0.3s ease',
  };

  return (
    <div
      className="bg-cover bg-center h-screen mb-12 mt-12"
      style={backgroundImageStyle}
    >
      <div
        className="m-7 p-6 rounded-lg shadow-md mx-auto max-w-3xl"
        style={mainDivStyle}
      >
        <h1 className="text-3xl font-semibold text-gray-800 mb-4">
          {docname}
        </h1>
        <div className="mt-4 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <MonthlyProgressChart height={400} />
          {/* Today's Appointments Section */}
          <div className="rounded-lg shadow-md" style={cardStyle}>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              Today's Appointments
            </h2>
            <p className="text-3xl font-bold text-green-500">{totalpat}</p>
            <img
              src={todaysAppointmentsGif}
              alt="Today's Appointments"
              className="w-32 h-32 mb-2"
            />
          </div>
          {/* Total Patients Section */}
          <div className="rounded-lg shadow-md" style={cardStyle}>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              Total Patients
            </h2>
            <p className="text-3xl font-bold text-blue-500">{totalpat}</p>
            <img
              src={totalPatientsGif}
              alt="Total Patients"
              className="w-32 h-32 mb-2"
            />
          </div>
        </div>
        <div className="flex justify-center gap-8 mt-4">
          <Link
            to="/homeDoc/inbox"
            className="bg-green-500 hover:bg-blue-600 text-white font-semibold py-4 px-8 rounded focus:outline-none focus:shadow-outline-blue"
            style={buttonStyle}
          >
            View Schedule
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DoctorDashboard;