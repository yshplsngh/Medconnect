import React, { useEffect, useState } from 'react'
import FrontView from '../components_doctor/landingPage/FrontView'
import Dashboard from '../components_doctor/landingPage/Dashboard'
import SliderPage from '../components_doctor/landingPage/SliderPage'
import AppointmentRequest from '../components_doctor/dashboard/AppointmentRequest'
import Footer from '../components_doctor/footer/Footer'
import SideBar_Doc from '../components_doctor/SideBar_Doc/SideBarDoc.jsx';
import axios from 'axios'
import useAuth from '../hooks/useAuth.js';

function HomePage_doc() {
  const {tokenfetching} = useAuth();
  const authToken = tokenfetching();
  const [alldata,setalldata] = useState([]);
  const [totalpat,settotalpat] = useState(0);
  const [docname,setdocname] = useState('');
  const [userarr,setuserarr] = useState([]);
  const [doctorspec,setdoctorspec] = useState('');
  const fetchdata = async () =>{
    try {
      const response = await axios.post('http://localhost:5000/api/page/getslots',{
        authToken
      });
      if(response.data.status){
        // console.log(response.data);
        settotalpat(response.data.userDataArray.length-1);
        setdocname(response.data.userDataArray[0][0].firstName +" "+ response.data.userDataArray[0][0].lastName)
        const arr = response.data.userDataArray;
        setuserarr(arr.slice(1));
        // console.log(arr.slice(1));
        setdoctorspec(response.data.userDataArray[0][0].specialization);
        console.log();

      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(()=>{
    fetchdata();
  },[])

  return (
    <div>
      {/* <Section2/> */}
      {/* <SideBar_Doc/> */}
      <FrontView totalpat={totalpat} docname={docname}/>
      <Dashboard/>
      <AppointmentRequest userarr={userarr} doctorspec={doctorspec}/>
      <SliderPage />
      <Footer/>
    </div>
  )
}

export default HomePage_doc;



