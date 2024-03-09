import { Link } from "react-router-dom";
import ChatApp from "../chat-app/ChatApp";
const DoctorCard = ({ doctorName, appointmentDetails, slotDetails, location, img, disease }) => {
    return (
      <div className="bg-white shadow-md rounded-lg p-4 mb-4 hover:scale-105 transition duration-300">
        <div className="mb-4">
          <img src={img} alt={`${doctorName}`} className="w-40 h-40 object-cover rounded-full mx-auto" />
        </div>
        <h3 className="text-xl font-semibold text-center">{doctorName}</h3>
        <div className="text-center">
          <p className="text-gray-600 mb-2">{appointmentDetails}</p>
          <p className="text-gray-600 mb-2">{slotDetails}</p>
          <p className="text-gray-600 mb-2">{location}</p>
          <p className="text-gray-600">{disease && `${disease}`}</p>
        </div>
        <div className="flex justify-center mt-4 space-x-4">
          <Link to='/chatApp' className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300">
            Chat with Doctor
          </Link>
          {/* <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300">
            Chat with Doctor
          </button> */}
          <button className="bg-gray-400 text-white px-4 py-2 rounded-lg hover:bg-gray-500 transition duration-300">
            View Doctor
          </button>
        </div>
      </div>
    );
  };
  
  export default DoctorCard;