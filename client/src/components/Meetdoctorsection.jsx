import React from 'react'
import {Link} from 'react-router-dom';
import useDoctor from '../hooks/useDoctor.jsx'
import Singledoctor from './Singledoctor.jsx';

export default function Meetdoctorsection() {
    const [doctors] = useDoctor();
    return (
        <div className="shadow-lg w-full mx-5">
            <h2 className="text-2xl md:text-5xl pb-4 md:py-8 text-center text-[#45ccbe] font-bold">
                Meet Our Doctors
            </h2>
            <p className="text-justify px-5 md:px-0 md:text-center text-xl md:w-2/3 mx-auto mb-12">
                Our administration and support staff all have exceptional people
                skills and trained to assist you with all medical enquiries.
            </p>
            <div className="grid grid-cols-1 m-5 md:m-0 md:grid-cols-4 sm:grid-cols-2 gap-8">
                {doctors.slice(0, 4).map(doctor => (
                    <Singledoctor key={doctor.docId} doctor={doctor}/>
                ))}
            </div>
            {/* <div className="text-center py-12">
                <button className="bg-color text-lg rounded px-4 py-2 text-white">
                    <Link to="/doctors">All Doctors Profile</Link>
                </button>
            </div> */}
        </div>
    )
}
