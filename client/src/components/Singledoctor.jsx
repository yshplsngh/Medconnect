import React from 'react'
import { NavLink } from 'react-router-dom';

export default function Singledoctor({ doctor }) {
    const { docImg, docName, docPosition, docId } = doctor;
    return (
        <div className="text-center border shadow-sm p-4 rounded-md flex flex-col justify-center items-center">
            <img
                className="w-full border ring-1 rounded-lg "
                src={docImg}
                alt=""
            />
            <div className="relative flex flex-col justify-center items-center">
                <h2 className="primary-color font-bold">{docName}</h2>
                <h2>{docPosition}</h2>
                <div className='absolute bottom-0 '>
                    <button className="bg-[#5fffef] text-black rounded-lg">
                        <NavLink to={`/doctors/${docId}`}>More Info</NavLink>
                    </button>
                </div>
            </div>
        </div>
    )
}