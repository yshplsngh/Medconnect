import React from 'react';
import HeroBg from '../img/bgmain.jpg';
import { Link } from 'react-router-dom';
import AppointmentForm from '../components/AppointmentForm/AppointmentForm'

export default function Herosection() {
    return (
        <div
            className={`overflow-hidden`} // Add the CSS class here
            style={{
                background: `url(${HeroBg})`,
                backgroundRepeat: 'no-repeat',
                backgroundAttachment: 'fixed',
                backgroundSize: 'cover',
                backgroundPosition:'center',
            }}
        >
            <div className="container mx-auto py-24 pl-16">
                <div className="w-full md:w-2/4">
                    <div className="glass-effect rounded-md my-12 p-8">
                        <h1 className="text-white text-3xl md:text-6xl font-semibold my-4">
                            Find The Best Doctor Near By You!
                        </h1>
                        <p className="text-white text-base md:text-xl leading-7">
                            Qualified doctors available six days a week, view
                            our timetable to make an appointment. Please feel
                            free to contact our friendly reception staff with
                            any general or medical inquiry.
                        </p>
                        <button className="bg-[#33a398] text-black py-2 px-4 mt-4 rounded hover:bg-[#45ccbe] hover:scale-102 focus:outline-none focus:ring-2 focus:ring-primary-color">
                            <Link to="/list"><b>Book an Appointment</b></Link>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
