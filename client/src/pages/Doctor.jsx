import React from 'react'
import Singledoctor from '../components/Singledoctor.jsx'
import useDoctor from '../hooks/useDoctor.jsx'

export default function Doctor() {
    const [doctors] = useDoctor();
    return (
        <div className="container mx-auto py-8">
            <div>
                <h2 className="text-3xl md:text-5xl pb-4 md:py-8 text-center primary-color font-bold">
                    Meet Our Doctors
                </h2>
                <p className="md:text-center px-5 md:px-0 text-xl text-justify md:w-2/3 mx-auto mb-12">
                    Our administration and support staff all have exceptional
                    people skills and trained to assist you with all medical
                    enquiries.
                </p>
            </div>
            <div className="grid grid-cols-1 m-5 md:m-0 md:grid-cols-4 gap-8">
                {doctors.map((doctor,index) => (
                    <Singledoctor key={index} doctor={doctor}/>
                ))}
            </div>
        </div>
    )
}
