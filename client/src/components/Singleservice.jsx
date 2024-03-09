import React from 'react'
import {Link } from 'react-router-dom';

export default function Singleservice({ service }) {
    const { title, image, sid } = service;
    return (
        <div className="text-center flex flex-col justify-center items-center border rounded relative">
            <img
                className="mx-auto my-5 w-24 h-24"
                src={image}
                alt=""
            />
            <h2 className="text-lg  text-[#2fa89c]">{title}</h2>
            {/* <button className="bg-[#5fffef] text-black  mt-3 px-4 py-2 rounded-md text-sm">
                <Link to={`/services/${sid}`}>More Info</Link>
            </button> */}
        </div>
    )
}
