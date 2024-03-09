
import React from 'react';

function AppointmentInfo() {
  // Fetch and display today's appointment, total patients, and upcoming appointments here
  const todayAppointments = 5; // Replace with actual data
  const totalPatients = 100; // Replace with actual data
  const upcomingAppointments = 10; // Replace with actual data

  return (
    <div className="bg-white p-4 rounded-lg shadow-md mt-4">
      <div className="flex justify-between">
        <div>
          <p className="text-lg">Today's Appointments</p>
          <p className="text-2xl font-semibold">{todayAppointments}</p>
        </div>
        <div>
          <p className="text-lg">Total Patients</p>
          <p className="text-2xl font-semibold">{totalPatients}</p>
        </div>
        <div>
          <p className="text-lg">Upcoming Appointments</p>
          <p className="text-2xl font-semibold">{upcomingAppointments}</p>
        </div>
      </div>
    </div>
  );
}

export default AppointmentInfo;
