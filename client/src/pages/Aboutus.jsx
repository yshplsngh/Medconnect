import React from 'react'
import Aboutusfirst from '../components/Aboutusfirst'
import Aboutussecond from '../components/Aboutussecond'
import Footer from '../components_doctor/footer/Footer';

export default function Aboutus() {

    return (
        <div className="">
            <div className="py-12 pt-40">
                <h2 className="text-center text-[#45ccbe] text-6xl">About US</h2>
            </div>
            <Aboutusfirst/>
            <Aboutussecond/>
            <Footer/>
        </div>
    )
}
