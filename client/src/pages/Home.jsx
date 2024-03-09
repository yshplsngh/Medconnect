import React from 'react';
import Herosection from '../components/Herosection';
import Welcomesection from '../components/Welcomesection';
import Servicesection from '../components/Servicesection';
import Meetdoctorsection from '../components/Meetdoctorsection';
import FaqTemplate from '../components/faq/FaqTemplate';
import DoctorPage from '../components/inbox/DoctorPage';
import Graph from '../components/graphs/Graph';
import Footer from '../components_doctor/footer/Footer';
export default function Home() {
  return (
    <div>
      <div className='home-page-content'>
        {/* <DoctorPage /> */}
        <Herosection/>
        {/* <Graph/> */}
        <Welcomesection/>
        <Servicesection/>
        {/* <Meetdoctorsection/> */}
        <FaqTemplate />
        <Footer />
      </div>
    </div>
  )
}
