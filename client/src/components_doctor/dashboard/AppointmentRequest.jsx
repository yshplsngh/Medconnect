import React, { useState } from 'react';
import p1 from './images/p1.jpg';
import p2 from './images/p2.jpg';
import p3 from './images/p3.jpg';

const AppointmentRequest = ({userarr,doctorspec}) => {
  const [AppointmentData, setAppointmentData] = useState([
    {
      id: 1,
      name: 'Courtney Henry',
      date: '22 Mar, 2023',
      reason: 'Acne Treatment',
      type: 'New Patient',
      img: p1,
    },
    {
      id: 2,
      name: 'Jerome Bell',
      date: '16 June, 2023',
      reason: 'Tooth Cleaning',
      type: 'Old Patient',
      img: p2,
    },
    {
      id: 3,
      name: 'Darrell Steward',
      date: '18 May, 2023',
      reason: 'Skin Whitening',
      type: 'Old Patient',
      img: p3,
    },
  ]);

  const handleCancelAppointment = (index) => {
    if (window.confirm('Are you sure you want to cancel this appointment?')) {
      const updatedAppointmentData = [...AppointmentData];
      updatedAppointmentData.splice(index, 1);
      setAppointmentData(updatedAppointmentData);
      alert('Appointment canceled');
    }
  };
  console.log(userarr);
  return (
    <div className="w-6/8 mx-auto bg-white rounded shadow-md mt-12">
      <div className="px-4 py-3 border-b">
        <h4 className="text-xl font-semibold">Appointment Request</h4>
      </div>
      <div className="p-4">
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white">
            <thead>
              <tr className="bg-gray-100 border-b">
                <th className="py-2 text-left">No.</th>
                <th className="py-2 text-left">Name</th>
                <th className="py-2 text-left">Time</th>
                <th className="py-2 text-left">Date</th>
                <th className="py-2 text-left">Type</th>
                <th className="py-2 text-left">Status</th>
              </tr>
            </thead>
            <tbody>
              {userarr.map((user, index) => (
                <tr key={index} className="border-b">
                  <td className="py-2 text-left">{index+1}</td>
                  <td className="py-2">
                    <div className="flex items-center space-x-2">
                      {/* <img
                        src={appointment.img}
                        alt="User"
                        className="w-8 h-8 rounded-full"
                      /> */}
                      <span>{user.userdetail[0].username}</span>
                    </div>
                  </td>
                  <td className="py-2 text-left">{user.userslottime.time}</td>
                  <td className="py-2 text-left">{user.userslottime.day}</td>
                  {/* <td className="py-2 text-left">{user.reason}</td> */}
                  <td className="py-2 text-left">{doctorspec}</td>
                  <td className="py-2 text-left">
                    <button
                      className="bg-red-500 text-white px-3 py-1 rounded-full"
                      onClick={() => handleCancelAppointment(index)}
                    >
                      Cancel
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AppointmentRequest;