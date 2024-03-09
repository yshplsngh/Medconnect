import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


function Speciality() {
  const specializations = [
    {
      name: 'General Physician',
      imageUrl: 'https://views.medibuddy.in/offlineconsults/general_physician.png'
    },
    {
      name: 'Pediatrics',
      imageUrl: 'https://views.medibuddy.in/offlineconsults/child_infant_issues.png'
    },
    {
      name: 'Dental',
      imageUrl: 'https://views.medibuddy.in/offlineconsults/Dental.png'
    },
    {
      name: 'Cold and Fever',
      imageUrl: 'https://views.medibuddy.in/offlineconsults/cold_cough_icon.png'
    },
    {
      name: 'Dermatology',
      imageUrl: 'https://views.medibuddy.in/offlineconsults/skin_problems.png'
    },
    {
      name: 'Gynecology',
      imageUrl: 'https://views.medibuddy.in/offlineconsults/women_issues.png'
    },
    {
      name: 'Lab Report Analysis',
      imageUrl: 'https://views.medibuddy.in/offlineconsults/labs_report.png'
    },
    {
      name: 'General Surgery',
      imageUrl: 'https://views.medibuddy.in/offlineconsults/general_surgery.png'
    },
    {
      name: 'Gastroentelogy',
      imageUrl: 'https://views.medibuddy.in/offlineconsults/acidity.png'
    },
    {
      name: 'Orthopadics',
      imageUrl: 'https://views.medibuddy.in/offlineconsults/orthopedics.png'
    },
    {
      name: 'Pragnency Issues',
      imageUrl: 'https://views.medibuddy.in/offlineconsults/pregnancy.png'
    },
    {
      name: 'Ear Nose and Throat',
      imageUrl: 'https://views.medibuddy.in/offlineconsults/ear_nose_throat.png'
    },
    {
      name: 'Neurology',
      imageUrl: 'https://views.medibuddy.in/offlineconsults/neurology.png'
    },
    {
      name: 'Cardiology',
      imageUrl: 'https://views.medibuddy.in/offlineconsults/cardiac_issues.png'
    },
    {
      name: 'Psychology',
      imageUrl: 'https://views.medibuddy.in/offlineconsults/ic_psychology.png'
    },
    {
      name: 'Psychiatry',
      imageUrl: 'https://views.medibuddy.in/offlineconsults/psychiatric.png'
    },
    {
      name: 'Hair Scalp Care',
      imageUrl: 'https://views.medibuddy.in/offlineconsults/hair_scalp_issues.png'
    },
    {
      name: 'Diabetes Consult',
      imageUrl: 'https://views.medibuddy.in/offlineconsults/diabetes.png'
    },
    {
      name: 'Opthalmology',
      imageUrl: 'https://views.medibuddy.in/offlineconsults/ophthalmology.png'
    },
    {
      name: 'Pulmonology',
      imageUrl: 'https://views.medibuddy.in/offlineconsults/pulmonology_new.webp'
    },
    {
      name: 'Nephrology',
      imageUrl: 'https://views.medibuddy.in/offlineconsults/nephrology.png'
    },
    {
      name: 'Physiotherapist',
      imageUrl: 'https://views.medibuddy.in/offlineconsults/pain_management.jpeg'
    },
    {
      name: 'Oncology',
      imageUrl: 'https://views.medibuddy.in/offlineconsults/cancer_issue.png'
    },
    {
      name: 'Infertility',
      imageUrl: 'https://views.medibuddy.in/offlineconsults/conceiving_issues.png'
    },
    {
      name: 'Lactation Consultation',
      imageUrl: 'https://views.medibuddy.in/offlineconsults/breast_cancer.png'
    },
    {
      name: 'Weight Management',
      imageUrl: 'https://views.medibuddy.in/offlineconsults/weight_counselling.webp'
    },
    {
      name: 'Urology',
      imageUrl: 'https://views.medibuddy.in/offlineconsults/newUrology.png'
    },
    {
      name: 'Endocrinology',
      imageUrl: 'https://views.medibuddy.in/offlineconsults/endocrinologist.png'
    },
    {
      name: 'Haematology',
      imageUrl: 'https://views.medibuddy.in/offlineconsults/haematologist.png'
    },
    {
      name: 'Rheumatology',
      imageUrl: 'https://views.medibuddy.in/offlineconsults/rheumatology.png'
    },
    {
      name: 'Gariatric Medicine',
      imageUrl: 'https://views.medibuddy.in/offlineconsults/geriatrician.png'
    },
    {
      name: 'I do not know',
      imageUrl: 'https://views.medibuddy.in/offlineconsults/i_dont_know.png'
    },
    // Add more specializations as needed
  ];
  const navigate = useNavigate();
  const goToAvailability = (specialization) => {
    // You can navigate to the next view with the selected specialization
    // For simplicity, let's assume 'AvailabilityView' is another component
    // You should implement the routing in your application
    const {name} = specialization;
    navigate(`/list/${name}`);
    // console.log(`Selected Specialization:`, specialization);
    // history.push('/my-page', { data });

  };

  // const goToAvailability = (specialization) => {
  //   console.log(`Selected Specialization:`, specialization);
  // };

  const speStyle = {
    marginTop: '80px',
  }

  const [showAvailMain, setShowAvailMain] = useState(false);

  return (
    <div className="h-screen  bg-gray-100 flex flex-col md:flex-row mt-20" style={speStyle}>
      <div className="w-full">
        <div className="container mx-auto p-10 h-screen overflow-scroll">
          <h1 className="text-3xl font-semibold text-center mb-8">Doctor Specializations</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {specializations.map((specialization, index) => (
              <button
                key={index}
                onClick={() => goToAvailability(specialization)}
                className=""
              > 
                <div className="bg-white border border-white hover:border-yellow-500  flex flex-col justify-end rounded-lg items-center h-40 speciality-card-width margin-left-2 shadow-lg mt-2 p-1 text-blue">
                  <div>
                    <img src={specialization.imageUrl} alt="internal image" className="h-16" />
                  </div>
                  <div className="text-xl font-semibold text-center mt-3 mb-5 text-speciality-card-text" style={{ fontSize: '20px', height: '36px' }}>
                    {specialization.name}
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Speciality;