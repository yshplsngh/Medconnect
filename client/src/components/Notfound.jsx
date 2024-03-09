import React from 'react'
import logo from '../img/notfound.jpg'

export default function Notfound() {
    return (
        <div className="text-center pt-32">
            <h2 className="text-3xl font-bold mb-4 text-blue-600">
                No Doctors Found
            </h2>
            <img
                src={logo}
                alt="Not Found GIF"
                className="w-32 h-32 mx-auto rounded-lg shadow-lg"
            />
        </div>
    );
}