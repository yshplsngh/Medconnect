import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import avatar from '../../img/avatar.jpg';
import Loading from '../Loading.jsx';
import useAuth from '../../hooks/useAuth';
import Notfound from '../Notfound';

function Availability() {
  const { name } = useParams();
  const [userLocation, setUserLocation] = useState(null);
  const [result, setResult] = useState({});
  const [status, setStatus] = useState(false);
  const { loading, setLoading, tokenfetching } = useAuth();
  const navigate = useNavigate();
  // const [docId,setDocId] = useState('');
  // const [comp,setComp] = 
  // console.log(localToken);
  // const token = localStorage.getItem('');
  const toastOptions = {
    position: "bottom-right",
    autoClose: 4000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };


  useEffect(() => {
    setLoading(true);
    // if ("geolocation" in navigator) {
    //   navigator.geolocation.getCurrentPosition(
    //     (position) => {
    //       const newLatitude = position.coords.latitude;
    //       const newLongitude = position.coords.longitude;
    //       // console.log("user",newLatitude);
    //       // console.log("user",newLongitude);
    //       setUserLocation({ latitude: newLatitude, longitude: newLongitude });
    //     },
    //     (error) => {
    //       setUserLocation(null);
    //       if (error.code === 1) {
    //         toast.error("error! while getting your location!! (demo delete it)", toastOptions);
    //       }
    //     }
    //   );
    // }

    try {
      const fetchdata = async () => {
        const authToken = tokenfetching();
        const response = await axios.post("http://localhost:5000/api/page/getspecialization", {
          name, authToken,
        });
        console.log(response);

        if (response.data.status === false) {
          setStatus(response.data.status);
          setLoading(false);
        } else {
          const data = response.data.doctor;
          setResult(data);
          setStatus(response.data.status);
          setLoading(false);
        }
        console.log(response.data.doctor);
      }
      fetchdata();
    } catch (error) {
      console.log(error);
    }
  }, []);

  const handleclick = (id) =>{
    console.log(id);
    navigate('/slot-booking', { state:id});
  }

  return (
    <div className="">
      {loading ? <Loading /> : (
        status ? (
          <div className='p-10 mt-20'>
            <h1 className="text-3xl font-semibold text-center mb-8">Doctors Specializing in {name}</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {result.map((res, index) => {
                // const ulat = userLocation.latitude;
                // const ulon = userLocation.longitude;
                // const dlat = res.location[0];
                // const dlon = res.location[1];
                // console.log(dlat);
                // console.log(dlon);


                // const earthRadiusKm = 6371;

                // const dLat = (dlat - ulat) * (Math.PI / 180);
                // const dLon = (dlon - ulon) * (Math.PI / 180);
                // // console.log(dLat);
                // // console.log(dLon);

                // const a =
                //   Math.sin(dLat / 2) * Math.sin(dLat / 2) +
                //   Math.cos(ulat * (Math.PI / 180)) *
                //   Math.cos(dlat * (Math.PI / 180)) *
                //   Math.sin(dLon / 2) *
                //   Math.sin(dLon / 2);

                // const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

                // const distanceInKm = earthRadiusKm * c;
                // console.log(distanceInKm);

                return (
                  <div key={index} className="bg-white border border-white hover:border-yellow-500 rounded-lg shadow-xl p-6 text-black">
                    <div className="flex justify-between items-center">
                      <div className="text-left">
                        <h2 className="text-2xl font-semibold">{res.firstName} {res.lastName}</h2>
                        <p className="text-yellow-800 text-lg font-style: italic">{res.specialization}</p>
                      </div>
                      <div className="w-24 h-24 bg-white rounded-full">
                        <img src={avatar} alt={`Doctor ${index + 1}`} className="w-24 h-24 rounded-full" />
                      </div>
                    </div>
                    <div className="text-center mt-4">
                      <p className="text-yellow-800 font-style: italic">Experience : {res.yearsOfPractice} years</p>
                      <p className="text-yellow-800 font-style: italic">Contact: {res.contactNumber}</p>
                    </div>
                    {/* <div>{distanceInKm ? distanceInKm : "not found"}</div> */}
                    <button onClick={() => handleclick(res._id)} className="bg-yellow-600 hover:bg-yellow-500 text-white font-semibold px-4 py-2 rounded-full mt-4 mx-auto block focus:outline-none">
                      Book Appointment
                    </button>
                    <Link to={'/slot-booking'}>

                    </Link>
                  </div>
                )
              })}
            </div>
          </div>
        ) : (
          <Notfound />
        )
      )}
      <ToastContainer/>
    </div>
  );
}

export default Availability;


